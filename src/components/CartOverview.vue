<template>
	<div class="columns">
		<div class="column is-7">
			<h2 class="title is-4">Varukorg ({{ products.length }} varor)</h2>
			<CartItem
				v-for="(product, index) in products"
				v-bind:key="product.title"
				:item="product"
				:index="index"
			/>
			<small>Artiklar i varukorgen är inte reserverade.</small>
		</div>

		<CartDetails :sum="sum" />
	</div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';
import CartDetails from '@/components/CartDetails.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'CartOverview',
	components: {
		CartItem,
		CartDetails
	},
	computed: {
		...mapGetters({
			products: 'getShoppingCart'
		}),
		sum() {
			return this.products.reduce(
				(sum, product) => sum + product.price * product.quantity,
				0
			);
		}
	}
};
</script>

<style lang="scss">
article:last-of-type {
	margin-bottom: 2rem;
}
</style>
