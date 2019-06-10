let {$ajax} = require("../axios");
//存放api
let apis = {
    //登录验证
    "name":{
        url:"/api/TokenAuth/Authenticate",
        method:"post",
        data:{
        }
    }
};
apis.$ajax = $ajax;
module.exports = apis;
