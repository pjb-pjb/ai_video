<template>
    <div class="xwfx my-height">
        <el-row class="my-height">
            <el-col class="my-height" :span="24">
                <div class="card">
                    <div class="toptitle"><span>联动记录</span></div>

                    <ul class="list work">
                        <!--<li @dblclick="see(item.imgUrl,item.strToken)" v-for="(item,index) in workData" v-bind:key="index">-->
                        <li @dblclick="showDialog(item)" v-for="(item,index) in workData" v-bind:key="index">
                            <div class="name" :title="item.alarmPTypeName">{{item.alarmPTypeName}}</div>
                            <div class="name" :title="item.alarmTypeName">{{item.alarmTypeName}}</div>
                            <div class="warningLevel" :title="item.alarmLevelName">{{item.alarmLevelName}}</div>
                            <div class="time" :title="item.alarmTime">{{item.alarmTime}}</div>
                            <div class="des" :title="item.alarmDesc">{{item.alarmDesc}}</div>
                            <!--<div class="showMenu" :title="item.alarmDesc"><el-button  size="mini" type="primary">查看详情</el-button></div>-->
                        </li>
                    </ul>

                </div>

                <el-pagination
                        background
                        :page-size="18"
                        :pager-count="8"
                        layout="prev,pager,next"
                        :small="true"
                        :total="total"
                        @current-change="currentChange"
                >
                </el-pagination>
            </el-col>

        </el-row>
    </div>
</template>
<script>

  import {
    $ajax,
    getAlarmData,
  } from "@/http/api/mapi.js";

    export default {
        name: 'Index',
        data() {
            return {
                isShowInfo:false,
                url:"",
                strToken:"",
                showData:{},
                workData: [

                ],

                total:0,
            }
        },
        mounted() {
            //监测告警，提示信息
            this.$alarmMonitor(this);
            // 获取分页数据
            this.getAlarmDataFunc(0);
            

        },
        methods: {

            showDialog(item){
                // this.showData.imgArr = item.imgUrl.split(";");
                this.$router.push(`/home/main/znld?n=3&name=华北.福瑞&title=全面监控&alarmid=${item.id}&alarmtype=${item.alarmType}`);
            },
            // 点击分页
            currentChange(n) {
                this.getAlarmDataFunc(n - 1);
            },

            // 获取分页数据
            getAlarmDataFunc(n){

                  getAlarmData.params = {
                    MaxResultCount: 18,
                    SkipCount: n*18,
                    ssdzId:sessionStorage.ssdzId,
                    Where:`AlarmPTypeName.Contains("辅助设备告警")`

                    };

                $ajax(getAlarmData, (res) => {


                  res = res.result;
                  res.items.forEach((val) => {
                    val.alarmTime = val.alarmTime.split("T").join(" ");
                  });
                  this.workData = res.items;
                  this.total = res.totalCount;
                  if (!this.$route.query.token){

                    this.strToken = this.workData[0].strToken;
                    this.url = this.workData[0].imgUrl;
                  }
                });

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .xwfx {
        .card {
            width: 100%;
            height: calc(100% - 60px);
            padding:0px 1%;
            overflow: hidden;
            box-sizing: border-box;
            display: flex;
            padding-top:30px;
            flex-direction: column;
            background: url(../assets/home/images/xwfx.png) no-repeat;
            background-size:100% 100%;
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
                margin-bottom: 20px;

            }
            .con {
                flex-grow: 1;
                box-sizing: border-box;
                width: 100%;
                overflow: auto;
            }
            .button{
                width:98px;
                height:46px;
                cursor: pointer;
                text-align:center;
                line-height: 46px;
            }
            .button-success{
                background: url(../assets/home/images/buttonSuccess.png) no-repeat;
            }
            .button-primary{
                background: url(../assets/home/images/buttonPrimary.png) no-repeat;
            }
        }
        .menuList{
            padding:10px;
            margin-top:10px;
            div{
                display:inline-block;
                margin-right:5px;
            }
        }

        .work {

            color: #fff;

            li {
                cursor: pointer;
                line-height: 40px;
                display: flex;
                > div {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                border: solid 1px rgba(126, 205, 244, 1);
                &:hover{
                    background: #2e4b9e !important;
                }
                &:nth-child(2n) {
                    /*background: #40789e;*/
                }
                &:nth-child(2n+1) {
                    background-color: #1b4b8b;
                }
                .name {
                    width: 15%;
                    padding-left: 30px;
                }
                .time {
                    width: 15%;
                    padding-left: 20px;
                }
                .warningLevel{
                    width: 15%;
                    padding-left: 30px;
                }
                .des {
                    width: 55%;
                    padding-left: 20px;
                }
                .showMenu{
                    width:10%;
                    text-align: center;
                }

            }
        }
    }

</style>
<style lang="scss">
    @import "../css/commom";

    .xwfx {
        @extend .el-checkbox;
        @extend .reset-page;
    }
</style>
