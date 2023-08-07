import axios from "axios";

export interface User {
	login: string;
	avatar_url: string;
	html_url: string;
	repos_url: string;
}

export const getAllUsers = async (): Promise<User[]> => {
	const requestAllUsers = `https://api.github.com/search/users?q=type:user&per_page=100`;

	try {
		const response = await axios.get(requestAllUsers);
		console.log(response.data.items);
		return response.data.items;
	} catch (error) {
		console.log("Error", error);
		throw error;
	}
};
