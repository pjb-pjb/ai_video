<template>
    <div class="root znld">
        <div class="znld-left">
            <ul class="video-box">
                <li>
                    <mVideo h5id="a1" :tokens="urlArr[0]"></mVideo>
                </li>
                <li>
                    <mVideo h5id="a2" :tokens="urlArr[1]"></mVideo>
                </li>
                <li>
                    <mVideo h5id="a3" :tokens="urlArr[2]"></mVideo>
                </li>
                <li>
                    <mVideo h5id="a4" :tokens="urlArr[3]"></mVideo>
                </li>
            </ul>
        </div>
        <div class="znld-right">
            <div class="znld-right-top">
                <el-table
                        :data="[tableData]"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="alarmTime"
                            label="时间"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="alarmDesc"
                            label="联动事件"
                    >
                    </el-table-column>

                    <el-table-column
                            prop="alarmPTypeName"
                            label="事件类型"
                    >
                    </el-table-column>

                </el-table>
                <div>
                    <div @click="mhistory()" style="float: right;color: #fff;padding: 10px 30px;cursor: pointer;"><span>历史数据</span><i class="el-icon-d-arrow-right"></i></div>
                </div>
            </div>
            <div class="znld-right-middle"></div>
            <div class="znld-right-bottom">
                <div class="toptitle">{{tableData.alarmDesc}}</div>
                <div class="top-line"></div>
                <div class="con">
                    <el-table
                            :data="tableData1"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="presetName"
                                label="联动区域"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="devName"
                                label="联动设备"
                        >
                        </el-table-column>
                        <el-table-column
                                label="联动时间"
                        >
                            <template slot-scope="scope">
                                {{tableData.alarmTime}}
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="操作"
                        >
                            <template slot-scope="scope">
                                <span>
                                    <span class="el-icons" v-if="scope.row.imgUrl" @click="showDialog('查看图片',scope.row.imgUrl,'')"><i class="el-icon-picture"></i></span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span class="el-icons" v-if="scope.row.videoUrl" @click="showDialog('查看录像','',scope.row.videoUrl)"><i class="el-icon-video-camera-solid"></i></span>
                            </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>

            </div>


        </div>

        <el-dialog width="1000px" class="xwfxDialog" top="100px" title="" :visible.sync="isShowVideo">
            <div class="toptitle"><span>{{showData.title}}</span></div>
            <div class="top-line"></div>
            <el-row class="my-height" style="width:97%;min-height:300px;margin:0 auto">
                    <el-row style="height:400px;">
                        <template v-if="showData.videoUrl">
                            <el-col class="my-height" :span="24">
                                    <video width="100%" height="100%" autoplay controls :src="'http://192.168.6.10:9090'+showData.videoUrl"></video>
                            </el-col>
                        </template>
                        <template v-if="showData.imgUrl">
                            <el-col class="my-height" :span="24">
                                <img :src="$store.state.ROOT+showData.imgUrl" style="width:100%; height: 100%;cursor: pointer;" alt="">
                            </el-col>
                        </template>
                    </el-row>
                </el-row>

        </el-dialog>



    </div>

</template>

<script>

  import {$ajax,getLianDongInfoById,ptz,getLianDongConfig} from "@/http/api/mapi.js";

  export default {
        name: 'Index',
        data() {
            return {
                tableData: [{
                    time:"2018-03-18 10:11:23",
                    sj:"电子围栏五区北-入侵报警",
                    state:"执行中",
                    type:"安全防范",
                    isTrue:"未确认"
                }],
                tableData1: [{
                    time:"2018-03-18 10:11:23",
                    sj:"电子围栏五区北-入侵报警",
                    state:"执行中",
                    address1:"预置位1",
                    address2:"预置位1"
                },

                ],
                urlArr:[],
                imgArr:[],
                showData:{
                  title:'',
                  imgUrl:'',
                  videoUrl:'',
                },
                isShowVideo:false,
                tmpArr:[],
                videoArr:[]
            }
        },
        mounted() {
            //监测告警，提示信息
            this.$alarmMonitor(this);

            // 页面初始化
            if(this.$route.query.alarmid){
                // 如果存在直接获取数据
                this.getLianDongInfo(this.$route.query.alarmid);

            }else if(this.$route.query.jsondata){
                // 如果不存才是告警数据
                let data = JSON.parse(this.$route.query.jsondata);

                console.log(data);
                // 处理数据
                this.tableData={
                    alarmTime:data.alarmtime.split("t").join(" "),
                    alarmDesc:data.alarmdesc,
                    alarmPTypeName:"辅助设备告警",
                    linkagealarmid:data.linkagealarmid,
                    imgUrl:data.imgurl.replace(/\\\\/g,'\\'),


                };
                this.imgArr = this.tableData.imgUrl.split(",\\");
                data.linkageinfo.forEach(item=>{
                  this.urlArr.push(item.presettoken);
                  // this.tmpArr.push({id:item.devlinkid});
                });
                let tmpArr = this.tableData.linkagealarmid.split(",");
                
                for (var i=0;i<tmpArr.length;i++){
                  this.tmpArr.push({
                    id:tmpArr[i],
                    img:this.imgArr[i],
                    video:""
                  });
                } 


                this.getLianDongConfigData(data.alarmtype);

            }else{
                this.$router.push("/home/main/ldls?n=3&name=华北.福瑞&title=全面监控");
            }
        },
        methods: {
            showDialog(title,imgUrl,videoUrl){
              this.isShowVideo = true;
              this.showData = {
                title:title,
                imgUrl:imgUrl,
                videoUrl:videoUrl,
              }
            },
            // 查看历史记录
            mhistory(){
                this.$router.push("/home/main/ldls?n=3&name=华北.福瑞&title=全面监控");
                // this.dialogTableVisible = true;
            },
            // 查看联动事件的基本信息
            getLianDongInfo(id){
                getLianDongInfoById.params={
                  id:id
                };
                $ajax(getLianDongInfoById,(data)=>{
                    this.tableData = data.result;
                    this.tableData.alarmTime = this.tableData.alarmTime.split("T").join(" ")
                    this.urlArr = this.tableData.strToken.split(",");
                    this.imgArr = this.tableData.imgUrl.split(",\\");
                    this.tableData.linkageAlarmId = this.tableData.linkageAlarmId?this.tableData.linkageAlarmId:"138,137,122";
                    let tmpArr = this.tableData.linkageAlarmId.split(",");
                    if (this.tableData.videoUrl) {
                      this.videoArr = this.tableData.videoUrl.split(",");

                      for (var i=0;i<tmpArr.length;i++){
                        this.tmpArr.push({
                          id:tmpArr[i],
                          img:this.imgArr[i],
                          video:this.videoArr[i]
                        });
                      }
                    }else{

                      for (var i=0;i<tmpArr.length;i++){
                        this.tmpArr.push({
                          id:tmpArr[i],
                          img:this.imgArr[i],
                          video:""
                        });
                      }
                    }


                    console.log(this.tmpArr);
                  this.getLianDongConfigData(this.$route.query.alarmtype);
                });
            },
            // 查看联动事件的相关配置
            getLianDongConfigData(id){
              getLianDongConfig.params={
                Where:`AlarmId="${id}"`
              };

              $ajax(getLianDongConfig,(data)=>{
                this.tableData1=data.result.items;

                this.tableData1.forEach(item=>{
                  this.tmpArr.forEach(zi=>{
                    if (item.id == zi.id){
                      item.imgUrl  = zi.img;
                      item.videoUrl = zi.video;
                    }
                  });
                });

                console.log(this.tableData1);


              });

            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .root{
        height: calc(100% - 10px);
        display: flex;
        justify-content: space-between;
        .znld-left{
            padding: 20px;
            padding-top: 43px;
            background: url(../assets/home/images/xwfx.png) no-repeat;
            background-size: 100% 100%;
            .my-img {
                height: 100%;
                width: 100%;
                /*padding: 5px;*/
                /*background: url(../assets/home/images/videoShang.png) no-repeat;*/
                /*background-size: 100% 100%;*/
            }
            width:calc(100% - 757px) ;
            height:935px;
            height:99%;
            .video-box{
                height: 100%;
                width: calc(100% - 10px);
                display: flex;
                justify-content: space-between;
                align-content: space-between;
                flex-wrap: wrap;
                li{
                    width: calc(50% - 2px );
                    height: calc(50% - 2px);
                    box-sizing: border-box;
                    background-color: #888;
                    margin-right:1px;
                    margin-bottom:1px;


                    /*padding: 5px;*/
                    /*background: url(../assets/home/images/videoDi.png) no-repeat;*/
                    /*background-size: 100% 100%;*/
                }
            }
        }
        .znld-right{
            width: 727px;
            height: 935px;
            height:99%;

            padding:60px 2px 20px 4px;
            box-sizing: border-box;
            background: url(../assets/home/images/znxdRight.png) center center no-repeat;
            background-size: 100% 100%;
            .znld-right-top{
                width:100%;
                height:256px;
            }
            .el-icons{
                font-size: 30px;
                cursor: pointer;
            }
            .znld-right-middle{
                width:100%;
                height:13px;
                background: url(../assets/home/images/znxdMiddle.png) center center no-repeat;
                background-size: 100% 100%;
                margin:2px 0px;

            }

            .znld-right-bottom{
                width:100%;
                height:calc(100% - 290px);
                .toptitle {
                    width:100%;
                    box-sizing: border-box;
                    font-stretch: normal;
                    letter-spacing: 1px;
                    height:56px;
                    line-height: 56px;
                    text-align: center;
                    font-family: MicrosoftYaHei;
                    font-size: 20px;
                    font-weight: bold;
                    font-stretch: normal;
                    letter-spacing: 1px;
                    color: #ffffff;
                }
                .top-line{
                    width:100%;
                    height:2px;
                    background: url(../assets/home/images/dialogline.png) no-repeat center center;
                    margin-top:5px;
                    margin-bottom:10px;
                }
                .con {
                    flex-grow: 1;
                    box-sizing: border-box;
                    width: 100%;
                    height:calc(100% - 60px);
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
        }
        .xwfxDialog{
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

    .znld{
        @extend .reset-table2;
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
