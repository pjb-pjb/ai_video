<template>
    <div class="my-height spjk">
        <el-row class="my-height">
            <el-col :span="12" class="my-height">
                <el-row class="my-height">
                    <el-col :span="9" class="my-height">
                        <card :isShowTop="false" height="100%">
                            <el-tree :data="data1" @node-click="handleNodeClick1"></el-tree>
                        </card>
                    </el-col>
                    <el-col :span="15" class="my-height">
                        <div class="my-height">
                            <div style="height: 50%">
                                <videoBox url="35kV设备区1号主变压器35kV侧300110接地刀闸分合指示.jpg">
                                    <mVideo h5id="one1" token="15e1--1"></mVideo>
                                </videoBox>
                            </div>
                            <div style="height: 50%">
                                <videoBox url="35kV设备区1号主变压器35kV侧避雷器B相动作次数.jpg">
                                    <mVideo h5id="one2" token="15e1--1"></mVideo>
                                </videoBox>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="12" class="my-height">
                <el-row class="my-height">
                    <el-col :span="9" class="my-height">
                        <div class="my-height">
                            <card :isShowTop="false" height="100%">
                                <el-tree :data="data2" @node-click="handleNodeClick2"></el-tree>
                            </card>
                        </div>
                    </el-col>
                    <el-col :span="15" class="my-height">
                        <div class="my-height">
                            <div style="height: 50%">
                                <videoBox url="35kV设备区1号站用变压器3011断路器A相QS1压力表.jpg">
                                    <mVideo h5id="one3" token="15e1--1"></mVideo>
                                </videoBox>
                            </div>
                            <div style="height: 50%">
                                <videoBox url="35kV设备区1号站用变压器30113隔离开关分合指示.jpg">
                                    <mVideo h5id="one4" token="15e1--1"></mVideo>
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
    export default {
        name: "spjk",
        data(){
            return {
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
        }
    }
</script>
<style scoped>



</style>
<style lang="scss">
    @import "../css/commom";
    .spjk{
        @extend .reset-tree;
    }
</style>