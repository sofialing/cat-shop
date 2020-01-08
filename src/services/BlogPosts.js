export class BlogPosts {
	constructor() {
		this.posts = [];
		this.newestPosts = [];
		this.getPosts();
	}

	async getPosts() {
		const res = await fetch('/blogposts.json');
		this.posts = await res.json();

		const nr = this.posts.length;
		this.newestPosts = this.posts.slice(nr - 3, nr);
	}
}
