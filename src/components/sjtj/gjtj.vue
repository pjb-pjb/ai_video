<template>
    <div class="byq my-height">
        <el-row class="my-height">
            <!--<el-row class="sel" style="height: 10%">-->
                <!--<p style="color:#fff;text-align:center">告警记录柱状图</p>-->
                <!--<el-select v-model="value" placeholder="请选择">-->
                    <!--<el-option-->
                            <!--v-for="item in options"-->
                            <!--:key="item.value"-->
                            <!--:label="item.label"-->
                            <!--:value="item.value">-->
                    <!--</el-option>-->
                <!--</el-select>-->
            <!--</el-row>-->
            <el-row class="ybwd" style="height: 100%">

            </el-row>
        </el-row>
    </div>
</template>

<script>

  import {
    getGJZhuZhuanTu,
    $ajax,
  } from "@/http/api/mapi.js";
  export default {
    data(){
      return {
        options: [{
          value: '1',
          label: '最近一周'
        }, {
          value: '2',
          label: '最近一月'
        }, {
          value: '3',
          label: '最近一年'
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
        $ajax(getGJZhuZhuanTu,(res)=>{
          // 获取数据
          var res = res.result;

          // 获取告警类型
          var alarmData = ["告警类型"];

          // 获取时间
          var TimeData = [];

          // 显示数据

          var showData = [];
          res[0].alamList.forEach(item=>{
            alarmData.push(item.alarmType);
            showData.push({
              name:item.alarmType,
              type:"bar",
              barWidth:50,
              stack:"告警类型",
              data:[]
            });
          });

          res.forEach(item=>{
            TimeData.unshift(item.alarmTime);
            item.alamList.forEach(num=>{
              showData.forEach(show=>{

                if(show.name == num.alarmType){

                  show.data.unshift(num.alarmNum);
                }
              });
            });

          });

          var option = {
            // title : {
            //   text: '告警统计柱状图',
            //   // subtext: '纯属虚构',
            //   x:'center',
            //   textStyle: {
            //     color: "#fff"
            //   },
            // },
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data:alarmData,
              textStyle: {
                color: "#fff"
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : TimeData,
                axisLine: {
                  lineStyle: {
                    fontSize: 12,
                    color: '#fff',
                  }
                }
              }

            ],
            yAxis : [
              {
                type : 'value',
                axisLine: {
                  lineStyle: {
                    fontSize: 12,
                    color: '#fff',
                  }
                }
              }
            ],
            series : showData
          };


          that.$chart.draw(".ybwd",option);
        });



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
        p{
            color:#fff;
            text-align: center;
            font-weight: bold;
            font-size:22px;
        }
        /*display: flex;*/
        /*align-items: center;*/
        /*>div{*/
        /*}*/
        /*justify-content: flex-end;*/
    }
</style>
<style lang="scss">
    @import "../../css/commom";
    .byq{
        @extend .reset-sel;
    }
</style>