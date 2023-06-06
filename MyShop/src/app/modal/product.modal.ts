export class Product {
	id: number;
	title: string;
	images: string;
	price: number;
	category: string;
	description: string;

	constructor(product: {
		id: number;
		title: string;
		images: string;
		price: number;
		category: string;
		description: string;
	}) {
		this.id = product.id;
		this.title = product.title;
		this.images = product.images[0];
		this.price = product.price;
		this.category = product.category;
		this.description = product.description;
	}
}
