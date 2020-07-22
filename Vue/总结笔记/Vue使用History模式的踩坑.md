##Vue使用History模式的踩坑

####Vue的History模式和Hash模式的区别
简单说Hash模式是会带有#号的，浏览器向服务端发送请求时，只会把#前的链接发送给服务端，所以后端同学并不需要处理，并且页面可以刷新不会返回404之类的恶心页面。是不是感觉很方便呢~

但是这个#号往往会给我们来带一些奇怪的bug，比如生成二维码的时候会自动过滤掉#后面的参数啊，微信登录，已经分享的时候都会把#后面的参数或者路径都过滤掉，这样我们就很不方便了！！！！ 好难受的~~

History模式跟Hash最大的区别就是没有# 并且请求服务器的时候发送一整条url 搞到服务器不认识 报错404 就是这么恶心，所以需要后端同学配合一下 
解决history模式下打包空白和刷新404的问题
这里后端同学配置之后，就相当于在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面

我的后端是用Apache
所以
```

<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /static/index.html [L]  //这里需要改成基础路径 （）
</IfModule>
```
***就像这样 /static/index.html***

提醒下
后端同学这样设置后，将无法收到404的页面，所以需要前端另外做一个404的页面 并且这样匹配一下
---
---
```
export default new Router({
    mode: 'history',
    base: '/static',  // 还有一种情况就是打包后是空白的情况，f12之后什么报错都没有的  
    说明你的路径不正确，可以想一下当前项目是否放在了根目录里面，如果不是可以加上这个基准目录
    
    scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    },
    routes: [
    // 404页面
        {
            path: '*',  // * 表示上面路径匹配不到的都显示这个页面
            name: 'NotFoundComponent',
            component: NotFoundComponent
        }
    ]
})
	
```
