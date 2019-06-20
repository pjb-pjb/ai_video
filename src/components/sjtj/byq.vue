<template>
    <div class="byq my-height">
        <el-row class="my-height">
            <el-row class="sel" style="height: 20%">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-row>
            <el-row class="ybwd" style="height: 80%">

            </el-row>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "byq",
        data(){
          return {
              options: [{
                  value: '1',
                  label: '本周'
              }, {
                  value: '2',
                  label: '本月'
              }, {
                  value: '3',
                  label: '今年'
              }],
              value: '1'
          }
        },
        methods:{
            init(){
                this.initCharts();
                //监测告警，提示信息
                this.$alarmMonitor(this);
            },
            initCharts(){
                var that = this;
                //主变负荷线条图
                $.ajax({
                    url: '/static/json/jkdw.json', //json文件位置
                    type: "GET", //请求方式为get
                    dataType: "json", //返回数据格式为json
                    success: function(data) {
                        var colors = ['#fb4063', '#39adff','#ffff00','#00ff00'];
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
                                data: ['1#主变油面温度', '2#主变油面温度','1#主变烧组温度', '2#主变烧组温度']
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
                                data: ["周一","周二","周三","周四","周五","周六","周日"]
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
                                    name: '1#主变油面温度',
                                    type: 'line',
                                    smooth: true,
                                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6]
                                },
                                {
                                    name: '2#主变油面温度',
                                    type: 'line',
                                    smooth: true,
                                    data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6]
                                },
                                {
                                    name: '1#主变烧组温度',
                                    type: 'line',
                                    smooth: true,
                                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 6.0, 2.3]
                                },
                                {
                                    name: '2#主变烧组温度',
                                    type: 'line',
                                    smooth: true,
                                    data: [ 48.3, 69.2, 231.6, 46.6, 55.4,3.9, 5.9]
                                }
                            ]
                        };
                        that.$chart.draw(".ybwd",option);
                    }
                })
            }
        },
        mounted(){

            this.init();
        }
    }
</script>

<style scoped lang="scss">
    .ybwd{
        padding: 20px;
    }
    .sel{
        display: flex;
        align-items: center;
        >div{
            max-width: 300px;
            margin-right: 100px;
        }
        justify-content: flex-end;
    }
</style>
<style lang="scss">
    @import "../../css/commom";
    .byq{
        @extend .reset-sel;
    }
</style>