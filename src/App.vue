<template>
	<div id="app">
		<app-navbar />
		<router-view :products="products" :blog-posts="blogPosts" />
		<app-footer />
	</div>
</template>

<script>
import Navbar from '@/layout/Navbar.vue';
import Footer from '@/layout/Footer.vue';
import axios from 'axios';

export default {
	components: {
		'app-navbar': Navbar,
		'app-footer': Footer
	},
	data() {
		return {
			products: [],
			blogPosts: []
		};
	},
	mounted() {
		axios.get('/products.json').then(res => (this.products = res.data));
		axios.get('/blogposts.json').then(res => (this.blogPosts = res.data));
	}
};
</script>

<style lang="scss"></style>
