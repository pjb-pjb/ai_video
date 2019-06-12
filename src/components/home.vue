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
            <div class="con-mid-title">变电站立体巡检智能管控平台</div>
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
                        <li v-for="(item,index) in work2" v-bind:key="index">
                            <div class="name" :title="item.name">{{item.name}}</div>
                            <div class="time" :title="item.time">{{item.time}}</div>
                            <div class="dev" :title="item.des1">{{item.des1}}</div>
                            <div class="des" :title="item.des2">{{item.des2}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/home/js/jquery-2.1.4.min.js";
import "../assets/home/js/index.js";
import "../assets/home/js/cssjs.js";

    export default {
        name: 'Home',
        data() {
            return {
                //标记选中登录还是取消
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
                ],
                work2:[
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
        methods: {
        },
        mounted(){

            var _this = this;

            $.ajax({
                url: "/static/json/map.json", //json文件位置
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

                    window.onresize = function(){
                        mapChart.resize();
                        //myChart1.resize();    //若有多个图表变动，可多写

                    }

                    mapChart.on('click',  (param)=>{
                        // var name=param.name;


                        if(param.componentType == 'series'){

                            _this.$router.push({path:'/',query:{name:param.data.name}})
                        }

                    })
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
            height:60px;
            border: solid 1px rgba(126, 205, 244, 1);
            display: flex;
            line-height: 30px;
            &:nth-child(2n){
                 background: #40789e;
             }
            &:nth-child(2n+1){
                 background-color:#1b4b8b;
             }
            .name{
                width: 20%;
                padding-left: 10px;
                overflow: hidden;
            }
            .time{
                width: 20%;
                padding-left: 10px;
                overflow: hidden;
            }
            .des{
                width: 60%;
                padding-left: 10px;
                overflow: hidden;
            }
        }
    }
    .warn{
        color: #fe0000;
        li{
            height:60px;
            border: solid 1px rgba(126, 205, 244, 1);
            line-height: 30px;
            display: flex;

            &:nth-child(2n){
                 background: #40789e;
             }
            &:nth-child(2n+1){
                 background-color:#3e71b4;
             }
            .name{
                width: 8%;
                padding-left: 10px;
                overflow: hidden;

            }
            .time{
                width: 20%;
                padding-left: 10px;
                overflow: hidden;
            }
            .dev{
                padding-left: 10px;
                width: 20%;
                overflow: hidden;
            }
            .des{
                width: 50%;
                padding-left: 10px;
                overflow: hidden;
            }
        }
    }
    .clearfix{
        clear: both;
    }
    .container {
        width: 100%;
        height: 100vh;
        margin: 0px auto;
        background: url(../assets/home/images/bj-1.png) no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        padding-left:50px;
        padding-right: 50px;
        overflow-x: hidden;
        overflow-y: hidden;
        display: flex;
        justify-content: space-around;
    }
    .con-left{
        width:30%;
        float: left;
        margin: 83px 0px 0px 0px;
    }
    .con-let-top{
        width:100%;
        height: 950px;
        background: url(../assets/home/images/con-right-down-bj.png) no-repeat;
        background-size: 100% 100%;
    }
    .con-right-time{
        width:100%;
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
        width:100%;
        padding:5px;
        height: 307px;
    }

    .con-mid{
        width: 40%;
        float: left;
        background: url(../assets/home/images/map-bj.png) no-repeat;
        background-size: 100% 100%;
        height:100vh;
    }
    .con-mid-title{
        margin-top: 17px;
        width: 100%;
        height:61px ;
        line-height: 56px;
        background: url(../assets/home/images/title.png) no-repeat;
        background-size: 100% 100%;
        text-align: center;
        font-size: 34px;
        color: #01d8ff;
        font-weight: bold;
        padding-left: 10px;
    }
    .con-mid-con{
        width: 100%;
        height: calc(100% - 60px);
    }
    .con-right{
        float: left;
        width:40%;
        margin:83px 0px 0px 0px;
    }

    .con-left-down{
        width:100%;
        height: calc(100% - 50px);
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
        width:calc(100% - 12px);
        margin:0 auto;
        height: calc(100% - 30px);
        overflow: hidden;
        padding-top: 20px;
        margin-bottom: 5px;
    }

    .con-right-down{
        width:100%;
        height: calc(100% - 120px);
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
        width:calc(100% - 12px);
        margin: 0 auto;
        height: calc(100% - 30px);
        overflow: hidden;
        padding-top: 20px;
        margin-bottom: 5px;
    }

</style>
