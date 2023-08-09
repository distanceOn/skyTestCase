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
	width: 40vw;
	height: 5vw;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const SearchInput = styled.input.attrs(() => ({
	type: "text",
	placeholder: "Поиск",
	id: "search",
}))`
	width: 20vw;
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
