### 学透JSON.stringify

JSON.stringify()  方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性

### 语法
```
JSON.stringify(value[, replacer [, space]])
```
#### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parameters)
#### value
+ 将要序列化成 一个 JSON 字符串的值。


#### replacer 可选

+ 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；
+ 如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；
+ 如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。



#### space 可选

+ 指定缩进用的空白字符串，用于美化输出（pretty-print）；
+ 如果参数是个数字，它代表有多少的空格；上限为10。
+ 该值若小于1，则意味着没有空格；
+ 如果该参数为字符串（当字符串长度超过10个字母，取其前10个字母），该字符串将被作为空格；
+ 如果该参数没有提供（或者为 null），将没有空格。
### 返回值

一个表示给定值的JSON字符串。

### 异常

+ 当在循环引用时会抛出异常TypeError ("cyclic object value")（循环对象值）
+ 当尝试去转换 BigInt 类型的值会抛出TypeError ("BigInt value can't be serialized in JSON")（BigInt值不能JSON序列化）
```js
// 1. 转换对象
console.log(JSON.stringify({ name: '前端abin', sex: 'boy' })) // '{"name":"前端abin","sex":"boy"}'

// 2. 转换普通值
console.log(JSON.stringify('前端abin')) // "前端abin"
console.log(JSON.stringify(1)) // "1"
console.log(JSON.stringify(true)) // "true"
console.log(JSON.stringify(null)) // "null"

// 3. 指定replacer函数
console.log(JSON.stringify({ name: '前端abin', sex: 'boy', age: 100 }, (key, value) => {
  return typeof value === 'number' ? undefined : value
}))
// '{"name":"前端abin","sex":"boy"}'

// 4. 指定数组
console.log(JSON.stringify({ name: '前端abin', sex: 'boy', age: 100 }, [ 'name' ]))
// '{"name":"前端abin"}'

// 5. 指定space(美化输出)
console.log(JSON.stringify({ name: '前端abin', sex: 'boy', age: 100 }))
// '{"name":"前端abin","sex":"boy","age":100}'
console.log(JSON.stringify({ name: '前端abin', sex: 'boy', age: 100 }, null , 2))
/*
{
  "name": "前端abin",
  "sex": "boy",
  "age": 100
}
*/

```
