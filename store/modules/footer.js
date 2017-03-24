const state = {
  count: 0
}
const mutations = {
  SET_SEARCH_LIST(state, list) {
    state.searchResultList = list;
  }
}

export default{
  state,
  mutations
}
