1 . 复习CSS选择器 
    三种基础选择器: 
        id 、class、html标签选择器 
    8种高级选择器
        通配符  *
        后代选择器 div  p
        交集选择器  span.s1
        并集选择器  div,p
        子元素选择器  div > p
        序列选择器  ul li:first-child    ul li:last-child
        相邻兄弟选择器  h3 + p
        普通兄弟选择器   div~p
   
2.  权重问题比较
      当多种选择器同时应用到了一个标签的身上，并且属性发生冲突，我们该如何解决？

      !important;英文中的意思:重要的
      div {
        color:red !important;

      }
      font-size:100px !important;


      Tip:
        1. !important不能够随便使用，尽量减少使用频率
        2. !important 能够提升单独某个属性的权重，不能提高选择器的权重。
        3. !important 不影响就近原则 
        div {
          font-size:100px;
          color:red;

        }

        .d1 {
          font-size:80px;
        }
3.  CSS继承
哪些属性可以继承？
color
text- 开头的
line- 开头的
font- 开头的
与文字相关的属性大多数都可以被继承。但是浮动、定位等等属性完全不能够被继承。
4.  CSS定位 
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

这个不明白

   绝对定位的元素如何居中?


   固定定位
   position:fixed ;
   固定定位针对的是浏览器窗口，以浏览器窗口为参考进行位移。常见的功能，例如返回顶部，广告....



   z-index 层级关系

   分两种情况：
    1 如果单纯的比较两个发生位置冲突的标签，那么谁的z-index值大，谁就在上面
    2 如果发生位置冲突的是两个子元素，那么最应该看的是父元素的层级关系，父元素的层级也就是z-index值小，那么子级层级再高也没有办法改变。
    3. 两个父元素比较层级的时候，如果其中一个父元素的层级z-index没有设置，那么子级是可以通过z-index盖过与之发生冲突的另外一个元素。
5.  CSS布局核心复习 
      标准文档流以及特性
      盒子模型
      浮动
      清除浮动带来的影响
      定位
6. 常见的网页布局类型
7. 超链接的美化
a:link {color: #FF0000}   /* 未访问的链接 */
a:visited {color: #00FF00}  /* 已访问的链接 */
a:hover {color: #FF00FF}  /* 鼠标移动到链接上 */
a:active {color: #0000FF} /* 选定的链接 */

在写的时候一定要按照顺序来写，但是你可以省略某个状态。

8. 背景图片
      
1. background-color 背景颜色
  red  #ccc  rgb(23,23,23)
我们在练习的时候用什么方式表达颜色都无所谓，但是实际开发的时候最好全部使用十六进制。

2. background-image 背景图片  
  
background-image:url("图片的地址")

3. background-repeat 背景图像是否重复
  值: repeat-x 横轴重复
      repeat-y 纵轴重复 
      no-repeat 不重复

4. background-position 图片位置
background-position:向右偏移量px 向下偏移量px; 偏移量可以为正也可以为负 
雪碧图  又称为css精灵


5. background-attachment: fixed; 背景固定 
一旦设置了这个属性，那么网页的背景就不会随着网页的滚动而滚动。

简写:
  background:url() no-repeat center top;

Tip:能使用简写的时候尽可能的使用简写。

文本属性
1. direction  设置文本方向
    值ltr  rtl  

2. letter-spacing 设置字符间距
  可以为负值 
  单位可以使用px

3. text-align:center / left(默认) /right(右边) / justify(文本两边居中)

4. text-decoration 给文本添加修饰
  none  取消文本的默认样式。 
  underline 加上一条下滑线
  overline 上划线
  line-through 穿过文本的一条线 


5. text-indent 缩进元素文本的首行
  
6. text-transform控制元素当中的字母 
  none (默认)/
  capitalize(文本中的每个单词以大写字母开头。) 
  uppercase（定义仅有大写字母） 
  lowercase(小写字母) 