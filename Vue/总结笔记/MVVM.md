## 如何创建一个viewmodel

new Vue -> view



#### 七个核心构造参数

##### el:指定当前的viewmodel的视图的位置

```
el:document.querySelector("#app)
```

##### data(实例属性)

###### 作用：组织从view抽象出来的各种数据结构

##### 功能：所有在data中的数据，都会添加observer

状态属性：当状态发生变化的时候，页面更新render视图

```
<body>
<div id="app">
    <h1>新闻</h1>
    <ul>
        <li>{{newsList[0]}}</li>
    </ul>

    <h1>广告</h1>
    <ul>
        <li>{{adsList[0]}}</li>
    </ul>
</div>
<script src="node_modules/vue/dist/vue.js"></script>
<script>
    (function () {
        let newsList =[
            "news1",
            "new2"
        ]

        let adsList = [
            "ad1",
            "ad2"
        ]

        // vm = view#app 绑定
        //el 内部的dom -> vnode -> diff -> real dom -> mount
       let vm= new Vue({
            el:"#app",
           //从页面抽象出来的数据结构
           //组织从页面上抽象出来的数据结构
           //状态属性
            data:{

                // observer
                newsList :[
                    "news1",
                    "new2"
                ],
                adsList: [
                    "ad1",
                    "ad2"
                ]
            }
        })
        console.log(vm.$data)
    })()
</script>
</body>
```



#### methods(实例方法)

架构作用：组织从页面上抽象的方法或者交互的事件

```
<div id="app">
    <h1>{{title}} x </h1>
 </div>
<script>
    (function () {
        let vm = new Vue({
            el:"#app",

            //$scope.title $scope.del
            data:{
                title:"hello world"
            },
            //组织从view分析的方法或者交互的动作
            methods:{
                del(){
                   return 1;
                },

            }
        })
    })()
</script>
```



#### template：创建view的一个方式，通过render来执行

```
<div id="app1">
    <h1>app1</h1>
</div>
<div id="app"></div>
<template id="tpl">
    <h1>template 内容</h1>
</template>

    (function () {
        //第种创建视图的方式
        let vm1 = new Vue({
            el:"#app1"
        })

        //MVVM view的创建的二种方式
        let vm = new Vue({
            el:"#app",
            data:{
               title:"内部的视图"
            },
            // template:`<h1>
            //
            //  {{title}}</h1>`,
            template:"#tpl"  //template一种template,string,
        })

        //第三种创建view方式 Vnode
        let vm3 = new Vue({
            el:"#app",
            render(createElement){
                //createElement是用来生成一个vnode
                let vnodetree = createElement("h1",{},"vnode view")

                console.log(vnodetree)
                return vnodetree
            }
        })
    })()
```



####render：通过vnode来创建view，用来执行component

```
    (function () {
        let vm3 = new Vue({
            el:"#app",

            //template render vnode jsx
           template:"<h1>template view</h1>",//template->compiler->vnode->render->diff->render

            //vnode tree - > render dom - >diff(减少dom操作的一个算法) ->render
            // render(createElement){
            //     //createElement是用来生成一个vnode
            //     let vnodetree = createElement("div",{},[
            //         createElement("h1",{},"标题是"),
            //         createElement("p",{},"内容是")
            //     ])
            //
            //     console.log(vnodetree)
            //     return vnodetree
            // }
        })

    })()
```



#### computed：通过vnode来创建view，用来执行component

```
(function () {

        //创建view model view viewmodel
        let res = Vue.compile("<div><h1>{{ title }}</h1></div>")
        //res.render

        new Vue({
            el:"#app",
            data:{
               title:"template render ......."
            },
            render:res.render,
            staticRenderFns: res.staticRenderFns
        })

        //el data methods template render(component)

        //viewmodel中的data ,methods 如何绑定到view?

        // vue-template-compiler
        // interpolation expression 模板表达式 {{}} 插值表达式
    })()
```



#### watch：监听实例属性的变化的hook方法



### 模板指令(directive)

```
(function () {
        // {{ 1+1 }} 作用: 1. 绑定viewmodel中的data,methods 2,输入绑定的值

        // 指令 (directive ) : 内置指令 2 自定义指令 3 组件 component
       let vm = new Vue({
           el:"#app",
           data:{
               msg:"hello template",
               title:"<h1>hello titme</h1>"
           },
           methods:{
               show(){
                   return this.msg
               }
           }
       })
    })()
```



## 插值表达式{{ }}



###内置指令(directiver)

```
<div id="app">
    <h1 v-text="title">loading...</h1>
    <div v-html="content">loading....</div>
</div>
    (function () {
        new Vue({
            el:"#app",
            data:{
                title:"hello",
                content:"<h1>hello content</h1>"
            }
        })
    })()
```



```
<div id="app" v-cloak>
{{1+1}}
</div>
    (function () {
        new Vue({
            el:"#app"
        })

    })()
```

#### v-if-show

```
<div id="app">
    <div v-if="flag">新闻列表</div>
    <div v-else>没有了....</div>
    <hr>
    您所学习的课程是:
    <ul >
        <li v-if="cource=='react'">React</li>
        <li v-else-if="cource == 'vue'">vue</li>
        <li v-else-if="cource == 'angular'">angular</li>
        <li v-else>没有选择课程</li>
    </ul>
    <div v-show="false">v-show something</div>
    <div v-show="false">v-show something</div>
</div>

    (function () {
        new Vue({
            el:"#app",
            data:{
                flag:false,
                cource:"node"
            }
        })
    })()
```

#### v-for

```
<div id="app">
    <ul>
        <li v-for="(s,sid) in students">
            <h1>{{sid}},{{s.name}}</h1>
            <ul>
                <li v-for="(c,cid) in s.cources">{{cid}}:{{c}}</li>
            </ul>
        </li>
    </ul>
</div>

    (function () {
        new Vue({
            el:"#app",
            data:{
               students:[
                   {
                       name:"张三",
                       cources:["vue","angular","react"],
                   },
                   {
                       name:"李四",
                       cources:["node","express","mongodb"]
                   },
                   {
                       name:"王五",
                       cources:["java","structs","mybatis"]
                   }
               ]

            }
        })

    })()
```

#### v-on

```
<div id="app">
   <div @click="show">click me!</div>
</div>
    (function () {
        new Vue({
            el:"#app",
            methods:{
                show(){
                    alert(1)
                }
            }
        })

    })()
```



### v-model表单指令

```
<div id="app">
    //input blur
    <hr>
    用户名： <input type="text"  v-model="loginForm.username">
    <hr>
    密码 :  <input type="password" v-model="loginForm.password" >
    <hr>
    性别 :  男: <input v-model="loginForm.sex" type="radio" name="sex" value="male" > 女: <input v-model="loginForm.sex" type="radio" name="sex" value="female" >
    <hr>
    课程: <div v-for="c in cources"><input v-model="loginForm.sCource" type="checkbox"  :value="c"> {{c}} </div>

    <hr>
    城市 :
    省：
    <select  v-model="loginForm.selectAddr.p">
       <option  v-for="p in addrs" :value="p">{{p.provinceName}}</option>
    </select>
    市：
    <select v-model="loginForm.selectAddr.c">
        <option v-for="c in loginForm.selectAddr.p.cities"  :value="c">{{c.cityName}}</option>
    </select>

    区：
    <select>
       <option v-for="a in loginForm.selectAddr.c.areas">{{a}}</option>
    </select>

    <hr>
    <button>保存用户信息</button>

    <hr>
    {{loginForm}}

</div>
```

### Vue代码

```
(function () {

        let vm = new Vue({
            el:"#app",
            data:{
                addrs:[
                    {
                        provinceName:"陕西省",
                        cities:[
                            {
                                cityName:"西安市",
                                areas:[
                                    "高新区",
                                    "长安区"
                                ]
                            },
                            {
                                cityName:"咸阳市",
                                areas:[
                                    "咸阳区1",
                                    "咸阳区2"
                                ]
                            }
                        ]
                    },
                    {
                        provinceName:"山西省",
                        cities:[
                            {
                                cityName:"太原市",
                                areas:[
                                    "太原市区1",
                                    "太原市区2"
                                ]
                            },
                            {
                                cityName:"运城市",
                                areas:[
                                    "运城市区1",
                                    "运城市区2"
                                ]
                            }
                        ]
                    }
                ],
                cources:["vue","react"],
                //双向绑定的 observer
                loginForm:{
                    username:"",
                    password:"",
                    sex:"male",
                    sCource:[],
                    selectAddr:{
                        p:"",
                        c:"",
                        a:""
                    }

                }
            }
        })

    })()
```

### v-bind

```
<div id="app">
     <img  :src="picurl">
</div>
(function () {
        new Vue({
            el:"#app",
            data:{
                picurl:"asset/icon-kin.png"
            }
        })

    })()
```

## v-viewmode的构造参数 -computed

```
<div id="app">
    <input type="text" v-model="money">
    工资: {{money}}
    工资: {{formatMoney1()}}
    工资: {{formatMoney2}}
</div>

(function () {
        new Vue({
            el:"#app",
            data:{
                money:5000
            },
            methods:{
                formatMoney1(){
                    return this.money + "RMB"
                }
            },
            computed:{
                //这个方法就可以当做一个属性来用
                formatMoney2(){
                    //对原始数据进行计算后返回一个新的数据
                    return this.money *.6 + "RMB"
                }
            }
        })
    })()
```

###工资计算器

```
<div id="app">
  <div>
      <h1>工资计算器</h1>
      本月工资: <input type="number" v-model="taxSalary">
      <hr>
      累计应缴税款 : <input type="number" v-model="taxMoney"> <br>
      本月税后收入: <input type="number" v-model="money">
  </div>

</div>
    (function () {

        new Vue({
            el:"#app",
            data:{
                taxSalary:0
            },
            computed:{
                //累计应缴税款
                taxMoney(){
                   //(本月工资 - 5000 - 1000) * 0.03 - 0
                   return (this.taxSalary - 5000 - 1000)  * 0.03
                },
                money(){
                   return this.taxSalary - 1000 - this.taxMoney
                }
            }
        })

    })()
```

### -watch

```
<div id="app">
    <input type="number" v-model="money">
</div>
    (function () {
        //js GC
        let vm = new Vue({
            el:"#app",
            data:{
                money:1000
            },
            watch:{
                //
                "money":(n,o)=>{
                    console.log(n,o)
                }
            }
        })

    })()
```

### 自定义direcitve

```
<div id="app">
    <div v-hi="'hello'" draggable="true" v-bg="'red'">hello</div>
    <!--<div v-hi="'hello'" v-bg="'black'">hello</div>-->
    <!--<div v-hi="'hello'" v-cg="'blue'">hello</div>-->
</div>
    (function () {
        //局部指令 全局指令

        Vue.directive("hi",(el,binding)=>{
           console.log(el) //el返回当前指令所在的标签位置
           console.log(binding.value)
        })

        //修改背景 bg
        Vue.directive("bg",(el,binding)=>{
            el.style.backgroundColor = binding.value
            el.style.width = "300px"
            el.style.height = "300px"
            el.innerText = "hello world"
        })

        new Vue({
            el:"#app",
            directives:{
                cg:function (el,binding) {
                    el.style.backgroundColor = binding.value
                }
            }
        })

    })()
```

### 自定义指令

```
<div id="app">
    <div v-bg="'red'" v-drag  >hello</div>
    <div v-bg="'blue'" v-drag>hello</div>
    <div v-bg="'yellow'" v-drag>hello</div>
    <div v-bg="'green'" v-drag>hello</div>
    <div v-bg="'pink'" v-drag>hello</div>
</div>
    (function () {
        
        //修改背景 bg
        Vue.directive("bg",(el,binding)=>{
            el.style.backgroundColor = binding.value
            el.style.width = "300px"
            el.style.height = "300px"
            el.innerText = "hello world"
        })

        Vue.directive("drag",(el,binding)=>{

            el.onmousedown = function (e) {
                el.style.position="absolute"

                console.log(e.clientX - el.offsetLeft)
                var startX = e.clientX - el.offsetLeft
                var startY = e.clientY - el.offsetTop

                document.onmousemove = function (e) {
                    var endX = e.clientX - startX
                    var endY = e.clientY - startY

                    el.style.left = endX + "px"
                    el.style.top = endY + 'px'
                }

                document.onmouseup = function () {
                    document.onmousemove = null
                    document.onmouseup = null
                }
            }
        })

        new Vue({
            el:"#app"
        })

    })()
```

### 自定义过滤器filter

```
<div id="app">
    <h1>{{ 50000 | cRMB }}</h1>
</div>
    (function () {
        //过滤器是用于在页面上直接对需要过滤的数据进行处理，并返回新的结果
        Vue.filter("cRMB",(val)=>{
            console.log(val)
            return val *.6
        })

        new Vue({
            el:"#app",
            data:{
                money:10000 // api dolar - > rmb
            },
            computed:{
                formatMoney(){
                    return this.money * 0.6
                }
            }
        })

    })()
```

### 生命周期方法

```
<div id="app">
     <h1>{{num}}</h1>
    <button @click="add">+</button>
    <hr/>

    <button @click="destory">销毁</button>
</div>

    (function () {
        new Vue({
            el:"#app",
            data:{
                num:0
            },
            methods:{
                add(){
                    this.num++
                },
                destory(){
                    this.$destroy()
                }
            },
            beforeCreate(){
                console.log("#1 beforeCreate...")
            },
            created(){
                console.log("#2 created...")
            },
            beforeMount(){
                console.log("#3 beforeMount...")
            },
            mounted(){
                console.log("#4 mounted...")
            },
            beforeUpdate(){
                console.log("#5 beforeUpdate...")
            },
            updated(){
                console.log("#6 updated...")
            },
            beforeDestroy(){
                console.log("#7 beforeDestroy...")
            },
            destroyed(){
                console.log("#8 destroyed...")
            }
        })


    })()
```

### vue与其他的框架的整合

```
<script src="node_modules/swiper/dist/js/swiper.js"></script>
<script src="node_modules/vue/dist/vue.js"></script>

<div id="app">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide box1"></div>
            <div class="swiper-slide box2"></div>
            <div class="swiper-slide box3"></div>
        </div>

        <div class="swiper-pagination"></div>
    </div>
</div>
    (function () {
        new Vue({
            el:"#app",
            mounted(){
              new Swiper(".swiper-container",{
                  direction:"vertical",
                  // 如果需要分页器
                  pagination: {
                      el: '.swiper-pagination',
                  },
                  effect:"flip"
              })
            }
        })


    })()
```

# vue extend 的基本使用(https://www.cnblogs.com/CyLee/p/8425191.html)

vue.extend 局部注册 的应用2

请注意，extend创建的是一个组件构造器，而不是一个具体的组件实例。所以他不能直接在new Vue中这样使用： new Vue({components: fuck})

最终还是要通过Vue.components注册才可以使用的。

```
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>在Vue中注册组件</title>
</head>
<body>
<div id="app">
    <todo :todo-data="groceryList"></todo>
</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue " type="text/javascript"></script>
<script>
/**
 * 请注意，extend创建的是一个组件构造器，而不是一个具体的组件实例。
 * 所以他不能直接在new Vue中这样使用： new Vue({components: fuck})
 * 最终还是要通过Vue.components注册才可以使用的。 
 */

// 构建一个子组件
var todoItem = Vue.extend({
    template: ` <li> {{ text }} </li> `,
    props: {
        text: {
            type: String,
            default: ''
        }
    }
})

// 构建一个父组件
var todoWarp = Vue.extend({
    template: `
        <ul>
            <todo-item 
                v-for="(item, index) in todoData"
                v-text="item.text"
            ></todo-item>
        </ul>
    `,
    props: {
      todoData: {
          type: Array,
          default: []
      }
    },
    // 局部注册子组件
    components: {
        todoItem: todoItem
    }
})

// 注册到全局
Vue.component('todo', todoWarp)

new Vue({
    el: '#app',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
})
</script>
</html>
```

vue.extend 局部注册 的应用1

请注意，在实例化extends组件构造器时，传入属性必须是propsData、而不是props哦

另外，无论是Vue.extend还是Vue.component 里面的data定义都必须是函数返回对象，如 Vue.extend({data: function () {return {}}})。除了new Vue可以直接对data设置对象之外吧，如 new Vue({data: {}});

```
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>在Vue中注册组件</title>
</head>
<body>
<div id="todoItem"></div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue" type="text/javascript"></script>
<script>

// 局部注册组件
var todoItem = Vue.extend({
  data: function () {
        return {
            todoData: [
              { id: 0, text: '蔬菜' },
              { id: 1, text: '奶酪' },
              { id: 2, text: '随便其它什么人吃的东西' }
            ]
        }
  },
  template: `
        <ul>
            <li v-for='(d, i) in todoData' :key="i">
                {{ d.text }}
            </li>
        </ul>
  `
});

// 请注意，在实例化extends组件构造器时，传入属性必须是propsData、而不是props哦
new todoItem({
  propsData: {
      todoData: [
          { id: 0, text: '蔬菜' },
          { id: 1, text: '奶酪' },
          { id: 2, text: '随便其它什么人吃的东西' }
      ]
  }
}).$mount('#todoItem')

</script>
</html>
```

























































