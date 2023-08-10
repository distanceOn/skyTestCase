import { styled } from "styled-components";

export const Result = styled.li`
	height: 5vw;
	background-color: #fff;
	border: 1px solid black;
	border-radius: 10px;
	font-size: 1vw;

	cursor: pointer;
	transition: all 0.1s ease;

	&:hover {
		transform: scale(1.07);
	}
	&:not(:last-child) {
		margin-bottom: 1vw;
	}
`;

export const Avatar = styled.img`
	height: 100%;
	width: 5vw;
	box-sizing: border-box;
	border-right: 1px solid black;
	border-radius: 8px;
`;

export const Login = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	padding: 0 1vw;
	height: 100%;
	color: #fff;
	background-color: #3c0457;
	border-left: 1px solid black;
	border-radius: 8px;
`;

export const Link = styled.a`
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-decoration: none;
`;

export const Repos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1vw;
`;

export const ReposTitle = styled.h5`
	width: fit-content;
	height: fit-content;
`;

export const ReposCount = styled.p`
	height: fit-content;
	width: fit-content;
`;
