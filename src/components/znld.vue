<template>
    <div class="root znld">
        <ul class="video-box">
           <li></li>
           <li></li>
           <li></li>
           <li></li>
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
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="sj"
                            label="联动事件"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="state"
                            label="联动状态"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="事件类型"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="isTrue"
                            label="是否确认"
                            align="center"
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
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="sj"
                            label="联动设备"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="联动时间"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="address1"
                            label="预期结果"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="address2"
                            label="当前状态"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            label="视频监视"
                            align="center"
                    >
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleDelete(scope.$index, scope.row)">视频</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div>
                    <div @click="nowVideo()" style="float: right;color: #fff;padding: 10px 30px;cursor: pointer;"><span>实时视频</span><i class="el-icon-d-arrow-right"></i></div>
                </div>
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
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="sj"
                        label="联动事件"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="联动状态"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="事件类型"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="isTrue"
                        label="是否确认"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        label="操作"
                        align="center"
                >
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="primary"
                                @click="seeXq()">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog
                    width="70%"
                    title="电子围栏五区（北）入侵报警"
                    :visible.sync="innerVisible"
                    append-to-body
            >
                <el-table
                        :data="tableData1"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="state"
                            label="联动状态"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="sj"
                            label="联动设备"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="联动时间"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="address1"
                            label="预期结果"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="address2"
                            label="当前状态"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            label="视频监视"
                            align="center"
                    >
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleDelete(scope.$index, scope.row)">视频</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-dialog>
        </el-dialog>
        <el-dialog width="45%" title="实时视频" :visible.sync="isShowNowVideo">
            <div class="now-video">
                <div class="box">

                </div>
                <div class="tree">
                    <el-tree :data="data" @node-click="handleNodeClick"></el-tree>
                </div>
            </div>
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
                isShowNowVideo:false,
                data: [{
                    label: '福瑞站',
                    children: [{
                        label: '二级',
                        data:{
                            n:1
                        }
                    }]
                }]
            }
        },
        mounted() {
        },
        methods: {
            mhistory(){
                this.dialogTableVisible = true;
            },
            seeXq(){
                this.innerVisible = true;
            },
            nowVideo(){
                this.isShowNowVideo = true;
            },
            handleNodeClick(a,b){
                let data = a.data;
                if(b.level==2){
                    console.log(data);
                }
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
            background: red;
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
