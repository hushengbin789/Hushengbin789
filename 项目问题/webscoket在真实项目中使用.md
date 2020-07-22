## webscoket的使用
在此之前你可以看这里 http://www.ruanyifeng.com/blog/2017/05/websocket.html

转载请加链接 https://github.com/hushengbin789/Hushengbin789/tree/master/%E9%A1%B9%E7%9B%AE%E9%97%AE%E9%A2%98

在创建前加载
```js
created () {
    this.initWebSocket()
}
```
在方法中应用
```js
// websocket // 初始化  实时更新
    initWebSocket(params){
    //判断当前浏览器是否支持WebSocket
    let that = this;
    if ('WebSocket' in window) {
        // var ws = new WebSocket("ws://47.106.129.145:8080/websocket/" + document.cookie)
        //  var ws = new WebSocket("ws://192.168.1.33:8080/websocket/" + this.mainId)
        var ws = new WebSocket("ws://47.106.129.145:8080/websocket/" + this.mainId)
    }else {
        alert('您的浏览器不支持websocket')
    }
    ws.onopen = function (e) {
        // console.log('WebSocket已经打开: ')
        // 连接成功，可以通信了 ws.readyState===1
        ws.addEventListener('open',function(e){
        if (ws.readyState===1) {
            //  ws.send(this.mainId);
            console.log('数据发送中...')
        }
        })
    }
    ws.onmessage = function (e) {
        // console.log('WebSocket收到消息: ' , JSON.parse(e.data))
        /*console.log("-----------------msg")
        console.log(JSON.parse(e.data).msg)
        console.log("-----------------msgContent")
        console.log(JSON.parse(e.data).data.msgContent)
        console.log("-----------------num")
        console.log(JSON.parse(e.data).data.mailNum)
        */
        // let data = JSON.parse(e.data)
        let data = JSON.parse(JSON.stringify(e.data))
        // console.log(data);
        if(data=='连接成功'){
        that.msgWebSocket.webSocketMailNum = data.data
        }else{
            that.msgWebSocket.webSocketMailNum = data.data.mailNum
        }
    }
    ws.onclose = function (e) {
        // console.log('WebSocket关闭: ')
    }
    ws.onerror = function (e) {
        // console.log('WebSocket发生错误: ')
    }
    //监听当前页面关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function () {
        init.closeWebSocket()
    }
    },
```
最后记得销毁它
```js
destroyed:function(){
    this.initWebSocket()
}
```