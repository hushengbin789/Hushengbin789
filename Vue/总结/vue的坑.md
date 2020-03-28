## 一 、vue安装的坑
### 报错时的常见问题

1、cnpm install 模块名 –save-dev(关于环境的，表现为npm run dev 启动不了)cnpm install 模块名 –save(关于项目的，比如main.js，表现为npm run dev 成功之后控制台报错)比如escape-string-regexp、strip-ansi、has-ansi、is-finite、emojis-list/

2、报如下错，表示端口错误，关掉相关页面，重新启动！！！
![img](https://images2017.cnblogs.com/blog/1294633/201712/1294633-20171211142359227-1195447846.png)

 3、启动项目的时候会出出现加载那些文件进程，这时候可以通过设置package.json文件

![img](https://images2017.cnblogs.com/blog/1294633/201712/1294633-20171211154218571-1946148567.png)
4、打包编译（cnpm  run dev），只需要提交dist文件
![img](https://img2018.cnblogs.com/blog/1294633/201809/1294633-20180905173052937-1031922670.png)

### 二、swiper安装的坑

1.swiper 安装
```
npm install swiper --save
```
2.然后在static引入样式

3  .vue文件引入
```
require('../../../static/swiper.min.css')
import Swiper from 'swiper'   //用npm安装的，要用的时候，需要用import引入！！！！！！
```
```
mounted (){
    setTimeout(() => {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
        })
    }, 400)
},
```
注意在vue中需要用setTimeout(function(){},400),不然swiper不会自己轮播！！！！！

### 三、进行双向数据绑定的时候，使用false来控制显示隐藏，发现失效，经检查发现，是因为在切换的时候，给false和true加双引号了，以至于赋值的是赋值string类型而不是boolen类型
![img](https://images2017.cnblogs.com/blog/1294633/201712/1294633-20171215155603324-569104537.png)
打印出来
![img](https://images2017.cnblogs.com/blog/1294633/201712/1294633-20171215155619715-1725584345.png)
isActive要是布尔值，字符串就会失效
![img](https://images2017.cnblogs.com/blog/1294633/201712/1294633-20171215155646590-1525985235.png)

### 四、在进行父子组件相互通讯的时候，利用布尔值控制不同元素的显示隐藏，值得注意的是父组件传给子组件的布尔值
![img](https://images2018.cnblogs.com/blog/1294633/201803/1294633-20180301153431796-1741671016.png)
子组件接收的时候是限制布尔值，所以这时候父组件这边传过来的是布尔值，要是不传或者所传不是布尔值类型，则子组件使用的是默认值，当所传不是布尔值是会警告！！！

父组件异步获取的数据，想传递给子组件使用，然后在子组件中获取数据，会报如下的错误
![img](https://images2018.cnblogs.com/blog/1294633/201803/1294633-20180309112223963-588130470.png)
解析：子组件的html中的{{childData}}的值会随着父组件的值而改变，但是created里面的却不会发生改变(生命周期问题)

http://www.jb51.net/article/117447.htm
### 五、在<router-link></router-link>中使用v-for="(item ,index) in list"进行循环时，需要注意加：:key=“index”,不然会出现警告！！
```
<router-link  v-for="(item ,index) in list" :key="index" ></router-link>
```
### 六、路由跳转错误

跳转路由后，发现http://localhost:8085/mall/detail/202路径会自动跳转http://localhost:8085空白页，排查原因后，发现detail中引入的组件报错

### 七、图片引用错误

在vue中的html中的img中的src不可以直接设置为变量，在data里面直接引路径，只能通过import的形式引入,值得注意的是，引用这个方式的时候src是变量需要加“：”，不然会报错！！！！！
```
<img :src="imgSrc">

import imgSrc  from  '../../assets/consult/head1.png '

data() {
    return {
            imgSrc:imgSrc
        }
}
```
### 八：用for循环出来的列表，在设置列表中的元素的动态属性时，需要加bind属性“：”，不然动态属性设置不出来
![img](https://images2018.cnblogs.com/blog/1294633/201805/1294633-20180529101947201-861907593.png  )

### 九：父组件ajax异步更新数据，子组件props获取不到

应用场景

当父组件  axjos  获取数据，子组件使用  props  接收数据时，执行  mounted  的时候  axjos  还没有返回数据，而且  mounted 只执行一次，这时   props  中接收的数据为空

解决方案：在对应组件中判断数据的长度
```
<recommend :recommend="recommendList" v-if="recommendList.length"></recommend>
```
### 十：当出现如下警告时
```
WARNING in ./node_modules/api/activity.js
There are multiple modules with names that only differ in casing.
```
排查原因:（这个是表示大小写写错了）
1 、在引用组件时，路径大小写不对也会造成此报错，看例子：
错误写法：
```
import Footer from '../components/Shared/footer.vue'
```
正确写法：
```
import Footer from '../components/shared/footer.vue'
```