<template>
	<div class="column is-4 is-offset-1">
		<div class="table-container">
			<table class="table is-fullwidth">
				<thead>
					<tr>
						<th colspan="2">
							<h2 class="title is-4">Totalsumma</h2>
						</th>
					</tr>
				</thead>
				<tr>
					<td>Deltotal</td>
					<td>{{ sum }} kr</td>
				</tr>
				<tr>
					<td>Frakt</td>
					<td>Gratis</td>
				</tr>
				<tr class="has-text-weight-bold">
					<td>Summa</td>
					<td>{{ sum }} kr</td>
				</tr>
			</table>

			<button class="button is-primary is-fullwidth" @click="toggle">
				Gå till kassan
			</button>
		</div>
		<transition
			enter-active-class="animated fadeInDown"
			leave-active-class="animated fadeOutUp"
		>
			<Notification v-if="notification" :message="message" @clicked="toggle" />
		</transition>
	</div>
</template>

<script>
import Notification from '@/components/Notification.vue';

export default {
	name: 'CartDetails',
	components: {
		Notification
	},
	data() {
		return {
			notification: false,
			message:
				'Denna funktion är för tillfället inte tillgänglig. Försök igen senare'
		};
	},
	props: {
		sum: {
			type: Number,
			required: true
		}
	},
	methods: {
		toggle() {
			this.notification = !this.notification;
		}
	}
};
</script>

<style lang="scss" scoped>
button {
	font-weight: 700;
	text-transform: uppercase;
}
</style>
