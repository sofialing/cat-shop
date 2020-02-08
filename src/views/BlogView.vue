<template>
	<div>
		<Hero title="Nyheter, tips & råd" subtitle />
		<section class="section">
			<div class="container">
				<Breadcrumbs
					to="/blog"
					page="Blogg"
					to-category="/blog"
					:category="post.category"
					:title="post.title"
				/>

				<div class="columns is-multiline">
					<div class="column is-full">
						<figure class="image is-4by3">
							<img :src="postImg" />
						</figure>
					</div>
					<div class="column is-four-fifths">
						<h2 class="title is-1">{{ post.title }}</h2>
						<p class="subtitle is-6">
							Publicerad {{ postDate }} av {{ post.author }}
						</p>
						<p class="content">{{ post.content }}</p>
					</div>
				</div>
				<arrow-icon />
				<router-link to="/blog" class="is-size-7 has-text-grey">
					Tillbaka till alla inlägg
				</router-link>
			</div>
		</section>
	</div>
</template>

<script>
import moment from 'moment';
import HeroSubpage from '@/components/HeroSubpage.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ArrowIcon from 'vue-material-design-icons/ArrowLeft.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'BlogView',
	components: {
		Hero: HeroSubpage,
		Breadcrumbs,
		ArrowIcon
	},
	computed: {
		...mapGetters({
			post: 'getCurrentPost'
		}),
		postDate() {
			return moment.unix(this.post.posted.seconds).format('YYYY-MM-DD');
		},
		postImg() {
			return require('@/assets/images/blog/' + this.post.image);
		},
		categoryUrl() {
			return '/blog?category=' + this.post.category.toLowerCase();
		}
	}
};
</script>

<style scoped lang="scss"></style>
