import styled from "styled-components";
import ResultsItem from "./ResultsItem/ResultsItem";
import ResultsPages from "./ResultsPages/ResultsPages";

const List = styled.ul`
	width: 30vw;
	height: 50vw;
	border: none;
	border-left: 1px solid black;
	border-right: 1px solid black;
	overflow: hidden;
	padding: 1vw;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Results: React.FC = () => {
	const numberOfResults = 10;
	return (
		<>
			<List>
				{[...Array(numberOfResults)].map((_, index) => (
					<ResultsItem key={index} />
				))}{" "}
			</List>
			<ResultsPages />
		</>
	);
};

export default Results;
