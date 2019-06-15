<template>
    <div class="container">
        <div class="con-mid">
            <div class="con-mid-title">变电站立体巡检智能管控平台</div>
        </div>
        <div style="height: calc(100% - 100px);width: 100%;">
            <router-view></router-view>
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
            return {

            }
        },
        methods: {

        },
        mounted(){
            this.$store.state.path = "/home/main";
        },
        watch:{
            $router(){
                // this.$store.state.path = "/home/main";
                // alert(1);
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .clearfix{
        clear: both;
    }
    .container {
        width: 100%;
        height: 100vh;
        margin: 0px auto;
        background: url(../assets/home/images/bj-1.png) no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        padding-left:50px;
        padding-right: 50px;
        overflow-x: hidden;
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .con-mid{
        width: 40%;
    }
    .con-mid-title{
        margin-top: 17px;
        width: 100%;
        height:61px ;
        line-height: 56px;
        background: url(../assets/home/images/title.png) no-repeat;
        background-size: 100% 100%;
        text-align: center;
        font-size: 34px;
        color: #01d8ff;
        font-weight: bold;
        padding-left: 10px;
    }
</style>
