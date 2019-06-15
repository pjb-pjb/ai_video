<template>
    <div class="container">
        <div class="container2">
            <div class="main-title1">
                山西电网变电站智能视频分析平台
            </div>
            <div class="main">
                <div class="left">
                    <router-view name="left"></router-view>
                </div>
                <div class="right">
                    <router-view name="right"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/home/js/jquery-2.1.4.min.js";
import "../assets/home/js/index.js";
import "../assets/home/js/cssjs.js";

    export default {
        name: 'Home',
        data() {

        },
        methods: {
        },
        mounted(){
            this.$store.state.path = "/home2/index";
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    *{
        user-select: none;
    }
    .container {
        width: 3840px;
        height: 100vh;
        margin: 0px auto;
        background: url(../assets/home/images/background.png) no-repeat;
        background-size: 100% 100%;
        .container2 {
            width: 100%;
            height: 100%;
            margin: 0px auto;
            background: url(../assets/home/images/border.png) no-repeat;
            background-size: 100% 100%;
            box-sizing: border-box;
            padding-left: 60px;
            padding-right: 60px;
            padding-top: 40px;
            padding-bottom: 26px;
            position: relative;
            .main-title1{
                width: 676px;
                height: 61px;
                margin:0 auto;
                font-family: MicrosoftYaHei-Bold;
                font-size: 36px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 61px;
                letter-spacing: 0px;
                color: #01d8ff;
                text-align: center;
                margin-top: 17px;
                position: absolute;
                left:0px;
                top:17px;
                right:0px;
                margin:0 auto;
            }
            .main{
                width:100%;
                margin-top: 61px;
                height: calc(100% - 61px);
                .left{
                    height: 100%;
                    width: calc(50% - 15px);
                    float: left;
                }
                .right{
                    height: 100%;
                    width: calc(50% - 15px);
                    float: right;
                }
            }
        }

    }

</style>
