## JavaScript数组遍历：for、foreach、for in、for of、each、().each的区别

## 一、for
Javascript中的for循环，它用来遍历数组
```
var arr = [1,2,3,4]
for(var i = 0 ; i< arr.length ; i++){
    console.log(arr[i])
}
//1,2,3,4
```
九九乘法表：
```
for ( var x = 1; x <= 9; x++) {
    var str="";
    for ( var y = 1; y <= x; y++) {
        str+=x + "*" + y + " = " + (x * y)+"  ";         
    }
    console.log(str);
}
```
二、foreach

forEach循环我们可以直接取到元素，同时也可以取到index值。但是forEach也有一些局限，不能continue跳过或者break终止循环
```

let arr = ['a', 'b', 'c', 'd']
arr.forEach(function (val, index, arr) {
    console.log('index:'+index+','+'val:'+val) // val是当前元素，index当前元素索引，arr数组
    console.log(arr)
})
//index:0,val:a
//["a", "b", "c", "d"]0: "a"1: "b"2: "c"3: "d"
//index:1,val:b
//["a", "b", "c", "d"]
//index:2,val:c
//["a", "b", "c", "d"]
//index:3,val:d
//["a", "b", "c", "d"]
```
```
[].forEach(function(value,index,array){     
　　　　//do something     
　　});          
 等价于：
 $.each([],function(index,value,array){     
　　　//do something     
　})
```
## 三、for in

for(var item in arr|obj){} 可以用于遍历数组和对象
遍历数组时，item表示索引值， arr表示当前索引值对应的元素 arr[item]
遍历对象时，item表示key值，arr表示key值对应的value值 obj[item]
for in一般循环遍历的都是对象的属性，遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性
```
var obj = {a:1, b:2, c:3};    
for (let item in obj) {
  console.log("obj." + item + " = " + obj[item]);
}
// obj.a = 1
// obj.b = 2
// obj.c = 3
var arr = ['a','b','c'];
for (var item in arr) {
    console.log(item) //0 1 2
    console.log(arr[item]) //a b c
}
```
## 四、for of
ES6中新增加的语法 for of 语句创建一个循环来迭代可迭代的对象。在 ES6 中引入的 for of 循环，以替代 for in 和 forEach() ，并支持新的迭代协议。for of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。

### 循环一个数组：
```
let arr = ['A', 'B', 'C']
for (let val of arr) {
    console.log(val) 
}
// A B C
```
### 循环一个字符串：
```
let iterable = "abc";

for (let value of iterable) {
  console.log(value);
}
// "a"
// "b"
// "c"
```
### 循环一个Map:
```
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);    
for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]
```
### 循环一个 Set:
```
let iterable = new Set([1, 1, 2, 2, 3, 3]);    
for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```
***循环一个拥有enumerable属性的对象***

for of循环并不能直接使用在普通的对象上，但如果我们按对象所拥有的属性进行循环，可使用内置的Object.keys()方法：
```
for (var key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}
```
#### 循环一个生成器(generators):
```
function* fibonacci() { // a generator function
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
}
```
## 五、jQuery里面的$.each
```
$.each(arr|obj, function(k, v))
```
可以用来遍历数组和对象，其中k表示索引值或者key值，v表示value值
```
var arr = ['a','b','c']
$.each(arr, function(key, val) {
    console.log(key, val);
})
//0 a
//1 b
//2 c
```
## 六、jQuery里面的$().each()
$().each()在dom处理上面用的较多,主要是用来遍历DOMList。如果页面有多个input标签类型为checkbox，对于这时用$().each()来处理多个checkbox，例如：
```
$(“input[name=’checkbox’]”).each(function(i){
if($(this).attr(‘checked’)==true){
//操作代码
}
```

# 总结
推荐在循环对象属性的时候使用for in,在遍历数组的时候的时候使用for of；

for in循环出的是key，for of循环出的是value；

for of是ES6新引入的特性。修复了ES5的for in的不足；

for of不能循环普通的对象，需要通过和Object.keys()搭配使用。


跳出循环的方式有如下几种：

return 函数执行被终止；

break 循环被终止；

continue 循环被跳过。

