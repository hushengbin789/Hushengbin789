<template>
    <div>
        <div class="elmMain">
            <div class="site">
                <div class="elmSite">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>我的地址</span>
                </div>
                <div class="siteRight">
                    <span> > </span>
                </div>
            </div>
        </div>
<!--    第二行    -->
        <div class="elmMain">
            <div class="site">
                <div class="elmSite">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>我的地址</span>
                </div>
                <div class="siteRight">
                    <span> > </span>
                </div>
            </div>
            <div class="site">
                <div class="elmSite">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>我的地址</span>
                </div>
                <div class="siteRight">
                    <span> > </span>
                </div>
            </div>
        </div>
<!--    第三行    -->
        <div class="elmMain">
            <div class="site">
                <div class="elmSite">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>我的地址</span>
                </div>
                <div class="siteRight">
                    <span> > </span>
                </div>
            </div>
            <div class="site">
                <div class="elmSite">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>我的地址</span>
                </div>
                <div class="siteRight">
                    <span> > </span>
                </div>
            </div>
            <div class="site">
                <div class="elmSite">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>我的地址</span>
                </div>
                <div class="siteRight">
                    <span> > </span>
                </div>
            </div>
        </div>
        <div class="yingsi">
            <span>隐私政策</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "elmMain"
    }
</script>

<style scoped>
    .elmMain {
        width: 100%;
        border-top: 12px solid #F5F5F5;
    }
    .site {
        display: flex;
        width: 90%;
        margin: 0 auto;
        align-items: center;
        line-height: 45px;
        justify-content: space-between;
    }
    .elmSite i {
        font-size: 18px;
        color: #4AA5F0;
    }
    .elmSite span {
        font-size: 16px;
        color: #333333;
        margin-left: 8px;
    }
    .siteRight span {
        font-weight: 900;
        color: #C4C4C4;
    }
    .yingsi {
        width: 100%;
        display: flex;
        height: 120px;
        justify-content: center;
        background-color: #F5F5F5;
    }
    .yingsi span {
       line-height: 70px;
        font-size: 16px;
        color: #5AACF0;
    }

</style>