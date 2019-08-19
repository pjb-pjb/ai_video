<template>
    <div class="byq my-height">
        <el-row class="my-height">
            <!--<el-row class="sel" style="height: 10%">-->
                <!--<el-select v1-model="value" placeholder="请选择">-->
                    <!--<el-option-->
                            <!--v-for="item in options"-->
                            <!--:key="item.value"-->
                            <!--:label="item.label"-->
                            <!--:value="item.value">-->
                    <!--</el-option>-->
                <!--</el-select>-->
                <!--<p>轮巡记录柱状图</p>-->
            <!--</el-row>-->
            <el-row class="ybwd" style="height: 100%">

            </el-row>
        </el-row>
    </div>
</template>

<script>

  import {
    getLXZhuZhuanTu,
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
        $ajax(getLXZhuZhuanTu,(res)=>{

          // 获取数据
          var res = res.result;

          // 获取时间
          var TimeData = [];
          // 获取数据类型
          var typeData = [];
          // 获取显示数据
          var showData = [];


          res[0].roundInfoList.forEach(item=>{
            typeData.push(item.roundInfoType);

            showData.push({
              name:item.roundInfoType,
              type:"bar",
              barWidth:50,
              data:[]
            });
          });

          res.forEach(item=>{
            TimeData.unshift(item.roundInfoTime);
            item.roundInfoList.forEach(num=>{
              showData.forEach(show=>{

                if(show.name == num.roundInfoType){

                  show.data.unshift(num.roundInfoNum);
                }
              });
            });

          });

          console.log(showData);
          console.log(typeData);

          showData.forEach(item=>{
            if(item.name == 'robot'){
                item.name = "室外机器人";
            }else if(item.name == 'indoorrobot'){
                item.name = "室内机器人";

            }else{
              item.name = "站端摄像头";

            }
          });

          typeData.forEach((item,key)=>{
            if(item == 'robot'){
              typeData[key] = "室外机器人";
            }else if(item == 'indoorrobot'){
              typeData[key]= "室内机器人";

            }else{
              typeData[key] = "站端摄像头";

            }
          });
          console.log(showData);
          console.log(typeData);


          var option = {
            // title : {
            //   text: '轮巡记录柱状图',
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
              data:typeData,
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
    }
</style>
<style lang="scss">
    @import "../../css/commom";
    .byq{
        @extend .reset-sel;
    }
</style>