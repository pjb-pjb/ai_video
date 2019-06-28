<template>
    <div id="app">
            <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                flag:true
            }
        },
        methods: {

        },
        mounted() {
            window.addEventListener("keydown",function (e) {
                if(this.flag&&sessionStorage.isLogin=="yes"){
                    if(e.keyCode==8&&e.ctrlKey){
                        this.flag = false;
                        this.$confirm('确认退出系统吗？', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.flag = true;
                            sessionStorage.clear();
                            this.$router.push("/login");
                        }).catch(() => {
                            this.flag = true;
                        });
                    }else if(e.keyCode==36){
                        this.$router.push("/home");
                    }
                }
            }.bind(this));
            // this.connection.on("getWeatherMessage", (data)=> {
            //     console.log(data);
            // });
            // this.connection.on("getAlarmMessage", (data)=> {
            //     console.log(data);
            // });
            // this.connection.on("getDevCountMessage", (data)=> {
            //     console.log(data);
            // });
        }
    }
</script>

<style lang="scss">

    @import "./css/commom.scss";
    html::-webkit-scrollbar{
        width: 0;
        height: 0;
        display: none;
    }
    .fullscreen {
        position: fixed !important;
        width: 100vw !important;
        height: 100vh !important;
        left: 0;
        top: 0;
        z-index: 9999999 !important;
    }
    * {
        margin: 0;
        padding: 0;
        font-family: "MicrosoftYaHei";
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    b, i, em, strong, h1, h2, h3, h4, h5, h6 {
        font-style: normal;
        font-weight: normal;
    }

    #app {
        /*width: 100vw;*/
        /*height: 100vh;*/
        /*padding: 0 20px;*/
        /*background-image: url("./assets/bj.png");*/
        /*background-size: 100%;*/
        /*@extend .el-dialog;*/
    }
    .main{
        width: 100%;
        height: calc(100% - 150px);
    }
    .root-foot {
        height: 60px;
        ul {
            height: 100%;
            display: flex;
            li {
                height: 100%;
                background: #1d193a;
                border: 1px solid #7ecdf4;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
                color: #fff;
                text-align: center;
                line-height: 60px;
                font-size: 24px;
                cursor: pointer;
                &.active{
                    background: #0d371d;
                }
            }
        }

    }
    .root-head {
        height: 90px;
        text-align: center;
        line-height: 90px;
        color: #fff;
        font-size: 36px;
    }
    .my-height{
        height: 100%;
    }
    .el-select-dropdown{
        background: rgb(2, 37, 108);
        border: none;
        color: #fff;
    }
    .el-select-dropdown__item{
        color: #fff !important;
    }
    .el-select-dropdown__item.selected{
        background: rgb(7, 0, 108);
    }
    .el-select-dropdown__item.hover{
        background: rgb(7, 0, 108);
    }
    .el-dialog__wrapper{
        z-index: 99999999999999 !important;
    }
</style>
