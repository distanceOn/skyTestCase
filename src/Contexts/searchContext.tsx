import React, {
	Dispatch,
	SetStateAction,
	createContext,
	useCallback,
	useState,
} from "react";
import {
	User,
	getAllUsers,
} from "../pages/Main/Search/SearchRequest/searchRequest";

interface SharedState {
	usersArray: User[];
	totalPages: number;
	setTotalPages: Dispatch<SetStateAction<number>>;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	currentPageRange: [number, number];
	setCurrentPageRange: Dispatch<SetStateAction<[number, number]>>;
	resultsPerPage: number;
	fetchAllUsers: () => Promise<void>;
	currentResults: User[];
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

	const indexOfLastResult = currentPage * resultsPerPage;
	const indexOfFirstResult = indexOfLastResult - resultsPerPage;
	const currentResults = usersArray.slice(indexOfFirstResult, indexOfLastResult);

	const fetchAllUsers = useCallback(async () => {
		try {
			const users = await getAllUsers(100);
			setUsersArray((prev) => [...prev, ...users]);
		} catch (error) {
			console.log("Error", error);
		}
	}, []);

	const sharedState: SharedState = {
		usersArray,
		totalPages,
		setTotalPages,
		currentPage,
		setCurrentPage,
		currentPageRange,
		setCurrentPageRange,
		resultsPerPage,
		fetchAllUsers,
		currentResults,
	};

	return (
		<SearchContext.Provider value={sharedState}>{children}</SearchContext.Provider>
	);
}

export default SearchContext;
