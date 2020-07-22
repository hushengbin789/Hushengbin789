# 使用vue-cli（vue脚手架）快速搭建项目

vue-cli 是一个官方发布 vue.js 项目脚手架，使用 vue-cli 可以快速创建 vue 项目。这篇文章将会从实操的角度，介绍整个搭建的过程 

#### 1. 避坑前言

其实这次使用vue-cli的过程并不顺利

在网上查了很多资料才发现原来是node版本过低的问题，虽然没有找到官方对这个“过低”问题的解释，但是根据国外网友的经验之谈，应该是至少使用node6，我将node4更新至node8之后确实没有报错了，顺利搭建。相关答疑帖：[https://github.com/vuejs/vue-cli/issues/618](https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-cli%2Fissues%2F618)

 node  -v查看此版本		v10.15.3

npm  -v		6.4.1

 将这个放在最前面说是希望大家在搭建前，应该先确保将node更新至6以上，这样能少走一些弯路。下面开始正式介绍整个构建过程 

 #### 2. 使用 vue-cli 搭建项目

下面整个过程是基于已经安装node.js和cnpm的基础上，node.js如何安装就不在这里详说了。如何全局化安装cnpm，这里简单提一下：

 ```
npm install cnpm -g --registry=https://registry.npm.taobao.org
 ```

其实对于安装vue-cli，使用npm命令和cnpm命令都是可以的，个人觉得使用npm安装的比较慢，而且很可能会因为网络问题而出错，所以还是觉得使用cnpm稳一点。 

#####（1）全局安装 vue-cli ，在命令提示窗口执行： 

```
cnpm install -g vue-cli 
```

#####（2）安装vue-cli成功后，通过cd命令进入你想放置项目的文件夹，在命令提示窗口执行创建vue-cli工程项目的命令： 

```
vue init webpack

```

确认创建项目后，后续还需输入一下项目名称、项目描述、作者、打包方式、是否使用ESLint规范代码等等， 

```
build
config
node_modules
src
static

```

#####（3）生成文件目录后，使用 cnpm 安装依赖： 

```
cnpm install 
```

#####（4）最后需要执行命令： npm run dev 来启动项目，启动完成后会自动弹出默认网页 

#### 3.目录结构及其对应作用

通过vue-cli搭建一个vue项目，会自动生成一系列文件，而这些文件具体是怎样的结构、文件对应起什么作用，可以看看下面的解释：

```
├── build/                      # webpack 编译任务配置文件: 开发环境与生产环境
│   └── ...
├── config/                     
│   ├── index.js                # 项目核心配置
│   └── ...
├ ── node_module/               #项目中安装的依赖模块
   ── src/
│   ├── main.js                 # 程序入口文件
│   ├── App.vue                 # 程序入口vue组件
│   ├── components/             # 组件
│   │   └── ...
│   └── assets/                 # 资源文件夹，一般放一些静态资源文件
│       └── ...
├── static/                     # 纯静态资源 (直接拷贝到dist/static/里面)
├── test/
│   └── unit/                   # 单元测试
│   │   ├── specs/              # 测试规范
│   │   ├── index.js            # 测试入口文件
│   │   └── karma.conf.js       # 测试运行配置文件
│   └── e2e/                    # 端到端测试
│   │   ├── specs/              # 测试规范
│   │   ├── custom-assertions/  # 端到端测试自定义断言
│   │   ├── runner.js           # 运行测试的脚本
│   │   └── nightwatch.conf.js  # 运行测试的配置文件
├── .babelrc                    # babel 配置文件
├── .editorconfig               # 编辑配置文件
├── .gitignore                  # 用来过滤一些版本控制的文件，比如node_modules文件夹 
├── index.html                  # index.html 入口模板文件
└── package.json                # 项目文件，记载着一些命令和依赖还有简要的项目描述信息 
└── README.md                   #介绍自己这个项目的，可参照github上star多的项目。
build/
```

