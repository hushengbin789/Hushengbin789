# fetch函数以及在vue中的应用

fetch是新一代XMLHttpRequest的一种替代方案。无需安装其他库。可以在浏览器中直接提供其提供的api轻松与后台进行数据交互。

基本用法：

```js
fetch（url，{parmas}）.then(res=>

      return res.json()  //返回promise对象

 ).then(data=>{

  return data     //返回真正数据

}).catch(err=>{

 throw new Error(err)

})
```

### get 方式：

```js

<script src="http://cdn.bootcss.com/qs/6.5.2/qs.js"></script>  
<script type="text/javascript">

    window.οnlοad=function(){

        var url="http://www.baidu.com"  //填写自己的域名地址
        var btn=document.getElementById("btn");

       var data={
           verified:1, 
           warningLevel:0,
           sessionID:"3ecf8905a98cb752b127302bf08f08e5"
        }

btn.οnclick=function(){

fetch(url+"/stats/getUserList?sessionID=3ecf8905a98cb752b127302bf08f08e5&verified=1&warningLevel=0").then(res=>{
                              return res.json();     //返回promise对象

                         }).then(data=>{

                             console.log("返回值：",data)

                         }).catch(err=>{

                             console.log(err)

                         })

}
```

## POST方式：

```js

btn.οnclick=function(){             
                      fetch(url+"/stats/getUserList",{
                           method:"POST",
                           headers:{
                                'Content-Type': 'application/x-www-form-urlencoded'
                           },
                           body:Qs.stringify(data)
                         }).then(res=>{

                             console.log(res)
                              return res.json();

                         }).then(data=>{

                             console.log("返回值：",data)

                         }).catch(err=>{

                             console.log(err)

                         })
        }
```



注意：1 fetch返回的是promise对象。所以fetch().then()第一个then里返回的并不是真正的数据。而是一个promise，所以我们需要通过链式操作第二个then()来获取真正的数据。

            2  fetch发送参数是通过body字段来实现的。body是fetch第二个参数的必选参数之一。params的参数如下
    
            method(String): HTTP请求方法，默认为GET
            body(String): HTTP的请求参数
            headers(Object): HTTP的请求头，默认为{}
            credentials(String): 默认为omit,忽略的意思，也就是不带cookie;还有两个参数，same-origin，意思就是同源请求带cookie；include,表示无论跨域还是同源请求都会带cookie
    
           3 body带的参数是一个序列化以后的字符串。类似 name="coc"&age=30.所以这里我们通过qs库进行了序列化。注意通过cdn引入qs后qs函数应该是Qs,Qs.stringify(data)

2 在vue中的使用：

fetch支持在vue环境中使用。这样通过ajax请求就无需通过安装axios依赖库来实现。

具体使用：

（1）组件中发送请求：
--------------------- 
```js
<div style="margin-top:20px">
       <button @click="getLevelData" >获取黄色用户信息</button>
 </div>

     export default{
         name:"users",
         data(){
             return{
           
                arr:[]
             }
         },

        methods:{

                 getLevelData(){

                     async function getInfo(){
                    
                               return  await fetch(api+"/stats/getUserList",{
                                              method:"post",
                                              headers:{
                                                  'Content-Type':"application/x-www-form-urlencoded"
                                               },
                                               body:qs.stringify(data)
                                 }).then(res=>res.json())

                           }
                      getInfo().then(res=>{

                           this.arr=res.data.data

                        }).catch(err=>{
                              console.log("get--error:",err)
                        })

                  }

        }
```

````(2) 表单元素通过fetch发送ajax请求````



```js


       <p>手机号：<input type="text" v-model="mobile"></p>
        <p>密码:<input type="password" v-model="password"></p>
        <input type="button" value="登录" @click="go">

<script>

export default {
  
  name:"Login2",
  data(){
    return{
        mobile:"",
        password:"",
    }
  },
  methods:{

      go(){
       var data={
         mobile:this.mobile,
         password:this.password
       }

      getLevelData(){

                     async function getInfo(){
                    
                               return  await fetch(api+"/stats/getUserList",{
                                              method:"post",
                                              headers:{
                                                  'Content-Type':"application/x-www-form-urlencoded"
                                               },
                                               body:qs.stringify(data)
                                 }).then(res=>res.json())

                           }
                      getInfo().then(res=>{

                           this.arr=res.data.data

                        }).catch(err=>{
                              console.log("get--error:",err)
                        })

                  }
           }
  }
}    
</script>
```



注意：如果是提交表单元素，那么一定要添加headers参数， 而且content-Type的值必须是application/x-www-form-urlencoded

heders:{
                  'Content-Type':"application/x-www-form-urlencoded"
             },

（2）通过vuex请求数据！
--------------------- 
```js
export default {
  
  name:"Login2",
  data(){
    return{
      mobile:"",
        password:"",
      val:""
    }
  },
  methods:{

      go(){
       var data={
            mobile:this.mobile,
            password:this.password
       }

       this.$store.dispatch("login",data).then(res=>{

           this.arr=res.data.data

       }).catch(err=>{
           console.log("登录；err",err)

       })
      }
  }
}    

store.js  中对应的action

 login({commit},payload){
          
        return new Promise((resolve,reject)=>{

           fetch("/account/login",payload).then(res=>{
               
                   resolve(res)

           }).catch(err=>{

                   console.log("登录--err:",err)
                  reject(err)
                  
           })

        }) 
    },
```



通过vuex实现请求，fetch发送请求可以不用带method，body和headers等参数