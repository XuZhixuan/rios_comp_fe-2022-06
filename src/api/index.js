import Vue from 'vue';
import Apis from './requests';
import apis from './api';

const api = new Apis(apis);

Vue.use(api);
