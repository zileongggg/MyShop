import { Injectable } from "@angular/core";
import { AUTH_LOGIN_URL } from "../utils/constants";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	async fetchWithAuth(url: string, options: RequestInit = {}): Promise<Response> {
		const token = sessionStorage.getItem("token");

		options.headers = {
			...options.headers,
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		};

		return await fetch(url, options);
	}

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
