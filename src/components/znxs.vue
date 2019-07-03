<template>
    <div class="znxs">
        <ul class="video-box">
            <li>
                <videoBox>
                    <mVideo h5id="a1" :tokens="sxtToken[0]"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox>
                    <mVideo h5id="a2" :tokens="sxtToken[1]"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox>
                    <mVideo h5id="a3" :tokens="sxtToken[2]"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox>
                    <mVideo h5id="a4" :tokens="sxtToken[3]"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox>
                    <mVideo h5id="a5" :tokens="sxtToken[4]"></mVideo>
                </videoBox>
            </li>
            <li>
                <videoBox>
                    <mVideo h5id="a6" :tokens="sxtToken[5]"></mVideo>
                </videoBox>
            </li>
        </ul>
        <div class="right">
            <card title="巡视策略" width="100%" height="30%">
                <div style="padding: 20px 20px;">

                    <div style="text-align: center">
                        <el-cascader
                                v-model="value"
                                :options="options"
                        >
                        </el-cascader>
                        <el-button type="primary" @click="clXq()">查看策略详情</el-button>

                    </div>
                    <div style="text-align: center;margin-top:20px;">
                        <el-button type="primary" @click="isShowNowVideo = true">自定义策略</el-button>
                        <el-button type="primary" @click="implement()">执行</el-button>
                    </div>
                </div>
            </card>
            <card title="历史报告" width="100%" height="70%">
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="taskName"
                            label="报告名称"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="id"
                            label="生成时间"
                    >
                    </el-table-column>
                    <el-table-column
                            label="查看结果"
                    >
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="primary"
                                    @click="isShowBaoGao = true">查看报告
                            </el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="下载报告"
                    >
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleDelete(scope.$index, scope.row)">下载
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="padding:10px 0;display: flex;justify-content: center;">
                    <el-pagination
                            :page-size="5"
                            :pager-count="11"
                            layout="prev,pager,next"
                            :small="true"
                            :total="total"
                            @current-change="currentChange"
                    >
                    </el-pagination>
                </div>
            </card>
        </div>

        <el-dialog top="50px" width="70%" title="自定义策略" :visible.sync="isShowNowVideo">
            <div style="height: 70vh;">
                <el-row style="height: calc(100% - 50px);">
                    <el-col :span="14" class="my-height" style="overflow: auto !important;">
                        <el-input
                                placeholder="输入关键字进行过滤"
                                v-model="filterText">
                        </el-input>
                        <el-tree
                                :data="data1"
                                show-checkbox
                                :props="{label:'name'}"
                                @check="check"
                                ref="tree"
                                node-key="id"
                                :filter-node-method="filterNode"
                        ></el-tree>
                    </el-col>
                    <el-col :span="10" class="my-height" style="overflow: auto !important;">
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
                <div slot="footer" style="display: flex;height: 50px;align-items: center;justify-content: flex-end"
                     class="dialog-footer">
                    <el-button @click="isShowNowVideo = false">取 消</el-button>
                    <el-button type="info" @click="clear">清 空</el-button>
                    <el-button type="primary" @click="zdyImplement">执行</el-button>
                </div>
            </div>
        </el-dialog>

        <el-dialog width="50%" title="查看策略详情" :visible.sync="isShowCeLue">
            <el-row class="my-height" style="width:90%;min-height:300px;margin:0 auto">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="分类">
                        <el-input v-model="form.roundTypeParentName+'/'+form.roundTypeSubName"></el-input>
                    </el-form-item>
                    <el-form-item label="策略名称">
                        <el-input v-model="form.roundName"></el-input>
                    </el-form-item>
                    <el-form-item label="时间">
                        <el-input v-model="form.roundFrequencyType"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="策略简介">-->
                    <!--<el-input type="textarea" style="height:auto;resize:none;" v-model="form.desc"></el-input>-->
                    <!--</el-form-item>-->
                    <el-table
                            :data="form.baseForfrRoundConfigsSub"
                            border
                            style="width: 100%">
                        <el-table-column
                                label="类型"
                        >
                            <template slot-scope="scope">
                                <span v-if="scope.row.workType=='station'">摄像头</span>
                                <span v-else>机器人</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="devName"
                                label="设备名称"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="presetName"
                                label="预置位名称"
                        >
                        </el-table-column>

                    </el-table>
                </el-form>
            </el-row>
        </el-dialog>

        <el-dialog width="50%" title="查看报告" :visible.sync="isShowBaoGao">
            <el-row class="my-height" style="width:90%;margin:0 auto">

                <h2 style="text-align:center;">一号主变巡检报告</h2>
                <p style="text-align:center;">时间：2019-6-12 10:10:10 天气：晴 报告员：管理员</p>
                <br>
                <center>
                    <img style="width:300px;display:inline-block" src="/static/img/35kV设备区1号主变压器35kV侧3001间隔汇控柜可见光拍照.jpg"
                         alt=""><br>
                    <img style="width:300px;display:inline-block;" src="/static/img/35kV设备区1号主变压器35kV侧30011隔离开关分合指示.jpg"
                         alt=""><br>
                    <img style="width:300px;display:inline-block;"
                         src="/static/img/35kV设备区1号主变压器35kV侧3001间隔汇控柜可见光拍照.jpg" alt=""><br>
                    <img style="width:300px;display:inline-block;" src="/static/img/35kV设备区1号站用变压器301130接地刀闸分合指示.jpg"
                         alt=""><br>
                    <img style="width:300px;display:inline-block;" src="/static/img/35kV设备区1号站用变压器3011断路器A相QS1压力表.jpg"
                         alt=""><br>
                    <img style="width:300px;display:inline-block;"
                         src="/static/img/35kV设备区1号主变压器35kV侧3001间隔汇控柜可见光拍照.jpg" alt=""><br>
                </center>
            </el-row>
        </el-dialog>
        <div style="position: absolute;top: 0;right: 0;height: 100%;width: 27%;background: rgba(0,0,0,0.8);bottom:0;margin:  auto 0;display: flex;align-items: center;justify-content: center;"
             v-if="sxtList.length">
            <div style="height: 90%;width: 50%;">
                <el-steps direction="vertical" :active="this.sxtN1" finish-status="success" process-status="wait ">
                    <!--description="这是一段很长很长很长的描述性文字"-->
                    <el-step :title="item.presetName||item.name" v-for="item in sxtList"></el-step>
                </el-steps>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        $ajax,
        GetPagedsDto,
        getLxList,
        ptz,
        Snapshot,
        CreateForFrRoundInfoAndGetId,
        UpdateSubDto,
        getPagedsDto    //得到轮询列表
    } from "@/http/api/mapi.js";
    export default {
        name: 'Index',
        data() {
            return {
                value: "",
                form: {},
                isShowBaoGao: false,
                //预置位树
                data1: [],
                isShowNowVideo: false,
                isShowCeLue: false,
                options: [],
                tableData: [

                ],
                sxtToken: [],    //摄像头token
                jqrToken: [],    //机器人token
                lxList: [],
                sxtN: 0, //投资摄像头窗口显示在第几个
                sxtN1: 0, //控制摄像头在第几个
                sxtList: [],  //摄像头预置位列表
                loading: "",
                tags: [],   //
                filterText: "",
                lxBaoInfo: {},    //轮询报告信息
                bgId: 0,
                total:0         //轮询报告总条数
            }
        },
        mounted() {
            //监测告警，提示信息
            this.$alarmMonitor(this);
            //初始化页面
            this.init();
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        },
        methods: {
            //树复选框被点击的触发
            check() {
                this.tags = (this.$refs.tree.getCheckedNodes()).filter((val) => {
                    return val.level == 1000;
                });
            },
            //删除预置位
            closeTag(index) {
                this.tags.splice(index, 1);
                console.log(this.tags);
                this.$refs.tree.setCheckedNodes(this.tags);
            },
            //clear
            clear() {
                this.tags = [];
                this.$refs.tree.setCheckedNodes(this.tags);
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
                this.getPagedsDto(1);
            },
            //得到轮询列表
            getPagedsDto(n){
                getPagedsDto.params = {
                    MaxResultCount:5,
                    SkipCount:n
                };
                $ajax(getPagedsDto,(res)=>{
                    res = res.result;
                    this.tableData = res.items;
                    this.total = res.totalCount;
                });
            },
            currentChange(n){
                this.getPagedsDto(n);
            },
            //得到预置位树
            GetPagedsDto() {
                $ajax(GetPagedsDto, (data) => {
                    this.data1 = data.result.items;
                });
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
                                        if (a.value == val.roundTypeSubName) {
                                            return true;
                                        }
                                    });
                                    if (!flag) {
                                        ele.children.push({
                                            value: val.roundTypeSubName,
                                            label: val.roundTypeSubName
                                        });
                                    }
                                } else {
                                    ele.children = [{
                                        value: val.roundTypeSubName,
                                        label: val.roundTypeSubName
                                    }];
                                }
                            }
                        });
                    });
                    data.forEach((val) => {
                        this.options.forEach((ele) => {
                            ele.children.forEach((a) => {
                                if (val.roundTypeParentName == ele.value && val.roundTypeSubName == a.value) {
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
            },
            clXq() {
                if (this.value[2]) {
                    this.lxList.some((val) => {
                        if (val.id == this.value[2]) {
                            this.form = val;
                            this.isShowCeLue = true;
                            return true;
                        }
                    });
                }
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
                        roundTypeName: data.roundTypeSubName,
                        createForFrRoundInfoSubDto: []
                    };
                    this.startLx(data.baseForfrRoundConfigsSub);
                }
            },
            zdyImplement() {
                this.lxBaoInfo = {
                    taskName: "自定义轮询" + (new Date()),
                    ssdz: sessionStorage.ssdzId,
                    ssdzName: sessionStorage.name,
                    createForFrRoundInfoSubDto: []
                };
                this.isShowNowVideo = false;
                this.startLx(this.tags);
            },
            //开始轮询
            startLx(data) {
                //轮询报告保存样式
                //     "taskName": "string",
                //     "configId": 0,
                //     "ssdz": "string",
                //     "ssdzName": "string",
                //     "roundTypeCode": "string",
                //     "roundTypeName": "string",
                //     "createForFrRoundInfoSubDto": [{
                //         "devPointId": "string",
                //         "devPointName": "string",
                //         "presetId": "string",
                //         "presetName": "string"
                //     }]
                data.forEach((val) => {
                    if(val.presetId==undefined){
                        val.presetId = val.id;
                    }
                    if (val.workType == "station") {
                        console.log(val.presetId);
                        this.lxBaoInfo.createForFrRoundInfoSubDto.push({
                            "presetId": val.presetId,
                            "presetName": val.presetName || val.name
                        });
                        this.sxtList.push(val);
                    }
                });
                CreateForFrRoundInfoAndGetId.data = this.lxBaoInfo;
                $ajax(CreateForFrRoundInfoAndGetId,(res)=>{
                    res = res.result;
                    this.bgId = res.id;
                    data.forEach((val)=>{
                        res.listBaseForFrRoundInfoSubsDto.some((ele)=>{
                            if(val.presetId==ele.presetId){
                                val.zid = ele.id;
                            }
                        });
                    });
                    console.log(this.sxtList);
                });
                this.loading = this.$loading({
                    lock: true,
                    text: '轮询任务执行中',
                    spinner: 'el-icon-loading',
                    background: 'transparent'
                });
                //轮询报告保存样式
                //     "taskName": "string",
                //     "configId": 0,
                //     "ssdz": "string",
                //     "ssdzName": "string",
                //     "roundTypeCode": "string",
                //     "roundTypeName": "string",
                //     "createForFrRoundInfoSubDto": [{
                //         "devPointId": "string",
                //         "devPointName": "string",
                //         "presetId": "string",
                //         "presetName": "string"
                //     }]
                data.forEach((val) => {
                    if (val.presetId == undefined) {
                        val.presetId = val.id;
                    }
                    if (val.workType == "station") {
                        console.log(val.presetId);
                        this.lxBaoInfo.createForFrRoundInfoSubDto.push({
                            "presetId": val.presetId,
                            "presetName": val.presetName || val.name
                        });
                        this.sxtList.push(val);
                    }
                });
                CreateForFrRoundInfoAndGetId.data = this.lxBaoInfo;
                $ajax(CreateForFrRoundInfoAndGetId, (res) => {
                    res = res.result;
                    this.bgId = res.id;
                    data.forEach((val) => {
                        res.listBaseForFrRoundInfoSubsDto.some((ele) => {
                            if (val.presetId == ele.presetId) {
                                val.zid = ele.id;
                            }
                        });
                    });
                    this.setPtz(this.sxtList[this.sxtN1]);
                });
            },
            //结束轮询
            stopLx() {
                this.sxtToken = [];
                this.sxtToken = Object.assign([], this.sxtToken);
                this.sxtN = 0;
                this.sxtN1 = 0;
                this.sxtList = [];
                this.lxBaoInfo = {};
                this.loading.close();
            },
            //设置预置位
            setPtz(val) {
                if (!val) {
                    // sxtToken:[],    //摄像头token
                    //     jqrToken:[],    //机器人token
                    //     lxList:[],
                    //     sxtN:0, //投资摄像头窗口显示在第几个
                    //     sxtN1:0, //控制摄像头在第几个
                    //     sxtList:[]  //摄像头预置位列表
                    setTimeout(() => {
                        this.stopLx();
                    }, 2000);
                }
                ptz.params.token = val.strToken;
                ptz.params.preset = val.presetCode;
                this.sxtToken[this.sxtN] = val.strToken;
                this.sxtToken = Object.assign([], this.sxtToken);
                if (this.sxtN >= 5) {
                    this.sxtN = 0;
                } else {
                    this.sxtN++;
                }
                $ajax(ptz, (res) => {
                    if (res.bStatus) {
                        setTimeout(() => {
                            this.Snapshot(val);
                        }, 3000);
                    }
                });
            },
            //截图
            Snapshot(val) {
                Snapshot.params.token = val.strToken;
                $ajax(Snapshot, (res) => {
                    val.path = process.env.IMG_ROOT + res.strUrl;
                    this.updateBg(val);
                });
            },
            //更新报告信息
            updateBg(val) {
                UpdateSubDto.data = {
                    "id": val.zid,
                    "colorfulPath": val.path
                };
                $ajax(UpdateSubDto, (res) => {
                    console.log(res);
                    this.sxtN1++;
                    this.setPtz(this.sxtList[this.sxtN1]);
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .znxs {
        height: 99%;
        display: flex;
        justify-content: space-between;
        .video-box {
            height: 100%;
            width: calc(75% - 10px);
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            flex-wrap: wrap;
            li {
                width: calc(33.333% - 5px);
                height: calc(50% - 5px);
            }
        }
        .right {
            width: 25%;
            height: 100%;
        }
    }
</style>
<style lang="scss">
    @import "../css/commom";

    .znxs {
        .right {
            @extend .reset-table;
            @extend .reset-page;
        }
    }

    .el-loading-spinner {
        * {
            font-size: 20px !important;
            color: #fff !important;
        }
    }
</style>
