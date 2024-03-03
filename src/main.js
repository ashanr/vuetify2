import Vue from 'vue';
import App from '@/App.vue'; // Ensure this points to the location of App.vue
import vuetify from '@/plugins/vuetify'; // Ensure this points to the location of vuetify.js

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
