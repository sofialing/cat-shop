<template>
	<div>
		<Hero :title="product.title" subtitle="" />
		<section class="section">
			<h1>{{ product.title }}</h1>
			<!-- <h1 class="title">{{ product.title }}</h1> -->
		</section>
	</div>
</template>

<script>
import HeroSubpage from '@/components/HeroSubpage.vue';

export default {
	name: 'ProductView',
	components: {
		Hero: HeroSubpage
	},
	props: {
		products: {
			type: Array,
			required: true
		},
		slug: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			product: {}
		};
	},
	created() {
		this.product = this.products.find(product => product.slug == this.slug);
	}
};
</script>
