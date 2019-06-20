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
import Map from '@/components/map';
import Sjtj from '@/components/sjtj';
import Byq from '@/components/sjtj/byq';


//引入base64
//import base64 from "@/utils/base64.js";

Vue.use(Router);


var router = new Router({
    routes: [
        {
            path: "/home",
            component: Home,
            children:[
                {
                    path:"map",
                    component: Map
                },
                {
                    path:"main",
                    component:Index,
                    children:[
                        {
                            path: "znxs",
                            component: Znxs
                        },
                        {
                            path: "znld",
                            component: Znld
                        },
                        {
                            path:"qmjk",
                            component: Qmjk
                        },
                        {
                            path:"spjk",
                            component: Spjk
                        },
                        {
                            path:"xwfx",
                            component: Xwfx
                        },
                        {
                            path:"sjtj",
                            component: Sjtj,
                            children:[
                                {
                                    path:"byq",
                                    component:Byq
                                }
                            ]
                        },
                        {
                            path:"",
                            component: Qmjk
                        }
                    ]
                },
                {
                    path:"",
                    component: Map
                }
            ]
        },
        {
            path: "/home2",
            component: Home2,
            children:[
                {
                    path:"index",
                    components:{
                        left:Map,
                        right:Index
                    },
                    children:[
                        {
                            path: "znxs",
                            component: Znxs
                        },
                        {
                            path: "znld",
                            component: Znld
                        },
                        {
                            path:"qmjk",
                            component: Qmjk
                        },
                        {
                            path:"spjk",
                            component: Spjk
                        },
                        {
                            path:"xwfx",
                            component: Xwfx
                        },
                        {
                            path:"",
                            component: Qmjk
                        }
                    ]
                }
            ]
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
    let socket = Vue.prototype.connection;
    let $chart = Vue.prototype.$chart;
    $chart.clearCharts();
    for(let item in socket.methods){
        socket.off(item);
    }
    if(sessionStorage.isLogin=="yes"||to.path=="/login"){
        next();
    }else {
        next("login");
    }
});
export default router;

