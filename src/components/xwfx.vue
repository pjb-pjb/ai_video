<template>
    <div class="xwfx my-height">
        <el-row class="my-height">
            <el-col class="my-height" :span="16">
                <card width="100%" title="告警信息" height="100%">
                    <ul class="list work">
                        <li @dblclick="see(item.url)" v-for="(item,index) in work" v-bind:key="index">
                            <div class="name" :title="item.name">{{item.name}}</div>
                            <div class="time" :title="item.time">{{item.time}}</div>
                            <div class="des" :title="item.des">{{item.des}}</div>
                        </li>
                    </ul>
                </card>
            </el-col>
            <el-col class="my-height" :span="8">
                <div style="height: 50%;">
                    <videoBox :url="url">
                        <mVideo h5id="one3" token="15e1--1"></mVideo>
                    </videoBox>
                </div>
                <div style="height: 50%;">
                    <videoBox :url="url">
                    </videoBox>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'Index',
        data() {
            return {
                url:"",
                work: [
                    {
                        name: "摄像头1",
                        time: "2019-05-06  15:20:10",
                        des: "人员入侵",
                        url:"35kV设备区1号主变压器35kV侧3001断路器A相QS1压力表.jpg"
                    },{
                        name: "摄像头1",
                        time: "2019-05-06  15:20:10",
                        des: "发生群架",
                        url:"35kV设备区1号主变压器35kV侧3001断路器分合指示.jpg"

                    },{
                        name: "摄像头1",
                        time: "2019-05-06  15:20:10",
                        des: "翻越围墙",
                        url:"35kV设备区1号主变压器35kV侧3001间隔汇控柜可见光拍照.jpg"
                    },{
                        name: "摄像头1",
                        time: "2019-05-06  15:20:10",
                        des: "翻越围墙",
                        url:"35kV设备区1号主变压器35kV侧30011隔离开关分合指示.jpg"
                    },{
                        name: "摄像头2",
                        time: "2019-05-06  15:20:10",
                        des: "人员入侵",
                        url:"35kV设备区1号主变压器35kV侧300110接地刀闸分合指示.jpg"
                    },{
                        name: "摄像头3",
                        time: "2019-05-06  15:20:10",
                        des: "人员入侵",
                        url:"35kV设备区1号主变压器35kV侧避雷器B相动作次数.jpg"
                    },{
                        name: "摄像头4",
                        time: "2019-05-06  15:20:10",
                        des: "人员入侵",
                        url:"35kV设备区1号站用变压器3011断路器A相QS1压力表.jpg"
                    },{
                        name: "摄像头5",
                        time: "2019-05-06  15:20:10",
                        des: "人员入侵",
                        url:"35kV设备区1号站用变压器30113隔离开关分合指示.jpg"
                    },{
                        name: "摄像头6",
                        time: "2019-05-06  15:20:10",
                        des: "人员入侵",
                        url:"35kV设备区1号站用变压器301130接地刀闸分合指示.jpg"
                    },{
                        name: "摄像头7",
                        time: "2019-05-06  15:20:10",
                        des: "人员入侵",
                        url:"35kV设备区1号站用变压器301130接地刀闸分合指示.jpg"
                    }
                ]
            }
        },
        mounted() {
        },
        methods: {
            see(url){
                this.url = url;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .xwfx {
        .work {
            color: #fff;
            li {
                cursor: pointer;
                line-height: 40px;
                display: flex;
                > div {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                border: solid 1px rgba(126, 205, 244, 1);
                &:hover{
                    background: #2e4b9e !important;
                }
                &:nth-child(2n) {
                    background: #40789e;
                }
                &:nth-child(2n+1) {
                    background-color: #1b4b8b;
                }
                .name {
                    width: 20%;
                    padding-left: 30px;
                }
                .time {
                    width: 30%;
                    padding-left: 20px;
                }
                .des {
                    width: 50%;
                    padding-left: 20px;
                }

            }
        }
    }

</style>
<style lang="scss">
    @import "../css/commom";

    .znxs {
        .right {
            @extend .el-checkbox;
        }
    }
</style>
