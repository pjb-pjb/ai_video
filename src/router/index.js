import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/notFound';
import Index from '@/components/index';
import Znxs from '@/components/znxs';
import Znld from '@/components/znld';
import Home from '@/components/home';
import Home2 from '@/components/home2';
import Login from '@/components/login';
import Qmjk from '@/components/qmjk';
import Spjk from '@/components/spjk';
import Xwfx from '@/components/xwfx';


//引入base64
//import base64 from "@/utils/base64.js";

Vue.use(Router);


var router = new Router({
    routes: [
        {
            path: "/",
            component: Index,
            children:[
                {
                    path: "/znxs",
                    component: Znxs
                },
                {
                    path: "/znld",
                    component: Znld
                },
                {
                    path:"/qmjk",
                    component: Qmjk
                },
                {
                    path:"/spjk",
                    component: Spjk
                },
                {
                    path:"/xwfx",
                    component: Xwfx
                },
                {
                    path:"",
                    component: Qmjk
                }
            ]
        },
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/home2",
            component: Home2,
        },
        {
            path: "/login",
            component:Login,
        },
        {
            path: "*",
            component: NotFound
        }
    ]
});


// 路由守卫
// 进入路由之前
router.beforeEach((to, from, next) => {
    if(sessionStorage.isLogin=="yes"||to.path=="/login"){
        next();
    }else {
        next("login");
    }
});
export default router;

