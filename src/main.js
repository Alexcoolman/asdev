import '@babel/polyfill';
import 'mutationobserver-shim';
// Vue
import Vue from 'vue';
// Boostrap
import './plugins/bootstrap-vue';
// Scroll To
import './plugins/scroll-to';
// Font-Awesome
import './plugins/font-awesome';
// App
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
