### Node.js
//-->node -v
//-->npm -v
#### 1.什么是NODE？
 基于V8引擎（谷歌浏览器的引擎）渲染JS的工具或者环境
   ->安装NODE
   ->把JS代码放到NODE环境中执行
    
#### 2.安装NODE
 https://nodejs.org/en/

 node安装完成后
   ->当前电脑上自动安装了npm(Node Package Manager)：一个JS模块（所有封装好可以供其它人调取使用的都可以称之为模块或者包）管理的工具，基于npm可以安装下载JS模块
   ->它会生成一个node执行的命令（可以在DOS窗口或者终端命令中执行）：node xxx.js

 如果不成功，可以找相同电脑配置的人员，把安装成功的NODE文件夹拷贝到自己的电脑上，通过配置环境变量，来实现NODE安装

#### 3.如何在NODE中渲染和解析JS
 ->REPL模式 (Read-Evaluate-Print-Loop，输入-求值-输出-循环)

 ->直接基于NODE来执行JS文件
   1）在命令窗口中执行（DOS窗口 & 终端窗口）
   2）WB中的Terminal中也可以执行node命令
   3）直接在WB中执行（右键=>RUN xxx.js），这种方式可能会产生缓存（尤其是文件的目录改动后）

#### 4.之所以把NODE作为后台编程语言，是因为：
 1）我们可以把NODE安装在服务器上
 2）我们可以把编写的JS代码放到服务器上，通过NODE来执行它（我们可以使用JS来操作服务器，换句话说，使用JS来实现服务器端的一些功能操作 =>其实说NODE是后台语言，想要表达的是JS是后台语言 “JS是一门全栈编程语言”）

#### 5.NODE做后台的优势和特点
 传统后台语言：JAVA/Python/PHP/C#(.NET)...
 =>单线程的
 =>基于V8引擎渲染：快
 =>异步无阻塞的I/O操作：I/O (INPUT/OUTPUT) 对文件的读写
 =>event-driven事件驱动：类似于发布订阅或者回调函数

#### 6.在WB中开启NODE内置方法的代码提示
  File -> settings -> languages & frameworks -> node.js and npm -> 开起代码提示只要点击“Enable”按钮即可（Disable是取消代码提示）

============================
NPM的应用
  目前“工程化/自动化”开发（不一定是写后台），都是基于NODE环境，基于NPM管理模块，基于WEBPACK实现模块之间的依赖打包，部署上线等

  NPM常规操作

```sh
    npm install xxx  把模块安装到当前目录（在哪个目录下执行的命令，这个目录就是当前目录）下
    npm install xxx -g 把模块安装在全局目录下

    npm uninstall xxx / npm uninstall xxx -g 卸载模块

    npm install xxx@xxx 安装指定版本号的模块

    npm view xxx > xxx.version.txt  查看模块的历史版本信息
```

  NPM的默认安装源都是在 https://www.npmjs.com/ 网站中查找的，在国内安装，下载速度较慢，想要下载速度快一些，我们可以如下处理：
  1.使用淘宝镜像
    ->安装cnpm，后期都是基于cnpm安装管理
    ```sh
      npm install cnpm -g
      cnpm install zepto
    ```

->安装nrm切源工具，基于nrm把源切换到淘宝源上
​```
  npm install nrm -g

  nrm ls 查看当前可用的源
  nrm use xxx 使用某个源

​```
> 这样处理完成后，后期模块的管理依然基于npm即可


  2.基于YARN安装：它也是模块管理器，类似于NPM，但是安装管理的速度比NPM快很多
```sh
  npm install yarn -g
  yarn add xxx
  yarn remove xxx
```
  使用yarn只能把模块安装到当前目录下，不能安装到全局环境下
  
  
  //配置package.json的scripts的命令脚本
  //基于yarn yarn 脚本命令
  //基于npm npm run 脚本命令
​
#### 7.NODE入门
NODE本身是基于CommonJS模块规范设计的，所以模块是NODE的组成
- 内置模块：NODE天生提供给JS调取使用的
- 第三方模块：别人写好的，我们可以基于NPM安装使用
- 自定义模块：自己创建一些模块

 CommonJS模块化设计的思想（AMD/CMD/ES6 MODULE都是模块设计思想）
````
 1.CommonJS规定，每一个JS都是一个单独的模块（模块是私有的：里面涉及的值和变量以及函数等都是私有的，和其它JS文件中的内容是不冲突的）

2.CommonJS中可以允许模块中的方法互相的调用
  B模块中想要调取A模块中的方法
    =>A导出
    =>B导入

[导出]
  CommonJS给每一个模块（每个JS）中都设置了内置的变量/属性/方法
    module：代表当前这个模块[object]
    module.exports：模块的这个“属性”是用来导出当前模块的属性和方法的 [object]

[导入]
  require：CommonJS提供的内置变量，用来导入模块的（其实导入的就是`module.exports`暴露出来的东西）；导入的值也是[object]类型的；


CommonJS特点：
  1. 所有代码都运行在模块作用域，不会污染全局作用域（每一个模块都是私有的，包括里面所有的东西也都是私有的，不会和其它模块产生干扰）

  2. 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。（为了保证性能，减少模块代码重复执行的次数）

  3. 模块加载的顺序，按照其在代码中出现的顺序。CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。
````

#### 【自定义模块】
案例：A/B/C三个模块
   A中有一个sum方法：实现任意数求和
   B中有一个avg方法：实现任意数求平均（先求和再求平均：B中用到A）
   C中调取B中的avg，实现 12,23,34,45,56,67,78,89 求平均数

````
require导入规则
  `require('./xxx')` 或者 ../xxx 再或者 /xxx，这种自己制定路径的模式，都是为了导入自定义的模块，换句话说，想要导入自定义的模块，必须加路径

  require('xxx') 首先到当前项目的node_modules中查找是否存在这个模块，不存在找node提供的内置模块（导入第三方或者内置的）
````

__dirname：模块中这个内置变量是当前模块所在的绝对路径（具体到盘符：物理路径 例如：`C:\201902LESSON\WEEK7\1902DAY01` 相对路径：`WEEK7\1902DAY01 相对于根目录的路径；`）

 __filename：相对于__dirname来讲，多了模块名称，例如：`C:\201902LESSON\WEEK7\1902DAY01\C.js`


 #### 【内置模块】
 ##### 【FS模块】
 ```js
     let fs = require('fs');
```
1. fs.mkdir / fs.mkdirSync：创建文件夹，有Sync的是同步创建，反之没有是异步，想要实现无阻塞的I/O操作，我们一般都是用异步操作完成要处理的事情

2. fs.readdir / fs.readdirSync：读取文件目录中的内容

3. fs.rmdir ：删除文件夹  

4. fs.readFile：读取文件中的内容

5. fs.writeFile：向文件中写入内容（覆盖写入：写入的新内容会替换原有的内容）

6. fs.appendFile：追加写入新内容，原有的内容还在

7. fs.copyFile：拷贝文件到新的位置

8. fa.unlink:删除文件


##### 【URL模块】
 ````
 url.parse(url,[flag])：把一个URL地址进行解析，把地址中的每一部分按照对象键值对的方式存储起来
 ````

##### 【HTTP模块】
  let server = http.createServer();  //=>创建WEB服务
  server.listen();  //=>监听端口

  注意：基于NODE创建后台程序，我们一般都创建一个server模块，在模块中实现创建WEB服务，和对于请求的处理（并且我们一般都会把server模块放到当前项目的根目录下）

  服务器上有一堆项目代码，这堆项目代码中既可能有服务器端的程序代码，也有可能有客户端的程序代码，而客户端程序代码我们一般都放到static这个文件夹中
 ````
   static
     都是服务器端需要返回给客户端，由客户端浏览器渲染和解析的（前端项目：包括页面、CSS、JS、图片等）
 
   server.js
     都是需要在服务器端基于NODE执行的（后端项目：一般只有JS）
 ````



