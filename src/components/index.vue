<template>
    <div class="index-box">
        <div class="con-mid">
            <div class="con-mid-title" @click="home">国网山西检修公司变电站智能监控平台</div>
            <div class="root-foot">
                <div class="menu">
                    <div class="item" @click="jump(item,index)" :class="{active:activeIndex==index}"
                         :style="'width:'+100/footList.length+'%;'" v-for="(item,index) in footList" v-bind:key="index">
                        <div class="item1">{{item.title}}</div>
                        <div class="menuZiBox">
                            <div class="item" @click="jump(zi,index)" v-for="zi in item.children">
                                {{zi.title}}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div @click="logoutFunc" class="logout" ></div>
        </div>
        <div style="height: calc(100% - 90px);width: 99%;margin-top:-60px">

            <div class="main">
                <router-view/>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        footList: [
          {
            path: "/qmjk",
            title: "首页"

          },
          {
            path: "",
            title: "视频监控",
            children: [
              {
                path: "/spjk",
                title: "安防视频",
              },
              {
                path: "/bjjk",
                title: "表计视频"
              }
            ]

          },
          {
            path: "",
            title: "智能巡视",
            children: [
              {
                path: "/znxs",
                title: "智能巡视",
              },
              {
                path: "/lxls",
                title: "巡视记录"
              },
              {
                path: "/xjjgll",
                title: "巡视结果浏览"
              },
            ]
          },
          {
            path: "/znld",
            title: "智能联动"
          },
          {
            path: "/xwfx",
            title: "告警记录"
          },
          {
            path: "/sjtj",
            title: "数据统计"
          }
        ],
        activeIndex: 0,
        title: "首页",
        name: sessionStorage.name
      }
    },
    methods: {
      jump(item, index) {
        this.activeIndex = index;
        // this.title = item.title;
        if (item.path) {
          this.$router.push(this.$store.state.path + item.path + "?n=" + index + "&name=" + this.name + "&title=" + this.title);

        }
      },
      home(){
        this.$router.push("/home/main");
      },
      logoutFunc(){
        sessionStorage.isLogin = "no";
        sessionStorage.userid = "0";
        sessionStorage.accessToken = "0";
        sessionStorage.biaojiTree = "";
        sessionStorage.treeData = "";
        sessionStorage.xunjianTree = "";
        this.$message({
          message: '退出成功',
          type: 'success'
        });
        this.$router.push("/login");
      }
    },
    mounted() {
      this.$store.state.path = "/home/main";
      this.activeIndex = this.$route.query.n ? this.$route.query.n : 0;
      this.title = this.$route.query.title ? this.$route.query.title : "全面监控";
    },
    watch: {
      $route() {
        this.activeIndex = this.$route.query.n ? this.$route.query.n : 0;
        this.title = this.$route.query.title ? this.$route.query.title : "全面监控";
      }
    }

  }
</script>

<style scoped lang="scss">


    .con-mid{
        position: relative;
        width: 100%;
        height:158px;
        background: url(../assets/home/images/header.png) no-repeat center center;
        background-size: 100% 100%;


    }
    .logout{
        position: absolute;
        right:50px;
        top:40px;
        width:31px;
        height:25px;
        cursor:pointer;
        background: url(../assets/home/images/logout.png) no-repeat center center;
        background-size: 100% 100%;

    }
    .con-mid-title{
        cursor: pointer;
        width: 500px;
        height:44px ;
        line-height: 44px;
        text-align: center;
        font-size: 24px;
        color: #02eeff;
        position: absolute;
        left:105px;
        top:25px;
        font-weight: bold;
    }
    .index-box {
        width: 100%;
        height: 100%;
    }

    .main {
        width: 100%;
        height: calc(100%);
    }

    .root-foot {
        position: absolute;
        left:650px;
        top:30px;
        height: 36px;
        width:1040px;
        .menu {
            height: 100%;
            display: flex;
            .item {
                height: 100%;
                margin: 0px 10px;
                color: #fff;
                text-align: center;
                line-height: 50px;
                font-size: 24px;
                cursor: pointer;
                position: relative;
                .item1{
                    height: 36px;
                    width:150px;
                    color: #fff;
                    text-align: center;
                    line-height: 36px;
                    font-size: 20px;
                    cursor: pointer;

                }
                &.active {
                    .item1{
                        background: url(../assets/home/images/biaoti.png) no-repeat center center;
                        color:#02eeff;
                        background-size: 100% 100%;
                        font-weight: bold;
                    }
                }
                &:hover {
                    .menuZiBox {
                        display: block;
                    }
                }

                .menuZiBox {
                    display: none;
                    z-index: 2000;
                    width: 100%;
                    position: absolute;
                    left: -10 px;
                    top: 36px;
                    .item {
                        background: url(../assets/home/images/xiala-caidan.png) no-repeat center center;
                        background-size: 100% 100%;
                        margin:0px;
                        border-bottom-left-radius: 0px;
                        border-bottom-right-radius: 0px;
                        height: 36px;
                        width:150px;
                        color: #fff;
                        text-align: center;
                        line-height: 36px;
                        font-size: 20px;
                        cursor: pointer;
                        margin-top:5px;
                    }
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
        position: relative;
        .back-home {
            position: absolute;
            left: 20px;
            top: 0;
            bottom: 0;
            margin: auto 0;
        }
    }
</style>
