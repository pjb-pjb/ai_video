<template>
    <div class="lxls my-height">
        <el-row class="my-height">
            <el-col class="my-height aaaa" :span="24">
                <div class="card">
                    <div class="toptitle"><span>历史报告</span></div>
                    <!--<div class="searchBox">-->
                        <!--<el-form :inline="true" :model="formInline" class="demo-form-inline">-->
                            <!--<el-form-item label="开始时间">-->
                                <!--<el-date-picker-->
                                        <!--v-model="value1"-->
                                        <!--type="date"-->
                                        <!--placeholder="选择日期">-->
                                <!--</el-date-picker>-->
                            <!--</el-form-item>-->
                            <!--<el-form-item label="结束时间">-->
                                <!--<el-date-picker-->
                                        <!--v-model="value2"-->
                                        <!--type="date"-->
                                        <!--placeholder="结束时间">-->
                                <!--</el-date-picker>-->
                            <!--</el-form-item>-->
                            <!--<el-form-item>-->
                                <!--<el-button type="primary" @click="onSubmit">查询</el-button>-->
                            <!--</el-form-item>-->
                        <!--</el-form>-->
                    <!--</div>-->
                    <div class="table">
                    <el-table
                            :data="workData"
                            border
                            style="width: 100%;">
                        <el-table-column
                            type="index"
                            :index="indexMethod">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            prop="taskName"
                            label="报告名称"
                        >
                        </el-table-column>
                        <el-table-column
                            align="center"
                            prop="roundTypeName"
                            label="任务类型"
                        >
                        </el-table-column>
                        <el-table-column
                            align="center"
                            prop="startTime"
                            label="生成时间"
                        >
                        </el-table-column>

                        <el-table-column
                            align="center"
                            label="状态"
                            :width="120"
                        >
                            <template slot-scope="scope">
                                <template v-if="scope.row.state">
                                    <el-button size="mini" type="primary">已完成</el-button>
                                </template>
                                <template v-else>
                                    <el-button size="mini" type="warning">已终止</el-button>

                                </template>

                            </template>
                        </el-table-column>

                        <el-table-column
                                :width="120"
                                label="查看结果"
                                align="center"
                        >
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="primary"
                                        @click="ckgb(scope.row.id)">查看报告
                                </el-button>
                            </template>
                        </el-table-column>
                        <el-table-column
                                :width="120"
                                label="下载"
                                align="center"
                        >
                            <template slot-scope="scope">
                                <a :href="$store.state.ROOT+scope.row.wordSavePath" download>
                                    <el-button
                                            size="mini"
                                            type="primary">下载
                                    </el-button>
                                </a>
                            </template>
                        </el-table-column>
                    </el-table>
                    </div>

                </div>
                <el-pagination
                        background
                        :page-size="13"
                        :pager-count="11"
                        layout="prev,pager,next"
                        :small="true"
                        :total="total"
                        @current-change="currentChange"
                >
                </el-pagination>
            </el-col>


        </el-row>

        <el-dialog top="50px" class="lxlsDialog" width="90%" title="" :visible.sync="isShowBaoGao">
            <div class="toptitle"><span>报告详情</span></div>
            <div class="top-line"></div>
            <div class="dislogMain" style="">
                <div>
                    <div class="toptitle2"><span>天气情况</span></div>
                    <el-row style="padding: 10px 20px;" class="dialogInfo">
                        <el-col :span="4" :offset="2">天气：晴</el-col>
                        <el-col :span="4">风向：西北风</el-col>
                        <el-col :span="4">风速：8</el-col>
                    </el-row>
                </div>
                <div class="top-line2"></div>
                <div>
                    <div class="toptitle2"><span>总体情况</span></div>
                    <el-table
                            :data="[bgXqInfo]"
                            border
                            style="width: 93%;margin:0 auto;">
                        <el-table-column
                            prop="ssdzName"
                            label="电站名称">

                        </el-table-column>
                        <el-table-column
                            prop="taskName"
                            label="巡检任务名称">
                        </el-table-column>
                        <el-table-column
                            prop="size"
                                label="测点数">
                        </el-table-column>
                        <el-table-column
                                prop="startTime"
                                label="巡检时间">
                            <template slot-scope="scope">
                                <span>{{scope.row.startTime.split("T").join(" ")}}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div>
                    <div class="toptitle2"><span>详细信息</span></div>

                    <el-table
                            :data="bgXqInfo.listBaseForFrRoundInfoSubsDto"
                            border
                            style="width: 93%;margin:0 auto;">
                        <el-table-column
                                type="index"
                                label="序号"
                                width="50px"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="设备名称">
                        </el-table-column>
                        <el-table-column
                                prop="displayName"
                                label="监测内容">
                        </el-table-column>
                        <el-table-column
                                label="图片">
                            <template slot-scope="scope">
                                <el-image
                                        title="点击查看图片"
                                        @click="seeImg($store.state.ROOT+scope.row.colorfulpath)"
                                        style="width: 100px; height: 100px;cursor: pointer;"
                                        :src="$store.state.ROOT+scope.row.colorfulPath"
                                        fit="contain"></el-image>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="result"
                                label="巡检结果">
                        </el-table-column>
                        <el-table-column
                                prop="review"
                                label="审核意见">
                        </el-table-column>
                        <el-table-column
                                label="巡检时间">
                            <template slot-scope="scope">
                                <span>{{scope.row.resultTime.split("T").join(" ")}}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>

            </div>
        </el-dialog>

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

  import {
    $ajax,
    getPagedsDto,
  } from "@/http/api/mapi.js";

    export default {
        name: 'Index',
        data() {
            return {
                formInline: {
                  value1:"",
                  value2:"",
                },
                workData: [

                ],
                total:0,
                isShowBaoGao:false,
                bgXqInfo:[],
                imgPath:"",
                isImage:false
            }
        },
        mounted() {
            //监测告警，提示信息
            this.$alarmMonitor(this);
            // 获取分页数据
            this.getPagedsDto(0);


        },
        methods: {
          //查看图片
          seeImg(imgPath) {
            if (this.isImage) {
              this.imgPath = "";
            } else {
              this.imgPath = imgPath;
            }
            this.isImage = !this.isImage;
          },
          //查看报告
          ckgb(id) {
            this.isShowBaoGao = true;
            this.bgXqInfo = {};
            getPagedsDto.params.where = "Id.Equals(" + id + ")";
            $ajax(getPagedsDto, (res)=>{
              res = res.result.items[0];
              res.size = res.listBaseForFrRoundInfoSubsDto.length;
              this.bgXqInfo = res;
            });
          },
          currentChange(n) {
            this.getPagedsDto(n - 1);
          },
          //得到轮询列表
          getPagedsDto(n) {
            getPagedsDto.params = {
              MaxResultCount: 13,
              SkipCount: n*13,
              ssdzId:sessionStorage.ssdzId
            };
            $ajax(getPagedsDto, (res) => {


              res = res.result;
              res.items.forEach((val) => {
                val.startTime = val.startTime.split("T").join(" ");
              });
              this.workData = res.items;
              this.total = res.totalCount;
            });
          },




        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .lxls {
        .card {
            width: 100%;
            height: calc(100% - 60px);
            padding: 0px 2px;
            overflow: hidden;
            box-sizing: border-box;
            display: flex;
            padding-top: 30px;
            flex-direction: column;
            background: url(../assets/home/images/ldlsBox.png) no-repeat;
            background-size: 100% 100%;
            .toptitle {
                width: 202px;
                box-sizing: border-box;
                font-stretch: normal;
                letter-spacing: 1px;
                height: 56px;
                line-height: 56px;
                text-align: center;
                font-family: MicrosoftYaHei;
                font-size: 24px;
                font-weight: bold;
                font-stretch: normal;
                letter-spacing: 1px;
                color: #ffffff;
            }
            .searchBox{
                margin-left:40px;
                margin-top:10px;
            }
        }

        .table{
            width:100%;
            margin-top:20px;
            height:calc(100% - 120px);
        }

        .lxlsDialog{
            .toptitle {
                width:202px;
                box-sizing: border-box;
                font-stretch: normal;
                letter-spacing: 1px;
                height:56px;
                line-height: 56px;
                text-align: center;
                font-family: MicrosoftYaHei;
                font-size: 24px;
                font-weight: bold;
                font-stretch: normal;
                letter-spacing: 1px;
                color: #ffffff;
            }
            .top-line{
                width:252px;
                height:2px;
                background: url(../assets/home/images/dialogline.png) no-repeat center center;
                background-size:100% 100%;
                margin-top:5px;
                margin-bottom:10px;
            }
            .toptitle2{
                width:202px;
                box-sizing: border-box;
                font-stretch: normal;
                letter-spacing: 1px;
                height:45px;
                line-height: 45px;
                text-align: center;
                font-family: MicrosoftYaHei;
                font-size: 16px;
                font-weight: bold;
                color: #00ccff;
            }
            .dialogInfo{
                font-family: MicrosoftYaHei-Bold;
                font-size: 16px;
                letter-spacing: 1px;
                color: #e4fdff;
                font-weight: bold;
            }
            .top-line2{
                width:100%;
                height:12px;
                background: url(../assets/home/images/card-chang-line.png) no-repeat center center;
                background-size:100% 100%;
                margin-top:5px;
                margin-bottom:0px;
            }
            .dislogMain{
                height: 62vh;
                overflow-y: auto;
                font-size: 16px;
                color: #000;
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

    }



</style>
<style lang="scss">
    @import "../css/commom";

    .lxls {
        @extend .el-checkbox;
        @extend .reset-page;
        @extend .reset-table2;
        .el-dialog__wrapper{
            background-color: rgba(0,0,0,0.8);
        }
        .el-dialog{
            background: url(../assets/home/images/lxlsDialog.png) no-repeat;
            background-size: 100% 100%;
            padding:40px 30px  100px 70px;
            box-sizing: border-box;
            height:970px;

        }
        .el-dialog__headerbtn{
            width:40px;
            height:40px;
            background-color: #808585;
            border-radius: 50%;
            color:#fff;
            right:-40px;
            font-size: 20px;
            top:-10px;
            .el-dialog__close{
                font-weight:bold;
                color:#fff;
            }
        }
        .el-dialog__body{
            padding:0px;
        }


    }

    .el-form-item {
        margin-top: 10px;
        margin-bottom: 10px;
        .el-form-item__label{
            color:#fff;
        }
    }
</style>
