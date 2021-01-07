### 10个很棒的 JavaScript 字符串技巧
#### 1.如何多次复制一个字符串
JS 字符串允许简单的重复，与纯手工复制字符串不同，我们可以使用字符串的repeat方法。

```js
const str = '阿牛'.repeat(3)
console.log(str) //"阿牛阿牛阿牛"

const count = "2".repeat(3)
console.log(count) //"222"
```
#### 2. 如何填充一个字符串到指定的长度
有时，我们希望字符串具有特定长度。 如果字符串太短，则需要填充剩余空间，直到达到指定的长度为止。

过去，主要还是使用库 left-pad。 但是，今天我们可以使用padStart和SpadEnd方法，选择哪种方法取决于是在字符串的开头还是结尾填充字符串。

```js
// 在开头添加 "0"，直到字符串的长度为 8。
const eightBits = '001'.padStart(8, '0')
console.log(eightBits) // "00000001"

//在末尾添加“ *”，直到字符串的长度为5。
const anonymizedCode = "34".padEnd(5, "*")
console.log(anonymizedCode) // "34***"

```
#### 3.如何将字符串拆分为字符数组
有多种方法可以将字符串分割成字符数组，我更喜欢使用扩展操作符(`...`):

```js
const word = 'apple'
const characters = [...word]
console.log(characters) // ["a", "p", "p", "l", "e"]

```
> 注意，这并不总是像预期的那样工作。有关更多信息，请参见下一个技巧。

#### 4.如何计算字符串中的字符
可以使用length属性。

```
const word = "apple";
console.log(word.length) // 5

```
但对于中文来说，这个方法就不太靠谱。
```
const word = "𩸽"
console.log(word.length) // 2

```
日本汉字𩸽返回length为2，为什么？ JS 将大多数字符表示为16位代码点。 但是，某些字符表示为两个（或更多）16 位代码点，称为代理对。 如果使用的是length属性，JS 告诉你使用了多少代码点。 因此，𩸽（hokke）由两个代码点组成，返回错误的值。
那怎么去判断呢，使用解构操作符号(...)

#### 5.如何反转字符串中的字符
反转字符串中的字符是很容易的。只需组合扩展操作符(...)、Array.reverse方法和Array.join方法。

```js
const word = "apple"
const reversedWord = [...word].reverse().join("")
console.log(reversedWord) // "elppa"


```
> 和前面一样，也有一些边缘情况。遇到边缘的情况就有需要首先将单词拆分为字素簇。

#### 6. 如何将字符串中的第一个字母大写
一个非常常见的操作是将字符串的第一个字母大写。虽然许多编程语言都有一种本地方法来实现这一点，但 JS 需要做一些工作。

```js
let word = 'apply'

word = word[0].toUpperCase() + word.substr(1)

console.log(word) // "Apple"
```
另一种方法:

```js
// This shows an alternative way
let word = "apple";

// 使用扩展运算符（`...`）拆分为字符

const characters = [...word];
characters[0] = characters[0].toUpperCase();
word = characters.join("");

console.log(word); // "Apple"
```
#### 7.如何在多个分隔符上分割字符串
假设我们要在分隔符上分割字符串，第一想到的就是使用split方法，这点，智米们肯定知道。 但是，有一点大家可能不知道，就是split可以同时拆分多个分隔符, 使用正则表达式就可以实现：

```js
// 用逗号(,)和分号(;)分开。

const list = "apples,bananas;cherries"
const fruits = list.split(/[,;]/)
console.log(fruits); // ["apples", "bananas", "cherries"]
```
#### 8.如何检查字符串是否包含特定序列
字符串搜索是一项常见的任务。 在 JS 中，你可以使用String.includes方法轻松完成此操作。 不需要正则表达式。


```js
const text = "Hello, world! My name is Kai!"
console.log(text.includes("Kai")); // true

```
> 就是看它是否含有

#### 10.如何替换所有出现的字符串
有多种方法可以替换所有出现的字符串。 可以使用String.replace方法和带有全局标志的正则表达式。 或者，可以使用新的String.replaceAll方法。 请注意，并非在所有浏览器和Node.js 版本中都可用此新方法。

```js
const text = "I like apples. You like apples."

console.log(text.replace(/apples/g, "bananas"));
// "I like bananas. You like bananas."

console.log(text.replaceAll("apples", "bananas"));
// I like bananas. You like bananas.
```


