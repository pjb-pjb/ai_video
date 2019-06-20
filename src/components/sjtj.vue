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
                }]
            }
        },
        methods:{
            handleNodeClick1(data,node){
                if(node.level==2){
                    data = node.data;
                    this.$router.push(this.$store.state.path+"/sjtj/"+data.path);
                }
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