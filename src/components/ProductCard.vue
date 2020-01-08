<template>
	<div class="card">
		<div class="card-image">
			<figure class="image is-square has-background-white-ter">
				<a :href="productUrl">
					<img :src="productImg" />
				</a>
			</figure>
		</div>
		<div class="card-content">
			<div class="content">
				<a :href="productUrl">
					<h3 class="title is-size-6 is-marginless">
						{{ product.title }}
					</h3>
				</a>
				<p class="subtitle is-size-2 has-text-weight-bold is-marginless">
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
import CheckIcon from 'vue-material-design-icons/CheckCircle.vue';
import CartOffIcon from 'vue-material-design-icons/CartOff.vue';

export default {
	name: 'ProductCard',
	props: {
		product: {
			type: Object
		}
	},
	components: {
		CheckIcon,
		CartOffIcon
	},
	computed: {
		productUrl() {
			return '/products/' + this.product.slug;
		},
		productImg() {
			return require('@/assets/images/products/transparent/' +
				this.product.image[1]);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
	box-shadow: none !important;

	.card-content {
		padding: 1.5rem 0;
	}
}
</style>
