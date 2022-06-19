import axios from 'axios';

export default {
  isntall(Vue) {
    this.$root = Vue.$root;
    Vue.prototype.$apis = this;
  },
  rawRequest(method, url, params = null, payload = null) {
    return axios.request({
      method: method,
      baseURL: '/api',
      url: url,
      params: params,
      payload: payload
    });
  },
  rawGetRequest(url, params = null) {
    return this.rawRequest('GET', url, params);
  },
  rawPostRequest(url, params = null, payload = null) {
    return this.rawRequest('POST', url, params, payload);
  },
  get(url, params) {
    return this.rawGetRequest(url, params).catch((err) => {
      // Handle exceptions here
      console.log('Error happend while requesting: ' + url);
      console.log(err);
    });
  },
  post(url, params = null, payload = null) {
    return this.rawPostRequest(url, params, payload).catch((err) => {
      // Handle exceptions here
      console.log('Error happend while requesting: ' + url);
      console.log(err);
    });
  }
};
