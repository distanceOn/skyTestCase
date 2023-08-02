import styled from "styled-components";

const NumberOfPages = styled.ul`
	width: fit-content;
	height: fit-content;
	display: flex;
`;

const Page = styled.li`
	width: fit-content;
	height: fit-content;
`;

const PageLink = styled.a`
	text-decoration: none;
	cursor: pointer;
`;

const ResultsPages: React.FC = () => {
	return (
		<>
			<NumberOfPages>
				{[...Array(3)].map((_, index) => (
					<Page key={index}>
						<PageLink>{index + 1}</PageLink>
					</Page>
				))}
			</NumberOfPages>
		</>
	);
};

export default ResultsPages;
