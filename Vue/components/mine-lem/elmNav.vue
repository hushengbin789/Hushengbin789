<template>
    <div class="elmNav">
        <div class="myNav">
            <div class="navRight">
                <img src="https://fuss10.elemecdn.com/2/7c/43ec114eae35cdcee08de1d885c99jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/" alt="">
                <div class="navCentre">
                    <h1>肖楠</h1>
                    <span>135****2767</span>
                </div>
            </div>
            <div class="navLeft">
                <span> > </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
    .elmNav {
        width: 100%;
        height: 110px;
        background-color: #0097FF;
        display: flex;
        align-items: center;
    }
    .myNav {
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .navRight {
        display: flex;
    }
    .navRight img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .navCentre {
        margin-left: 20px;
    }
    .navCentre h1 {
        font-size: 22px;
        font-weight: 900;
        color: #F9FDFF;
        margin-bottom: 10px;
    }
    .navCentre span {
        font-size: 14px;
        font-weight: 900;
        color: #F9FDFF;
    }
    .navLeft span {
        font-size: 18px;
        font-weight: 900;
        color: #DFF0FF;
    }
</style>