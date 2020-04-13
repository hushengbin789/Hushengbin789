## Window 对象(BOM)
```
    window.alert('弹出提示框');
    window.confirm('弹出选择框，true/false');
    window.prompt('弹出输入框，返回输入的文本');
    window.onbeforeunload = function() {return '关闭页面前，会弹出提示询问是否关闭';}
    // 弹出新的窗口、  窗口名(window.name='demo') 如第二个参数('demo')省略，则只创建标签页、
        window.open('https://www.baidu.com', 'demo', 'width=600,height=500')
        window.open('https://www.baidu.com')

    // window.history对象
    history.length;      // 返回当前窗口(标签页)中，历史URL变动的次数、
    history.back();      // 后退
    history.forward();   // 前进
    history.go(-1);      // -2 = 后退2次，0 = 刷新，2 = 前进2次、

    // window.location对象(可读/可写)
    // 属性、
    location.href // 完整URL
    location.hostname // 域名
    location.hash // 锚点(#)
    location.pathname // 路径部分
    location.search // ?号后面的数据参数
    location.protocol // 传输协议(如：http/https)
    // 方法、
    location.assign('https://www.baidu.com'); // 加载新的文档、
    location.reload(true); // 重新加载当前文档、可选参数：false = 直接取缓存加载、true = 重新加载云端的文档
```

