export class Products {
	constructor() {
		this.products = [];
		this.bestSellers = [];

		this.getProducts();
	}

	async getProducts() {
		const res = await fetch('/products.json');
		this.products = await res.json();
		this.bestSellers = this.products.filter(product => product.bestSeller);
	}
}
