// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import vueResource from "vue-resource";
import App from "./App";
import Goods from "goods";
import Ratings from "ratings";
import Seller from "seller";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.config.productionTip = false;
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(vueResource);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {path: "/goods", component: Goods},
    {path: "/ratings", component: Ratings},
    {path: "/seller", component: Seller}
  ]
});

const app = new Vue({
  store,
  "router": router,
  "render": h => h(App)
}).$mount("#app");



