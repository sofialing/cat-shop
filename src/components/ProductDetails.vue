<template>
	<div class="product-details">
		<h2 class="title is-3">{{ product.title }}</h2>
		<Rating
			class="icon-2x has-text-primary"
			v-for="idx in product.rating"
			:key="idx"
		/>
		<Rating
			class="icon-2x has-text-grey-light"
			v-for="idx in remaining"
			:key="idx"
		/>
		<p class="title price">{{ product.price }}:-</p>
	</div>
</template>

<script>
import Rating from 'vue-material-design-icons/Star.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'ProductDetails',
	components: {
		Rating
	},
	data() {
		return {
			remaining: 0
		};
	},
	created() {
		this.remaining = 5 - this.product.rating;
	},
	computed: {
		...mapGetters({
			product: 'getCurrentProduct'
		})
	}
};
</script>
<style lang="scss">
.product-details {
	margin-bottom: 1rem;

	.title.is-3 {
		margin-bottom: 0.25rem;
	}

	.price {
		font-size: 4rem;
	}

	.title.is-5 {
		margin-bottom: 0.2rem;
	}

	.material-design-icon.icon-2x {
		height: 1.5em;
		width: 1.5em;
		line-height: 1;
		margin-right: 0.1rem;
	}

	.material-design-icon.icon-2x > .material-design-icon__svg {
		height: 1.5em;
		width: 1.5em;
		line-height: 1;
	}
}
</style>
