<template>
    <div class="znxs">
        <ul class="video-box">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div class="right">
            <card title="轮询策略" width="100%" height="100%">
                <div style="padding: 20px 50px;">
                    <div style="text-align: right;">
                        <el-button type="primary">执行</el-button>
                    </div>
                    <div style="padding: 5px 0;" v-for="(item) in arr">
                        <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
                    </div>
                </div>
            </card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                arr:[
                    {
                        checked:false,
                        name:"策略1"
                    },
                    {
                        checked:false,
                        name:"策略2"
                    },
                    {
                        checked:false,
                        name:"策略3"
                    },
                    {
                        checked:true,
                        name:"策略4"
                    },
                    {
                        checked:false,
                        name:"策略5"
                    }
                ]
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
                background: red;
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
            @extend .el-checkbox;
        }
    }
</style>
