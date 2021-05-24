# javascript中this的理解

## 文字解释：

### 一、this的理解：

    this:是"这个"的意思，是代名词，代名词代表的意思要根据场景或情景决定。

        你，我，他，这个，那个，都是代名词。
       当有人说，"我在吃饭"时，那这个“我”是谁呢，就必须要看这句话是谁说的，谁说的，我就是谁，即“我”会根据说话的人变化而变化

 

### 二、JavaScript中this的四种情况（this是函数的内置对象，所以，只能出现在函数内部）

1、当this所在函数是事件处理函数时，this是事件源。
2、当this所在函数是构造函数时，this是new出来的对象。
3、this所在函数的所属对象是谁，this就是谁。
4、当this所在函数没有所属对象，this是window对象

### 三、this的转移问题

       当有人说，"我在吃饭"时，那这个“我”是谁呢，就必须要看这句话是谁说的，谁说的，我就是谁，即“我”会根据说话的人变化而变化

 this转移的意思也是这个意思，this是哪个对象，需要看看this所在函数的所属对象。
--------------------- 

**代码如下**



```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title></title>
</head>
<body>
	
</body>
</html>
 
<script type="text/javascript">
//this
//1、当this所在函数是事件处理函数时，this是事件源。
//document.getElementById("btn").onclick = function(){
//	this就是btn
//}
 
//2、当this所在函数是构造函数时，this是new出来的对象。
//function Person(name){
//	this.name = name;//就是new出来的对象p1
//	this.eat = function(){
//		alert(this.name+"在吃");
//	}
//}
//var p1 = new Person("阿斌");
 
//3、this所在函数的所属对象是谁，this就是谁。
//function Person(name){
//	this.name = name;//就是new出来的对象p1
//	this.eat = function(){
//		alert(this.name+"在吃");//这个this是谁，谁调用eat，或者说调用eat时，前面的对象是谁，this就是谁
//	}
//}
//var p1 = new Person("阿斌");
//p1.eat();//这句话执行时，eat函数内部的this就是p1
//var p2 = new Person("阿斌点");
//p2.eat();//这句话执行时，eat函数内部的this就是p2
 
//4、当this所在函数没有所属对象，this是window对象。
     //其实啊，全局变量都是window对象的属性。
function test(){
	console.log(this);//这个this就是window
}
 
//test();//window对象可以省略，所以，这句话就等价于window.test();
//window.test();
 
//全局变量是window对象的属性
var t = "阿斌";
 
console.log(window.t);
 
var obj = {
	name:"张三",
	sex:"男"
}
 
console.log(window.obj.name);
 
//this转移是我们会碰到的问题？
//1)、如何区分this
//  一定要看清楚this所在函数调用时的隶属对象（）
 
//2)、如果不希望被this折磨
//  可以选用ES6中的箭头函数。
 
</script>
```

