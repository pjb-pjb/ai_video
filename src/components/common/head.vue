<template>
    <div class="box">
        <div class="img-box"></div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
    $baseUrl: "../../assets/head/";
    .box {
        border-bottom: 1px solid #057eae;
        overflow: hidden;
        $height: 100px;
        width: 100%;
        .img-box {
            width: 962px;
            height: 193px;
            background: {
                image: url("../../assets/login/logo.png");
                size: 100% 100%;
            }
            margin: 40px 0 0 50px;
        }

    }
</style>
