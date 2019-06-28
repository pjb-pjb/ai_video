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
                        <div class="videoBody" style="height:calc(100% - 40px)">
                            <div :style="'width:'+videoMenuData[activeMenu].width+';height:'+videoMenuData[activeMenu].height" v-for="n in videoMenuData[activeMenu].num">
                                <videoBox>
                                    <mVideo :h5id="'one'+n" :token="videoToken[n]"></mVideo>
                                </videoBox>
                            </div>
                        </div>
                        <div class="videoMenu" style="">
                            <div @click="clickVideoMenu(key)" v-for="item,key in videoMenuData" :class="key == activeMenu ?'active':''">
                                {{item.innerHTML}}
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
                videoMenuData:[
                    {
                        innerHTML:"1",
                        width:"100%",
                        height:"100%",
                        num:1
                    },

                    {
                        innerHTML:"4",
                        width:"50%",
                        height:"50%",
                        num:4
                    },
                    {
                        innerHTML:"6",
                        width:"50%",
                        height:"33.33%",
                        num:6
                    },
                    {
                        innerHTML:"9",
                        width:"33.33333%",
                        height:"33.33333%",
                        num:9
                    }
                ],
                activeMenu:2,
                videoToken:[
                    'one',
                    'one1',
                    'one2',
                    'one3',
                    'one4',
                    'one5',
                    'one6',
                    'one7',
                    'one8',
                    'one9',
                ],
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
            clickVideoMenu(key){
                this.activeMenu = key;
            },
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
    .videoBody{
        >div{
            float:left;
        }
    }
    .videoMenu {
        height:40px;
        text-align: center;
        >div{
            width:38px;
            height:38px;
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
            line-height: 40px;
            font-size: 22px;
            color:#fff;
            border:1px solid #fff;
            margin:0px 10px;
            cursor: pointer;
        }
        .active{
            color:#01d8ff;
            border:1px solid #01d8ff;
        }
    }
</style>