import { FC } from "react";
import { NumberOfPages, Page, PageLink, SelectedPage } from "./styles";

interface ResultsPagesProps {
	currentPage: number;
	totalResults: number;
	resultsPerPage: number;
	onPageChange: (page: number) => void;
}

const ResultsPages: FC<ResultsPagesProps> = ({
	currentPage,
	totalResults,
	resultsPerPage,
	onPageChange,
}) => {
	const totalPages = Math.ceil(totalResults / resultsPerPage);

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	return (
		<>
			<NumberOfPages>
				{[...Array(totalPages)].map((_, index) => (
					<Page key={index}>
						<PageLink onClick={() => handlePageChange(index + 1)}>
							{index + 1 === currentPage ? (
								<SelectedPage>{index + 1}</SelectedPage>
							) : (
								index + 1
							)}
						</PageLink>
					</Page>
				))}
			</NumberOfPages>
		</>
	);
};

export default ResultsPages;
