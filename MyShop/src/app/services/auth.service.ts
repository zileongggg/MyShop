import { Injectable } from "@angular/core";
import { AUTH_LOGIN_URL } from "../utils/constants";

@Injectable({
	providedIn: "root",
})
export class AuthService {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 3c6edbde25e06dc13d43f6e00e5967e70596ce27
	async fetchWithAuth(url: string, options: RequestInit = {}): Promise<Response> {
		const token = sessionStorage.getItem("token");

		options.headers = {
			...options.headers,
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		};

		return await fetch(url, options);
	}

<<<<<<< HEAD
>>>>>>> 5ff844f029c062ba2549b00ec27e0b389a04d8a6
=======
>>>>>>> 3c6edbde25e06dc13d43f6e00e5967e70596ce27
	async loginAuthToken(username: string, password: string): Promise<any> {
		const response = await fetch(AUTH_LOGIN_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});
		if (!response.ok) {
			return response;
		}
		const data = await response.json();
		sessionStorage.setItem("token", data.token);
		return response;
	}
}
