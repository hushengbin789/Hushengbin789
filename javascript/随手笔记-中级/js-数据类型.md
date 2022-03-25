### 数据类型
#### 1 基本的数据类型介绍，及值类型和引用类型的理解
+ undefined
+ null 
+ string
+ number 
+ boolean
+ Symbol es6
+ bigint es6
+ Object

其中 Symbol  和 BigInt  是 ES6 新增的数据类型，可能会被单独问
+ Symbol 代表独一无二的值，最大的用法是用来定义对象的唯一属性名。
+ BigInt 可以表示任意大小的整数。
#### 值类型的赋值变动过程如下
```js
let a = 100;
let b = a;
a = 200;
console.log(b); // 100
```
!['图片'](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55df6cb63d3346be9ec1f572a1514853~tplv-k3u1fbpfcp-watermark.awebp)

值类型是直接存储在 **栈stack** 中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
#### 引用类型的赋值变动过程如下
```js
let a = { age: 20 };
let b = a;
b.age = 30;
console.log(a.age); // 30
```
!['图片'](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56c5c43d1c584ed4b8e4cce8855bab52~tplv-k3u1fbpfcp-watermark.awebp)
引用类型存储在**堆（heap）**中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；

#### 2 数据类型的判断
+ typeof：能判断所有值类型，函数。不可对 null、对象、数组进行精确判断，因为都返回 object
```js
console.log(typeof undefined); // undefined
console.log(typeof 2); // number
console.log(typeof true); // boolean
console.log(typeof "str"); // string
console.log(typeof Symbol("foo")); // symbol
console.log(typeof 2172141653n); // bigint
console.log(typeof function () {}); // function
// 不能判别
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object
```
+ instanceof：能判断对象类型，不能判断基本数据类型，其内部运行机制是判断在其原型链中能否找到该类型的原型。比如考虑以下代码：
```js
class People {}
class Student extends People {}

const vortesnail = new Student();

console.log(vortesnail instanceof People); // true
console.log(vortesnail instanceof Student); // true
```
其实现就是顺着原型链去找，如果能找到对应的 Xxxxx.prototype  即为 true 。比如这里的 vortesnail  作为实例，顺着原型链能找到 Student.prototype  及 People.prototype ，所以都为 true

+ Object.prototype.toString.call()：所有原始数据类型都是能判断的，还有 Error 对象，Date 对象等。
```js
Object.prototype.toString.call(2); // "[object Number]"
Object.prototype.toString.call(""); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(Math); // "[object Math]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(function () {}); // "[object Function]"
```
在面试中有一个经常被问的问题就是：如何判断变量是否为数组？
```js
Array.isArray(arr); // true
arr.__proto__ === Array.prototype; // true
arr instanceof Array; // true
Object.prototype.toString.call(arr); // "[object Array]"
```
#### 3 手写深拷贝
```js
/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 * @param {Map} map 用于存储循环引用对象的地址
 */

function deepClone(obj = {}, map = new Map()) {
  if (typeof obj !== "object") {
    return obj;
  }
  if (map.get(obj)) {
    return map.get(obj);
  }

  let result = {};
  // 初始化返回结果
  if (
    obj instanceof Array ||
    // 加 || 的原因是为了防止 Array 的 prototype 被重写，Array.isArray 也是如此
    Object.prototype.toString(obj) === "[object Array]"
  ) {
    result = [];
  }
  // 防止循环引用
  map.set(obj, result);
  for (const key in obj) {
    // 保证 key 不是原型属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key], map);
    }
  }

  // 返回结果
  return result;
}
```
### 4 根据 0.1+0.2 ! == 0.3，讲讲 IEEE 754 ，如何让其相等？
#### 原因总结：

+ 进制转换 ：js 在做数字计算的时候，0.1 和 0.2 都会被转成二进制后无限循环 ，但是 js 采用的 IEEE 754 二进制浮点运算，最大可以存储 53 位有效数字，于是大于 53 位后面的会全部截掉，将导致精度丢失。
+ 对阶运算 ：由于指数位数不相同，运算时需要对阶运算，阶小的尾数要根据阶差来右移（0舍1入），尾数位移时可能会发生数丢失的情况，影响精度。

##### 解决办法：

1.转为整数（大数）运算。
```js
function add(a, b) {
  const maxLen = Math.max(
    a.toString().split(".")[1].length,
    b.toString().split(".")[1].length
  );
  const base = 10 ** maxLen;
  const bigA = BigInt(base * a);
  const bigB = BigInt(base * b);
  const bigRes = (bigA + bigB) / BigInt(base); // 如果是 (1n + 2n) / 10n 是等于 0n的。。。
  return Number(bigRes);
}
```
这里代码是有问题的，因为最后计算 bigRes 的大数相除（即 /）是会把小数部分截掉的，所以我很疑惑为什么网络上很多文章都说可以通过先转为整数运算再除回去，为了防止转为的整数超出 js 表示范围，还可以运用到 ES6 新增的大数类型，很疑惑

2.使用 Number.EPSILON 误差范围。
```js
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3)); // true
```
> Number.EPSILON 的实质是一个可以接受的最小误差范围，一般来说为 Math.pow(2, -52) 。

3.转成字符串，对字符串做加法运算。
```js
// 字符串数字相加
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  const res = [];
  let carry = 0;
  while (i >= 0 || j >= 0) {
    const n1 = i >= 0 ? Number(num1[i]) : 0;
    const n2 = j >= 0 ? Number(num2[j]) : 0;
    const sum = n1 + n2 + carry;
    res.unshift(sum % 10);
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  if (carry) {
    res.unshift(carry);
  }
  return res.join("");
};

function isEqual(a, b, sum) {
  const [intStr1, deciStr1] = a.toString().split(".");
  const [intStr2, deciStr2] = b.toString().split(".");
  const inteSum = addStrings(intStr1, intStr2); // 获取整数相加部分
  const deciSum = addStrings(deciStr1, deciStr2); // 获取小数相加部分
  return inteSum + "." + deciSum === String(sum);
}

console.log(isEqual(0.1, 0.2, 0.3)); // true
```
这是 leetcode 上一道原题：415. 字符串相加。区别在于原题没有考虑小数，但是也是很简单的，我们分为两个部分计算就行。