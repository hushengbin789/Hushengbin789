# TypeScript 学习笔记
## 类型推论
变量申明如果没有明确的指定类型，那么 TypeScript 会依照类型推论的规则推断出一个类型
```
let string = 'seven';
// 等价于 let string: string = 'seven';
string = 4;
// 编译报错: error TS2322: Type 'number' is not assignable to type 'string'
```
变量声明但是未赋值，会推论为 any
```
let x;
x = 1;
x = 'aaa'
```
## 联合类型
表示取值可以为多种类型中的一种，使用 | 分隔每个类型
```
let stringOrNumber:string | number;
stringOrNumber = 'seven';
```
当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候, 我们只能访问此联合类型的所有类型里共有的属性或方法

```
function getString(something: string | number): string {
  // toString 是 string类型 和 number类型 的共有属性
  return something.toString();
}

function getLength(something: string | number): number {
  return something.length;
  // => 编译报错: length 不是 string类型 和 number类型 的共有属性, 所以报错
}
```
## 类型断言
类型断言（Type Assertion）可以用来手动指定一个值的类型。

类型断言有2种形式：

1，<类型>值 ( 尖括号语法 )
```
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```
2，值 as 类型 ( as 语法 )

当使用 tsx 时，只有 as语法断言是被允许的
```
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
在上述 联合类型 的例子中， getLength 方法会编译报错，此时我们可以使用类型断言，将 something 断言成 string 就不会报错了：
```
function getLength(something: string | number): number {
    if ((<string>something).length) {
        // 将 something 断言为 string类型
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
```
注意 : 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
```
function toBoolean(something: string | number): boolean {
    return <boolean>something;
    // => 报错
}
```
## 类型别名 type
类型别名用来给一个类型起个新名字，多用于联合类型：

```
type Name = string;
type GetName = () => string;
type NameOrGetter = Name | GetName;
function getName(n: NameOrGetter): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```

type 声明可以定义联合类型，基本类型等多种类型，而 interface 只能定义对象类型

## 字符串字面量类型
字符串字面量类型用来约束取值只能是某几个字符串中的一个。
```
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
```
## 接口 Interfaces
接口（Interfaces）是一个很重要的概念，可以理解为一种规范或者约束，用来描述 对象(object) 的形状 或者对 类(class) 的行为 进行抽象。对类的行为抽象将在后面 类与接口 一章中介绍，下面主要介绍对对象的形状进行描述。

接口定义
使用 interface 定义接口, 接口名称一般首字母大写，定义接口的时候，只定义声明即可，不包含具体内容：
```
// 定义一个接口 Person
interface Person {
  name: string;
  age: number;
}

// 定义一个个变量，它的类型是 Person
let tom: Person = {
  name: 'Tom',
  age: 25
};
```
实现接口的时候，要实现里面的内容，定义的变量比接口少了或多了属性都是不允许的：

```
let tom: Person = {
  name: 'tom'
}
// => 编译报错，少了age属性
```
## 可选属性
使用 ? 代表可选属性, 即该属性可以不存在, 但不允许添加未定义的属性
```
interface Person {
  name: string;
  age?: number;
}
let tom: Person = {
  name: 'tom'
}
// age是可选属性
```
## 任意属性
定义了任意属性后可以添加未定义的属性，并可以指定属性值的类型
```
interface Person03 {
  name: string;
  age?: number;
  [propName: string]: any;
}
let tom04: Person03 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};
```
定义了任意属性，那么确定属性和可选属性都必须是它的子属性
```
interface Person {
  name: string;
  age?: number;
  [propName: string]: string;
}
// 编译报错：Person定义了一个任意属性，其值为string类型。则Person的所有属性都必须为string类型，而age为number类型
```
## 只读属性 readonly
```
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}
```
只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
```
let person: Person = {
  id: 100,
  name: 'tom',
}
person05.id = 90;
// => 编译报错：id为只读, 不可修改

let person2: Person = {
  name: 'welson',
  age: 2
}
// => 编译报错：给对象 person2 赋值，未定义只读属性id
person2.id = 1;
// => 编译报错：id为只读, 不可修改
```
## 函数类型接口
```
// 只有参数列表和返回值类型的函数定义, 参数列表里的每个参数都需要名字和类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```