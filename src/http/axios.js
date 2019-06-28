import axios from "axios";
//import base64 from "@/utils/base64.js";
function $ajax(config, success, error) {
    //添加变电站id
    // let subId = sessionStorage[base64.encode("subId")];
    // if(subId){
    //     config.data.subId = base64.decode(subId);
    // }
    if(config.isId){
        if(config.method=="post"){
            config.data.ssdzId = sessionStorage.ssdzId;
        }else {
            config.params.ssdzId = sessionStorage.ssdzId;
        }
    }
    axios(config).then((res) => {
        if(res){
            typeof success==="function"&&success(res.data);
        }else {
            success(res);
        }
    }).catch((res) => {
        typeof error==="function"&&error(res);
    });
}
export {$ajax};
