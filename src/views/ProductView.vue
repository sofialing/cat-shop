<template>
	<div>
		<HeroSubpage :title="product.title" subtitle />
		<section class="section">
			<div class="container">
				<Breadcrumbs
					to="/products"
					page="Produkter"
					:to-category="productUrl"
					:category="product.category"
					:title="product.title"
				/>

				<div class="columns">
					<div class="column is-half">
						<figure class="image is-square">
							<img :src="productImg" />
						</figure>
					</div>
					<div class="column is-two-fifths is-offset-1">
						<ProductDetails />
						<AddToCart @toggle="toggle" />
						<transition
							enter-active-class="animated fadeInDown"
							leave-active-class="animated fadeOutUp"
						>
							<Notification
								v-if="notification"
								:message="message"
								@clicked="toggle"
							/>
						</transition>
						<ProductDescription />
					</div>
				</div>
				<ArrowIcon />
				<router-link to="/products" class="is-size-7 has-text-grey">
					Tillbaka till alla produkter
				</router-link>
			</div>
		</section>
	</div>
</template>

<script>
import AddToCart from '@/components/AddToCart.vue';
import ArrowIcon from 'vue-material-design-icons/ArrowLeft.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import HeroSubpage from '@/components/HeroSubpage.vue';
import Notification from '@/components/Notification.vue';
import ProductDescription from '@/components/ProductDescription.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'ProductView',
	components: {
		AddToCart,
		ArrowIcon,
		Breadcrumbs,
		HeroSubpage,
		Notification,
		ProductDescription,
		ProductDetails
	},
	data() {
		return {
			message: 'Produkt tillagd i varukorgen',
			notification: false
		};
	},
	computed: {
		...mapGetters({
			product: 'getCurrentProduct'
		}),
		productImg() {
			return require('@/assets/images/products/' + this.product.image[0]);
		},
		productUrl() {
			return '/products?category=' + this.product.category.toLowerCase();
		}
	},
	methods: {
		toggle() {
			this.notification = !this.notification;
		}
	}
};
</script>

<style scoped lang="scss">
.notification {
	margin-top: 1rem;
}

.arrow-left-icon {
	margin-right: 0.5rem;
	line-height: 1;
}
</style>
