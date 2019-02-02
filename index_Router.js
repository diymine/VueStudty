import Vue from 'vue';
import VueRouter from 'vue-router';
import test from './test.vue';
import testRoute from './testRoute.vue';

Vue.use(VueRouter);

const Routers = [{
        path: '/test',
        component: test,
        meta: {
            title: "首页"
        }
    },
    {
        path: '/testRoute',
        component: testRoute,
        meta: {
            title: "关于"
        }
    }
]

const RouterConfig = {
    //使用HTML5 的History 路由模式
    mode: 'history',
    routes: Routers
}
const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
    // if (window.localStorage.getltem('token * )) {
    //   next();
    //   } else {
    //   next( * /login 1 );
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router
});