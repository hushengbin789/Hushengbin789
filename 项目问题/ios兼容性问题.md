3.ios new Date(时间) 问题
ios不兼容                 YYYY-MM-DD HH:MM:SS

要把日期格式调整为 YYYY/MM/DD HH:MM:SS
```
new Date(time1.replace(/-/g, "/")).getTime();
```
问题解决-----2019-01更新

 
2.ios键盘定位问题
问题描述:

input(textarea)用absolute定位在页面底部，键盘推到上方时，IOS会出现键盘压在input框的问题。

问题定位:

ios非原生键盘会出现此问题

解决方法:
```
<textarea placeHolder="" class="for_chats" contenteditable="true" @click="getFocus();" v-model="mTo" ></textarea> 
```
点击输入框、文本框触发点击事件。判断如果是ios系统抬高底部盒子、替换底部样式。
```
getFocus: function(obj) {
    var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isiOS){
        console.log("得到焦点");
        document.getElementById("chat_sends").className="chat_sends2";
    }
    //抬高input框
}
```
发送消息时再替换回去
```
sendBtn: function () {
    document.getElementById("chat_sends").className="chat_sends";
}
``
问题解决-----2018-08更新


1.ios input，button外边框,样式问题 
```
input,button{-webkit-appearance:none;outline:none;border:none;background:none;}
```
问题解决-----2018-06更新