import styled from "styled-components";

const Result = styled.li`
	height: 2vw;
	background-color: #fff;
	border: 1px solid black;
	border-radius: 10px;
	font-size: 1vw;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: all 0.1s ease;
	&:hover {
		transform: scale(1.07);
	}
`;

const ResultsItem: React.FC = () => {
	return (
		<>
			<Result>Пользователь</Result>
		</>
	);
};

export default ResultsItem;
