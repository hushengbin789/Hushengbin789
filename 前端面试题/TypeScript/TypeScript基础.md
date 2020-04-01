## 类型约束
```
// 约束变量必须为string类型，如果赋值为数字或其他类型则立马报错(静态的，不需要运行)
let say: string = "hello";

// 约束函数
function sum(a:number, b:number):number {  return a + b;  }
let num:number = sum(123, 456);

// 约束数组有两种写法
let nums:number[] = [1, 2, 3];
let nums1:Array<number> = [4, 5, 6];

//  :void -- 表示函数没有返回值
function never():void { console.log('xxx') }
// :never -- 表示函数永远不会有返回
function never():never {
    while (true) { // ··· 死循环 ··· }
}
```
## 联合类型
```
 // 约束变量可以是多种类型
let numStr:string|number = 123;
numStr = 'abc';
```
## 字面量类型
```
// 字面量类型 约束变量只能赋值 "男" 或 "女" 
let gender: "男" | "女";  gender = "男";  gender = "女";

```
## 函数重载
```
// 约束函数传统的a、b参数'保持一致'
function xxx(a: string, b: string): string;
function xxx(a: number, b: number): number;
function xxx(a: string | number, b: string | number) {
    if (typeof a === "string" && typeof b === "string") {
    return a + b;
    }
    if (typeof a === "number" && typeof b === "number") {
    return a * b;
    }
    new Error("xxxxxxxx");
}
xxx(123, 13);
```
## 类型别名
```
// 将一种类型单独抽离出来。(自定义类型)
type Gender = "男" | "女";
let gender: Gender;  gender = "女";  gender = "男";
```
## 类型枚举
```
// 会参与编译，用于后期可能会批量修改的变量值
enum _gender {  male = "小哥哥", female = "小姐姐"  }
let gender:_gender = _gender["man"]; // '小哥哥'
```
## 定义接口
```
// 定义接口(约束对象)
interface User {
    name: string | null;
    age: number;
    sayHello: (text: string) => void;
}
let user: User = {
    name: null,
    age: 18,
    sayHello: function(content) {
    console.log(content);
    }
};
user.sayHello("Hello World~");

// 三种约束函数的形式对比
type Condition1 = (n: number) => boolean;
type Condition2 = {
    (n: number): boolean;
};
interface Condition {
    (n: number): boolean;
}

// 接口的继承
interface A { T1:string; }
interface B { T2:number; }
interface C extends A, B { T3:boolean; }
let oA:C = {  T1:"123", T2:456, T3:true  } // oA 被赋值时必须为 T1:string,T2:number,T3:boolean 不能多也不能少，只能刚刚好
```
## TS修饰符
```
// readonly -- 被修饰的字段为只读类型 (不在编译结果中)
interface user1 {
    readonly id: string;
    name?: string; // 可以为空
    age: number;
    xxx: boolean;
}
const user1: user1 = {
    id: "id-001",
    // name: undefined,
    age: 18,
    xxx: true
};
// user1.id = "id-002"; // 只读，不能再次修改
user1.age = 19;
user1.xxx = false;

// 数组中用readonly修饰后，所有的成员不可被改变。(两种写法效果一致)
// let arr1:   readonly (string|number)[] = [11, "22", 33, "44", 55];
    let arr1: ReadonlyArray<number|string> = [11, "22", 33, "44", 55];
// arr1[2] = " 只读：不可改变，会报错 ";
arr1 = [1, 2, 3]; // 因为是let不是const赋值，arr1可以整个被修改。
```
## TS类
```
// 访问修饰符(public、private)可以控制类中的某个成员的访问权限
// -  public -- 默认公开的，所有代码均可访问。
// - private -- 私有的，只有在类中可以访问。不对外暴露，防止外部修改
class User3 {
    readonly id: string = `id-${+new Date()}`; // 不能改变
    // name: string;
    gender: "男" | "女" = "男"; // 默认赋值
    pid?: string; // 可空
    private password: string = "123456"; // 私有属性，不允许外部使用。

    // public name:string  -- 这种写法是法语糖(简写)，会直接增加并修改this.name  (只要加了修饰符就会触发这个语法糖)
    constructor(public name: string, private _age: number) {
    // this.name = name;
    this.age = _age;
    }

    // ES6访问器：用于控制属性的访问和读取。如果将'set age'这个函数整个注释掉，this.age将会是一个只读的属性。
    set age(val: number) {
    // 可以通过各种条件来约束限制值的范围
    if (val < 18) this._age = 18;
    else if (val > 100) this._age = 100;
    else this._age = Math.floor(val);
    }
    get age() { return this._age; }
}

const user3 = new User3("xxx", 26.8);
console.log(user3.age); // 26
user3.age = -300.5;     // 18
```
## 泛型
```
// 泛型：是指附属于函数、类、接口、类型别名之上的类型。
// 泛型相当于是一个类型变量，在定义时，无法预先知道具体的类型，可以用该变量来代替，只有到调用时才能确定它的类型。(自动推导)
function take<T>(arr:T[], n:number):T[] {
    if (n >= arr.length) { return arr; }
    const newArr:T[] = [];
    arr.map((item, index) => index < n && newArr.push(item));
    return newArr;
}
let newArr = take<string|number>([1, "2", 3, 4, "5"], 2);
console.log(newArr);   // [ 1, '2' ] :(string|number)[]
take([1, true, 3], 5); // 自动推导返回类型 :(number|boolean)[]

// 在类中使用泛型
class ArrayHelper<T> {
    constructor(private arr: T[]) {}     // 语法糖
    log(): T[] { return this.arr; }
}
new ArrayHelper([1, "2", null]).log(); // :(string|number|null)[]

// 泛型约束：用于实现泛型的取值
interface hasNameProperty { name: string; }
// 鸭子辩型法，通过继承接口，可以约束传入的obj必须包含name的属性，并且为string类型。
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
    obj.name = "xxx";
    return obj;
}
const o = {
    name: "kevin yuan",
    age: 22, gender: "男", xxx: "xxx"
};
const newO = nameToUpperCase(o);
console.log(newO.name, newO.xxx);

// 多泛型
function mixinArray<T,K>( arr1:T[], arr2:K[] ) :(T|K)[] {
    return [...arr1,...arr2];
}
mixinArray([1, 2, 3], ["a", "b", "c"]); // :(string|number)[]
```



