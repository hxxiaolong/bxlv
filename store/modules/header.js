/**
 * Created by Administrator on 2017/3/24.
 */
const state = {
  headerValue: 0
}
const mutations = {
  getHeaderValue(state){
    state.headerValue++;
  }
}

export default {
  state,
  mutations
}
