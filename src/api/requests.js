import axios from 'axios';

class Apis {
  install(Vue) {
    Vue.prototype.$apis = (name, params) => {
      let api = this.apiList[name];
      return this.request(api.url(params.params ?? null), api.method, params.queries ?? null, params.payload ?? null);
    };
  }
  rawRequest(url, method, queries, payload) {
    return axios.request({
      method: method,
      baseURL: '/api',
      url: url,
      params: queries,
      payload: payload
    });
  }
  request(url, method, queries = null, payload = null) {
    return this.rawRequest(url, method, queries, payload).catch((err) => {
      // Handle exceptions here
      console.log(err);
    });
  }
  apiList;
  constructor(apiList) {
    this.apiList = apiList;
  }
}

export default Apis;
