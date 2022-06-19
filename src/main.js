import Vue from 'vue';

import '@babel/polyfill';
import 'mutationobserver-shim';

import './plugins/bootstrap-vue';
import './plugins/fontawesome';

import App from './App.vue';

import router from './router';
import store from './store';
import api from './api';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  api,
  render: (h) => h(App)
}).$mount('#app');
