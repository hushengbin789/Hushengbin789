什么是localStorage
```
在HTML5中，新加入了一个localStorage特性，这个特性主要是用来作为本地存储来使用的，解决了cookie存储空间不足的问题(cookie中每条cookie的存储空间为4k)，localStorage中一般浏览器支持的是5M大小，这个在不同的浏览器中localStorage会有所不同。
```
localStorage的优势
```
1、localStorage拓展了cookie的4K限制
2、localStorage会可以将第一次请求的数据直接存储到本地，这个相当于一个5M大小的针对于前端页面的数据库，相比于cookie可以节约带宽，但是这个却是只有在高版本的浏览器中才支持的
3、localStorage与sessionStorage的唯一一点区别就是localStorage属于永久性存储，而sessionStorage属于当会话结束的时候，sessionStorage中的键值对会被清空
```
localStorage的使用
```
localStorage.getItem(key):获取指定key本地存储的值
localStorage.setItem(key,value)：将value存储到key字段
```
比如：
在A页面中先存储：
```
var imgs = obj_mainform.archivesId  //声明个变量存储下数据
localStorage.setItem('key',imgs);  //将变量imgs存储到name字段
```

在B页面中使用：
```
var naid = localStorage.getItem("key"); //获取指定key本地存储的值
```

以上就是localStorage.setItem()和localStorage.getItem()的使用方式


