TypeScript

TypeScript是一种由微软开发的自由和开源的编程语言。它是JavaScript的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。今天就从安装TypeScript环境出发，结合具体的实例来深入探索TypeScript。

1. 安装
```
npm install -g typescript
```
2. vscode自动编译
```
项目目录终端执行 tsc --init
更改tsconfig.json “outDir”: “./js”
```
基础语法

1. 数据类型
```
布尔值
数字
字符串
数组
元组 Tuple
枚举
Any
Void （函数没有返回值使用。）
Null 和 Undefined （默认情况下null和undefined是所有类型的子类型。）
Never （never类型是任何类型的子类型）
Object
```
2. 函数
```
声明函数
function run():string {
 return 'typescript';
}
匿名函数
var fun = function():string {
 return 'typescript';
}
定义方法传参
function user(name:string,age:number):string {
 return `${name}----${age}`;
}
var user = function(name:string,age:number):string {
 return `${name}----${age}`;
}
没有返回值
function run():void {
 console.log('typescript' );
}
方法可选参数
function user(name: string,age?:number):string {
 return `${name}----${age}`;
}
方法参数默认值
function user(name: string,age:number=20):string {
 return `${name}----${age}`;
}
方法剩余参数
function user(...result:number[]):string {
 
}
function user(name: string,...result:number[]):string {
 
}
重载
function user(name: string):string;
function user(age: number):number;
function user(str:any):any {
 if(typeof str==='string) {
 return str
 } else {
 return str
 }
}
```
3.类
```
基本模型
class Person {
 name: string; //属性 省略publick 关键词
 constructor(name:string) { //构造函数 实例化的时候调用的方法(初始化对象)
 this.name = name;
 }
 run():void {
 alert(this.name);
 }
}
class Person {
 name: string; //属性 省略publick 关键词
 constructor(name:string) { //构造函数 实例化的时候调用的方法(初始化对象)
 this.name = name;
 }
 setName():void {
 this.name = name;
 }
 getName():string {
 alert(this.name);
 }
}
var person1 = new Person('张三');
alert(person1.getName());
person1.setName('李四')；
alert(person1.getName());
```
4.继承
```
class Person {
 name: string; //属性 省略publick 关键词
 constructor(name:string) { //构造函数 实例化的时候调用的方法(初始化对象)
 this.name = name;
 }
 run():string {
 return `${this.name}`
 }
}
子类可以使用父类的属性和方法 如果子类的方法或者属性和父类相同 则以子类为主
class Web extends Person {
 constructor(name:string) {
 super(name); //初始化父类的构造函数
 }
 work():string {
 return `${this.name}在运动`
 }
 run():string {
 return `${this.name}`
 }
}
var w = new Web('李四');
alert(w.run());
```
5.类里面的修饰符
public
共有类型 在类里面、子类、类外面都可以访问(默认，不写默认就是)。

protected
保护类型 在类里面、子类可以访问，类外面都不可以访问。

private
私有类型 在类里面可以访问，子类和类外面都不可以访问。

6. 类的静态属性和静态方法

static （静态方法里面不能直接调用类里面的属性，能调用静态属性）
```
class Person {
 public name:string;
 static age:number=20;
 constructor(name) {
 this.name = name;
 }
 run() {
 alert(`${this.name}在运动`);
 }
 static print() {
 alert(`print`+Person.age);
 }
}
```
7.多态
父类定义一个方法不去实现 ，让继承它的子类去实现，让每一个子类有不同的表现
```
class Animal {
 name:string;
 constructor(name:string){
 this.name = name;
 }
 eat() {
 console.log('吃的方法');
 }
}
class Dog extends Animal {
 constructor(name:string) {
 super(name)
 }
 eat() {
 return this.name + '骨头'
 }
}
class Cat extends Animal {
 constructor(name:string) {
 super(name)
 }
 eat() {
 return this.name + '鱼'
 }
}
```
8. 抽象类

提供标准
    abstract 抽象类不能实例化 为子类提供基类
    子类必须实现父类的抽象方法
    abstract必须放在抽象类里面
```
abstract class Animal {
 name:string;
 constructor(name:string){
 this.name = name;
 }
 abstract eat():any;
}
class Dog extends Animal {
 constructor(name:any) {
 super(name);
 }
 eat() {
 console.log(this.name);
 }
}
```
9. 接口

定义规范 定义行为和动作的规范 （接口不关心类内部的数据状态和方法实现的细节）
```
interface FullName {
 firstName: string;
 secondName: string;
}
function printName(name: FullName) {
 console.log(name.firstName+ '--' +name.secondName)
}
var obj = {
 firstName: 'sun',
 secondName: 'yu'
}
printName(obj) // ok
接口的可选属性
interface FullName {
 firstName: string;
 secondName?: string;
}
function printName(name: FullName) {
 console.log(name.firstName+ '--' +name.secondName)
}
var obj = {
 firstName: 'sun',
 secondName: 'yu'
}
printName(obj) // ok
var obj = {
 firstName: 'sun'
}
printName(obj) // ok
函数类型的接口
interface encrypt {
 (key:string,value:string):string;
}
var md5:encrypt = function(key:string,value:string):string {
 return key+value;
}
md5('key','value');
可索引接口 数组和对象的约束(不常用)
interface userArr {
 [index:number]:string
}
var arr:userArr = ['string','string']; //ok
interface userObj {
 [index:string]:string
}
var arr:userObj = ['string','string']; //ok
类类型接口 对类的约束
interface Animal {
 name:string;
 eat(str:string):void;
}
class Dog implements Animal {
 name: string;
 constructor(name:string) {
 this.name = name;
 }
 eat() {
 return `吃骨头`;
 }
}
var dog = new Dog('小黑');
dog.eat();
接口扩展 接口扩展接口
interface Animal {
 eat():void;
}
interface Person extends Animal {
 work():void;
}
class Web implements Person {
 public name:string;
 constructor(name:string){
 this.name= name;
 }
 eat() {
 console.log(this.name+'喜欢吃馒头');
 }
 work() {
 console.log(this.name+'爱工作');
 }
}
---------------------------
interface Animal {
 eat():void;
}
interface Person extends Animal {
 work():void;
}
class programmer {
 public: name:string;
 constructor(name:string) {
 this.name = name;
 }
 coding(code:string){
 console.log(this.name+code);
 }
}
class Web extends programmer implements Person {
 constructor(name:string){
 super(name)
 }
 eat() {
 console.log(this.name+'喜欢吃馒头');
 }
 work() {
 console.log(this.name+'爱工作');
 }
}
```
10.泛型
```
interface FullName {
 firstName: string;
 secondName: string;
}
function printName(name: FullName) {
 console.log(name.firstName+ '--' +name.secondName)
}
var obj = {
 firstName: 'sun',
 secondName: 'yu'
}
printName(obj) // ok
接口的可选属性
interface FullName {
 firstName: string;
 secondName?: string;
}
function printName(name: FullName) {
 console.log(name.firstName+ '--' +name.secondName)
}
var obj = {
 firstName: 'sun',
 secondName: 'yu'
}
printName(obj) // ok
var obj = {
 firstName: 'sun'
}
printName(obj) // ok
函数类型的接口
interface encrypt {
 (key:string,value:string):string;
}
var md5:encrypt = function(key:string,value:string):string {
 return key+value;
}
md5('key','value');
可索引接口 数组和对象的约束(不常用)
interface userArr {
 [index:number]:string
}
var arr:userArr = ['string','string']; //ok
interface userObj {
 [index:string]:string
}
var arr:userObj = ['string','string']; //ok
类类型接口 对类的约束
interface Animal {
 name:string;
 eat(str:string):void;
}
class Dog implements Animal {
 name: string;
 constructor(name:string) {
 this.name = name;
 }
 eat() {
 return `吃骨头`;
 }
}
var dog = new Dog('小黑');
dog.eat();
接口扩展 接口扩展接口
interface Animal {
 eat():void;
}
interface Person extends Animal {
 work():void;
}
class Web implements Person {
 public name:string;
 constructor(name:string){
 this.name= name;
 }
 eat() {
 console.log(this.name+'喜欢吃馒头');
 }
 work() {
 console.log(this.name+'爱工作');
 }
}
---------------------------
interface Animal {
 eat():void;
}
interface Person extends Animal {
 work():void;
}
class programmer {
 public: name:string;
 constructor(name:string) {
 this.name = name;
 }
 coding(code:string){
 console.log(this.name+code);
 }
}
class Web extends programmer implements Person {
 constructor(name:string){
 super(name)
 }
 eat() {
 console.log(this.name+'喜欢吃馒头');
 }
 work() {
 console.log(this.name+'爱工作');
 }
}
```
11.模块
  模块的概念(官方): ”内部模块“=》”命名空间“，”外部模块“=》”模块“ 模块在其自身的作用域里面执行，而不是在全局作用域执行。这就意味着定义一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确的使用export形式之一导出他们。相反，如果想使用其他模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用import形式之一。
  模块的概念(自己理解): 我们可以把一些公共的功能单独抽离成一个文件作为一个模块。模块里面的变量，函数，类等都是私有的，如果我们要在外部访问模块里面的数据（变量，函数，类），我们需要通过export暴露模块里面的数据（变量、函数、类）暴露后我们通过import引用模块里面的数据（变量，函数，类）。
```
定义 db.ts
var a:string = "string";
function getData(value:string):string {
 return value
}
export {
 a,
 getData
}
使用
import { a,getDate } form './db'
getData();
import { a,getData as get} form './db'
get();
定义 db.ts
exprot default function getData(value:string):string {
 return value
}
使用
import getData form './db'
getData();
```
12.命名空间
  命名空间和模块的区别：命名空间，内部模块，主要用于组织代码，避免命名冲突。模块，ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
```
namespace A {
 interface Animal {
 name:string;
 eat(str:string):void;
 }
 export class Dog implements Animal {
 name: string;
 constructor(name:string) {
 this.name = name;
 }
 eat() {
 return `吃骨头`;
 }
 }
}
var dog = A.Dog("小黑");
dog.eat();
命名空间封装成模块
a.ts文件名
定义
export namespace A {
 interface Animal {
 name:string;
 eat(str:string):void;
 }
 export class Dog implements Animal {
 name: string;
 constructor(name:string) {
 this.name = name;
 }
 eat() {
 return `吃骨头`;
 }
 }
}
使用
import { a } from './a'
var dog = new a.Dog();
dog.eat();
```
13.装饰器
  装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
  通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
  常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器。
  装饰器写法：普通装饰器（无法传参）、装饰器工厂（可传参）。
  装饰器是过去几年中js最大的成就之一，已经是Es7的标准特性之一。
```
1.类装饰器(普通装饰器，无法传参)
function logClass(params:any){
 console.log(params);
 params.prototype.apiUrl="动态扩展的属性";
 params.prototype.run = function() {
 console.log("我是run方法");
 }
}
@logClass
httpClient {
 constructor() {
 }
 getData() {
 }
}
var H = new httpClient();
console.log(H.apiUrl);
H.run();
2.类装饰器(装饰器工厂，可传参)
function logClass(params:string){
 return function(target:any) {
 target.prototype.apiUrl="动态扩展的属性";
 target.prototype.run = function() {
 console.log("我是run方法");
 }
 }
}
@logClass('hello')
httpClient {
 constructor() {
 }
 getData() {
 }
}
把类赋值给target
把参数赋值给params
var H:any = new httpClient();
console.log(H.apiUrl);
H.run();
类装饰器重载以前类的构造函数
function logClass(target: any) {
 console.log(target);
 return class extends target{
 apiUrl:any = "我是修改后的url";
 getData() {
 console.log(this.apiUrl);
 }
 }
}
@logClass
httpClient {
 public apiUrl: string | undefined;
 constructor() {
 this.apiUrl = 'url';
 }
 getData() {
 console.log(this.apiUrl);
 }
}
var http = new httpClient();
------------------------------
3.属性装饰器(属性装饰器表达式会在运行时当作函数调用，传入下列两个参数，对于静态成员来说是类的构造函数，对于实例成员是类的原型对象)
function logClass(params:any){
 console.log(params);
 params.prototype.apiUrl="动态扩展的属性";
 params.prototype.run = function() {
 console.log("我是run方法");
 }
}
function logProperty(params:string){
 return function(target: any,attr:any) {
 console.log(target);
 console.log(target[attr]);
 target[attr] = params;
 }
}
@logClass('xxx')
httpClient {
 @logProperty("http://baidu.com");
 public url: string | undefined;
 constructor() {
 
 }
 getData() {
 console.log(this.url);
 }
}
var http = new httpClient();
http.getData();
4.方法装饰器
它会被应用到的方法的属性描述符上，可以用来监视，修改或者替换方法定义
方法装饰器会在运行是传入下列3个参数
（1）对于静态成员来说类的构造函数，对于实例成员来说是类的原型对象。
（2）成员的名字。
（3）成员的属性描述符。
function logMethod(params: any) {
 return function(target:any,methodName:any,desc:any) {
 console.log(target);
 console.log(methodName);
 console.log(desc);
 target.apiUrl="动态扩展的属性";
 target.run = function() {
 console.log("我是run方法");
 }
 }
}
httpClient {
 constructor() {
 
 }
 @logMethod("http://baidu.com")
 getData() {
 console.log(this.url);
 }
}
var http:any = new httpClient();
http.run();
------------------------------------------
function logMethod(params: any) {
 return function(target:any,methodName:any,desc:any) {
 console.log(target);
 console.log(methodName);
 console.log(desc);
 //修改装饰器的方法 把装饰器方法传入所以参数改为string类型
 //保存当前的方法
 var oMethod = desc.value;
 desc.value = function(...args:any[]) {
 args = args.map((value)=>{
 return String(value)
 });
 console.log(args);
 }
 }
}
httpClient {
 public url:any | undefined;
 constructor() {
 
 }
 @logMethod("http://baidu.com")
 getData() {
 console.log(this.url);
 }
}
var http:any = new httpClient();
http.getData(123,'xxx');
```














