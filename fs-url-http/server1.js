//node的内置模块   常用的三个模块
var fs = require("fs"),
    http = require("http"),
    url = require("url");

//http :创建服务
var port = 8080;

let handel = function(req,res){
    //这个回调函数什么时候触发    客户端每发送一次请求就触发一次这个回调函数
    // console.log(req);
    // console.log(req.url);//    /index.html?name=qianfeng&age=6(不含哈希值，锚点定位)
    //将当前请求的url地址，以键值对的方式进行存储
    var urlObj = url.parse(req.url,true);
    // var query = urlObj.query;
    // var pathname = urlObj.pathname;
    //query:不含?号，只有传递参数的内容
    //pathname：路径名称
    let {query,pathname} = urlObj;
};

//http :创建服务
//创建服务的回调函数中可以监听客户端的请求，并且返回给客户端内容
//req:request  客户端发送请求的所有信息
//res:response  服务器端响应的信息
http.createServer(handel).listen(port,function () {
    //什么时候出发：创建服务，并且绑定端口号
    console.log("server is listen 8080,is success");
});


//绑定端口号   端口范围：0--65535
