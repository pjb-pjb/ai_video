<template>
    <div :class="{active:isWarn,ddd:true}" :style="`line-height:${height};width:${width};height:${height};border-radius:${br}`">
        {{index}}
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
    .ddd{
        font-size: 16px;
        text-align: center;
        background-color: rgb(34, 172, 56);
        color: #fff;
        &.active{
            background-color: rgb(254, 0, 0);;
        }
    }
</style>