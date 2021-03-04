import Vue from "vue";
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './request/request.js'
import Api from './request/api'

Vue.prototype.$api = Api
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
