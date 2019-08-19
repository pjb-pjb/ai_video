<template>
    <div class="item11"  :style="`line-height:${height};width:${width};height:${height};border-radius:${br}`">
        <div :class="{active:isWarn,ddd:true,aaa:true}"></div>
        <div class="text">{{index}}</div>
    </div>
</template>

<script>
    export default {
        name: "right",
        props:{
            width:{
                default:"80px",
                type:String
            },
            height:{
                default:"27px",
                type:String
            },
            isWarn:{
                default:false,
                type:Boolean
            },
            br:{
                default:"10px",
                type:String
            },
            index:""
        }
    }
</script>

<style scoped lang="scss">
    .item11{
        display:flex;
        justify-content: space-around;
        align-items: center;
    }
    .text{
        font-size: 16px;
        color: #fff;
    }
    .ddd{

        background-color: rgb(34, 172, 56);

        &.active{
            background-color: rgb(254, 0, 0);;
        }
    }
    .aaa{
        width:14px;
        height:14px;
        border-radius: 50%;
    }
</style>