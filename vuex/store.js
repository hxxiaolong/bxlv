/**
 * Created by Administrator on 2017/3/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user";

Vue.use(Vuex);

export default  new Vuex.Store({
  modules:{
    user
  }
});
