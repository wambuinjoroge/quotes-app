<template>
  <div class="hello">
    <h1>{{ message.sayHello }}</h1>
    <p>{{count}}</p>
  </div>
</template>

<script>
  import store from '../store'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
