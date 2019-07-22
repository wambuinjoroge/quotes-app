<template>
    <div>
        <p>{{fy.atu}},This is my first quote!</p>
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