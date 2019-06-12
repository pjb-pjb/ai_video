<template>
    <div style="padding: 5px" class="my-height">
        <div class="my-video-box" :style="`background-image:url(/static/img/${url});`">
            <slot></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "video-box",
        props: ["url"]
    }
</script>

<style scoped lang="scss">

    .my-video-box {
        height: 100%;
        width: 100%;
        background-color: #888888;
        border: 1px solid #000;
        background-size: 100% 100%;
    }

</style>