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
	LoaderContainer,
	Bar,
} from "./styles";
import SearchContext from "../../../Contexts/searchContext";

const Search: React.FC = () => {
	const {
		usersArray,
		setUsersArray,
		searchValue,
		setSearchValue,
		fetchUsersByLogin,
		selectedOption,
		handleRadioChange,
	} = useContext(SearchContext) ?? {
		usersArray: [],
		setUsersArray: () => {},
		searchValue: "",
		setSearchValue: () => {},
		fetchUsersByLogin: () => {},
		selectedOption: null,
		handleRadioChange: () => {},
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setUsersArray([]);
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
					<LoaderContainer className="loader">
						<Bar className="bar1" />
						<Bar className="bar2" />
						<Bar className="bar3" />
						<Bar className="bar4" />
						<Bar className="bar5" />
						<Bar className="bar6" />
					</LoaderContainer>
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
