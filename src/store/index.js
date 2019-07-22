import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state:{
        count:0
    },
    // mutations:{
    //     increment(state){
    //         state.count ++
    //     }
    // }
});

// store.commit('increment');
// console.log(store.state.count)

// new Vue({
//     el:'#app',
//     computed:{
//         count(){
//             return store.state.count
//         }
//     }
// })