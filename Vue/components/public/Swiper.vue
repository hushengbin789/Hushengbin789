<template>
  <div>
    <div id="container">
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(img,index) in swipeImgs" :key="index">
          <img :src="img" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    swipeImgs: Array
  }
};
</script>

<style scoped>
.swiper {
  height: 100px;
}
.swiper img {
  width: 100%;
  height: 100px;
}
</style>
