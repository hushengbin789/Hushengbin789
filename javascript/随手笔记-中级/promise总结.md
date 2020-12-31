### 1. 异步回调
#### 1.1 回调地狱
在需要多个操作的时候，会导致多个回调函数嵌套，导致代码不够直观，就是常说的回调地狱

#### 1.2 并行结果
如果几个异步操作之间并没有前后顺序之分,但需要等多个异步操作都完成后才能执行后续的任务，无法实现并行节约时间
### 2. Promise #
Promise本意是承诺，在程序中的意思就是承诺我过一段时间后会给你一个结果。 什么时候会用到过一段时间？答案是异步操作，异步是指可能比较长时间才有结果的才做，例如网络请求、读取本地文件等

### 3. Promise的三种状态
+ Pending Promise对象实例创建时候的初始状态
+ Fulfilled 可以理解为成功的状态
+ Rejected 可以理解为失败的状态
> then 方法就是用来指定Promise 对象的状态改变时确定执行的操作，resolve 时执行第一个函数（onFulfilled），reject 时执行第二个函数（onRejected）

### 4. 构造一个Promise
#### 4.1 使用Promise

```js
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random()>0.5)
            resolve('This is resolve!');
        else
            reject('This is reject!');
    }, 1000);
});
promise.then(Fulfilled,Rejected
```
+ 构造一个Promise实例需要给Promise构造函数传入一个函数。
+ 传入的函数需要有两个形参，两个形参都是function类型的参数。
    + 第一个形参运行后会让Promise实例处于resolve状态，所 以我们一般给第一个形参命名为resolve,使 Promise 对象的状态改变成成功，同时传递一个参数用于后续成功后的操作
    + 第一个形参运行后会让Promise实例处于reject状态，所以我们一般给第一个形参命名为reject,将 Promise 对象的状态改变为失败，同时将错误的信息传递到后续错误处理的操作
#### 4.2 es5模拟Promise

```js
function Promise(fn) {
    fn((data)=> {
        this.success(data);
    }, (error)=> {
        this.error();
    });
}

Promise.prototype.resolve = function (data) {
    this.success(data);
}

Promise.prototype.reject = function (error) {
    this.error(error);
}

Promise.prototype.then = function (success, error) {
    this.success = success;
    this.error = error;
}
```
#### 4.3 es6模拟Promise

```js
    constructor(fn) {
        fn((data)=> {
            this.success(data);
        }, (error)=> {
            this.error();
        });
    }

    resolve(data) {
        this.success(data);
    }

    reject(error) {
        this.error(error);
    }

    then(success, error) {
        this.success = success;
        this.error = error;
        console.log(this);
    }
}
```
### 5. promise 做为函数的返回值

```js
function ajaxPromise (queryUrl) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', queryUrl, true);
    xhr.send(null);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.responseText);
        }
      }
    }
  });
}

ajaxPromise('http://www.baidu.com')
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
```
### 6.promise的链式调用
+ 每次调用返回的都是一个新的Promise实例
+ 链式调用的参数通过返回值传递

then可以使用链式调用的写法原因在于，每一次执行该方法时总是会返回一个Promise对象

```js
readFile('1.txt').then(function (data) {
    console.log(data);
    return data;
}).then(function (data) {
    console.log(data);
    return readFile(data);
}).then(function (data) {
    console.log(data);
}).catch(function(err){
 console.log(err);
});
```
### 7.promise API #
#### 7.1 Promise.all
+ **参数**：接受一个数组，数组内都是Promise实例
+ **返回值**：返回一个Promise实例，这个Promise实例的状态转移取决于参数的Promise实例的状态变化。当参数中所有的实例都处于resolve状态时，返回的Promise实例会变为resolve状态。如果参数中任意一个实例处于reject状态，返回的Promise实例变为reject状态。

```js
Promise.all([p1, p2]).then(function (result) {
  console.log(result); // [ '2.txt', '2' ]
});
```
> 不管两个promise谁先完成，Promise.all 方法会按照数组里面的顺序将结果返回
#### 7.2 Promise.race #
+  **参数**：接受一个数组，数组内都是Promise实例
+  **返回值**：返回一个Promise实例，这个Promise实例的状态转移取决于参数的Promise实例的状态变化。当参数中任何一个实例处于resolve状态时，返回的Promise实例会变为resolve状态。如果参数中任意一个实例处于reject状态，返回的Promise实例变为reject状态。

```js
Promise.race([p1, p2]).then(function (result) {
  console.log(result); // [ '2.txt', '2' ]
});
```
### 7.3 Promise.resolve返回一个Promise实例，这个实例处于resolve状态。
根据传入的参数不同有不同的功能：

+ 值(对象、数组、字符串等)：作为resolve传递出去的值
+ Promise实例：原封不动返回
### 7.4 Promise.reject
返回一个Promise实例，这个实例处于reject状态。

+ 参数一般就是抛出的错误信息。