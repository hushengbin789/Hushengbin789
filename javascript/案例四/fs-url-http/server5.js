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


    var reg = /\.(HTML|CSS|JS|ICO|TXT)/i;
    if (reg.test(pathname)){//
        //保存的文件类型（后缀）
        var suffix = reg.exec(pathname)[1].toUpperCase();//HTML
        //默认静态资源文件类型
        var suffixMIME = "text/plain";//txt
        switch (suffix) {
            case "HTML":
                suffixMIME = "text/html";
                break;
            case "CSS":
                suffixMIME = "text/css";
                break;
            case "JS":
                suffixMIME = "application/x-javascript";
                break;
            case "ICO":
                suffixMIME = "application/octet-stream";
                break;
            case "TXT":
                suffixMIME = "text/plain";
                break;
        }
    }


    //做错误处理   //try中的内容报错了不会影响下边代码执行  把错误信息放到catch
    try {
        var con = fs.readFileSync("."+pathname,"utf-8");
        //重写响应头信息  writeHead
        response.writeHead(200,{"content-type":suffixMIME+";charset=utf-8;"});
        //给客户端返回响应的内容并且结束
        response.end(con);
    }catch (e) {
        console.log(e.message);
    }


});

//2.绑定端口号
sever.listen(port,function () {
    //创建服务并且绑定端口号
    console.log(`server is create success,listen is 8080`);
});