var fs = require("fs"),
    url = require("url"),
    http = require("http");


let port= 8080;

//1.创建服务
var sever = http.createServer(function (request,response) {
    //客户端每访问一次服务器，这个callBack就调用一次
    //request：客户端发送请求的所有信息
    //response：服务器响应内容

    //利用url模块将客户端的请求地址做解析
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj["pathname"];
    var query = urlObj["query"];

    // if (pathname === '/index.html'){
    //     //读取要获取的内容
    //    var con =  fs.readFileSync("./index.html","utf-8");
    //    //服务器返回给客户端的内容
    //    // response.write(con);
    //    // //服务结束了
    //    // response.end();
    //     response.end(con);
    //
    // }


    // if (pathname === '/css/index.css'){
    //     //读取要获取的内容
    //     var con =  fs.readFileSync("./css/index.css","utf-8");
    //     //服务器返回给客户端的内容
    //     // response.write(con);
    //     // //服务结束了
    //     // response.end();
    //     response.end(con);
    // }

    // if (pathname === '/js/index.js'){
    //     //读取要获取的内容
    //     var con =  fs.readFileSync("./js/index.js","utf-8");
    //     //服务器返回给客户端的内容
    //     // response.write(con);
    //     // //服务结束了
    //     // response.end();
    //     response.end(con);
    //
    // }

    var con = fs.readFileSync("."+pathname,"utf-8");
    //给客户端返回响应的内容并且结束
    response.end(con);
});

//2.绑定端口号
sever.listen(port,function () {
    //创建服务并且绑定端口号
    console.log(`server is create success,listen is 8080`);
});