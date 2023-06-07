import { Injectable } from "@angular/core";
import { Product } from "../modal/product.modal";
import { sharedServices } from "./shared.service";
import { AuthService } from "./auth.service";
import { BASEURL } from "../utils/constants";
import { GET_ALL_PRODUCTS_PATH } from "../utils/constants";
import { GET_ONE_PRODUCT_PATH } from "../utils/constants";
import { SEARCH_PRODUCTS_PATH } from "../utils/constants";
import { GET_PRODUCT_BY_CATEGORY_PATH } from "../utils/constants";
import { ERROR_MSG } from "../utils/constants";

@Injectable({
	providedIn: "root",
})
export class productService {
	private products: Product[] = [];
	private product: Product | undefined;
	private totalProducts: number = 0;

	constructor(
		private sharedServices: sharedServices,
		private AuthServices: AuthService
	) {}

	async getOneProduct(id: number): Promise<Product> {
		try {
			const response = await this.AuthServices.fetchWithAuth(
				BASEURL + GET_ONE_PRODUCT_PATH + id,
				{ method: "GET" }
			);

			if (!response.ok) {
				throw new Error(ERROR_MSG);
			}

			const data = await response.json();
			this.product = new Product(data);

			return this.product;
		} catch (error) {
			console.error(ERROR_MSG, error);
			throw error;
		}
	}

	async getProductsWithSortedPrice(
		order: string,
		pageIndex: number,
		pageSize: number
	): Promise<{ products: Product[]; totalProducts: number }> {
		const startIndex = pageIndex * pageSize;
		const tempProducts = this.sharedServices.getProducts();
		this.totalProducts = tempProducts.length;

		let tempData: any[];
		if (order == "asce") {
			tempData = this.sharedServices.sortProductsByPriceAsce(tempProducts);
		} else {
			tempData = this.sharedServices.sortProductsByPriceDesc(tempProducts);
		}

		this.products = [];

		for (let i = startIndex; i < startIndex + pageSize; i++) {
			if (tempData[i]) {
				this.products.push(new Product(tempData[i]));
			}
		}

		return { products: this.products, totalProducts: this.totalProducts };
	}

	// ! pagination should be done in backend.
	async getAllProducts(
		pageIndex: number,
		pageSize: number
	): Promise<{ products: Product[]; totalProducts: number }> {
		try {
			const response = await this.AuthServices.fetchWithAuth(
				BASEURL + GET_ALL_PRODUCTS_PATH,
				{ method: "GET" }
			);

			if (!response.ok) {
				throw new Error(ERROR_MSG);
			}

			const data = await response.json();
			const startIndex = pageIndex * pageSize;
			this.totalProducts = data.products.length;
			this.sharedServices.setProducts(data.products);
			this.products = [];

			for (let i = startIndex; i < startIndex + pageSize; i++) {
				if (data.products[i]) {
					this.products.push(new Product(data.products[i]));
				}
			}

			return { products: this.products, totalProducts: this.totalProducts };
		} catch (error) {
			console.error(ERROR_MSG, error);
			throw error;
		}
	}

	async searchProducts(
		query: string,
		pageIndex: number,
		pageSize: number
	): Promise<{ products: Product[]; totalProducts: number }> {
		try {
			const response = await this.AuthServices.fetchWithAuth(
				BASEURL + SEARCH_PRODUCTS_PATH + query,
				{ method: "GET" }
			);
			if (!response.ok) {
				throw new Error(ERROR_MSG);
			}
			const data = await response.json();
			const startIndex = pageIndex * pageSize;
			this.sharedServices.setProducts(data.products);
			this.totalProducts = data.products.length;
			this.products = [];

			for (let i = startIndex; i < startIndex + pageSize; i++) {
				if (data.products[i]) {
					this.products.push(new Product(data.products[i]));
				}
			}

			return { products: this.products, totalProducts: this.totalProducts };
		} catch (error) {
			console.error(ERROR_MSG, error);
			throw error;
		}
	}

	async getProductsByCategory(
		query: string,
		pageIndex: number,
		pageSize: number
	): Promise<{ products: Product[]; totalProducts: number }> {
		try {
			const response = await this.AuthServices.fetchWithAuth(
				BASEURL + GET_PRODUCT_BY_CATEGORY_PATH + query,
				{ method: "GET" }
			);

			if (!response.ok) {
				throw new Error(ERROR_MSG);
			}

			const data = await response.json();
			const startIndex = pageIndex * pageSize;
			this.sharedServices.setProducts(data.products);
			this.totalProducts = data.products.length;
			this.products = [];

			for (let i = startIndex; i < startIndex + pageSize; i++) {
				if (data.products[i]) {
					this.products.push(new Product(data.products[i]));
				}
			}

			return { products: this.products, totalProducts: this.totalProducts };
		} catch (error) {
			console.error(ERROR_MSG, error);
			throw error;
		}
	}
}