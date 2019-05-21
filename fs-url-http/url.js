var url = require("url");
//http://127.0.0.1:8080/index.html?name=qianfeng&age=6#target
var url1 = 'http://127.0.0.1:8080/index.html?name=qianfeng&age=6#target';
//默认url.parse第二个参数是false   true：以键值对的进行显示
console.log(url.parse(url1,true));

/*
* Url {
  protocol: 'http:',//协议
  slashes: true,
  auth: null,
  host: '127.0.0.1:8080',  //ip地址
  port: '8080',  //端口
  hostname: '127.0.0.1',
  hash: '#target',  //哈希值
  search: '?name=qianfeng&age=6',   ?传参的内容
  query: [Object: null prototype] { name: 'qianfeng', age: '6' },//不含?号，只有传递参数的内容
  pathname: '/index.html',  //路径名称
  path: '/index.html?name=qianfeng&age=6',
  href:
   'http://127.0.0.1:8080/index.html?name=qianfeng&age=6#target' }

* */