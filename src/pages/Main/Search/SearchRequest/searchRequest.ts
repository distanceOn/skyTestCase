import axios from "axios";

const accessToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

if (!accessToken) {
	throw new Error("GitHub access token not found in environment variables.");
}
export interface User {
	login: string;
	avatar_url: string;
	html_url: string;
	repos_url: string;
}

export const getUsersByLogin = async (login: string): Promise<User[]> => {
	const requestUsersByLogin = `https://api.github.com/search/users?q=${login}+in:login&per_page=100`;

	try {
		const response = await axios.get(requestUsersByLogin, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return response.data.items;
	} catch (error) {
		console.log("Error", error);
		throw error;
	}
};

export const getAllUsers = async (count: number): Promise<User[]> => {
	const requestAllUsers = `https://api.github.com/search/users?q=type:user&per_page=${count}`;

	try {
		const response = await axios.get(requestAllUsers, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return response.data.items;
	} catch (error) {
		console.log("Error", error);
		throw error;
	}
};
