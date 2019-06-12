<template>
    <div style="height: 100%;">
        <div class="top">
            <ul>
                <li>
                    <div class="img-box"></div>
                    <div class="text">地市：{{info.address}}</div>
                </li>
                <li>
                    <div class="img-box"></div>
                    <div class="text">天气：{{info.weather}}</div>
                </li>
                <li>
                    <div class="img-box"></div>
                    <div class="text">温度：{{info.temperature}}</div>
                </li>
                <li>
                    <div class="img-box"></div>
                    <div class="text">风力：{{info.power}}</div>
                </li>
                <li>
                    <div class="img-box"></div>
                    <div class="text">值班班长：{{info.name}} </div>
                    <div class="text"> 值班时间：{{info.time}}</div>
                </li>
                <li>
                    <div class="img-box"></div>
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
        </div>
        <div class="bottom">
            <card width="936px" title="日常工作" height="100%">
                <ul class="list work">
                    <li v-for="(item,index) in work" v-bind:key="index">
                        <div class="name" :title="item.name">{{item.name}}</div>
                        <div class="time" :itle="item.time">{{item.time}}</div>
                        <div class="des" :title="item.des">{{item.des}}</div>
                    </li>
                </ul>
            </card>
            <card width="936px" title="告警信息" height="100">
                <ul class="list warn">
                    <li v-for="(item,index) in work" v-bind:key="index">
                        <div class="name" :title="item.name">{{item.name}}</div>
                        <div class="time" :title="item.time">{{item.time}}</div>
                        <div class="dev" :title="item.time">{{item.time}}</div>
                        <div class="des" :title="item.des">{{item.des}}</div>
                    </li>
                </ul>
            </card>
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
                        name:"周界轮询",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"周界轮询",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"周界轮询",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"周界轮询",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"周界轮询",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"周界轮询",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"周界轮询",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
                    },
                    {
                        name:"周界轮询",
                        time:"2019-05-06  15:20:10",
                        des:"围墙东北角球型摄像机-围墙西北角球型摄像机-变电站全景摄像机"
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
        height: 12.47%;
        background-color: rgba(82, 160, 198, 0.6);
        border-radius: 10px;
        border: solid 1px #00ffff;
        ul {
            padding: 0 35px 0 150px;
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: space-between;
            li {
                display: flex;
                align-items: center;
                .img-box {
                    width: 48px;
                    height: 48px;
                    background-color: rgba(126, 205, 244, 1);
                    border-radius: 50%;
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
        height: 47.63%;
        ul{
            display: flex;
            height: 100%;
            justify-content: space-between;
            margin-top: 12px;
            li{
                width: 227px;
                height: 100%;
                background-color: rgba(82, 160, 198, 1);
                border-radius: 10px;
                .title{
                    font-size: 24px;
                    text-align: center;
                    color: #fff;
                    margin-top: 20px;
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
    }
    .bottom{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        height: 36.88%;
        margin-top: 5px;
        .list{
            li{
                line-height: 40px;
                display: flex;
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
                border: solid 1px rgba(126, 205, 244, 1);
                &:nth-child(2n){
                    background: #40789e;
                }
                &:nth-child(2n+1){
                    background-color:#1b4b8b;
                }
                .name{
                    width: 20%;
                    padding-left: 30px;
                }
                .time{
                    width: 20%;
                    padding-left: 20px;
                }
                .des{
                    width: 60%;
                    padding-left: 20px;
                }
            }
        }
        .warn{
            color: #fe0000;
            li{
                border: solid 1px rgba(126, 205, 244, 1);
                &:nth-child(2n){
                    background: #40789e;
                }
                &:nth-child(2n+1){
                    background-color:#3e71b4;
                }
                .name{
                    width: 10%;
                    padding-left: 30px;
                }
                .time{
                    width: 20%;
                    padding-left: 20px;
                }
                .dev{
                    padding-left: 10px;
                    width: 10%;
                }
                .des{
                    width: 60%;
                    padding-left: 20px;
                }
            }
        }
    }
</style>
