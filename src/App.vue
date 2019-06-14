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
            }
        },
        methods: {

        },
        mounted() {
            window.addEventListener("keydown",function (e) {
                this.connection.invoke("SendInfo", "Hello");
                if(e.keyCode==8&&sessionStorage.isLogin=="yes"){
                    this.$confirm('确认退出系统吗？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        sessionStorage.clear();
                        this.$router.push("login");
                    }).catch(() => {

                    });
                }
            }.bind(this));
            this.connection.on("getMessage", (data)=> {
                console.log(data);
            });
        }
    }
</script>

<style lang="scss">
    @import "./css/commom.scss";
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
</style>
