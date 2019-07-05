let {$ajax} = require("../axios");
//存放api
let apis = {
    //获取值班信息
    "getDutyInfo": {
        url: "/mapi/services/app/FrontPageInfo/GetBaseViewWeatherAsync",
        method: "get",
        params: {},
        isId: true
    },
    //得到告警信息
    "getWarnInfo": {
        url: "/mapi/services/app/FrontPageInfo/GetBaseViewDeviceCountAsync",
        method: "get",
        params: {},
        isId: true
    },
    //登录
    "login": {
        url: "/mapi/TokenAuth/Authenticate",
        method: "post",
        data: {}
    },
    //得到告警列表
    "getWarnList": {
        url: "/mapi/services/app/FrontPageInfo/GetBaseAlarmInfosAsync",
        method: "get",
        params: {},
        isId: true
    },
    //获取摄像头预置位信息
    "GetDeviceTree": {
        url: "mapi/services/app/FrontPageInfo/GetDeviceTree",
        method: "get",
        params: {}
    },
    //获取已有轮询配置信息
    "getLxList": {
        url: "/mapi/services/app/ForfrRoundConfig/GetFrRoundConfigInfo",
        method: "get",
        params: {}
    },
    //云台控制
    "ptz": {
        url: "/api/v1/Ptz",
        method: "get",
        params: {
            action: "preset",
            speed: 1
        }
    },
    //截图
    "Snapshot": {
        url: "/api/v1/Snapshot",
        method: "get",
        params: {}
    },
    //得到所有预置位列表
    "GetPagedsDto": {
        url: "/mapi/services/app/ForFrDevice/GetPagedsDto",
        method: "get",
        params: {}
    },
    //保存轮询报告
    "CreateForFrRoundInfoAndGetId": {
        url: "/mapi/services/app/ForfrRoundInfo/CreateForFrRoundInfoAndGetId",
        method: "post",
        data: {}
    },
    //更新报告
    "UpdateSubDto": {
        url: "/mapi/services/app/ForfrRoundInfo/UpdateSubDto",
        method: "put",
        data: {}
    },
    //得到轮询配置
    "getPagedsDto": {
        url: "/mapi/services/app/ForfrRoundInfo/GetPagedsDto",
        method: "get",
        params: {}
    },
    //创建报告
    "CreateRoundWordAsync":{
        url:"/mapi/services/app/ForfrRoundInfo/CreateRoundWordAsync",
        method:"post",
        params:{

        }
    }
};
apis.$ajax = $ajax;
module.exports = apis;
