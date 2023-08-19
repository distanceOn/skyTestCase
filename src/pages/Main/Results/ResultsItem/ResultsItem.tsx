import { FC, useEffect, useState } from "react";
import { User } from "../../Search/SearchRequest/searchRequest";
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
import { useNavigate } from "react-router-dom";

interface ResultsItemProps {
	user: User;
}

const ResultsItem: FC<ResultsItemProps> = ({ user }) => {
	const [reposCount, setReposCount] = useState<number | null>(null);
	const [avatarRef, setAvatarRef] = useState<string | null>(null);

	const refetchCountProps = () => {
		if (typeof user.repos_count === "number") {
			setReposCount(user.repos_count);
		} else {
			setTimeout(() => {
				refetchCountProps();
			}, 500);
		}
	};

	useEffect(() => {
		setAvatarRef(user.avatar_url);
		console.log(typeof reposCount, typeof user.repos_count);
		refetchCountProps();
	}, [user.avatar_url, user.repos_count]);

	const handleGoUser = () => {
		if (user.repos_count) {
			navigate(`/:${user.login}`, { state: { user } });
		} else if (user.repos_count === 0) {
			navigate(`/:${user.login}`, { state: { user } });
		} else {
			console.log(user.repos_count, "Еще не время");
		}
	};

	const navigate = useNavigate();

	return (
		<>
			<Result title="Перейти в профиль">
				<Link onClick={handleGoUser}>
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
