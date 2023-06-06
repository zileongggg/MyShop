import { Injectable } from "@angular/core";
import { AUTH_LOGIN_URL } from "../utils/constants";

@Injectable({
	providedIn: "root",
})
export class AuthService {
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
