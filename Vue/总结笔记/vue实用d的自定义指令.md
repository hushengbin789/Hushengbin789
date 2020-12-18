### 8个非常实用的Vue自定义指令

在 Vue，除了核心功能默认内置的指令 ( v-model 和 v-show )，Vue 也允许注册自定义指令。它的作用价值在于当开发人员在某些场景下需要对普通 DOM 元素进行操作。

Vue 自定义指令有全局注册和局部注册两种方式。先来看看注册全局指令的方式，通过 Vue.directive( id, [definition] ) 方式注册全局指令。然后在入口文件中进行 Vue.use() 调用。

批量注册指令，新建 directives/index.js 文件


```js
import copy from './copy'
import longpress from './longpress'
// 自定义指令
const directives = {
  copy,
  longpress,
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}

```
在 main.js 引入并调用

```js
import Vue from 'vue'
import Directives from './JS/directives'
Vue.use(Directives)

```
指令定义函数提供了几个钩子函数（可选）：

+ bind: 只调用一次，指令第一次绑定到元素时调用，可以定义一个在绑定时执行一次的初始化动作。
+ inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
+ update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值。
+ componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
+ unbind: 只调用一次， 指令与元素解绑时调用。

下面分享几个实用的 Vue 自定义指令

+ 复制粘贴指令 v-copy
+ 长按指令 v-longpress
+ 输入框防抖指令 v-debounce
+ 禁止表情及特殊字符 v-emoji
+ 图片懒加载 v-LazyLoad
+ 权限校验指令 v-premission
+ 实现页面水印 v-waterMarker
+ 拖拽指令 v-draggable
### v-copy
需求：实现一键复制文本内容，用于鼠标右键粘贴。

思路：

+ 动态创建 textarea 标签，并设置 readOnly 属性及移出可视区域
+ 将要复制的值赋给 textarea 标签的 value 属性，并插入到 body
+ 选中值 textarea 并复制
+ 将 body 中插入的 textarea 移除
+ 在第一次调用时绑定事件，在解绑时移除事件

```js
const copy = {
  bind(el, { value }) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) {
        // 值为空的时候，给出提示。可根据项目UI仔细设计
        console.log('无复制内容')
        return
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea')
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea)
      // 选中值并复制
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) {
        console.log('复制成功') // 可根据项目UI仔细设计
      }
      document.body.removeChild(textarea)
    }
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener('click', el.handler)
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler)
  },
}

export default copy

```
使用：给 Dom 加上 v-copy 及复制的文本即可

```js
<template>
  <button v-copy="copyText">复制</button>
</template>

<script>
  export default {
    data() {
      return {
        copyText: 'a copy directives',
      }
    },
  }
</script>

```
### v-longpress
需求：实现长按，用户需要按下并按住按钮几秒钟，触发相应的事件

思路：

+ 创建一个计时器， 2 秒后执行函数
+ 当用户按下按钮时触发 mousedown 事件，启动计时器；用户松开按钮时调用 mouseout 事件。
+ 如果 mouseup 事件 2 秒内被触发，就清除计时器，当作一个普通的点击事件
+ 如果计时器没有在 2 秒内清除，则判定为一次长按，可以执行关联的函数。
+ 在移动端要考虑 touchstart，touchend 事件

```js
const longpress = {
  bind: function (el, binding, vNode) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function'
    }
    // 定义变量
    let pressTimer = null
    // 创建计时器（ 2秒后执行函数 ）
    let start = (e) => {
      if (e.type === 'click' && e.button !== 0) {
        return
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler()
        }, 2000)
      }
    }
    // 取消计时器
    let cancel = (e) => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }
    // 运行函数
    const handler = (e) => {
      binding.value(e)
    }
    // 添加事件监听器
    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)
    // 取消计时器
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler)
  },
}

export default longpress

```
使用：给 Dom 加上 v-longpress 及回调函数即可


```js
<template>
  <button v-longpress="longpress">长按</button>
</template>

<script>
export default {
  methods: {
    longpress () {
      alert('长按指令生效')
    }
  }
}
</script>

```
### v-debounce
背景：在开发中，有些提交保存按钮有时候会在短时间内被点击多次，这样就会多次重复请求后端接口，造成数据的混乱，比如新增表单的提交按钮，多次点击就会新增多条重复的数据。

需求：防止按钮在短时间内被多次点击，使用防抖函数限制规定时间内只能点击一次。

思路：

+ 定义一个延迟执行的方法，如果在延迟时间内再调用该方法，则重新计算执行时间。
+ 将事件绑定在 click 方法上。


```js
const debounce = {
  inserted: function (el, binding) {
    let timer
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    })
  },
}

export default debounce

```
使用：给 Dom 加上 v-debounce 及回调函数即可


```js
<template>
  <button v-debounce="debounceClick">防抖</button>
</template>

<script>
export default {
  methods: {
    debounceClick () {
      console.log('只触发一次')
    }
  }
}
</script>

```
### v-emoji
背景：开发中遇到的表单输入，往往会有对输入内容的限制，比如不能输入表情和特殊字符，只能输入数字或字母等。

我们常规方法是在每一个表单的 on-change 事件上做处理

```js
<template>
  <input type="text" v-model="note" @change="vaidateEmoji" />
</template>

<script>
  export default {
    methods: {
      vaidateEmoji() {
        var reg = /[^\u4E00-\u9FA5|\d|\a-zA-Z|\r\n\s,.?!，。？！…—&$=()-+/*{}[\]]|\s/g
        this.note = this.note.replace(reg, '')
      },
    },
  }
</script>

```
这样代码量比较大而且不好维护，所以我们需要自定义一个指令来解决这问题。

需求：根据正则表达式，设计自定义处理表单输入规则的指令，下面以禁止输入表情和特殊字符为例。


```js
let findEle = (parent, type) => {
  return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}

const trigger = (el, type) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

const emoji = {
  bind: function (el, binding, vnode) {
    // 正则规则可根据需求自定义
    var regRule = /[^\u4E00-\u9FA5|\d|\a-zA-Z|\r\n\s,.?!，。？！…—&$=()-+/*{}[\]]|\s/g
    let $inp = findEle(el, 'input')
    el.$inp = $inp
    $inp.handle = function () {
      let val = $inp.value
      $inp.value = val.replace(regRule, '')

      trigger($inp, 'input')
    }
    $inp.addEventListener('keyup', $inp.handle)
  },
  unbind: function (el) {
    el.$inp.removeEventListener('keyup', el.$inp.handle)
  },
}

export default emoji

```
使用：将需要校验的输入框加上 v-emoji 即可


```js
<template>
  <input type="text" v-model="note" v-emoji />
</template>

```

