### 1.请说一下响应式数据的理解？
#### 核心答案:
数组和对象类型当值变化时如何劫持到。对象内部通过defineReactive方法，使用Object.defineProperty将属性进行劫持（只会劫持已经存在的属性），数组则是通过重写数组方法来实现。

> 这里在回答时可以带出一些相关知识点（比如多层对象是通过递归来实现劫持，顺带提出Vue3中是使用proxy来实现响应式数据）

#### 补充回答:
内部依赖收集是怎样做到的，每个属性都拥有自己的dep属性，存放他所依赖的watcher，当属性变化后会通知自己对应的watcher去更新 （其实后面会讲到每个对象类型自己本身也拥有一个dep属性，这个在$set面试题中在进行讲解）

> 这里可以引出性能优化相关的内容 （1）对象层级过深，性能就会差 （2）不需要响应数据的内容不要放到data中 （3） Object.freeze() 可以冻结数据

#### 快速Mock:

```js
let state = { count: 0 };
// app.innerHTML = state.count;

// 1.将数据变成响应式数据
let active;
function defineReactive(obj) {
    for (let key in obj) {
        let value = obj[key];
        let dep = [];
        Object.defineProperty(obj, key, {
            get() {
                if (active) {
                    dep.push(active);
                }
                return value;
            },
            set(newValue) {
                value = newValue;
                dep.forEach(fn => fn());

            }
        });
    }
}
defineReactive(state);
const watcher = (fn) => {
    active = fn;
    fn();
    active = null;
}
watcher(() => {
    app.innerHTML = state.count;
});
watcher(() => {
    console.log(state.count)
});
```
> 源码位置: src/core/observer/index.js:135

### 2.Vue如何检测数组变化？
#### 核心答案:
数组考虑性能原因没有用defineProperty对数组的每一项进行拦截，而是选择重写数组（push,shift,pop,splice,unshift,sort,reverse）方法进行重写。

#### 补充回答:
在Vue中修改数组的索引和长度是无法监控到的。需要通过以上7种变异方法修改数组才会触发数组对应的watcher进行更新。数组中如果是对象数据类型也会进行递归劫持。

> 那如果想更改索引更新数据怎么办？可以通过Vue.$set()来进行处理 =》 核心内部用的是splice方法

#### 快速Mock:

```js
let state = [1,2,3];
let originArray = Array.prototype;
let arrayMethods = Object.create(originArray);

function defineReactive(obj) {
    arrayMethods.push = function (...args) {
        originArray.push.call(this,...args);
        render();
    }
    obj.__proto__ = arrayMethods;
}
defineReactive(state);

function render(){
    app.innerHTML = state;
}
render();
state.push(4);
```
> 源码位置: src/core/observer/array.js:8

### 3.Vue中模板编译原理？
#### 核心答案:
如何将template转换成render函数(这里要注意的是我们在开发时尽量不要使用template，因为将template转化成render方法需要在运行时进行编译操作会有性能损耗，同时引用带有compiler包的vue体积也会变大。默认.vue文件中的template处理是通过vue-loader来进行处理的并不是通过运行时的编译 - 后面我们会说到默认vue项目中引入的vue.js是不带有compiler模块的)。

- 1.将template模板转换成ast语法树 - parserHTML

- 2.对静态语法做静态标记 - markUp

- 3.重新生成代码 -codeGen

#### 补充回答:
模板引擎的实现原理就是new Function + with来进行实现的

> vue-loader中处理template属性主要靠的是vue-template-compiler模块

#### 快速Mock:

```js
<script src="./node_modules/vue-template-compiler/browser.js"></script>
<script>
    let { ast, render } = VueTemplateCompiler.compile('<div>hello world</div>');
    console.log(ast, render);
    const fn = new Function(render);
    console.log(fn.toString());
</script>
```
> 源码位置: src/compiler/index.js:11
### 4.生命周期钩子是如何实现的?
#### 核心答案:
Vue的生命周期钩子就是回调函数而已，当创建组件实例的过程中会调用对应的钩子方法

#### 补充回答:
内部主要是使用callHook方法来调用对应的方法。核心是一个发布订阅模式，将钩子订阅好（内部采用数组的方式存储），在对应的阶段进行发布！

#### 快速Mock:

```js
function mergeHook(parentVal, childValue) {
    if (childValue) {
        if (parentVal) {
            return parentVal.concat(childValue);
        } else {
            return [childValue]
        }
    } else {
        return parentVal;
    }
}
function mergeOptions(parent, child) {
    let opts = {};
    for (let key in child) {
        opts[key] = mergeHook(parent[key], child[key]);
    }
    return opts;
}
function callHook(vm, key) {
    vm.options[key].forEach(hook => hook());
}
function Vue(options) {
    this.options = mergeOptions(this.constructor.options, options);

    callHook(this, 'beforeCreate');
}
Vue.options = {}
new Vue({
    beforeCreate() {
        console.log('before create')
    }
})
```

> 源码位置:src/core/util/options.js:146、core/instance/lifecycle.js:336




