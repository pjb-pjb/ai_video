<template>
    <div class="index-box">
        <div class="main">
            <router-view/>
        </div>
        <div class="root-foot">
            <ul>
                <li @click="jump(item,index)" :class="{active:activeIndex==index}" :style="'width:'+100/footList.length+'%;'" v-for="(item,index) in footList" v-bind:key="index">{{item.title}}</li>
            </ul>
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
                        title: "全面监控"
                    },
                    {
                        path: "/spjk",
                        title: "视频监控"
                    },
                    {
                        path: "/znxs",
                        title: "智能巡视"
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
                title:"全面监控",
                name:sessionStorage.name
            }
        },
        methods: {
            jump(item,index){
                // this.activeIndex = index;
                // this.title = item.title;
                this.$router.push(this.$store.state.path+item.path+"?n="+index+"&name="+this.name+"&title="+this.title);
            }
        },
        mounted() {
            this.activeIndex = this.$route.query.n?this.$route.query.n:0;
            this.title = this.$route.query.title?this.$route.query.title:"全面监控";
            // this.name = this.$route.query.name;
        },
        watch:{
            $route(){
                this.activeIndex = this.$route.query.n?this.$route.query.n:0;
                this.title = this.$route.query.title?this.$route.query.title:"全面监控";
            }
          }

    }
</script>

<style scoped lang="scss">
    .index-box{
        width: 100%;
        height: 100%;
        padding-top: 30px;
    }
    .main{
        width: 100%;
        height: calc(100% - 60px);
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
    .root-head{
        height: 90px;
        text-align: center;
        line-height: 90px;
        color: #fff;
        font-size: 36px;
        position: relative;
        .back-home{
            position: absolute;
            left: 20px;
            top: 0;
            bottom: 0;
            margin: auto 0;
        }
    }
</style>
