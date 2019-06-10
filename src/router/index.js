import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/notFound';
import Index from '@/components/index';


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
            path:"*",
            component:NotFound
        }
    ]
});


//路由守卫
//进入路由之前
// router.beforeEach((to, from, next) => {
//
// });
export default router;

