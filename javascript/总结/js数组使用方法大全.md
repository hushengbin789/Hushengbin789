## js数组方法整理
+ join()
+ push()和pop()
+ shift() 和 unshift()
+ sort()
+ reverse()
+ concat()
+ slice()
+ splice()
+ indexOf()和 lastIndexOf() （ES5新增）
+ forEach() （ES5新增）
+ map() （ES5新增）
+ filter() （ES5新增）
+ every() （ES5新增）
+ some() （ES5新增）
### 1.join
join，就是把数组转换成字符串，然后给他规定个连接字符，默认的是逗号(  ，)
> 格式：join(" ")，括号里面写字符串  ("要加引号")
```js
var arr = [1,2,3];
console.log(arr.join()); 　　　 // 1,2,3
console.log(arr.join("-")); 　　// 1-2-3
console.log(arr); 　　　　　　　 // [1, 2, 3]（原数组不变）
```
### push()和pop()
**push()**:  把里面的内容添加到数组末尾，并返回修改后的长度。
**pop()**：移除数组最后一项，返回移除的那个值，减少数组的length。
> 格式：arr.push(" ")，括号里面写内容  ("字符串要加引号"),
> 格式：arr.pop( )
```js
var arr = ["tom","like","alice"];
var count = arr.push("bin","yu");
console.log(count); 　　　　　　　　　　// 5
console.log(arr); 　　　　　　　　　　　// ["tom", "like", "alice", "bin", "yu",]
var item = arr.pop();
console.log(item); 　　　　　　　　　　 // yu
console.log(arr); 　　　　　　　　　　  // ["tom", "like", "alice", "bin"]
```
### shift() 和 unshift() (和上面的push，pop相反，针对第一项内容)
**shift()**：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 
**unshift**:将参数添加到原数组开头，并返回数组的长度 

> 格式：arr.shift(" ")，括号里面写内容  ("字符串要加引号"),
```js
var arr = ["a","b","c"];
var count = arr.unshift("d","e");
console.log(count); 　　　　　// 5
console.log(arr); 　　　　　　//["d", "e", "a", "b", "c"]
var item = arr.shift();
console.log(item); 　　　　   // d
console.log(arr); 　　　　　  // ["e", "a", "b", "c"]
```
### sort()
**sort()**：将数组里的项从小到大排序
> 格式：arr.sort( )
```js
var arr1 = ["a", "d", "c", "b"];
console.log(arr1.sort()); 　　　// ["a", "b", "c", "d"]
```
sort()方法比较的是字符串，没有按照数值的大小对数字进行排序，要实现这一点，就必须使用一个排序函数
```js
function sortNumber(a,b){ //升序  从小到大 [3, 13, 24, 51]
　　return a - b
}
function sortNumber(a,b){// 降序  从大到小 [51, 24, 13, 3]
　　return b - a
}
arr = [13, 24, 51, 3]; 
console.log(arr.sort()); // [13, 24, 3, 51] 
console.log(arr.sort(sortNumber)); 
```
> 这个还可以换参数位置，eg:
> sortNumber(a,b){return a - b}升序
> sortNumber(b,a){return a - b}降序
### reverse()
**reverse()**：反转数组项的顺序。
> 格式：arr.reverse( )
```js
var arr = [1,2,3,4,5];
console.log(arr.reverse()); 　//[5,4,3,2,1]　
console.log(arr); 　　　　　　//[5,4,3,2,1]　　　　　　
```
### concat()
**concat()** ：将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。
> 格式：arr.concat()，括号里面写内容  ("字符串要加引号"),
```js
var arr = [1,2,3,4,5];
var arrCopy = arr.concat(6,[7,8]);
console.log(arrCopy); 　　　　　　　　　　　　//[1,2,3,4,5,6,7,8]
console.log(arr); 　　　　　　　　　　　　　　// [1,2,3,4,5](原数组未被修改)
```
### slice()
**slice()**：返回从原数组中指定开始下标到结束下标之间的项组成的新数组。slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。
在只有一个参数的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。
> 格式：arr.slice( 1 , 3  )
```
var arr = [7,8,9,10];
var arrCopy = arr.slice(1);
var arrCopy2 = arr.slice(1,3);
var arrCopy3 = arr.slice(1,-2);
var arrCopy4 = arr.slice(-3,-1);
console.log(arrCopy); 　　　// [8,9,10]　　
console.log(arrCopy2); 　　 // [8,9]　　　
console.log(arrCopy3); 　　　//[8]　　　　　　
console.log(arrCopy4); 　　　//[8,9]　　　　　
```
> arrCopy只设置了一个参数，也就是起始下标为1，所以返回的数组为下标1（包括下标1）开始到数组最后。 
>arrCopy2设置了两个参数，返回起始下标（包括1）开始到终止下标（不包括4）的子数组。 
> arrCopy3设置了两个参数，终止下标为负数，当出现负数时，将负数加上数组长度的值（4）来替换该位置的数，因此就是从1开始到3（不包括）的子数组。 
> arrCopy4中两个参数都是负数，所以都加上数组长度3转换成正数
### splice()
**splice()**：删除、插入和替换。
删除：指定 2 个参数：要删除的第一项的位置和要删除的项数。
> 格式：arr.splice( 1 , 3  )

插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。
> 格式：arr.splice(  2,0,4,6  )
> 
替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。
> 格式：arr.splice(  2,0,4,6  )
```js
var arr = [1,3,5,7,9,11];
var arrRemoved = arr.splice(0,2);
console.log(arr); 　　　　　　　　　　　　　　　//[5, 7, 9, 11]
console.log(arrRemoved); 　　　　　　　　　　　//[1, 3]
var arrRemoved2 = arr.splice(2,0,4,6);
console.log(arr); 　　　　　　　　　　　　　　　// [5, 7, 4, 6, 9, 11]
console.log(arrRemoved2); 　　　　　　　　　　// []
var arrRemoved3 = arr.splice(1,1,2,4);
console.log(arr); 　　　　　　　　　　　　　　　// [5, 2, 4, 4, 6, 9, 11]
console.log(arrRemoved3); 　　　　　　　　　　//[7]
```
### indexOf()
indexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。
> 格式：arr.indexof( 5 )

lastIndexOf：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。 
> 格式：arr.lastIndexOf(  5,4  )
```js
var arr = [1,3,5,7,7,5,3,1];
console.log(arr.indexOf(5)); 　　　　　　//2
console.log(arr.lastIndexOf(5)); 　　　 //5
console.log(arr.indexOf(5,2)); 　　　　 //2
console.log(arr.lastIndexOf(5,4)); 　　//2
console.log(arr.indexOf("5")); 　　　　 //-1
```
### forEach()
==forEach()==：对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。参数都是function类型，默认有传参，参数分别为：遍历的数组内容；第对应的数组索引，数组本身。
> 格式：arr.forEach()
```js
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(x, index, a){
    console.log(x + ':' + index + ' ' + (a === arr));
});
// 1:0 true
// 2:1 true
// 3:2 true
// 4:3 true
// 5:4 true
```
### map()
==map()==：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
> 格式：arr.map()
```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function(item){
    return item+item;
});
console.log(arr2); 　　//[2, 4, 6, 8, 10]
```
### filter()
==filter()==：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组。
> 格式：arr.filter()
```js
//在一个arr中，删掉偶数，只保留奇数，
var arr = [1, 2, 3, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r); // [1, 3, 5, 9, 15]
```
> filter()接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示Array的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和数组本身：
```js
var arr = ['A', 'B', 'C','D'];
var r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C', 'D'
    console.log(index); // 依次打印0, 1, 2, 3
    console.log(self); // self就是变量arr
    return true;
});
```
### every()
==every()==：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。
> 格式：arr.every()
```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function(x) {
    return x < 8;
}); 
console.log(arr2); 　　　//true
var arr3 = arr.every(function(x) {
    return x < 2;
}); 
console.log(arr3); 　　　// false
```
### some()
some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
> 格式：arr.some()
```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function(x) {
    return x < 3;
}); 
console.log(arr2); 　　　　　　　　//true
var arr3 = arr.some(function(x) {
    return x < 1;
}); 
console.log(arr3); 　　　　　　　　// false

```


