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
        url: "mapi/services/app/ForfrRoundConfig/GetFrRoundConfigInfo",
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
    // 获取轮巡结果数据
    "GetLXResultData":{
        url:"/mapi/services/app/ForfrRoundInfo/GetPagedsDtoByPointId",
        method:"get",
        params:{

        }
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
        url: "/mapi/services/app/ForfrRoundInfo/GetPagedsDtoBySsdzId",
        method: "get",
        params: {}
    },
    // 获取标记信息
    "Get500and35ForList":{
        url:"/mapi/services/app/ForFrDevice/Get500and35ForList?devqy=08d71199-6d6c-dccf-eab4-14c5caf5fee3&devqy=08d71175-beb6-0b81-99d0-65be2187cac4",
        method:"get",
        params: {}
    },
    // 发送室内机器人任务
    "sendInDoorRobotTask": {
        url: "CoreBusinessServer/cbsTaskViewController/startCustomTask.action",
        method: "post",
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
            'debug':true,
            'token':"A200Token"
        },

        transformRequest: [
            function(data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                return ret;
            }
        ],

    },
    // 获取室内机器人
    "getInDoorRobot":{
        url:"CoreBusinessServer/cbsTaskViewController/queryTaskStatus.action",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    },
    // 添加室外机器人任务
    "addOutDoorRobotTask":{
        url:"E200/xjjh/insertInspectionTask.action",
        method:"post",
        data:{

        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [
            function(data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                return ret;
            }
        ],

    },
    // 获取告警记录柱状图
    "getGJZhuZhuanTu":{
        url : "mapi/services/app/BaseAlarmInfos/GetInfoBySsdzIdAndDate",
        method:"get",
        params:{
            ssdzid : 47
        }

    },

    // 获取告警记录柱状图
    "getGJBingTu":{
        url : "mapi/services/app/BaseAlarmInfos/GetPieAlamInfoBySsdzId",
        method:"get",
        params:{
            ssdzid : 47
        }

    },
    // 获取轮巡记录饼图
    "getLXBingTu":{
        url:"mapi/services/app/ForfrRoundInfo/GetPieForFrRoundInfoBySsdzId",
        method:"get",
        params:{
            ssdzid : 47
        }
    },
    // 获取轮巡视记录柱状图
    "getLXZhuZhuanTu":{
        url:"mapi/services/app/ForfrRoundInfo/GetForFrRoundInfoBySsdzIdAndDate",
        method:"get",
        params:{
            ssdzid : 47
        }
    },
    // 获取告警列表
    "getAlarmData":{
        url:"mapi/services/app/BaseAlarmInfos/GetPagedsDtoBySsdzId",
        method:"get",
    },
    // 获取联动配置详情
    "getLianDongConfig":{
        url:"/mapi/services/app/BaseViewLinkageDev/GetLinkageDevInfo",
        method:"get",
    },
    // 获取联动告警详细信息
    "getLianDongInfoById":{
        url:"/mapi/services/app/BaseAlarmInfos/Get",
        method:"get",
    },
    "sendOutDoorRobotTask":{
        url:"E200/socket/sendTaskPlanRequest.action",
        method:"post",
        data:{
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [
            function(data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                return ret;
            }
        ],
    },

    // 获取室外机器人告警
    "getOutDoorRobotDeviceAlarm":{
        url:"E200/ycgj/queryDeviceAlarm.action",
        method:"post",
        data:{
          pageSize: 1000,
          startIndex: 1,
          review: 0,
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [
            function(data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                return ret;
            }
        ],
    },
    // 获取室内机器人告警
    "getInDoorRobotDeviceAlarm":{
        url:"",
    },

    // 获取室外机器人ID

    "getOutDoorRobotId": {
        url:"E200/socket/queryAllRobotStatus.action",
        method: "post",
        data: {},
    },
    // 获取室外机器人
    "getOutDoorRobot":{
        url:"E200/lscx/queryInspectionPoint.action",
        method:"post",
        data:{

        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [
            function(data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                return ret;
            }
        ],
    },
    // 通过任务ID获取请求结果
    "getInDoorRobotsInfo":{
        url:"/CoreBusinessServer/CBS/record/getInspectionTaskReport.action",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'debug':true,
            'token':"A200Token"
        },
        transformRequest: [
            function(data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                return ret;
            }
        ],
    },

    'saveOutDoorRobotTask':{
        url:"/mapi/services/app/ForfrRoundInfo/UpdateDtoByKey",
        method :"put",
        data:{

        }
    },
    'saveOutDoorRobotZiTask':{
        url:"/mapi/services/app/ForfrRoundInfo/UpdateSubDto",
        method :"put",
        data:{

        }
    },
    'saveInDoorRobotTask':{
        url:"/mapi/services/app/ForfrRoundInfo/UpdateDtoByKey",
        method :"put",
        data:{
        }
    },
    'saveInDoorRobotZiTask':{
        url:"/mapi/services/app/ForfrRoundInfo/UpdateSubDto",
        method :"put",
        data:{
        }
    },
    //创建报告
    "CreateRoundWordAsync":{
        url:"/mapi/services/app/ForfrRoundInfo/CreateRoundWordAsync",
        method:"post",
        params:{

        }
    },
    "GetPointPagedsDto":{
        url:"/mapi/services/app/ForFrDevice/GetPointPagedsDto",
        method:"get"
    },
    // 获取设备区域
    "getDevAreaData":{
        url:"/mapi/services/app/PublicDict/GetPublicDictAsync",
         method:"get",
        params:{
            input:"设备区域"
        }
    },
    "getDevTreeData":{
        url:"/mapi/services/app/ForFrDevice/GetPagedsDtoForSort?devqy=08d70cc8-a933-45a8-08cf-355bed4670d3&devqy=08d714e3-f3f3-61f8-ed81-385109a3c3bd",
        method:"get"
    },
    // 获取设备类型
    "getDevTypeData":{
        url:"/mapi/services/app/PublicDict/GetPublicDictAsync",
        method:"get",
        params:{
            input:"设备类型"
        }
    }
};
apis.$ajax = $ajax;
module.exports = apis;
