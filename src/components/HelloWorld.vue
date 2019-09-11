<template>

  <div class="container">
    <div class="row justify-content-start">
     <div class="col-md-6 offset-md-2">
       <h1>{{ message.sayHello }}</h1>
       <p>{{count}}</p>
       <button class="btn btn-primary mr-4" @click="decrement">Decrease</button>
       <button class="btn btn-primary" @click="increment">Increase</button>
     </div>
    </div>
<!--    <div class="row">-->
<!--      <div class="col-md-3">-->
<!--        <p>{{count}}</p>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="row">-->
<!--      <div class="col-md-6">-->
<!--        <button class="btn btn-primary" @click="increment">Increase</button>&nbsp;-->
<!--      </div>-->
<!--      <div class="col-md-6">-->
<!--        <button class="btn btn-primary" @click="decrement">Decrease</button>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="row">-->
<!--      <div class="col-md-3">-->
<!--        <router-link :to="{name:'NewQuote'}">Go to New Quote</router-link>-->
<!--      </div>-->
<!--    </div>-->
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
      },
      // newQuote(){
      //   return router.push({name:'newQuote'})
      // }
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
    //commit mutations in methods
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
