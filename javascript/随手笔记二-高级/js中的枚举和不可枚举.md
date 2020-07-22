## js中的枚举和不可枚举
### 枚举是什么???
枚举是指对象中的属性是否可以遍历出来，再简单点说就是属性是否可以以列举出来。

在js中基本的数据类型是不能被枚举的。例如Object、Array等。
### 枚举方法的区别
####  1.for…in循环可以枚举(遍历)出对象本身具有的属性，通过Object.defineProperty()方法加的可枚举属性，或者通过原型对象绑定的可以枚举属性。
```
function enumer() {
    this.a = '我是对象本身就有的属性';
}
enumer.prototype.b = '我是通过原型对象挂载的属性';
let fn = new enumer();
Object.defineProperty(fn, 'c', {
    value: '我是通过Object.defineProperty方法添加的可枚举属性',
    enumerable: true  // 是否可以枚举
});
for(let item in fn) {
    console.log(item);
}
/*输出*/
// a
// b
// c
```
#### 2.Object.keys()方法可以枚举对象本身的属性和通过Object.defineProperty()添加的可枚举属性
```
function enumer() {
    this.a = '我是对象本身就有的属性';
}
enumer.prototype.b = '我是通过原型对象挂载的属性';
let fn = new enumer();
Object.defineProperty(fn, 'c', {
    value: '我是通过Object.defineProperty方法添加的可枚举属性',
    enumerable: true
});
console.log(Object.keys(fn));
/*输出*/
// ["a", "c"]
```
#### 3.JSON.stringify()方法只能序列化本身的属性和通过Object.defineProperty()添加的可枚举属性为JSON对象
```
function enumer() {
    this.a = '我是对象本身就有的属性';
}
enumer.prototype.b = '我是通过原型对象挂载的属性';
let fn = new enumer();
Object.defineProperty(fn, 'c', {
    value: '我是通过Object.defineProperty方法添加的可枚举属性',
    enumerable: true
});
console.log(JSON.stringify(fn));
// {"a":"我是对象本身就有的属性","c":"我是通过Object.defineProperty方法添加的可枚举属性"}
```
如下，我们来定义Week的枚举：
```
if(typeof WeekDay == "undefined"){
　　　var WeekDay = {};
　　　WeekDay.Sunday = 0;
　　　WeekDay.Monday = 1;
　　　WeekDay.Tuesday = 2;
　　　WeekDay.Wedesay = 3;
　　　WeekDay.Thursday = 4;
　　　WeekDay.Friday = 5;
　　　WeekDay.Saturday = 6;
}

//测试如下：
alert(WeekDay.Monday);　 // -----> Output: 1
```
　
　　当然，我们有更为直观的方式。以定义DOM文档节点类型为例，定义方式如下：
```
if(typeof Node == "undefined"){
　　　　　　　　　　　 var Node = {
　　　　　　　　　　　　　　　 ELEMENT_NODE: 1,
　　　　　　　　　　　　　　　 ATTRIBUTE_NODE: 2,
　　　　　　　　　　　　　　　 TEXT_NODE: 3,
　　　　　　　　　　　　　　　 CDATA_SECTION_NODE: 4,
　　　　　　　　　　 　　　　　ENTITY_REFERENCE_NODE: 5,
　　　　　　　　　　　　　　　 ENTITY_NODE: 6,
　　　　　　　　　　　　　　　 PROCESSING_INSTRUCTION_NODE: 7,
　　　　　　　　　　　　　　　 COMMENT_NODE: 8,
　　　　　　　　　　　　　　　 DOCUMENT_NODE: 9,
　　　　　　　　　　　　　　　 DOCUMENT_TYPE_NODE: 10,
　　　　　　　　　　　　　　　 DOCUMENT_FRAGEMENT_NODE: 11,
　　　　　　　　　　　　　　　 NOTATION_NODE: 12
　　　　　　　　　　　 }
}
   

//测试如下：

alert(document.nodeType == Node.DOCUMENT_NODE);　 // -----> Output: true
```
说明，以上Node定义可作为纠正IE不支持DOM节点类型常量用（其他主流浏览器均支持）。

与类C语言类似，以上2个例子的枚举对应属性值均为整形。你可能想到，难道还能定义成别的类型？

要回答这个问题，得先知道咱们这个枚举实现的原理。前面说到，这里是用JSON来实现的，而JSON可以使用任何类型的值！

所以，Js中的枚举可以是任何类型的值。以下以String类型为例：
```
if(typeof Color == "undefined"){
　　　　var Color = {
　　　　　　　　 Color1: 'red',
　　　　　　　　 Color2: 'green',
　　　　　　　　 Color3: 'white',
　　　　　　　　 Color4: 'black'
　　　}
}

//测试如下：

alert(Color.Color1);　 // -----> Output: red
```
　　以更为复杂的类型来定义一个PersonList枚举如下：
```
if(typeof PersonList == "undefined"){
　　　var PersonList = {
　　　    ZhangSan: {
　　　　　　    Id: 1,
　　　　　　　　Name: 'ZhangSan',
　　　　　　　　Gender: 'man'
　　　　　},
　　　　　LiSi: {
　　　　　　　  Id: 2,
　　　　　　 　 Name: 'LiSi',
　　　　　　　　Gender: 'woman'
　　　　 },
　　　　 ZhaoWu: {
　　　　　　　　Id: 3,
　　　　　　　　Name: 'ZhaoWu',
　　　　　　　　Gender: 'man'
　　　　 }
　　}
}

 ```
