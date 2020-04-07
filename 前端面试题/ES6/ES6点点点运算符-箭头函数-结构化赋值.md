## ES6 - 点点点运算符
```
// ...arr  ---  收集
function sum(...arg) {
    // ...arg
    // arg == arguments 并将类数组转化为数组了、
    let sumNumber = 0;
    arg.forEach(function(ele) {
        sumNumber += ele;
    });
    return sumNumber;
}
console.log( sum(1, 2, 3, 4, 5, 6) ); // 21

function sum(a, b, ...arg) { console.log(a, b, arg) }
sum(1, 2, 3, 4, 5); // 1 2 [3, 4, 5]

// ...arr  ---  展开
let arr = [1, 2, 3];
(function(a, b, c) { console.log(a, b, c) }( ...arr )); // 1 2 3

let arr = [1, 2, 3]
console.log(...arr); // 1 2 3
let arr1 = [1, 2, 3],
    arr2 = [4, 5, 6],
    newArr = [...arr1, ...arr2]
console.log(newArr); // [1, 2, 3, 4, 5, 6]


// 在ES7中，支持对象浅层克隆、兼容不好
let obj_1 = { name: 'aaa', are: 18, arr: [1, 2, 3] }
let obj_2 = { name: 'bbb', test: 666, obj: { a: 1, b: 2, c: 3 } }
let newObj = {...obj_1, ...obj_2, test: 'hi~' }
console.log(newObj);
```
## ES6 - 结构化赋值
```
let obj = { a: 1, b: 2, c: 3 }
let { a, b, c } = obj;
console.log(a, b, c); // 1 2 3
let { a: aa, b: bb, c: cc } = obj;
console.log(aa, bb, cc); // 1 2 3
// 默认赋值 (很常见)
let { d: dd = 100 } = obj;
console.log(dd); // 100
function sum(a = 1, b = 2) { console.log(a, b) }
// 解构数组
let arr = [1, 2, 3]
let { 0: x, 1: y, 2: z } = arr;
console.log(x, y, z); // 1 2 3
let [x, y, z] = arr;
console.log(x, y, z); // 1 2 3
let [, , z, s = 5] = arr;
console.log(z, s); // 3 5
```
## ES6 - 箭头函数
```
// 箭头函数特点：
// 1、不用写function关键字
// 2、只能作为函数使用不能new，没有原型
// 3、参数不能重复命名
// 4、返回值可以不写return，但是有时需要配合{}
// 5、内部arguments this由定义时外围最接近一层的非箭头函数的arguments和this决定其值。

let fn = (a, b, c) => { console.log(a, b, c) }
fn(1, 2, 3); // 1 2 3
// 省略 return
let fn = (a, b) => a + b;
fn(5, 10) // 15
// 更加精简的写法、
let sum = x => y => z => x + y + z;
sum(1)(2)(3); // 6

// 箭头函数没有arguments，会向上找(function)
function demo() {
    let test = (...arg) => {
        console.log(arguments); // [1, 2]
        console.log(arg); // [3, 4]
    };
    test(3, 4);
}
demo(1, 2);


// —— 技巧篇
let obj = {
    a: 0,
    fn() {
        // 箭头函数this为外围function的this，箭头函数没有原型链、
        setInterval(() => { console.log(++this.a) }, 500);
    }
}
obj.fn();

let arr = [1, 5, 8, 6, 7, 2, 4, 3]
arr.sort( (a, b) => a - b );  // [1, 2, 3, 4, 5, 6, 7, 8]
arr.filter( ele => ele > 5 ); // [6, 7, 8]
```


