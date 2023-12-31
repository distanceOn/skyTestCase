/* eslint-disable react-hooks/exhaustive-deps */
import React, {
	Dispatch,
	SetStateAction,
	createContext,
	useCallback,
	useEffect,
	useState,
} from "react";
import {
	User,
	getAllUsers,
	getUsersByLogin,
} from "../pages/Main/Search/SearchRequest/searchRequest";


interface SharedState {
	usersArray: User[];
	setUsersArray: Dispatch<SetStateAction<User[]>>;
	totalPages: number;
	setTotalPages: Dispatch<SetStateAction<number>>;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	currentPageRange: [number, number];
	setCurrentPageRange: Dispatch<SetStateAction<[number, number]>>;
	resultsPerPage: number;
	fetchAllUsers: (newList: boolean) => Promise<void>;
	currentResults: User[];
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
	fetchUsersByLogin: (login: string) => Promise<void>;
	searchIsRun: boolean;
	selectedOption: string | null;
	handleRadioChange: (
		event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>
	) => void;
}

const SearchContext = createContext<SharedState | undefined>(undefined);

export function SearchContextProvider({
	children,
}: React.PropsWithChildren<object>) {
	const [usersArray, setUsersArray] = useState<User[]>([]);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [currentPageRange, setCurrentPageRange] = useState<[number, number]>([
		1, 10,
	]);
	const resultsPerPage = 10;

	const [indexOfLastResult, setIndexOfLastResult] = useState<number>(
		currentPage * resultsPerPage
	);
	useEffect(() => {
		setIndexOfLastResult(currentPage * resultsPerPage);
	}, [currentPage]);

	const [indexOfFirstResult, setIndexOfFirstResult] = useState<number>(
		indexOfLastResult - resultsPerPage
	);

	useEffect(() => {
		setIndexOfFirstResult(indexOfLastResult - resultsPerPage);
	}, [indexOfLastResult]);

	const [currentResults, setCurrentResults] = useState<User[]>(
		usersArray.slice(indexOfFirstResult, indexOfLastResult)
	);
	useEffect(() => {
		if (Array.isArray(usersArray)) {
			setCurrentResults(usersArray.slice(indexOfFirstResult, indexOfLastResult));
		}
	}, [indexOfFirstResult, indexOfLastResult, usersArray]);

	const [searchValue, setSearchValue] = useState<string>("");

	const [searchIsRun, setSearchIsRun] = useState<boolean>(false);

	const [selectedOption, setSelectedOption] = useState<string | null>(null);

	const handleRadioChange = (
		event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>
	) => {
		if (selectedOption !== null) {
			if (selectedOption === event.currentTarget.value) {
				setSelectedOption(null);
			} else {
				setSelectedOption(event.currentTarget.value);
			}
		} else {
			setSelectedOption(event.currentTarget.value);
		}
	};

	const fetchAllUsers = useCallback(async (newList: boolean) => {
		try {
			const users = await getAllUsers(100);

			if (newList) {
				setUsersArray(users);
			} else {
				setUsersArray((prevUsersArray) => [...prevUsersArray, ...users]);
			}
			setSearchIsRun(false);
		} catch (error) {
			console.log("Error", error);
		}
	}, []);

	const fetchUsersByLogin = useCallback(
		async (login: string = searchValue) => {
			try {
				if (searchValue === "") {
					const users = await getAllUsers(100);

					setUsersArray(users);
					setCurrentPage(1);
				} else {
					const users = await getUsersByLogin(login);
					setSearchIsRun(true);
					setCurrentPage(1);
					setUsersArray(users);
				}
			} catch (error) {
				console.log(error);
			}
		},
		[searchIsRun, searchValue]
	);

	useEffect(() => {
		if (searchValue === "" && searchIsRun === true) {
			fetchAllUsers(true);
		}
	}, [searchValue, searchIsRun]);

	useEffect(() => {
		setTotalPages(Math.ceil(usersArray.length / resultsPerPage));
	}, [usersArray]);

	useEffect(() => {
		if (totalPages >= 10 && totalPages % 10 === 0) {
			setCurrentPageRange([totalPages - 9, totalPages]);
		} else if (totalPages < 10) {
			setCurrentPageRange([totalPages - (totalPages - 1), totalPages]);
		}
	}, [totalPages]);

	useEffect(() => {
		if (currentPageRange[0] > currentPage && totalPages % 10 === 0) {
			setCurrentPageRange([currentPage - 9, currentPage]);
		} else if (currentPageRange[1] < currentPage && totalPages % 10 === 0) {
			setCurrentPageRange([currentPage, currentPage + 9]);
		}
	}, [currentPage]);

	const getShuffledUsers = (add: User[]) => {
		console.log(add);
		let shuffledUsers = [...add];

		// Алгоритм случайной перестановки (Fisher-Yates shuffle)
		for (let i = shuffledUsers.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledUsers[i], shuffledUsers[j]] = [shuffledUsers[j], shuffledUsers[i]];
		}

		if (selectedOption === "desc") {
			shuffledUsers.sort((a, b) => {
				if (a.repos_count === null) return 1;
				if (b.repos_count === null) return -1;
				return b.repos_count - a.repos_count;
			});
		} else if (selectedOption === "asc") {
			shuffledUsers.sort((a, b) => {
				if (a.repos_count === null) return 1;
				if (b.repos_count === null) return -1;
				return a.repos_count - b.repos_count;
			});
		}
		return shuffledUsers;
	};


	useEffect(()=>{
		if(selectedOption !== null){
			setSelectedOption(null);
			setUsersArray(getShuffledUsers(usersArray));
		}
	}, [usersArray.length])

	useEffect(() => {
		setUsersArray(getShuffledUsers(usersArray));
	}, [selectedOption]);



	const sharedState: SharedState = {
		usersArray,
		setUsersArray,
		totalPages,
		setTotalPages,
		currentPage,
		setCurrentPage,
		currentPageRange,
		setCurrentPageRange,
		resultsPerPage,
		fetchAllUsers,
		currentResults,
		searchValue,
		setSearchValue,
		fetchUsersByLogin,
		searchIsRun,
		selectedOption,
		handleRadioChange,
	};

	return (
		<SearchContext.Provider value={sharedState}>{children}</SearchContext.Provider>
	);
}

export default SearchContext;
