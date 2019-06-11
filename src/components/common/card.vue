<template>
    <div class="card" :style="`width:${width};height:${height};`">
       <div class="top" v-if="isShowTop"><span v-text="title"></span></div>
        <div class="con">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "right",
        props:{
            title:{
                default:"头部",
                type:String
            },
            width:{
                default:"100%",
                type:String
            },
            height:{
                default:"300px",
                type:String
            },
            isShowTop:{
                default:true,
                type:Boolean
            }
        }
    }
</script>

<style scoped lang="scss">
    .card{
        background-color: rgba(1,44,123,0.8);
        border: solid 1px #7ecdf4;
        $h:50px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .top{
            box-sizing: border-box;
            width: 100%;
            height: $h;
            background-color: rgba(18,39,66,0.6);
            border: solid 1px #7ecdf4;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            color: #fff;
            line-height: 48px;
            text-align: left;
            font-weight: bold;
            padding:0 54px;
        }
        .con{
            flex-grow: 1;
            box-sizing: border-box;
            width: 100%;
            overflow: auto;
            &::-webkit-scrollbar {/*滚动条整体样式*/
                width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
                height: 1px;
            }
            &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                background:  #7ecdf4;
            }
            &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                border-radius: 10px;
                background: rgba(1,44,123,0.8);
            }
        }
    }
</style>