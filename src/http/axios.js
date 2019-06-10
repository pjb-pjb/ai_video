import axios from "axios";
//import base64 from "@/utils/base64.js";
function $ajax(config, success, error) {
    //添加变电站id
    // let subId = sessionStorage[base64.encode("subId")];
    // if(subId){
    //     config.data.subId = base64.decode(subId);
    // }
    axios(config).then((res) => {
        typeof success==="function"&&success(res);
    }).catch((res) => {
        typeof error==="function"&&error(res);
    });
}
export {$ajax};
