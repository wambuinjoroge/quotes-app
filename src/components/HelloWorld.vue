<template>
  <div class="hello">
    <h1>{{ message.sayHello }}</h1>
    <p>{{count}}</p>
    <button @click="increment">Increase Counter</button>&nbsp;
    <button @click="decrement">Decrease Counter</button>
  </div>
</template>

<script>

  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  const store = new Vuex.Store({
    state:{
      count:0
    },
    mutations:{
      increment(state){
        state.count ++
      },
      decrement(state){
        state.count --
      }
    }
  });
//
// import store from '../store/index'

export default {
  name: 'HelloWorld',
  data: function() {
    return {
      message:{
        sayHello:"Hello World"
      }
    };
  },
  computed:{
    count(){
      return store.state.count
    }
  },
  methods:{
    increment(){
      store.commit('increment')
    },
    decrement(){
      store.commit('decrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
