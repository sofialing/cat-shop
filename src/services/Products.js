export class Products {
	constructor() {
		this.products = [];
		this.topSellers = [];
		this.newArrivals = [];
		this.categories = [];

		this.update();
	}

	async update() {
		const res = await fetch('/products.json');
		this.products = await res.json();

		this.getTopSellers();
		this.getNewArrivals();
		this.getCategories();
	}

	getTopSellers() {
		this.topSellers = this.products.filter(product => product.bestSeller);
	}

	getNewArrivals() {
		const nr = this.products.length;
		this.newArrivals = this.products.slice(nr - 4, nr);
	}

	getCategories() {
		let allCategories = this.products.map(product => product.category);
		allCategories = new Set(allCategories);
		this.categories = [...allCategories];
	}
}
