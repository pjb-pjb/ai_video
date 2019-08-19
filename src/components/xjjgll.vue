<template>
    <div class="my-height xjjgll">
        <div class="xjjgllBox">
            <div class="xjjgll-left">
                <div class="con">
                    <el-tree
                            :data="data1"
                            show-checkbox
                            :props="{label:'name'}"
                            @check="check"
                            ref="tree"
                            node-key="id"
                            :accordion="true"
                    ></el-tree>
                </div>

            </div>
            <div class="xjjgll-right">
                    <div class="searchBox">
                        <el-form :inline="true"  class="demo-form-inline">
                            <el-form-item label="开始时间">
                                <el-date-picker
                                        v-model="value1"
                                        type="date"
                                        placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="结束时间">
                                <el-date-picker
                                        v-model="value2"
                                        type="date"
                                        placeholder="结束时间">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">查询</el-button>
                                <el-button type="warning" @click="onReset">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                        <el-table-column
                                type="index"
                                :index="indexMethod">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="taskName"
                                label="任务名称"
                        >
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="name"
                                label="巡视点位"
                        >
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="resultTime"
                                label="识别时间"
                        >
                        </el-table-column>
                        <el-table-column
                                align="center"
                                label="识别图片"
                        >
                            <template slot-scope="scope">
                                <el-image
                                        title="点击查看图片"
                                        @click="seeImg($store.state.ROOT+scope.row.colorfulPath)"
                                        style="width: 190px; height: auto;cursor: pointer;"
                                        :src="$store.state.ROOT+scope.row.colorfulPath"
                                        fit="contain"></el-image>
                            </template>
                        </el-table-column>
                        <el-table-column
                                width="100"
                                align="center"
                                label="识别类型"
                        >
                            <template slot-scope="scope">
                                拍照
                            </template>
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="result"
                                label="识别结果"
                        >
                        </el-table-column>

                    </el-table>
                <el-pagination
                        background
                        :page-size="6"
                        :pager-count="11"
                        layout="prev,pager,next"
                        :small="true"
                        :total="total"
                        @current-change="currentChange"
                >
                </el-pagination>


            </div>

        </div>

        <div class="img-box"  v-show="isImage" style="height: 95vh;width:90vw;position: fixed;left: 0;top:0;z-index: 99999999999;display: flex;align-items: center;justify-content: center;right: 0;bottom: 0;margin: auto;">
            <el-image
                    style="height: 100%;width: 100%;"
                    :src="imgPath"
                    fit="contain"></el-image>
            <div class="img-close el-icon el-icon-close" @click="seeImg()">

            </div>
        </div>
    </div>
</template>
<script>
    import {$ajax,GetPagedsDto,GetLXResultData} from "@/http/api/mapi.js";
    export default {
        name: "spjk",
        data(){
            return {
                isImage:"",
                imgPath:"",
                pageSize:5,
                currentPage:0,
                total:0,
                // 树的显示
                props: {
                    label: 'name',
                },
                // 树型结构
                data1: [{
                    label: '福瑞变电站机器人设备',
                }],
                tableData:[],
                // 选中的树
                tags:[],
                // 开始时间
                value1:'',
                // 结束时间
                value2:"",

            }
        },
        mounted(){
            //监测告警，提示信息
            this.$alarmMonitor(this);
            this.GetPagedsDto();
            this.initTime();
        },
        methods:{
            currentChange(n){
                this.GetLXResultDataFunc(n-1);
            },

            //得到预置位树
            GetPagedsDto() {
                // 获取sessionStroage

                let xunjianTree = sessionStorage.xunjianTree;

                if (xunjianTree) {
                    this.data1 = JSON.parse(xunjianTree);
                }else{
                    $ajax(GetPagedsDto, (data) => {
                        this.data1 = data.result.items;
                        sessionStorage.xunjianTree = JSON.stringify(this.data1)

                    });
                }
            },
            GetLXResultDataFunc(n){
              // 获取数据
              GetLXResultData.params={
                MaxResultCount: this.pageSize,
                SkipCount: n*this.pageSize,
                ssdzId:sessionStorage.ssdzId,
                starttime:this.value1,
                endtime:this.value2,
              };
              let arr = [];
              this.tags.forEach(item=>{

                // 判断站端
                if (item.workType =="station") {

                  arr.push(item.id);
                }
                // 判断室外

                if (item.workType == "robot"){
                  arr.push(item.devPointId);
                }

                // 判断室内
                if (item.workType == "Indoorrobot"){
                  arr.push(item.checkPointId);

                }
              })


              GetLXResultData.params.pointId = arr.join(",");

              $ajax(GetLXResultData, (data) => {
                this.total = data.result.totalCount;
                data.result.items.forEach(item=>{
                  item.resultTime = item.resultTime.split("T").join(" ");
                });
                this.tableData  = data.result.items;
              });
            },
            //树复选框被点击的触发
            check() {
                this.tags = (this.$refs.tree.getCheckedNodes()).filter((val) => {
                    return val.level == 1000;
                });
            },
            // 提交数据
            onSubmit(){
              // 判断是否选择
              if (!this.tags.length){
                this.$message({
                  message: '请选择需要查询的点位',
                  type: 'error'
                });
                return "";
              }

              // 判断个数
              if(this.tags.length>=20){
                this.$message({
                  message: '最多选择20个巡检点',
                  type: 'error'
                });
                return "";
              }

              this.GetLXResultDataFunc(0);

            },
            // 重置数据
            onReset(){
                this.initTime();
                this.clear();
              this.$message({
                message: '重置成功',
                type: 'success'
              });
            },
            // 初始化时间
            initTime(){
              var date = new Date();

              var year = date.getFullYear();

              var month = date.getMonth()+1;
              var month1 = date.getMonth();
              if (month<10){
                month = "0"+month;
              }
              if (month1<10){
                month1 = "0"+month1;
              }
              var day = date.getDate();
              if (day<10){
                day = "0"+day;
              }

              this.value2 = `${year}-${month}-${day}`;
              this.value1 = `${year}-${month1}-${day}`;
            },
            // 清空树的选中信息
            clear() {
                this.tags = [];
                if (this.$refs.tree){
                    this.$refs.tree.setCheckedNodes(this.tags);
                }
            },

            //查看图片
            seeImg(imgPath){
                if(this.isImage){
                  this.imgPath = "";
                }else {
                  this.imgPath = imgPath;
                }
                this.isImage = !this.isImage;
            },

        }
    }
</script>
<style lang="scss">
    .xjjgll{
        .img-box{
            position: relative;
            .img-close{
                position: absolute;
                right:-10px;
                top:10px;
                text-align:center;
                line-height: 40px;
                width:40px;
                height:40px;
                border-radius: 20px;
                background-color: #ccc;
                color:#fff;
                &:hover{
                    color:#409eff;
                }
            }

        }
        .xjjgllBox{
            width:100%;
            height:100%;
            display: flex;
            justify-content: space-between;
        }
        .xjjgll-left{
            display: flex;
            width: 421px;
            height: 933px;
            height:98%;
            box-sizing: border-box;
            background: url(../assets/home/images/xjjgllLeft.png) no-repeat;
            background-size: 100% 100%;
            padding:35px 10px 20px 15px;
        }
        .xjjgll-right{
            width: 1429px;
            height: 933px;
            height:98%;

            box-sizing: border-box;
            padding-top: 46px;
            background: url(../assets/home/images/xjjgllRight.png) no-repeat;
            background-size: 100% 100%;
            .searchBox{
                margin-left:40px;
                margin-top:10px;
            }
        }
        .con {
            flex-grow: 1;
            box-sizing: border-box;
            width: 100%;
            overflow: auto;

            &::-webkit-scrollbar { /*滚动条整体样式*/
                width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
                height: 1px;
            }
            &::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                background: #7ecdf4;
            }
            &::-webkit-scrollbar-track { /*滚动条里面轨道*/
                -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                background: rgba(1, 44, 123, 0.8);
            }
        }
    }


</style>
<style  lang="scss">
    @import "../css/commom";
    .xjjgll{
        @extend .reset-tree;
        @extend .reset-page;
        @extend .reset-table2;
    }

    .el-form-item {
        margin-top: 10px;
        margin-bottom: 10px;
        .el-form-item__label{
            color:#fff;
        }
    }

</style>