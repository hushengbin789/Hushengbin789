## 解构赋值

1 左右两边必须一样

2 右边必须是个合法的东西

3 声明和赋值不能分开（必须一句话写完）

let [a,b,c]=[11,25,360];      数组

let {a,b,c}={a:1,b:23,c:90};     JSON数组

## ES6数组

###map  ------映射   （一个对一个）



 ````javascript
let arr = [12,23,34];
	arr.map((item) =>alert(item));
 ````



###reduce -----汇总

参数（每次相加最终结果，每个数，下标）

````javascript
	let arr = [12,23,34,9999];

	let result = arr.reduce(function (tmp,item,index) {
		return tmp+item;
		// alert(a','+b+','+c);
	});
	alert(result);

````

###filter -----过滤器

````javascript
let arr = [12,23,34,9999];

	let result = arr.filter(item=>item%3==0);
	alert(result);

````



###forEach --- 循环（迭代）

一个参数代表数组  

两个参数第二个代表下标

````javascript
let arr = [12,23,34,9999];

	let result = arr.forEach((item,index)=>{
		alert(index+':'+item);
	});
````

## 字符串

### startsWith

````javascript
let str = "http://www.555ri.com";
	
	if(str.startsWith("http://")){
		alert("普通网站");
	}else if(str.startsWith("https://")){
		alert("加密网站");
	}else if(str.startsWith("git://")){
		alert("git网站");
	}else{
		alert("其他");
	}
````

### endsWith

````javascript
let str = "http://www.555ri.com";
	
	if(str.endsWith(".com")){
		alert("网站");
	}else if(str.endsWith(".tet")){
		alert("文本");
	}else if(str.endsWith(".jpg")){
		alert("jpg图片");
	}else{
		alert("其他");
	}
````



### 字符串模板

1    可随意插入内容  ${内容}；

2 可以换行；

````javascript
let title = "11111";
	let con = "22222";
	 let str = `<div>
	 <h1>${title}</h1>
	 <p>${con}</p>
	 </div>`;
````

## 面向对象基础

constructor    构造器

````javascript
class user{
		constructor(name,password) {
		    this.name = name;
			this.password = password;
		}
		showName(){
			alert(this.name);
		}
		showPassword(){
			alert(this.password);
		}
	}
	var ul = new user("yyq",123456)
	ul.showName();
	ul.showPassword()
````

### 继承

super    超类==父类   就是继承函数的属性

````javascript
class user{
    	//构造器
		constructor(name,password) {
		    this.name = name;
			this.password = password;
		}
		showName(){
			alert(this.name);
		}
		showPassword(){
			alert(this.password);
		}
	}
	
	class vipUser extends user{
		constructor(name,password,level){
			super(name,password);
			this.level = level;
		}
		showLevel(){
			alert(this.level);
		}
	}
	
	var ul = new vipUser("yyq","123456",3)
	ul.showName();
	ul.showPassword();
	ul.showLevel()
````

