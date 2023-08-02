import styled from "styled-components";
import Search from "./Search/Search";

const Wrapper = styled.div`
	background-color: #198f54;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.div`
	width: 80vw;
	height: 80%;
`;

const Main: React.FC = () => {
	return (
		<>
			<Wrapper>
				<Content>
					<Search />
				</Content>
			</Wrapper>
		</>
	);
};

export default Main;
