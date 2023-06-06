import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatChipsModule } from "@angular/material/chips";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
	declarations: [AppComponent, LoginPageComponent, HomepageComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		MatGridListModule,
		MatMenuModule,
		MatCardModule,
		MatIconModule,
		MatListModule,
		MatTableModule,
		MatBadgeModule,
		MatSnackBarModule,
		MatChipsModule,
		MatPaginatorModule,
		MatInputModule,
		MatFormFieldModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
