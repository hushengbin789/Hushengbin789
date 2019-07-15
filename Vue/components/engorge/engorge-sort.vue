<template>
  <div>
    <div id="min">
      <div class="min-top">
        <div class="borders"></div>

      </div>
      <div class="min-bottom">
        <div>
          <span>综合排序</span>
          <i class="fa fa-caret-down"></i>
        </div>
        <div>
          <span>距离最近</span>
        </div>
        <div>
          <span>品质联盟</span>
        </div>
        <div>
          <span>筛选</span>
          <i class="fa fa-filter"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  };
</script>

<style scoped>
  #min {
    width: 90%;
    /* height: 2rem; */
    margin: 0 auto;
    line-height: 2rem;
  }
  #min .min-top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  #min .borders {
    width: 1.25rem;
    height: 3.4rem;
    border-top: 1px solid black;
  }
  #min .min-top-two {
    width: 25%;
    text-align: center;
  }
  #min .min-bottom {
    position: sticky;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  #min .min-bottom div {
    color: #666;
    font-weight: 700;
    font-size: 0.9rem;
  }
</style>
