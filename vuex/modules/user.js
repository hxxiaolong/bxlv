/**
 * Created by Administrator on 2017/3/28.
 */
import * as types from "../types";

const state = {
  loginStatus: "5555"
};

const actions = {
  // 设置用户状态
  setLoginStatus({commit},type) {
    commit(types.CHANGE_LOGIN_STATE,type)
  }
};

const getters = {
  loginStatus:state=>state.loginStatus
}

const mutations = {
  // 改变用户状态
  [types.CHANGE_LOGIN_STATE](state,res){
    state.loginStatus = res;
  }
}

export default{
  state,
  actions,
  getters,
  mutations
}
