# Vue.js实现tab切换效果

#### 利用Vue实现简易tab切换效果

###### 1.1 在我们平时浏览网站的时候，经常看到的特效有图片轮播、导航子菜单的隐藏、tab标签的切换等等。这段时间学习了vue后，开始要写出一些简单的特效。

###### 1.2 实现思路是点击上方的标题，下方的内容随之发生改变，上方和下方用的是两个块，是兄弟节点，所以需要点击tab标题和下方内容一一对应，基予两个模块若下标相同是一个内容实现的。

###### 1.3 tab切换第一步先要把HTML写好，这个第一步很关键，主要分为两块结构

```html
<div id="app">
        <ul class="tab-tilte">
            <li>标题一</li>
            <li>标题二</li>
            <li>标题三</li>
            <li>标题四</li>
        </ul>
        <div class="tab-content">
            <div>内容一</div>
            <div>内容二</div>
            <div>内容三</div>
            <div>内容四</div>
        </div>
 </div>
```

```css
<style type="text/css">
        ul li {

            margin: 0;
            padding: 0;
            list-style: none;
        }
        #app {
            width: 600px;
            height: 400px;
            margin: 0 auto;
            border: 1px solid #ccc;
        }
        .tab-tilte{
            width: 90%;
        }
        .tab-tilte li{
            float: left;
            width: 25%;
            padding: 10px 0;
            text-align: center;
            background-color:#f4f4f4;
            cursor: pointer;
        }
     /* 点击对应的标题添加对应的背景颜色 */
        .tab-tilte .active{
            background-color: #09f;
            color: #fff;
        }
        .tab-content div{
            float: left;
            width: 25%;
            line-height: 100px;
            text-align: center;
        }
    </style>
```

###### 1.5tab切换第三步引入vue实现

```html
<body>
    <div id="app">
        <ul class="tab-tilte">
            <li @click="cur=0" :class="{active:cur==0}">标题一</li>
            <li @click="cur=1" :class="{active:cur==1}">标题二</li>
            <li @click="cur=2" :class="{active:cur==2}">标题三</li>
            <li @click="cur=3" :class="{active:cur==3}">标题四</li>
        </ul>
        <div class="tab-content">
            <div v-show="cur==0">内容一</div>
            <div v-show="cur==1">内容二</div>
            <div v-show="cur==2">内容三</div>
            <div v-show="cur==3">内容四</div>
        </div>
    </div>
    <script src="./js/vue.js" type="text/javascript"></script>
    <script type="text/javascript">
        var app = new Vue({

            el: "#app",
            data: {

                cur:0 //默认选中第一个tab

            }
        });    
    </script>
</body>

```

效果图：

![](E:\图片\效果图.png)



###### 1.6tab切换效果改进与优化

（1） 以上代码看起来似乎很简单容易懂，而且效果也能实现，但不够灵活。我们可以发现如果标题和内容同时增多我们要不停的添加cur的索引值，因此我们有必要改进一下代码的写法。
 （2）利用vue提供的v-for指令遍历得到索引和值 如下所示：

```vue
<div id="app">
    <!-- 推荐这种写法-->
    <ul class="tab-tit">
        <li v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}">{{title}}</li>
    </ul>
    <div class="tab-content">
        <div v-for="(m,index) in tabMain" v-show="cur==index">{{m}}</div>
    </div>
</div>
    <script type="text/javascript">
        window.onload = function(){
           var app = new Vue({
            el:'#app',
            data:{
                tabTitle: ['标题一', '标题二', '标题三', '标题四'],
                tabMain: ['内容一', '内容二', '内容三', '内容四'],
                cur: 0 //默认选中第一个tab
            }
        })
    }
    </script>

```

