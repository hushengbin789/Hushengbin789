<template>
  <!-- 本组件是city组件的子组件 -->
  <div class="area" ref="area_scroll" v-if="cityInfo">
    <div class="scroll_wrap">
      <div class="hot_wrap">
        <div class="title citylist">热门城市</div>
        <ul class="hot_city">
          <li
            @click="$emit('selecity',item)"
            v-for="(item,index) in cityInfo.hotCities"
            :key="index"
          >{{item.name}}</li>
        </ul>
      </div>
      <!-- 所有城市 -->
      <div class="city_wrap">
        <!-- 循环按字母排序的key -->
        <div class="city_content citylist" v-for="(item,index) in keys" :key="index">
          <div class="title">{{item}}</div>
          <!-- 根据字母key展示城市名 -->
          <ul>
            <!-- !-- 绑定事件将本页面通过用户选择的值显示到city组件来显示，上面的热门城市同样如此 -->
            <li
              @click="$emit('selecity',city)"
              v-for="(city,index) in cityInfo[item]"
              :key="index"
            >{{city.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="area_keys">
      <ul>
        <!-- 把下标传递到city组件 -->
        <li @click="selectkey(0)">#</li>
        <li @click="selectkey(index+1)" v-for="(items,index) in keys" :key="index">{{items}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "alphabet",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    cityInfo: {},
    keys: Array
  },
  methods: {
    initScroll() {
      this.scroll = new Bscroll(this.$refs.area_scroll, {
        click: true
      });
    },
    //页面滚动的实例化方法已经完成，但是该方法不可以在本页面调用，
    //要在city组件的数据请求地方调用cnpm install better-scroll -S 安装better-scroll依赖 解决滚动问题
    selectkey(index) {
      // console.log(index);
      // console.log(this.$refs.area_scroll.getElementsByClassName("citylist"));
      const citylist = this.$refs.area_scroll.getElementsByClassName(
        "citylist"
      );
      //根据下标滚动到相应的元素上
      let el = citylist[index];
      //滚动到相应的位置上
      this.scroll.scrollToElement(el, 250);
    }
  }
};
</script>


<style scoped>
.area {
  margin-top: 10px;
  box-sizing: border-box;
  padding: 0 16px;
  background: #fff;
  height: calc(100% - 65px);
  overflow: hidden;
}
.scroll_wrap {
  background: #fff;
  overflow: auto;
}
.title {
  color: #aaa;
  padding: 15px 0;
}
.hot_city {
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.hot_city li {
  width: 30%;
  background: #f1f1f1;
  margin: 0 10px 10px 0;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}
.city_content li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.area_keys {
  position: fixed;
  right: 0;
  top: 25%;
  color: #aaa;
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
  padding: 0 5px;
}
</style>