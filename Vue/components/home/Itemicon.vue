<template>
  <!-- 分类按钮 -->
  <div class="entries">
    <mt-swipe :auto="0" class="entries">
      <mt-swipe-item v-for="(entry,index) in entries" :key="index" class="item-overflow">
        <div class="itemfood" v-for="(item,i) in entry" :key="i">
          <div class="img_item">
            <img :src="item.image" alt />
          </div>
          <span>{{item.name}}</span>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: {
    entries: Array
  }
};
</script>

<style scoped>
/* 分类按钮 */
.entries {
  background: #ffffff;
  width: 100%;
  height: 12rem;
  text-align: center;
  /* display: flex; */
  overflow: hidden;
  text-align: center;
}
.itemfood {
  width: 20%;
  float: left;
  position: relative;
  margin-top: 1.5rem;
}
.itemfood .img_item {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
}
.img_item img {
  width: 100%;
  height: 100%;
}
.itemfood span {
  display: block;
  color: #666;
  font-size: 0.72rem;
}
</style>
