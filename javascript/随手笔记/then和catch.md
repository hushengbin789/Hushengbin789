### Promise对象---=then()和catch()方法

##### 1.Promise.prototype.then()方法

romise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。它的作用是为 Promise 实例添加状态改变时的回调函数。then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数 。

then方法返回的是一个新的Promise实例（注意：不是原来那个Promise实例）。因此可采用链式写法，即then方法后面再调用另一个then方法。

```
getJSON("/posts.json").then(function(json) {
return json.post;
}).then(function(post) {
// ...
});
```

上面的代码使用then方法，依次指定了两个回调函数。第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。

采用链式的then，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。 

```
getJSON("/post/1.json").then(function(post) {
return getJSON(post.commentURL);
}).then(function funcA(comments) {
console.log("resolved: ", comments);
}, function funcB(err){
console.log("rejected: ", err);
});
```

上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用funcA，如果状态变为rejected，就调用funcB。 

如果采用箭头函数，上面的代码可以写得更简洁。 

```
getJSON("/post/1.json").then(
post => getJSON(post.commentURL)
).then(
comments => console.log("resolved: ", comments),
err => console.log("rejected: ", err)
);
```

##### 2.Promise.prototype.catch()方法

Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数 

```
getJSON('/posts.json').then(function(posts) {
// ...
}).catch(function(error) {
// 处理 getJSON 和 前一个回调函数运行时发生的错误
console.log('发生错误！', error);
});
```

上面代码中，getJSON方法返回一个 Promise 对象，如果该对象状态变为resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获 。

```
p.then((val) => console.log('fulfilled:', val))
.catch((err) => console.log('rejected', err));
// 等同于
p.then((val) => console.log('fulfilled:', val))
.then(null, (err) => console.log("rejected:", err));
```

下面是一个例子 

```
const promise = new Promise(function(resolve, reject) {
throw new Error('test');
});
promise.catch(function(error) {
console.log(error);
});
// Error: test
```

上面代码中，promise抛出一个错误，就被catch方法指定的回调函数捕获。注意，上面的写法与下面两种写法是等价的 

```
// 写法一
const promise = new Promise(function(resolve, reject) {
try {
throw new Error('test');
} catch(e) {
reject(e);
}
});
promise.catch(function(error) {
console.log(error);
});
```

```

// 写法二
const promise = new Promise(function(resolve, reject) {
reject(new Error('test'));
});
promise.catch(function(error) {
console.log(error);
});
```

比较上面两种写法，可以发现reject方法的作用，等同于抛出错误。

如果 Promise 状态已经变成resolved，再抛出错误是无效的

```
const promise = new Promise(function(resolve, reject) {
resolve('ok');
throw new Error('test');
});
promise
.then(function(value) { console.log(value) })
.catch(function(error) { console.log(error) });
// ok
```

上面代码中，Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。 Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。 

```
getJSON('/post/1.json').then(function(post) {
return getJSON(post.commentURL);
}).then(function(comments) {
// some code
}).catch(function(error) {
// 处理前面三个Promise产生的错误
});
```

上面代码中，一共有三个 Promise 对象：一个由getJSON产生，两个由then产生。它们之中任何一个抛出的错误，都会被最后一个catch捕获。 一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法 

```
// bad
promise
.then(function(data) {
// success
}, function(err) {
// error
});
```

```
// good
promise
.then(function(data) { //cb
// success
})
.catch(function(err) {
// error
});
```

上面代码中，第二种写法要好于第一种写法，理由是第二种写法可以捕获前面then方法执行中的错误，也更接近同步的写法（try/catch）。因此，建议总是使用catch方法，而不使用then方法的第二个参数。 跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应 

```
const someAsyncThing = function() {
return new Promise(function(resolve, reject) {
// 下面一行会报错，因为x没有声明
resolve(x + 2);
});
};
someAsyncThing().then(function() {
console.log('everything is great');
});
setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123
```

上面代码中，someAsyncThing函数产生的 Promise 对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示ReferenceError: x is not defined，但是不会退出进程、终止脚本执行，2 秒之后还是会输出123。这就是说，Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。

这个脚本放在服务器执行，退出码就是0（即表示执行成功）。不过，Node 有一个unhandledRejection事件，专门监听未捕获的reject错误，上面的脚本会触发这个事件的监听函数，可以在监听函数里面抛出错误。

```
process.on('unhandledRejection', function (err, p) {
throw err;
});
```

上面代码中，unhandledRejection事件的监听函数有两个参数，第一个是错误对象，第二个是报错的 Promise 实例，它可以用来了解发生错误的环境信息。 注意，Node 有计划在未来废除unhandledRejection事件。如果 Promise 内部有未捕获的错误，会直接终止进程，并且进程的退出码不为 0。 



