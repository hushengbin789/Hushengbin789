### window.onbeforeunload方法
#### 用于关闭页面清除sessionStorage
```
window.onbeforeunload = function (e) {
    sessionStorage.clear();
}
```
#### HTML 中：
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>abin</title>
</head>
<body onbeforeunload="return myFunction()">

<p>该实例演示了如何向 body 元素添加 "onbeforeunload" 事件。</p>
<p>关闭当前窗口，按下 F5 或点击以下链接触发 onbeforeunload 事件。</p>
<script>
function myFunction() {
    return "我在这写点东西...";
}
</script>
</body>
</html>
```
### JavaScript 中
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>abin</title>
</head>
<body>

<p>该实例演示了如何使用 HTML DOM 向 body 元素添加 "onbeforeunload" 事件。</p>
<p>关闭当前窗口，按下 F5 或点击以下链接触发 onbeforeunload 事件。</p>
<script>
window.onbeforeunload = function(event) {
    event.returnValue = "我在这写点东西...";
};
</script>
</body>
</html>
```
### JavaScript 中, 使用 addEventListener() 方法:
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>abin</title>
</head>
<body>

<p>该实例演示了如何使用 addEventListener() 方法向 body 元素添加 "onbeforeunload" 事件。</p>
<p>关闭当前窗口，按下 F5 或点击以下链接触发 onbeforeunload 事件。</p>
<script>
window.addEventListener("beforeunload", function(event) {
    event.returnValue = "我在这写点东西...";
});
</script>

</body>
</html>
```


