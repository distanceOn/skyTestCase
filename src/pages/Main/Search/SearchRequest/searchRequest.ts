import axios from "axios";

export interface User {
	login: string;
	avatar_url: string;
	html_url: string;
	repos_url: string;
}

export const getOneUser = async (login: string): Promise<User> => {
	const requestOneUser = `https://api.github.com/users/${login}`;

	try {
		const response = await axios.get(requestOneUser);
		return response.data;
	} catch (error) {
		console.log("Error", error);
		throw error;
	}
};

export const getAllUsers = async (count: number): Promise<User[]> => {
	const requestAllUsers = `https://api.github.com/search/users?q=type:user&per_page=${count}`;

	try {
		const response = await axios.get(requestAllUsers);
		console.log(response.data.items);
		return response.data.items;
	} catch (error) {
		console.log("Error", error);
		throw error;
	}
};