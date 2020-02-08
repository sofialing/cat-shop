<template>
	<div class="card">
		<div class="card-image">
			<figure class="image is-4by3 has-background-white-ter">
				<router-link
					:to="postUrl"
					@click.native="saveCurrentPost(post)"
					tag="img"
					:src="postImg"
				>
				</router-link>
			</figure>
		</div>
		<div class="card-content">
			<div class="content">
				<router-link :to="postUrl" @click.native="saveCurrentPost(post)">
					<h3 class="title is-size-4 has-text-weight-bold">
						{{ post.title }}
					</h3>
				</router-link>
				<p><clock-icon class="clock-icon" />{{ postDate }}</p>

				<p>{{ postIntro }}</p>
				<router-link
					:to="postUrl"
					class="is-primary has-text-weight-bold is-uppercase"
					@click.native="saveCurrentPost(post)"
					>Läs mer <paw-icon class="paw-icon"
				/></router-link>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment';
import PawIcon from 'vue-material-design-icons/Paw.vue';
import ClockIcon from 'vue-material-design-icons/ClockOutline.vue';

export default {
	name: 'BlogPostCard',
	props: {
		post: {
			type: Object
		}
	},
	components: {
		PawIcon,
		ClockIcon
	},
	computed: {
		postUrl() {
			return '/blog/' + this.post.slug;
		},
		postImg() {
			return require('@/assets/images/blog/' + this.post.image);
		},
		postIntro() {
			return this.post.content.slice(0, 150) + '...';
		},
		postDate() {
			return moment.unix(this.post.posted.seconds).format('YYYY-MM-DD');
		}
	},
	methods: {
		saveCurrentPost(post) {
			this.$store.commit('saveCurrentPost', post);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
	box-shadow: none !important;
	.card-image {
		cursor: pointer;
	}
}

.title {
	margin-bottom: 0.25rem;
}

.clock-icon {
	margin-right: 0.5rem;
}

.paw-icon {
	margin-left: 0.25rem;
}
</style>
