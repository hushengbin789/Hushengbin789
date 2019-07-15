<template>
  <header class="navbar">
    <div class="nav-wrap-left">
      <a href>
        <i class="fa fa-angle-left"></i>
      </a>
    </div>
    <div class="nav-header h1"></div>
    <div class="nav-wrap-right">
      <a href>
        <span class="nav-btn">
          <i class></i>
        </span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "search-header",
  props: [""],
  created() {
    console.log(this._getCss("0", "search", "search-header"));
  },
  methods: {
    _getCss: function(themeNum, filename, componentName) {
      let path =
        "../../../public/theme/" +
        themeNum +
        "/" +
        filename +
        "/" +
        componentName +
        "/index.css";
      return path;
    }
  }
};
</script>

<style scoped>
@import "../../../static/theme/1/Search/search-header/index.css";
/*美团*/
/*左箭头*/
/*.navbar {*/
/*    height: 1.01rem;*/
/*    color: #fff;*/
/*    background: #06c1ae;*/
/*    border-bottom: 1px solid #21897d;*/
/*    display: -webkit-box;*/
/*    display: -ms-flexbox;*/
/*    position: relative;*/
/*}*/
/*.navbar .nav-wrap-left {*/
/*    height: 1.01rem;*/
/*    line-height: 1.01rem;*/
/*}*/
/*.nav-wrap-left a{*/
/*    display: block;*/
/*    height: 1rem;*/
/*    width: .45rem;*/
/*    line-height: 1rem;*/
/*    padding: 0 .3rem;*/
/*    font-size:0.9rem*/
/*}*/
/*.nav-wrap-left>a>i{*/
/*    !*width: .45rem;*!*/
/*    !*height: .45rem;*!*/
/*    !*vertical-align: middle;*!*/
/*    !*position: relative;*!*/
/*    color: #fff;*/
/*}*/
/*!*中间文字*!*/
/*.h1.nav-header {*/
/*    -webkit-box-flex: 1;*/
/*    -ms-flex: 1;*/
/*    font-size: .36rem;*/
/*    font-weight: 400;*/
/*    text-align: center;*/
/*    line-height: 1rem;*/
/*    margin: 0;*/
/*    text-overflow: ellipsis;*/
/*    white-space: nowrap;*/
/*    overflow: hidden;*/
/*}*/
/*!*右边图标*!*/
/*.nav-wrap-right a {*/
/*    display: inline-block;*/
/*    height: 100%;*/
/*    line-height: 1rem;*/
/*    text-align: center;*/
/*    width: .94rem;*/
/*}*/
/*.nav-btn {*/
/*    display: inline-block;*/
/*    font-size: .2rem;*/
/*    line-height: 1;*/
/*    vertical-align: middle;*/
/*    color: #fff;*/
/*}*/
/*.nav-btn>i{*/
/*    display: block;*/
/*    margin-bottom: .12rem;*/
/*    font-size: .4rem;*/
/*}   */

/*饿了吗*/
/*左箭头*/
/*.navbar {*/
/*    height: 1.01rem;*/
/*    color: #999;*/
/*    display: -webkit-box;*/
/*    display: -ms-flexbox;*/
/*    position: relative;*/
/*}*/
/*.navbar .nav-wrap-left {*/
/*    height: 1.01rem;*/
/*    line-height: 1.01rem;*/
/*}*/
/*.nav-wrap-left a{*/
/*    display: block;*/
/*    height: 1rem;*/
/*    width: .45rem;*/
/*    line-height: 1rem;*/
/*    padding: 0 .3rem;*/
/*    font-size:0.9rem*/
/*}*/
/*.nav-wrap-left>a>i{*/
/*    color: #999;*/
/*}*/

/*饿了吗*/
/*左箭头*/
/*.navbar {*/
/*    height: 1.01rem;*/
/*    color: #999;*/
/*    display: -webkit-box;*/
/*    display: -ms-flexbox;*/
/*    position: relative;*/
/*}*/
/*.navbar .nav-wrap-left {*/
/*    height: 1.01rem;*/
/*    line-height: 1.01rem;*/
/*}*/
/*.nav-wrap-left a{*/
/*    display: block;*/
/*    height: 1rem;*/
/*    width: .45rem;*/
/*    line-height: 1rem;*/
/*    padding: 0 .3rem;*/
/*    font-size:0.9rem*/
/*}*/
/*.nav-wrap-left>a>i{*/
/*    color: #999;*/
/*}*/
</style>
