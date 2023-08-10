import { FC, useCallback, useEffect, useState } from "react";
import {
	User,
	getUserCountOfRepos,
} from "../../Search/SearchRequest/searchRequest";
import {
	Avatar,
	Link,
	Login,
	Repos,
	ReposCount,
	ReposTitle,
	Result,
} from "./styles";
import ProfileIcon from "../../../../assets/profile-svgrepo-com.svg";

interface ResultsItemProps {
	user: User;
}

const ResultsItem: FC<ResultsItemProps> = ({ user }) => {
	const [reposCount, setReposCount] = useState<number | null>(null);
	const [avatarRef, setAvatarRef] = useState<string | null>(null);

	const fetchCountOfRepos = useCallback(async (url: string) => {
		try {
			const count = await getUserCountOfRepos(url);
			setReposCount(count);
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		setReposCount(null);
		setAvatarRef(null);
	}, [user]);

	useEffect(() => {
		setAvatarRef(user.avatar_url);
		fetchCountOfRepos(user.repos_url);
	}, [fetchCountOfRepos, user.avatar_url, user.repos_url]);

	return (
		<>
			<Result title="Перейти в профиль">
				<Link href={user.html_url} target="_blank">
					<Avatar
						src={
							avatarRef === null || avatarRef !== user.avatar_url ? ProfileIcon : avatarRef
						}
					/>
					<Repos>
						<ReposTitle>Количество репозиториев:</ReposTitle>
						<ReposCount>
							{reposCount === null
								? "..."
								: reposCount === 100
								? reposCount + "+"
								: reposCount}
						</ReposCount>
					</Repos>
					<Login>{user.login}</Login>
				</Link>
			</Result>
		</>
	);
};

export default ResultsItem;
