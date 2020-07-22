## vue 高级功能
主要可以分为4part：

- 过渡
- 自定义指令
- mixins
- 插件
### 过渡
![img](https://upload-images.jianshu.io/upload_images/3378252-991861f254bf9996.png?imageMogr2/auto-orient/strip|imageView2/2/w/610/format/webp)

transition 是vue提供的内置的组件

过渡 可以分为2种过渡：css过渡 和 js过渡

### css 过渡
![img](https://upload-images.jianshu.io/upload_images/3378252-acd39a4fe9cb3c27.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

![img](https://upload-images.jianshu.io/upload_images/3378252-415718546a29195a.png?imageMogr2/auto-orient/strip|imageView2/2/w/850/format/webp)

![img](https://upload-images.jianshu.io/upload_images/3378252-de51b189b7d3b096.png?imageMogr2/auto-orient/strip|imageView2/2/w/508/format/webp)
在vue中，有时候会出现一种诡异的情况，当几个过渡的标签名都一样的时候，它可能无法进行过渡，比如，这里，如果标签都为p的时候，它是没有动画效果的，这时候，我们需要在每一个p标签中加一个key。
![img](https://upload-images.jianshu.io/upload_images/3378252-49ec59bda90596df.png?imageMogr2/auto-orient/strip|imageView2/2/w/758/format/webp)

### js过渡
![img](https://upload-images.jianshu.io/upload_images/3378252-ac9506d9c23b61f5.png?imageMogr2/auto-orient/strip|imageView2/2/w/962/format/webp)
![img](https://upload-images.jianshu.io/upload_images/3378252-f790d97c6a5753fc.png?imageMogr2/auto-orient/strip|imageView2/2/w/846/format/webp)
### 参考官网api文档
![img](https://upload-images.jianshu.io/upload_images/3378252-7b7adada5f9eaf4f.png?imageMogr2/auto-orient/strip|imageView2/2/w/748/format/webp)

![img](https://upload-images.jianshu.io/upload_images/3378252-0ea68235604a4849.png?imageMogr2/auto-orient/strip|imageView2/2/w/738/format/webp)
### 自定义指令
自定义指令：顾名思义，就是自己去写一个指令。分为2种：

- 局部的自定义指令
- 全局的自定义指令
如何设置自定义指令？
通过directives
![img](https://upload-images.jianshu.io/upload_images/3378252-c920f6b2191a25ce.png?imageMogr2/auto-orient/strip|imageView2/2/w/714/format/webp)
然后用v-xx，eg：v-color
上面这种是使用在component中的指令。接下来讲讲全局性的指令。
这是全局指令：

![img](https://upload-images.jianshu.io/upload_images/3378252-7625d08abe27b116.png?imageMogr2/auto-orient/strip|imageView2/2/w/908/format/webp)
![img](https://upload-images.jianshu.io/upload_images/3378252-a676653e65be1643.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

![img](https://upload-images.jianshu.io/upload_images/3378252-6820afcfe6d4f3cc.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)
![img](https://upload-images.jianshu.io/upload_images/3378252-ffc25862a689a53d.png?imageMogr2/auto-orient/strip|imageView2/2/w/756/format/webp)
### 插件
插件其实是我们经常用到的东西，我们可以这样使用插件。

首先，在根目录下找到package.json文件。
tnpm i xxx --save
![img](https://upload-images.jianshu.io/upload_images/3378252-330cc97369e7829e.png?imageMogr2/auto-orient/strip|imageView2/2/w/838/format/webp)
![img](https://upload-images.jianshu.io/upload_images/3378252-06e3eaf589e37d0d.png?imageMogr2/auto-orient/strip|imageView2/2/w/694/format/webp)

很多插件在awesome-vue中可以找到

介绍几个 autoprefixer 是你在写css3的时候，如果存在浏览器兼容性问题，它会自动给你补全

### 单文件组件和vue-cli
vue-cli主要是用于初始化一个vue项目

vue-cli 是官方提供的脚手架工具
## 步骤 安装
![img](https://upload-images.jianshu.io/upload_images/3378252-95c221c57a9e793b.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

