<template>
    <div>
        <p>{{fy.atu}},This is my first quote!</p>
        <br>
        <br>
        <br>
        <router-link :to="{name:'HelloWorld'}">Back to Hello</router-link>
    </div>
</template>

<script>
    export default {

        name: "NewQuote",
        data:function () {
            return{
                fy:{
                    atu:"Hello"
                }
            }
        }
    }
</script>

<style scoped>

</style>