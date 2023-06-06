import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-login-page",
	templateUrl: "./login-page.component.html",
	styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent {
	// username: string = "";
	// password: string = "";
	loginError: boolean = false;
	username: string = "atuny0";
	password: string = "9uQFF1Lh";

	constructor(private authService: AuthService, private router: Router) {}

	login() {
		this.loginError = false;
		this.authService.loginAuthToken(this.username, this.password).then((data) => {
			if (data.ok) {
				this.loginError = false;
				this.router.navigate(["/homepage"]);
			}

			if (!data.ok) {        
				if (this.username !== "" || this.password != "") {
					this.loginError = true;
					setTimeout(() => {
						this.loginError = false;
					}, 3000);
				}
			}
		});
	}
}
