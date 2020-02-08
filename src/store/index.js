import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import createPersistedState from 'vuex-persistedstate';
import { db } from '@/services/db';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		blogPosts: [],
		currentPost: {},
		currentProduct: {},
		products: [],
		shoppingCart: []
	},
	plugins: [
		createPersistedState({
			key: 'cat-shop'
		})
	],
	getters: {
		// Get blog posts
		getBlogPosts: state => {
			return state.blogPosts;
		},
		getCurrentPost: state => {
			return state.currentPost;
		},
		getLatestPosts: state => {
			return state.blogPosts.slice(-4, -1);
		},

		// Get products
		getCurrentProduct: state => {
			return state.currentProduct;
		},
		getProducts: state => type => {
			return type
				? state.products.filter(prod => prod.category.toLowerCase() === type)
				: state.products;
		},
		getProductCategories: state => {
			return [...new Set(state.products.map(prod => prod.category))];
		},
		getLatestProducts: state => {
			return state.products.slice(-5, -1);
		},
		getTopProducts: state => {
			return state.products.filter(prod => prod.rating === 5).slice(0, 4);
		},
		getShoppingCart: state => {
			return state.shoppingCart;
		}
	},
	mutations: {
		...vuexfireMutations,
		saveCurrentProduct: (state, product) => {
			state.currentProduct = product;
		},
		saveCurrentPost: (state, post) => {
			state.currentPost = post;
		},
		addToShoppingCart: (state, item) => {
			state.shoppingCart.push(item);
		},
		removeFromShoppingCart: (state, index) => {
			state.shoppingCart.splice(index, 1);
		},
		updateQuantity: (state, payload) => {
			state.shoppingCart[payload.index].quantity = payload.number;
		}
	},
	actions: {
		bindProducts: firestoreAction(({ bindFirestoreRef }) => {
			return bindFirestoreRef('products', db.collection('products'));
		}),
		bindBlogPosts: firestoreAction(({ bindFirestoreRef }) => {
			return bindFirestoreRef('blogPosts', db.collection('blogposts'));
		})
	}
});
