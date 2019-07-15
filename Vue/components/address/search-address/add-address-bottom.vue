<template>
  <div class="address-bottom">
    <i class="fa fa-plus-circle"></i>
    <div @click="$router.push('/addAddress')">{{addTitle}}</div>
  </div>
</template>

<script>
export default {
  name: "add-address-bottom",
  props: ["addTitle"]
};
</script>

<style scoped>
.address-bottom {
  position: fixed;
  height: 3rem;
  bottom: 0;
  width: 100%;
  z-index: 5;
  background: #fff;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  border-top: 0.026667rem solid #ddd;
  color: #3190e8;
  font-size: 1.1rem;
}

.address-bottom > i {
  margin-right: 0.3rem;
  font-size: 1.3rem;
}
</style>
