<template>
    <div style="height: 100%;">
        <div class="main-right">
            <div style="height: 100%">
                <div class="top">
                    <div class="top-title">
                        {{name}}
                    </div>
                    <ul>
                        <li>
                            <div class="img-box one"></div>
                            <div class="text">地市：{{info.Area}}</div>
                        </li>
                        <li>
                            <div class="img-box two"></div>
                            <div class="text">湿度：{{info.Humidity}}</div>
                        </li>
                        <li>
                            <div class="img-box three"></div>
                            <div class="text">温度：{{info.Temperature}}</div>
                        </li>
                        <li>
                            <div class="img-box four"></div>
                            <div class="text">风力：{{info.WindSpeed}}</div>
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
                        <li>
                            <div class="text">系统通讯&nbsp;&nbsp;<ddd width="26px" height="26px" br="50%"></ddd>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="middel">
                    <ul>
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
                                    <ddd :index="warnInfo.gps.Device_Yes"></ddd>
                                    <ddd :index="warnInfo.gps.Device_No" :isWarn="true"></ddd>
                                </div>
                                <div>
                                    <div class="text">越限</div>
                                    <ddd :index="warnInfo.gps.Other_Yes"></ddd>
                                    <ddd :index="warnInfo.gps.Other_No" :isWarn="true"></ddd>
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
                                    <ddd :index="warnInfo.zx.Device_Yes"></ddd>
                                    <ddd :index="warnInfo.zx.Device_No" :isWarn="true"></ddd>
                                </div>
                                <div>
                                    <div class="text">越限</div>
                                    <ddd :index="warnInfo.zx.Other_Yes"></ddd>
                                    <ddd :index="warnInfo.zx.Other_No" :isWarn="true"></ddd>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="title">智能锁控</div>
                            <div class="list">
                                <div>
                                    <div class="text">设备</div>
                                    <ddd index="0"></ddd>
                                    <ddd index="0" :isWarn="true"></ddd>
                                </div>
                                <div>
                                    <div class="text">入侵</div>
                                    <ddd index="0"></ddd>
                                    <ddd index="0" :isWarn="true"></ddd>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="title">视频监控</div>
                            <div class="list">
                                <div>
                                    <div class="text">设备</div>
                                    <ddd index="0"></ddd>
                                    <ddd index="0" :isWarn="true"></ddd>
                                </div>
                                <div>
                                    <div class="text">报警</div>
                                    <ddd index="0"></ddd>
                                    <ddd index="0" :isWarn="true"></ddd>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="middel-footer">
                        <span class="green"></span>
                        <span class="green-info">正常</span>
                        <span class="red"></span>
                        <span class="red-info">故障</span>
                    </div>

                </div>
                <div class="bottom">
                    <div class="card">
                        <div class="toptitle"><span>日常工作</span></div>
                        <div class="con">
                            <ul class="list work">
                                <li v-for="(item,index) in work" v-bind:key="index">
                                    <div class="name" :title="item.name">{{item.name}}</div>
                                    <div class="time" :itle="item.time">{{item.time}}</div>
                                    <div class="des" :title="item.des">{{item.des}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="card" style="color:#FFDE00">
                        <div class="toptitle"><span style="color:#FFDE00">告警信息</span></div>
                        <div class="con">
                            <ul class="list warn">
                                <li @click="seeWarnXq(item)" v-for="(item,index) in warn" v-bind:key="index">
                                    <div class="name" :title="item.SSXTName">{{item.SSXTName}}</div>
                                    <div class="time" :title="item.AlarmTime">{{item.AlarmTime}}</div>
                                    <div class="dev" :title="item.AlarmDesc">{{item.AlarmDesc}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {$ajax, getDutyInfo, getWarnInfo, getWarnList} from "@/http/api/mapi.js";

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
                work: [
                    {
                        name: "周界轮询",
                        time: "2019-05-06  15:20:10",
                        des: "围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name: "周界轮询",
                        time: "2019-05-06  15:20:10",
                        des: "围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name: "周界轮询",
                        time: "2019-05-06  15:20:10",
                        des: "围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name: "周界轮询",
                        time: "2019-05-06  15:20:10",
                        des: "围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name: "周界轮询",
                        time: "2019-05-06  15:20:10",
                        des: "围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name: "周界轮询",
                        time: "2019-05-06  15:20:10",
                        des: "围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name: "周界轮询",
                        time: "2019-05-06  15:20:10",
                        des: "围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name: "周界轮询",
                        time: "2019-05-06  15:20:10",
                        des: "围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    }
                ],
                warn: [],
                footList: [
                    {
                        path: "/",
                        title: "全面监控"
                    },
                    {
                        path: "/spjk",
                        title: "视频监控"
                    },
                    {
                        path: "/znxs",
                        title: "智能巡视"
                    },
                    {
                        path: "/znld",
                        title: "智能联动"
                    },
                    {
                        path: "/xwfx",
                        title: "告警记录"
                    }
                ],
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
                this.$router.push("/home/main/znld?n=3&title=智能联动");
            },
            init() {
                this.getDutyInfo();
                this.getWarnInfo();
                this.getWarnList();
                //socket监听
                this.socketWatch();
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
                    if (data[0][item] && data[0]["SsdzId"] == this.SsdzId) {
                        this.info[item] = data[0][item];
                    }
                }
                this.info = Object.assign({}, this.info);
            },
            //得到告警信息
            getWarnList() {
                $ajax(getWarnList, (data) => {
                    data = JSON.parse(data.result);
                    data.forEach((val) => {
                        val.AlarmTime = this.getTime(val.AlarmTime);
                    });
                    this.warn = data;
                });
            },
            //日期格式
            getTime(str) {
                return str.split("T").join(" ");
            },
            socketWatch() {
                //监听天气变化
                this.connection.on("getWeatherMessage", (data) => {
                    data = JSON.parse(data);
                    this.setDutyInfo(data);
                });
                //监听告警信息
                this.connection.on("getAlarmMessage", (data) => {
                    data = JSON.parse(data);
                    if (data[0].Ssdz==this.SsdzId) {
                        data[0].AlarmTime = this.getTime(data[0].AlarmTime);
                        this.warn.unshift(data[0]);
                    }
                });
                //监听设备告警数量
                this.connection.on("getDevCountMessage", (data) => {
                    data = JSON.parse(data);
                    this.setWarnInfo(data);
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
        /*padding-top: 30px;*/
        padding-bottom: 5px;
        overflow: hidden;
        text-align: center;
        .top {
            width: 100%;
            height: 20%;
            background: url(../assets/home/images/main-right-top.png) no-repeat;
            background-size: 100% 100%;
            .top-title {
                font-size: 20px;
                color: #26a0e7;
                text-align: center;
                font-weight: bold;
                letter-spacing: 1px;
                height: 31px;
                line-height: 31px;
            }

            ul {
                padding: 0 35px 0 50px;
                display: flex;
                height: calc(100% - 31px);
                align-items: center;
                justify-content: space-between;
                li {
                    display: flex;
                    align-items: center;
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
        .middel {

            background: url(../assets/home/images/main-right-center.png) no-repeat;
            background-size: 100% 100%;
            height: 30%;
            margin: 1% auto;
            ul {
                display: flex;
                height: 90%;
                box-sizing: border-box;
                padding: 15px 30px 5px 30px;
                justify-content: space-between;
                li {
                    width: 12%;
                    height: 97%;
                    background: url(../assets/home/images/border2.png) no-repeat;
                    background-size: 100% 100%;
                    .title {
                        text-align: center;
                        margin-top: 20px;
                        font-family: MicrosoftYaHei-Bold;
                        font-size: 24px;
                        letter-spacing: 1px;
                        color: #26a0e7;
                    }
                    .list {
                        display: flex;
                        margin-top: 30px;
                        > div {
                            width: 50%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .text {
                                font-size: 20px;
                                text-align: center;
                                color: #fff;
                            }
                            > div {
                                margin-bottom: 10px;
                            }
                        }
                    }
                }
            }

            .middel-footer {
                position: relative;
                height: 15%;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                span {
                    display: inline-block;
                }
                .green {
                    width: 20px;
                    height: 20px;
                    background-color: #00cc21;
                    border-radius: 50%;
                }
                .red {
                    width: 20px;
                    height: 20px;
                    background-color: #fe0000;
                    border-radius: 50%;
                }
                .green-info, .red-info {
                    font-family: MicrosoftYaHei;
                    font-size: 16px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 1px;
                    color: #37f4ff;
                    margin: 0px 20px;
                }
            }
        }
        .bottom {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            height: 46%;
            .card {
                /*background-color: rgba(1,44,123,0.8);*/
                width: 905px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                .toptitle {
                    box-sizing: border-box;
                    width: 100%;
                    font-size: 18px;
                    font-stretch: normal;
                    letter-spacing: 1px;
                    color: #fff;
                    line-height: 56px;
                    text-align: left;
                    font-weight: bold;
                    padding: 0 54px;
                    height: 56px;
                    background-color: rgba(16, 57, 145, 0.8);
                    border: solid 1px #7ecdf4;
                }
                .con {
                    flex-grow: 1;
                    box-sizing: border-box;
                    width: 100%;
                    overflow: auto;
                    border: solid 1px #7ecdf4;

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
                    padding-left: 56px;
                    box-sizing: border-box;
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
                        background-color: rgba(1, 44, 123, 0.6);
                        border: solid 1px #7ecdf4;
                        border-left: none;
                    }
                    &:nth-child(2n+1) {
                        /*background-color:#1b4b8b;*/
                    }
                    .name {
                        width: 10%;
                        text-align: left;
                    }
                    .time {
                        width: 20%;
                        padding-left: 20px;
                    }
                    .des {
                        width: 70%;
                        padding-left: 20px;
                    }
                }
            }
            .warn {
                color: #FFDE00;

                li {
                    cursor: pointer;
                    /*border: solid 1px rgba(126, 205, 244, 1);*/
                    &:nth-child(2n) {
                        background-color: rgba(1, 44, 123, 0.4);
                        border: solid 1px #7ecdf4;
                        border-left: none;

                    }
                    &:nth-child(2n+1) {
                        /*background-color:#3e71b4;*/
                    }
                    .name {
                        width: 15%;
                        text-align: left;
                        text-align: left;
                    }
                    .time {
                        width: 25%;
                        padding-left: 20px;
                        text-align: left;
                    }
                    .dev {
                        padding-left: 10px;
                        width: 60%;
                        text-align: left;
                    }
                    .des {
                        width: 50%;
                        padding-left: 20px;
                    }
                }
            }
        }
    }
</style>
