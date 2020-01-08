<template>
	<div class="home">
		<Hero />
		<Intro />
		<Services />
		<FeatureProducts
			:products="products.topSellers"
			title="Populära produkter"
		/>
		<FeatureSection />
		<FeatureProducts :products="products.newArrivals" title="Nytt i butiken" />
		<FeatureBlogPosts title="Senaste från bloggen" />
	</div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Intro from '@/components/Intro.vue';
import Services from '@/components/Services.vue';
import FeatureProducts from '@/components/FeatureProducts.vue';
import FeatureSection from '@/components/FeatureSection.vue';
import FeatureBlogPosts from '@/components/FeatureBlogPosts.vue';

import { Products } from '@/services/Products';

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
	data() {
		return {
			products: new Products()
		};
	}
};
</script>
