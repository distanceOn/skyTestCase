import styled from "styled-components";
import Search from "./Search/Search";
import Results from "./Results/Results";

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

const Main: React.FC = () => {
	return (
		<>
			<Wrapper>
				<Content>
					<Search />
					<Results />
				</Content>
			</Wrapper>
		</>
	);
};

export default Main;
