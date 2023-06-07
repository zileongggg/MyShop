import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { DetailsPageComponent } from "./pages/details-page/details-page.component";


const routes: Routes = [
	{
		path: "",
		redirectTo: "loginPage",
		pathMatch: "full",
	},
	{ path: "loginPage", component: LoginPageComponent },
	{ path: "homepage", component: HomepageComponent },
	{ path: "cartPage", component: CartPageComponent },
	{ path: "detailsPage/:id", component: DetailsPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
