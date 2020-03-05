import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)
export const types = {
    token: 'token',
}

export default new Vuex.Store({
    state: {
        [types.token]: false
    },
    mutations: {
        [types.token]: (state, res) => {
            state[types.token] = res
        }
    },
    action: {
        [types.token]: async ({commit}, state) => {
            return commit([types.token, state])
        }
    },
    getters: {
        getToken: (state) => {
            return state[types.token]
        }
    },
    modules: {
        user
    }
})