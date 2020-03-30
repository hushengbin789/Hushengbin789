## ES6解构赋值、交换两个变量的值、设置函数默认值、模板字符串、箭头函数

1，解构赋值

解构赋值主要包括数组的解构赋值、对象的解构赋值、字符串的解构赋值、函数参数的解构赋值。

（1）数组的解构赋值

js部分：
```
<script>
//数组的解构赋值
let [a,b,c]=[4,5.6]
console.log(a) //4
console.log(b) //5
console.log(c) //6
</script>
```
函数传参的解构赋值
js部分：
```
<script>
//ES6函数传参解构赋值
function fn1([a,b]){
return a+b;
}
console.log(fn1[6,9])
```
//ES5传参解构赋值
```
function fn(x,y){
return x+y;
}
console.log(fn(4,6))
</script>
```
交换两个变量的值
```
//ES5交换两个变量的值
var a=1;//把a的值赋给c
var b=2;//把b的值赋给a
var c=3;//把c的值赋给b
a=b；
b=c；
```
```
//ES6交换两个变量的值
let a=5;
let b=3;
[a,b]=[b,a]
```
设置函数默认值
```
//ES5中设置函数默认值
function fn(x,y){
x=x||10;
y=y||10;
return x+y;
}
console.log(fn(70,30))
```
```
//ES6中设置函数的默认值
function fn1(x=20,y=30){
return x+y;
}
console.log(fn1(60,70))
```
模板字符串
```
//ES5
var str='hello
world';
```
```
//ES6
var str=`hello

world`;
```
```
var uname='张三';
var age=18;
var hobby='听音乐';
console.log(我的名字叫做${uname}今年${age}岁我的爱好是${hobby})
```
箭头函数
```
let fun=>x*x
console.log(fun(8));

let fn=>()=>{
let x=6;
let y=3;
return x+y;
}
console.log(fn());
```

