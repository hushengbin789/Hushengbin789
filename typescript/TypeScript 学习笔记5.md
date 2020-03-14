## 访问修饰符
### public
公有属性或方法，可以在任何地方被访问到，默认所有的属性和方法都是 public的

### private
私有属性或方法，不能在声明它的类的外部访问，也不可以在子类中访问

### protected
受保护的属性或方法，它和 private 类似，区别是它可以在子类中访问
```
class Person {
    public name:string;
    private idCard:number;
    protected phone:number;
    constructor(name,idCard,phone) {
        this.name = name;
        this.idCard = idCard;
        this.phone = phone;
    }
}

let tom = new Person('tom',420000,13811110000);
console.log(tom.name) // tom

console.log(tom.idCard) 
// error:Property 'idCard' is private and only accessible within class 'Person'.

console.log(tom.phone)
// error:Property 'phone' is protected and only accessible within class 'Person' and its subclasses

class Teacher extends Person {
    constructor(name,idCard,phone) {
        super(name,idCard,phone);
        console.log(this.name)
        console.log(this.phone)
                console.log(this.idCard)
                // error:Property 'idCard' is private and only accessible within class 'Person'.
    }
}
```
## 多态
同一个父类的多个子类，可以有不同结果的同名方法：

```
class Person {
  eat(){ console.log('eat') }
}
class A extends Person {
  eat(){ console.log('A eat') }
}
class B extends Person {
  eat(){ console.log('B eat') }
}
```
## 抽象类/抽象方法 abstract

abstract 用于定义抽象类和其中的抽象方法。

- 抽象类是提供给其他类继承的基类（父类），是不允许被实例化
- 抽象方法只能包含在抽象类中
- 子类继承抽象类，必须实现抽象类中的抽象方法
```
abstract class Animal {
    abstract eat(); // 抽象方法
    // 普通方法
    sleep(){
      console.log('sleep')
    }
}

let a = new Animal(); // 报错，抽象类不能被实例化

class Cat extends Animal {
    eat(){ 
        // 父类的eat方法必须被实现
      console.log('eat')
    }
}
```
## 类与接口
前面介绍了 接口 可以用来描述 对象(object)的形状，这一章主要介绍 接口 对 类(class)的行为 进行抽象。

## 类实现接口 implements
实现（implements）是面向对象中的一个重要概念。一个类只能继承自另一个类，不同类之间可能会有一些共有特性，提取多个类的共有特性，作为一个接口，再用 implements 关键字来实现就可以大大提高面向对象的灵活性。

举例： 人是一个类，人需要吃东西。动物是一个类，动物也需要吃东西。这种情况就可以把 吃东西 提取出来作为一个接口：
```
interface Ieat {
   eat();
}

class Person implements Ieat{
  eat(){}
}

class Animal implements Ieat {
  eat(){}
}
```
一个类也可以实现多个接口：
```
interface Ieat {
   eat();
}

interface Isleep {
    sleep();
}

class Person implements Ieat, Isleep{
  eat(){}
  sleep() {}
}
```
## 接口继承接口
```
interface Alarm {
    alert();
}

interface LightableAlarm extends Alarm {
    lightOn();
    lightOff();
}
```
## 接口继承类
```
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```
## 混合类型
前面介绍了接口可以用来定义函数的形状，有时候，一个函数还可以有自己的属性和方法：

```
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```