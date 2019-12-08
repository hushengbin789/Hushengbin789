CSS的痛点
我们都知道，CSS入门简单，深入就比较难，样式简单维护难。CSS痛点也很多

1、CSS 的规则是全局的，任何一个组件的样式规则，都对整个页面有效。相信写css的人都会遇到样式冲突（污染）的问题。

2、为了解决全局污染的问题，那就把class命名写长一点吧、加一层父级选择器、降低冲突的几率，那么CSS命名混乱了

3、组件依赖管理不彻底，组件应该相互独立，引入一个组件时，应该只引入它所需要的 CSS 样式。

4、代码难以复用，出现了sass less 之类的工具
CSS模块化方案分类
前端发展是飞速的天天有新轮子。自然CSS 模块化的解决方案有很多，但主要有三类：

1、命名约定
规范化CSS的解决方案如：BEM、OOCSS、AMCSS、SMACSS

2、CSS in JS
彻底抛弃 CSS，用 JavaScript 写 CSS 规则，styled-components 就是其中代表。

3、使用JS 来管理样式模块
使用JS编译原生的CSS文件，使其具备模块化的能力，代表是 CSS Modules。

但是这些模块化方案都是各有优缺点，如命名约定：命名复杂、CSS in JS：缺乏扩展、 CSS Modules当然也有一些缺点(你得先学会它再去谈优劣)。在众多解决方案中，没有绝对的优劣。还是要结合自己的场景来决定。

使用 CSS Modules
CSS Modules不是将CSS改造的具有编程能力，而是加入了局部作用域、依赖管理，这恰恰解决了最大的痛点。可以有效避免全局污染和样式冲突，能最大化地结合现有 CSS 生态和 JS 模块化能力。

启用 CSS Modules
CSS Modules 很容易学。webpack 自带的 css-loader 组件，自带了 CSS Modules，通过简单的配置即可使用。
```
// webpack.config.js
const path = require('path')

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }
        ]
       }
    ]
  }
}
// 也可以使用下面这种写法
// loader: "style-loader!css-loader?modules"
```
CSS Modules可以防止网络爬虫来爬取你的页面，安全性更高


