import {
	Container,
	Title,
	SearchContainer,
	SearchInput,
	SearchButton,
} from "./styles";

const Search: React.FC = () => {
	return (
		<>
			<Container>
				<Title>Найди пользователя</Title>
				<SearchContainer>
					<SearchInput />
					<SearchButton>Найти</SearchButton>
				</SearchContainer>
			</Container>
		</>
	);
};

export default Search;
