<template>
    <div class="xwfx my-height">
        <el-row class="my-height">
            <el-col class="my-height" :span="24">
                <div class="card">
                    <div class="toptitle"><span>告警记录</span></div>
                    <div class="menuList">
                        <template  v-for="item in menuData">
                            <template v-if="activeMenu == item.index">
                                <div class="button button-success" >
                                    {{item.menuTitle}}
                                </div>
                            </template>
                            <template v-else>
                                <div class="button button-primary" @click="clickMenu(item.index)">
                                    {{item.menuTitle}}
                                </div>
                            </template>
                        </template>

                    </div>
                    <ul class="list work">
                        <!--<li @dblclick="see(item.imgUrl,item.strToken)" v-for="(item,index) in workData" v-bind:key="index">-->
                        <li @dblclick="showDialog(item)" v-for="(item,index) in workData" v-bind:key="index">
                            <div class="name" :title="item.alarmPTypeName">{{item.alarmPTypeName}}</div>
                            <div class="name" :title="item.alarmTypeName">{{item.alarmTypeName}}</div>
                            <div class="warningLevel" :title="item.alarmLevelName">{{item.alarmLevelName}}</div>
                            <div class="time" :title="item.alarmTime">{{item.alarmTime}}</div>
                            <div class="des" :title="item.alarmDesc">{{item.alarmDesc}}</div>
                            <div class="showMenu" :title="item.alarmDesc" v-if="item.videoUrl"><el-button v-if="item.alarmPType != '2201'" @click.stop="showLuXiang(item.videoUrl)" size="mini" type="primary">查看录像</el-button></div>
                        </li>
                    </ul>

                </div>
                <el-pagination
                        background
                        :page-size="17"
                        :pager-count="8"
                        layout="prev,pager,next"
                        :small="true"
                        :total="total"
                        @current-change="currentChange"
                >
                </el-pagination>
            </el-col>

        </el-row>

        <el-dialog width="1500px" class="xwfxDialog" top="100px" title="" :visible.sync="isShowInfo">
            <div class="toptitle"><span>告警详情</span></div>
            <div class="top-line"></div>
            <div class="con">
                <el-row class="my-height" style="width:97%;min-height:300px;margin:0 auto">
                    <el-table
                            :data="[showData]"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="alarmPTypeName"
                                label="告警类型">
                        </el-table-column>

                        <el-table-column
                                prop="alarmTypeName"
                                label="告警类型">
                        </el-table-column>
                        <el-table-column
                                prop="alarmLevelName"
                                label="告警级别">
                        </el-table-column>
                        <el-table-column
                                prop="alarmTime"
                                label="告警时间">
                        </el-table-column>
                        <el-table-column
                                prop="alarmDesc"
                                label="告警详情">
                        </el-table-column>
                    </el-table>
                    <el-row style="height:400px;margin-top:30px;">
                        <template v-if="showData.strToken">
                            <el-col class="my-height" :span="8">
                                <videoBox :url="url">
                                    <mVideo h5id="one3" :tokens="showData.strToken"></mVideo>
                                </videoBox>
                            </el-col>
                        </template>
                        <template v-if="showData.imgUrl">
                            <el-col class="my-height" :span="8" v-for="item in showData.imgArr">
                                <div style="height: 100%;" class="
">
                                    <img :src="$store.state.ROOT+item" style="width:100%; height: 100%;cursor: pointer;" alt="">
                                </div>
                            </el-col>
                        </template>
                    </el-row>
                </el-row>

            </div>
        </el-dialog>

        <el-dialog width="1000px" class="xwfxDialog" top="100px" title="" :visible.sync="isShowVideo">
            <div class="toptitle"><span>查看录像</span></div>
            <div class="top-line"></div>
            <el-row class="my-height" style="width:97%;min-height:300px;margin:0 auto">
                <el-row style="height:400px;">
                    <template v-if="videoUrl">

                        <el-col class="my-height" :span="24">
                            <video width="100%" height="100%" autoplay controls :src="'http://192.168.6.10:9090'+videoUrl"></video>
                        </el-col>
                    </template>
                </el-row>
            </el-row>

        </el-dialog>


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
                menuData:[
                  {menuTitle:"全部",index:"0"},
                  {menuTitle:"严重",index:"1",type:"01"},
                  {menuTitle:"重要",index:"2",type:"02"},
                  {menuTitle:"一般",index:"3",type:"03"},
                ],
                total:0,
                activeMenu:0,
                isShowVideo:false,
                videoUrl:""
            }
        },
        mounted() {
            //监测告警，提示信息
            this.$alarmMonitor(this);
            // 获取分页数据
            this.getAlarmDataFunc(0);
            if (this.$route.query.jsondata){

              let str = this.$route.query.jsondata;

              str = str.replace('@@@',"#");

              this.isShowInfo = true;
              let data = JSON.parse(str);

              this.showData = {
                alarmPTypeName:data.alarmptypename,
                alarmLevelName:data.alarmlevelname,
                alarmTypeName:data.alarmtypename,
                alarmTime:data.alarmtime,
                alarmDesc:data.alarmdesc,
                strToken:data.strtoken,
                imgUrl:data.imgurl
              };
              if (data.imgurl) {
                this.showData.imgArr = data.imgurl.split(";");
              }
            }


        },
        methods: {
            showLuXiang(videoUrl){
              this.isShowVideo = true;
              this.videoUrl = videoUrl
            },
            clickMenu(idx){
                this.activeMenu = idx;
                this.getAlarmDataFunc(0);
            },
            showDialog(item){


              if (item.alarmPType == '2101'){

                this.isShowInfo = true;
                this.showData = item;
                if (item.imgUrl) {
                  this.showData.imgArr = item.imgUrl.split(";");

                }else{
                  this.showData.imgArr = [];
                }
              }else if(item.alarmPType=="2201"){


                  this.$router.push(`/home/main/znld?n=3&name=华北.福瑞&title=全面监控&alarmid=${item.id}&alarmtype=${item.alarmType}`);

              }else{

              }

            },
            see(url,token){
                this.url = url;
                this.strToken = tokens;
            },
            // 点击分页
            currentChange(n) {
                this.getAlarmDataFunc(n - 1);
            },

            // 获取分页数据
            getAlarmDataFunc(n){

                if (this.activeMenu!=0){
                  getAlarmData.params = {
                    MaxResultCount: 17,
                    SkipCount: n*17,
                    ssdzId:sessionStorage.ssdzId,
                    Where:`AlarmLevel.Contains("${this.menuData[this.activeMenu].type}")`
                    };
                }else{
                    getAlarmData.params = {
                        MaxResultCount: 17,
                        SkipCount: n*17,
                        ssdzId:sessionStorage.ssdzId,
                    };
                }
                $ajax(getAlarmData, (res) => {


                  res = res.result;
                  res.items.forEach((val) => {
                    val.alarmTime = val.alarmTime.split("T").join(" ");
                  });
                  this.workData = res.items;
                  this.total = res.totalCount;
                });

            }
        },
        watch:{
          "$route"(){
            if (this.$route.query.jsondata){

              this.isShowInfo = true;
              let data = JSON.parse(this.$route.query.jsondata);
              this.showData = {
                alarmPTypeName:data.alarmptypename,
                alarmLevelName:data.alarmlevelname,
                alarmTypeName:data.alarmtypename,
                alarmTime:data.alarmtime,
                alarmDesc:data.alarmdesc,
                strToken:data.strtoken,
                imgUrl:data.imgurl
              };
              this.showData.imgArr = data.imgurl.split(";");
            }
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .xwfx {
        .my-img {
            height: 100%;
            width: 100%;
            /*padding: 5px;*/
            /*background: url(../assets/home/images/videoShang.png) no-repeat;*/
            /*background-size: 100% 100%;*/
            background-color: #888;

        }
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
                line-height: 40px;
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
                    width: 10%;
                    padding-left: 20px;
                }
                .time {
                    width: 10%;
                    padding-left: 10px;
                }
                .warningLevel{
                    width: 10%;
                    padding-left: 10px;
                }
                .des {
                    width: 50%;
                    padding-left: 10px;
                }
                .showMenu{
                    width:10%;
                    text-align: center;
                }

            }
        }
        .xwfxDialog{
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
        }
    }


</style>
<style lang="scss">
    @import "../css/commom";

    .xwfx {
        @extend .el-checkbox;
        @extend .reset-page;
        @extend .reset-table;
        .el-dialog__wrapper{
            background-color: rgba(0,0,0,0.8);
        }
        .el-dialog{
            background: url(../assets/home/images/xwfxDialog.png) no-repeat;
            background-size: 100% 100%;
            padding:0px 10px  80px 30px;
            max-height:800px;
            height:auto;

        }
        .el-dialog__headerbtn{
            width:40px;
            height:40px;
            background-color: #808585;
            border-radius: 50%;

            color:#fff;
            right:-40px;
            font-size: 20px;
            font-weight:bold;
            top:-10px;
            .el-dialog__close{
                font-weight:bold;
                color:#fff;
            }
        }



    }

</style>
