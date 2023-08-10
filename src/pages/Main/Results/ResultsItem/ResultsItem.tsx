import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "../../Search/SearchRequest/searchRequest";
import axios from "axios";

interface ResultsItemProps {
	user: User;
}

const Result = styled.li`
	height: 5vw;
	background-color: #fff;
	border: 1px solid black;
	border-radius: 10px;
	font-size: 1vw;

	cursor: pointer;
	transition: all 0.1s ease;

	&:hover {
		transform: scale(1.07);
	}
	&:not(:last-child) {
		margin-bottom: 1vw;
	}
`;

const Avatar = styled.img`
	height: 100%;
	width: 5vw;
	box-sizing: border-box;
	border-right: 1px solid black;
	border-radius: 8px;
`;

const Login = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	padding: 0 1vw;
	height: 100%;
	color: #fff;
	background-color: #3c0457;
	border-left: 1px solid black;
	border-radius: 8px;
`;

const Link = styled.a`
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-decoration: none;
`;

const Repos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1vw;
`;

const ReposTitle = styled.h5`
	width: fit-content;
	height: fit-content;
`;

const ReposCount = styled.p`
	height: fit-content;
	width: fit-content;
`;

const ResultsItem: FC<ResultsItemProps> = ({ user }) => {
	const [reposCount, setReposCount] = useState<number | null>(null);

	const fetchReposCount = async () => {
		try {
			const data = await axios.get(user.repos_url);
			setReposCount(data.data.length);
		} catch (error) {
			console.log(error);
			throw error;
		}
	};

	useEffect(() => {
		fetchReposCount();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Result title="Перейти в профиль">
				<Link href={user.html_url} target="_blank">
					<Avatar src={user.avatar_url} />
					<Repos>
						<ReposTitle>Количество репозиториев:</ReposTitle>
						<ReposCount>{reposCount === null ? "..." : reposCount}</ReposCount>
					</Repos>
					<Login>{user.login}</Login>
				</Link>
			</Result>
		</>
	);
};

export default ResultsItem;
