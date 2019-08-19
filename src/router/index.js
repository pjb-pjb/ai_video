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
import Ldls from '@/components/ldls';
import Sjtj from '@/components/sjtj';
import Lxls from '@/components/lxls';
import Gjbt from '@/components/sjtj/gjbt';
import Gjtj from '@/components/sjtj/gjtj';
import Lxjl from '@/components/sjtj/lxjl';
import Lxjlbt from '@/components/sjtj/lxjlbt';
import Xjjgll from '@/components/xjjgll';
import Bjjk from '@/components/bjjk';



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
                            path:"ldls",
                            component: Ldls
                        },
                        {
                            path:"lxls",
                            component:Lxls
                        },
                        {
                            path:"xjjgll",
                            component:Xjjgll
                        },
                        {
                            path:"bjjk",
                            component:Bjjk
                        },
                        {
                            path:"sjtj",
                            component: Sjtj,
                            children:[
                                {
                                    path:"gjbt",
                                    component:Gjbt
                                },
                                {
                                    path:"gjtj",
                                    component:Gjtj
                                },
                                {
                                    path:"lxjl",
                                    component:Lxjl
                                },
                                {
                                    path:"lxjlbt",
                                    component:Lxjlbt
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
                            path: "sjtj",
                            component: Sjtj
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

