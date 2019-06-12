<template>
    <div class="znxs">
        <ul class="video-box">
            <li>
                <videoBox url="35kV设备区1号站用变压器3011断路器A相QS1压力表.jpg">
                    <mVideo h5id="one1" token="15e1--1"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox url="35kV设备区1号站用变压器30113隔离开关分合指示.jpg">
                    <mVideo h5id="one2" token="15e1--1"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox url="35kV设备区1号站用变压器301130接地刀闸分合指示.jpg">
                    <mVideo h5id="one3" token="15e1--1"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox url="35kV设备区1号主变压器35kV侧3001间隔汇控柜可见光拍照.jpg">
                    <mVideo h5id="one4" token="15e1--1"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox url="35kV设备区1号主变压器35kV侧3001断路器分合指示.jpg">
                    <mVideo h5id="one5" token="15e1--1"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox url="35kV设备区1号主变压器35kV侧30011隔离开关分合指示.jpg">
                    <mVideo h5id="one6" token="15e1--1"></mVideo>
                </videoBox>
            </li>
        </ul>
        <div class="right">
            <card title="巡视策略" width="100%" height="50%">
                <div style="padding: 20px 20px;">

                    <div style="text-align: center">
                        <el-cascader
                                v-model="value"
                                :options="options"
                                >
                        </el-cascader>
                        <el-button type="primary" @click="isShowCeLue = true">查看策略详情</el-button>

                    </div>
                    <div style="text-align: center;margin-top:20px;">
                        <el-button type="primary" @click="isShowNowVideo = true">自定义策略</el-button>
                        <el-button type="primary">执行</el-button>
                    </div>
                </div>
            </card>
            <card title="历史报告" width="100%" height="50%">
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="sj"
                            label="报告名称"
                            align="center"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="生成时间"
                            align="center"
                    >
                    </el-table-column>

                    <el-table-column
                            label="查看结果"
                            align="center"
                    >
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleDelete(scope.$index, scope.row)">查看报告</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="下载报告"
                            align="center"
                    >
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleDelete(scope.$index, scope.row)">下载</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </card>
        </div>

        <el-dialog width="50%"  title="自定义策略" :visible.sync="isShowNowVideo">
            <el-row class="my-height"  style="min-height:300px">
                <el-col :span="12" class="my-height">
                    <el-tree
                        :data="data1"
                        @node-click="handleNodeClick1"
                        show-checkbox
                    ></el-tree>
                </el-col>
                <el-col :span="12" class="my-height">
                    <el-tree
                        :data="data2"
                        @node-click="handleNodeClick2"
                        show-checkbox
                    ></el-tree>
                </el-col>
            </el-row>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShowNowVideo = false">取 消</el-button>
                <el-button type="primary" @click="isShowNowVideo = false">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog width="50%"  title="查看策略详情" :visible.sync="isShowCeLue">
            <el-row class="my-height"  style="width:90%;min-height:300px;margin:0 auto">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="策略名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>

                    <el-form-item label="时间">
                        <el-date-picker
                                v-model="form.time"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>


                    <el-form-item label="策略简介">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="isShowCeLue = false">取消</el-button>
                    </el-form-item>
                </el-form>


            </el-row>

        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                form:{
                    name:"一号主变巡检策略",
                    time:['2019-6-12 08:00:00','2019-6-22 08:00:00'],
                    startTime:"2019-6-12 08:00:00",
                    endTime:"2019-6-22 08:00:00",
                    desc:"一号主变巡检策略电线路巡检系统完整的设计策略；详细描述了平台选型方案、系统架构设计方案和系统功能设计方案；提出了具有高扩展性的设备管理数据结构设计思路；阐述了PDA移动端的地图组织、数据库设计思路和业务功能设计。输电线路巡检是有效保障输电网安全运行的一项重要工作，能够有效掌握输电线路运行状况及周围环境的变化，发现设施缺陷和安全隐患。"
                },
                data1: [{
                    label: '摄像头',
                    children: [{
                        label: '设备1',
                        data:{
                            n:1
                        }
                    },{
                        label: '设备2',
                        data:{
                            n:1
                        }
                    }]
                }],
                data2: [{
                    label: '机器人',
                    children: [{
                        label: '室内机器人',
                        data:{
                            n:1
                        },
                        children:[{
                            label: '1号主变'
                        },{
                            label: '2021隔离开关'
                        },{
                            label: '2021-1隔离开关'
                        },{
                            label: '2021-2隔离开关'
                        }]
                    },{
                        label: '室外机器人',
                        data:{
                            n:1
                        },
                        children:[{
                            label: '2号主变'
                        },{
                            label: '5022断路器'
                        },{
                            label: '50221隔离开关'
                        },{
                            label: '50221隔离开关'
                        }]
                    }]
                }],
                isShowNowVideo:false,
                isShowCeLue:false,
                options: [
                    {
                        value: 'zhinan',
                        label: '例行巡检策略',
                        disabled: false,
                        children: [{
                            value: 'shejiyuanze',
                            label: '一号主变电站巡检',
                        }, {
                            value: 'daohang',
                            label: '二号主变电站巡检'
                        }]
                    },
                    {
                        value: 'zhinan',
                        label: '熄灯巡检策略',
                        disabled: false,
                        children: [{
                            value: 'shejiyuanze',
                            label: '大门巡检',
                        }, {
                            value: 'daohang',
                            label: '后门巡检'
                        }]
                    },
                    {
                        value: 'zhinan',
                        label: '特殊巡检策略',
                        disabled: false,
                        children: [{
                            value: 'shejiyuanze',
                            label: '大风巡检策略',
                        }, {
                            value: 'daohang',
                            label: '暴雨巡检策略'
                        }]
                    },
                    {
                        value: 'zhinan',
                        label: '专项巡检策略',
                        disabled: false,
                        children: [{
                            value: 'shejiyuanze',
                            label: '红外测温巡检',
                        }, {
                            value: 'daohang',
                            label: '液压表抄录巡检'
                        }]
                    },
                    {
                        value: 'zhinan',
                        label: '自定义巡检策略',
                        disabled: false,
                        children: [{
                            value: 'shejiyuanze',
                            label: '自定义巡检1',
                        }, {
                            value: 'daohang',
                            label: '自定义巡检2'
                        }]
                    },

                ],
                tableData: [
                    {
                        time:"2018-03-18 10:11:23",
                        sj:"电子围栏五区北巡视报告",
                    },
                    {
                        time:"2018-03-18 10:11:23",
                        sj:"电子围栏五区北巡视报告",
                    },
                    {
                        time:"2018-03-18 10:11:23",
                        sj:"电子围栏五区北巡视报告",
                    },
                    {
                        time:"2018-03-18 10:11:23",
                        sj:"电子围栏五区北巡视报告",
                    }
                ],
                value:"策略4"
            }
        },
        computed:{
            checkedCeLue(){
                this.arr.forEach(item=>{
                    if (item.checked){
                        return item.name;
                    }
                })
                return "";
            }
        },
        mounted() {
        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .znxs{
        height: 99%;
        display: flex;
        justify-content: space-between;
        .video-box{
            height: 100%;
            width: calc(75% - 10px);
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            flex-wrap: wrap;
            li{
                width: calc(33.333% - 5px);
                height: calc(50% - 5px);
            }
        }
        .right{
            width: 25%;
            height: 100%;
        }
    }

</style>
<style lang="scss">
    @import "../css/commom";
    .znxs{
        .right{
            @extend  .reset-table;
        }
    }
</style>
