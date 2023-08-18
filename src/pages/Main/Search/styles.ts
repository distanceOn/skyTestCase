import { styled } from "styled-components";

export const Container = styled.form`
	width: 80vw;
	height: 10vw;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const Title = styled.label.attrs(() => ({
	htmlFor: "search",
}))`
	width: fit-content;
	height: fit-content;
	font-size: 2vw;
	cursor: default;
`;

export const SearchContainer = styled.div`
	width: 35vw;
	height: 5vw;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1vw;
`;

export const SearchInput = styled.input.attrs(() => ({
	type: "text",
	placeholder: "Введите логин",
	id: "search",
	pattern: "[a-zA-Z0-9]*",
}))`
	width: 15vw;
	height: 1.5vw;
	padding: 1vw;
	border: 1px solid black;
	border-radius: 10px;
	font-size: 1vw;
`;

export const SearchButton = styled.button.attrs(() => ({
	type: "submit",
}))`
	width: fit-content;
	height: fit-content;
	border: 1px solid black;
	padding: 0.5vw 1vw;
	font-size: 1vw;
	border-radius: 10px;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		background-color: red;
		color: yellow;
	}
`;

export const RadioContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: fit-content;
`;

export const RadioLabel = styled.label`
	font-size: 1vw;
	height: fit-content;
`;

export const RadioInput = styled.input.attrs(() => ({
	type: "radio",
}))`
	width: fit-content;
	height: fit-content;
`;
