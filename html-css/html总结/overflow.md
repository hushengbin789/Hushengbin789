1. overflow 溢出隐藏  
	内容溢出 ： 文字 
	visible 表示默认值，溢出的元素默认让其溢出，不做其处理。
		Tip: 
		1.包含子元素的父元素(包含块)在ie6-会出现延伸的情况，变成可以包裹住子元素的宽度。
		2.在ie7- 会存在另外一种情况，使用button 按钮 或者input type=button 这两种类型的按钮，都会出现
		按钮当中字越多，按钮两边的padding越大。
			解决:overflow:visible;
	hidden 隐藏
	
	scroll 滚动 
		在ie8+ 还有火狐浏览器 在解释overflow:scroll或者overflow:auto的时候会存在padding-bottom的缺失。
		
	overflow失效:
		当子元素处于绝对定位的状态，并且溢出了父元素。这个时候父元素的overflow:hidden或者其他属性都会失效。
		解决方案:
			给需要溢出隐藏的包含块设置position:relative;
			
	overflow-x:visible/hidden/auto/scroll  overflow-y:visible/hidden/auto/scroll 能够通过这两个属性单独的设置
		某一个方向的溢出。
		
	
	总结：
		overflow主要用来解决溢出的问题，溢出可以分两种，一种是文字溢出，一种是元素溢出。