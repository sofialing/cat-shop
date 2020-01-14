<template>
	<nav class="breadcrumb" aria-label="breadcrumbs">
		<ul>
			<li class="is-size-7">
				<router-link :to="to" class="has-text-grey">{{ page }}</router-link>
			</li>
			<li class="is-size-7">
				<router-link :to="toCategory" class="has-text-grey">{{
					category
				}}</router-link>
			</li>
			<li class="is-active is-size-7">
				<a href="#">{{ title }}</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Breadcrumbs',
	props: {
		to: {
			type: String,
			required: true
		},
		page: {
			type: String,
			required: true
		},
		category: {
			type: String,
			required: true
		},
		toCategory: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		}
	}
};
</script>
