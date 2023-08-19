import { styled, keyframes } from "styled-components";

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
	display: flex;
	align-items: center;
`;

export const RadioInput = styled.input.attrs(() => ({
	type: "radio",
}))`
	width: 1vw;
	height: fit-content;
`;




export const LoaderContainer = styled.div`
	width: 7.7vw;
	height:  4vw;
	text-align: center;
	font-size: 10px;
	
`;

const barAnimation = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.05);
  }
  20% {
    transform: scaleY(1.0);
  }
`;

export const Bar = styled.div`
	height: 100%;
	width: 0.8vw;
	display: inline-block;
	
	animation: ${barAnimation} 0.8s infinite ease-in-out;

	&.bar1 {
		background-color: #754fa0;
	}

	&.bar2 {
		background-color: #09b7bf;
		animation-delay: -0.7s;
	}

	&.bar3 {
		background-color: #90d36b;
		animation-delay: -0.6s;
	}

	&.bar4 {
		background-color: #f2d40d;
		animation-delay: -0.5s;
	}

	&.bar5 {
		background-color: #fcb12b;
		animation-delay: -0.4s;
	}

	&.bar6 {
		background-color: #ed1b72;
		animation-delay: -0.3s;
	}
`;