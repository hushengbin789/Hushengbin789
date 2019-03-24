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


  ---------------------------------------------------------------------------

 1. font-size: 字体大小  
 	14px 
 	14pt 磅
 	14em
 	14rem

 	html {
 		font-size:100%;  16px 1rem = 16px
 		font-size:10px;  2rem = 20px;
 	}
2.font-family : 字体样式 字体族科 
当前属性通常设置多个字体，包括英文和中文，如果第一个字体不存在，那么就会去找第二个字体，以此类推 。
	font-family:"Times New Roman","Arial","KaiTi","",""

3.color 字体颜色
rgb 
十六进制
单词

4. font-weight:字体粗细 bold(字体变粗) bolder(更粗) normal(正常) 
			100-900

5. font-style: italic(斜体字)/oblique(让现有字体发生倾斜)/normal 字体倾斜
6. text-align: 字体水平对齐方式 left /right /center /justify 能够作用于图片或者文字
7. vertical-align:top(上) / bottom (下)/middle(中) /baseline(基线)
8. line-height:行高  

	当行高等于容器的高时，可以实现文本垂直居中。(只适用于单行)
	当单行文本的行高小于容器高时，可实现单行文本在容器中垂直中齐以上；
	当单行文本的行高大于容器高时，可实现单行文本在容器中垂直中齐以下（IE6及以下版本存在浏览器兼容问题） 
9. text-decoration: 文本修饰 none /underline下滑线 / overline上划线 /line-through中横线

10. text-indent:首行缩进  
	px  em  rem
11. text-transform控制元素当中的字母 
  none (默认)/
  capitalize(文本中的每个单词以大写字母开头。) 
  uppercase（定义仅有大写字母） 
  lowercase(小写字母) 

12. letter-spacing: 设置字符间距

13. word-spacing:控制英文单词词距

14. layout-flow:horizontal/vertical-ideographic;  控制文本流

	1）horizontal:自左向右
	2）vertical-ideographic:自上而下
Tip:专门用于IE的一个属性

--------------------------------------------------------------------------------
1. 列表属性
list-style-type:列表样式
list-style-image:url() 将列表的样式替换成url引入的图片
list-style-position: outside(外面)/ inside(里面)
list-style:none;

---------------------------------------------------------------------------------
1.border: 边框 宽度 样式 颜色
border-width
border-style
border-color 

----------------------------------------------------------------------------------
1. 常用三种图片格式：
1）jpg :有损压缩格式，靠损失图片本身的质量来减小图片的体积，适用于颜色丰富的图像;(像素点组成的，像素点越多会越清晰 )
2）gif：无损压缩格式，支持透明，支持动画，适用于颜色数量较少的图像;
3）png:无损压缩格式，支持透明，不支持动画，(是fireworks的 源文件格式)，适用于颜色数量较少的图像;

-----------------------------------------------------------------------------------
1.background 背景图像
background-color 背景颜色
background-image:背景图片
background-repeat : 是否平铺
background-position :背景图像的位置
background-attachment:背景图像是否固定

---------------------------------------------------------------------------------
1. overflow：溢出隐藏
	visible/hidden(隐藏)/scroll/auto(自动)/inherit;

visible:默认值。当容器内容溢出了容器时，不采取任何行动，任由内容溢出。
hidden:将溢出的内容隐藏。
scroll:滚动，如果存在溢出的内容，将以滚动条的形式展示。
auto:自动。


white-space:空余空间 
normal/nowrap/pre/pre-wrap /pre-line /inherit 该属性用来设置如何处理元素内的空白；
nowrap ：强制将文本放在一行上显示，如果没有碰到br，就会一直在一行显示。
pre : 类似于<pre>标签 
pre-wrap: 保留空白符，但是内容会正常的换行。
pre-line: 合并空白字符，但是保留换行符。


省略号:
text-overflow:clip不显示省略号/ellipsis显示省略号
要想让元素能够显示省略号，需要满足下面的条件:
1. 元素要有具体的宽度
2. 元素要在一行上显示 white-space:nowrap
3. 溢出的元素要隐藏掉:overflow:hidden;
4.才是设置text-overflow:ellipsis; 溢出内容显示为省略号。