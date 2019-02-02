import Vue from 'vue';
import VueRouter from 'vue-router';
import test from './test.vue';
import testRoute from './testRoute.vue';

Vue.use(VueRouter);

const Routers = [{
        path: '/test',
        component: test
    },
    {
        path: '/testRoute',
        component: testRoute
    }
]

const RouterConfig = {
    //使用HTML5 的History 路由模式
    mode: 'history',
    routes: Routers
}
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router
        // render: h => {
        //     return h(testRoute)
        // }
});