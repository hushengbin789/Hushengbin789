### js中将字符串转换为整型paseInt()、转换为浮点型paseFloat()、强制转换数字Number()
#### 1.paseInt()   整型
+ 第一种不包含字母，==小数点==**之后的**==不会显示==
```js
let str= '1001.1111 ';      
let num = parseInt(str);      
console.log(num)  //1001
```
+ 第二种包含字母，paseInt遇到字母就停止显示后面，显示字母以前的
```js
let str= '10a01.1111';      
let num = parseInt(str);      
console.log(num)  //10
```
```js
let str= 'a10a01';      
let num = parseInt(str);      
console.log(num)  //NaN
```
+ 第三种字母在最前面，结果会显示NaN
```js
//字母在最前面
let str= 'a20 ';      
let num = parseFloat(str);      
console.log(num)  //NaN
```


#### 2.paseFloat()  浮点型
+ 第一种不包含字母，字符串中第一个小数点是有效的，而第二个小数点就是无效的了，它后面的字符串将被忽略
```js
let str= '1001.1111 ';      
let num = parseFloat(str);      
console.log(num)  //1001.1111
```
```js
let str= '1111.2222.3333 ';      
let num = parseFloat(str);      
console.log(num)  //1111.2222
```
+ 第二种包含字母，paseFloat遇到字母就停止显示后面，显示字母以前的
```js
let str= '1001.11a22b ';      
let num = parseFloat(str);      
console.log(num)  //1001.11
```
```js
let str= '10c01.11a22b10a
let num = parseFloat(str);     
console.log(num)  //10
```
+ 第三种字母在最前面，结果会显示NaN
```js
//字母在最前面
let str= 'a10 ';      
let num = parseFloat(str);      
console.log(num)  //NaN
```
#### 3.Number()  数字型
+ 第一种不包含字母，小数点之后正常显示
```js
let str= '1001.1111 ';      
let num = Number(str);      
console.log(num)  //1001.1111
```
+ 第二种包含字母，不管字母在前在后还是中间都会显示NaN
```js
//字母在最后面
let str= '1001.1111abc ';      
let num = Number(str);      
console.log(num)  //NaN
```
```js
//字母在最前面
let str= 'a2001';      
let num = Number(str);      
console.log(num)  //NaN
```