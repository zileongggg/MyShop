import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "loginPage",
		pathMatch: "full",
	},
	{ path: "loginPage", component: LoginPageComponent },
	{ path: "homepage", component: HomepageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
