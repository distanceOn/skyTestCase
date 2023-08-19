import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchContext from "../../Contexts/searchContext";
import { useContext, useEffect } from "react";
import {
	Avatar,
	Link,
	Login,
	Repos,
	ReposCount,
	ReposTitle,
	User,
} from "./styles";
import ProfileIcon from "../../assets/profile-svgrepo-com.svg";



const Wrapper = styled.div`
	background-color: #198f54;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.div`
	padding: 15vw;
	display: flex;
	
	justify-content: center;
	align-items: center;
`;

const Details: React.FC = () => {
	const { setUsersArray, setSearchValue, setCurrentPage } = useContext(SearchContext) ?? {
	setUsersArray: () => {},
	setSearchValue: () => {},
	setCurrentPage: () => {},}
;

	const navigate = useNavigate();

    const location = useLocation();
    const {avatar_url, repos_count, login, html_url} = location.state.user;

	const user = location.state.user;
	useEffect(() => {
		if(location.pathname !== '/'){
			setUsersArray([]);
			setSearchValue('');
			setCurrentPage(1);
			
		}
		console.log(user);
	}, [])

	return (
	<>
		<Wrapper>
			<Content>
				<User>
					<Avatar src={avatar_url === null ? ProfileIcon : avatar_url} />
					<Login>{login}</Login>
					<Repos>
						<ReposTitle>Количество репозиториев:</ReposTitle>
						<Link title="github" href={html_url + "?tab=repositories"} target="_blank">
							<ReposCount>
								{repos_count === null
									? "..."
									: repos_count === 100
									? repos_count + "+"
									: repos_count}
							</ReposCount>
						</Link>
					</Repos>

					<Link title="github" href={html_url} target="_blank">
						Перейти в профиль
					</Link>
					<Link onClick={(e)=>{
						e.preventDefault();
						navigate('/');
					}}>Назад</Link>
				</User>
			</Content>
		</Wrapper>
	</>
);
};

export default Details;
