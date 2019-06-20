//提供经常使用的工具js,需要在模块中引入
function getMenuList(routerArr, type) {
    var menuList = [];
    if (typeof type != "undefined") {
        menuList = routerArr.filter(function (val) {
            return val.type === type || val.type === 2;
        });
    }
    return menuList;
}

function HandleTree(routerArr1, powerN) {
    let childrenArr = [];
    let routerArr = [];
    // function fun(arr, item) {
    //     arr = arr.filter(function (val) {
    //         return val.powers.indexOf(powerN) > -1;
    //     });
    //     arr.forEach(function (val, key) {
    //         val.name = (item.name ? item.name : "") + val.name;
    //         val.path = (item.path ? item.path : "") + val.path;
    //         val.label = val.data.title;
    //         val.index = val.index ? val.index : item.index + "-" + key
    //         childrenArr.push({
    //             path: val.path,
    //             name: val.name,
    //             component: resolve => require([`@/components/${val.path}`], resolve),
    //             meta: {
    //                 title: val.data.title,
    //                 index: val.index
    //             }
    //         });
    //         if (val.children) {
    //             fun(val.children, val);
    //         } else {
    //         }
    //     });
    // }

    // fun(routerArr, {name: ""});
    routerArr1.forEach((item) => {
        var obj = {};
        if (item.powers.indexOf(powerN) > -1) {
            childrenArr.push({
                path:item.path,
                name:item.name,
                meta:{
                    title:item.data.title,
                    index:item.index,
                    leave:1
                },
                component:resolve => require([`@/components/${item.path}/index.vue`], resolve)
            });
            obj = {
                path:item.path,
                name:item.name,
                data:item.data,
                powers:[...item.powers],
                type:item.type,
                index:item.index,
                label:item.data.title,
                children:[]
            };
            if (item.children) {
                item.children.forEach((val, key) => {
                    if (val.powers.indexOf(powerN) > -1) {
                        childrenArr.push({
                            path:item.path+val.path,
                            name:item.name+val.name,
                            meta:{
                                title:val.data.title,
                                index:item.index+"-"+key,
                                leave:2
                            },
                            component:resolve => require([`@/components/${item.path}/${val.name}.vue`], resolve)
                        });
                        obj.children.push({
                            path:item.path+val.path,
                            name:item.name+val.name,
                            data:val.data,
                            powers:[...val.powers],
                            index:item.index+"-"+key,
                            label:val.data.title,
                            threeArr:val.threeArr
                        });
                        if(!val.threeArr){
                            val.threeArr = ["index"];
                        }
                        val.threeArr.forEach((ele)=>{
                            childrenArr.push({
                                path:item.path+val.path+"/"+ele,
                                name:item.name+val.name+ele,
                                meta:{
                                    leave:3
                                },
                                component:resolve => require([`@/components/${item.path}/three/${ele}.vue`], resolve)
                            });
                        });
                    }
                });
            }
            routerArr.push(obj);
        }
    });
    return [routerArr, childrenArr];
}

export {HandleTree, getMenuList};