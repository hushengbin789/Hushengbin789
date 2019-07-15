<template>
  <div>
    <div class="search-form" @submit.prevent="search">
      <div class="box-search">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="输入商家，商品名称" v-model="key_word" />
        <i class="fa fa-times delete" v-show="key_word" @click="deleteSearch"></i>
      </div>
      <button class="btn" type="submit" @click="searchHadle">搜索</button>
    </div>
    <!--    如果有搜索结果 显示 结果-->
    <section class="search-suggestion" v-if="searchInfo.length">
      <ul>
        <li class="list-item" v-for="(item,index) in searchInfo" :key="index">
          <a class="search-suggestion-item">
            <span class="item-search">
              <i class="fa fa-search"></i>
              <span class="match-word">{{key_word}}</span>
              {{item.name || filterMatch}}
            </span>
            <span class="result-count"></span>
          </a>
        </li>
      </ul>
    </section>

    <!--    如果没有搜索结果 显示：查找“搜索词”-->
    <section class="search-suggestion" v-else>
      <ul v-if="key_word">
        <li class="list-item">
          <a class="search-suggestion-item">
            <span class="item-search">
              <i class="fa fa-search"></i>
              查找
              <span class="match-word">{{key_word}}</span>
            </span>
            <span class="result-count"></span>
          </a>
        </li>
      </ul>
    </section>
    <div class="search-hot" v-show="!key_word">
      <div class="hot-title">热门搜索</div>
      <section class="hot-list">
        <ul>
          <li class="hot-list-item">小龙虾</li>
          <li class="hot-list-item">砂锅</li>
          <li class="hot-list-item">小竹签烤肉</li>
          <li class="hot-list-item">万达影城</li>
          <li class="hot-list-item">小竹签烤肉</li>
          <li class="hot-list-item">万达影城</li>
          <li class="hot-list-item">小竹签烤肉</li>
          <li class="hot-list-item">万达影城</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-form",
  data() {
    return {
      key_word: "",
      result: "",
      searchInfo: "",
      keys: [],
      cityInfo: "",
      allcities: [],
      cityX: ""
    };
  },
  watch: {
    key_word() {
      this.keyWordChange();
    }
  },
  methods: {
    keyWordChange() {
      // this.$axios("https://elm.cangdu.org/v1/cities?type=group").then(res => {
      //   // console.log(res.data);
      //   this.keys = Object.keys(res.data);
      //   this.keys.sort();
      //   // console.log(this.keys);
      //   this.cityInfo = Object.keys.longitude;
      //   console.log(this.cityInfo);
      // });
      //   this.cityInfo.forEach(key => {
      //     console.log(key);
      //     this.key.forEach(XY => {
      //       this.cityX = XY.longitude;
      //       console.log(this.cityX);
      //     });
      //   });
      this.$axios(
        `https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=${this.key_word}`
      )
        .then(res => {
          console.log(res);
          // console.log(res.data);
          //   this.result = res.data;
          this.searchInfo = res.data;
          console.log(this.result);
        })
        .catch(err => {
          this.result = "";
          this.searchInfo = "";
        });
    },
    searchHadle() {
      if (!this.key_word) return;
    },
    deleteSearch() {
      this.key_word = "";
      // this.noMatch = false;
    }
  },
  filters: {
    filterMatch(value) {
      let str = value;
      let num = this.key_word.length;
      // let pos = str.indexOf(this.key_word);
      let strNew = str.slice(num);
      return strNew;
    }
  }
};
</script>

<style scoped>
@import "../../../static/theme/1/Search/search-form/index.css";
@import "../../../static/theme/1/Search/search-hot/index.css";
/*美团*/
/*.search-form {*/
/*    margin-top: .2rem;*/
/*    margin-bottom: .2rem;*/
/*    height: .8rem;*/
/*    position: relative;*/
/*    padding: 0 0.2rem;*/
/*}*/
/*.box-search {*/
/*    vertical-align: middle;*/
/*    position: relative;*/
/*    margin-right: 1.4rem;*/
/*    border-radius: .06rem;*/
/*    border: 1px #CCC solid;*/
/*    background: #FFF;*/
/*    height: .8rem;*/
/*    line-height: .8rem;*/
/*    padding: 0 .7rem 0 .7rem;*/
/*    -webkit-box-sizing: border-box;*/
/*}*/
/*!*搜索按钮*!*/
/*.box-search>i:nth-of-type(1){*/
/*    display: inline-block;*/
/*    position: absolute;*/
/*    left: .2rem;*/
/*    font-size: .4rem;*/
/*    color: #999;*/
/*    vertical-align: middle;*/
/*    font-style: normal;*/
/*    height: .8rem;*/
/*    line-height: .8rem;*/
/*}*/
/*!*input框*!*/
/*.box-search>input {*/
/*    width: 100%;*/
/*    border: none;*/
/*    background: rgba(255, 255, 255, 0);*/
/*    outline-style: none;*/
/*    display: inline-block;*/
/*    line-height: .28rem;*/
/*    height: 100%;*/
/*    font-size: .28rem;*/
/*    padding: 0;*/
/*}*/

/*!*删除按钮*!*/
/*.box-search .delete {*/
/*    display: inline-block;*/
/*    position: absolute;*/
/*    right: .2rem;*/
/*    font-size: .4rem;*/
/*    color: #999;*/
/*    vertical-align: middle;*/
/*    font-style: normal;*/
/*    height: .8rem;*/
/*    line-height: .8rem;*/
/*}*/

/*!*搜索按钮*!*/
/*.btn {*/
/*    border: 0;*/
/*    position: absolute;*/
/*    right: 0.2rem;*/
/*    top: 0;*/
/*    width: 1.2rem;*/
/*    height: 100%;*/
/*    background-color: #06c1ae;*/
/*    color: #fff;*/
/*    border-radius: .06rem;*/
/*    font-size: .28rem;*/
/*    cursor: pointer;*/
/*}*/
/*!*输入关键词 下拉列表*!*/
/*.search-suggestion{*/
/*    background-color: #fff;*/
/*    border-top: 1px solid #ccc;*/
/*}*/
/*.list-item {*/
/*    height: 0.8rem;*/
/*    line-height: 0.8rem;*/
/*    padding: 0 0.28rem;*/
/*    background-color: #FDFDFC;*/
/*    border-bottom: 1px solid #ccc;*/
/*    color: #999999;*/
/*}*/
/*.list-item>.search-suggestion-item {*/
/*    display: flex;*/
/*    list-style: none;*/
/*    color: #999999;*/
/*    position:relative;*/
/*    font-size: .28rem;*/
/*    height: 100%;*/
/*    text-decoration: none;*/
/*    outline: 0;*/
/*    justify-content: space-between;*/
/*}*/
/*.item-search {*/
/*    display: block;*/
/*    margin-right: 2rem;*/
/*}*/
/*.item-search>i:nth-of-type(1){*/
/*    display: inline-block;*/
/*    margin-right: 0.14rem;*/
/*    font-size:.3rem;*/
/*}*/
/*.item-search > .match-word {*/
/*    color: #06c1ae;*/
/*}*/
/*.result-count {*/
/*   */
/*}*/

/*!*饿了吗*!*/
/*.search-form {*/
/*    margin-top: .2rem;*/
/*    margin-bottom: .2rem;*/
/*    height: .8rem;*/
/*    position: relative;*/
/*    padding: 0 0.2rem;*/
/*}*/
/*.box-search {*/
/*    vertical-align: middle;*/
/*    position: relative;*/
/*    margin-right: 1.4rem;*/
/*    border-radius: .06rem;*/
/*    border: 1px #CCC solid;*/
/*    background: #FFF;*/
/*    height: .8rem;*/
/*    line-height: .8rem;*/
/*    padding: 0 .7rem 0 .7rem;*/
/*    -webkit-box-sizing: border-box;*/
/*}*/
/*!*搜索图标*!*/
/*.box-search>i:nth-of-type(1){*/
/*    display: inline-block;*/
/*    position: absolute;*/
/*    left: .2rem;*/
/*    font-size: .4rem;*/
/*    color: #999;*/
/*    vertical-align: middle;*/
/*    font-style: normal;*/
/*    height: .8rem;*/
/*    line-height: .8rem;*/
/*}*/
/*!*input框*!*/
/*.box-search>input {*/
/*    width: 100%;*/
/*    border: none;*/
/*    background: rgba(255, 255, 255, 0);*/
/*    outline-style: none;*/
/*    display: inline-block;*/
/*    line-height: .28rem;*/
/*    height: 100%;*/
/*    font-size: .28rem;*/
/*    padding: 0;*/
/*}*/

/*!*删除按钮*!*/
/*.box-search .delete {*/
/*    display: inline-block;*/
/*    position: absolute;*/
/*    right: .2rem;*/
/*    font-size: .4rem;*/
/*    color: #999;*/
/*    vertical-align: middle;*/
/*    font-style: normal;*/
/*    height: .8rem;*/
/*    line-height: .8rem;*/
/*}*/

/*!*搜索按钮*!*/
/*.btn {*/
/*    border: 0;*/
/*    position: absolute;*/
/*    right: 0.2rem;*/
/*    top: 0;*/
/*    width: 1.2rem;*/
/*    height: 100%;*/
/*    color: #333;*/
/*    background: #fff;*/
/*    font-weight: 700;*/
/*    border-radius: .06rem;*/
/*    font-size: .32rem;*/
/*    cursor: pointer;*/
/*}*/
/*!*输入关键词 下拉列表*!*/
/*.search-suggestion{*/
/*    background-color: #fff;*/
/*    border-top: 1px solid #ccc;*/
/*}*/
/*.list-item {*/
/*    height: 0.8rem;*/
/*    line-height: 0.8rem;*/
/*    padding: 0 0.28rem;*/
/*    border-bottom:.1px solid #ccc;*/
/*    color: #999999;*/
/*}*/
/*.list-item>.search-suggestion-item {*/
/*    display: flex;*/
/*    list-style: none;*/
/*    color: #666;*/
/*    position:relative;*/
/*    font-size: .28rem;*/
/*    height: 100%;*/
/*    text-decoration: none;*/
/*    outline: 0;*/
/*    justify-content: space-between;*/
/*}*/
/*.item-search {*/
/*    display: block;*/
/*    margin-right: 2rem;*/
/*}*/
/*.item-search>i:nth-of-type(1){*/
/*    display: inline-block;*/
/*    margin-right: 0.14rem;*/
/*    font-size:.3rem;*/
/*}*/
/*.item-search > .match-word {*/
/*    color: #ccc;*/
/*}*/
/*.result-count {*/

/*}*/
</style>
