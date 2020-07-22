## JS中的几种模式
### 一、单例模式
**把描述同一个事物(对象)的属性和方法放在同一个命名空间下防止相互之间的冲突，实现了分组，这种编写代码的模式就是单例模式，可以用来进行模块化开发。
模块化开发即是根据需求将项目划分成不同的功能板块，分别进行开发，最后再进行合并。
虽然实现了分组，但是不能批量生产，属于手工作业模式
单例模式中给每个对象开辟的空间叫做命名空间**
```js
var utils = {
  work: function(){
    console.log('I can write JS');
  }
};

var person1 = {
  name: 'html',
  feature: 'frame'
  write: function(){
    console.log('I can write html');
  }
};

var person2 = {
  name: 'css',
  feature: 'decoration'
  write: function(){
    console.log('I can write css');
  }
  // 在当前命名空间下调用其他命名空间内的方法
  utils.work();
  // 在当前命名空间下调用本命名空间内的方法
  skills: function(){
    console.log('I can decorate html');
    this.write();
  }
};
// person1和person2就叫做命名空间
```
### 二、工厂模式
*把实现同一个功能的相同代码放到一个函数中，只需要执行当前函数，就可以实现该功能，这种模式叫做工厂模式，也即，函数的封装(低耦合高内聚)，可减少冗余代码，提高代码的复用率*
```js
function createPerson(name, age){
  var obj = {};
  obj.name = name;
  obj.age = age;
  obj.work = function () {
      console.log(`my name is ${this.name}, i can write JS`);
  }
  return obj;
}
var person1 = createPerson('lulu', 23);
person1.work();
var person2 = createPerson('xia', 24);
person2.work();
```
*JS是一门轻量级的编程语言(HTML+CSS属于标记语言)
所有编程语言都是面向对象开发的，都有类的封装，继承和多态的特性
继承：子类继承父类中的属性和方法
多态：当前类的多种形态，包含重载和重写，重载指函数名相同，参数(包括类型数量等)不同，从而实现不同的功能；重写指方法名相同，参数相同，当前方法覆盖之前定义的方法
JS中当然也有多态，但是不存在重载，只要方法名相同，就会覆盖前面的，只保留一个。
JS中有一个操作类似重载但不是重载：可以根据传递参数的不一样，实现不同的功能*
```js
function sum(num){
  if(typeof num === 'undefined'){
      return 0;
  }
  return num;
}
sum(); // 0
sum(10); // 10
```
### 三、构造函数模式
#### 构造函数和工厂模式的区别
* 1、执行的时候：普通函数->createPerson()；构造函数->new createPerson() 通过new执行后，createPerson就称作一个类，规范起见，类名首字母一般大写。函数执行的返回值就是类的一个实例。
* 2、函数代码执行的时候都是形成一个私有作用域，经历形参赋值，变量提升，代码从上到下执行的步骤
构造函数创建不需要自己定义对象，浏览器会创建一个默认的对象，这个对象就是当前创建的实例。用this代表，分别把属性名和属性值赋值给当前实例。最后浏览器默认返回当前实例。
```js
function CreatePerson(name, age){
  this.name = name;
  this.age = age;
  this.work = function () {
    console.log(`my name is ${this.name}, i can write JS`);
  }
}
var p1 = new CreatePerson('lulu', 23);
var p2 = new CreatePerson('lulu', 23);
console.log(p1.work === p2.work);  // false
```
JS中所有的类都是函数数据类型的，即就是一个普通的函数
在构造函数中的this是当前类的一个实例
在类中给实例增加的属性都是私有属性，实例之间的私有属性互不相等
```js
function Fn() {
  var num = 10;
  this.x = 100;  // this是实例
  this.getX = function (){
    console.log(this.x);  // this要在方法执行的时候确定
  }
}
var f1 = new Fn();
var f2 = new Fn;
console.log(f1.num);  // undefined
var res = f1.getX;
res();  // 此时函数里的this是window  会输出undefined
```
### 一些细节知识点
1、在构造函数模式中， new Fn()执行，若不需要传参，则可以省略括号。普通函数中不可省略（Fn()执行，Fn不执行，就是函数本身）。
2、this的问题：在类中出现的this是当前实例本身，但是某一方法中的this要看方法执行的时候.（点）前面是谁才能确定。
3、类也是普通函数，var出来的变量只是当前私有作用域下的私有变量，只有this.xxx = xxx才是给实例增加私有属性和方法。
4、构造函数模式中浏览器会默认返回实例（对象数据类型）；若手动返回则分为两种情况：返回基本数据类型的值，当前实例不会改变，如return 100; 返回的是引用数据类型的值，当前实例会被这个值覆盖掉，如return {name: 'js'}，此时new出来的实例就是这个对象了。
5、检测某个实例是否属于某个类

```js
console.log(f1 instanceof Fn);  //-> true 
console.log(f1 instanceof Array);  //-> false
console.log(f1 instanceof Object);  //-> true 所有实例都是对象数据类型的
```
6、f1和f2都是Fn这个类的实例，都拥有x和getX属性，但两个属性都是各自的私有属性
in：检测某一个属性是否属于当前对象(attr in object)，私有公有属性都可检测
hasOwnproperty：检测某一属性是否是当前对象的一个私有属性
利用上面两个方法可以检测某一个属性是否是对象的公有属性

```js
function hasPubProperty(obj, attr){
  return (attr in obj) && !(obj.hasOwnProperty(attr));
}
```
7、isPrototypeOf：检测一个对象是否是另一个对象的原型。或者说一个对象是否被包含在另一个对象的原型链中。
构造函数中拥有了类和实例的概念，并且实例和实例之间是相互独立的-> 实例识别
### 四、原型链函数模式
基于构造函数模式的原型链模式解决了方法或属性的公有问题，即把实例上相同的属性和方法提取成公有属性和方法，通过CreatePerson.prototype原型操作即可。
```js
function Fn() {
  var num = 10;
  this.x = 100;
}
Fn.prototype.getX = function () {
  console.log(this.x);
}
var f1 = new Fn();
```
1、每一个函数数据类型（函数，类）都有一个自带属性：prototype（原型），该属性值是一个对象数据类型的值
2、浏览器给prototype添加了一个属性constructor（构造函数），属性值就是当前函数（类）本身。
3、每一个对象数据类型（普通对象，实例，prototype...）自带一个_proto_，属性值是当前实例所属类的原型

#### Object是JS中所有对象数据类型的基类
1、f1 instanceof Object -> true f1可以通过__proto\__属性向上级查找，最后总能查找到基类Object
2、Object.prototype上没有__proto\__属性，即使有也指向本身，毫无意义
3、原型链模式
f1.hasOwnProperty('x') 可以执行，说明hasOwnProperty也是f1的一个方法，但是f1上并没有这个方法，处理方法是：
首先在对象的私有属性上进行查找，若私有属性中存在，则获取私有的属性值，若没有就通过__proto\__属性找到所属类的原型（所属类的原型上定义的都是当前实例公有的属性和方法），原型上有就获取该公有属性，若原型上也没有，继续通过原型的__proto\__属性向上查找直到基类的原型，若还是没有就返回undefined。
这种查找模式即原型链模式。
#### 原型扩展
1、批量设置原型上的共有属性和方法
```js
// 1、设置一个新的变量保存原型的地址 不常用
 var pro = Fn.prototype;
 pro.xxx = '';
 // ...

// 2、手动创建一个新的内存给原型 先保存原来的
var pro = Fn.prototype; 
Fn.prototype = {
    constructor = Fn,
    //...
};
```
2、枚举和不可枚举
```js
var obj = {name: 'js'};
Object.prototype.aa = function () {  }
// for in 循环会遍历私有公有属性 但一般情况下只需要遍历其私有属性
// 可枚举属性propertyISEnumerable
for(var key in obj){
  if(obj.propertyIsEnumerable(key)){
    console.log(key);  
  }
}

// 和hasOwnProperty搭配
for(var key in obj){
  if(obj.hasOwnProperty(key)){
    console.log(key);  
  }
}
```
3、Object.create()IE6-8不兼容
创建一个拥有指定原型和若干指定属性的对象，一个参数作为新创建对象的原型，使用Object.create()是将对象继承到proto属性上

```js
var obj = {season: 'summer', weather: 'hot'};
var obj1 = Object.create(obj);
// 即：创建一个新对象obj1，并且让obj作为这个新对象的原型

// 自己实现Object.create()
function objectCreate(o){
   function Fn() {}
   Fn.prototype = o;
   return new Fn();
}
var newObj = objectCreate(obj);
```
