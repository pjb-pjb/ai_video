<template>
    <div class="container">
        <div class="con-left">
            <div class="con-left-down">
                <div class="con-left-down-title">日常工作</div>
                <div class="con-left-down-con">
                    <ul class="list work">
                        <li v-for="(item,index) in work" v-bind:key="index">
                            <div class="name" :title="item.name">{{item.name}}</div>
                            <div class="time" :itle="item.time">{{item.time}}</div>
                            <div class="des" :title="item.des">{{item.des}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="con-mid">
            <div class="con-mid-title">变电站全面监控平台</div>
            <div class="con-mid-con" id="map">
            </div>
        </div>
        <div class="con-right">
            <div class="con-right-time" id="clock">
            </div>

            <div class="con-right-down">
                <div class="con-right-down-title">告警信息</div>
                <div class="con-right-down-con">
                    <ul class="list warn">
                        <li v-for="(item,index) in work" v-bind:key="index">
                            <div class="name" :title="item.name">{{item.name}}</div>
                            <div class="time" :title="item.time">{{item.time}}</div>
                            <div class="dev" :title="item.time">{{item.time}}</div>
                            <div class="des" :title="item.des">{{item.des}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/home/js/jquery-2.1.4.min.js";
// import "../assets/home/js/ipAddress.js";
// import "../assets/home/js/echarts.js";
// import "../assets/home/js/shanxi.js";
import "../assets/home/js/index.js";
import "../assets/home/js/jedate/jedate.js";
import "../assets/home/js/cssjs.js";
function clock() {
    var now = new Date()
    var year = 1900 + now.getYear() + "年<span style='color:#01d8ff;'>" + (now.getMonth() + 1) + "</span>月<span style='color:#01d8ff;'>" + now.getDate() + "</span>日 ";
    var hour = "<span style='color:#01d8ff;'>" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "</span> 星期";
    var weekString = "日一二三四五六";
    var week = "<span style='color:#01d8ff;'>" + weekString[now.getDay()] + "</span>";
    var datatime = year + hour + week;
    document.getElementById("clock").innerHTML = datatime;
}
    export default {
        name: 'Home',
        data() {
            return {
                //标记选中登录还是取消
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
        methods: {
        },
        mounted(){
                //年月日时分秒时间
                setInterval(function() {
                    clock();
                }, 1000);
                var $url = new IpParameters();

            $.ajax({
                url: $url.shanximap(), //json文件位置
                type: "GET", //请求方式为get
                dataType: "json",
                success: function(data) {
                    var mapChart = echarts.init(document.getElementById('map'));
                    var myData = data;
                    console.log(myData);
                    var option = {
                        geo: [{
                            type: 'map',
                            map: '山西',
                            selectedMode: 'single',
                            label: {
                                normal: {
                                    show: true, //显示省份标签
                                    fontFamily: '微软雅黑',
                                    textStyle: {
                                        color: "#4ccaff"

                                    }, //省份标签字体颜色
                                    fontSize: 20,
                                },
                                emphasis: {
                                    show: true, //显示省份标签
                                    fontFamily: '微软雅黑',
                                    textStyle: {
                                        color: "#4ccaff"
                                    }, //省份标签字体颜色
                                    fontSize: 20,
                                }
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: '#0bd8e1',
                                    borderWidth: 5,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    shadowBlur: 30,
                                    shadowColor: "#0bd8e1"
                                },
                                emphasis: {
                                    show: false,
                                    areaColor: "#003289",
                                    borderWidth: 5
                                }
                            }
                        }, {

                            type: 'map',
                            map: '山西',
                            selectedMode: 'single',
                            label: {
                                normal: {
                                    show: true, //显示省份标签
                                    fontFamily: '微软雅黑',
                                    textStyle: {
                                        color: "#4ccaff"

                                    }, //省份标签字体颜色
                                    fontSize: 20,
                                },
                                emphasis: {
                                    show: true, //显示省份标签
                                    fontFamily: '微软雅黑',
                                    textStyle: {
                                        color: "#4ccaff"
                                    }, //省份标签字体颜色
                                    fontSize: 20,
                                }
                            },
                            itemStyle: {
                                normal: {
                                    areaColor: '#000523', //省份区域颜色
                                    borderColor: '#178897',
                                    borderWidth: 2,

                                },
                                emphasis: {
                                    show: false,
                                    areaColor: '#003289', //鼠标滑过后省份区域颜色
                                }
                            }
                        }],
                        tooltip: {
                            rigger: 'item',
                            textStyle: {
                                color: '#666666',
                                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
                            }
                        },
                        series: [{
                            name: '山西省',
                            type: 'map',
                            mapType: 'shanxi',
                            selectedMode: 'single',
                            clickable: true,
                            coordinateSystem: 'geo',
                            roam: true,
                            geoIndex: 0,
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            }
                        },
                            {
                                name: '山西省变电站分布图',
                                type: 'scatter',
                                coordinateSystem: 'geo',
                                data: myData, // series数据内容
                                symbolSize: function(val) {
                                    return val[1] / 4;
                                },
                                label: {
                                    normal: {
                                        formatter: '{b}',
                                        position: 'right',
                                        show: true
                                    },
                                    emphasis: {
                                        show: true
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#ddb926'
                                    }
                                }
                            }, {
                                name: '500KV',
                                type: 'effectScatter',
                                coordinateSystem: 'geo',
                                data: myData.sort(function(a, b) {
                                    return b.value - a.value;
                                }).slice(0, 6),
                                symbolSize: function(val) {
                                    return val[1] / 4;
                                },
                                showEffectOn: 'render',
                                rippleEffect: {
                                    brushType: 'stroke'
                                },
                                hoverAnimation: true,
                                label: {
                                    normal: {
                                        formatter: '{b}',
                                        position: 'right',
                                        show: true
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#f4e925',
                                        shadowBlur: 20,
                                        shadowColor: '#333'
                                    }
                                },
                                zlevel: 1
                            }
                        ]
                    };
                    mapChart.setOption(option);
                },
                error: function(data) {
                    console.log("地图数据请求失败");
                }
            });

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

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
            height:100px;
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
    .clearfix{
        clear: both;
    }
    .container {
        width: 100%;
        height: 1080px;
        margin: 0px auto;
        background: url(../assets/home/images/bj-1.png) no-repeat;
        background-size: 100% 100%;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .con-left{
        width:561px;
        float: left;
        margin: 83px 0px 0px 48px;
    }
    .con-let-top{
        width:561px;
        height: 950px;
        background: url(../assets/home/images/con-right-down-bj.png) no-repeat;
        background-size: 100% 100%;
    }
    .con-right-time{
        width:561px;
        height: 81px;
        line-height: 81px;
        color: #FFFFFF;
        font-size: 30px;
        text-align: right;
    }
    .con-let-top-title{
        font-size: 20px;
        color: #26a0e7;
        text-align: center;
        font-weight: bold;
        letter-spacing:1px;
        height: 31px;
        line-height: 31px;
    }
    .con-let-top-con{
        width:561px;
        height: 307px;
    }

    .con-mid{
        width: 700px;
        float: left;
        background: url(../assets/home/images/map-bj.png) no-repeat;
        background-size: 100% 100%;
    }
    .con-mid-title{
        margin-top: 17px;
        width: 690px;
        height:61px ;
        line-height: 56px;
        background: url(../assets/home/images/title.png) no-repeat;
        background-size: 100% 100%;
        text-align: center;
        font-size: 36px;
        color: #01d8ff;
        font-weight: bold;
        padding-left: 10px;
    }
    .con-mid-con{
        width: 700px;
        height: 1002px;
    }
    .con-right{
        float: left;
        width:516px;
        margin:83px 50px 0px 0px;
    }

    .con-left-down{
        width:561px;
        height: 950px;
        background: url(../assets/home/images/con-left-down-bj.png) no-repeat;
        background-size: 100% 100%;
    }
    .con-left-down-title{
        font-size: 20px;
        color: #26a0e7;
        text-align: center;
        font-weight: bold;
        letter-spacing:1px;
        height: 31px;
        line-height: 31px;
    }
    .con-left-down-con{
        width:561px;
        height: 900px;
        overflow: hidden;
        padding-top: 20px;
        margin-bottom: 5px;
    }

    .con-right-down{
        width:561px;
        height: 870px;
        background: url(../assets/home/images/con-right-down-bj.png) no-repeat;
        background-size: 100% 100%;
    }
    .con-right-down-title{
        font-size: 20px;
        color: #26a0e7;
        text-align: center;
        font-weight: bold;
        letter-spacing:1px;
        height: 31px;
        line-height: 31px;
    }
    .con-right-down-con{
        width:561px;
        height: 820px;
        overflow: hidden;
        padding-top: 20px;
        margin-bottom: 5px;
    }

</style>
