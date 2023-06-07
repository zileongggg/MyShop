import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
<<<<<<< HEAD
=======
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { DetailsPageComponent } from "./pages/details-page/details-page.component";
>>>>>>> 5ff844f029c062ba2549b00ec27e0b389a04d8a6

const routes: Routes = [
	{
		path: "",
		redirectTo: "loginPage",
		pathMatch: "full",
	},
	{ path: "loginPage", component: LoginPageComponent },
	{ path: "homepage", component: HomepageComponent },
<<<<<<< HEAD
=======
	{ path: "cartPage", component: CartPageComponent },
	{ path: "detailsPage/:id", component: DetailsPageComponent },
>>>>>>> 5ff844f029c062ba2549b00ec27e0b389a04d8a6
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
