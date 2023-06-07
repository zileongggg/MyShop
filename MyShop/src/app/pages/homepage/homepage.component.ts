<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Router } from "@angular/router";
import { productService } from "src/app/services/product.service";
import { sharedServices } from "src/app/services/shared.service";
import { Product } from "src/app/modal/product.modal";
>>>>>>> 3c6edbde25e06dc13d43f6e00e5967e70596ce27

@Component({
	selector: "app-homepage",
	templateUrl: "./homepage.component.html",
	styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent {
	products: Product[] = [];
	searchQuery: string = "";
	isSearching: boolean = false;
	isSorting: boolean = false;
	pageIndex: number = 0;
	pageSize: number = 10;
	totalProducts: number = 0;
	totalCarts: number = 0;
	order: string = "asce";

<<<<<<< HEAD
=======
import { Component } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Router } from "@angular/router";
import { productService } from "src/app/services/product.service";
import { sharedServices } from "src/app/services/shared.service";
import { Product } from "src/app/modal/product.modal";

@Component({
	selector: "app-homepage",
	templateUrl: "./homepage.component.html",
	styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent {
	products: Product[] = [];
	searchQuery: string = "";
	isSearching: boolean = false;
	isSorting: boolean = false;
	pageIndex: number = 0;
	pageSize: number = 10;
	totalProducts: number = 0;
	totalCarts: number = 0;
	order: string = "asce";

=======
>>>>>>> 3c6edbde25e06dc13d43f6e00e5967e70596ce27
	constructor(
		private router: Router,
		private productService: productService,
		private sharedServices: sharedServices
	) {}

	ngOnInit() {
		this.getAllProducts();
		this.getTotalCartItems();
	}

	onPageChange(event: PageEvent) {
		this.pageIndex = event.pageIndex;
		this.pageSize = event.pageSize;

		if (this.isSearching) {
			this.searchProducts(this.pageIndex);
		} else if (this.isSorting) {
			this.getProductsWithSortedPrice(this.order, this.pageIndex);
		} else {
			this.getAllProducts();
		}
	}

	truncateText(text: string, limit: number): string {
		if (text.length <= limit) {
			return text;
		}
		return text.substring(0, limit) + "...";
	}

	gotoProductDetails(product: Product): void {
		this.router.navigate(["/detailsPage", product.id]);
	}

	getProductsWithSortedPrice(order: string, pageIndex: number) {
		this.pageIndex = pageIndex;
		this.isSearching = false;
		this.isSorting = true;
		this.productService
			.getProductsWithSortedPrice(order, this.pageIndex, this.pageSize)
			.then(({ products, totalProducts }) => {
				this.totalProducts = totalProducts;
				this.products = products;
			});
	}

	getAllProducts() {
		this.isSearching = false;
		this.productService
			.getAllProducts(this.pageIndex, this.pageSize)
			.then(({ products, totalProducts }) => {
				this.totalProducts = totalProducts;
				this.products = products;
			});
	}

	searchProducts(pageIndex: number) {
		this.pageIndex = pageIndex;
		this.isSearching = true;
		this.productService
			.searchProducts(this.searchQuery, this.pageIndex, this.pageSize)
			.then(({ products, totalProducts }) => {
				this.totalProducts = totalProducts;
				this.products = products;
			});
		this.searchQuery = "";
	}

	getProductsByCategory(query: string) {
		this.pageIndex = 0;
		this.pageSize = 10;
		if (query !== "all") {
			this.productService
				.getProductsByCategory(query, this.pageIndex, this.pageSize)
				.then(({ products, totalProducts }) => {
					this.totalProducts = totalProducts;
					this.products = products;
				});
		} else {
			this.getAllProducts();
		}
	}

	getTotalCartItems() {
		this.totalCarts = this.sharedServices.calTotalCartItems();
	}
<<<<<<< HEAD
>>>>>>> 5ff844f029c062ba2549b00ec27e0b389a04d8a6
=======
>>>>>>> 3c6edbde25e06dc13d43f6e00e5967e70596ce27
}
