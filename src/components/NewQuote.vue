<template>
    <div id="app">
        <h1>My Vue Router Navigation Guards Explained</h1>


        <nav class="mainNav">
            <!-- use router-link component for navigation. -->
            <router-link :to="{ name: 'home'}">Home</router-link>
            <!-- specify the link by passing the `to` prop. -->
<!--            <router-link :to="{ name: 'user', params: { userId: 1} }">User One</router-link>-->
<!--            <router-link :to="{ name: 'user', params: { userId: 2} }">User Two</router-link>-->
<!--            <router-link :to="{ name: 'user', params: { userId: 3} }">User Three</router-link>-->
<!--            <router-link :to="{ name: 'bar'}">Bar</router-link>-->
<!--            <router-link :to="{ name: 'foo'}">Foo</router-link>-->
            <router-link :to="{ name: 'error'}">Error</router-link>
        </nav>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <section class="mainBody">
            <router-view></router-view>
        </section>

    </div>
</template>

<script>
    export default {

        name: "NewQuote",
        data:function () {
            return{

            }
        }
    }
</script>

<style scoped>

</style>