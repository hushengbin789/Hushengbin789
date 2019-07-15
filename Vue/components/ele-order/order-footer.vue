<template>
    <div>  
        <footer id="footer" class="action-bar">
            <span>¥23.16</span>
            <small>
          ｜已优惠¥16.14
             </small>
        <button class="submitbtn">去支付 </button>
     </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.action-bar{
    height:2.4rem;
    line-height: 2.4rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #3c3c3c;
    z-index: 2;
}
.action-bar span{
    color: #fff;
    font-size: .56rem;
    line-height: 1.2rem;
    padding-left: .26rem;
    padding-left: 2.67vw;
    vertical-align: middle;
    font-weight: 600;
}
.action-bar small{
    color: #999;
    font-size: .32rem;
    vertical-align: middle;
}
.action-bar .submitbtn{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    min-width: 5rem;
    background: #00e067;
    padding: 0 .14rem;
    padding: 0 1.4vw;
    border: none;
    color: #fff;
    font-size: 1rem;
}
</style>
