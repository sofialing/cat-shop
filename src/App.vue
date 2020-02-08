<template>
	<div id="app">
		<app-navbar />
		<router-view />
		<app-footer />
	</div>
</template>

<script>
import Navbar from '@/layout/Navbar.vue';
import Footer from '@/layout/Footer.vue';

export default {
	components: {
		'app-navbar': Navbar,
		'app-footer': Footer
	},
	created() {
		this.$store.dispatch('bindProducts');
		this.$store.dispatch('bindBlogPosts');
	}
};
</script>

<style lang="scss"></style>
