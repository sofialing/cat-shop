<template>
	<div>
		<Hero title="Din varukorg" subtitle />
		<section class="section">
			<div class="container">
				<CartOverview v-if="products.length" />
				<CartEmpty v-else />
			</div>
		</section>
	</div>
</template>

<script>
import HeroSubpage from '@/components/HeroSubpage.vue';
import CartOverview from '@/components/CartOverview.vue';
import CartEmpty from '@/components/CartEmpty.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'Cart',
	components: {
		Hero: HeroSubpage,
		CartOverview,
		CartEmpty
	},
	computed: {
		...mapGetters({
			products: 'getShoppingCart'
		})
	}
};
</script>

<style scoped lang="scss"></style>
