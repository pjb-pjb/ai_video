<template>
    <div style="height: 100%;">
        <div class="main-right">
            <div class="main-box-left">
                <div class="middel">
                    <ul class="middelOne">
                        <li>
                            <div class="title">消防系统</div>
                            <div class="list">
                                <div>
                                    <div class="text">设备</div>
                                    <ddd :index="warnInfo.xf.Device_Yes"></ddd>
                                    <ddd :index="warnInfo.xf.Device_No" :isWarn="true"></ddd>
                                </div>
                                <div>
                                    <div class="text">火灾</div>
                                    <ddd :index="warnInfo.xf.Other_Yes"></ddd>
                                    <ddd :index="warnInfo.xf.Other_No" :isWarn="true"></ddd>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="title">安防系统</div>
                            <div class="list">
                                <div>
                                    <div class="text">设备</div>
                                    <ddd :index="warnInfo.af.Device_Yes"></ddd>
                                    <ddd :index="warnInfo.af.Device_No" :isWarn="true"></ddd>
                                </div>
                                <div>
                                    <div class="text">入侵</div>
                                    <ddd :index="warnInfo.af.Other_Yes"></ddd>
                                    <ddd :index="warnInfo.af.Other_No" :isWarn="true"></ddd>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="title">给 排 水</div>
                            <div class="list">
                                <div>
                                    <div class="text">设备</div>
                                    <ddd :index="warnInfo.gps.Device_Yes || 0"></ddd>
                                    <ddd :index="warnInfo.gps.Device_No || 0" :isWarn="true"></ddd>
                                </div>
                                <div>
                                    <div class="text">越限</div>
                                    <ddd :index="warnInfo.gps.Other_Yes || 0"></ddd>
                                    <ddd :index="warnInfo.gps.Other_No || 0" :isWarn="true"></ddd>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="title">环境监测</div>
                            <div class="list">
                                <div>
                                    <div class="text">设备</div>
                                    <ddd :index="warnInfo.hj.Device_Yes"></ddd>
                                    <ddd :index="warnInfo.hj.Device_No" :isWarn="true"></ddd>
                                </div>
                                <div>
                                    <div class="text">越限</div>
                                    <ddd :index="warnInfo.hj.Other_Yes"></ddd>
                                    <ddd :index="warnInfo.hj.Other_No" :isWarn="true"></ddd>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <ul class="middelTwo">
                        <li>
                            <div class="title">照明监控</div>
                            <div class="list">
                                <div>
                                    <div class="text">设备</div>
                                    <ddd :index="warnInfo.zm.Device_Yes"></ddd>
                                    <ddd :index="warnInfo.zm.Device_No" :isWarn="true"></ddd>
                                </div>
                                <div>
                                    <div class="text">状态</div>
                                    <ddd :index="warnInfo.zm.Other_Yes"></ddd>
                                    <ddd :index="warnInfo.zm.Other_No" :isWarn="true"></ddd>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="title">在线监测</div>
                            <div class="list">
                                <div>
                                    <div class="text">设备</div>
                                    <ddd :index="warnInfo.zx.Device_Yes || 0"></ddd>
                                    <ddd :index="warnInfo.zx.Device_No || 0" :isWarn="true"></ddd>
                                </div>
                                <div>
                                    <div class="text">越限</div>
                                    <ddd :index="warnInfo.zx.Other_Yes || 0"></ddd>
                                    <ddd :index="warnInfo.zx.Other_No || 0" :isWarn="true"></ddd>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="title">视频监控</div>
                            <div class="list">
                                <div>
                                    <div class="text">设备</div>
                                    <ddd :index="videoInfo.Device_Yes || 0"></ddd>
                                    <ddd :index="videoInfo.Device_No || 0" :isWarn="true"></ddd>
                                </div>
                                <div>
                                    <div class="text">报警</div>
                                    <ddd index="0"></ddd>
                                    <ddd index="0" :isWarn="true"></ddd>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!--<div class="middel-footer">-->
                        <!--<span class="green"></span>-->
                        <!--<span class="green-info">正常</span>-->
                        <!--<span class="red"></span>-->
                        <!--<span class="red-info">故障</span>-->
                    <!--</div>-->
                </div>
                <div class="bottom">
                    <div class="card card1">
                        <div class="toptitle"><span>日常工作</span></div>
                        <div class="card-line"></div>
                        <div class="con">
                            <ul class="list work">
                                <li v-for="(item,index) in work" v-bind:key="index">
                                    <div class="name" :title="item.roundTypeName">{{item.roundTypeName}}</div>
                                    <div class="time" :itle="item.startTime">{{item.startTime.split("T").join(" ")}}</div>
                                    <div class="des" :title="item.taskName">{{item.taskName}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="card card2" style="color:#FFDE00">
                        <div class="toptitle"><span>告警信息</span></div>
                        <div class="card-line"></div>
                        <div class="con">
                            <ul class="list warn">
                                <li @click="seeWarnXq(item)" v-for="(item,index) in warn" v-bind:key="index">
                                    <div class="name" :title="item.alarmptypename">{{item.alarmptypename}}</div>
                                    <div class="name1" :title="item.alarmlevelname">{{item.alarmlevelname}}</div>

                                    <div class="time" :title="item.alarmtime">{{item.alarmtime}}</div>
                                    <div class="dev" :title="item.alarmdesc">{{item.alarmdesc}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-box-right">
                <div class="top">
                    <div class="top-box">
                        <div class="top-title">
                            {{name}}
                        </div>
                        <div class="top-line"></div>
                        <div class="tongxing">
                            <div class="ttext">系统通讯</div>
                            <ddd width="26px" height="26px" br="50%"></ddd>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div class="img-box one"></div>
                            <div class="text">地市：{{info.Area}}</div>
                        </li>
                        <li>
                            <div class="img-box two"></div>
                            <div class="text">湿度：{{info.Humidity}}%</div>
                        </li>
                        <li>
                            <div class="img-box three"></div>
                            <div class="text">温度：{{info.Temperature}}℃</div>
                        </li>
                        <li>
                            <div class="img-box four"></div>
                            <div class="text">风力：{{info.WindSpeed}}级</div>
                        </li>
                        <li>
                            <div class="img-box four1"></div>
                            <div class="text">风向：{{info.WindDirection}}</div>
                        </li>
                        <li>
                            <div class="img-box five"></div>
                            <div class="text">值班班长：{{info.DutyMan}}</div>
                            <!--<div class="text"> 值班时间：{{info.PhoneNumber}}</div>-->
                        </li>
                        <li>
                            <div class="img-box six"></div>
                            <div class="text">{{info.PhoneNumber}}</div>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {$ajax, getDutyInfo, getWarnInfo, getWarnList,getPagedsDto,getAlarmData} from "@/http/api/mapi.js";

    export default {
        name: 'Index',
        data() {
            return {
                name:sessionStorage.name,
                SsdzId: sessionStorage.ssdzId,
                //值班信息
                info: {},
                //告警信息
                warnInfo: {
                    af: {},
                    xf: {},
                    gps: {},
                    hj: {},
                    zm: {},
                    zx: {}
                },
                videoInfo:{},
                work: [

                ],
                warn: [],
                activeIndex: 0,
                obj: {
                    "JPSXT": "gps",
                    "ZMKZXT": "zm",
                    "HJJCXT": "hj",
                    "ZXJCXT": "zx",
                    "AFXT": "af",
                    "XFXT": "xf"
                }
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            //查看告警详情
            seeWarnXq(item){
              if (item.alarmptype == '2101'){
                // 判断是否是视频告警
                let str = JSON.stringify(item).toLowerCase();
                str = str.replace("#",'@@@');
                this.$router.push( `/home/main/xwfx?n=4&title=全面监控&jsondata=${str}`);

              }else if(item.alarmptype=="2201"){
                // 判断是否是联动告警器
                if (item.isTime){

                  let str = JSON.stringify(item).toLowerCase();
                  str = str.replace("#",'@@@');
                  this.$router.push(`/home/main/znld?n=3&name=华北.福瑞&title=全面监控&jsondata=${str}`);

                }else{

                  this.$router.push(`/home/main/znld?n=3&name=华北.福瑞&title=全面监控&alarmid=${item.id}&alarmtype=${item.alarmtype}`);
                }

              }else{

              }
            },
            init() {
                this.getDutyInfo();
                this.getWarnInfo();
                this.getWarnList();
                //socket监听
                this.socketWatch();

                this.getWorkData();
                //监测告警，提示信息
                this.$alarmMonitor(this);
            },
            //得到值班信息
            getDutyInfo() {
                $ajax(getDutyInfo, (data) => {
                    data = JSON.parse(data.result);

                    this.setDutyInfo(data);
                });
            },
            //得到告警信息
            getWarnInfo() {
                $ajax(getWarnInfo, (data) => {
                    data = JSON.parse(data.result);
                    this.setWarnInfo(data);
                });
            },
            setWarnInfo(data) {
                data.forEach((val, index) => {
                    if (val.SsdzId == this.SsdzId) {
                        this.warnInfo[this.obj[val.SystemCode]] = val;
                    }
                });


            },
            setDutyInfo(data) {
                for (let item in data[0]) {
                  // if (data[0][item] && data[0]["SsdzId"] == this.SsdzId) {
                    if (data[0][item] ) {
                        this.info[item] = data[0][item];
                    }
                }
                this.info = Object.assign({}, this.info);
            },
            //得到告警信息
            getWarnList() {
                getAlarmData.params = {
                    MaxResultCount: 40,
                    SkipCount: 0,
                    ssdzId:sessionStorage.ssdzId
                };
                $ajax(getAlarmData, (data) => {
                    var data1 = data.result.items;
                    data1 = JSON.stringify(data1).toLowerCase();
                    data1 = JSON.parse(data1)

                    data1.forEach((val) => {
                        val.alarmtime = this.getTime(val.alarmtime);
                    });


                    this.warn = data1;
                });
            },
            //日期格式
            getTime(str) {
                return str.split("t").join(" ");
            },
            socketWatch() {
                //监听天气变化
                this.connection.on("getWeatherMessage", (data) => {

                  data = JSON.parse(data);
                    this.setDutyInfo(data);
                });
                //监听告警信息
                this.connection.on("getAlarmMessage", (data) => {

                  data = JSON.parse(data.toLowerCase());
                      // 视频监控
                    if (data.cimid == "2101"){
                      data.msg.alarmptype = "2101";
                      this.warn.unshift(data.msg);

                    }else if(data.cimid == "2201"){

                      let datas = data.msg[0];
                      datas.alarmptypename = "辅助设备告警";
                      datas.alarmptype = "2201";
                      datas.isTime = true;
                      datas.ssxtname = datas.ssxtname;
                      // 辅控告警
                      this.warn.unshift(datas);

                    }else if(data.cimid == "2100"){
                        this.videoInfo={
                          Device_Yes:data.msg.cameracount,
                          Device_No:data.msg.alarmcount
                        }
                    }else{
                      console.log(data);

                    }
                });

                //监听设备告警数量
                this.connection.on("getDevCountMessage", (data) => {
                    data = JSON.parse(data);
                    this.setWarnInfo(data);
                });


            },

            // 获取日常工作

            getWorkData(){
              getPagedsDto.params = {
                MaxResultCount: 10,
                SkipCount: 0,
                ssdzId:sessionStorage.ssdzId

              };
              $ajax(getPagedsDto, (data) => {
                this.work = data.result.items;
              });
            }
        }
    }
</script>

<style scoped lang="scss">
    .main-right {
        position: relative;
        float: right;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-bottom: 5px;
        overflow: hidden;
        text-align: center;
        display:flex;
        justify-content: space-between;
        .main-box-left{
            padding-top:50px;
            padding-bottom: 10px;
            width:1538px;
            height:100%;
            float:left;
            display:flex;
            flex-flow: column;
            .middel {

                background-size: 100% 100%;
                height: 500px;
                ul {

                    height: 45%;
                    box-sizing: border-box;
                    padding: 15px 30px 5px 30px;
                    display: flex;
                    align-items: center;
                    justify-content:center;
                    li {
                        width: 242px;
                        height: 277px;
                        padding:75px 45px;
                        box-sizing: border-box;
                        background: url(../assets/home/images/sysbox.png) no-repeat;
                        background-size: 100% 100%;
                        margin:0 56px;
                        .title {
                            text-align: center;
                            font-family: MicrosoftYaHei;
                            font-weight:600;
                            font-size: 20px;
                            letter-spacing: 1px;
                            color: rgba(255,255,255,0.8);
                        }
                        .list {
                            display: flex;
                            margin-top: 16px;
                            > div {
                                width: 50%;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                .text {
                                    font-size: 20px;
                                    text-align: center;
                                    color: #fff;
                                    line-height: 35px;
                                    box-sizing: border-box;
                                    width: 63px;
                                    height: 35px;
                                    background-color: #0c488d;
                                    border-radius: 10px;
                                    border: solid 1px #ffffff;
                                }
                                > div {
                                    margin-bottom: 5px;
                                }
                            }
                        }
                    }
                }
            }
            .bottom {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                height: calc(100% - 510px);
                .card1{
                    width: 43%;
                }
                .card2{
                    width: 65%;
                }
                .card {
                    /*background-color: rgba(1,44,123,0.8);*/
                    /*width: 49%;*/
                    /*height: calc(100%-500px);*/
                    height:100%;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    .toptitle {
                        width:242px;
                        box-sizing: border-box;
                        font-stretch: normal;
                        letter-spacing: 1px;
                        height:56px;
                        line-height: 56px;
                        text-align: center;
                        font-family: MicrosoftYaHei-Bold;
                        font-size: 24px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 1px;
                        color: #ffffff;
                    }
                    .card-line{
                        width:242px;
                        height:2px;
                        background-color: #fff;
                        background: url(../assets/home/images/card-line.png) no-repeat;

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
                .list {
                    li {
                        line-height: 40px;
                        display: flex;
                        padding-left: 50px;
                        height:40px;
                        box-sizing: border-box;
                        font-family: MicrosoftYaHei;
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #ffffff;
                        > div {
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }
                }
                .work {
                    color: #fff;
                    li {
                        /*border: solid 1px rgba(126, 205, 244, 1);*/
                        &:nth-child(2n) {
                            /*background-color: rgba(1, 44, 123, 0.6);*/
                            /*border: solid 1px #7ecdf4;*/
                            border-left: none;
                        }
                        &:nth-child(2n+1) {
                            /*background-color:#1b4b8b;*/
                        }
                        .name {
                            width: 15%;
                            text-align: left;
                        }
                        .time {
                            width: 30%;
                            padding-left: 10px;
                            text-align: left;

                        }
                        .des {
                            width: 55%;
                            padding-left: 10px;
                            text-align: left;

                        }
                    }
                }
                .warn {
                    color: #FFDE00;

                    li {
                        cursor: pointer;
                        /*border: solid 1px rgba(126, 205, 244, 1);*/
                        &:nth-child(2n) {
                            /*background-color: rgba(1, 44, 123, 0.4);*/
                            /*border: solid 1px #7ecdf4;*/
                            border-left: none;

                        }
                        &:nth-child(2n+1) {
                            /*background-color:#3e71b4;*/
                        }
                        .name {
                            width: 12%;
                            text-align: left;
                        }
                        .name1 {
                            width: 12%;
                            text-align: left;
                        }
                        .time {
                            width: 20%;
                            text-align: left;
                        }
                        .dev {
                            padding-left: 5px;
                            width: 55%;
                            text-align: left;
                        }

                    }
                }
            }
        }
        .main-box-right{
            width:312px;
            margin-right:5px;
            margin-top:20px;
            height:calc(100% - 30px);;
            float:right;

            background: url(../assets/home/images/main-right.png) no-repeat;
            background-size: 100% 100%;
            .top {
                width: 100%;
                height: 100%;
                .top-box{
                    width:100%;
                    height:220px;
                    overflow: hidden;
                    margin-top: 20px;
                }
                .top-title {
                    font-size: 26px;
                    color: #00ccff;
                    text-align: center;
                    font-weight: bold;
                    letter-spacing: 1px;
                    height: 50px;
                    line-height: 50px;
                    margin-top:30px;
                    box-sizing: border-box;
                }
                .top-line{
                    width:252px;
                    height:2px;
                    margin: 0 auto;
                    background-color: #fff;
                    background: url(../assets/home/images/card-line.png) no-repeat center center;
                    background-size:100% 100%;
                    margin-top:10px;
                }
                .tongxing{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width:100%;
                    height:120px;
                    .ttext{
                        color:#fff;
                        margin-right:10px;
                    }
                }

                ul {
                    display: flex;
                    height: calc(100% - 262px);
                    align-items: center;
                    justify-content: space-around;
                    flex-direction: column;
                    li {
                        background: url(../assets/home/images/rightbox.png) no-repeat;
                        background-size: 100% 100%;
                        width:310px;
                        height:108px;
                        display: flex;
                        align-items: center;
                        padding-left:40px;


                        .img-box {
                            width: 52px;
                            height: 52px;
                            border-radius: 50%;
                        }
                        .one {
                            background: url(../assets/home/images/address.png) no-repeat;
                            background-size: 100% 100%;
                        }
                        .two {
                            background: url(../assets/home/images/sd.png) no-repeat;
                            background-size: 100% 100%;
                        }
                        .three {
                            background: url(../assets/home/images/wendu.png) no-repeat;
                            background-size: 100% 100%;
                        }
                        .four {
                            background: url(../assets/home/images/feng.png) no-repeat;
                            background-size: 100% 100%;
                        }
                        .four1 {
                            background: url(../assets/home/images/fx.png) no-repeat;
                            background-size: 100% 100%;
                        }
                        .five {
                            background: url(../assets/home/images/person.png) no-repeat;
                            background-size: 100% 100%;
                        }
                        .six {
                            background: url(../assets/home/images/phone.png) no-repeat;
                            background-size: 100% 100%;
                        }
                        .text {
                            font-size: 16px;
                            color: #fff;
                            margin-left: 10px;
                            display: flex;
                        }
                    }
                }
            }
        }


    }
</style>
