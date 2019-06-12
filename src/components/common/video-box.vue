<template>
    <div class="my-video-box">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "video-box"
    }
</script>

<style scoped lang="scss">

    .my-video-box{
        height: 100%;
        width: 100%;
        background: #888888;
        border: 1px solid #000;
    }

</style>