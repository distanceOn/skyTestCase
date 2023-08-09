import React from "react";
import {
	Container,
	Title,
	SearchContainer,
	SearchInput,
	SearchButton,
} from "./styles";

const Search: React.FC = () => {
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
	};
	return (
		<>
			<Container onSubmit={handleSubmit}>
				<Title>Найди пользователя Github</Title>
				<SearchContainer>
					<SearchInput />
					<SearchButton>Найти</SearchButton>
				</SearchContainer>
			</Container>
		</>
	);
};

export default Search;
