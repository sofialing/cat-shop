export class Products {
	constructor() {
		this.products = [];
		this.topSellers = [];
		this.newArrivals = [];

		this.getProducts();
	}

	async getProducts() {
		const res = await fetch('/products.json');

		this.products = await res.json();
		this.topSellers = this.products.filter(product => product.bestSeller);

		const nr = this.products.length;
		this.newArrivals = this.products.slice(nr - 4, nr);
	}
}
