
const state = {
  token: 'xxxx',
  access: '',
  userName: '',
  userId: ''
}
const actions = {
  handleLogin: async ({ commit }, { username }) => {
    commit('setUserName', username)

  }
}
const mutations = {
//   setToken (state, token) {
//     state.token = token
//   },
  setUserName (state, username) {
    state.userName = username
  }
}
const getters = {

}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
  }