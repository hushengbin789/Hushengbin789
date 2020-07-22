Vue解决安卓低版本兼容问题

问题：vue写的移动端项目，部分低版本安卓手机出现，白屏，以及页面数据渲染不完整。

原因：安卓低版本手机是不支持ES6语法的，还有少部分低版本安卓不支持小部分的ES5语法，因此vue使用的是ES6语法，所以会导致页面渲染问题。

解决问题方式，注意看重点是下面的东西：
```
第一步：npm 安装
npm install babel-polyfill
npm install es6-promise
 
        然后  package.json中会出现下面这两行，注意查看下，根据不同时间版本号会不同的，重点是前面
 
"babel-polyfill": "^6.26.0",
"es6-promise": "^4.1.1",
第二步：main.js引入 
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()
第三步：更改 webpack.base.conf.js 文件中的入口 
entry: {
 
         app: ["babel-polyfill", "./src/main.js"]//改为最新的这行入口
 
         // app: ‘./src/main.js’
 
},
```
第四步：就可以直接运行测试了。就是这么简单，不需要背下来，直接按步骤拷贝进去用就好啦。我是一名IT男神，技术一般，性格开朗，如果我的分享对你有帮助请相互关注相互学习进步！以后遇到坑了继续会分享！

qq邮箱:1259446122@qq.com