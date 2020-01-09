<template>
	<section class="section has-background-white-ter">
		<div class="container">
			<h2 class="title is-2 has-text-weight-bold has-text-centered">
				{{ title }}
			</h2>
			<div class="columns is-multiline">
				<div
					v-for="post in posts"
					v-bind:key="post.id"
					class="column is-one-third"
				>
					<BlogPostCard :post="post" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import BlogPostCard from '@/components/BlogPostCard.vue';

export default {
	name: 'FeatureBlogPosts',
	props: {
		posts: {
			type: Array
		},
		title: {
			type: String
		}
	},
	components: {
		BlogPostCard
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
