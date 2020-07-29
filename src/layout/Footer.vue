<template>
	<footer class="footer has-background-black-bis has-text-white">
		<div class="container">
			<div class="columns">
				<div class="column">
					<h4 class="has-text-weight-bold">Kontakta oss</h4>
					<ul>
						<li>
							<a href="mailto:kundtjänst@catshop.com">kundtjänst@catshop.com</a>
						</li>
						<li>Tel. 010 - 123 45 67</li>
						<li>Vardagar mellan 9.00 - 16.00</li>
					</ul>
				</div>
				<div class="column">
					<h4 class="has-text-weight-bold">Besök oss</h4>
					<ul>
						<li>Drottninggatan 15,</li>
						<li>232 21 Helsingborg</li>
					</ul>
				</div>
				<div class="column">
					<h4 class="has-text-weight-bold">Följ oss på sociala medier</h4>
					<a href="http://facebook.com" target="_blank">
						<facebook-icon class="icon-2x" />
					</a>
					<a href="http://instagram.com" target="_blank">
						<instagram-icon class="icon-2x" />
					</a>
					<a href="http://linkedin.com" target="_blank">
						<linkedin-icon class="icon-2x" />
					</a>
					<a href="http://youtube.com" target="_blank">
						<youtube-icon class="icon-2x" />
					</a>
				</div>
			</div>
			<p class="is-size-7">&copy; 2019 Cat Shop - butiken för dig som älskar allt med katter!</p>
		</div>
	</footer>
</template>

<script>
import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
import LinkedinIcon from "vue-material-design-icons/Linkedin.vue";
import YoutubeIcon from "vue-material-design-icons/Youtube.vue";

export default {
	name: "Footer",
	components: {
		FacebookIcon,
		InstagramIcon,
		LinkedinIcon,
		YoutubeIcon,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
	color: #ffff;
}
.material-design-icon.icon-2x {
	margin-top: 0.5rem;
	height: 2.5em;
	width: 2.5em;
	line-height: 1;
	margin-right: 0.25rem;
}

.material-design-icon.icon-2x > .material-design-icon__svg {
	height: 2.5em;
	width: 2.5em;
}
</style>
