//node的内置模块   常用的三个模块
var fs = require("fs"),
    http = require("http"),
    url = require("url");


//http :创建服务
//创建服务的回调函数中可以监听客户端的请求，并且返回给客户端内容
//req:request
//res:response
var server = http.createServer(function (req,res) {
    //这个回调函数什么时候触发    客户端每发送一次请求就触发一次这个回调函数
});


//绑定端口号   端口范围：0--65535
var port = 8080;
server.listen(port,function () {
    //什么时候出发：创建服务，并且绑定端口号
    console.log("server is listen 8080,is success");
});