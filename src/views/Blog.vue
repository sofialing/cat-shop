<template>
	<div>
		<Hero :title="title" subtitle />
		<section class="section has-background-white-ter">
			<div class="container">
				<div class="columns is-multiline">
					<div
						v-for="post in blogPosts"
						:key="post.id"
						class="column is-half"
					>
						<Post :post="post" />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import HeroSubpage from '@/components/HeroSubpage.vue';
import BlogPostCard from '@/components/BlogPostCard.vue';

export default {
	name: 'Blog',
	components: {
		Hero: HeroSubpage,
		Post: BlogPostCard
	},
	data() {
		return {
			title: 'Nyheter, tips & råd'
		};
	},
	computed: {
		blogPosts() {
			return this.$store.getters.getBlogPosts;
		}
	}
};
</script>
