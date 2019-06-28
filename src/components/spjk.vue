<template>
    <div class="my-height spjk">
        <el-row class="my-height">
            <el-col :span="14" class="my-height">
                <el-row class="my-height">
                    <el-col :span="9" class="my-height">
                        <card :isShowTop="false" height="100%">
                            <el-tree
                                    :props="props"
                                    :load="loadNode"
                                    lazy>
                            </el-tree>
                        </card>
                    </el-col>
                    <el-col :span="15" class="my-height">
                        <div class="my-height">
                            <div style="height: 50%">
                                <videoBox>
                                    <mVideo h5id="one1" token="f0af"></mVideo>
                                </videoBox>
                            </div>
                            <div style="height: 50%">
                                <videoBox>
                                    <mVideo h5id="one2"></mVideo>
                                </videoBox>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="10" class="my-height">
                <el-row class="my-height">
                    <el-col :span="13" class="my-height">
                        <div class="my-height">
                            <card :isShowTop="false" height="100%">
                                <el-tree
                                        :props="props"
                                        :load="loadNode1"
                                        lazy>
                                </el-tree>
                            </card>
                        </div>
                    </el-col>
                    <el-col :span="11" class="my-height">
                        <div class="my-height">
                            <div style="height: 33.333%">
                                <videoBox>
                                    <mVideo h5id="one3"></mVideo>
                                </videoBox>
                            </div>
                            <div style="height: 33.333%">
                                <videoBox>
                                    <mVideo h5id="one3"></mVideo>
                                </videoBox>
                            </div>
                            <div style="height: 33.333%">
                                <videoBox>
                                    <mVideo h5id="one3"></mVideo>
                                </videoBox>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import {$ajax,GetDeviceTree} from "@/http/api/mapi.js";
    export default {
        name: "spjk",
        data(){
            return {
                props: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                },
                data1: [{
                    label: '摄像头',
                    children: [{
                        label: '2号主变'
                    },{
                        label: '5022断路器'
                    },{
                        label: '5022-1隔离开关'
                    },{
                        label: '5022-2隔离开关'
                    },{
                        label: '1号主变'
                    },{
                        label: '2021隔离开关'
                    },{
                        label: '2021-1隔离开关'
                    },{
                        label: '2021-2隔离开关'
                    }]
                }],
                data2: [{
                    label: '机器人',
                    children: [{
                        label: '室内机器人',
                        data:{
                            n:1
                        },
                        children:[{
                            label: '1号主变'
                        },{
                            label: '2021隔离开关'
                        },{
                            label: '2021-1隔离开关'
                        },{
                            label: '2021-2隔离开关'
                        }]
                    },{
                        label: '室外机器人',
                        data:{
                            n:1
                        },
                        children:[{
                            label: '2号主变'
                        },{
                            label: '5022断路器'
                        },{
                            label: '5022-1隔离开关'
                        },{
                            label: '5022-2隔离开关'
                        }]
                    }]
                }]
            }
        },
        mounted(){
            //监测告警，提示信息
            this.$alarmMonitor(this);
        },
        methods:{
            loadNode(node, resolve) {
                console.log(node);
                if (node.level === 0) {
                    return resolve([{ name: sessionStorage.name}]);
                }else {
                    this.getData(node.data.id,node.level,resolve,2);
                }
            },
            getData(id,level,resolve,flag){
                GetDeviceTree.params = {
                  id,ssdzId:47,flag
                };
                $ajax(GetDeviceTree,(data)=>{
                    data = data.result&&data.result.items;
                    var arr = [];
                    data.forEach((val)=>{
                        if(level==4){
                            arr.push({
                                name:val.name,
                                id:val.id,
                                leaf:true
                            });
                        }else {
                            arr.push({
                                name:val.name,
                                id:val.id
                            });
                        }
                    });
                    console.log(arr);
                    resolve(arr);
                });
            },
            loadNode1(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: sessionStorage.name }]);
                }else {
                    this.getData(node.data.id,node.level,resolve,1);
                }
            }
        }
    }
</script>
<style scoped></style>
<style lang="scss">
    @import "../css/commom";
    .spjk{
        @extend .reset-tree;
    }
</style>