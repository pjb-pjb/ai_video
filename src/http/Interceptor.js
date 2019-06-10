import {handleRequestLoading,handleResponseLoading} from "./loading";
// import base64 from "@/utils/base64.js";

//拦截器
export default function (axios) {
    //定义一个请求拦截器
    axios.interceptors.request.use(function (config) {
        handleRequestLoading();
		//配置头信息
		// config.headers = {
         //    expireInSeconds:86400,
         //    accessToken:sessionStorage.getItem(base64.encode("token"))
		// };
        return config;
    });
	//定义一个响应拦截器
    axios.interceptors.response.use(function (config) {
        handleResponseLoading();
        return config;
    },function () {
        handleResponseLoading();
    });
}