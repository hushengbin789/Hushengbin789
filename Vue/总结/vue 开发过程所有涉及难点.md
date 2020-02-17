## vue 开发过程所有涉及难点
**搭建项目**
~~~
npm install --global vue-cli
vue init webpack my-project
~~~
#### 引入jquery
```
npm install jquery --save-dev
在webpack.base.conf.js里配置
    var webpack=require('webpack')methos
    plugins: [ 
           new webpack.ProvidePlugin({ 
                 $:"jquery", 
                 jQuery:"jquery", 
                "windows.jQuery":"jquery"
        }) 
在main.js中输入
import $ from 'jquery'
```
### scss
```
npm install --save-dev sass-loader
npm install --save-dev node-sass

在build文件夹下的webpack.base.conf.js的rules里面添加配置
{
  test: /\.sass$/,
  loaders: ['style', 'css', 'sass']
}

<style lang="scss">
```
## 路由跳转
```
<router-link to="/index">index</router-link> 
<router-link :to="{path:'/test/1',query:{name:'child'}}">index</router-link>
<router-link :to="..." replace>replace</router-link>

this.$router.push({path: '/login?url=' + this.$route.path});
this.$router.push({path: '/backend/order', query: {selected: "2"}});
this.$router.replace(...)

获取值
{{this.$route.params.id}}
{{this.$route.query.name}}
```
## methods和computed和watch
```
methods:{
    函数声明...
}

watch:一个数据影响多个数据
watch: {
  name1: function(val){
      this.yourName = val + '-'+ this.name2+'-'+this.name3      
  }
}
this.name1='ddd';
console.log(this.yourName)

computed:一个数据受多个数据影响
computed:{
    yourName2: function(){      
      return this.name1 + '-'+ this.name2+'-'+this.name3      
    }
}
this.name1='ddw';
this.name2='wwge';
{{ this.yourName2 }} 
```
### 父子组件传值
```
使用props向子组件传递数据
props:['logo'] 从父组件获取数据

子组件主要通过事件传递数据给父组件
子组件：
<input v-model="username" @change="setUser" />
methods:{
    setUser: function(){
        this.$emit('transferUser',this.username)
    }
}
'transferUser'是一个自定义的事件，功能类似于一个中转。

父组件：
<header @transferUser="getUser"></header>
methods:{
    getUser(msg){
        this.user = msg
    }
}
msg就是从子组件传递过来的参数username
```
## 同级组件传值
man.js 
```
window.eventBus = new Vue();

header.vue 传值
eventBus.$emit('eventBusName','helloKugou'); 

footer.vue 接值
created() {
    eventBus.$on('eventBusName',function(val){
        console.log(val);
    })
}
```
## vuex
http://www.imooc.com/article/14741

```
npm install --save vuex
npm install babel-polyfill --save-dev（https://blog.csdn.net/bright2017/article/details/77850525）

创建一个store.js（https://blog.csdn.net/h5_queenstyle12/article/details/75386359）
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
     count:1
}
const mutations={
        add(state){
            state.count+=1;
        },
        reduce(state){
            state.count-=1;
        }
}
export default new Vuex.Store({
     state
});

使用{{$store.state.count}}
```


