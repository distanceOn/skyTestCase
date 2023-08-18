import React, { useContext, useEffect, useState } from "react";
import {
	Container,
	Title,
	SearchContainer,
	SearchInput,
	SearchButton,
	RadioContainer,
	RadioLabel,
	RadioInput,
} from "./styles";
import SearchContext from "../../../Contexts/searchContext";

const Search: React.FC = () => {
	const {
		usersArray,
		searchValue,
		setSearchValue,
		fetchUsersByLogin,
		selectedOption,
		handleRadioChange,
	} = useContext(SearchContext) ?? {
		usersArray: [],
		searchValue: "",
		setSearchValue: () => {},
		fetchUsersByLogin: () => {},
		selectedOption: null,
		handleRadioChange: () => {},
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

	const [isDisabled, setIsDisabled] = useState<boolean>(true);

	useEffect(()=>{
		setIsDisabled(true);
		if(usersArray.length !== 0){
			setTimeout(() => {
				setIsDisabled(false);
			}, 2000);
		}
	}, [usersArray.length])


	return (
	<>
		<Container onSubmit={handleSubmit}>
			<Title>Найди пользователя Github</Title>
			<SearchContainer>
				<SearchInput value={searchValue} onChange={handleInputChange} />
				<SearchButton>Найти</SearchButton>
				{isDisabled ? (
					<SearchContainer>Загрузка...</SearchContainer>
				) : (
					<RadioContainer>
						<RadioLabel>
							<RadioInput
								type="radio"
								name="sort"
								value="asc"
								onChange={handleRadioChange}
								onClick={handleRadioChange}
								checked={selectedOption === "asc"}
							/>
							По возрастанию
						</RadioLabel>
						<RadioLabel>
							<RadioInput
								type="radio"
								name="sort"
								value="desc"
								onClick={handleRadioChange}
								checked={selectedOption === "desc"}
								onChange={handleRadioChange}
							/>
							По убыванию
						</RadioLabel>
					</RadioContainer>
				)}
			</SearchContainer>
		</Container>
	</>
);
};

export default Search;
