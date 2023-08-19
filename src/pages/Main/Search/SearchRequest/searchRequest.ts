import axios from "axios";

const accessToken = process.env.VITE_GITHUB_ACCESS_TOKEN;


export interface User {
	login: string;
	avatar_url: string;
	html_url: string;
	repos_url: string;
	repos_count: number | null;
}

export const getUserCountOfRepos = async (url: string): Promise<number> => {
	try {
		const data = await axios.get(url + `?per_page=100`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});

		return data.data.length;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const fetchCountOfRepos = async (users: User[]): Promise<User[]> => {
	const result = users;
	try {
		const result = users;
		result.forEach(async (item: User) => {
			const repos = await getUserCountOfRepos(item.repos_url);
			item.repos_count = repos;
		});
	} catch (error) {
		console.log(error);
	}
	return result;
};

export const getAllUsers = async (count: number): Promise<User[]> => {
	const requestAllUsers = `https://api.github.com/search/users?q=type:user&per_page=${count}`;

	try {
		const response = await axios.get(requestAllUsers, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});

		const users = response.data.items;

		const result = await fetchCountOfRepos(users);
		console.log(result);
		return result;
	} catch (error) {
		console.log("Error", error);
		throw error;
	}
};

export const getUsersByLogin = async (login: string): Promise<User[]> => {
	const requestUsersByLogin = `https://api.github.com/search/users?q=${login}+in:login&per_page=100`;

	try {
		const response = await axios.get(requestUsersByLogin, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});

		const users = response.data.items;

		await users.forEach(async (item: User) => {
			try {
				const repos = await getUserCountOfRepos(item.repos_url);
				item.repos_count = repos;
			} catch (error) {
				console.log(error);
				item.repos_count = null;
			}
		});
		console.log(users);
		return users;
	} catch (error) {
		console.log("Error", error);
		throw error;
	}
};
