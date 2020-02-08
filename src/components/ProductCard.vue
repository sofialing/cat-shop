<template>
	<div class="card">
		<div class="card-image">
			<figure class="image is-square has-background-white-ter">
				<router-link
					:to="productUrl"
					@click.native="saveCurrentProduct(product)"
					tag="img"
					:src="productImg"
				></router-link>
			</figure>
		</div>

		<div class="card-content">
			<div class="content">
				<router-link
					:to="productUrl"
					@click.native="saveCurrentProduct(product)"
				>
					<h3 class="is-size-6">{{ product.title }}</h3>
				</router-link>
				<p class="title is-size-2 has-text-weight-bold is-marginless">
					{{ product.price }}:-
				</p>
				<p v-if="product.inventory" class="is-size-7">
					<span class="icon">
						<check-icon class="has-text-primary" />
					</span>
					<span>Finns i lager</span>
				</p>
				<p v-else class="is-size-7">
					<span class="icon">
						<cart-off-icon class="has-text-danger" />
					</span>
					<span>Tillfälligt slut</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import CartOffIcon from 'vue-material-design-icons/CartOff.vue';
import CheckIcon from 'vue-material-design-icons/CheckCircle.vue';

export default {
	name: 'ProductCard',
	props: {
		product: {
			type: Object
		}
	},
	data() {
		return {
			hover: false
		};
	},
	components: {
		CartOffIcon,
		CheckIcon
	},
	computed: {
		productUrl() {
			return '/products/' + this.product.slug;
		},
		productImg() {
			return require('@/assets/images/products/transparent/' +
				this.product.image[1]);
		}
	},
	methods: {
		saveCurrentProduct(product) {
			this.$store.commit('saveCurrentProduct', product);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
	box-shadow: none !important;

	.card-image {
		cursor: pointer;
	}

	.card-content {
		padding: 1.5rem 0;

		.content h3 {
			margin-bottom: 0.3rem;
		}
	}
}
</style>
