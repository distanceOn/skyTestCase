/* eslint-disable react-hooks/exhaustive-deps */
import ResultsPages from "./ResultsPages/ResultsPages";
import { useContext, useEffect } from "react";
import ResultsItem from "./ResultsItem/ResultsItem";
import SearchContext from "../../../Contexts/searchContext";
import { List, StyledSVG } from "./styles";



const Results: React.FC = () => {
	const {
		usersArray,
		totalPages,
		currentPage,
		setCurrentPage,
		currentPageRange,
		fetchAllUsers,
		currentResults,
		searchIsRun,
	} = useContext(SearchContext) ?? {
		usersArray: [],
		totalPages: 0,
		currentPage: 1,
		setCurrentPage: () => {},
		currentPageRange: [1, 10],
		fetchAllUsers: () => {},
		currentResults: [],
		searchIsRun: false,
	};

	useEffect(() => {
		console.log("UseEffect!");
		fetchAllUsers(true);
	}, [fetchAllUsers]);

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

	const handleLoad = async () => {
		try {
			await fetchAllUsers(false);
			setCurrentPage(currentPageRange[1] + 1);
		} catch (error) {
			console.log(error);
		}
	};

	if (usersArray.length === 0) {
		
		return (
			<StyledSVG
        className="spinner"
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </StyledSVG>
		); // Покажем сообщение о загрузке
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
				handleLoad={handleLoad}
				searchIsRun={searchIsRun}
			/>
		</>
	);
};

export default Results;
