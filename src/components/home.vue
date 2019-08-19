<template>
    <div class="container">
        <router-view></router-view>
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
            // $router(){
            //     this.$store.state.path = "/home/main";
                // alert(1);
            // }
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
        /*background: url(../assets/home/images/bj-1.png) no-repeat;*/
        background: url(../assets/home/images/beijing.png) no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        padding-top:15px;
        padding-bottom: 15px;
        padding-left:19px;
        padding-right: 19px;
        overflow-x: hidden;
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>
<style>
    *{
        font-family: MicrosoftYaHei;
    }
    .aaa{
        opacity: 0.8;
    }
</style>