### js-forEach 利用 arr 实现数组去重
#### [有了for循环 为什么还要forEach？](https://juejin.cn/post/7018097650687803422)
```
arr.forEach((self,index,arr) =>{},this)

```
+ self： 数组当前遍历的元素，默认从左往右依次获取数组元素。
+ index： 数组当前元素的索引，第一个元素索引为0，依次类推。
+ arr： 当前遍历的数组。
+ this： 回调函数中this指向。

```js
let arr = [1, 2, 3, 4];
let person = {
    name: '技术直男星辰'
};
arr.forEach(function (self, index, arr) {
    console.log(`当前元素为${self}索引为${index},属于数组${arr}`);
    console.log(this.name+='真帅');
}, person)

```
我们可以利用 arr 实现数组去重：

```js
let arr1 = [1, 2, 1, 3, 1];
let arr2 = [];
arr1.forEach(function (self, index, arr) {
    arr.indexOf(self) === index ? arr2.push(self) : null;
});
console.log(arr2);   // [1,2,3]


```
![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e0f7c6e9d7a43409b74145fb4bcc79e~tplv-k3u1fbpfcp-watermark.awebp?)

### forEach 的中断
在js中有break return continue 对函数进行中断或跳出循环的操作，我们在  for循环中会用到一些中断行为，对于优化数组遍历查找是很好的，但由于forEach属于迭代器，只能按序依次遍历完成，所以不支持上述的中断行为。

```js
let arr = [1, 2, 3, 4],
    i = 0,
    length = arr.length;
for (; i < length; i++) {
    console.log(arr[i]); //1,2
    if (arr[i] === 2) {
        break;
    };
};

arr.forEach((self,index) => {
    console.log(self);
    if (self === 2) {
        break; //报错
    };
});

arr.forEach((self,index) => {
    console.log(self);
    if (self === 2) {
        continue; //报错
    };
});

```
如果我一定要在 forEach 中跳出循环呢？其实是有办法的，借助try/catch：

```js
try {
    var arr = [1, 2, 3, 4];
    arr.forEach(function (item, index) {
        //跳出条件
        if (item === 3) {
            throw new Error("LoopTerminates");
        }
        //do something
        console.log(item);
    });
} catch (e) {
    if (e.message !== "LoopTerminates") throw e;
};

```
### 那之前的数组遍历并删除滋生的操作就可以写成

```js
let arr = [1, 2, 1],
    i = 0,
    length = arr.length;

for (; i < length; i++) {
    // 删除数组中所有的1
    if (arr[i] === 1) {
        arr.splice(i, 1);
        //重置i，否则i会跳一位
        i--;
    };
};
console.log(arr); // [2]
//等价于
var arr1 = arr.filter(index => index !== 1);
console.log(arr1) // [2]

```
