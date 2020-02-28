# TypeScript 学习笔记
TypeScript 是 JavaScript 的一个超集，主要提供了 类型系统 和对 ES6 的支持，由 Microsoft 开发。

应用：vue3.0，angular2.0，vscode...

- 编译型语言：编译为 js 后运行，单独无法运行;
- 强类型语言;
- 面向对象的语言;
## 优势
- 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用；
- 可以在编译阶段就发现大部分错误，这总比在运行时候出错好；
- 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等；
**总结：TypeSctipt增加了代码的可读性和可维护性。**
## 安装
需要有node环境，通过npm安装
```
npm install -g typescript
```
## 编码
在线编译预览 TS

使用 .ts 文件扩展名， 使用 typescript 编写使用 React 时，使用 .tsx 扩展名。

使用 : 指定变量的类型，: 的前后有没有空格都可以;
```
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```
## 编译
使用tsc 命令可编译 .ts 文件， 生成一个同名 .js 文件；编译的时候即使报错了，还是会生成编译结果(.js)，可通过 tsconfig.json 文件配置

```
tsc demo.ts
```
## 基础类型
### 布尔值 boolean
```
let isDone: boolean = false;
```

注意，使用构造函数 Boolean 创造的对象不是布尔值
```
let newBool: boolean = new Boolean(true);
// 编译报错: 不能将类型“Boolean”分配给类型“boolean”。“boolean”是基元，但“Boolean”是包装器对象。如可能首选使用“boolean”。ts(2322)
```
### 数字 number
```
let number: number = 6;
let notANumber: number = NaN;
```
### 字符串 string
```
let  string: string = 'Tom';
let sentence: string = `my name is ${aString}`;
```
### 空值 void
void 类型的变量只能赋值为 undefined 和 null
```
let unusable: void = undefined;
```
可以用 void 表示没有任何返回值的函数
```
function alertName(): void {
  alert('My name is Tom');
}
```
### null 和 undefined
undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null
```
let u: undefined = undefined;
let n: null = null;
```
与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
```
let u: undefined;
let num: number = u;
let num2:number = undefined;
// 编译合法 undefined是number的子类型

let unm2: void;
let num3: number = unm2;
// => 不合法 (void不是number的子类型)
```
### 任意值 any
any 用来表示允许赋值为任意类型
```
let anyType:any = 'seven';
anyType = 7;
```
在任意值上访问任何属性和方法都是允许的，即不做类型检查
```
let anyType:any = 'seven';
console.log(anyType.name().age) 
// => 允许编译，但是js执行会报错
```
变量如果在声明的时候，未指定其类型， 也没有赋值， 那么它会被推断(类型推论)为任意值类型而完全不被类型检查

```
let something; 
// 等价于 let something: any;
something = 'seven';
something = 7;
```

### 数组
可理解为相同类型的一组数据，数组类型有多种定义方式

1，类型 + 方括号（ type [ ] ）

这种方式定义的数组项中不允许出现其他的类型
```
let list: number[] = [1, 2, 3];
```
2，数组泛型 Array < type >
```
let list: Array<number> = [1, 2, 3];
```
元祖 Tuple
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同，简单理解为可定义一组不同类型的数据：

```
let arr:[string, number] = ['name', 20];
console.log(arr[0]); 
// => 'name' 
```
越界元素：当访问超出元祖长度的元素时，它的类型会被限制为元祖中每个类型的联合类型
```
let arr:[string, number] = ['name', 20];
arr[0] = 'age';
arr[2] = 'string';
arr[3] = 40;
arr[4] = true; // 编译报错
```
### 枚举 enum

枚举类型用于取值被限定在一定范围内的场景，如一周只有7天，一年只有4季等。

### 枚举初始化
枚举初始化可以理解为给枚举成员赋值。每个枚举成员都需要带有一个值，在未赋值的情况下， 枚举成员会被赋值为从 0 开始， 步长为 1 递增的数字：
```
enum Weeks {Mon, Tue, Wed, Thu, Fri, Sat, Sun};

console.log(Weeks['Mon']); // => 0
console.log(Weeks[0]); // => 'Mon'
console.log(Weeks.Tue); // => 1
```
手动赋值时， 未赋值的枚举成员会接着上一个枚举项递增（初始化）：
```
enum Weeks {
    Mon, Tue, Wed, Thu = 2, Fri, Sat = -1.5, Sun
};

console.log(Weeks['Mon']); // => 0
console.log(Weeks.Wed); // => 2
console.log(Weeks.Thu); // => 2
console.log(Weeks.Fri); // => 3
console.log(Weeks.Sun); // => -0.5
```
上例中，未手动赋值的 Wed 和手动赋值的 Thu 取值重复了，但是 TypeScript 并不会报错，该种情况可能会引起取值错误，所以使用的时候最好避免出现取值重复的情况。

TypeScript 支持 数字 的和基于字符串的枚举。












