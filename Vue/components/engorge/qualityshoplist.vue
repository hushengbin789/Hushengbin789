<template>
  <div>
    <section class="index-container">
      <div class="index-shopInfo">
        <!-- 左侧图片 -->
        <div class="logo_container">
          <img src="../../assets/1p.png" alt />
        </div>
        <!-- 右侧内容 -->
        <!-- 第一行，品牌 -->
        <div class="index_main" >
          <div class="index_shopname" @click="$router.push('/shop')">
            <i>品牌</i>
            <span>菜鸟黄焖鸡</span>
          </div>
          <!-- 第二行，星级 -->
          <div class="index-rateWrap">
            <div>
              <!-- <starLevel :rating="restaurant.rating"/> -->
              <!-- <span class="rate">{{restaurant.rating}}</span> -->
              <span>月售790单</span>
            </div>
            <div class="delivery" >
              <span class="icon-hollow">蜂鸟专送</span>
            </div>
          </div>
          <!-- 第三行，配送 -->
          <div class="index-moneylimit">
            <div>
              <span>￥15起送</span>
              |
              <span>配送费￥0.6</span>
            </div>
            <div class="index-distanceWrap">
              <span>2.65km</span>
              |
              <span>40分钟</span>
            </div>
          </div>
          <!-- 第四行，口碑 -->
          <div class="index-status">
            <div>
              <span>川湘菜</span>
            </div>
            <div>
              <span>品质联盟</span>
              <span>
                <img
                  src="https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/"
                  alt
                />
                <span>口碑人气好店</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
//   name: "Homeshoplist",
  //   props: {
  //     restaurant: {}
  //   }
//   data() {
//     return {
//       list: [{ text: "综合排序" }, { text: "距离最近" }]
//     };
//   }
};
</script>

<style scoped>
.index-container {
    background: #fff;
    color: #666;
    padding: 4vw 0;
    border-bottom: 0.133333vw solid #eee;
}
.index-shopInfo {
    display: flex;
    justify-content: flex-start;
    padding: 0 2.666667vw;
    align-items: stretch;
}
.logo_container {
    width: 17.333333vw;
    height: 17.333333vw;
}
.logo_container img {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 0.133333vw solid rgba(0, 0, 0, 0.08);
    border-radius: 0.533333vw;
}
.index_main {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    flex-direction: column;
    padding-left: 2.666667vw;
    font-size: 0.2rem;
    flex-grow: 1;
}
.index_shopname {
    align-items: center;
    color: #333;
    font-weight: 700;
    font-size: 0.9rem;
}
.index_shopname i {
    background: #ffe800;
    margin-right: 1.333333vw;
    padding: 0.266667vw 0.666667vw;
    text-align: center;
    white-space: nowrap;
    font-size: 0.6rem;
}
.index_shopname span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.index-rateWrap {
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: space-between;
}
.index-rateWrap > div:nth-of-type(1) > span:nth-of-type(1) {
  color: #666;
  padding: 0.4rem 0;
  list-style: none;
  font-size: 0.793333rem;
}
.index-rateWrap .rate {
  margin-right: 1.066667vw;
}
.index-moneylimit {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.index-moneylimit .index-distanceWrap {
  color: #999;
}
.delivery {
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  margin-left: 1.066667vw;
}
.delivery .icon-hollow {
  color: #fff;
  background-color: #2395ff;
  padding: 2px;
  box-sizing: border-box;
}
.index-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.index-status img {
  width: 0.666667rem;
  height: 0.66667rem;
  color: #e8470b;
}
.mint-loadmore {
  height: calc(100% - 95px);
  overflow: auto;
}
</style>
