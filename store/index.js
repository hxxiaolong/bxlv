import Vue from "vue";
import Vuex from "vuex";
import footer from "./modules/footer";
import header from "./modules/header";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    footer,
    header
  }
});
