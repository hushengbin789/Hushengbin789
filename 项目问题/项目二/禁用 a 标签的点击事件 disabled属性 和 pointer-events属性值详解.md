## 如何禁用 a 标签的点击事件 disabled属性 和 pointer-events属性值详解

首先 ，大家要知道： a标签 是没有disable 属性的 ， 如果想用disable 禁止a标签的点击事件，也是可以实现的；往下看

### 1、a标签 要用  disable 属性，必须和  pointer-events属性一起使用  ，例子 如下：

     HTML 部分代码：

```html
<a class="praise">赞</a>
```

     JS 代码：

```javascript
$(".praise").attr("disabled",true); 

$(".praise").css("pointer-events","none");

js 缩写  一行搞定：$(".praise").attr("disabled",true).css("pointer-events","none");  
```

     

   ***总结***：这样就可以将a标签设成不可点击状态了。不过虽然是不可点击状态，当a标签任然是蓝色，所以要人为的给他添加上灰色字体。



### 2、pointer-events 属性详解

```css
pointer-events:  auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit  
```

 pointer-events属性有很多值，但是对于浏览器来说，只有auto和non两个值可用，其它的几个是针对SVG的(本身这个属性就来自于SVG技术)。


         auto——效果和没有定义pointer-events属性相同，鼠标不会穿透当前层。在SVG中，该值和visiblePainted的效果相同。
         none——元素不再是鼠标事件的目标，鼠标不再监听当前层而去监听下面的层中的元素。但是如果它的子元素设置了
               pointer-events为其它值，比如auto，鼠标还是会监听这个子元素的。
  用途：
     比如投票，只能投一次，点赞只能给一个人赞
    $(this).addClass("yizan").children().addClass("zan_icon"); 当前的a标签为已赞状态
```javascript
$(".praise a").attr("disabled",true).css("pointer-events","none");//只能赞一次，禁止再次触发点击事件
```
其它属性值为SVG专用，这里不介绍了

### 3、浏览器兼容性

  Firefox 3.6+和chrome 2.0+ 以及safari 4.0+都支持这个CSS3属性，IE6/7/8/9都不支持