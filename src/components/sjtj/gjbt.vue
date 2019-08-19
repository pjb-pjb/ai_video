<template>
    <div class="byq my-height">
        <el-row class="my-height">

            <el-row class="ybwd" style="height: 100%">

            </el-row>
        </el-row>
    </div>
</template>

<script>

  import {
    getGJBingTu,
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
        $ajax(getGJBingTu,(res)=>{
          // 获取数据
          var res = res.result;

          var typeData = [];

          var showData = [];

          res.forEach(item=>{
            typeData.push(item.alarmType);
            showData.push({
              name:item.alarmType,
              value:item.alarmNum
            });
          });

          var option = {
            title : {
              text: '轮巡记录饼图',
              // subtext: '纯属虚构',
              x:'center',
              textStyle: {
                color: "#fff"
              },
            },
            tooltip : {
              textStyle: {
                color: "#fff"
              },
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              textStyle: {
                color: "#fff"
              },
              orient: 'vertical',
              left: 'left',
              data: typeData
            },
            series : [
              {
                name: '巡检次数',
                type: 'pie',
                radius : '65%',
                center: ['50%', '50%'],
                data:
                showData
                ,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
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
        /*display: flex;*/
        /*align-items: center;*/
        /*>div{*/
        /*max-width: 300px;*/
        /*margin-right: 100px;*/
        /*}*/
        /*justify-content: flex-end;*/
        p{
            color:#fff;
            text-align: center;
            font-weight: bold;
            font-size:22px;
        }
    }
</style>
<style lang="scss">
    @import "../../css/commom";
    .byq{
        @extend .reset-sel;
    }
</style>