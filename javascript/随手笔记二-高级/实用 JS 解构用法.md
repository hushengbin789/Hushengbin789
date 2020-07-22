## 实用 JS 解构用法
### 1. 交换变量
通常交换两个变量的方法需要一个额外的临时变量,来看看例子：
```
let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

a; // => 2
b; // => 1
```
temp是一个临时变量，它先保存a的值。然后把b的值赋值给a，接着将temp值赋给 b。

如果使用解构的方式会更简单，不需要什么鬼的 temp 变量。
```
let a = 1;
let b = 2;

[a, b] = [b, a];

a; // => 2
b; // => 1
```
[a，b] = [b，a]是解构赋值，右边，创建了一个数组[b, a]，即[2,1]。这个数组2被赋值了给a，1被赋值给了b。

虽然这种方式也创建了临时数组，但这种方式给看起来至少更简洁，使用解构咱们还可以交换2个以上的变量。
```
let zero = 2;
let one = 1;
let two = 0;

[zero, one, two] = [two, one, zero];

zero; // => 0
one;  // => 1
two;  // => 2
```
### 2. 访问数组中元素
有种场景，咱们可能有一个为空的项数组。并且希望访问数组的第一个、第二个或第n个项，但如果该项不存在，则使用指定默认值。

通常会使用数组的length属性来判断
```
const colors = [];

let firstColor = 'white';
if (colors.length > 0) {
 firstColor = colors[0];
}

firstColor; // => 'white'
```
使用数组解构，可以更简洁的实现同样的效果：
```
const colors = [];

const [firstColor = 'white'] = colors;

firstColor; // => 'white'
```
const [firstColor = 'white'] = colors 解构将colors数组的第一个元素赋给firstColor变量。如果数组在索引0处没有任何元素，则分配“white”默认值。

当然还可以更灵活，如果只想访问第二个元素，可以这么做。
```
const colors = [];

const [, secondColor = 'black'] = colors;

secondColor; // => 'black'
```
注意解构左侧的逗号：它表示忽略第一个元素,secondColor使用colors数组中索引为1的元素进行赋值。

### 3.不可变操作
当我开始使用React和Redux时，被迫编写了一些遵守不可变性的代码。虽然一开始有些困难，但后来我看到了它的好处:更容易处理单向数据流。

不变性要求不能改变原始对象。幸运的是，解构可以以不可变的方式轻松实现某些操作。
```
const numbers = [1, 2, 3];

const [, ...fooNumbers] = numbers;

fooNumbers; // => [2, 3]
numbers; // => [1, 2, 3]
```
解构 [, ... fooNumbers] = numbers创建一个新的数组fooNumbers，fooNumbers 包含 numbers 元素，除了第一个元素。

numbers 数组没有发生变化，保持操作不变性。

以同样不可变的方式，可以从对象中删除属性，接着试着从对象big中删除foo属性：
```
const big = {
 foo: 'value Foo',
 bar: 'value Bar'
};

const { foo, ...small } = big;

small; // => { bar: 'value Bar' }
big; // => { foo: 'value Foo', bar: 'value Bar' }
```
### 4.解构 iterables
在前面几个例子中，对数组使用了解构，但是咱们可以对任何实现可迭代协议( iterable protocol)的对象进行解构。

许多原生基本类型和对象都是可迭代的: array, string, typed arrays, set 和 map。

如果不想局限于基本类型，通过实现可迭代协议，可以定制解构逻辑。

movies包含一个movie对象列表。在解构movies时，将title作为字符串获取是非常棒的。让咱们实现一个自定义迭代器。
```
const movies = {
  list: [
    { title: 'Heat' }, 
    { title: 'Interstellar' }
  ],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.list.length) {
          const value = this.list[index++].title;
          return { value, done: false };
        }
        return { done: true };
      }
    };
  }
};

const [firstMovieTitle] = movies;
console.log(firstMovieTitle); // => 'Heat'
```
movies对象通过定义Symbol.iterator方法来实现可迭代协议，迭代器迭代title。

遵循iterable协议允许将movies对象分解为title，具体方法是读取第一个movies的title:const [firstMovieTitle] = movies。

### 5.解构动态属性
根据经验，通过属性对对象进行解构比数组解构更常见。

对象的解构看起来很更简单：
```
const movie = { title: 'Heat' };

const { title } = movie;

title; // => 'Heat'
const {title} = movie创建一个变量title，并将属性movie.title的值赋给它。
```
到对象解构时，我有点惊讶于咱们不必静态地知道属性名，可以使用动态属性名称来解构对象。

为了了解动态解构如何工作的，编写一个greet函数：
```
function greet(obj, nameProp) {
 const { [nameProp]: name = 'Unknown' } = obj;
 return `Hello, ${name}!`;
}

greet({ name: 'Batman' }, 'name'); // => 'Hello, Batman!'
greet({ }, 'name'); // => 'Hello, Unknown!'
```
使用2个参数调用greet() 函数：对象和属性名称。

在greet()内部，解构赋值const {[nameProp]：name ='Unknown'} = obj使用方括号的形式 [nameProp]读取动态属性名称，name变量接收动态属性值。

更好的做法是，如果属性不存在，可以指定默认值“Unknown”。


