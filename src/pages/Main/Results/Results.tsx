import styled from "styled-components";
import ResultsPages from "./ResultsPages/ResultsPages";
import { User, getAllUsers } from "../Search/SearchRequest/searchRequest";
import { useCallback, useEffect, useState } from "react";
import ResultsItem from "./ResultsItem/ResultsItem";

const List = styled.ul`
	width: 30vw;
	height: 50vw;
	border: none;
	border-left: 1px solid black;
	overflow-y: scroll;
	padding: 1vw;

	scrollbar-width: thin; /* для Firefox */
	scrollbar-color: #fff #000; /* для Firefox */

	&::-webkit-scrollbar {
		width: 1px; /* Ширина полосы прокрутки */
	}

	&::-webkit-scrollbar-thumb {
		background-color: #fff; /* Цвет полосы прокрутки */
		border-radius: 4px; /* Закругление углов полосы прокрутки */
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: #146634; /* Цвет полосы прокрутки при наведении курсора */
		cursor: pointer;
	}

	&::-webkit-scrollbar-track {
		background-color: #000; /* Цвет фона за полосой прокрутки */
		border-radius: 4px; /* Закругление углов фона полосы прокрутки */
	}
`;

const Results: React.FC = () => {
	const [usersArray, setUsersArray] = useState<User[]>([]);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [currentPageRange, setCurrentPageRange] = useState<[number, number]>([
		1, 10,
	]);
	const resultsPerPage = 10;

	const fetchData = useCallback(async () => {
		try {
			const users = await getAllUsers(100);
			setUsersArray(users);
		} catch (error) {
			console.log("Error", error);
		}
	}, []);

	useEffect(() => {
		console.log("UseEffect!");
		fetchData();
	}, [fetchData]);

	useEffect(() => {
		setTotalPages(Math.ceil(usersArray.length / resultsPerPage));
	}, [usersArray]);

	useEffect(() => {
		setCurrentPageRange([totalPages - 9, totalPages]);
	}, [totalPages]);

	const indexOfLastResult = currentPage * resultsPerPage;
	const indexOfFirstResult = indexOfLastResult - resultsPerPage;
	const currentResults = usersArray.slice(indexOfFirstResult, indexOfLastResult);

	const handleRight = () => {
		if (currentPage < totalPages) {
			setCurrentPage((prev) => prev + 1);
		}
	};

	const handleLeft = () => {
		if (currentPage > 1) {
			setCurrentPage((prev) => prev - 1);
		}
	};

	if (usersArray.length === 0) {
		return <div>Loading...</div>; // Покажем сообщение о загрузке
	}

	return (
		<>
			<List>
				{currentResults.map((user, index) => {
					return <ResultsItem key={index} user={user} />;
				})}
			</List>
			<ResultsPages
				currentPageRange={currentPageRange}
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={(page: number) => setCurrentPage(page)}
				handleRight={handleRight}
				handleLeft={handleLeft}
			/>
		</>
	);
};

export default Results;
