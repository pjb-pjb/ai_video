<template>
    <div style="height: 100%;">
        <div class="main-right">

            <div class="top">
                <div class="top-title">
                    值班信息
                </div>
                <ul>
                    <li>
                        <div class="img-box one"></div>
                        <div class="text">地市：{{info.address}}</div>
                    </li>
                    <li>
                        <div class="img-box two"></div>
                        <div class="text">湿度：{{info.weather}}</div>
                    </li>
                    <li>
                        <div class="img-box three"></div>
                        <div class="text">温度：{{info.temperature}}</div>
                    </li>
                    <li>
                        <div class="img-box four"></div>
                        <div class="text">风力：{{info.power}}</div>
                    </li>
                    <li>
                        <div class="img-box four"></div>
                        <div class="text">风向：{{info.power2}}</div>
                    </li>
                    <li>
                        <div class="img-box five"></div>
                        <div class="text">值班班长：{{info.name}} </div>
                        <div class="text"> 值班时间：{{info.time}}</div>
                    </li>
                    <li>
                        <div class="img-box six"></div>
                        <div class="text">{{info.tel}}</div>
                    </li>
                    <li>
                        <div class="text">系统通讯&nbsp;&nbsp;<ddd width="26px" height="26px" br="50%"></ddd></div>
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
                                <ddd index="0"></ddd>
                                <ddd index="0" :isWarn="true"></ddd>
                            </div>
                            <div>
                                <div class="text">火灾</div>
                                <ddd index="0"></ddd>
                                <ddd index="0" :isWarn="true"></ddd>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="title">安防系统</div>
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
                        <div class="title">给 排 水</div>
                        <div class="list">
                            <div>
                                <div class="text">设备</div>
                                <ddd index="0"></ddd>
                                <ddd index="0" :isWarn="true"></ddd>
                            </div>
                            <div>
                                <div class="text">越限</div>
                                <ddd index="0"></ddd>
                                <ddd index="0" :isWarn="true"></ddd>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="title">环境监测</div>
                        <div class="list">
                            <div>
                                <div class="text">设备</div>
                                <ddd index="0"></ddd>
                                <ddd index="0" :isWarn="true"></ddd>
                            </div>
                            <div>
                                <div class="text">越限</div>
                                <ddd index="0"></ddd>
                                <ddd index="0" :isWarn="true"></ddd>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="title">照明监控</div>
                        <div class="list">
                            <div>
                                <div class="text">设备</div>
                                <ddd index="0"></ddd>
                                <ddd index="0" :isWarn="true"></ddd>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="title">在线监测</div>
                        <div class="list">
                            <div>
                                <div class="text">设备</div>
                                <ddd index="0"></ddd>
                                <ddd index="0" :isWarn="true"></ddd>
                            </div>
                            <div>
                                <div class="text">越限</div>
                                <ddd index="0"></ddd>
                                <ddd index="0" :isWarn="true"></ddd>
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
                <div class="card" >
                    <div class="toptitle" ><span >日常工作</span></div>
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

                <div class="card"  style="color:#FFDE00">
                    <div class="toptitle"><span style="color:#FFDE00">告警信息</span></div>
                    <div class="con">
                        <ul class="list warn">
                            <li v-for="(item,index) in warn" v-bind:key="index">
                                <div class="name" :title="item.name">{{item.name}}</div>
                                <div class="time" :title="item.time">{{item.time}}</div>
                                <div class="dev" :title="item.time">{{item.des1}}</div>
                                <div class="des" :title="item.des">{{item.des2}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="root-foot">
                <ul>
                    <li  :class="{active:activeIndex==index}" :style="'width:'+100/footList.length+'%;'" v-for="(item,index) in footList" v-bind:key="index">{{item.title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                info: {
                    address: "太原",
                    weather: "晴",
                    temperature: "7℃~22℃",
                    power: "4~5级",
                    name: "小明",
                    time: "2019-5-6 15：00",
                    tel: "13822233366"
                },
                work:[
                    {
                        name:"例行巡视",
                        time:"2019-06-12  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"专项巡视",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"专项巡视",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"自定义巡视",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"熄灯巡视",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"熄灯巡视",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"自定义巡视",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"特殊巡视",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"自定义巡视",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"特殊巡视",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    }
                ],warn:[
                    {
                        name:"安防系统",
                        time:"2019-05-06  15:20:10",
                        des1:"电子围栏",
                        des2:"电子围栏一区（东一）入侵告警"
                    },
                    {
                        name:"消防系统",
                        time:"2019-05-06  15:20:10",
                        des1:"3号感烟探头",
                        des2:"生产综合楼1楼蓄电池室3号感烟探头报警"
                    },
                    {
                        name:"视频监控",
                        time:"2019-05-06  15:20:10",
                        des1:"东北角摄像机",
                        des2:"生产综合楼1楼35kV高压室东北角球型摄像机监测被异物遮挡"
                    },
                    {
                        name:"安防系统",
                        time:"2019-05-06  15:20:10",
                        des1:"电子围栏",
                        des2:"电子围栏一区（东一）入侵告警"
                    },
                    {
                        name:"消防系统",
                        time:"2019-05-06  15:20:10",
                        des1:"3号感烟探头",
                        des2:"生产综合楼1楼蓄电池室3号感烟探头报警"
                    },
                    {
                        name:"视频监控",
                        time:"2019-05-06  15:20:10",
                        des1:"东北角摄像机",
                        des2:"生产综合楼1楼35kV高压室东北角球型摄像机监测被异物遮挡"
                    },
                    {
                        name:"安防系统",
                        time:"2019-05-06  15:20:10",
                        des1:"电子围栏",
                        des2:"电子围栏一区（东一）入侵告警"
                    },
                    {
                        name:"消防系统",
                        time:"2019-05-06  15:20:10",
                        des1:"3号感烟探头",
                        des2:"生产综合楼1楼蓄电池室3号感烟探头报警"
                    },
                    {
                        name:"视频监控",
                        time:"2019-05-06  15:20:10",
                        des1:"东北角摄像机",
                        des2:"生产综合楼1楼35kV高压室东北角球型摄像机监测被异物遮挡"
                    }
                ]
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .top {
        width: 100%;
        height: 160px;
        background: url(../assets/home/images/main-right-top.png) no-repeat;
        background-size:100% 100%;
        .top-title{
            font-size: 20px;
            color: #26a0e7;
            text-align: center;
            font-weight: bold;
            letter-spacing:1px;
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
                .one{
                    background: url(../assets/home/images/address.png) no-repeat;
                    background-size:100% 100%;
                }
                .two{
                    background: url(../assets/home/images/weather.png) no-repeat;
                    background-size:100% 100%;
                }
                .three{
                    background: url(../assets/home/images/wendu.png) no-repeat;
                    background-size:100% 100%;
                }
                .four{
                    background: url(../assets/home/images/feng.png) no-repeat;
                    background-size:100% 100%;
                }
                .five{
                    background: url(../assets/home/images/person.png) no-repeat;
                    background-size:100% 100%;
                }
                .six{
                    background: url(../assets/home/images/phone.png) no-repeat;
                    background-size:100% 100%;
                }
                .text{
                    font-size: 16px;
                    color: #fff;
                    margin-left: 10px;
                    display: flex;
                }
            }
        }
    }
    .middel{

        background: url(../assets/home/images/main-right-center.png) no-repeat;
        background-size: 100% 100%;
        height: 285px;
        margin:30px auto;

        ul{
            display: flex;
            height:230px;
            box-sizing: border-box;
            padding: 15px 30px;
            padding-bottom: 5px;
            justify-content: space-between;
            li{
                width: 210px;
                height: 210px;
                background: url(../assets/home/images/border2.png) no-repeat;
                background-size: 100% 100%;
                .title{
                    text-align: center;
                    margin-top: 20px;
                    font-family: MicrosoftYaHei-Bold;
                    font-size: 24px;
                    letter-spacing: 1px;
                    color: #26a0e7;
                }
                .list{
                    display: flex;
                    margin-top: 30px;
                    >div{
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        .text{
                            font-size: 20px;
                            text-align: center;
                            color: #fff;
                        }
                        >div{
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }

        .middel-footer{
            height:45px;
            text-align: center;
            display: flex;
            align-items:center;
            justify-content:center;
            span{
                display: inline-block;
            }
            .green{
                width: 20px;
                height: 20px;
                background-color: #00cc21;
                border-radius: 50%;
            }
            .red{
                width: 20px;
                height: 20px;
                background-color: #fe0000;
                border-radius: 50%;
            }
            .green-info,.red-info{
                font-family: MicrosoftYaHei;
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 1px;
                color: #37f4ff;
                margin:0px 20px;
            }
        }
    }
    .bottom{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        height: 340px;
        margin-top: 5px;
        .card{
            /*background-color: rgba(1,44,123,0.8);*/
            width:905px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .toptitle{
                box-sizing: border-box;
                width: 100%;
                font-size: 18px;
                font-stretch: normal;
                letter-spacing: 1px;
                color: #fff;
                line-height: 56px;
                text-align: left;
                font-weight: bold;
                padding:0 54px;
                height: 56px;
                background-color: rgba(16,57,145,0.8);
                border: solid 1px #7ecdf4;
            }
            .con{
                flex-grow: 1;
                box-sizing: border-box;
                width: 100%;
                overflow: auto;
                border: solid 1px #7ecdf4;

                &::-webkit-scrollbar {/*滚动条整体样式*/
                    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
                    height: 1px;
                }
                &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                    background:  #7ecdf4;
                }
                &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                    border-radius: 10px;
                    background: rgba(1,44,123,0.8);
                }
            }
        }
        .list{
            li{
                line-height: 40px;
                display: flex;
                padding-left: 56px;
                box-sizing: border-box;
                >div{
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
        .work{
            color: #fff;
            li{
                /*border: solid 1px rgba(126, 205, 244, 1);*/
                &:nth-child(2n){
                    background-color: rgba(1,44,123,0.6);
                    border: solid 1px #7ecdf4;
                    border-left:none;
                }
                &:nth-child(2n+1){
                    /*background-color:#1b4b8b;*/
                }
                .name{
                    width: 10%;
                    text-align: left;
                }
                .time{
                    width: 20%;
                    padding-left: 20px;
                }
                .des{
                    width: 70%;
                    padding-left: 20px;
                }
            }
        }
        .warn{
            color:#FFDE00;


            li{
                /*border: solid 1px rgba(126, 205, 244, 1);*/
                &:nth-child(2n){
                    background-color: rgba(1,44,123,0.4);
                    border: solid 1px #7ecdf4;
                    border-left:none;

                }
                &:nth-child(2n+1){
                    /*background-color:#3e71b4;*/
                }
                .name{
                    width: 10%;
                    text-align: left;

                }
                .time{
                    width: 20%;
                    padding-left: 20px;
                }
                .dev{
                    padding-left: 10px;
                    width: 20%;
                }
                .des{
                    width: 50%;
                    padding-left: 20px;
                }
            }
        }
    }
</style>
