# 函数
## 函数声明
```
function sum(x: number, y: number): number {
    return x + y;
}
```
输入多余的（或者少于要求的）参数，是不被允许的
```
sum(1, 2, 3);
// 编译报错：多了1个参数
```
## 匿名函数（函数表达式）
```
let mySum = function (x: number, y: number): number {
    return x + y;
};
```
上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：
```
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>
```
## 用接口定义函数的形状
```
interface FuncAdd {
  (value: number, increment: number): number
}
let add: FuncAdd;
add = function(value: number, increment: number): number {
  return value + increment;
}
// 函数的参数名不需要与接口里定义的名字相匹配
let add2: FuncAdd;
add2 = function(a: number, b: number) {
  return a + b;
}
```
## 可选参数
可选参数必须接在必需参数后面，换句话说，可选参数后面不允许再出现必须参数了
```
function addNum(a: number, b: number, c? :number): number {
    if(c) {
        return a + b + c;
    } else {
        return a + b;
    }
}
console.log(add(1, 2));
```
## 默认参数
类比 ES6 中的默认值
```
function add(a: number = 1, b: number): number {
    return a + b;
}
console.log(add(undefined, 1));
```
## 剩余参数
类比 Es6 中对象展开
```
interface AddFunc {
  (num1: number, ...rest: number[]): number
}
let add: AddFunc;
add = function(a: number, ...rest: number[]): number {
    let result = a; 
    rest.map(v => result += v);
    return result;
}
console.log(add(1,2,3,4));
```
## 函数重载
重载是为同一个函数提供多个函数类型定义，允许函数对传入不同的参数返回不同的的结果分别做类型检查

比如实现一个数字或字符串的反转函数：
```
function reverse(text: number | string): number | string {
  if(typeof text === 'string') {
    return text.split('').reverse().join('');
  } else if(typeof text === 'number') {
    return +text.toString().split('').reverse().join('')
  }
}
```

上述函数利用联合类型实现，但有一个缺点，无法精确检查输入和输出类型，即输入数字输出也应该为数字，这时就可以使用重载定义多个函数类型:
```
function reverse(text: number): number;
function reverse(text: string): string;
function reverse(text: number | string): number | string {
  if(typeof text === 'string') {
    return text.split('').reverse().join('');
  } else if(typeof text === 'number') {
    return +text.toString().split('').reverse().join('')
  }
}
```
重复定义多次函数 reverse，前几次都是函数定义，最后一次是函数实现。

TypeScript与JavaScript的处理流程相似，它会查找重载列表，从第一个重载定义开始匹配，如果匹配的话就使用这个定义，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。

## 类 class
同ES6 的 class

## 相关概念
- 类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
- 对象（Object）：类的实例，通过 new 生成
- 面向对象（OOP）的三大特性：封装、继承、多态
- 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
- 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
- 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
- 存取器（getter & setter）：用以改变属性的读取和赋值行为
- 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
- 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
- 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
## 类的定义
使用 class 定义类，使用 constructor 定义构造函数。

通过 new 生成新实例的时候，会自动调用构造函数。
```
class Animal {
        name:string; // 定义属性
    constructor(name) {
        this.name = name; // 属性赋值
    }
    sayHi() {
        return `我叫 ${this.name}`;
    }
}

let cat = new Animal('Tom');
console.log(cat.sayHi()); // 我叫 Tom
```
## 类的继承
使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。

```
class Cat extends Animal {
    color: string;
    constructor(name, color) {
        super(name); // 调用父类Animal的 constructor(name)
        this.color = color
    }
    sayHi() {
        // 调用父类的 sayHi()；
        return super.sayHi() + '我是一只'+ this.color + ' 色的猫，'; 
    }
}

let c = new Cat('Tom', '橘黄'); // Tom
console.log(c.sayHi()); // 我叫 Tom，我是一只橘黄色的猫；

let cat2 = new Cat('Jerry');
cat2.color = '黑';
console.log(c.sayHi()); // 我叫 Jerry，我是一只黑色的猫；
```
## 存取器
使用 getter 和 setter 可以改变属性的赋值和读取行为：
```
class Animal {
        name:string;
    constructor(name) {
        this.name = name;
    }
    get name() {
        return 'Jack';
    }
    set name(value) {
        console.log('setter: ' + value);
    }
}

let a = new Animal('Kitty'); // setter: Kitty
a.name = 'Tom'; // setter: Tom
console.log(a.name); // Jack
```
## 实例属性和方法
js中的属性和方法：
```
// js中
function Person(name) {
  this.name = name; // 实例属性
  this.eat = function(){ console.log('eat') };  // 实例方法
}
Person.age = 19; // 静态属性
Person.sleep = function(){ console.log('sleep') }; // 静态方法

// 访问实例方法和属性:
var tom = new Person('tom');
console.log(tom.name) // tom
tom.eat();
tom.sleep() // error: tom.sleep is not a function

// 访问静态方法和属性:
console.log(Person.age); // 19
Person.sleep();
Person.eat(); // error: Person.eat is not a function
```
ES6 中实例的属性只能通过构造函数中的 this.xxx 来定义：
```
class Animal {
    constructor(){
            this.name = 'tom';
        }
    eat() {}
}

let a = new Animal();
console.log(a.name); // tom
```
ES7 提案中可以直接在类里面定义：

```
// ts
class Animal {
    name = 'tom';
    eat() {}
}

let a = new Animal();
console.log(a.name); // Jack
```
## 静态属性和方法
ES7 提案中，可以使用 static 定义一个静态属性或方法。静态方法不需要实例化，而是直接通过类来调用：

```
// ts
class Animal {
    static num = 42;
    static isAnimal(a) {
        return a instanceof Animal;
    }
}

console.log(Animal.num); // 42
let a = new Animal('Jack');
Animal.isAnimal(a); // true
a.isAnimal(a); // TypeError: a.isAnimal is not a function
```

