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
}

const ResultsPages: FC<ResultsPagesProps> = ({
	currentPage,
	currentPageRange,
	totalPages,
	onPageChange,
	handleRight,
	handleLeft,
	handleLoad,
}) => {
	const [startPage, endPage] = currentPageRange;

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
				{[...Array(endPage - startPage + 1)].map((_, index) => (
					<Page key={index}>
						<PageLink onClick={() => handlePageChange(index + startPage)}>
							{index + startPage === currentPage ? (
								<SelectedPage>{index + startPage}</SelectedPage>
							) : (
								index + startPage
							)}
						</PageLink>
					</Page>
				))}
				<Arrow onClick={handleRight}>→</Arrow>
				<LoadButton onClick={handleLoad}>Больше...</LoadButton>
			</NumberOfPages>
		</>
	);
};

export default ResultsPages;
