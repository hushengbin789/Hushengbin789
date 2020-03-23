## webpack中loader和plugin的区别
### 一、webpack的常见配置
```
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    // 入口文件
    entry: {
        app: path.join(__dirname, "../src/js/index.js")
    },
    // 输出文件
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    // loader配置
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
            ......
        ]
    },
    // plugins配置
    plugins: [
        // 重新创建html文件
        new HtmlWebpackPlugin({
            title: "首页",
            filename: "index.html",
            template: path.resolve(__dirname, "../src/index.html")
        })
        ......
    ]
}
```
### 二、webpack的打包原理

- 识别入口文件
- 通过逐层识别模块依赖(Commonjs、amd或者es6的import，webpack都会对其进行分析，来获取代码的依赖)
- webpack做的就是分析代码，转换代码，编译代码，输出代码
- 最终形成打包后的代码
### 三、什么是loader

loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中

+ 处理一个文件可以使用多个loader，loader的执行顺序和配置中的顺序是相反的，即最后一个loader最先执行，第一个loader最后执行
+ 第一个执行的loader接收源文件内容作为参数，其它loader接收前一个执行的loader的返回值作为参数，最后执行的loader会返回此模块的JavaScript源码
### 四、什么是plugin

在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。

### 五、loader和plugin的区别

对于loader，它是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss转换为A.css，单纯的文件转换过程

plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务
```
class MyPlugin{
    constructor(options){
        console.log("MyPlugin constructor:", options);
    }
    apply(compiler){
        compiler.plugin("compilation", compilation => {
            console.log("MyPlugin");
        });
    }
}
module.exports = MyPlugin;


webpack.config.js配置：
module.exports = {
    ...
    plugins: [
        new MyPlugin({param: "my plugin"})
    ]
}
```
**使用该plugin后，执行的顺序：**

- webpack启动后，在读取配置的过程中会执行new MyPlugin(options)初始化一个MyPlugin获取其实例
- 在初始化compiler对象后，就会通过compiler.plugin(事件名称，回调函数)监听到webpack广播出来的事件
- 并且可以通过compiler对象去操作webpack

