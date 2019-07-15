<template>
  <header class="header">
    <div class="header-fixed">
      <div class="arrow-left">
        <i class="fa fa-angle-left" @click="$router.go(-1)"></i>
      </div>
      <h1 class="address-title">{{title}}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "address-header",
  props: ["title"]
};
</script>

<style scoped>
.header {
  height: 3rem;
  line-height: 3rem;
  background: #2395ff;
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 1.2rem;
}
.arrow-left {
  width: 3rem;
  display: flex;
  justify-content: center;
  font-size: 2rem;
}
.address-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
}
</style>
