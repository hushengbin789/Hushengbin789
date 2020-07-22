## AJAX

#### 概念JAX（Asynchronous JavaScript And XML）

**什么是AJAX：**

是一种创建交互式网页应用的网页开发技术。

是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

前端通过与服务器进行少量数据交换，AJAX可以是网页实现异步更新。意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。以前的网页如果不使用AJAX，如果需要更新内容，必须重新加载整个网页页面。



#### 为什么要使用AJAX

> 更自然，流畅的用户的体验，对用户的操作及时响应；

> 在不中断用户操作的情况下与WEB服务器进行通信；

> 更灵敏的响应用户访问，实现近似于桌面应用程序的交互效果；

> 通过局部更新页面降低网络流量，提高网络的使用效率；

#### 异步与同步

**什么是异步？**

> 同时执行，也叫并发

**什么是同步？**

> 按步骤顺序执行

### get和post的区别

> get和post就是客户端给服务器传输数据的方式。

> > get：速度快，传输的数据量小，安全性不好。

> > post：速度慢，传输的数据量大，安全性好。

### XMLHttpReques对象

AJAX的核心对象是XMLHttpRequest,即AJAX的异步操作，和吴福气交互主要依赖该对象。XMLHttpEequest对象提供了对HTTP协议的完全的访问，包括做出POST和HEAD请求以及普通的GET请求的能力。

**XMLHttpRequest理解**

以前浏览器负责显示和发送请求接受响应。两件事同一时刻只能做一件事，没法同时进行。这样会让用户感觉不好。比如：当浏览器发送请求时，就没法显示内容，这时浏览器中是空白显示，给用户的感觉不好。

使用XMLHttpRequest对象，可以把浏览器解脱出来，可以让浏览器只负责显示，而完成请求的事情由XMLHttpRequest对象负责，这样两者各负其责，效率更高，效果更好，用户体验很好，用户永远不会看到浏览器空白。

### AJAX编写步骤

1、创建XMLHttpRequest对象

​	var request=new XMLHttpRequest();

2、设置请求参数

​				  请求的方式		请求的地址		异步为true，同步为false

​	request.open("get","http://10.0.152.17/AJAX/ajaxtest",true)

3、设置回调函数

```
	request.onreadystatechange=function(){
		if(request.readyState==4){
			alert(request.reponseText);
	}
}
```

4、发送请求

​	request.send();

5、接受响应

​	request.responseText或者request.responseXML

### 创建XMLHttpRequest

​	XMLHttpRequest对象最初是在IE5中以ActiveX组件的形式实现的，但只能在IE浏览器中使用。其后Mozilla、Safari等浏览器中相继实现，才成为事实上的标准。目前FireFox、Safari、Opera和IE7中都以类似的方式实现了XMLHttpRequest对象.

​	由于XMLHttpRequest不是w3c的标准，可以采用多种方法创建XMLHttpRequest对象。在使用XMLHttpRequest对象发生请求和处理之前，必须首先使用JavaScript获得XMLHttpRequest对象.



### 创建XMLHttpRequest

```
function getHttpRequest(){
    if(window.ActiveXObject){
        return new ActiveXObject("Microsoft.XMLHttp");
    }else{
        return new XMLHttpRequest();
    }
}
```

### XMLHttpRequest的属性

![](C:\Users\ASUS\AppData\Local\Temp\1557126525413.png)

### XMLHttpRequest的方法

方法						描述

abort()						停止当前请求

getAllResponseHeaders()		将所有HTTP请求的响应首部作为键值对返回

getResponseHeader("header")	返回指定响应的首部信息

open("method","URL")		建立对服务器的调用，方法通常是post或get,url可以绝对路径或相对路径

send(content)				向服务器发送请求，参数可以是null

setRequestHeader(”header”, ”value”)设置HTTP请求的首部信息，可以向服务器传递参数，这个方法必
须在open之后调用

### AJAX交互实例(get请求)

```
var oRequest;
function getTitleInfo(titleid){
		oRequest = getHttpRequest(); // 获得XMLHttpRequest对象
		oRequest.open(“get” , “AJAXServlet” , true); // 建立对服务器的异步调用
		oRequest.onreadystatechange = myfun;
		oRequest.send(null); // 向服务器发送异步调用请求
}
 // 显示书籍信息（回调处理）
 if (oRequest.readyState == 4&&oRequest.status==200)
 {
	 var result = oRequest.responseText;
 	 var msgdiv = document.getElementById("message");
	 msgdiv.innerHTML = result;
 }
}		
```

### eval

eval(string)
 作用：
	 eval() 函数可计算某个字符串，并执行其中的 JavaScript 代码。
	 即这个函数可以把一个字符串当作一个JavaScript表达式一样去执行它
 语法：eval(string)
	 参数string必需。要计算的字符串，其中含有要计算的 JavaScript 表达式或要执行的语句。
	 如：服务器端返回一个JSON字符串，需要用eval把它转换为对象。或者数组。 eval("("+json字符串+")"); 
 返回值：
	 通过计算 string 得到的值（如果有的话），即参数string有返回值，则eval的执行结果就有返回值