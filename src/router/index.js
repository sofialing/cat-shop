import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/About.vue')
	},
	{
		path: '/products',
		name: 'products',
		component: () => import('../views/Products.vue')
	},
	{
		path: '/products/:slug',
		name: 'view-product',
		props: true,
		component: () => import('../views/ProductView.vue')
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('../views/Blog.vue')
	},
	{
		path: '/blog/:slug',
		name: 'view-blog',
		props: true,
		component: () => import('../views/BlogView.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('../views/Contact.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes
});

export default router;
