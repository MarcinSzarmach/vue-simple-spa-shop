import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "./components/index";
import {
  sync
} from "vuex-router-sync";

sync(store, router);
Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App),
});