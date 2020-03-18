## 深入理解JS防抖与节流
日常开发过程中，滚动事件做复杂计算频繁调用回调函数很可能会造成页面的卡顿，这时候我们更希望把多次计算合并成一次，只操作一个精确点，JS把这种方式称为debounce（防抖）和throttle（节流）

## 函数防抖
当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定时间到来之前，又触发了事件，就重新开始延时。也就是说当一个用户一直触发这个函数，且每次触发函数的间隔小于既定时间，那么防抖的情况下只会执行一次。
```
function debounce(fn, wait) {
    var timeout = null;      //定义一个定时器
    return function() {
        if(timeout !== null) 
                clearTimeout(timeout);  //清除这个定时器
        timeout = setTimeout(fn, wait);  
    }
}
// 处理函数
function handle() {
    console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));
```
![演示](https://img2018.cnblogs.com/blog/900566/201903/900566-20190319162805335-2138596532.gif)

如上所见，当持续触发scroll函数，handle函数只会在1秒时间内执行一次，在滚动过程中并没有持续执行，有效减少了性能的损耗

## 函数节流
当持续触发事件时，保证在一定时间内只调用一次事件处理函数，意思就是说，假设一个用户一直触发这个函数，且每次触发小于既定值，函数节流会每隔这个时间调用一次
用一句话总结防抖和节流的区别：防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行
实现函数节流我们主要有两种方法：时间戳和定时器
例如
```
var throttle = function(func, delay) {
    var prev = Date.now();
    return function() {
        var context = this;   //this指向window
        var args = arguments;
        var now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}
function handle() {
    console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));
```
这个节流函数利用时间戳让第一次滚动事件执行一次回调函数，此后每隔1000ms执行一次，在小于1000ms这段时间内的滚动是不执行的
再举一个定时器的例子：
```
var throttle = function(func, delay) {
    var timer = null;
    return function() {
        var context = this;
        var args = arguments;
        if (!timer) {
            timer = setTimeout(function() {
                func.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}
function handle() {
    console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));
```
当触发事件的时候，我们设置了一个定时器，在没到1000ms之前这个定时器为null，而到了规定时间执行这个函数并再次把定时器清除。也就是说当第一次触发事件，到达规定时间再执行这个函数，执行之后马上清除定时器，开始新的循环，那么我们看到的效果就是，滚动之后没有马上打印，而是等待1000ms打印，有一个延迟的效果，并且这段时间滚动事件不会执行函数。
单用时间戳或者定时器都有缺陷，我们更希望第一次触发马上执行函数，最后一次触发也可以执行一次事件处理函数
```
var throttle = function(func, delay) {
     var timer = null;
     var startTime = Date.now();  //设置开始时间
     return function() {
             var curTime = Date.now();
             var remaining = delay - (curTime - startTime);  //剩余时间
             var context = this;
             var args = arguments;
             clearTimeout(timer);
              if (remaining <= 0) {      // 第一次触发立即执行
                    func.apply(context, args);
                    startTime = Date.now();
              } else {
                    timer = setTimeout(func, remaining);   //取消当前计数器并计算新的remaining
              }
      }
}
function handle() {
      console.log(Math.random());
}
 window.addEventListener('scroll', throttle(handle, 1000));
```
![演示](https://img2018.cnblogs.com/blog/900566/201903/900566-20190319174830270-546894494.gif)

在节流函数内部使用开始时间startTime、当前时间curTime和剩余时间remaining，当剩余时间小于等于0意味着执行处理函数，这样保证第一次就能立即执行函数并且每隔delay时间执行一次；如果还没到时间，就会在remaining之后触发，保证最后一次触发事件也能执行函数，如果在remaining时间内又触发了滚动事件，那么会取消当前的计数器并计算出新的remaing时间。通过时间戳和定时器的方法，我们实现了第一次立即执行，最后一次也执行，规定时间间隔执行的效果，可以灵活运用在开发中
PS：防抖和节流能有效减少浏览器引擎的损耗，防止出现页面堵塞卡顿现象，应该熟练掌握。最后再次感谢原作者的总结，热心分享技术让我们的生活变得更好

参见他博客 https://www.cnblogs.com/momo798/p/9177767.html


