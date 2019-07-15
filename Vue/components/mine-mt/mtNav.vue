<template>
    <div class="mtNav">
        <div class="navTop">
            <div class="navLeft">
                <img src="https://fuss10.elemecdn.com/2/7c/43ec114eae35cdcee08de1d885c99jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/" alt="">
                <h1>肖楠丶</h1>
            </div>
            <div class="navRight">
                <i class="fa fa-cog" aria-hidden="true"></i>
                <i class="fa fa-headphones" aria-hidden="true"></i>
            </div>
        </div>
        <div class="navBottom">
            <div class="navList">
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
                <span>收藏</span>
            </div>
            <div class="navList">
                <i class="fa fa-xing-square" aria-hidden="true"></i>
                <span>评价</span>
            </div>
            <div class="navList">
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
                <span>收藏</span>
            </div>
            <div class="navList">
                <i class="fa fa-xing-square" aria-hidden="true"></i>
                <span>评价</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mtNav"
    }
</script>

<style scoped>
    .mtNav {
        width: 100%;
        height: 220px;
        background-color: #FFC501;
    }
    .navTop {
        width: 90%;
        margin: 0 auto;
        display: flex;
        height: 110px;
        align-items: center;
        justify-content: space-between;
    }
    .navLeft {
        display: flex;
        align-items: center;
    }
    .navLeft img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
    .navLeft h1 {
        font-size: 22px;
        font-weight: 900;
        margin-left: 20px;
        color: #27241A;
    }
    .navRight i:nth-child(1) {
        font-size: 26px;
        margin-right: 20px;
        color: #27241A;
    }
    .navRight i:nth-child(2) {
        font-size: 26px;
        color: #27241A;
    }
    .navBottom {
        width: 100%;
        margin: 0 auto;
        display: flex;
        height: 110px;
        align-items: center;
        justify-content: space-around;
    }
    .navList {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .navList i {
        font-size: 34px;
    }
</style>