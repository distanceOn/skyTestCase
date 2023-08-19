import { styled, keyframes } from "styled-components";

export const NumberOfPages = styled.ul`
	width: fit-content;
	height: fit-content;
	display: flex;
	align-items: center;
	gap: 0.5vw;
	margin-top: 0.3vw;
	font-size: 1vw;
`;

export const Page = styled.li`
	width: fit-content;
	height: fit-content;
`;

export const PageLink = styled.a`
	text-decoration: none;
	cursor: pointer;
	display: inline-block;
	width: 1.5vw;
	padding: 0.2vw;
	text-align: center;
	background-color: #fff;
	border-radius: 0.2vw;
	&:hover{
		background-color: red;
	}
`;

export const SelectedPage = styled.span`
	color: yellow;
	background-color: #000;
	display: inline-block;
	width: 100%;
	text-align: center;
	border-radius: 0.2vw;
`;

export const Arrow = styled.button`
	cursor: pointer;
	border-radius: 1vw;
	&:hover {
		background-color: yellow;
	}
	&:active {
		background-color: #fff;
		
	}
`;

export const LoadButton = styled.button`
	font-size: 0.8vw;
	padding: 0.2vw;
	border-radius: 1vw;
	cursor: pointer;
	&:hover {
		background-color: #000;
		color: #fff;
	}
	&:active {
		background-color: #fff;
		color: #000;
	}
`;


export const LoaderContainer = styled.div`
	width:4vw;
	text-align: center;
	font-size: 10px;
	display: flex;
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
	width: 1vw;
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