import { FC } from "react";
import styled from "styled-components";
import { User } from "../../Search/SearchRequest/searchRequest";

interface ResultsItemProps {
	user: User;
}

const Result = styled.li`
	height: 5vw;
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
	&:not(:last-child) {
		margin-bottom: 1vw;
	}
`;

const ResultsItem: FC<ResultsItemProps> = ({ user }) => {
	return (
		<>
			<Result>{user.login}</Result>
		</>
	);
};

export default ResultsItem;
