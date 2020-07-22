css常用属性浏览器兼容情况

需求：一个网页能不能够在不同的浏览器里完整的展示！
1、在网页当中你使用的属性在不同的浏览器里是否可以使用

2、 如果我在开发网页的时候使用的属性不能够在某些浏览器里使用，该怎么解决？

min-height: 不能够在ie6里使用



-------------------------------------------------------------------
1. 盒模型属性

	(全兼容)
	width
	height

	(IE6-不支持)
	min-width
	max-width
	min-height
	max-height
	
	(全兼容)
	border
	border-width
	border-color
	border-style
	
	(全兼容)
	margin
	
2. 布局类属性
	注意：IE7-浏览器不支持table类属性值
	(全兼容)
	display
	(全兼容)
	float
	clear
	
	注意：IE6-不支持固定定位position:fixed
	(全兼容)
	position
	left
	right
	top
	bottom
	z-index
	
	(全兼容)
	overflow
	overflow-x
	overflow-y
	clip
	visibility

	(IE不支持)
	resize
	
	
3. 文本类属性
	
	(全兼容)
	font
	font-family
	font-size
	font-style
	font-variant
	font-weight
	line-height
	@font-face
	
	(全兼容)
	text-indent
	
	(全兼容)
	text-align
	vertical-align
	注意：IE7-浏览器中vertical-align的百分比值不支持小数行高
	
	(全兼容)
	word-spacing
	letter-spacing
	
	(全兼容)
	text-transform
	
	(全兼容)
	text-decoration
	
	(全兼容)
	white-space
	
	(全兼容)
	text-overflow
	
	
3. 修饰类属性

	(全兼容)
	background
	background-color
	background-image
	background-repeat
	background-position
	
	(IE8-不支持)
	background-attachment
	background-clip
	background-size
	
	(全兼容)
	color

	(IE8-不支持)
	opacity
	
	(全兼容)
	命名颜色
	16进制
	RGB
	(IE8不支持)
	RGBA
	
	(全兼容)
	cursor
	
4.其他类属性
	
	(全兼容)
	通配选择器   *
	元素选择器   div
	类选择器     .box
	ID选择器     #box
	后代选择器   div a
	分组选择器   h1,p

	(IE6-不支持)
	属性选择器    h1[class]
	子元素选择器  ul > li
	相邻兄弟选择器 div + p
	(IE7-不支持)
	通用兄弟选择器 div ~ p
	
	伪元素
	(只有当选择器部分和左大括号之间有空格时，IE6-浏览器才支持)
	:first-letter
	:first-line

	(IE7-不支持)
	:before
	:after
	(IE8-不支持)
	::selection
	
	伪类
	(全兼容)
	:link
	:visited

	(IE6-不支持给<a>以外的其他元素设置伪类)
	:hover
	:active  
	
	单位
	(全兼容)
	px
	in
	cm
	mm
	q
	pt
	pc
	em
	ex
	ch
	
	(IE8-不支持)
	rem