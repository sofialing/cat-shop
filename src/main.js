import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'vue-material-design-icons/styles.css';
import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

require('./assets/main.scss');

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
