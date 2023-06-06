import { Component } from "@angular/core";
import { sharedServices } from "src/app/services/shared.service";

@Component({
	selector: "app-cart-page",
	templateUrl: "./cart-page.component.html",
	styleUrls: ["./cart-page.component.css"],
})
export class CartPageComponent {
	quantity: number = 0;
	totalPrice: number = 0;
	cartItems: any[] = [{}];
	totalCarts: number = 0;

	constructor(private sharedServices: sharedServices) {}

	ngOnInit() {
		this.getAllCarts();
		this.totalCarts = this.sharedServices.getTotalCarts();
	}

	getAllCarts() {
		// index signature: Index signature is used to represent the type of
		// object/dictionary when the values of the object are of consistent types.
		const storageItem: Array<{ [key: string]: object }> = [],
			keys = Object.keys(localStorage)!,
			j = keys.length;

		for (let i = 0; i < j; i++) {
			const value = localStorage.getItem(keys[i]);
			if (value) storageItem.push(JSON.parse(value));
		}
		this.cartItems = storageItem;
		this.getTotalPrice();
	}

	decreaseQuantity(item: any) {
		if (item.quantity > 0) {
			item.quantity--;
			this.sharedServices.setTotalCarts(--this.totalCarts);
			localStorage.setItem(item.id.toString(), JSON.stringify(item));
		}
		if (item.quantity == 0) {
			this.cartItems = this.cartItems.filter((e) => e.id !== item.id);
			localStorage.removeItem(item.id.toString());
		}
		this.getTotalPrice();
	}

	increaseQuantity(item: any) {
		item.quantity++;
		this.sharedServices.setTotalCarts(++this.totalCarts);
		localStorage.setItem(item.id.toString(), JSON.stringify(item));
		this.getTotalPrice();
	}

	getTotalPrice() {
		this.totalPrice = 0;
		this.cartItems.forEach((e) => {
			this.totalPrice += e.quantity * e.price;
		});
	}
}
