<template>
    <div class="sjtj my-height">
        <div class="card-left">
            <el-tree :default-expand-all="true" :data="data1" @node-click="handleNodeClick1"></el-tree>

        </div>
        <div class="card-right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                data1: [{
                    label: '福瑞站',
                    children: [
                      {
                        label: '轮训记录',
                        path:"lxjl"
                      },
                      {
                        label: '轮训记录饼图',
                        path:"lxjlbt"
                      },
                      {
                        label: '告警记录',
                        path:"gjtj"
                      },
                      {
                        label: '告警记录饼图',
                        path:"gjbt"
                      },
                    ]
                }],
            }
        },
        methods:{
            handleNodeClick1(data,node){
                if(node.level==2){
                    data = node.data;
                    this.$router.push(this.$store.state.path+"/sjtj/"+data.path+"?n=5");
                }
            },
        },
        mounted(){
            //监测告警，提示信息
            this.$alarmMonitor(this);
            this.$router.push(this.$store.state.path+"/sjtj/lxjl?n=5");

        }

    }
</script>

<style scoped lang="scss">
    .sjtj{
        display: flex;
        height:99%;
        .card-left{
            width:400px;
            height:100%;
            box-sizing: border-box;
            padding:35px 10px 15px 10px;
            background: url(../assets/home/images/spjk-left.png) no-repeat;
            background-size: 100% 100%;
        }
        .card-right{
            width:calc(100% - 410px);
        }
    }
</style>
<style lang="scss">
    @import "../css/commom";
    .sjtj{
        @extend .reset-tree;
        @extend .reset-page;
    }
</style>