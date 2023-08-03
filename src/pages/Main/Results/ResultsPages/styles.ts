import { styled } from "styled-components";

export const NumberOfPages = styled.ul`
	width: fit-content;
	height: fit-content;
	display: flex;
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
`;

export const SelectedPage = styled.span`
	color: yellow;
	background-color: #000;
	display: inline-block;
	width: 100%;
	text-align: center;
	border-radius: 0.2vw;
`;
