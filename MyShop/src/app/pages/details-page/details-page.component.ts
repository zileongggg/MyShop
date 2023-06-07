import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/modal/product.modal";
import { sharedServices } from "src/app/services/shared.service";
import { productService } from "src/app/services/product.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
	selector: "app-details-page",
	templateUrl: "./details-page.component.html",
	styleUrls: ["./details-page.component.css"],
})
export class DetailsPageComponent {
	product: Product | undefined;
	quantity: number = 0;
	totalCarts: number = 0;
	id: string = "";

	constructor(
		private sharedServices: sharedServices,
		private productService: productService,
		private route: ActivatedRoute,
		private snackBar: MatSnackBar
	) {}

	ngOnInit() {
		this.totalCarts = this.sharedServices.calTotalCartItems();
		const id = this.route.snapshot.params["id"];

		if (id) {
			this.productService.getOneProduct(parseInt(id)).then((res) => {
				this.product = res;
			});
		}
	}

	addToCart(product: Product) {
		const p = JSON.parse(localStorage.getItem(product.id.toString())!);
		if (p) this.quantity = p.quantity;
		const updatedProduct = {
			...product,
			quantity: ++this.quantity,
		};
		this.sharedServices.setTotalCarts(++this.totalCarts);
		localStorage.setItem(product.id.toString(), JSON.stringify(updatedProduct));

		this.snackBar.open("Product added to cart", "Dismiss", {
			duration: 2000,
			horizontalPosition: "center",
			verticalPosition: "top",
		});
	}
}
