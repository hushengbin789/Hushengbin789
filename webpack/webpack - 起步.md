##  webpack
- webpack是基于NodeJs
- webpack把一切都看做是模块
优化分为 开发优化、上线优化
#### 开发构建流程：1.需求确认、2.本地开发(development)、3.构建发布(production)、4.代码上线
#### 项目开发：1.技术选型、2.目录规范、3.确定依赖、4.模块引入(依赖、插件)、5.数据请求(mock数据、本地服务器)、6.代码解析、7.开发调试

    ES6有一小部分语法是可以直接在浏览器上解析的，但绝大部分还不支持、需要借助工具解析
## NodeJs基本使用

```
npm -- 是包管理工具

- less (css预编译)
$ npm install -g less
- less解析
$ lessc demo.less demo.css

- uglify-js (js压缩)
$ npm install -g uglify-js
- js压缩
$ uglify demo.js -o demo.min.js

- webpack
$ npm install -g webpack
```
## 前端工程化概念
```
前端工程化：
    1.前端工程化是一个思想，它不是一个技术、也不是一个框架
    2.前端工程化是根据业务特点，将前端开发流程规范化、标准化。用于提升前端工程师的开发效率和代码质量。
    开发 --> 测试 --> 部署
    模块化、组件化 是前端工程化的体现、(高内聚低耦合)

前端模块化：
    js模块化、css模块化
    1.将共同的代码抽离，有助于代码的复用、
    防止命名冲突：函数->命名空间->闭包->模块引入

    模块化规范：CommonJs、AMD、CMD、Es6
    CommonJs -- [同步加载] node环境的规范，最初用在服务器端。适合服务器端，不适应浏览器(不兼容，原因浏览器缺少 module、exports、require、global 环境变量)。需要使用可以用工具转换(broeserify)。
        broeserify -- 工具，可以将CommonJs模块编译成浏览器可以使用的模块。
        安装：$ install -g broeserify
        使用：$ broeserify main.js -o bundle.js
        导出 -- module.exports = {abc:123};
        导入 -- var m1 = require('./modules/m1'); // {abc:123}
    AMD -- [异步加载]适合浏览器，AMD依赖前置，不能按需加载。AMD规范的使用依赖于require.js。
        define(moduleID,['module_1',['module_2'],function(m1,m2){···});
    CMD -- [异步加载]跟AMD的主要区别在于，AMD依赖前置，CMD不依赖前置，可以按需加载。
    Es6 -- [异步加载]自带模块化，通过babel工具语法降级。功能比前几个方案(CommonJs、AMD、CMD)更为强大。

    1.模块化是指将一个复杂的系统分解为多个模块，方便编码。
    2.可以降低复杂性，降低代码耦合度，部署方便，提高效率。
    3.模块化的好处：
        a.避免命名冲突，减少变量空间污染。
        b.更好的分离代码，按需加载。
        c.更高的复用性。
        d.更高可维护性。

前端组件化：
    页面UI拆分
```
```
自动化构建工具：Webpack、Gulp、Grunt、Fis ...
构建工具 就是将源代码转换成可以直接执行的JavaScript、Css、HTML代码。
  自动化 让代码自动化地执行这一系列复杂的流程(代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布)

构建工具的选型：
    a.是否符合团队的技术栈
    b.是否符合项目的需求
    c.生态圈是否完善、社区是否活跃(被支持的程度)

webpack优点：
    a.专注于处理模块化的项目
    b.可通过plugin扩展，完整好用不失灵活
    c.使用场景不局限于web开发
    d.社区活跃，紧跟时代发展的新特性
    e.良好的开发体验
```
## webpack - 安装
```
- 先安装cnpm (淘宝镜像：http://npm.taobao.org)
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

- 将webpack安装到全局
$ cnpm install webpack -g
- 安装webpack-cli
$ cnpm install webpack-cli -g

- 查看webpack版本号
$ webpack -v

- 初始化工程
$ cnpm init -y                      // 会生成 package.json

- 下载安装局部的webpack （）
$ cnpm install webpack --save-dev
$ cnpm install webpack --D          // 简写
$ cnpm install webpack              // 不加 --save-dev 默认为局部

$ cnpm install jQuery --save-dev
```
## webpack核心概念
```
    入口(entry)
        入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
    出口(output)
        output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。你可以通过在配置中指定一个 output 字段，来配置这些处理过程：
    loader
        loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
    插件(plugins)
        loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
    模式
        通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化
```











