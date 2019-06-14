<template>
    <div class="container">
        <div class="container2">
            <div class="main-title1">
                山西电网变电站智能视频分析平台
            </div>
            <div class="main">
                <div class="main-left">
                    <div class="time-box" id="clock">
                        2019年6月13日 18:35:56 星期四
                    </div>
                    <div class="coms">
                        <div class="con-left">
                            <div class="con-let-top">
                                <div class="con-let-top-title">监控点历史告警统计</div>
                                <div class="con-let-top-con" id="bt">
                                </div>
                            </div>
                            <div class="con-left-mid">
                                <div class="con-left-mid-title">辅控历史告警统计</div>
                                <div class="con-left-mid-con" id="fkt">
                                </div>
                            </div>
                            <div class="con-left-down">
                                <div class="con-left-down-title">视频历史告警统计</div>
                                <div class="con-left-down-con" id="zzt">
                                </div>
                            </div>
                        </div>
                        <div class="con-mid">
                            <div class="con-mid-con" id="map">
                            </div>
                        </div>
                        <div class="con-right">

                            <div class="con-right-top">
                                <div class="con-right-top-left" id="jkd"></div>
                                <div class="con-right-top-right">
                                    <ul>
                                        <li>
                                            <p class="wenzi" style="color: #ff6339;">预警镜头</p>
                                            <p class="data">2690</p>
                                        </li>
                                        <li>
                                            <p class="wenzi" style="color: #fee74d;">视频质量</p>
                                            <p class="data" style="color: red;">3263</p>
                                        </li>
                                        <li>
                                            <p class="wenzi" style="color: #12a8ff;">预警辅控</p>
                                            <p class="data">210</p>
                                        </li>
                                        <li>
                                            <p class="wenzi" style="color: #2cca76;">辅控信号</p>
                                            <p class="data" style="color: red;">10</p>
                                        </li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="con-right-mid">
                                <div class="con-right-mid-title">电站名称</div>
                                <div class="con-right-mid-con">
                                    <div class="con-right-mid-con-top">
                                        <!--<div class="con-right-mid-con-top-one" ></div>-->
                                        <ul>
                                            <li id="fs"></li>
                                            <li id="wd"></li>
                                            <li id="sd"></li>
                                            <li id="ylyx"></li>
                                        </ul>
                                    </div>
                                    <div class="con-right-mid-con-down" id="zbfh"></div>
                                </div>
                            </div>
                            <div class="con-right-down">
                                <div class="con-right-down-title">告警信息</div>
                                <div class="con-right-down-con">
                                    <ul >
                                        <li><span class="nr">华北福瑞站 张三 李四 带票进入1</span><span class="dt">2019-12-02 09:56</span></li>
                                        <!--<li><span class="nr">华北福瑞站 张三 李四 带票进入2</span><span class="dt">2019-12-02 09:56</span></li>
                                        <li><span class="nr">华北福瑞站 张三 李四 带票进入3</span><span class="dt">2019-12-02 09:56</span></li>
                                        <li><span class="nr">华北福瑞站 张三 李四 带票进入4</span><span class="dt">2019-12-02 09:56</span></li>
                                        <li><span class="nr">华北福瑞站 张三 李四 带票进入5</span><span class="dt">2019-12-02 09:56</span></li>
                                        <li><span class="nr">华北福瑞站 张三 李四 带票进入6</span><span class="dt">2019-12-02 09:56</span></li>
                                        <li><span class="nr">华北福瑞站 张三 李四 带票进入7</span><span class="dt">2019-12-02 09:56</span></li>
                                        <li><span class="nr">华北福瑞站 张三 李四 带票进入8</span><span class="dt">2019-12-02 09:56</span></li>
                                        <li><span class="nr">华北福瑞站 张三 李四 带票进入9</span><span class="dt">2019-12-02 09:56</span></li>
                                        <li><span class="nr">华北福瑞站 张三 李四 带票进入10</span><span class="dt">2019-12-02 09:56</span></li>
                                        <li><span class="nr">华北福瑞站 张三 李四 带票进入11</span><span class="dt">2019-12-02 09:56</span></li>
                                        <li><span class="nr">华北福瑞站 张三 李四 带票进入12</span><span class="dt">2019-12-02 09:56</span></li>-->
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <div class="text">天气：{{info.weather}}</div>
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
                ],
                warn:[
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
                ],
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
            }
        },
        methods: {
        },
        mounted(){

            var _this = this;
            //地图

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

            $.ajax({
                url: '/static/json/bingtu.json', //json文件位置
                type: "GET", //请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {
                    var myChart = echarts.init(document.getElementById('bt'));
                    var option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        series: [{
                            color: ['#e04236', '#eea130', '#11ae86'],
                            name: '访问来源',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: [0, '40%'],

                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: data.data2
                        },
                            {
                                color: ['#26a0e7', '#e04236', '#eea130', '#11ae86'],
                                name: '访问来源',
                                type: 'pie',
                                radius: ['50%', '70%'],
                                data: data.data1
                            }
                        ]
                    };
                    myChart.setOption(option);
                },
                error: function(data) {
                    console.log("饼图数据请求失败！");
                }
            });

            $.ajax({
                url: "/static/json/duidietu.json", //json文件位置
                type: "GET", //请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {
                    var myChart = echarts.init(document.getElementById('fkt'));
                    var option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            orient: 'horizontal',
                            bottom: '3%',
                            left: '10%',
                            itemWidth: 8,
                            itemHeight: 8,
                            icon: 'rectangle',
                            itemGap: 10,
                            textStyle: {
                                color: '#32dfeb',
                                fontSize: 12,
                                shadowColor: '#0a4358'
                            },
                            data: ['温度', '湿度', '风速', '雨雪', '雨量']
                        },
                        grid: {
                            top: '3%',
                            left: '3%',
                            right: '5%',
                            bottom: '13%',
                            containLabel: true
                        },
                        xAxis: [{
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {
                                lineStyle: {
                                    fontSize: 12,
                                    color: '#fff',
                                }
                            },
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }],
                        yAxis: [{
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    fontSize: 12,
                                    color: '#fff',
                                }
                            }
                        }],
                        series: [{
                            name: '温度',
                            type: 'line',
                            stack: '总量',
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: 'default'
                                    }
                                }
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                            {
                                name: '湿度',
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default'
                                        }
                                    }
                                },
                                data: [220, 182, 191, 234, 290, 330, 310]
                            },
                            {
                                name: '风速',
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default'
                                        }
                                    }
                                },
                                data: [150, 232, 201, 154, 190, 330, 410]
                            },
                            {
                                name: '雨雪',
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default'
                                        }
                                    }
                                },
                                data: [320, 332, 301, 334, 390, 330, 320]
                            },
                            {
                                name: '雨量',
                                type: 'line',
                                stack: '总量',
                                itemStyle: {
                                    normal: {
                                        areaStyle: {
                                            type: 'default'
                                        }
                                    }
                                },
                                data: [820, 932, 901, 934, 1290, 1330, 1320]
                            }
                        ]
                    };
                    myChart.setOption(option);
                },
                error: function(data) {
                    console.log("堆叠图数据请求失败！")
                }
            })

            $.ajax({
                url:'/static/json/zhutu.json', //json文件位置
                type: "GET", //请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {
                    var myChart = echarts.init(document.getElementById('zzt'));
                    var option = {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        legend: {
                            orient: 'horizontal',
                            bottom: '3%',
                            left: '10%',
                            itemWidth: 8,
                            itemHeight: 8,
                            icon: 'rectangle',
                            itemGap: 10,
                            textStyle: {
                                color: '#32dfeb',
                                fontSize: 12,
                                shadowColor: '#0a4358'
                            },
                            data: ['人脸识别', '视频质量', '烟火识别', '车牌识别']
                        },
                        grid: {
                            top: '3%',
                            left: '3%',
                            right: '2%',
                            bottom: '13%',
                            containLabel: true
                        },
                        yAxis: {
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    fontSize: 12,
                                    color: '#fff',
                                }
                            }
                        },
                        xAxis: {
                            type: 'category',
                            axisLine: {
                                lineStyle: {
                                    color: '#fff',
                                    fontSize: 12,
                                }
                            },
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        },
                        series: [{
                            name: '人脸识别',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [320, 302, 301, 334, 390, 330, 320]
                        },
                            {
                                name: '视频质量',
                                type: 'bar',
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight'
                                    }
                                },
                                data: [120, 132, 101, 134, 90, 230, 210]
                            },
                            {
                                name: '烟火识别',
                                type: 'bar',
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight'
                                    }
                                },
                                data: [220, 182, 191, 234, 290, 330, 310]
                            },
                            {
                                name: '车牌识别',
                                type: 'bar',
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight'
                                    }
                                },
                                data: [150, 212, 201, 154, 190, 330, 410]
                            }
                        ]
                    };
                    myChart.setOption(option);
                },
                error: function(data) {
                    console.log("柱状图数据请求失败！")
                }
            })

            $.ajax({
                url:"/static/json/jkdw.json", //json文件位置
                type: "GET", //请求方式为get
                dataType: "json",
                success: function(data) {
                    var myChart = echarts.init(document.getElementById('jkd'));
                    var option = {
                        tooltip: {
                            formatter: "{a} <br/>{c} {b}"
                        },
                        series: [{
                            name: '点数',
                            type: 'gauge',
                            radius: '72%',
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [
                                        [0.25, '#6de647'],
                                        [1.75, '#6d6e8c']
                                    ],
                                    width: 10,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 3
                                }
                            },
                            axisLabel: { // 坐标轴小标记
                                textStyle: { // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 2
                                }
                            },
                            axisTick: { // 坐标轴小标记
                                show: false
                            },
                            axisLabel: {
                                show: false,
                            },
                            splitLine: { // 分隔线
                                length: 10, // 属性length控制线长
                                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 1,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                show: false,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                offsetCenter: [0, '30%'], // x, y，单位px       // x, y，单位px
                                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 12,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                show: true,
                                offsetCenter: [0, '-10%'],
                                formatter: '{value}',
                                textStyle: {
                                    fontSize: 18,
                                    fontFamily: '微软雅黑',
                                }
                            },

                            data: [{
                                value: 8,
                                name: '监控点位'
                            }]
                        }]
                    };

                    myChart.setOption(option);
                }
            })
            //主变负荷线条图
            $.ajax({
                url: '/static/json/jkdw.json', //json文件位置
                type: "GET", //请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {
                    var myChart = echarts.init(document.getElementById('zbfh'));
                    var colors = ['#fb4063', '#39adff'];
                    var option = {
                        color: colors,
                        tooltip: {
                            trigger: 'axis'
                        },
                        grid: {
                            top: '3%',
                            left: '3%',
                            right: '5%',
                            bottom: '25%',
                            containLabel: true
                        },
                        legend: {
                            orient: 'horizontal',
                            bottom: '12%',
                            left: '8%',
                            itemWidth: 8,
                            itemHeight: 8,
                            icon: 'rectangle',
                            itemGap: 10,
                            textStyle: {
                                color: '#32dfeb',
                                fontSize: 12,
                                shadowColor: '#0a4358'
                            },
                            data: ['今日主变负荷', '昨日主变负荷']
                        },
                        xAxis: [{
                            type: 'category',
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    fontSize: 12,
                                    color: '#fff',
                                }
                            },
                            data: ["00:00", "00:15", "00:30", "00:45", "01:00", "01:15", "01:30", "01:45", "02:00", "02:15", "02:30", "02:45"]
                        }],
                        yAxis: [{
                            type: 'value',
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    fontSize: 12,
                                    color: '#fff',
                                }
                            },
                        }],
                        series: [{
                            name: '今日主变负荷',
                            type: 'line',
                            smooth: true,
                            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                            {
                                name: '昨日主变负荷',
                                type: 'line',
                                smooth: true,
                                data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                            }
                        ]
                    };
                    myChart.setOption(option);
                }
            })
            //仪表盘雨量雨雪
            $.ajax({
                url: '/static/json/jkdw.json', //json文件位置
                type: "GET", //请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {
                    var myChart = echarts.init(document.getElementById('ylyx'));
                    var option = {
                        tooltip: {
                            formatter: "{a} <br/>{c} {b}"
                        },
                        series: [{
                            name: '点数',
                            type: 'gauge',
                            radius: '96%',
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [
                                        [0.25, '#fae44d'],
                                        [1.75, '#6d6e8c']
                                    ],
                                    width: 10,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 3
                                }
                            },
                            axisLabel: { // 坐标轴小标记
                                textStyle: { // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 2
                                }
                            },
                            axisTick: { // 坐标轴小标记
                                show: false
                            },
                            axisLabel: {
                                show: false,
                            },
                            splitLine: { // 分隔线
                                length: 10, // 属性length控制线长
                                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 1,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                show: false,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                offsetCenter: [0, '30%'], // x, y，单位px       // x, y，单位px
                                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 12,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                show: true,
                                offsetCenter: [0, '-10%'],
                                formatter: '{value}m/s',
                                textStyle: {
                                    fontSize: 18,
                                    fontFamily: '微软雅黑',
                                    color: '#fff',
                                }
                            },

                            data: [{
                                value: 40,
                                name: '室外湿度'
                            }]
                        }]
                    };
                    myChart.setOption(option);
                }
            })
            //仪表盘湿度
            $.ajax({
                url:  '/static/json/jkdw.json', //json文件位置
                type: "GET", //请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {
                    var myChart = echarts.init(document.getElementById('sd'));
                    var option = {
                        tooltip: {
                            formatter: "{a} <br/>{c} {b}"
                        },
                        series: [{
                            name: '点数',
                            type: 'gauge',
                            radius: '96%',
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [
                                        [0.25, '#fae44d'],
                                        [1.75, '#6d6e8c']
                                    ],
                                    width: 10,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 3
                                }
                            },
                            axisLabel: { // 坐标轴小标记
                                textStyle: { // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 2
                                }
                            },
                            axisTick: { // 坐标轴小标记
                                show: false
                            },
                            axisLabel: {
                                show: false,
                            },
                            splitLine: { // 分隔线
                                length: 10, // 属性length控制线长
                                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 1,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                show: false,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                offsetCenter: [0, '30%'], // x, y，单位px       // x, y，单位px
                                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 12,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                show: true,
                                offsetCenter: [0, '-10%'],
                                formatter: '{value}m/s',
                                textStyle: {
                                    fontSize: 18,
                                    fontFamily: '微软雅黑',
                                    color: '#fff',
                                }
                            },

                            data: [{
                                value: 40,
                                name: '室外湿度'
                            }]
                        }]
                    };
                    myChart.setOption(option);
                }
            })

            //仪表盘温度
            $.ajax({
                url: '/static/json/jkdw.json', //json文件位置
                type: "GET", //请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {
                    var myChart = echarts.init(document.getElementById('wd'));
                    var option = {
                        tooltip: {
                            formatter: "{a} <br/>{c} {b}"
                        },
                        series: [{
                            name: '点数',
                            type: 'gauge',
                            radius: '96%',
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [
                                        [0.25, '#00ffff'],
                                        [1.75, '#6d6e8c']
                                    ],
                                    width: 10,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 3
                                }
                            },
                            axisLabel: { // 坐标轴小标记
                                textStyle: { // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 2
                                }
                            },
                            axisTick: { // 坐标轴小标记
                                show: false
                            },
                            axisLabel: {
                                show: false,
                            },
                            splitLine: { // 分隔线
                                length: 10, // 属性length控制线长
                                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 1,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                show: false,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                offsetCenter: [0, '30%'], // x, y，单位px       // x, y，单位px
                                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 12,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                show: true,
                                offsetCenter: [0, '-10%'],
                                formatter: '{value}℃',
                                textStyle: {
                                    fontSize: 18,
                                    color: '#fff',
                                }
                            },

                            data: [{
                                value: 40,
                                name: '室外温度'
                            }]
                        }]
                    };
                    myChart.setOption(option);
                }
            })

            $.ajax({
                url: '/static/json/jkdw.json', //json文件位置
                type: "GET", //请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(data) {
                    var myChart = echarts.init(document.getElementById('fs'));
                    var option = {
                        tooltip: {
                            formatter: "{a} <br/>{c} {b}"
                        },
                        series: [{
                            name: '点数',
                            type: 'gauge',
                            radius: '96%',
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [
                                        [0.0, '#f0eb37'],
                                        [7.9, '#e68514'],
                                        [20.4, '#e72519']
                                    ],
                                    width: 10,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 3
                                }
                            },
                            axisLabel: { // 坐标轴小标记
                                textStyle: { // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 2
                                }
                            },
                            axisTick: { // 坐标轴小标记
                                show: true
                            },
                            axisLabel: {
                                show: true
                            },
                            splitLine: { // 分隔线
                                length: 10, // 属性length控制线长
                                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 1,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                show: true,
                                shadowColor: '#ff0000', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                offsetCenter: [0, '30%'], // x, y，单位px       // x, y，单位px
                                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 12,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                show: true,
                                offsetCenter: [0, '-10%'],
                                formatter: '{value}m/s',
                                textStyle: {
                                    fontSize: 18,

                                    color: '#fff',
                                }
                            },
                            data: [{
                                value: 40,
                                name: '风速'
                            }]
                        }, {
                            name: '点数',
                            type: 'gauge',
                            radius: '96%',
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [
                                        [0.0, '#f0eb37'],
                                        [7.9, '#e68514'],
                                        [20.4, '#e72519']
                                    ],
                                    width: 10,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 3
                                }
                            },
                            axisLabel: { // 坐标轴小标记
                                textStyle: { // 属性lineStyle控制线条样式
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 2
                                }
                            },
                            axisTick: { // 坐标轴小标记
                                show: false
                            },
                            axisLabel: {
                                show: false,
                            },
                            splitLine: { // 分隔线
                                length: 10, // 属性length控制线长
                                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 1,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {
                                show: true,
                                shadowColor: '#000000', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                offsetCenter: [0, '30%'], // x, y，单位px       // x, y，单位px
                                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 12,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                show: true,
                                offsetCenter: [0, '-10%'],
                                formatter: '{value}m/s',
                                textStyle: {
                                    fontSize: 18,

                                    color: '#fff',
                                }
                            },
                            data: [{
                                value: 20,
                                name: '风速'
                            }]
                        }]
                    };
                    myChart.setOption(option);
                }
            })


        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    *{
        user-select: none;
    }
    .container {
        width: 3840px;
        height: 1080px;

        margin: 0px auto;
        background: url(../assets/home/images/background.png) no-repeat;
        background-size: 100% 100%;
        .container2 {
            width: 100%;
            height: 100%;
            margin: 0px auto;
            background: url(../assets/home/images/border.png) no-repeat;
            background-size: 100% 100%;
            box-sizing: border-box;
            padding-left: 60px;
            padding-right: 60px;
            padding-top: 40px;
            padding-bottom: 26px;
            position: relative;
            .main-title1{
                width: 676px;
                height: 61px;
                margin:0 auto;
                font-family: MicrosoftYaHei-Bold;
                font-size: 36px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 61px;
                letter-spacing: 0px;
                color: #01d8ff;
                text-align: center;
                margin-top: 17px;
                position: absolute;
                left:0px;
                top:17px;
                right:0px;
                margin:0 auto;
            }
            .main{
                width:100%;
                height:100%;
                .main-left{
                    float:left;
                    width:calc(50% - 15px);
                    height:100%;
                    overflow: hidden;
                    .time-box{
                        width:100%;
                        text-align: center;
                        height: 40px;
                        font-family: MicrosoftYaHei-Bold;
                        font-size: 24px;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 40px;
                        letter-spacing: 1px;
                        color: #01d8ff;
                    }
                    .coms{
                        width:100%;
                        height:calc(100% - 40px);
                        display: flex;
                        justify-content: space-around;
                    }
                    .con-left{
                        width:561px;
                        float: left;
                        /*margin: 83px 0px 0px 48px;*/
                    }
                    .con-let-top{
                        width:561px;
                        height: 327px;
                        background: url(../assets/home/images/con-left-top-bj.png) no-repeat center center;
                        background-size: 100% 100%;
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
                    .con-left-mid{
                        margin:22px 0px 22px 0px;
                        width:561px;
                        height: 271px;
                        background: url(../assets/home/images/con-left-mid-bj.png) no-repeat center center;
                        background-size: 100% 100%;
                    }
                    .con-left-mid-title{
                        font-size: 20px;
                        color: #26a0e7;
                        text-align: center;
                        font-weight: bold;
                        letter-spacing:1px;
                        height: 31px;
                        line-height: 31px;
                    }
                    .con-left-mid-con{
                        width: 561px;
                        height: 240px;
                    }
                    .con-left-down{
                        width:561px;
                        height: 315px;
                        background: url(../assets/home/images/con-left-down-bj.png) no-repeat center center;
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
                        width: 561px;
                        height: 284px;
                    }
                    .con-mid{
                        width: 600px;
                        float: left;
                        background: url(../assets/home/images/map-bj.png) no-repeat;
                        background-size: 100% 100%;
                    }

                    .con-mid-con{
                        width: 600px;
                        height: 100%;
                    }
                    .con-right{
                        float: left;
                        width:561px;
                        padding-top: 20px;
                        box-sizing: border-box;
                        /*margin:36px 50px 0px 0px;*/
                    }
                    .con-right-time{
                        width:561px;
                        height: 81px;
                        line-height: 81px;
                        color: #FFFFFF;
                        font-size: 30px;
                        text-align: right;
                    }
                    .con-right-top{
                        width:561px;
                        height: 148px;
                        background: url(../assets/home/images/con-right-top-bj.png) no-repeat center center;
                        background-size: 100% 100%;
                    }
                    .con-right-top-left{
                        width:138px;
                        height: 148px;
                        float: left;
                    }
                    .con-right-top-right{
                        width:423px;
                        height: 148px;
                        float: right;
                    }
                    .con-right-top-right ul{}
                    .con-right-top-right ul li{
                        float: left;
                        width:96px;
                        margin-top:30px;
                        margin-bottom: 28px;
                        margin-right: 3px;
                        padding: 6px 0px 4px 4px;
                        height: 80px;
                        background: url(../assets/home/images/icon-bj.png) no-repeat center center;
                        background-size: 100% 100%;
                    }
                    .con-right-top-right ul li .wenzi{
                        width:91px;
                        height: 25px;
                        line-height: 25px;
                        font-size: 16px;
                        text-align: center;

                    }
                    .con-right-top-right ul li .data{
                        width:91px;
                        height: 55px;
                        line-height: 55px;
                        font-size: 32px;
                        color: #09ebee;
                        text-align: center;
                    }
                    .con-right-mid{
                        margin: 22px 0px 22px 0px;
                        width:561px;
                        height: 463px;
                        background: url(../assets/home/images/con-right-mid-bj.png) no-repeat center center;
                        background-size: 100% 100%;
                    }
                    .con-right-mid-title{
                        font-size: 20px;
                        color: #26a0e7;
                        text-align: center;
                        font-weight: bold;
                        letter-spacing:1px;
                        height: 31px;
                        line-height: 31px;
                    }
                    .con-right-mid-con{
                        width:561px;
                        height: 432px;

                    }
                    .con-right-mid-con-top{
                        width:561px;
                        height: 141px;
                        display: flex;
                        justify-content: space-around;
                    }
                    .con-right-mid-con-top ul li{
                        float: left;
                        width: 131px;
                        padding: 0px 16px 0px 22px;
                        height:131px;
                    }
                    .con-right-mid-con-down{
                        width: 561px;
                        height: 291px;
                    }
                    .con-right-down{
                        width:561px;
                        height: 286px;
                        background: url(../assets/home/images/con-right-down-bj.png) no-repeat center center;
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
                        height: 212px;
                        overflow: hidden;
                        padding-top: 20px;
                        margin-bottom: 5px;
                    }
                    .con-right-down-con ul{}
                    .con-right-down-con ul .js{
                        width:534px;
                        height:32px;
                        line-height: 32px;
                        margin: 0px 14px 0px 13px;
                        background: #0d2247 repeat;

                    }
                    .con-right-down-con ul .os{
                        width:534px;
                        height:37px;
                        line-height: 37px;
                        margin: 0px 14px 0px 13px;

                    }
                    .con-right-down-con ul .nr{
                        float: left;
                        color: #d5e3ff;
                        font-size: 14px;
                        font-weight: bold;
                        background:url(../assets/home/images/icon-huang.png) no-repeat 16px center;
                        padding-left: 49px;
                    }
                    .con-right-down-con ul .os .nr{
                        float: left;
                        color: #d5e3ff;
                        font-size: 14px;
                        font-weight: bold;
                        background:url(../assets/home/images/icon-lan.png) no-repeat 16px center;
                        padding-left: 49px;
                    }
                    .con-right-down-con ul li .dt{
                        float: right;
                        color: #2695e0;
                        font-size: 14px;
                        font-weight: bold;
                        padding-right: 8px;
                    }
                }
                .main-right{
                    position: relative;
                    float:right;
                    width:calc(50% - 30px);
                    height:100%;
                    box-sizing: border-box;
                    padding-top: 60px;
                    overflow: hidden;
                    text-align: center;

                }

            }
        }

    }



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

    .root-foot {
        width:100%;
        height: 60px;
        position: absolute;
        bottom:0;
        left:0;
        ul {
            height: 100%;
            display: flex;
            li {
                height: 100%;
                background: #1d193a;
                border: 1px solid #7ecdf4;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
                color: #fff;
                text-align: center;
                line-height: 60px;
                font-size: 24px;
                cursor: pointer;
                &.active{
                    background: #0d371d;
                }
            }
        }

    }

</style>
