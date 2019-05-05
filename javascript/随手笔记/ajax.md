###重点AJAX
**`了解`**
``1.当我们再地址栏中输入域名的时候按下回车发生了哪些事情``

**``2.一个完整的URL``**
>协议
>>HTTP:超文本传输协议   默认服务器不设置端口号  默认端口号是80
>>HTTPS:本HTTP更安全的协议   默认的端口号是443


>域名
>>一级域名  www.baidu.com
>>二级域名 news.baidu.com
>> ....

>>.com- 供商业机构使用，但无限制最常用，被大部分人熟悉和使用
>>.net- 1985年1月，原供网络服务供应商使用，现无限制


**AJAX**
>Async javascript and XML  异步的js和xml
>局部刷新

>如果没有局部刷新整个HTML页面都会刷新，这样比较占网速（浪费流量），页面比较慢。
>在一前项目是前后端啊不分离的   


console.log(1);

var timer = window.setTimeout(function(){console.log(2)},0);

console.log(3);

//  1  3  2

服务器端返回给客户端一般都是JSON格式的字符串或者xml格式的数据  
xml:可扩展的标记语言
````xml
    <production>
        <price>100元</price>
        <name>洗衣机</name>
    </production>
````


>创建ajax
````
//1.创建ajax的实例
      let xhr = new XMLHTTPRequest();//后边的()可写可不写
      let xhr = new XMLHTTPRequest；

//2.请求配置项
    xhr.open([请求方式],[请求路径],[ASYNC,默认是true],[USERNAME],[USERPASS]);
    //请求方式    下边所有的请求方式都能够给服务器发送请求，也可以从服务器获取内容
    //get/delete/head/options..
    
    //post/put
    
    //get/post
    //一般来讲get用来从服务器获取内容   获取的多，给的少
    //post：获取的少给的多
    //delete:从服务器删除一些内容
    //head:只获取服务器响应头信息
    //options:客户端对服务器的测试请求
    
    //当前给服务器发送请求的时候如果用的get一般给服务器传递阐述用?传参
    https://hellojoy.jd.com:443/?itemid=12560&babelChannel=1500725&activityId=2wbhW341AywcD3Xyv9sR5MhCPFAL&linkIds=4713019,2828306,3986352&source=02
    

//3.发送请求
    xhr.send([请求主体]);//发送给服务器的内容放到请求主体中（post）

//4.监听通讯的内容


//readySate:ajax请求状态
UNSENT: 0   ajax还没有发送
OPENED: 1   参数开始配置
HEADERS_RECEIVED: 2   客户端已经开始接收服务器端响应头信息 （返回状态码，日期....）
LOADING: 3  正在准备加载服务器端响主体内容
DONE: 4   响应主体的内容已经获取完毕了



//status:HTTP网络状态码

200：ok请求状态成功（虽然请求成功了，但是拿到的内容不一定是你想要的）
301：永久从定向（永久转移）
307 Internal Redirect：临时重定向   把http转为htts
304 Not Modified :从缓存当中获取
302 Move Temporarily  临时转移（负载均衡） 当服务器的并发数不能承受的时候，把部分访问转移其它服务及集群
404:not Found  找不到
400：请求参数错误
500 Internal Server Error 未知错误
503 Service Unavailable 服务器超负荷




//onreadystatechanage监听状态改变
xhr.onreadystatechanage = ()=>{
    if(！/^(2|3)\d{2}$/.test(xhr.sataus))return;
    if(xhr.readyState ==2){
    }
    
    if(xhr.satus ==200 &&xhr.readyState == 4){
    
    }
}

````

####ajax

>>相当于快递小哥

>网址：http://nodejs.cn/download/
>node -v   查看本本号
>npm -v  模块化管理

>在node环境下执行当前文件  node  文件名

>设置NODE提示或者webstrom中集成环境   setting->搜索npm


**`http报文`**
>记录客户端与服务器的额交互信息
>>起始行  请求起始行   响应起始行 
>>首部  请求头    响应头   通用
>>通用  General
Request URL: http://127.0.0.1:8080/index.html   请求地址
Request Method: GET  请求方式
Status Code: 200 OK   http状态码  
Remote Address: 127.0.0.1:8080
Referrer Policy: no-referrer-when-downgrade

>>请求头  Request Headers
GET /index.html HTTP/1.1    请求起始行    请求方式  协议版本号
Host: 127.0.0.1:8080  
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9


>响应头  Response Headers   响应起始行
HTTP/1.1 200 OK
content-type: text/html;charset=utf-8;
Date: Sun, 05 May 2019 06:34:08 GMT
Connection: keep-alive
Transfer-Encoding: chunked


>>主体  请求主体  响应主体
>>请求主体  Request Payload   发送给服务器的内容
>>响应主体：服务器返回给客户端的内容，返回什么就是什么



````JAVASCRIPT
//1.我们安装NODE是为了安装NODE环境   安装了NODE，node中给我们提供了好多方法，因为这里服务器接口
是用NODE.JS写的所以必须下一个NODE;

//想让一个文件在NODE环境中执行只需要 node 执行文件
````


  //get请求会存在缓存问题 解决方案   后面凭借随机数
  //(this.index + 1)+".txt?_="+ new Date().getTime()
   //(this.index + 1)+".txt?_="+ Math.random();
   
   
   
//扩展

 
 

   

