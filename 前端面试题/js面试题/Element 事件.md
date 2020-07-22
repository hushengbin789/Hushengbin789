## Element 事件
```js
        // 绑定事件有三种形式、
        var div = document.getElementsByTagName('div')[0];
        // Top 1  onclick
        div.onclick = function() {
            // 缺陷：只能绑定1个函数、
            console.log(1);
        };
        // Top 2  addEventListener
        div.addEventListener('click', function() {
            // 可以绑定多个'不同的'函数，IE9 以下不兼容、false参数与冒泡有关、
            console.log(2);
        }, false);
        // Top 3  attachEvent
        div.attachEvent('on' + 'click', function() {
            // IE独有、
            console.log(3);
        });

        // 封装一个兼容性的写法、
        // 参数：元素对象,事件类型(文本),执行的函数、
        function addEvent(elem, type, handle) {
            if (elem.addEventListener) {
                elem.addEventListener(type, handle, false);
            } else if (elem.attachEvent) {
                elem.attachEvent('on' + type, function() {
                    handle.call(elem);
                });
            } else {
                elem['on' + type] = handle;
            }
        }
        // Demo
        function demo() {
            alert('alert demo');
        }
        addEvent(div, 'click', demo);

        // 解除事件绑定的方法、
        div.onclick = null;
        div.removeEventListener(type, fun, null);
        div.detach('on' + type, fun));

        // 取消事件冒泡
        div.onclick = function(e) {
            // W3C标准：取消事件冒泡、
            e.stopPropagation();
            // IE独有：取消事件冒泡、
            e.cancelBubble = true;
        }

        // 事件冒泡：封装的兼容方法、
        function stopBubble(event) {
            if (event.stopPropagation) {
                // W3C标准：取消事件冒泡、
                event.stopPropagation();
            } else {
                // IE独有：取消事件冒泡、
                event.cancelBubble = true;
            }
        }

        // 取消右键出菜单事件、
        document.oncontextmenu = function(e) {
            // W3C标准：取消右键菜单
            e.preventDefault();
            // IE独有：取消右键菜单
            e.returnValue = false;
            // 句柄的写法，兼容性特别好、
            return false;
        }

        // 事件冒泡：封装的兼容方法、
        function cancelHandler(event) {
            if (event.preventDefault) {
                // W3C标准：取消右键菜单
                event.preventDefault();
            } else {
                // IE独有：取消右键菜单
                event.returnValue = false;
            }
        }
```
