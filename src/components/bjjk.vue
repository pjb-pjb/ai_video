<template>
    <div class="my-height spjk">
        <el-row class="my-height bjjkBox">
            <div class="card-left">
                <div class="con">
                    <el-tree
                            :data="data2"
                            :props="{label:'name'}"
                            @node-click="clickTree"
                            ref="tree"
                            node-key="id"
                            :accordion="true"
                    ></el-tree>
                </div>
                <div class="videoMenu" style="">
                    <div @click="clickVideoMenu(key)" v-for="item,key in videoMenuData" :class="key == activeMenu ?'active':''">
                        {{item.innerHTML}}
                    </div>
                </div>
            </div>
            <div class="card-right">
                <div class="videoBody" style="height:calc(100%)">
                    <div class="videoBoxMain" :style="'width:'+videoMenuData[activeMenu].width+';height:'+videoMenuData[activeMenu].height" v-for="n in videoMenuData[activeMenu].num">
                        <videoBox url="video-bg.png">
                            <mVideo v-on:CloseVideoBox="CloseVideoBox" :h5id="'one'+n" :tokens="videoToken[n-1]" :num="n"></mVideo>
                        </videoBox>
                        <!--<button v-show="videoToken[n-1]" type="button" class="button btn vidbuttion pull-right" @click="CloseVideo(n)"><i class="mdi mdi-close"></i></button>-->
                    </div>
                </div>
            </div>
        </el-row>

    </div>
</template>
<script>
    import {$ajax,Get500and35ForList,ptz} from "@/http/api/mapi.js";
    export default {
        name: "spjk",
        data(){
            return {
                videoMenuData:[
                    {
                        innerHTML:"1",
                        width:"100%",
                        height:"100%",
                        num:1
                    },

                    {
                        innerHTML:"4",
                        width:"50%",
                        height:"50%",
                        num:4
                    },
                    {
                        innerHTML:"9",
                        width:"33.33333%",
                        height:"33.33333%",
                        num:9
                    },
                    // {
                    //     innerHTML:"16",
                    //     width:"25%",
                    //     height:"25%",
                    //     num:16
                    // }
                ],
                activeMenu:1,
                videoToken:sessionStorage.videoToken1?JSON.parse(sessionStorage.videoToken1):["80a9--12","80a9--13","80a9--14","80a9--15"],
                props: {
                    label: 'name',
                },
                data2: [{
                    label: '福瑞变电站机器人设备',
                }],
                clickNum:sessionStorage.clickNum1 ? sessionStorage.clickNum1 : 0,
                // 视频编号

                videoNum:0

            }
        },
        mounted(){
            //监测告警，提示信息
            this.$alarmMonitor(this);
            this.Get500and35ForListFunc();
            this.videoNum = this.videoToken.length;
        },
        methods:{
            // 关闭菜单
            CloseVideoBox(n){
                delete this.videoToken[n-1];
                let videoTokenArr = [];
                this.videoToken.forEach(item=>{
                  if (item){
                    videoTokenArr.push(item);
                  }
                })

              this.videoToken = videoTokenArr;

              this.videoToken = Object.assign([], this.videoToken);

              sessionStorage.videoToken1 = JSON.stringify(this.videoToken);
              // 设置置顶数据
              this.videoNum = videoTokenArr.length;
            },
            // 点击树形菜单
            clickVideoMenu(val){
                // 设置默认菜单
                this.activeMenu= val;

                // 获取指定个数
                this.videoToken.splice(this.videoMenuData[this.activeMenu].num);

                // 设置视频数据
                this.videoToken = Object.assign([], this.videoToken);
                sessionStorage.videoToken1 = JSON.stringify(this.videoToken);

                // 设置置顶数据
                this.videoNum = this.videoToken.length;
            },
            // 点击树形结构
            clickTree(val){
                // if(this.clickNum == 0){
                //   this.videoToken = [];
                // }
                // this.clickNum = ++this.clickNum;
                // sessionStorage.clickNum = this.clickNum;

                // 判断是否是站端
                if (val.workType == 'station' && val.level=='1000'){


                    // 判断该视频是否存在
                    if(this.isAddToken(val.strToken)){
                    }else{
                        //判断是否超出
                        if (this.videoNum >= this.videoMenuData[this.activeMenu].num) {
                          this.videoNum = 0;
                        }
                        this.videoToken[this.videoNum] = val.strToken;
                        this.videoNum = this.videoNum+1;
                    }
                    // let TokenArr = this.videoToken;
                    //
                    // this.videoToken = [];
                    // TokenArr.forEach(item=>{
                    //     if (val.strToken != item){
                    //         this.videoToken.push(item);
                    //     }
                    // });
                  // this.videoToken.unshift(val.strToken);
                    this.videoToken = Object.assign([], this.videoToken);

                    sessionStorage.videoToken1 = JSON.stringify(this.videoToken);
                    // 设置预置位
                    this.setPtz(val)
                }
            },
            // 判断是否添加该视频
            isAddToken(strToken){
              return this.videoToken.find(item=>{
                if (strToken == item){
                  return true;
                }
              });
            },
            // 设置预置位
            setPtz(val) {

                ptz.params.token = val.strToken;
                ptz.params.preset = val.presetCode;

                $ajax(ptz, (res) => {

                });
            },

            // 获取表计树
            Get500and35ForListFunc(){

                // 获取sessionStroage

                let biaojiTree = sessionStorage.biaojiTree;

                if (biaojiTree) {
                    this.data2 = JSON.parse(biaojiTree);
                }else{
                    // 发送请求获取数据
                    $ajax(Get500and35ForList, (res)=>{
                        this.data2 = res.result.items;
                        sessionStorage.biaojiTree = JSON.stringify(this.data2)
                    });
                }


            },

        }
    }
</script>
<style scoped lang="scss">
    @import "../css/commom";
    .bjjkBox{
        @extend .reset-tree;
    }
    .bjjkBox{
        margin-top:20px;
        width:100%;
        height:920px;
        height:95%;
        display: flex;
        justify-content: space-between;
        .card-left{
            width:400px;
            height:100%;
            box-sizing: border-box;
            padding:35px 10px 15px 10px;
            background: url(../assets/home/images/spjk-left.png) no-repeat;
            background-size: 100% 100%;
            display: flex;
            flex-flow: column;
            .con {
                flex-grow: 1;
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
        }
        .card-right{
            width:1430px;
            height:100%;
            box-sizing: border-box;
            padding: 20px;
            padding-top: 43px;
            background: url(../assets/home/images/xjjgllRight.png) no-repeat;
            background-size: 100% 100%;
            .videoBody{
                >div{
                    float:left;
                    box-sizing: border-box;

                    /*padding: 5px;*/
                    /*background: url(../assets/home/images/videoDi.png) no-repeat;*/
                    /*background-size: 100% 100%;*/
                }
            }
        }
    }


    .videoMenu {
        width:100%;
        float:right;
        height:60px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        >div{
            width: 40px;
            height: 35px;
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
            line-height: 35px;
            font-size: 22px;
            color:#fff;
            background-color: #0e182e;
            border: solid 1px #6076ad;
            border-radius: 3px;
            cursor: pointer;
            margin:0px 5px;

        }
        .active{
            color:#0efcff;
            border:1px solid #0efcff;
        }
    }
</style>