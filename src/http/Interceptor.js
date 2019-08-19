import {handleRequestLoading, handleResponseLoading} from "./loading";
// import base64 from "@/utils/base64.js";

//拦截器
export default function (axios) {
    //定义一个请求拦截器
    axios.interceptors.request.use(function (config) {
        //判断请求的类型
        // 如果是后台接口
        if (config.url.indexOf('mapi')!=-1){
            config.headers = {
                expireInSeconds: 86400,
                Authorization:"Bearer "+sessionStorage.accessToken
            };
        }

        // 如果是室内机器人
        if (config.url.indexOf('CoreBusinessServer')!=-1){

            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'debug':true,
                'token':"A200Token"
            };
            config.transformRequest = [
                function(data) {
                    let ret = '';
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                    }
                    return ret;
                }
            ];
        }

        // 如果是室外机器人
        if (config.url.indexOf('E200')!=-1){

            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            config.transformRequest = [
                function(data) {
                    let ret = '';
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                    }
                    return ret;
                }
            ];
        }

        // handleRequestLoading();
        //配置头信息

        return config;
    });
    //定义一个响应拦截器
    axios.interceptors.response.use(function (config) {
        // handleResponseLoading();
        return config;
    }, function () {
        // handleResponseLoading();
    });
}