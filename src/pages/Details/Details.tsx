import { useLocation } from "react-router-dom";
import styled from "styled-components";

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
    const location = useLocation();
    const user = location.state.user;

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
