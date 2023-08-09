import { FC } from "react";
import {
	Arrow,
	LoadButton,
	NumberOfPages,
	Page,
	PageLink,
	SelectedPage,
} from "./styles";

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
				{searchIsRun ? "" : <LoadButton onClick={handleLoad}>Больше...</LoadButton>}
			</NumberOfPages>
		</>
	);
};

export default ResultsPages;
