## 一.Node是什么?
Node.js是一个基于 Chrome V8 引擎的JavaScript运行环境(runtime),Node不是一门语言是让js运行在后端的运行时,并且不包括javascript全集,因为在服务端中不包含DOM和BOM,Node也提供了一些新的模块例如http,fs模块等。Node.js 使用了事件驱动、非阻塞式 I/O 的模型，使其轻量又高效并且Node.js 的包管理器 npm，是全球最大的开源库生态系统。事件驱动与非阻塞IO后面我们会一一介绍。到此我们已经对node有了简单的概念
## 二.Node解决了哪些问题?
Node在处理高并发,I/O密集场景有明显的性能优势

+ 高并发,是指在同一时间并发访问服务器
+ I/O密集指的是文件操作、网络操作、数据库,相对的有CPU密集,CPU密集指的是逻辑处理运算、压缩、解压、加密、解密
> Web主要场景就是接收客户端的请求读取静态资源和渲染界面,所以Node非常适合Web应用的开发。

## 三.JS单线程
javascript在最初设计时设计成了单线程,为什么不是多线程呢？如果多个线程同时操作DOM那岂不会很混乱？这里所谓的单线程指的是主线程是单线程的,所以在Node中主线程依旧是单线程的。

+ 单线程特点是节约了内存,并且不需要在切换执行上下文
+ 而且单线程不需要管锁的问题.
## 四.同步异步和阻塞非阻塞


![image1](http://m.qpic.cn/psc?/V52J64qB1LA3XS0OcHIY3uJDgi3mLpVe/45NBuzDIW489QBoVep5mcZ.hTfhylCWGulLLbdmch2oYp9lmpbKukztrT7382EjyPBtO9QqQW9q5sy.mBvQOCvuc5VF0VsmuCZMnA3PTxOA!/b&bo=zQE*AgAAAAADF8M!&rf=viewer_4)
## 五.Node中的Event Loop
![image](http://m.qpic.cn/psc?/V52J64qB1LA3XS0OcHIY3uJDgi3mLpVe/ruAMsa53pVQWN7FLK88i5jAwTrszK4SWL3BLkIp3*H6WdzXrLc2WPgc0wQTfB1nB6FgZVT5harc8UTuqdKNvORPeaDZYdhRxv*UKSB6yyo8!/b&bo=XwLpAAAAAAADB5Y!&rf=viewer_4)
- 1.我们写的js代码会交给v8引擎进行处理
- 2.代码中可能会调用nodeApi,node会交给libuv库处理
- 3.libuv通过阻塞i/o和多线程实现了异步io
- 4.通过事件驱动的方式,将结果放到事件队列中,最终交给我们的应用。


```
    本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。
   ┌───────────────────────────┐
┌─>│           timers          │ 
│  └─────────────┬─────────────┘
|   执行延迟到下一个循环迭代的 I/O 回调。
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
|   仅系统内部使用。
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      
|  检索新的I/O事件;执行与 I/O相关的回调  ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  setImmediate() 回调函数在这里执行。  └───────────────┘
│  ┌─────────────┴─────────────┐      
│  │           check           │
│  └─────────────┬─────────────┘
|  一些关闭的回调函数
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```
> 这里每一个阶段都对应一个事件队列,当event loop执行到某个阶段时会将当前阶段对应的队列依次执行。当该队列已用尽或达到回调限制，事件循环将移动到下一阶段

> process.nextTick() 从技术上讲不是事件循环的一部分.

## 六.Node中全局对象
+ Buffer
+ process
+ setInterval,setTimeout,setImmediate
+ console
+ queueMicrotask
## 七.node中的模块
+ __dirname
+ __filename
+ exports
+ module
+ require()





