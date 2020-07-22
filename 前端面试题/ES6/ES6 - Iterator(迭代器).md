## ES6 - Iterator(迭代器)
```js
// Iterator -- 迭代器
function OuterIterator(o) {
    let curIndex = 0;
    let next = () => {
        return {
            value: o[curIndex],
            done: o.length == ++curIndex
        }
    }
    return {
        next
    };
}
let arr = ['a', 'b', 'c'];
let oIt = OuterIterator(arr);
oIt.next(); // Object {value: 1, done: false}
oIt.next(); // Object {value: 2, done: false}
oIt.next(); // Object {value: 3, done: true}
oIt.next(); // Object {value: undefined, done: false}

// ES6 - 遍历数组
for (let ele of arr) { console.log(ele); }
```
```js
let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    // [Symbol.iterator]: function() {
    //     let curIndex = 0;
    //     let next = () => {
    //         return {
    //             value: this[curIndex],
    //             done: this.length == ++curIndex
    //         }
    //     }
    //     return {
    //         next
    //     }
    // },
    [Symbol.iterator]: function*() {
        let curIndex = 0;
        while (curIndex != this.length) {
            yield this[curIndex++];
        }
    }
}
console.log([...obj]); // ["a", "b", "c"]
```
```js
// Generator 生成这个迭代对象       生成器函数
function* test() {
    yield 'a';
    yield 'b';
    yield 'c';
    return 'abc';
}
let oG = test(); oG.next(); oG.next(); oG.next();
```
