import {Loading} from "element-ui";

let loading;

function startLoading() {
    loading = Loading.service({
        text:"加载中...",
        background:"#000"
    });
}
function stopLoading() {
    loading.close();
}
let requestingCount  = 0;
function handleRequestLoading() {
    if(!requestingCount) startLoading();
    requestingCount++;
}
function handleResponseLoading () {
    requestingCount--;
    if(!requestingCount)  stopLoading();
}

export {handleRequestLoading,handleResponseLoading};