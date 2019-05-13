import Vue from 'vue';
import Router from 'vue-router';
import NewQuote from "./components/NewQuote";
import HelloWorld from "./components/HelloWorld";
import Wrapper from "./layouts/Wrapper";

Vue.use(Router);

export const router = new Router({
    routes:[
        {
            path:'/hello',
            name:'hello',
            components:{
                wrapper:Wrapper,
                default:HelloWorld

            }
        } ,
        {
            path:'/',
            name:'test-quote',
            components:{
                wrapper:Wrapper,
                default:NewQuote
            }
        }
    ]
});