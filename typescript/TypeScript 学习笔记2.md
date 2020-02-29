## 数字枚举 
```
enum Weeks {
    Sun, Mon, Tue, Wed, Thu, Fri, Sat
};
```
## 字符串枚举
```
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```
## 异构枚举（Heterogeneous enums）
可以混合字符串和数字，但通常不这么做
```
enum Gender {
    Male = 0,
    Female = "1",
}
```
## 常量成员和计算所得成员
枚举成员的值可以是 常量 或 计算出来的。

上面所举的例子都是常量成员，官网定义如下：

当满足以下条件时，枚举成员被当作是常数：

- 不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值为上一个枚举成员的值加 1。但第一个枚举元素是个例外。如果它没有初始化方法，那么它的初始值为 0。
- 枚举成员使用常数枚举表达式初始化。常数枚举表达式是 TypeScript 表达式的子集，它可以在编译阶段求值。当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：
- 数字字面量
- 引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的）如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用
- 带括号的常数枚举表达式
- +, -, ~ 一元运算符应用于常数枚举表达式
- +, -, *, /, %, <<, >>, >>>, &, |, ^ 二元运算符，常数枚举表达式做为其一个操作对象。若常数枚举表达式求值后为 NaN 或 Infinity，则会在编译阶段报错
所有其它情况的枚举成员被当作是需要计算得出的值。

## 常量枚举 const enum
常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
```
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```
编译后：
```
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
```
## 外部枚举 declare enum
外部枚举与声明语句一样，常出现在声明文件中。
```
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```
编译后：
```
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```
同时使用 declare 和 const 也是可以的，编译结果同常量枚举一致。

## never

永远不存在值的类型，一般用于错误处理函数。
```
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
```
## symbol
自ECMAScript 2015起，symbol成为了一种新的原生类型，就像 number 和 string 一样。

symbol类型的值是通过Symbol构造函数创建的。
```
let sym1 = Symbol();
```
Symbols是不可改变且唯一的。
```
let sym2 = Symbol("key");
let sym3 = Symbol("key");
sym2 === sym3; // false, symbols是唯一的
```
## object
object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
```
function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```
## 内置对象
JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。

### ECMAScript 的内置对象
Boolean、Error、Date、RegExp 等。更多的内置对象，可以查看 MDN 的文档。
```
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
```
### DOM 和 BOM 的内置对象
Boolean、Error、Date、RegExp 等。更多的内置对象，可以查看 MDN 的文档。
```
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
```
### DOM 和 BOM 的内置对象
Document、HTMLElement、Event、NodeList 等。

```
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
```


































