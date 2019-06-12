
var alarmData = [];
//滚动告警
function alarmInfo($url) {
	$.ajax({
		url: $url.alarm(), //json文件位置
		type: "GET", //请求方式为get
		dataType: "json", //返回数据格式为json
		success: function(data) {
			if(data.cmdid != "100") {
				alarmData.push([{
					alarmName: data.ssdzname,
					alarmTypeName: data.list[0].alarmtypename,
					alarmlevelname: data.list[0].alarmlevelname,
					alarmTime: data.time
				}]);
			}
			var tipHtml = "";
			if(alarmData.length == 0) {
				$(".con-right-down-con ul").html("<li>没有找到数据!</li>");
				return;
			} else {
				$(".con-right-down-con ul").empty();
				for(var i = 0; i < alarmData.length; i++) {
					tipHtml += "<li><span class='nr'>" + alarmData[i][0].alarmName + ',' + alarmData[i][0].alarmTypeName + ',' + alarmData[i][0].alarmlevelname + "</span><span class='dt'>" + alarmData[i][0].alarmTime + "</span></li>";
				}
				console.log(tipHtml);
				$(".con-right-down-con ul").html(tipHtml);
			}

		}
	})
}
//年月日时分秒时间

//嵌套环形饼图
function bingtu($url) {
	$.ajax({
		url: $url.bingtu(), //json文件位置
		type: "GET", //请求方式为get
		dataType: "json", //返回数据格式为json
		success: function(data) {
			var myChart = echarts.init(document.getElementById('bt'));
			option = {
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
}
//堆叠面积图
function duidietu($url) {
	$.ajax({
		url: $url.duidietu(), //json文件位置
		type: "GET", //请求方式为get
		dataType: "json", //返回数据格式为json
		success: function(data) {
			var myChart = echarts.init(document.getElementById('fkt'));
			option = {
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
}
//柱状图
function zhutu($url) {
	$.ajax({
		url: $url.zhutu(), //json文件位置
		type: "GET", //请求方式为get
		dataType: "json", //返回数据格式为json
		success: function(data) {
			var myChart = echarts.init(document.getElementById('zzt'));
			option = {
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
}
//山西地图
function shanximap($url) {
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
//仪表盘监控点位
function jkdw($url) {
	$.ajax({
		url: $url.jkdw(), //json文件位置
		type: "GET", //请求方式为get
		dataType: "json",
		success: function(data) {
			var myChart = echarts.init(document.getElementById('jkd'));
			option = {
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
}
//仪表盘风速
function ybpfs($url) {
	var myChart = echarts.init(document.getElementById('fs'));
	option = {
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
//仪表盘温度
function ybpwd($url) {
	$.ajax({
		url: $url.ybpwd(), //json文件位置
		type: "GET", //请求方式为get
		dataType: "json", //返回数据格式为json
		success: function(data) {
			var myChart = echarts.init(document.getElementById('wd'));
			option = {
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
}
//仪表盘湿度
function ybpsd($url) {
	$.ajax({
		url: $url.ybpsd(), //json文件位置
		type: "GET", //请求方式为get
		dataType: "json", //返回数据格式为json
		success: function(data) {
			var myChart = echarts.init(document.getElementById('sd'));
			option = {
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
}
//仪表盘雨量雨雪
function ybpylyx($url) {
	$.ajax({
		url: $url.ybpylyx(), //json文件位置
		type: "GET", //请求方式为get
		dataType: "json", //返回数据格式为json
		success: function(data) {
			var myChart = echarts.init(document.getElementById('ylyx'));
			option = {
				tooltip: {
					formatter: "{a} <br/>{c} {b}"
				},
				series: [{
						name: '雨量',
						type: 'gauge',
						center: ['40%', '50%'], // 默认全局居中
						radius: '100%',
						min: 0,
						max: 2,
						startAngle: 135,
						endAngle: 45,
						splitNumber: 2,
						axisLine: { // 坐标轴线
							lineStyle: { // 属性lineStyle控制线条样式
								color: [
									[0.2, 'lime'],
									[0.8, '#1e90ff'],
									[1, '#ff4500']
								],
								width: 10,
								shadowColor: '#fff', //默认透明
								shadowBlur: 10
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
								width: 10,
								color: '#fff',
								shadowColor: '#fff', //默认透明
								shadowBlur: 10
							}
						},
						//						axisLabel: {
						//							textStyle: { // 属性lineStyle控制线条样式
						//								fontWeight: 'bolder',
						//								color: '#fff',
						//								shadowColor: '#fff', //默认透明
						//								shadowBlur: 10
						//							},
						//							formatter: function(v) {
						//								switch(v + '') {
						//									case '0':
						//										return 'E';
						//									case '1':
						//										return 'Gas';
						//									case '2':
						//										return 'F';
						//								}
						//							}
						//						},
						splitLine: { // 分隔线
							length: 10, // 属性length控制线长
							lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
								width: 3,
								color: '#fff',
								shadowColor: '#fff', //默认透明
								shadowBlur: 10
							}
						},
						pointer: {
							width: 2,
							shadowColor: '#fff', //默认透明
							shadowBlur: 5
						},
						title: {
							show: false
						},
						detail: {
							show: false
						},
						data: [{
							value: 0.5,
							name: 'gas'
						}]
					},
					{
						name: '雨雪',
						type: 'gauge',
						center: ['40%', '40%'], // 默认全局居中
						radius: '100%',
						min: 0,
						max: 2,
						startAngle: 315,
						endAngle: 225,
						splitNumber: 2,
						axisLine: { // 坐标轴线
							lineStyle: { // 属性lineStyle控制线条样式
								color: [
									[0.2, 'lime'],
									[0.8, '#1e90ff'],
									[1, '#ff4500']
								],
								width: 10,
								shadowColor: '#fff', //默认透明
								shadowBlur: 10
							}
						},
						axisTick: { // 坐标轴小标记
							show: false
						},
						axisLabel: {
							textStyle: { // 属性lineStyle控制线条样式
								fontWeight: 'bolder',
								color: '#fff',
								shadowColor: '#fff', //默认透明
								shadowBlur: 10
							},
							formatter: function(v) {
								switch(v + '') {
									case '0':
										return 'H';
									case '1':
										return 'Water';
									case '2':
										return 'C';
								}
							}
						},
						splitLine: { // 分隔线
							length: 10, // 属性length控制线长
							lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
								width: 3,
								color: '#fff',
								shadowColor: '#fff', //默认透明
								shadowBlur: 10
							}
						},
						pointer: {
							width: 2,
							shadowColor: '#fff', //默认透明
							shadowBlur: 5
						},
						title: {
							show: false
						},
						detail: {
							show: false
						},
						data: [{
							value: 0.5,
							name: 'gas'
						}]
					}
				]
			};
			myChart.setOption(option);
		}
	})
} //主变负荷线条图
function zhubian($url) {
	$.ajax({
		url: $url.zhubian(), //json文件位置
		type: "GET", //请求方式为get
		dataType: "json", //返回数据格式为json
		success: function(data) {
			var myChart = echarts.init(document.getElementById('zbfh'));
			var colors = ['#fb4063', '#39adff'];
			option = {
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
}