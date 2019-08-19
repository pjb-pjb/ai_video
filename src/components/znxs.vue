<template>
    <div class="znxs">

        <ul class="video-box">
            <li>
                <videoBox url="video-bg.png">
                    <mVideo h5id="a11" :tokens="sxtToken[0]"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox url="video-bg.png">
                    <mVideo h5id="a22" :tokens="sxtToken[1]"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox url="video-bg.png">
                    <mVideo h5id="a33" :tokens="sxtToken[2]"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox url="video-bg.png">
                    <mVideo h5id="a1" :tokens="sxtToken[3]"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox url="video-bg.png">
                    <mVideo h5id="a2" :tokens="sxtToken[4]"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox url="video-bg.png">
                    <mVideo h5id="a3" :tokens="sxtToken[5]"></mVideo>
                </videoBox>
            </li>
            <li>
                <template v-if="jqrToken[2]">
                    <!--显示室内机器人可见光-->
                    <videoBox url="video-bg.png">
                        <mVideo h5id="a4" :tokens="jqrToken[2]"></mVideo>
                    </videoBox>
                </template>
                <template v-else>
                    <!--显示室内机器人可见光-->
                    <videoBox url="video-bg.png">
                        <mVideo h5id="a4" :tokens="sxtToken[6]"></mVideo>
                    </videoBox>
                </template>
            </li>
            <li>
                <template v-if="jqrToken[1]">

                    <!--显示室内机器人可见光-->
                    <videoBox url="video-bg.png">
                        <mVideo h5id="a5" :tokens="jqrToken[1]"></mVideo>
                    </videoBox>
                </template>
                <template v-else>
                    <!--显示室内机器人可见光-->
                    <videoBox url="video-bg.png">
                        <mVideo h5id="a5" :tokens="sxtToken[7]"></mVideo>
                    </videoBox>
                </template>
            </li>
            <li>

                <template v-if="jqrToken[0]">
                    <!--显示室内机器人可见光-->
                    <videoBox url="video-bg.png">
                        <mVideo h5id="a6" :tokens="jqrToken[0]"></mVideo>
                    </videoBox>
                </template>
                <template v-else>
                    <!--显示室内机器人可见光-->
                    <videoBox url="video-bg.png">
                        <mVideo h5id="a6" :tokens="sxtToken[8]"></mVideo>
                    </videoBox>
                </template>

            </li>
        </ul>
        <div class="right">
            <div class="card-top">

                <el-cascader ref="cascader"  :clearable="true" placeholder="请选择巡检的策略" v-model="value"  :options="options" @change="changeCeLue"></el-cascader>
                <el-button class="quxiaobtn" size="mini" type="primary" v-if="taskId" @click="quxiaoBtnFunc">取消任务</el-button>
                <el-row style="height:calc(100% - 40px)">
                    <el-col :span="12"  class="robotBox">
                        <div class="gradient"></div>
                        <div class="h2">
                            <el-row>
                                <el-col :span="4">状态:</el-col>
                                <el-col :span="20">{{robotData.workstatus}}</el-col>
                            </el-row>
                        </div>
                        <div class="h2">
                            <el-row>
                                <el-col :span="4">置信度:</el-col>
                                <el-col :span="20">{{robotData.currconfidence}}</el-col>
                            </el-row>
                        </div>
                        <div class="h2">
                            <el-row>
                                <el-col :span="4">进度:</el-col>
                                <el-col :span="20"><el-progress :percentage="robotData.progress"></el-progress></el-col>
                            </el-row>
                        </div>
                        <div class="h2">
                            <el-row>
                                <el-col :span="4">电量:</el-col>
                                <el-col :span="20"><el-progress :percentage="robotData.voltage"></el-progress></el-col>
                            </el-row>
                        </div>

                    </el-col>
                    <el-col :span="12" class="inrobotBox">
                        <div class="gradient"></div>
                        <div class="h2">
                            <el-row>
                                <el-col :span="4">状态:</el-col>
                                <el-col :span="20">{{inDoorRobotData.workstatus}}</el-col>
                            </el-row>
                        </div>

                        <div class="h2">
                            <el-row>
                                <el-col :span="4">进度:</el-col>
                                <el-col :span="20"><el-progress :percentage="inDoorRobotData.progress"></el-progress></el-col>
                            </el-row>
                        </div>
                        <div class="h2">
                            <el-row>
                                <el-col :span="4">电量:</el-col>
                                <el-col :span="20"><el-progress :percentage="inDoorRobotData.voltage"></el-progress></el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>

            </div>
            <div class="card-bottom">
                <el-tabs v-model="activeName" type="card" >
                    <el-tab-pane label="实时信息" name="first">
                        <div class="conMain" >

                        <div class="con" >
                            <el-table
                                    :data="tableData"
                                    border
                                    style="width: 100%;">

                                <el-table-column type="index">
                                </el-table-column>
                                <el-table-column
                                        align="center"
                                        prop="displayname"
                                        label="巡检点位"
                                >
                                </el-table-column>
                                <el-table-column
                                        width="100"
                                        align="center"
                                        prop="worktype1"
                                        label="巡检类型"
                                >
                                </el-table-column>
                                <el-table-column
                                        width="100"
                                        align="center"
                                        prop="resulttime"
                                        label="识别时间"
                                >
                                </el-table-column>
                                <el-table-column
                                        align="center"
                                        label="识别图片"
                                        width="120"
                                >
                                    <template slot-scope="scope">
                                        <el-image
                                                title="点击查看图片"
                                                @click="seeImg($store.state.ROOT+scope.row.colorfulpath)"
                                                style="width: 100px; height: auto;cursor: pointer;"
                                                :src="$store.state.ROOT+scope.row.colorfulpath"
                                                fit="contain"></el-image>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        width="60"
                                        align="center"
                                        prop="info"
                                        label="识别类型"
                                >
                                </el-table-column>
                                <el-table-column
                                        width="60"
                                        align="center"
                                        prop="result"
                                        label="识别结果"
                                >
                                </el-table-column>
                                <!--<el-table-column-->
                                <!--align="center"-->
                                <!--prop="warningleveltxt"-->
                                <!--label="告警类型"-->
                                <!--&gt;-->
                                <!--</el-table-column>-->

                            </el-table>
                        </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="设备告警信息" name="two">
                        <div class="conMain" >

                        <div class="con" >
                            <el-table
                                    :data="tableData1"
                                    border
                                    style="width: 100%;">

                                <el-table-column type="index">
                                </el-table-column>
                                <el-table-column
                                        align="center"
                                        prop="alarmtypename"
                                        width="120px"
                                        label="告警类型"

                                >
                                </el-table-column>
                                <el-table-column
                                        width="100"
                                        align="center"
                                        prop="alarmlevelname"
                                        label="告警级别"
                                >
                                </el-table-column>
                                <el-table-column
                                        width="150"
                                        align="center"
                                        prop="alarmtime"
                                        label="告警时间"
                                >
                                </el-table-column>

                                <el-table-column
                                        align="center"
                                        prop="alarmdesc"
                                        label="告警详情"
                                >
                                </el-table-column>


                            </el-table>
                        </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="系统告警信息" name="three">
                        <div class="conMain" >
                        <div class="con" >
                            <el-table
                                    :data="tableData2"
                                    border
                                    style="width: 100%;">

                                <el-table-column type="index">
                                </el-table-column>
                                <el-table-column
                                        align="center"
                                        prop="alarmtypename"
                                        label="告警类型"
                                        width="120px"
                                >
                                </el-table-column>
                                <el-table-column
                                        width="100"
                                        align="center"
                                        prop="alarmlevelname"
                                        label="告警级别"
                                >
                                </el-table-column>
                                <el-table-column
                                        width="150"
                                        align="center"
                                        prop="alarmtime"
                                        label="告警时间"
                                >
                                </el-table-column>

                                <el-table-column
                                        align="center"
                                        prop="alarmdesc"
                                        label="告警详情"
                                >
                                </el-table-column>




                            </el-table>
                        </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>



            </div>
        </div>

        <el-dialog class="znxsDialog" top="50px" width="90%" title="" :visible.sync="isShowNowVideo">
            <el-row style="height: 70vh;">
                <el-row style="height: calc(100% - 50px);">
                    <div class="toptitle"><span>任务详情</span></div>
                    <div class="top-line"></div>
                    <el-col :span="24" class="my-height"  style="height:245px;">
                        <!--<el-input  placeholder="输入关键字进行过滤" v-model="filterText">-->
                        <!--</el-input>-->
                        <el-row >

                            <el-col :span="2" class="itemHeight1" >设备区域:</el-col>
                            <el-col :span="22">
                                <el-row>
                                    <el-col class="itemHeight" :span="3" v-for="item in DevAreaData">
                                        <el-checkbox v-model="item.checked" @change="clickCheckBox(0,item)">
                                            {{item.dictname}}
                                        </el-checkbox>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <div class="top-line2"></div>
                        <el-row>
                            <el-col class="itemHeight1"  :span="2">设备类型:</el-col>
                            <el-col :span="22">
                                <el-row>
                                    <el-col class="itemHeight" :span="3" v-for="item in DevTypeData">
                                        <el-checkbox v-model="item.checked" @change="clickCheckBox(1,item)">
                                            {{item.dictname}}
                                        </el-checkbox>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <div class="top-line2"></div>
                    </el-col>

                    <el-col :span="24" class="treeArea" >

                        <el-row style="overflow: auto !important;">
                            <el-col :span="10" style="height:100%;min-height:100px;position: relative;overflow: auto !important;">
                                <el-tree
                                        :data="data1"
                                        show-checkbox
                                        :props="{label:'name'}"
                                        @check="check"
                                        ref="tree"
                                        node-key="id"
                                ></el-tree>

                                <div style="" class="znxsBtn znxsBtnSelect" @click="selectDev(1)">查询设备</div>

                            </el-col>
                            <el-col :span="14" class="my-height" style="overflow: auto !important;">
                                <el-tag
                                        v-for="(tag,index) in tags"
                                        :key="index"
                                        closable
                                        @close="closeTag(index)"
                                        :type="tag.type">
                                    {{tag.name}}
                                </el-tag>
                            </el-col>
                        </el-row>

                    </el-col>

                </el-row>

            </el-row>
            <div style="display: flex;height: 50px;align-items: center;justify-content: flex-end"
                 class="dialog-footer">
                <div class="znxsBtn znxsBtnBack" @click="isShowNowVideo = false">取 消</div>
                <div class="znxsBtn znxsBtnReset" @click="clear">清 空</div>
                <template v-if="value[2]">
                    <div class="znxsBtn znxsBtnPlay" @click="implement">执 行</div>
                </template>
                <template v-else>
                    <div class="znxsBtn znxsBtnPlay" @click="zdyImplement">执 行</div>

                </template>
            </div>
        </el-dialog>


        <div class="img-box" v-show="isImage"
             style="height: 95vh;width:90vw;position: fixed;left: 0;top:0;z-index: 99999999999;display: flex;align-items: center;justify-content: center;right: 0;bottom: 0;margin: auto;">
            <el-image style="height: 100%;width: 100%;" :src="imgPath" fit="contain"></el-image>
            <div class="img-close el-icon el-icon-close" @click="seeImg()"></div>
        </div>

    </div>
</template>
<script>
  import {
    $ajax,
    GetPagedsDto,
    getLxList,
    ptz,
    GetPointPagedsDto,
    CreateForFrRoundInfoAndGetId,
    UpdateSubDto,
    getPagedsDto,    //得到轮询列表
    getDevAreaData, // 获取设备区域数据
    getDevTypeData, // 获取设备类型数据
  } from "@/http/api/mapi.js";


  export default {
    name: 'Index',
    data() {
      return {
        imgPath:"",
        isImage:false,
        activeName:"first",
        show: false,
        value: "",
        form: {},
        //预置位树
        data1: [],
        isShowNowVideo: false,
        options: [],
        tableData: [],
        tableData1: [],
        tableData2: [],
        sxtToken: ["80a9--24","b746--1","b746--19","b746--40","b746--37","b746--25"],    //摄像头token
        jqrToken: ["df41--1", "6754", "acf9"],    //机器人token
        lxList: [],
        loading: "",
        tags: [],   //
        lxBaoInfo: {},    //轮询报告信息
        bgId: 0,        //报告主表id
        total: 0,         //轮询报告总条数
        bgXqInfo: {},    //报告详情
        isImage: false,   //是否显示图片
        imgPath: "",
        // 获取设备区域数据
        DevAreaData: [],
        // 获取设备类型数据
        DevTypeData: [],
        // 选中的树
        // checkedTree:[],
        PointData: [],
        // 室内机器人状态
        inDoorRobotData:{
          voltage:100,
          workstatus:"当前无任务",
          progress:0,

        },
        robotData:{
          currconfidence:1,
          voltage:100,
          workstatus:"当前无任务",
          progress:0
        },
        videoNum:0,
        taskId:0

      }
    },
    mounted() {
      //监测告警，提示信息
      this.$alarmMonitor(this);
      //初始化页面
      this.init();

      if (sessionStorage.robotData){
        this.tableData = JSON.parse(sessionStorage.robotData);
      }
      if (sessionStorage.robotData1){
        this.tableData1 = JSON.parse(sessionStorage.robotData1);
      }
      if (sessionStorage.robotData2){
        this.tableData2 = JSON.parse(sessionStorage.robotData2);
      }

      //监听告警信息
      this.connection.on("getAlarmMessage", (data) => {
        console.log(data);
        data = JSON.parse(data.toLowerCase());

        // 获取任务的实时状态
        if (data.cimid == "2160"){
          // 判断类型
          if(data.msg.worktype =='indoorrobot'){
            data.msg.worktype1 = "室内机器人"
          }else if(data.msg.worktype =='station'){
            data.msg.worktype1 = "站端摄像头"
          }else{
            data.msg.worktype1 = "室外机器人"
          }
          // 处理图片
          data.msg.colorfulpath = data.msg.colorfulpath.replace(/\\\\/g,'\\');

          // 判断是否有视频
          if (data.msg.strtoken){
             this.sxtToken[this.videoNum] = data.msg.strtoken;
             this.videoNum = this.videoNum+1;
             if (this.videoNum>=6){
               this.videoNum = 0;
             }
          }

          this.tableData.unshift(data.msg);

        // 获取室内机器人状态
        }else if(data.cimid == "2171"){
            // 设置机器人
          this.inDoorRobotData = {
            voltage:100,
            workstatus:data.msg.workstatus=='true'?"任务执行中":"当前无任务",
            progress:(data.msg.rates?Number(data.msg.rates):0)
          }
        // 获取室外机器人状态
        }else if(data.cimid == "2168"){
          this.robotData = {
            currconfidence:data.msg.currconfidence,
            voltage:Number(data.msg.voltage),
            workstatus:data.msg.workstatus?data.msg.workstatus:"空闲中",
            progress:(data.msg.rates?Number(data.msg.rates):0)
          }

          this.taskId = data.msg.infoid ? data.msg.infoid:0;
        // 室内机器人设备告警
        }else if(data.cimid == "2173"){
          let datas = data.msg[data.msg.length-1];
          datas.alarmtime = datas.alarmtime.split("t").join(" ");
          this.tableData1.push(datas);

        // 室内机器人系统告警
        }else if(data.cimid == "2172"){
          let datas = data.msg[data.msg.length-1];
          datas.alarmtime = datas.alarmtime.split("t").join(" ");
          this.tableData2.push(datas);

        // 室外机器人设备告警
        }else if(data.cimid == "2170"){
          let datas = data.msg[data.msg.length-1];
          datas.alarmtime = datas.alarmtime.split("t").join(" ");
          this.tableData1.push(datas);
        // 室外机器人系统告警
        }else if(data.cimid == "2169"){
          let datas = data.msg[data.msg.length-1];
          datas.alarmtime = datas.alarmtime.split("t").join(" ");
          this.tableData2.push(datas);
        }else{

        }
      });
    },
    computed: {},
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      },
      tableData(){
        sessionStorage.robotData = JSON.stringify(this.tableData.slice(0,10));
      },
      tableData1(){
        sessionStorage.robotData1 = JSON.stringify(this.tableData1.slice(0,10));
      },
      tableData2(){
        sessionStorage.robotData2 = JSON.stringify(this.tableData2.slice(0,10));
      }

    },
    destroyed(){
      sessionStorage.robotData = JSON.stringify(this.tableData.slice(0,10));
      sessionStorage.robotData1 = JSON.stringify(this.tableData1.slice(0,10));
      sessionStorage.robotData2 = JSON.stringify(this.tableData2.slice(0,10));


    },
    methods: {
      // 取消任务
      quxiaoBtnFunc(){
        if(this.taskId){
          var data = {
            "cimid": "2167",
            "msg": {
              "taskId": this.taskId
            }
          };
          this.connection.invoke("sendMessage", JSON.stringify(data));
          this.$message({
            message: '任务取消中',
            type: 'success'
          });
        }

      },
      // 点击全部按钮
      clickCheckBox(type, items) {
        if (items.id == 0) {
          switch (type) {
            case 0:
              //判断如果
              this.DevAreaData.forEach(item => {
                item.checked = items.checked;
              });

              break;
            case 1:
              this.DevTypeData.forEach(item => {
                item.checked = items.checked;
              });

              break;
          }
        } else {
          switch (type) {
            case 0:
              this.DevAreaData[0].checked = false;
              //判断如果
              if (this.countTrueTot(this.DevAreaData) == (this.DevAreaData.length - 1)) {
                this.DevAreaData[0].checked = true;
              }
              break;
            case 1:

              this.DevTypeData[0].checked = false;
              //判断如果
              if (this.countTrueTot(this.DevTypeData) == (this.DevTypeData.length - 1)) {
                this.DevTypeData[0].checked = true;
              }

              break;
          }
        }

      },
      // 统计数组中true出现的个数
      countTrueTot(data) {
        var num = 0;
        data.forEach((item, key) => {
          if (key != 0 && item.checked) {
            num++;
          }
        });
        return num;
      },

      // 统计选中的标记
      selectData(data) {
        let arr = [];
        data.forEach(item => {
          if (item.id != 0 && item.checked) {
            arr.push(item);
          }
        });
        return arr;
      },
      // 查询设备区域
      selectDev(num = 0) {
        if (num == 0) {
          this.check();
          return "";
        }
        this.tags = [];
        if (this.$refs.tree) {
          this.$refs.tree.setCheckedNodes(this.tags);
        }
        // this.checkedTree = [];
        // 统计选中的区域
        var DevAreaChange = this.selectData(this.DevAreaData);
        // 统计选中的表计
        var DevTypeChange = this.selectData(this.DevTypeData);

        let tmpArr = [];
        this.PointData.forEach(item => {
          DevTypeChange.forEach(devType => {
            if (devType.dictcode == item.devType) {
              tmpArr.push(item);
            }
          })
        });
        tmpArr.forEach(item => {
          DevAreaChange.forEach(devArea => {
            if (devArea.dictcode == item.devArea) {
              this.tags.push(item);

            }
          });
        });

        if (this.$refs.tree) {
          this.$refs.tree.setCheckedNodes(this.tags);
        }

        this.selectDev();
      },
      changeCeLue() {
        // 显示策略框
        this.isShowNowVideo = true;

        // 默认选中树
        if (this.value[2]) {
          this.lxList.some((val) => {
            if (val.id == this.value[2]) {
              this.form = val;
              this.tags = val.createBaseRoundConfig;
              return true;
            }
          });

          this.tags.forEach(item => {
            // 判断站端
            if (item.workType == "station") {
              item.id = item.presetId;
              item.name = item.presetName;
            }
            // 判断室外

            if (item.workType == "robot") {
              item.id = item.presetId;
              item.devPointId = item.devPointId;
              item.name = item.devPointName;
            }

            // 判断室内
            if (item.workType == "Indoorrobot") {
              item.id = item.presetId;
              item.checkPointId = item.devPointId;
              item.name = item.presetName;
            }
          });
          setTimeout(()=>{
            if (this.$refs.tree) {
              this.$refs.tree.setCheckedNodes(this.tags);
            }
          },1000)


        }
      },

      clickTree(val) {
        // 判断是否是站端
        if (val.workType == 'station' && val.level == '1000') {

          let TokenArr = this.sxtToken;

          this.sxtToken = [];
          TokenArr.forEach(item => {
            if (val.strToken != item) {
              this.sxtToken.push(item);
            }
          });
          this.sxtToken.unshift(val.strToken)
          this.sxtToken = Object.assign([], this.sxtToken);

        }
      },

      // 获取设备区域数据
      getPointDataFunc() {
        $ajax(GetPointPagedsDto, (res) => {
          this.PointData = res.result.items;
        });
      },
      // 获取设备区域数据
      getDevAreaDataFunc() {
        $ajax(getDevAreaData, (res) => {
          res.result.items.forEach(item => {
            item.checked = false;
          })
          this.DevAreaData = res.result.items;
          this.DevAreaData.unshift({id: 0, dictname: "全部"})

        });
      },
      // 获取设备类型数据
      getDevTypeDataFunc() {
        $ajax(getDevTypeData, (res) => {
          res.result.items.forEach(item => {
            item.checked = false;
          })
          this.DevTypeData = res.result.items;
          this.DevTypeData.unshift({id: 0, dictname: "全部"})
        });
      },
      //查看图片
      seeImg(imgPath) {
        if (this.isImage) {
          this.imgPath = "";
        } else {
          this.imgPath = imgPath;
        }
        this.isImage = !this.isImage;
      },

      //树复选框被点击的触发
      check() {
        this.tags = (this.$refs.tree.getCheckedNodes()).filter((val) => {
          return val.level == 1000;
        });
      },
      //删除预置位
      closeTag(index) {
        this.tags.splice(index, 1);
        this.$refs.tree.setCheckedNodes(this.tags);
      },
      //clear
      clear() {
        this.value = [];
        this.tags = [];
        if (this.$refs.tree) {
          this.$refs.tree.setCheckedNodes(this.tags);
        }
      },
      //筛选树
      filterNode(value, data) {
        if (!value) return true;
        return data.name.indexOf(value) !== -1;
      },
      init() {
        //得到已有轮询配置
        this.getLxList();
        //得到预置位树
        this.GetPagedsDto();
        //得到轮询列表
        // this.getPagedsDto(0);
        // 获取设备区域数据
        this.getDevAreaDataFunc();
        // 获取设备类型数据
        this.getDevTypeDataFunc()
        // 获取所有点位
        this.getPointDataFunc();

      },


      //得到预置位树
      GetPagedsDto() {
        // 获取sessionStroage

        let xunjianTree = sessionStorage.xunjianTree;

        if (xunjianTree) {
          this.data1 = JSON.parse(xunjianTree);
        } else {

          $ajax(GetPagedsDto, (data) => {

            this.data1 = data.result.items;
            sessionStorage.xunjianTree = JSON.stringify(this.data1)

          });
        }
      },
      getLxList() {
        $ajax(getLxList, (res) => {
          var data = res.result.items;

          this.lxList = data;
          data.forEach((val) => {
            var flag = this.options.some((ele) => {
              if (val.roundTypeParentName == ele.value) {
                return true;
              }
            });
            if (!flag) {
              this.options.push({
                value: val.roundTypeParentName,
                label: val.roundTypeParentName
              });
            }
          });
          data.forEach((val) => {
            this.options.forEach((ele) => {
              if (val.roundTypeParentName == ele.value) {
                if (ele.children) {
                  var flag = ele.children.some((a) => {
                    if (a.value == val.roundTypeName) {
                      return true;
                    }
                  });
                  if (!flag) {
                    ele.children.push({
                      value: val.roundTypeName,
                      label: val.roundTypeName
                    });
                  }
                } else {
                  ele.children = [{
                    value: val.roundTypeName,
                    label: val.roundTypeName
                  }];
                }
              }
            });
          });
          data.forEach((val) => {
            this.options.forEach((ele) => {
              ele.children.forEach((a) => {
                if (val.roundTypeParentName == ele.value && val.roundTypeName == a.value) {
                  if (a.children) {
                    var flag = a.children.some((a) => {
                      if (a.value == val.roundName) {
                        return true;
                      }
                    });
                    if (!flag) {
                      a.children.push({
                        value: val.id,
                        label: val.roundName,
                      });
                    }
                  } else {
                    a.children = [{
                      value: val.id,
                      label: val.roundName,
                    }];
                  }
                }
              });
            });
          });
        });


        this.options.unshift({
          label:"自定义巡检",
          value:"自定义巡检",
          children:[
            {
              label:"自定义巡检",
              value:"自定义巡检",
              children:[{
                label:"自定义巡检",
                value:0,
              }]
            }
          ]
        });

      },
      implement() {

        var data = [];
        if (this.value[2]) {
          this.lxList.some((val) => {
            if (val.id == this.value[2]) {
              data = val;
              return true;
            }
          });
          this.lxBaoInfo = {
            taskName: data.roundName,
            configId: data.id,
            ssdz: sessionStorage.ssdzId,
            ssdzName: sessionStorage.name,
            roundTypeCode: data.roundTypeCode,
            roundTypeName: data.roundTypeName,
            createForFrRoundInfoSubDto: []
          };

          this.isShowNowVideo = false;

          this.startLx(this.tags);
        }
      },
      zdyImplement() {
        var date = new Date();
        this.lxBaoInfo = {
          taskName: "自定义轮巡" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds(),
          ssdz: sessionStorage.ssdzId,
          ssdzName: sessionStorage.name,
          roundTypeCode: "自定义巡检05",
          roundTypeName: '自定义巡检',
          createForFrRoundInfoSubDto: []
        };

        // 判断是否选择点位

        if (!this.tags.length){
          alert("请选择点位");
          // this.$message({
          //   message: '请选择点位',1
          //   type: 'error'
          // });

          return false;
        }

        this.isShowNowVideo = false;
        this.startLx(this.tags);

      },
      //开始轮询
      startLx(data) {

        //判断是否可以下达任务
        // if (this.inDoorRobotData.workstatus=="当前无任务" && this.robotData.workstatus=="当前无任务"){
        if (this.inDoorRobotData.workstatus=="当前无任务" && this.robotData.workstatus!="任务执行中"){

        }else{
          this.$message({
            message: '任务执行中请稍后',
            type: 'error'
          });

          return false;
        }

        // 判断是否选择点位

        if (!data.length){
          this.$message({
            message: '请选择点位',
            type: 'error'
          });

          return false;
        }

        // 清空显示的摄像头
        this.sxtToken = [];
        this.sxtToken = Object.assign([], this.sxtToken);


        var inDoorRobotData1 = [];
        var robotData1 = [];
        var stationDataList1 = [];
        data.forEach((val) => {
          // 判断任务的类型进行不同的处理

          if (val.workType == "Indoorrobot") {

            inDoorRobotData1.push(val.checkPointId);


            this.lxBaoInfo.createForFrRoundInfoSubDto.push({
              "checkPointId": val.checkPointId,
              "name": val.presetName || val.name,
              "workType": val.workType
            });

          } else if (val.workType == "robot") {

            this.lxBaoInfo.createForFrRoundInfoSubDto.push({
              "devPointId": val.devPointId,
              "name": val.presetName || val.name,
              "workType": val.workType
            });

            robotData1.push(val.devPointId);

          } else {
            // 获取站点ID

            this.lxBaoInfo.createForFrRoundInfoSubDto.push({
              "presetId": val.presetId || val.id,
              "name": val.presetName || val.name,
              "workType": val.workType
            });



            stationDataList1.push(val.presetId || val.id);
          }


        });


        CreateForFrRoundInfoAndGetId.data = this.lxBaoInfo;
        $ajax(CreateForFrRoundInfoAndGetId, (res) => {
          res = res.result;
          // 获取任务的主ID
          this.bgId = res.id;
          var data = {
            "cimid": "2161",
            "msg": {
              "InfoId": res.id,
              "TaskName": res.taskName,
              "TaskType": 1,
              "EndActionId": 1,
              "LoopType": 1,
              "ScheduleParam": "",
              "ScheduleTime": "",
              "state": 1,
              "BreakCurTask": "0",
              "StationPointLst": stationDataList1.join(","),
              "E100PointLst": robotData1.join(","),
              "E200PointLst": inDoorRobotData1.join(","),
            }
          };



          this.connection.invoke("sendMessage", JSON.stringify(data));
          console.log(data);
          console.log(11111111111111111111111);
          this.$message({
            message: '执行任务成功',
            type: 'success'
          });
          this.value = [];
          this.clear();

          return false;

        });
      },


      /*
      *  站点摄像头相关任务
      *  setPtz 设置预置位信息
      *
      *
      * */
      //设置预置位
      setPtz(val) {

        ptz.params.token = val.strToken;
        ptz.params.preset = val.presetCode;

        this.sxtToken.unshift(val.strToken);
        this.sxtToken = Object.assign([], this.sxtToken);

        $ajax(ptz, (res) => {
          if (res.bStatus) {

          }
        });
      },


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .znxs {
        .img-box{
            position: relative;
            .img-close{
                position: absolute;
                right:-10px;
                top:10px;
                text-align:center;
                line-height: 40px;
                width:40px;
                height:40px;
                border-radius: 20px;
                background-color: #ccc;
                color:#fff;
                &:hover{
                    color:#409eff;
                }
            }

        }
        height: 98%;
        display: flex;
        justify-content: space-between;
        .video-box {
            height: 100%;
            width: calc(60% - 10px);
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            flex-wrap: wrap;
            box-sizing: border-box;
            padding: 20px;
            padding-top: 43px;
            background: url(../assets/home/images/xwfx.png) no-repeat;
            background-size: 100% 100%;
            li {
                box-sizing: border-box;

                /*padding: 5px;*/
                /*background: url(../assets/home/images/videoDi.png) no-repeat;*/
                /*background-size: 100% 100%;*/
                width: calc(33.333%);
                height: calc(33.3333%);
            }
        }
        .right {
            width: 727px;
            height: 935px;
            height: 100%;
            padding:60px 2px 20px 4px;
            box-sizing: border-box;
            background: url(../assets/home/images/zxln-right-box.png) center center no-repeat;
            background-size: 100% 100%;
            .card-top{
                width:100%;
                height:240px;
                position: relative;
                .quxiaobtn{
                    position: absolute;
                    right:5px;
                    top:5px;
                }
                .robotBox{
                    height:100%;
                    background:url(../assets/img/robot.jpg) center center no-repeat ;
                    background-size: 100% 100%;
                    position: relative;
                    .gradient{
                        width:100%;
                        height:50%;
                        position: absolute;
                        left:0px;
                        top:0px;
                        background:linear-gradient(to bottom, #000 60%,#ffffff 100%);
                        opacity: 0.2;
                    }

                    .h2{
                        height:30px;
                        line-height: 30px;
                        font-weight: bold;
                        font-size:14px;
                        color:#fff;
                        .el-row{
                            display:flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
                .inrobotBox{
                    height:100%;
                    background:url(../assets/img/inrobot.jpg) center center no-repeat;

                    background-size: 100% 100%;
                    position: relative;
                    .gradient{
                        width:100%;
                        height:50%;
                        position: absolute;
                        left:0px;
                        top:0px;
                        background:linear-gradient(to bottom, #000 60%,#ffffff 100%);
                        opacity: 0.2;
                    }
                    .h2{
                        height:30px;
                        line-height: 30px;
                        font-weight: bold;
                        font-size:14px;
                        color:#fff;
                        .el-row{
                            display:flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
            }
            .card-bottom{
                width:100%;
                height: calc(100% - 245px);
                margin-top: 16px;
                    /*box-sizing: border-box;*/
                    /*font-stretch: normal;*/
                    /*letter-spacing: 1px;*/
                    /*height:56px;*/
                    /*line-height: 56px;*/
                    /*text-align: center;*/
                    /*font-family: MicrosoftYaHei-Bold;*/
                    /*font-size: 24px;*/
                    /*font-weight: normal;*/
                    /*font-stretch: normal;*/
                    /*letter-spacing: 1px;*/
                    /*color: #ffffff;*/
                /*}*/
                .conMain{
                    display: flex;
                    width:100%;
                    height:540px;
                }
                .con {
                    flex-grow: 1;
                    box-sizing: border-box;
                    width: 100%;
                    height:100%;
                    overflow: auto;

                    &::-webkit-scrollbar { /*滚动条整体样式*/
                        width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
                        height: 1px;
                    }
                    &::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
                        border-radius: 10px;
                        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                        background: #7ecdf4;
                    }
                    &::-webkit-scrollbar-track { /*滚动条里面轨道*/
                        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                        border-radius: 10px;
                        background: rgba(1, 44, 123, 0.8);
                    }
                }

            }
        }
        .znxsDialog{
            .toptitle {
                width:202px;
                box-sizing: border-box;
                font-stretch: normal;
                letter-spacing: 1px;
                height:56px;
                line-height: 56px;
                text-align: center;
                font-family: MicrosoftYaHei;
                font-size: 24px;
                font-weight: bold;
                font-stretch: normal;
                letter-spacing: 1px;
                color: #ffffff;
            }
            .top-line{
                width:252px;
                height:2px;
                background: url(../assets/home/images/dialogline.png) no-repeat center center;
                background-size:100% 100%;
                margin-top:5px;
                margin-bottom:10px;
            }
            .top-line2{
                width:100%;
                height:12px;
                background: url(../assets/home/images/card-chang-line.png) no-repeat center center;
                background-size:100% 100%;
                margin-top:5px;
                margin-bottom:0px;
            }
            .treeArea{
                height: calc(100% - 275px);
                overflow: auto !important;
                box-sizing: border-box;
                width: 100%;
                overflow: auto;

                &::-webkit-scrollbar { /*滚动条整体样式*/
                    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
                    height: 1px;
                }
                &::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    background: #7ecdf4;
                }
                &::-webkit-scrollbar-track { /*滚动条里面轨道*/
                    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    background: rgba(1, 44, 123, 0.8);
                }
            }
            .znxsBtn{
                width:130px;
                height:40px;
                display:inline-block;
                text-align: center;
                line-height: 40px;
                color:#fff;
                margin:0 5px;
            }
            .znxsBtnSelect{
                background: url(../assets/home/images/select.png) no-repeat center center;
                background-size:100% 100%;
                width:110px;
                height:30px;
                line-height: 30px;
                position: absolute;
                right:0px;
                top:3px;
            }
            .znxsBtnPlay{
                background: url(../assets/home/images/play.png) no-repeat center center;
                background-size:100% 100%;
            }
            .znxsBtnReset{
                background: url(../assets/home/images/reset2.png) no-repeat center center;
                background-size:100% 100%;
            }
            .znxsBtnBack{
                background: url(../assets/home/images/back2.png) no-repeat center center;
                background-size:100% 100%;
            }
        }
        .itemHeight {
            height: 30px;
            color: #e4fdff;
            font-size: 16px;
            line-height: 30px;
        }
        .itemHeight1 {
            text-align: center;
            height: 30px;
            font-size: 16px;
            font-weight: bold;
            color: #00ccff;
            line-height: 30px;
        }
    }
</style>
<style lang="scss">
    @import "../css/commom";
    .el-cascader .el-input .el-input__inner{
        background-color: #012c7b;
        border: solid 1px #7ecdf4;
        font-size:20px;
        color: #ffffff;
        &::-webkit-input-placeholder { /* WebKit browsers */
            color:    #fff;
        }
        &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color:    #fff;
        }
        &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color:    #fff;
        }
        &:-ms-input-placeholder { /* Internet Explorer 10+ */
            color:    #fff;
        }
    }
    .el-cascader:not(.is-disabled):hover .el-input__inner{
        background-color: #012c7b;
        border: solid 1px #7ecdf4;
        font-size:20px;
        color: #ffffff;
        &::-webkit-input-placeholder { /* WebKit browsers */
            color:    #fff;
        }
        &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color:    #fff;
        }
        &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color:    #fff;
        }
        &:-ms-input-placeholder { /* Internet Explorer 10+ */
            color:    #fff;
        }
    }
    .el-cascader {
        width: 100%;
    }
    .el-scrollbar__wrap{
        overflow: hidden !important;
        height:100% !important;
        min-height:200px;
        margin:0px;
        width:auto !important;
    }
    .znxs {
        .right {
            @extend .reset-table;
            @extend .reset-page;



        }
        @extend .el-checkbox2;
        @extend .reset-tree;
        position: relative;
        .el-dialog__wrapper{
            background-color: rgba(0,0,0,0.8);
        }
        .el-tag{
            background-color: #01558e;
            margin:2px 2px;
            display: inline-block;
            height: 32px;
            padding: 0 20px;
            line-height: 30px;
            font-size: 12px;
            color: #ffffff;
            border-width: 1px;
            border-style: solid;
            border-radius: 10px;
            border:0px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            white-space: nowrap;
            .el-icon-close{
                border-radius: 50%;
                text-align: center;
                position: relative;
                cursor: pointer;
                font-size: 12px;
                height: 16px;
                width: 16px;
                line-height: 16px;
                vertical-align: middle;
                top: -1px;
                right: -5px;
                color:#fff;

            }
        }
        .el-progress__text{
            color:#fff;
        }

        .el-dialog{
            background: url(../assets/home/images/lxlsDialog.png) no-repeat;
            background-size: 100% 100%;
            padding:40px 30px  30px 70px;
            box-sizing: border-box;
            height:970px;

        }
        .el-dialog__headerbtn{
            width:40px;
            height:40px;
            background-color: #808585;
            border-radius: 50%;
            color:#fff;
            right:-40px;
            font-size: 20px;
            top:-10px;
            .el-dialog__close{
                font-weight:bold;
                color:#fff;
            }
        }
        .el-dialog__body{
            padding:0px;
        }
        .el-tabs--card{

            >.el-tabs__header{
                margin:0px;
                magrin-top:10px;
                .el-tabs__nav{
                    border: none;
                    border-radius: 0;
                    padding-top:10px;
                }
                .el-tabs__item:first-child{
                    border:1px solid #31D4FD;

                }
                .el-tabs__item.is-active{
                    border:1px solid #31D4FD;
                    color: #fff;

                    background-color: #31D4FD;
                }
                .el-tabs__item{
                    color:#fff;
                    font-size: 16px;
                    font-weight: bold;
                    border-top-right-radius: 5px;
                    border-top-left-radius: 5px;
                    border:1px solid #fff;
                    box-sizing: border-box;
                    margin-right:5px;
                }
            }
        }




    }



</style>
