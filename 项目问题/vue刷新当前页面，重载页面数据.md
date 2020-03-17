## vue刷新当前页面，重载页面数据
业务场景：在管理后台，在执行完，增，删，改，操作的时候。我们需要刷新一下页面，重载数据。在JQ中我们会用到location.reload()方法，刷新页面；在vue中，这里需要用到一个 provide / inject 这对用例。（其他方法：this.$router.go(0)，会强制刷新，出现空白页面体验不好）

这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。

实现原理就是通过控制router-view 的显示与隐藏，来重渲染路由区域，重而达到页面刷新的效果，show -> flase -> show

具体代码如下：

1.首先在我们的根组件APP.vue里面,写入刷新方法，路由初始状态是显示的
```
<template>
  <div id="app">
        <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
 
<script>
export default {
  name: 'App',
  provide (){
     return {
       reload:this.reload
     }
  },
  data(){
    return {
       isRouterAlive:true
    }
  },
  methods:{
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    }
  },
  components:{
  }
}
</script>
```
2.然后在子组件里面进行引用
![用法](https://img-blog.csdn.net/2018072716003143?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l1ZmVuZ2FvdGlhbg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

3.在执行完相应的操作，后调用reload方法
![调用reload方法](https://img-blog.csdn.net/20180727160151680?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l1ZmVuZ2FvdGlhbg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)



