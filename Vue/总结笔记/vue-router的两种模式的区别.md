## vue-router的两种模式的区别
众所周知，vue-router有两种模式，hash模式和history模式，这里来谈谈两者的区别。

### hash模式
hash模式背后的原理是onhashchange事件,可以在window对象上监听这个事件:
```
window.onhashchange = function(event){
 
    console.log(event.oldURL, event.newURL);
    let hash = location.hash.slice(1);
    document.body.style.color = hash;
 
}
```
上面的代码可以通过改变hash来改变页面字体颜色，虽然没什么用，但是一定程度上说明了原理。

更关键的一点是，因为hash发生变化的url都会被浏览器记录下来，从而你会发现浏览器的前进后退都可以用了，同时点击后退时，页面字体颜色也会发生变化。这样一来，尽管浏览器没有请求服务器，但是页面状态和url一一关联起来，后来人们给它起了一个霸气的名字叫前端路由，成为了单页应用标配。
![111](http://images2017.cnblogs.com/blog/1016471/201709/1016471-20170907211959179-793927527.gif)
网易云音乐，百度网盘就采用了hash路由，看起来就是这个样子:
```
http://music.163.com/#/friend
https://pan.baidu.com/disk/home#list/vmode=list
```
### history路由
随着history api的到来，前端路由开始进化了,前面的hashchange，你只能改变#后面的url片段，而history api则给了前端完全的自由
history api可以分为两大部分，切换和修改，参考MDN

### 切换历史状态
包括back,forward,go三个方法，对应浏览器的前进，后退，跳转操作，有同学说了，(谷歌)浏览器只有前进和后退，没有跳转，嗯，在前进后退上长按鼠标，会出来所有当前窗口的历史记录，从而可以跳转(也许叫跳更合适)：
```
history.go(-2);//后退两次
history.go(2);//前进两次
history.back(); //后退
hsitory.forward(); //前进
```
### 修改历史状态
包括了pushState,replaceState两个方法,这两个方法接收三个参数:stateObj,title,url
```
history.pushState({color:'red'}, 'red', 'red'})
 
window.onpopstate = function(event){
    console.log(event.state)
    if(event.state && event.state.color === 'red'){
        document.body.style.color = 'red';
    }
}
 
history.back();
 
history.forward();
```
通过pushstate把页面的状态保存在state对象中，当页面的url再变回这个url时，可以通过event.state取到这个state对象，从而可以对页面状态进行还原，这里的页面状态就是页面字体颜色，其实滚动条的位置，阅读进度，组件的开关的这些页面状态都可以存储到state的里面。

### history模式怕啥
通过history api，我们丢掉了丑陋的#，但是它也有个毛病：
不怕前进，不怕后退，就怕刷新，f5，（如果后端没有准备的话）,因为刷新是实实在在地去请求服务器的,不玩虚的。

在hash模式下，前端路由修改的是#中的信息，而浏览器请求时是不带它玩的，所以没有问题.但是在history下，你可以自由的修改path，当刷新时，如果服务器中没有相应的响应或者资源，会分分钟刷出一个404来。

