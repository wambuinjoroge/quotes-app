import Vue from 'vue';
import Router from 'vue-router';
import NewQuote from "./components/NewQuote";
import HelloWorld from "./components/HelloWorld";
import Wrapper from "./layouts/Wrapper";

Vue.use(Router);

export const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component: Wrapper,
            children:[
            {
                path:'',
                name:'HelloWorld',
                component:HelloWorld
            },
            {
                path:'new-quote',
                name:'NewQuote',
                component:NewQuote
            }
            ]
        } ,
    ]
});