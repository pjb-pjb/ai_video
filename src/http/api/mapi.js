let {$ajax} = require("../axios");
//存放api
let apis = {
    //获取值班信息
    "getDutyInfo":{
        url:"/mapi/services/app/FrontPageInfo/GetBaseViewWeatherAsync",
        method:"get",
        params:{

        },
        isId:true
    },
    //得到告警信息
    "getWarnInfo":{
        url:"/mapi/services/app/FrontPageInfo/GetBaseViewDeviceCountAsync",
        method:"get",
        params:{

        },
        isId:true
    },
    //登录
    "login":{
        url:"/mapi/TokenAuth/Authenticate",
        method:"post",
        data:{

        }
    },
    //得到告警列表
    "getWarnList":{
        url:"/mapi/services/app/FrontPageInfo/GetBaseAlarmInfosAsync",
        method:"get",
        params:{

        },
        isId:true
    }
};
apis.$ajax = $ajax;
module.exports = apis;
