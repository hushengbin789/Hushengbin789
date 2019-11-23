页面布局移动端和pc端的转换 js
现在大部分网站都要求pc端何以东段界面兼容展示，两者屏幕尺寸大小不一，所以展示的界面自然也有所差别。

1.首先，在页面做pc端和移动端分别显示的两部分内容。

2.然后根据判断你的页面是在移动端还是在PC端显示对应的页面代码，另一个隐藏。

1）判断你的页面是在移动端还是在PC端打开？

```
function IsPC() {
	var userAgentInfo=navigator.userAgent;//获取当前浏览器的信息
	var Agents=["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
					
	var flag = true;
	for (var i = 0; i < Agents.length; i++) {
		if (userAgentInfo.indexOf(Agents[i]) > 0) {//判断是否是移动端
			flag = false;
			break;
		}
	}
	return flag;
}
```

2）在页面初始化的时候判断当前页面信息显示页面
```
$(document).ready(function(){
    	if(IsPC()){
		$("#pcPage").show();//pc端页面显示
	}else{
		 $("#moblepic").show();//移动端页面显示
	}
})
```

注：pc端和移动端在页面初始化之前要隐藏，判断后才可根据信息显示需要显示的。

原文件地址
https://blog.csdn.net/wy123123000/article/details/77991412
