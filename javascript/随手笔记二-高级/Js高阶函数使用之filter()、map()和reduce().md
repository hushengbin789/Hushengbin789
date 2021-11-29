要完全理解`高阶函数`这个概念，首先必须了解函数式编程以及一等函数（First-Class Functions）的概念

### 什么是函数式编程
在大多数简单的术语中，函数式是一种编程形式，你可以将函数作为参数传递给其他函数，并将它们作为值返回。 在函数式编程中，我们以函数的形式思考和编程。JavaScript，Haskell，Clojure，Scala 和 Erlang 是部分实现了函数式编程的语言。
### 一等函数
如果你在学习 JavaScript，你可能听说过 JavaScript 将函数视为一等公民。 那是因为在 JavaScript 及其他函数式编程语言中，函数是对象

在 JavaScript 中，函数是一种特殊类型的对象。 它们是 Function objects。例如：
```js
function egg(){
  console.log('hello egg!')
}
egg()
```
为了证明 JavaScript 中函数是对象，我们可以这样做

```js
obj.a = "你好世界"
console.log(obj.a)
```
注意 - 虽然这在 JavaScript 中完全有效，但这被认为是 harmful 的做法。 你不应该向函数对象添加随机属性，如果不得不这样做，请使用对象。

在 JavaScript 中，你对其他类型（如对象，字符串或数字）执行的所有操作都可以对函数执行。 你可以将它们作为参数传递给其他函数（回调函数），将它们分配给变量并传递它们等等。这就是 JavaScript 中的函数被称为一等函数的原因。

### 什么是高级函数
在 JS 中函数是一等公民，函数可以做为函数的参数和返回值。将函数作为参数或返回值的函数叫做高级函数。同时我们也列举了一些数组中的高级函数


### Js高阶函数使用之filter()、map()和reduce()


```js
const numbers=[12,54,77,120,20,302] //定义一个数组，里面有一些无序的数字
//接下来相对这个数组的数据进行一些操作
//比如说获取该数组中大于60的数字，并对其乘以2，然后求他们的总和
//啥也不会的我一开始是这样做的
   const moreThan60 = (arr) => {
     let newNums = []
     let total = 0
     let j = 0
     for (let i in arr) {
       if (arr[i] > 60) {
         newNums[j] = arr[i] * 2
         total = total + newNums[j]
         j++
       }
     }
     return total
   }//定义一个函数来实现

   console.log(moreThan60(numbers)) //998

```
虽然这样能解决问题，看起来也不难，但是如果问题再复杂一点，运用到实际上，我们就不得不在函数内部定义一堆变量、做一堆循环、写一堆代码等，这就会导致我开头说的问题。这时候这几个高阶函数就能派上用场啦。
#### 1.filter()

+ **功能**：顾名思义，`filter` 就是过滤器的意思。它用于把 `Array` 的某些元素过滤掉，返回的是符合规则的元素。filter 不改变原数组。
+ **参数**：接收一个函数作为其参数。
+ **特点**：数组方法，传入的函数必须返回 `boolean` 值。它能把传入的函数依次作用于每个元素，然后根据返回值是 true 还是 false 决定保留还是丢弃该元素。
+ **用法**：以上面的问题为例。上诉问题提到需获取数组中大于60的数字，那不就正好可以使 `filter() `嘛，只需要将大于60设定为过滤条件即可。代码如下：

```js
let newNums1 = numbers.filter(n => n > 60)

console.log(newNums1)//[77,120,302]

```
#### 2.map()

+ **功能**：`map` 有 映射 的意思，也就是这个函数的功能。它用于将 `Array` 中的所有元素进行一致的改变。
+ **参数**：接收一个函数作为其参数。
+ **特点**：数组方法。它能把传入的函数依次作用于每个元素，并把结果生成一个新的 `Array`。
+ **用法**：上述问题提到需将新数组乘以2，那使用 `map()` 再合适不过了。代码如下：
。

```js
let newNums2 = newNums1.map(n => n * 2)

console.log(newNums2)//[154,240,604]

```
#### 3.reduce()

+ **功能**：它用于把一个函数作用在这个 `Array` 的每一个元素上，然后把结果继续和序列的下一个元素做累积计算。
+ **参数**：接受一个函数作为其参数，该函数要求有两个参数，第一个参数用于保存当前累积计算的值，第二个参数则是当前的数组元素。
+ **特点**：数组方法。它可用于对数组的所有元素进行汇总。
+ **用法**：我们需要求上述问题所得到数组的总和，即可使用 `reduce（）`。代码如下：

```js
let total = newNums2.reduce((value,n) => value + n)

console.log(total)//998

```
我们能灵活运用这三个高阶函数时，上述问题也就变的十分简单，只需一行代码即可解决。代码如下
```
let total = numbers.filter(n => n > 60).map(n => n * 2).reduce((value,n) => value + n)
console.log(total)//998

```
这样不仅方便许多，逻辑也十分清楚，代码既简洁又明了，这就是js函数的伟大之处。

### 对于 filter() 的补充
> filter() 接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示 Array 的某个元素。回调函数还可以接收另外两个参数，分别表示元素的位置和数组本身：


```js
const arr = ['a','b','c']
arr.filter((element,index,arrSelf) => {
 console.log(element)//依次打印a b c 
 console.log(index)//依次打印0 1 2
 console.log(arrSelf)//依次打印['a','b','c']
 return true //返回一个布尔值
})

```

#### 这样我们就可以利用 filter() 巧妙实现数组去重：

```js
const arr = [1,2,3,1,4,6,2,4,1]
let newArr = arr.filter((el, index, self) => {
  return self.indexOf(el) === index
   })
   console.log(newArr)//[1,2,3,4,6]

```









