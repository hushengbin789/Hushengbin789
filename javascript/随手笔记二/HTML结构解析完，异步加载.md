## HTML结构解析完，异步加载
```
// 原生js实现，异步加载、可以实现按需加载、
function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState == "complete" || script.readyState == "loaded") {
                callback();
            }
        }
    } else {
        script.onload = function() {
            callback();
        }
    }
    script.src = url;
    document.head.appendChild(script);
}

// 演示例程、
loadScript('js/demo.js', function() {
    // 执行'js/demo.js'里面的函数、
    abc();
    a();
    b();
});
```