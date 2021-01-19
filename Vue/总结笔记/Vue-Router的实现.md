### Vue-Router实现的功能
#### 实现前，看一下实现的功能：

+ 基本路由功能
+ 子路由功能
+ History及Hash功能
创建一个项目。首先肯定是要创建Vue Router的类，在根目录下创建index.js文件：
```js
export default class VueRouter {
    constructor (option) {
        this._routes = options.routes || []
    }

    init () {}
}
```
我们平时创建路由实例时，会传入一个对象，像这样：
```js
const router = new VueRouter({
  routes
})

```
所以构造函数应该要有一个对象，如果里面有路由routes，赋值给this._routes，否则给它一个空数组。options里当然有其他属性，但先不管，之后再实现。
还有一个init方法，用来初始化设定。
### install
由于Vue Router是插件，要想使用它，必须通过Vue.use方法。该方法会判定传入的参数是对象还函数，如果是对象，则调用里面的install方法，函数的话则直接调用。
Vue Router是一个对象，所以要有install方法。实现install之前，看一下Vue.use的源码，这样可以更好理解怎样实现install：
```js
export function initUse (Vue: GlobalAPI) {

  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)  
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}

```
首先Vue.use会先判定Vue有没有一个属性叫_installedPlugins，有则引用，没有就为Vue添加属性_installedPlugins，它是一个空数组，再去引用它。_installedPlugins是记录安装过的插件。接下来判定_installedPlugins里有没有传入的插件，有则不用安装。

把传入的参数从第二个开始，变成数组，把Vue放入数组首位。如果插件是对象，则调用它的install方法，插件方法里的上下文this依然是它自身，传入刚才变成数组的参数。函数的话，不用考虑上下文，直接调用。最后记录该插件是安装过的。

现在简单把install方法实现，在根目录下新建install.js：
```js
export let _Vue = null
export default function install (Vue) {
  _Vue = Vue
  _Vue.mixin({
    beforeCreate () {
      if (this.$options.router) {
        this._router = this.$options.router
        this._routerRoot = this
        // 初始化 router 对象
        this._router.init(this)
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot
      }
    }
  })
}
```
全局变量_Vue是为了方便其他Vue Router模块的引用，不然的话其他模式需要引入Vue，比较麻烦。mixin是把Vue中某些功能抽取出来，方便在不同地方複用，这里的用法是全局挂载鈎子函数。
先判断是否为根实例，如果是根实例，会有路由传入，所以会`$options.router`存在。根实例的话则添加两个私有属性，其中`_routerRoot`是为了方便根实例以下的组件引用，然后初始化router。

如果是根实例下的组件，去找一下有没有父组件，有就引用它的`_routerRoot`，这样可以通过`_routerRoot.router`来引用路由。

挂载函数基本完成。当我们使用`Vue Router`，还有两个组件挂载：`Router Link`和`Router View`。

在根目录下创建文件夹components，创建文件link.js和view.js。先把Router Link实现：
```js
export default {
  name: 'RouterLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  render (h) {
    return h('a', { attrs: { href: '#' + this.to } }, [this.$slots.default])
  }
}
```
RouterLink接收一个参数to，类型是字符串。这里不使用template，是因为运行版本的vue没有编译器，把模板转为渲染函数，要直接用渲染函数。
简单讲一下渲染函数的用法，第一个参数是标签类型，第二个是标签的属性，第三是内容。详细可以看vue文档。
我们要实现的其实是`<a :href="{{ '#' + this.to }}"><slot name="default"></slot></a>`。所以第一个参数是a，第二个它的连接，第三个之所以要用数组，是因为标签的内容是一个slot标签节点，子节点要用数组包起来。
至于RouterView，现在不知道它的实现，大概写一下：
```js
export default {
  name: 'RouterView',
  render (h) {
    return h () 
  }
}
```
在install里把两个组件注册：
```
import Link from './components/link'
import View from './components/view'
export default function install (Vue) {
   ...
  _Vue.component(Link.name, Link)
  _Vue.component(View.name, View)
}
```
### createMatcher
接下来要创建create-matcher，它是用来生成匹配器，主要返回两个方法：`match`和`addRoutes`。前者是匹配输入路径，获取路由表相关资料，后者是手动添加路由规则到路由表。这两个方法都是要依赖路由表，所以我们还要实现路由表生成器：`create-router-map`，它接收路由规则，返回一个路由表，它是对象，里面有两个属性，一个是pathList，它是一个数组，存有所有路由表的路径，另一个是pathMap，是一个字典，键是路径，而值的路径相应的资料。
在项目根目录下创建create-router-map.js：
### 链接：https://juejin.cn/post/6919010222505738254
```js
export default function createRouteMap (routes) {

  // 存储所有的路由地址
  const pathList = []
  // 路由表，路径和组件的相关信息
  const pathMap = {}

  return {
    pathList,
    pathMap
  }
}
```
##### 我们需要遍历路由规则，在这过程中做两件事：

+ 把所有路径存入pathList
+ 把路由和资料对应关係放入pathMap
这里的难点是有子路由，所以要用递归，但现在先不要考虑这问题，简单把功能实现：
```js
function addRouteRecord (route, pathList, pathMap, parentRecord) {
  const path = route.path
  const record = {
    path: path,
    component: route.component,
    parentRecord: parentRecord
    // ...
  }

  // 判断当前路径，是否已经存储在路由表中了
  if (!pathMap[path]) {
    pathList.push(path)
    pathMap[path] = record
  }
}
```
现在考虑一下子路由的问题。首先要先有判定路由是否有子路由，有的话遍历子路由，递归处理，还要考虑路径名称问题，如果是子路由，path应该是父子路径合并，所以这里要判定是否存有父路由。
```js
function addRouteRecord (route, pathList, pathMap, parentRecord) {
  const path = parentRecord ? `${parentRecord.path}/${route.path}` : route.path
  const record = {
    path: path,
    component: route.component,
    parentRecord: parentRecord
    // ...
  }

  // 判断当前路径，是否已经存储在路由表中了
  if (!pathMap[path]) {
    pathList.push(path)
    pathMap[path] = record
  }

  // 判断当前的route是否有子路由
  if (route.children) {
    route.children.forEach(childRoute => {
      addRouteRecord(childRoute, pathList, pathMap, route)
    })
  }
}
```
如果有传入父路由资料，path是父子路径合并。

最后把`addRouteRecord`添加到`createRouteMap`：
```js
export default function createRouteMap (routes) {
  // 存储所有的路由地址
  const pathList = []
  // 路由表，路径和组件的相关信息
  const pathMap = {}

  // 遍历所有的路由规则 routes
  routes.forEach(route => {
    addRouteRecord(route, pathList, pathMap)
  })

  return {
    pathList,
    pathMap
  }
}
```
createRouteMap实现了，可以把create-matcher的路由表创建和addRoute实现：
```js
import createRouteMap from './create-route-map'

export default function createMatcher (routes) {
  const { pathList, pathMap } = createRouteMap(routes)

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap)
  }
  return {
    match,
    addRoutes
  }
}
```
最后要实现match了，它接收一个路径，然后返回路径相关资料，相关资料不仅仅是它自身的，还有它的父路径的资料。这里先实现一个工具类函数，它是专门创建路由的，就是返回路径以及它的相关资料。创建util/route.js：
```js
export default function createRoute (record, path) {
  // 创建路由数据对象
  // route ==> { matched, path }  matched ==> [record1, record2]
  const matched = []

  while (record) {
    matched.unshift(record)

    record = record.parentRecord
  }

  return {
    matched,
    path
  }
}
```
其实功能很简单，就是不断获取上一级的资料，放进数组首位。配上createRoute，match基本就实现了：
```js
import createRoute from './util/route'

function match (path) {
    const record = pathMap[path]
    if (record) {
      // 创建路由数据对象
      // route ==> { matched, path }  matched ==> [record1, record2]
      return createRoute(record, path)
    }
    return createRoute(null, path)
}

```
在VueRouter的构造函数里把matcher加上:
```js
import createMatcher from './create-matcher'

export default class VueRouter {
  constructor (options) {
    this._routes = options.routes || []
    this.matcher = createMatcher(this._routes)
  }
}
```

