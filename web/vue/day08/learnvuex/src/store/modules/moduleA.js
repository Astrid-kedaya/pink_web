export default {
    state: {
        name: 'ddd'
    },
    mutations: {
        updataName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        aUpdataName(context) {
            // 这个commit只能调当前mutation
            setTimeout(() => {
                context.commit('updataName', 'wangwu')
            }, 1000)
        }
    },
    getters: {
        fullname(state) {
            return state.name + '111'
        },
        fullname2(state, getters) {
            return getters.fullname + '222'
        },
        fullname3(state, getters, rootState) {
            return getters.fullname2 + rootState.counter
        }
    },
}
