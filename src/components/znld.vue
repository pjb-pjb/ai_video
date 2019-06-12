<template>
    <div class="root znld">
        <ul class="video-box">
           <li>
               <videoBox url="35kV设备区1号主变压器35kV侧3001断路器A相QS1压力表.jpg">
                   <mVideo h5id="one1" token="15e1--1"></mVideo>
               </videoBox>
           </li>
           <li>
               <videoBox url="35kV设备区1号主变压器35kV侧3001断路器分合指示.jpg">
                   <mVideo h5id="one2" token="15e1--1"></mVideo>
               </videoBox>
           </li>
           <li>
               <videoBox url="35kV设备区1号主变压器35kV侧3001间隔汇控柜可见光拍照.jpg">
                   <mVideo h5id="one3" token="15e1--1"></mVideo>
               </videoBox>
           </li>
           <li>
               <videoBox url="35kV设备区1号主变压器35kV侧30011隔离开关分合指示.jpg">
                   <mVideo h5id="one4" token="15e1--1"></mVideo>
               </videoBox>
           </li>
        </ul>
        <div class="right">
            <card height="43%" :isShowTop="false">
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="time"
                            label="时间"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="sj"
                            label="联动事件"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="state"
                            label="联动状态"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="事件类型"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="isTrue"
                            label="是否确认"
                    >
                    </el-table-column>
                </el-table>
                <div>
                    <div @click="mhistory()" style="float: right;color: #fff;padding: 10px 30px;cursor: pointer;"><span>历史数据</span><i class="el-icon-d-arrow-right"></i></div>
                </div>
            </card>
            <card height="57%" title="电子围栏五区（北）入侵报警">
                <el-table
                        :data="tableData1"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="state"
                            label="联动状态"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="sj"
                            label="联动设备"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="联动时间"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="address2"
                            label="当前状态"
                    >
                    </el-table-column>
                    <el-table-column
                            label="视频监视"
                    >
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleDelete(scope.$index, scope.row)">视频</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </card>
        </div>
        <el-dialog title="历史数据" width="80%" :visible.sync="dialogTableVisible">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="time"
                        label="时间"
                >
                </el-table-column>
                <el-table-column
                        prop="sj"
                        label="联动事件"
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="联动状态"
                >
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="事件类型"
                >
                </el-table-column>
                <el-table-column
                        prop="isTrue"
                        label="是否确认"
                >
                </el-table-column>
                <el-table-column
                        label="操作"
                >
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="primary"
                                >查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                tableData: [{
                    time:"2018-03-18 10:11:23",
                    sj:"电子围栏五区北-入侵报警",
                    state:"执行中",
                    type:"安全防范",
                    isTrue:"未确认"
                }],
                tableData1: [{
                    time:"2018-03-18 10:11:23",
                    sj:"电子围栏五区北-入侵报警",
                    state:"执行中",
                    address1:"预置位1",
                    address2:"预置位1"
                },{
                    time:"2018-03-18 10:11:23",
                    sj:"电子围栏五区北-入侵报警",
                    state:"执行中",
                    address1:"预置位1",
                    address2:"预置位1"
                },{
                    time:"2018-03-18 10:11:23",
                    sj:"电子围栏五区北-入侵报警",
                    state:"执行中",
                    address1:"预置位1",
                    address2:"预置位1"
                }],
                dialogTableVisible:false,
                innerVisible:false,
                isShowNowVideo:false
            }
        },
        mounted() {
        },
        methods: {
            mhistory(){
                this.dialogTableVisible = true;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .root{
        height: calc(100% - 10px);
        display: flex;
        justify-content: space-between;
    }
    .video-box{
        height: 100%;
        width: calc(50% - 10px);
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        flex-wrap: wrap;
        li{
            width: calc(50% - 5px);
            height: calc(50% - 5px);
        }
    }
    .right{
        width: 50%;
        height: 100%;
    }
    .now-video{
        height: 50vh;
        display: flex;
        .box{
            width: 70%;
            height: 100%;
            background: red;
        }
        .tree{
            padding: 0 20px;
        }
    }
</style>
<style lang="scss">
    @import "../css/commom";

    .znld{
        .right{
            @extend .reset-table;
        }
    }

</style>
