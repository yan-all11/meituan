const moduleA = {
    namespaced:true,
    state: {
        count: 1
    },
    getters: {
        sum(state) {
            return state.count * 20 + 100
        }
    },
    mutations: {
        // add(state,num){
        //   state.count+=num;
        // },
        addMutation(state, num) {
            state.count += num;
        }
    },
    actions: {
        addAction({ commit }) {
            setTimeout(() => {
                commit('addMutation', 100)
            }, 1000)
        }
    }
}
export default moduleA;