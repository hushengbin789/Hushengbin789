## js简介

​        JavaScript一种在浏览器中解释运行的脚本语言，它的解释器被称为JavaScript引擎，为浏览器的一部分，是广泛用于客户端的脚本语言，最早是在HTML网页上使用，用来给HTML（HTML5）网页增加动态功能。

​	在1995年时，由Netscape公司的Brendan Eich，在网景导航者浏览器上首次设计实现而成。因为Netscape与Sun合作，Netscape管理层希望它外观看起来像Java，因此取名为JavaScript。
 	可以实现：用户交互（表单验证）、网页特效（漂浮的广告）、客户端的显示（页面内容，速度快）、网页游戏、地图搜索、股市信息查询、web聊天。。。

#### 1.组成

1. ECMAScript 是一种由Ecma国际,定立ECMA-262标准化的脚本程序设计语言。规定了JavaScript 脚本的核心语法，如 数据类型、关键字、保留字、运算符、对象和语句等.

2.  BOM定义了 JavaScript 操作浏览器的接口，提供了访问某些功能（如浏览器窗口大小、版本信息、浏览历史记录等）的途径以及操作方法

3. DOM定义了 JavaScript 操作 HTML 文档的接口，提供了访问 HTML 文档（如body、form、div、textarea等）的途径以及
   操作方法。

   

**如何在HTML中使用JS**

<body>
<script type="text/javascript">
 //第一句javascript代码：
 alert(“我用来弹出消息框！”) ;
 //第二句：
 document.write(“我会把内容显示在页面上，能够输出任何HTML代码！”);
</script>
</body>
</html>
注：JS大小写敏感

#### 2.JS基础

1）、script标签和属性，可以写在HTML中任意位置，可出现多个，一般会写在<head>标签中
<script type="text/javascript" >
 JS代码写在这里。
</script>

2）、使用script标签引入外部javaScript文件
 <script type="text/javascript" src="demo1.js" ></script>
**注意：**

1、引入文件不可以使用单标
 <script type="text/javascript" src="demo1.js“/ >
2、引入文件不可以在标签中写代码
 <script src="demo1.js">alert('xxxx')</script>;

3）、注释
单行注释 //
多行注释 /* */
文档注释 /** */
4）、运行顺序
 Javascript和HTML代码在同一个文件中写，它们的执行顺序是从上朝下，谁在前先执行谁。
5）、编辑工具和运行环境
编辑工具：写代码的工具
 如：dreamweaver，editplus，Notepad++，sublime....
运行环境：看结果的地方
 如：IE，firefox，chrome

### js变量

**变量用来在计算机中存储和表示数据。**

变量定义（声明）：
 var age; //var 是关键字，age是变量名
赋值：
 age = 20; //20是数据 “=”是赋值
定义的同时赋值：
 var age=20；
可以一次定义多个变量：
 var myname=“MY", age=18，weight=138;
使用变量：
 alert(myname);
注：1， 变量必须先赋值再使用

### JS的数据类型

**Undefined类型**

Undefined类型只有一个值undefined，它是变量未被赋值时的值。
**Null类型**

Null类型也只有一个值null 。Null类型的语义是“一个空的对象引用”，注意和空字符串区别开。
**Boolean类型**

布尔有两种取值true和false，表示真或假。非0代表真，0代表假。
**String类型**

又叫字符串类型，用双（单）引号括起来的一串字符。
**Number类型**

包含整数± 9007199254740992 和浮点数±1.7976931348623157 × 10的308次方。
**Object类型**

JavaScript中最为复杂的类型就是Object，它是一系列属性的无序集合。
使用typeof关键字查看变量类型
var age=20;
alert(typeof age);

