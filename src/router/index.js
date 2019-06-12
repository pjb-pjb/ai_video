import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/notFound';
import Index from '@/components/index';
import Znxs from '@/components/znxs';
import Znld from '@/components/znld';
import Home from '@/components/home';


//引入base64
//import base64 from "@/utils/base64.js";

Vue.use(Router);


var router = new Router({
    routes: [
        {
            path: "/",
            component: Index,
        },
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/znxs",
            component: Znxs
        },
        {
            path: "/znld",
            component: Znld
        },
        {
            path: "*",
            component: NotFound
        }
    ]
});


//路由守卫
//进入路由之前
// router.beforeEach((to, from, next) => {
//
// });
export default router;

