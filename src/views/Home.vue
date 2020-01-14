<template>
	<div class="home">
		<Hero />
		<Intro />
		<Services />
		<FeatureProducts :products="getTopSellers()" title="Populära produkter" />
		<FeatureSection />
		<FeatureProducts :products="getNewArrivals()" title="Nytt i butiken" />
		<FeatureBlogPosts :posts="getLatestPosts()" title="Senaste från bloggen" />
	</div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Intro from '@/components/Intro.vue';
import Services from '@/components/Services.vue';
import FeatureProducts from '@/components/FeatureProducts.vue';
import FeatureSection from '@/components/FeatureSection.vue';
import FeatureBlogPosts from '@/components/FeatureBlogPosts.vue';

export default {
	name: 'home',
	components: {
		Hero,
		Intro,
		Services,
		FeatureProducts,
		FeatureSection,
		FeatureBlogPosts
	},
	props: {
		products: {
			type: Array,
			required: true
		},
		blogPosts: {
			type: Array,
			required: true
		}
	},
	methods: {
		getTopSellers() {
			return this.products.filter(product => product.rating === 5).slice(0, 4);
		},
		getNewArrivals() {
			const nr = this.products.length;
			return this.products.slice(nr - 4, nr);
		},
		getLatestPosts() {
			const nr = this.blogPosts.length;
			return this.blogPosts.slice(nr - 3, nr);
		}
	}
};
</script>
