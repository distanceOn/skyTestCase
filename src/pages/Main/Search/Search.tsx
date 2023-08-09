import React, { useContext } from "react";
import {
	Container,
	Title,
	SearchContainer,
	SearchInput,
	SearchButton,
} from "./styles";
import SearchContext from "../../../Contexts/searchContext";

const Search: React.FC = () => {
	const { searchValue, setSearchValue, fetchUsersByLogin } = useContext(
		SearchContext
	) ?? {
		searchValue: "",
		setSearchValue: () => {},
		fetchUsersByLogin: () => {},
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		fetchUsersByLogin(searchValue);
	};

	const allowedCharacters = /^[a-zA-Z0-9]*$/;

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;

		if (!allowedCharacters.test(inputValue)) {
			return;
		}

		setSearchValue(event.target.value);
	};
	return (
		<>
			<Container onSubmit={handleSubmit}>
				<Title>Найди пользователя Github</Title>
				<SearchContainer>
					<SearchInput value={searchValue} onChange={handleInputChange} />
					<SearchButton>Найти</SearchButton>
				</SearchContainer>
			</Container>
		</>
	);
};

export default Search;
