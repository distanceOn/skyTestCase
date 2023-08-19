import { styled } from "styled-components";

export const User = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1vw;
	background-color: #fff;
	padding: 2vw;
	border-radius: 1vw;
	border: 3px solid black;

`;

export const Avatar = styled.img`
	width: 10vw;
	height: 10vw;
	border: 1px solid black;
	border-radius: 1vw;
`;

export const Login = styled.p`
	font-size: 3vw;
	color: red;
	cursor: default;
	text-align: center;
`;

export const Link = styled.a`
	width: fit-content;
	height: fit-content;
	text-decoration: none;
	color: #000;
	border-bottom: 1px solid green;
	font-size: 1vw;
`;

export const Repos = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	font-size: 1vw;
`;

export const ReposTitle = styled.h5`
	cursor: default;
`;

export const ReposCount = styled.p`
	font-size: 1vw;
`;
