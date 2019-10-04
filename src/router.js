import Vue from 'vue';
import Router from 'vue-router';
import NewQuote from "./components/NewQuote";
import HelloWorld from "./components/HelloWorld";
import Wrapper from "./layouts/Wrapper";

Vue.use(Router);
const Err = {
    template: `
    <section>
      You will not see this template. The error is passed to our error handler.
    </section>
    
  `
}
export const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component: Wrapper,
            children:[
            {
                path:'hello',
                name:'HelloWorld',
                component:HelloWorld
            },
            {
                path:'new-quote',
                name:'NewQuote',
                component:NewQuote
            },
            { path: "/error", name: 'error', component: Err },
            ]
        } ,
    ]
});

// GLobal BEFORE hooks:
router.beforeEach((to, from, next) => {
    console.log('Global -- beforeEach - fired')

    // re-route
    if (to.path === '/hello') {
        next('/')
    }
    // Abort navigation based on some criteria:
    // else if (to.path === '/user/1') {
    //   next(false)
    // }
    else if (to.path === '/error') {
        const err = new Error('My Error Message')

        // pass the error to onError() callback.
        next(err)
    }
    else {
        next()
    }
})

// Global beforeResolve
router.beforeResolve((to, from, next) => {
    console.log('Global -- beforeResolve - fired.')
    next()
})

// GLobal AFTER hooks:
router.afterEach((to, from) => {
    // This fires after each route is entered.
    console.log(`Global -- afterEach - Just moved from '${from.path}' to '${to.path}'`)
})



