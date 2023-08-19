import { FC, useContext, useEffect, useState } from "react";
import {
	Arrow,
	Bar,
	LoadButton,
	LoaderContainer,
	NumberOfPages,
	Page,
	PageLink,
	SelectedPage,
} from "./styles";
import SearchContext from "../../../../Contexts/searchContext";

interface ResultsPagesProps {
	currentPage: number;
	currentPageRange: [number, number];
	totalPages: number;
	onPageChange: (page: number) => void;
	handleRight: () => void;
	handleLeft: () => void;
	handleLoad: () => void;
	searchIsRun: boolean;
}

const ResultsPages: FC<ResultsPagesProps> = ({
	currentPage,
	currentPageRange,
	totalPages,
	onPageChange,
	handleRight,
	handleLeft,
	handleLoad,
	searchIsRun,
}) => {
	const [startPage, endPage] = currentPageRange;

	const visiblePageNumbers = [...Array(endPage - startPage + 1)].map(
		(_, index) => index + startPage
	);

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	const {
	usersArray,
} = useContext(SearchContext) ?? {
	usersArray: [],
};



	const [isDisabled, setIsDisabled] = useState<boolean>(true);

useEffect(() => {
	setIsDisabled(true);
	if (usersArray.length !== 0) {
		setTimeout(() => {
			setIsDisabled(false);
		}, 2000);
	}
}, [usersArray.length]);

	return (
	<>
		{" "}
		<NumberOfPages>
			<Arrow onClick={handleLeft}>←</Arrow>
			{visiblePageNumbers.map((pageNumber) => (
				<Page key={pageNumber}>
					<PageLink onClick={() => handlePageChange(pageNumber)}>
						{pageNumber === currentPage ? (
							<SelectedPage>{pageNumber}</SelectedPage>
						) : (
							pageNumber
						)}
					</PageLink>
				</Page>
			))}
			<Arrow onClick={handleRight}>→</Arrow>
			{searchIsRun ? (
				""
			) : 
			isDisabled ? (
					<LoaderContainer className="loader">
						<Bar className="bar1" />
						<Bar className="bar2" />
						<Bar className="bar3" />
						<Bar className="bar4" />
						<Bar className="bar5" />
						<Bar className="bar6" />
					</LoaderContainer>
				) : (
					<LoadButton disabled={isDisabled} onClick={handleLoad}>
						Больше...
					</LoadButton>
				)}
		</NumberOfPages>
	</>
);
};

export default ResultsPages;
