<template>
    <div class="sjtj my-height">
        <el-row class="my-height">
            <el-col :span="5" class="my-height">
                <card :isShowTop="false" height="100%">
                    <el-tree :data="data1" @node-click="handleNodeClick1"></el-tree>
                </card>
            </el-col>
            <el-col :span="19" class="my-height" style="padding: 0 5px;">
                <ul class="img-box">
                    <li>
                        <div class="img">
                            <img src="/static/img/35kV设备区1号主变压器35kV侧3001断路器A相QS1压力表.jpg" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="/static/img/35kV设备区1号主变压器35kV侧3001断路器A相QS1压力表.jpg" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="/static/img/35kV设备区1号主变压器35kV侧3001断路器A相QS1压力表.jpg" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="img">
                            <img src="/static/img/35kV设备区1号主变压器35kV侧3001断路器A相QS1压力表.jpg" alt="">
                        </div>
                    </li>
                </ul>
                <div style="height: 65%;">
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {
        $ajax,
        getOutDoorRobot,
        getInDoorRobot,
        addOutDoorRobotTask,
        sendInDoorRobotTask,
        sendOutDoorRobotTask,
        saveOutDoorRobotTask,
    } from "@/http/api/mapi.js";

    var robotDing = null;
    export default {
        name: "sjtj",
        data(){
            return {
                data1: [{
                    label: '福瑞站',
                    children: [{
                        label: '变压器',
                        path:"byq"
                    }]
                }],
                isSaveInDoorRobot:false
            }
        },
        methods:{
            handleNodeClick1(data,node){
                if(node.level==2){
                    data = node.data;
                    this.$router.push(this.$store.state.path+"/sjtj/"+data.path);
                }
            },
            // 室内机器人下达任务

            sendInDoorRobotTask(){

                var data = {
                    list:[
                        {"checkpointId":"00001"},
                        {"checkpointId":"00002"},
                        {"checkpointId":"00003"},
                        {"checkpointId":"00004"},
                        {"checkpointId":"00005"},
                    ],
                    taskType:"1", // 表示定点任务
                    uploadFlag:"0", // 表示上传任务报告
                };

                // 设置请求的数据
                sendInDoorRobotTask.params={'params':data};

                // 发送ajax请求
                $ajax(sendInDoorRobotTask,(res)=>{
                    //  判断是否成功
                    if (res.data.code == '200' && res.data.data.result =='0'){
                        // 下发任务成功
                    }else{
                        // 下发任务失败
                    }
                });
            },

            // 获取室内机器人相关数据
            // 通过该接口
            getInDoorRobotData(){
                $ajax(getInDoorRobot,(res)=>{
                    // 获取实时结果
                    if (res.data.Code == "200"){
                        // 将数据返回后台处理
                        // 获取任务的ID可以获取任务ID

                        // 判断是否跟新数据
                        if (!this.isSaveInDoorRobot){
                            this.saveInDoorRobotTask(data);
                        }

                        // 用于查询相关预置位的结果
                        var taskId = res.data.data.taskType;
                        // 获取任务的实时结果
                        var resultList = res.data.data.taskResultList;

                    }
                });
            },
            // 获取室内机器人结果记录数据
            getInDoorRobotsInfo(){
                var data = {
                    taskId:"",
                };
                // 设置请求的数据
                getInDoorRobotsInfo.params={'params':data};
                $.ajax(getInDoorRobotsInfo,(res)=>{
                    // 判断是否请求成功
                    if (res.data.code=='200' && res.data.cpResultList){

                        // 发送后台更新数据
                         
                    }

                });
            },
            //  新增室外机器人任务
            insertOutDoorRobotsTask(){
                // 设置请求数据
                addOutDoorRobotTask.data={
                    devId:"", //设备id的列表
                    taskName:"", //任务名称
                    taskType:"2", //任务类型
                    endActionId:"2", // 结束任务动作
                    loopType:"1",//任务的执行类型
                    runMode:"1",//机器人自动运行
                    recordVideo:"0",//是否录制视频
                    scheduleParam:"",//立即执行为空
                    scheduleTime:"",//立即执行为空
                    breakCurTask:"1",// 打断正在执行的任务
                };
                // 新增室外机器人任务
                $ajax(addOutDoorRobotTask,(res)=>{
                    //  判断是否执行成功

                    if(res.data.result && res.data.taskId){
                        // 新增任务成功
                        // 更新数据库室外机器人ID
                        this.saveOutDoorRobotTask({id:id,outdoorrobotId:data.taskId});
                        // 执行室外任务
                        this.sendOutDoorRobotTask(res.data.taskId);
                    }else{
                        //新增任务失败
                    }
                });
            },
            //  更新主任务室内机器人ID
            saveInDoorRobotTask(data){
                // 设置更新的数据
                saveOutDoorRobotTask.data = data;
                // 发送数据进行更新

                $ajax(saveOutDoorRobotTask,function(){
                    if (res.data.code == 200){
                        // 执行数据成功
                        this.isSaveInDoorRobot = true;
                    }else{
                        // 跟新数据失败
                    }
                });

            },
            //  更新主任务室外机器人ID
            saveOutDoorRobotTask(data){

                // 设置需要保存的主表数据
                saveOutDoorRobotTask.data = data;
                // 发送数据更新主表
                $ajax(saveOutDoorRobotTask,(res)=>{
                    // 判断是否执行成功

                    if (res.data.code == 200){
                        // 执行数据成功
                    }else{
                        // 跟新数据失败
                    }
                });

            },
            //  室外机器人下达任务
            sendOutDoorRobotTask(taskId){

                sendOutDoorRobotTask.data={
                    planId:taskId,//巡检任务的ID
                    devList:"", //设备id的列表
                    taskName:"", //任务名称
                    taskType:"2", //任务类型
                    finishActive:"2", // 结束任务动作
                    reap:"1",//任务的执行类型
                    runMode:"1",//机器人自动运行
                    recordVideo:"0",//是否录制视频
                    detail:"",//立即执行为空
                    dateTime:"",//立即执行为空
                    breakCurTask:"1",// 打断正在执行的任务
                };
                // 执行任务
                $ajax(sendOutDoorRobotTask,(res)=>{
                    //  判断是否执行成功
                    if(res.data.result && res.data.sessionId){
                        // 执行任务成功
                    }else{
                        // 执行任务失败

                        // 定时的获取机器人数据
                        robotDing = setInterval(()=>{
                            // 获取室内机器人相关数据
                            this.getInDoorRobotData();
                            // 获取室外机器人数据
                            this.getOutDoorRobotData();
                        },1000);
                    }

                });
            },
            // 获取室外机器人相关数据
            getOutDoorRobotData(){
                $ajax(getOutDoorRobot,(res)=>{

                    // 获取实时结果
                    if (res.data.InspectionResult){

                        // 如果结果存在
                        // 将数据返回交由后台处理

                    }

                });
            },

            // 点击执行任务
            sendTask(){
                // 清除任务ID
                // 默认为更新室内机器人主ID
                this.isSaveInDoorRobot = false;
                //  清除任务
                clearInterval(robotDing);
                //  执行站端任务

                //  执行室内机器人任务
                this.sendInDoorRobotTask();
                //  执行室外机器人任务
                this.insertOutDoorRobotsTask();
            }
        },
        mounted(){

            //监测告警，提示信息
            this.$alarmMonitor(this);
        }

    }
</script>

<style scoped lang="scss">
    .img-box{
        height: 35%;
        display: flex;
        li{
            width: 25%;
            height: 100%;
            padding: 0 5px;
            .img{
                background: yellow;
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
<style lang="scss">
    @import "../css/commom";
    .sjtj{
        @extend .reset-tree;
    }
</style>