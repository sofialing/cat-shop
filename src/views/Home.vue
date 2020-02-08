<template>
	<div class="home">
		<Hero />
		<Intro />
		<Services />
		<FeatureProducts :products="getTopProducts" title="Populära produkter" />
		<FeatureSection />
		<FeatureProducts :products="getLatestProducts" title="Nytt i butiken" />
		<FeatureBlogPosts :posts="getLatestPosts" title="Senaste från bloggen" />
	</div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Intro from '@/components/Intro.vue';
import Services from '@/components/Services.vue';
import FeatureProducts from '@/components/FeatureProducts.vue';
import FeatureSection from '@/components/FeatureSection.vue';
import FeatureBlogPosts from '@/components/FeatureBlogPosts.vue';
import { mapGetters } from 'vuex';

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
	computed: {
		...mapGetters(['getTopProducts', 'getLatestProducts', 'getLatestPosts'])
	}
};
</script>
