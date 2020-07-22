# 笔记

## 一、HTML

### 1、web包含可几个方面：



- 结构，表现，行为

### 2、HTML与XHTML的区别



- HTML是超文本标记语言。
- XHTML是可扩展的超文本标记语言
- XHTML相对于HTML而言，语法更加严格



### 3、文档声明

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>ceshi</title>
</head>
<body>

</body>
</html>
```



### 4、HTML基本结构

- 文档声明
- 网页跟标签是html
- head主要设置一些meat头元素信息，例如字符编码，网站标题，关键词，描述，引入css和js文件

- (字符编码UTF-8，gbk,gb2312)
- body是网页所写的内容

### 5、语法

- 常规标记<标记 属性=“属性值” 属性=“属性值”></标记>

  标记也可叫标签或叫元素
  例如：<head></head>

- 空标记<标记 属性=“属性值” /> 例如：<meta charset=”utf-8”> 

**说明：** 1.写在<>中的第一个单词叫做标记，标签，元素。 2.标记和属性用空格隔开，属性和属性值用等号连接，属性值必须放在“”号内。 3.一个标记可以没有属性也可以有多个属性，属性和属性之间不分先后顺序。 4.空标记没有结束标签，用“/”代替。 



### 6、常用标记

1、文本标题（h1-h6）  

> <h1>LOGO</h1> 
> <h2>二级标题</h2> 
> <h3>三级标题H3</h3> 
> <h4>四级标题H4</h4> 
> <h5>五级标题</h5>
> <h6>六级标题</h6>
>
> 注：文本标题标签自带加粗，有自己的文本大小，并且独占一行，有默认间距

2、段落文本(p)  

> <p>段落文本内容</p>
> 标识一个段落(段落与段落之间有段间距)

3、空格  

> &nbsp;
> 所占位置没有一个确定的值,这与当前字体字号都有关系.

4、换行(br)

> <br />
> 换行是一个空标记(强制换行)

**5、水平线**

<hr />空标记

6、加粗有两个标记

 

> A、<b>加粗内容</b>只是显示加粗
> B、<strong>强调的内容</strong>突出的文本

7、倾斜

> <em>强调文本</em>
>
> <i>倾斜文本</i>
>
> 

**8、** 扩展

> <u>文本</u>下划线
>
> <del>文本</del>删除线
>
> <s>文本</s>删除线
>
> <sub></sub>下标
>
> <sup></sup>上标

**9、列表**

HTML中有三种列表分别是：无序列表，有序列表，自定义列表

*无序列表
无序列表组成：
<ul>(unordered list)
<li></li>
<li></li>
．．．．．．
</ul>

*有序列表
有序列表组成：
<ol>(ordered list)
<li></li>
<li></li>
．．．．．．
</ol>

*自定义列表
<dl>(definition list)
<dt>名词</dt>
<dd>解释</dd>
(definition description)
．．．．．．
</dl>



### 相对路径

相对路径是指从发问者得角度去说明位置

### 绝对路径

绝对路径是从根源位置开始阐述。

### 10、选择器

A:三种基础选择器 
id 选择器  权重最高
class 选择器  其次
html标签选择器  最后 

B: 稍微高级一点的选择器:
通配符选择器 * 可以使用，但是不推荐使用，主要用于测试
后代选择器  div p  .d1 .d2
子元素选择器 div>p;    .d1>p 
交集选择器  span.s1
并集选择器  span,h1,div     .d1 , .d2 ,div 
序列选择器  ul li:first-child  ul li:last-child  
相邻兄弟选择器 div+p  
普通兄弟选择器  div ~ p 

### 11、盒子模型

包含有:width height padding border margin 

一切标签都可以看成是盒子

A:width 和 height 
宽度和高度与正常人类的看法是有区别的。我们前端程序员说的宽度和高度实际上指的是内容的宽度和高度

B: border: 边框 
border:1px solid red; 

1px 表示边框的宽度  
solid 表示边框的线型
red 边框的颜色 

**padding内边距**

padding是内容与边框之间的距离 ，我们称它为内边距。  
padding有四个方向，我们可以采用简写:
padding:10px;  上右下左四个方向的padding都为10px
padding:10px 20px; 上下10 左右20
padding:10px 20px 30px ; 上10 左右20 下30 
padding:10px 20px 30px 40px; 上10 右20 下30 左40

单独某个方向设置值：
padding-top
padding-right
padding-bottom
padding-left 

可以进行padding覆盖
padding:10px;
padding-left:20px;

Tip:padding使用后会增加盒子实际所占的宽度和高度，如果不想改变盒子原本所占有的宽度和高度，那么就把宽度和高度减少(内容的宽度和高度)

**margin外边距**

盒子模型的margin - 外边距
margin:10px; 上右下左 都是10px
margin:10px 20px; 上下 左右
margin:10px 20px 30px; 上 左右 下 
margin:10px 20px 30px 40px; 上右下左 

margin塌陷  (此种情况只发生在标准文档流当中，一旦元素脱离了标准文档流那么也就不存在所谓的塌陷)


margin值得设置： 既可以设置为具体的值也可以设置为auto。

通过margin让元素居中:
	margin:0 auto;
	想要通过margin:0 auto;让元素居中显示，需要注意下面的几点(一定一定一定要记住)：

		1. 想要使用margin：0 auto；必须要有宽度width,明确的width
		2. 只有在标准文档流当中的盒子才能使用。一旦元素设置了浮动、绝对定位、固定定位，那么就不能使用margin:0 auto;居中
		3. margin:0 auto;只是让盒子居中，至于说盒子里面的文本内容想要居中，请使用text-align:center;
		text-align:left / center /right;


### 12、标准文档流

所谓的文档流指的就是元素(标签)排版(浏览器解析的时候)，顺序是从上向下 从左向右

标准文档流微观现象：
	a:空白折叠
	b:高矮不齐，底边对齐
	c:自动换行 一行写不满就换行写  

**标准文档流的元素等级问题**

所谓的文档流指的就是元素(标签)排版(浏览器解析的时候)，顺序是从上向下 从左向右

标准文档流微观现象：
	a:空白折叠
	b:高矮不齐，底边对齐
	c:自动换行 一行写不满就换行写  

### 13、浮动

html网页中对于元素的种种限制，其实都来自于标准文档流，例如行内元素不能设置宽度和高度，块级元素不能并排显示等等，那么想要摆脱这些限制，那么就需要"脱离标准文档流".

脱离标准文档流的方法有三种:
	浮动
	绝对定位
	固定定位


浮动：
	float: 浮动
		值: left/right;

**浮动的标准特性**
	1.让元素脱离标准文档流
	2. 浮动会让元素相互紧贴
	3. 会存在字围效果
	4. 收缩效果

**浮动元素带来的影响解决方案:**
	1. 给父元素(必须是子元素发生了浮动)设置一个具体的高度
	2. 使用clear:both属性 
	3. 使用:after :before(伪类)来实现。

### 14、css继承

哪些属性可以继承？
color
text- 开头的
line- 开头的
font- 开头的

与文字相关的属性大多数都可以被继承。但是浮动、定位等等属性完全不能够被继承。

### 15、定位

 相对定位 、绝对定位 、 固定定位 
      position: 定位 


      position: relative; 相对定位
        元素会根据自己原来的位置进行位移，并且不会脱离标准文档流。
      作用：
        1. 微调元素位置
        2. 作为绝对定位的参考点。
    
      position: absolute;/*绝对定位*/
      绝对定位元素脱离标准文档流。
    
      <!-- 某个元素设置了绝对定位，需要参考点：
  分成下面的几种情况：
    1. 没有父元素
      top 为首屏屏幕的左上角作为参考
      bottom就是浏览器窗口，首屏窗口尺寸页面的左下角
    2. 存在父元素
      浏览器就会从当前使用绝对定位的元素开始向上一层一层的去找，父元素没有就找祖先元素，直到找到
      某个祖先元素的身上具有相对定位或者绝对定位的属性，那么就以这个祖先元素为参考点进行位移
      如果没有找到，那么就以网页为参考点进行位移。

    子元素使用绝对定位  父元素最好使用相对定位  子绝父相
                          子绝父绝 
   -->

   绝对定位的子元素，如果作为参考元素的父元素设置了padding，除非子元素没有设置一些位移的参数，例如top、left等，那么就会被padding影响，可是一旦子元素设置了位置参数，将不会受到影响。

  固定定位
   position:fixed ;
   固定定位针对的是浏览器窗口，以浏览器窗口为参考进行位移。常见的功能，例如返回顶部，广告....



   **z-index 层级关系**

   分两种情况：
    1 如果单纯的比较两个发生位置冲突的标签，那么谁的z-index值大，谁就在上面
    2 如果发生位置冲突的是两个子元素，那么最应该看的是父元素的层级关系，父元素的层级也就是z-index值小，那么子级层级再高也没有办法改变。

3. 两个父元素比较层级的时候，如果其中一个父元素的层级z-index没有设置，那么子级是可以通过z-index盖过与之发生冲突的另外一个元素。

### 16、超链接的美化

a:link {color: #FF0000}   /* 未访问的链接 */
a:visited {color: #00FF00}  /* 已访问的链接 */
a:hover {color: #FF00FF}  /* 鼠标移动到链接上 */
a:active {color: #0000FF} /* 选定的链接 */

在写的时候一定要按照顺序来写，但是你可以省略某个状态。

### 17、背景图片

**1、background-color 背景颜色**
red  #ccc  rgb(23,23,23)
我们在练习的时候用什么方式表达颜色都无所谓，但是实际开发的时候最好全部使用十六进制。

**background-image 背景图片**  

background-image:url("图片的地址")

**3、background-repeat 背景图像是否重复**
值: repeat-x 横轴重复
    repeat-y 纵轴重复 
    no-repeat 不重复

**4、background-position 图片位置**
background-position:向右偏移量px 向下偏移量px; 偏移量可以为正也可以为负 
雪碧图  又称为css精灵

**5.background-attachment: fixed; 背景固定 **
一旦设置了这个属性，那么网页的背景就不会随着网页的滚动而滚动。

简写:
  background:url() no-repeat center top;

Tip:能使用简写的时候尽可能的使用简写。

**background **

background-color 背景颜色
background-image:背景图片
background-repeat : 是否平铺
background-position :背景图像的位置
background-attachment:背景图像是否固定、

### 18、文本属性

**1、direction  设置文本方向**
值ltr  rtl  

**2.letter-spacing 设置字符间距**

可以为负值 
单位可以使用px

**3.text-align:**center / left(默认) /right(右边) / justify(文本两边居中)

**4.text-decoration 给文本添加修饰**
none  取消文本的默认样式。 
underline 加上一条下滑线
overline 上划线
line-through 穿过文本的一条线 

**5.text-indent 缩进元素文本的首行**

**6.text-transform控制元素当中的字母 **
none (默认)/
capitalize(文本中的每个单词以大写字母开头。) 
uppercase（定义仅有大写字母） 
lowercase(小写字母) 

**7.font-size: 字体大小  **
14px 
	14pt 磅
	14em
	14rem

```
html {
	font-size:100%;  16px 1rem = 16px
	font-size:10px;  2rem = 20px;
}
```
**8.font-family : 字体样式 字体族科 **
当前属性通常设置多个字体，包括英文和中文，如果第一个字体不存在，那么就会去找第二个字体，以此类推 。
font-family:"Times New Roman","Arial","KaiTi","",""

**9.color 字体颜色**
rgb 
十六进制
单词

**10.font-weight:**字体粗细 bold(字体变粗) bolder(更粗) normal(正常) 

100-900

**11.font-style: **italic(斜体字)/oblique(让现有字体发生倾斜)/normal 字体倾斜

**12.text-align:** 字体水平对齐方式 left /right /center /justify 能够作用于图片或者文字

**13.vertical-align:**top(上) / bottom (下)/middle(中) /baseline(基线)

**14.line-height:行高 ** 

当行高等于容器的高时，可以实现文本垂直居中。(只适用于单行)
当单行文本的行高小于容器高时，可实现单行文本在容器中垂直中齐以上；
当单行文本的行高大于容器高时，可实现单行文本在容器中垂直中齐以下（IE6及以下版本存在浏览器兼容问题） 

**15.text-decoration:** 文本修饰 none /underline下滑线 / overline上划线 /line-through中横线

### 19.列表属性

**1.列表属性***
list-style-type:列表样式
list-style-image:url() 将列表的样式替换成url引入的图片
list-style-position: outside(外面)/ inside(里面)
list-style:none;

**2.border: **边框 宽度 样式 颜色
border-width
border-style
border-color 

**3. 常用三种图片格式：**
1）jpg :有损压缩格式，靠损失图片本身的质量来减小图片的体积，适用于颜色丰富的图像;(像素点组成的，像素点越多会越清晰 )
2）gif：无损压缩格式，支持透明，支持动画，适用于颜色数量较少的图像;
3）png:无损压缩格式，支持透明，不支持动画，(是fireworks的 源文件格式)，适用于颜色数量较少的图像;

### 20.overflow：溢出隐藏

visible/hidden(隐藏)/scroll/auto(自动)/inherit;

visible:默认值。当容器内容溢出了容器时，不采取任何行动，任由内容溢出。
hidden:将溢出的内容隐藏。
scroll:滚动，如果存在溢出的内容，将以滚动条的形式展示。
auto:自动。

**总结：	overflow主要用来解决溢出的问题，溢出可以分两种，一种是文字溢出，一种是元素溢出。**

### 21.white-space:空余空间 

normal/nowrap/pre/pre-wrap /pre-line /inherit 该属性用来设置如何处理元素内的空白；
nowrap ：强制将文本放在一行上显示，如果没有碰到br，就会一直在一行显示。
pre : 类似于<pre>标签 
pre-wrap: 保留空白符，但是内容会正常的换行。
pre-line: 合并空白字符，但是保留换行符。

**省略号:**
text-overflow:clip不显示省略号/ellipsis显示省略号
要想让元素能够显示省略号，需要满足下面的条件:

1. 元素要有具体的宽度
2. 元素要在一行上显示 white-space:nowrap
3. 溢出的元素要隐藏掉:overflow:hidden;
  4.才是设置text-overflow:ellipsis; 溢出内容显示为省略号。

##22.自适应网页效果

 
网页布局中经常要定义元素的宽和高。但很多时候我们希望元素的大小能够根据窗口或子元素自动调整，这就是自适应。
自适应的优点：
元素自适应在网页布局中非常重要，它能够使网页显示更灵活，可以适应在不同设备、不同窗口和不同分辨率下显示。

**宽度自适应**
   元素宽度设置为100%。（块元素宽度默认为100%）
    或者不设置宽度（width）;（宽度是父元素的宽度）
**高度自适应**
        **自适应元素高度**：height:auto;或者不设置;（是子元素撑开父元素的高度） (父元素高度跟随子元素的变化而变化)

	    2)元素高度自适应窗口高度(子元素的高度跟随父元素的变化而变化) -- 开发app页面使用次数较多
	        
		设置方法：html,body{height:100%;}
	             
	            <style>
	                html,body{height:100%;}
	                div {background:red;height:100%;}
	            </style>
	    
	            <body>
	               <div></div>
	            </body>
	       Tip：全屏页面才推荐使用高度100%的方式去开发。
	           
		注：如果设置子元素的高度跟随父元素的高度变化而变化，那么父元素必须有高度
**3.元素具备最小高度的自适应**


	min-height属性：最小高度；(IE6浏览器不识别该属性)
	hack1:min-height:value;_height:value;
	hack2:min-height:value;  height:auto!important;height:value;  

   

**4.浮动元素父元素高度自适应（高度塌陷）**
    当子元素有浮动并且父元素没有高度或者加最小高度（min-height:）的情况下父元素会出现高度塌陷
    hack1：给父元素添加声明overflow:hidden;(触发一个BFC[Block Formatting Context块级格式化上下文],在bfc当中，
    浮动元素也会参与计算。)。
        弊端：会隐藏一些定位在内容区域外侧的元素。
            
    hack2:在浮动元素下方添加空div,并给该元素添加
            声明：div{clear:both; height:0; overflow:hidden;}
                  这种声明方式在写网页的时候，可以有效的兼容ie6，ie6即是高度没有，也会保留大概6px的高度
                  只有height:0;和overflow:hidden;搭配使用才可以解决这样的问题。
            弊端：增加代码的冗余，大量存在一些不必要的元素。
    hack3:万能清除浮动法
    选择符:after{content:"";clear:both;display:block;height:0;overflow:hidden;visibility:hidden;}
            也可以加上 .clearfix{*zoom:1;} 解决ie的问题
Tip:
    *visibility:hidden/隐藏

    *visibility:hidden;和display:none;的区别：
    visibility:hidden;属性会使对象不可见，但该对象在网页所占的空间没有改变，等于留出了一块空白区域，而 display:none属性会使这个对象彻底消失不显示，也不再占用位置。

**总结：**

​	 开发时，通栏宽度依旧保持100%。
        测量版心的宽度
        元素包含块设置最小高度

**伪类选择符(伪元素/伪对象)：**通常用在块级元素上面
:after 与content属性一起使用，定义在对象后的内容。
:before 与content属性一起使用，定义在对象前的内容。
:first-line  定义对象内第一行的样式。
:first-letter 定义对象内第一个字符的样式。



