## vue 开发过程所有涉及难点2
### ajax
```
fetch.js fetch是基于Promise的,未来的趋势。
https://github.com/github/fetch

axios.js Vue 2.0 官方推荐。
https://github.com/axios/axios


解决跨域问题（https://www.cnblogs.com/wangyongcun/p/7665687.html / https://segmentfault.com/a/1190000011007043）
打开config/index.js,在proxyTable中添写如下代码：
proxyTable: { 
  '/api': {  //使用"/api"来代替"http://f.apiplus.c" 
    target: 'http://f.apiplus.cn', //源地址 
    changeOrigin: true, //改变源 
    pathRewrite: { 
      '^/api': 'http://f.apiplus.cn' //路径重写 
      } 
  } 
}

使用axios请求数据时直接使用“/api”
```
### 中英文切换
```
npm install vue-i18n

language.js ( https://segmentfault.com/a/1190000011782935 )--------------
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'cn',    // 语言标识
    messages: {
        'cn': require('./lang/cn'),   // 中文语言包
        'en': require('./lang/en')    // 英文语言包
    },
})
export default  i18n

main.js
import i18n from './i18n'
new Vue({
  el: '#app',
  router,
  store,
    i18n: i18n,
  render: h => h(App)
})

改变中英文 已经显示
this.$i18n.locale = val;
{{ $t("message.index") }}
```
一般导出一个属性或者对象用 export default 

一般导出模块或者说文件使用 module.exports
## 表单验证
```
https://monterail.github.io/vuelidate/#examples

main.js
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
```
## 打包
config/index.js里的assetsPublicPath改成'./'
## filter
```
1.组件中定义
filters: {
  capitalize: function (value) {
    return ...
  }
}
2.全局定义过滤器 main.js
Vue.filter('capitalize', function (value) {
  return ...
}
```
## tab切换  
```
<button v-on:click="tabFun('simple01')">备选一</button>
<button v-on:click="tabFun('simple02')">备选二</button>
<div style="margin:20px 0"></div>
<keep-alive> //缓存数据  
    <component v-bind:is="tabView"></component> //切换模块
</keep-alive> 
```
```
import simple01 from './simple01.vue'
import simple02 from './simple02.vue'
export default {
        name: 'Test2',
        data() {
            return {
                tabView: 'simple01'
            }
        },
        methods: {
            tabFun(value) {
                this.tabView = value;                
            }
        },
        components: {
            simple01,
            simple02
        }
}
```
## 递归组件
**https://blog.csdn.net/badmoonc/article/details/80380557**
```

子组件
<ul>         
    <li  v-for="item in tree" :key="item.label">
        <p>{{item.label}}</p>   
        <Simple01 v-if="item.children" :tree="item.children"></Simple01>            
    </li>
</ul>
props: ['tree']

父组件
<simple01 :tree="tree"></simple01>
data() {
        return {
                tabView: 'simple01',
                tree:[{
                    label:'A1-1',
                    children: [{
                        label: 'B1-1',
                        children: [{
                            label:'C1-1'
                        }]
                    }]
                    },{
                    label:'A2-1',
                    children: [{
                        label: 'B2-1',
                        children: [{
                            label:'C2-1'
                        }]
                    }]
                }]
        }
}
```


