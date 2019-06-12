import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/notFound';
import Index from '@/components/index';
import Znxs from '@/components/znxs';
import Znld from '@/components/znld';
import Login from '@/components/login';
import Qmjk from '@/components/qmjk';


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
                    path:"",
                    component: Qmjk
                }
            ]
        },

        {
            path: "/login",
            component: Login
        },
        {
            path: "*",
            component: NotFound
        }
    ]
});


//路由守卫
//进入路由之前
router.beforeEach((to, from, next) => {
    if(sessionStorage.isLogin=="yes"||to.path=="/login"){
        next();
    }else {
        next("login");
    }
});
export default router;

