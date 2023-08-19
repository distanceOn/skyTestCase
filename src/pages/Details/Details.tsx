import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchContext from "../../Contexts/searchContext";
import { useContext, useEffect } from "react";

const Wrapper = styled.div`
	background-color: #198f54;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.div`
	padding: 7vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Details: React.FC = () => {
	const {  setUsersArray } = useContext(SearchContext) ?? {
	
	setUsersArray: () => {},
};

    const location = useLocation();
    const user = location.state.user;

	useEffect(() => {
		
		if(location.pathname !== '/'){
			setUsersArray([]);
			
		}
	}, [location.pathname])

	return (
		<>
			<Wrapper>
				<Content>
                    {user.login}
				</Content>
			</Wrapper>
		</>
	);
};

export default Details;
