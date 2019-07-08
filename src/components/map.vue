<template>
    <div class="my-height">
        <div class="main-left">
            <div class="time-box" id="clock">
                2019年6月13日 18:35:56 星期四
            </div>
            <div class="coms">
                <div class="con-left">
                    <div class="con-let-top">
                        <div class="con-let-top-title">综合智能告警历史统计</div>
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
                                    <p class="wenzi" style="color: #12a8ff;">工作票</p>
                                    <p class="data">210</p>
                                </li>
                                <li>
                                    <p class="wenzi" style="color: #2cca76;">告警</p>
                                    <p class="data" style="color: red;">10</p>
                                </li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="con-right-mid">
                        <div class="con-right-mid-title">华北·福瑞站</div>
                        <div class="con-right-mid-con">

                            <div class="con-right-mid-con-down" id="zbfh"></div>
                        </div>
                    </div>
                    <div class="con-right-down">
                        <div class="con-right-down-title">告警信息</div>
                        <div class="con-right-down-con">
                            <ul>
                                <li><span class="nr">华北福瑞站 张三 李四 带票进入1</span><span class="dt">2019-12-02 09:56</span>
                                </li>
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
    </div>
</template>

<script>
    export default {
        name: "map",
        data() {
            return {
                warnArr: [],
                mapChart: "",
                mapArr: [],
                mapOption: ""
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.setCharts();
                this.warnWatch();
            },
            setCharts(){
                var _this = this;
                //地图
                $.ajax({
                    url: "/static/json/map.json", //json文件位置
                    type: "GET", //请求方式为get
                    dataType: "json",
                    success: function (data) {
                        this.mapArr = data;
                        this.mapOption = {
                            geo: [
                                {
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
                                            borderWidth: 5,
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
                                    color: '#fff',
                                    extraCssText: 'box-shadow: 0 0 3px rgba(255, 0, 0, 0.3);background:rgba(255,0,0,0.3)',
                                },
                                triggerOn: "none",
                                enterable:true
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
                                    data: this.mapArr, // series数据内容
                                    symbolSize: function (val) {
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
                                    data: this.mapArr.filter(val => val.isMy),
                                    symbolSize: function (val) {
                                        return val[1] / 3;
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
                                            show: true,
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
                                }, {
                                    name: '告警',
                                    type: 'effectScatter',
                                    coordinateSystem: 'geo',
                                    data: this.warnArr,
                                    symbolSize: function (val) {
                                        return val[1] / 2;
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
                                            show: false
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: 'red',
                                            shadowBlur: 20,
                                            shadowColor: '#333'
                                        }
                                    },
                                    zlevel: 1,
                                    tooltip: {
                                        padding:0,
                                        borderColor:"red",
                                        borderWidth:"2",
                                        formatter: function (params) {
                                            var warnInfo = params.data.data.warnInfo;
                                            return `
                                                <a onclick="sessionStorage.setItem('name','${params.data.name}');sessionStorage.setItem('ssdzId','${params.data.data.id}');" href="#${_this.$store.state.path}/znld?n=3">
                                                    <ul style="white-space: normal;padding: 20px;color:#fff;line-height: 26px;width: 220px;">
                                                       <li>时间：${warnInfo.AlarmTime.split("T").join(" ")}</li>
                                                       <li>变电站：${warnInfo.SsdzName}</li>
                                                       <li>系统：${warnInfo.SSXTName}</li>
                                                       <li>告警：${warnInfo.AlarmDesc}</li>
                                                    </ul>
                                                </a>
                                            `;
                                        }
                                    }
                                }
                            ]
                        };
                        this.mapChart = _this.$chart.draw("#map", this.mapOption);
                        this.mapChart.on('click', (param) => {
                            console.log(param);
                            if (param.componentType == 'series') {
                                var data = param.data.data;
                                sessionStorage.ssdzId = data && data.id;
                                sessionStorage.name = param.data.name;
                                _this.$router.push({path: '/home/main', query: {name: param.data.name}})
                            }
                        })
                    }.bind(this),
                    error: function (data) {
                        console.log("地图数据请求失败");
                    }
                });
                //综合智能告警
                $.ajax({
                    url: '/static/json/bingtu.json', //json文件位置
                    type: "GET", //请求方式为get
                    dataType: "json", //返回数据格式为json
                    success: function (data) {
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
                                // data: data.data2
                            },
                                {
                                    color: ['#26a0e7', '#e04236', '#eea130', '#11ae86'],
                                    name: '访问来源',
                                    type: 'pie',
                                    // radius: ['50%', '70%'],
                                    radius: ["30%", '70%'],
                                    data: data.data1
                                }
                            ]
                        };
                        _this.$chart.draw("#bt", option);

                    },
                    error: function (data) {
                        console.log("饼图数据请求失败！");
                    }
                });
                //辅控历史告警
                $.ajax({
                    url: "/static/json/duidietu.json", //json文件位置
                    type: "GET", //请求方式为get
                    dataType: "json", //返回数据格式为json
                    success: function (data) {
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
                                data: ['消防', '安防', '环境', '照明', '在线监测']
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
                                name: '消防',
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
                                    name: '安防',
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
                                    name: '环境',
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
                                    name: '照明',
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
                                    name: '在线监测',
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
                        _this.$chart.draw("#fkt", option);
                    },
                    error: function (data) {
                        console.log("堆叠图数据请求失败！")
                    }
                })
                //视频历史告警
                $.ajax({
                    url: '/static/json/zhutu.json', //json文件位置
                    type: "GET", //请求方式为get
                    dataType: "json", //返回数据格式为json
                    success: function (data) {
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
                        _this.$chart.draw("#zzt", option);
                    },
                    error: function (data) {
                        console.log("柱状图数据请求失败！")
                    }
                })
                //监控点位
                $.ajax({
                    url: "/static/json/jkdw.json", //json文件位置
                    type: "GET", //请求方式为get
                    dataType: "json",
                    success: function (data) {
                        var option = {
                            tooltip: {
                                formatter: "{a} <br/>{c} {b}"
                            },
                            series: [{
                                name: '点数',
                                type: 'gauge',
                                radius: '72%',
                                max: 28,
                                splitNumber: 4,
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
                                    },

                                },

                                axisTick: { // 坐标轴小标记
                                    show: false
                                },
                                axisLabel: {
                                    show: true,
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
                                    offsetCenter: [0, '80%'], // x, y，单位px       // x, y，单位px
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
                                    offsetCenter: [0, '0%'],
                                    formatter: '{value}',
                                    textStyle: {
                                        fontSize: 18,
                                        fontFamily: '微软雅黑',
                                        color: "#fff"
                                    }
                                },

                                data: [{
                                    value: 8,
                                    name: '监控点位',

                                }]
                            }]
                        };
                        _this.$chart.draw("#jkd", option);
                    }
                })
                //主变负荷线条图
                $.ajax({
                    url: '/static/json/jkdw.json', //json文件位置
                    type: "GET", //请求方式为get
                    dataType: "json", //返回数据格式为json
                    success: function (data) {
                        var colors = ['#fb4063', '#39adff', '#ffff00', '#00ff00'];
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
                                data: ['今日1#主变负荷', '昨日1#主变负荷', '今日2#主变负荷', '昨日2#主变负荷']
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
                            series: [
                                {
                                    name: '今日1#主变负荷',
                                    type: 'line',
                                    smooth: true,
                                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                                },
                                {
                                    name: '昨日1#主变负荷',
                                    type: 'line',
                                    smooth: true,
                                    data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                                },
                                {
                                    name: '今日2#主变负荷',
                                    type: 'line',
                                    smooth: true,
                                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 6.0, 2.3, 70.7, 175.6, 182.2, 48.7, 18.8]
                                },
                                {
                                    name: '昨日2#主变负荷',
                                    type: 'line',
                                    smooth: true,
                                    data: [48.3, 69.2, 231.6, 46.6, 55.4, 3.9, 5.9, 11.1, 18.7, 18.4, 10.3, 0.7]
                                }
                            ]
                        };
                        _this.$chart.draw("#zbfh", option);
                    }
                })
            },
            //监听告警
            warnWatch(){
                this.connection.on("getAlarmMessage", (data) => {
                    data = JSON.parse(data);
                    var Ssdz = data[0]["Ssdz"];
                    var index = 0;
                    this.mapArr.forEach((val) => {
                        if (val.data && val.data.id == Ssdz) {
                            var flag = this.warnArr.some((ele,n) => {
                                if (ele.data && ele.data.id == val.data.id) {
                                    index = n;
                                    ele = val;
                                    ele.data.warnInfo = data[0];
                                    return true;
                                }
                            });
                            if (!flag) {
                                val.data.warnInfo = data[0];
                                this.warnArr.push(val);
                                index = this.warnArr.length-1;
                            }
                        }
                    });
                    this.mapOption.series[3].data = this.warnArr;
                    this.mapChart.setOption(this.mapOption);1
                    this.mapChart.dispatchAction({
                        type: 'showTip',
                        seriesIndex:3,
                        dataIndex:index
                    });
                });
            }
        }
    }
</script>

<style scoped lang="scss">

    .main-left {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .time-box {
            width: 100%;
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
        .coms {
            width: 100%;
            height: calc(100% - 40px);
            display: flex;
            justify-content: space-around;
        }
        .con-left {
            width: 32%;
            float: left;
            /*margin: 83px 0px 0px 48px;*/
        }
        .con-let-top {
            width: 561px;
            height: 33%;
            background: url(../assets/home/images/con-left-top-bj.png) no-repeat center center;
            background-size: 100% 100%;
        }
        .con-let-top-title {
            font-size: 20px;
            color: #26a0e7;
            text-align: center;
            font-weight: bold;
            letter-spacing: 1px;
            height: 31px;
            line-height: 31px;
        }
        .con-let-top-con {
            width: 561px;
            height: calc(100% - 31px);
        }
        .con-left-mid {
            margin: 2% 0px 2% 0px;
            width: 561px;
            height: 30%;
            background: url(../assets/home/images/con-left-mid-bj.png) no-repeat center center;
            background-size: 100% 100%;
        }
        .con-left-mid-title {
            font-size: 20px;
            color: #26a0e7;
            text-align: center;
            font-weight: bold;
            letter-spacing: 1px;
            height: 31px;
            line-height: 31px;
        }
        .con-left-mid-con {
            width: 561px;
            height: calc(100% - 31px);
        }
        .con-left-down {
            width: 561px;
            height: 33%;
            background: url(../assets/home/images/con-left-down-bj.png) no-repeat center center;
            background-size: 100% 100%;
        }
        .con-left-down-title {
            font-size: 20px;
            color: #26a0e7;
            text-align: center;
            font-weight: bold;
            letter-spacing: 1px;
            height: 31px;
            line-height: 31px;
        }
        .con-left-down-con {
            width: 561px;
            height: calc(100% - 30px);
        }
        .con-mid {
            width: 36%;
            float: left;
            background: url(../assets/home/images/map-bj.png) no-repeat;
            background-size: 100% 100%;
        }

        .con-mid-con {
            width: 600px;
            height: 100%;
        }
        .con-right {
            float: left;
            width: 32%;
            padding-top: 20px;
            box-sizing: border-box;
            /*margin:36px 50px 0px 0px;*/
        }
        .con-right-time {
            width: 561px;
            height: 81px;
            line-height: 81px;
            color: #FFFFFF;
            font-size: 30px;
            text-align: right;
        }
        .con-right-top {
            width: 100%;
            height: 18%;
            background: url(../assets/home/images/con-right-top-bj.png) no-repeat center center;
            background-size: 100% 100%;
        }
        .con-right-top-left {
            width: 138px;
            height: 100%;
            float: left;
        }
        .con-right-top-right {
            width: calc(100% - 138px);
            height: 100%;
            float: right;
        }
        .con-right-top-right ul {
        }
        .con-right-top-right ul li {
            float: left;
            width: 96px;
            margin-top: 30px;
            margin-bottom: 28px;
            margin-right: 10px;
            padding: 6px 0px 4px 4px;
            height: 80px;
            background: url(../assets/home/images/icon-bj.png) no-repeat center center;
            background-size: 100% 100%;
        }
        .con-right-top-right ul li .wenzi {
            width: 91px;
            height: 25px;
            line-height: 25px;
            font-size: 16px;
            text-align: center;

        }
        .con-right-top-right ul li .data {
            width: 91px;
            height: 55px;
            line-height: 55px;
            font-size: 32px;
            color: #09ebee;
            text-align: center;
        }
        .con-right-mid {
            margin: 2% 0px 2% 0px;
            width: 100%;
            height: 50%;
            background: url(../assets/home/images/con-right-mid-bj.png) no-repeat center center;
            background-size: 100% 100%;
        }
        .con-right-mid-title {
            font-size: 20px;
            color: #26a0e7;
            text-align: center;
            font-weight: bold;
            letter-spacing: 1px;
            height: 31px;
            line-height: 31px;
        }
        .con-right-mid-con {
            width: 100%;
            height: calc(100% - 31px);
        }
        .con-right-mid-con-top {
            /*width:100%;*/
            /*height: 141px;*/
            /*display: flex;*/
            /*justify-content: space-around;*/
        }
        .con-right-mid-con-top ul li {
            float: left;
            width: 100%;
            padding: 0px 16px 0px 22px;
            height: 131px;
        }
        .con-right-mid-con-down {
            width: 100%;
            height: 100%;
        }
        .con-right-down {
            width: 100%;
            height: 28%;
            background: url(../assets/home/images/con-right-down-bj.png) no-repeat center center;
            background-size: 100% 100%;
        }
        .con-right-down-title {
            font-size: 20px;
            color: #26a0e7;
            text-align: center;
            font-weight: bold;
            letter-spacing: 1px;
            height: 31px;
            line-height: 31px;
        }
        .con-right-down-con {
            width: 100%;
            height: calc(100% - 31px);
            overflow: hidden;
            padding-top: 20px;
            margin-bottom: 5px;
        }
        .con-right-down-con ul {
        }
        .con-right-down-con ul .js {
            width: 534px;
            height: 32px;
            line-height: 32px;
            margin: 0px 14px 0px 13px;
            background: #0d2247 repeat;

        }
        .con-right-down-con ul .os {
            width: 534px;
            height: 37px;
            line-height: 37px;
            margin: 0px 14px 0px 13px;

        }
        .con-right-down-con ul .nr {
            float: left;
            color: #d5e3ff;
            font-size: 14px;
            font-weight: bold;
            background: url(../assets/home/images/icon-huang.png) no-repeat 16px center;
            padding-left: 49px;
        }
        .con-right-down-con ul .os .nr {
            float: left;
            color: #d5e3ff;
            font-size: 14px;
            font-weight: bold;
            background: url(../assets/home/images/icon-lan.png) no-repeat 16px center;
            padding-left: 49px;
        }
        .con-right-down-con ul li .dt {
            float: right;
            color: #2695e0;
            font-size: 14px;
            font-weight: bold;
            padding-right: 8px;
        }
    }

</style>