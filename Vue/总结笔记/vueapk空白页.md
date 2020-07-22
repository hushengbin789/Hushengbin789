##vue项目打包之后页面空白解决办法

之前项目遇到个情况，npm run build打包之后上传到服务器后，index.html打开一片空白，资源都加载了，但是就是不显示。

然后百度找了原因，修改了两处地方

##一、修改 assetsPublicPath 

在config/index.js里面，有个 assetsPublicPath 属性，源码是‘/’，修改成‘./’，加个点

assetsPublicPath: '/',
二、路由模式将histroy改成hash模式，起初 mode:'history'
```
const router = new Router({
  base: '/',
  mode: 'hash',
  routes: ROUTES
})
```
那么vue-router的hash模式和histroy模式有什么区别呢？

1、hash模式url带#，histroy模式url不带#

2、hash模式解决了通过http请求来切换页面，改变路径可以直接改变页面，无需进行网络请求，这叫前端路由，在hash模式下改变的是#中的信息，

      history模式，可以前进和后退，但是不能刷新页面，刷新之后就会报错。如果后端没有对路由地址进行相应的处理，那么就会报404的错。

3、hash浏览器支持率比较好，支持低版本的浏览器，但history的方法只支持部分浏览器。

其实还有很多种情况会导致打包之后页面空白，我这里暂时只遇到这两种情况，以后遇到再更新。
