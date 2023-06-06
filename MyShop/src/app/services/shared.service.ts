import { Injectable } from "@angular/core";
import { Product } from "../modal/product.modal";

@Injectable({
	providedIn: "root",
})
export class sharedServices {
	private products: Product[] = [];
	private totalCarts: number = 0;

	getTotalCarts() {
		return this.totalCarts;
	}

	setTotalCarts(totalCarts: number) {
		this.totalCarts = totalCarts;
	}

	getProducts() {
		return this.products;
	}

	setProducts(products: Product[]) {
		this.products = products;
	}

	sortProductsByPriceAsce(products: Product[]) {
		return products.sort((a, b) => a.price - b.price);
	}

	sortProductsByPriceDesc(products: Product[]) {
		return products.sort((a, b) => b.price - a.price);
	}

	calTotalCartItems(): number {
		this.totalCarts = 0;
		const keys = Object.keys(localStorage)!,
			j = keys.length;

		for (let i = 0; i < j; i++) {
			const value = localStorage.getItem(keys[i]);
			if (value) {
				this.totalCarts += JSON.parse(value).quantity;
			}
		}
		return this.totalCarts;
	}
}
