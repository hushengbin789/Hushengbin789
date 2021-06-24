`axios`是一个功能强大的网络请求库，可以非常方便的发送请求，功能和ajax类似
#### 使用axios
##### 导入官方js
```html
<script src="https://unpkg.com/axios@0.20.0/dist/axios.min.js"></script>
```
#### 用法：（分为get请求和post请求）
使用get或post方法可以发送对应的请求，then方法中的回调函数会分别响应成功和失败的情况。（第一个函数响应成功，第二个函数响应失败）

#### get请求：
+ 成功执行第一个方法，
+ 否则执行第二个方法。
```js
axios.get(地址？key=value&key2=values).then(
	funtion(response){
		...	
	},
	funtion(err){
		...
	}
)
```
#### post请求：（和get请求的数据传输不同，以对象格式传输）
+ 成功执行第一个方法，
+ 否则执行第二个方法。
```js
axios.post(地址,{key:value,key2:values}).then(
	funtion(response){
		...	
	},
	funtion(err){
		...
	}
)

```
#### 简单实例
```html
<!DOCTYPE html>
<html>
<head>
		<meta charset="utf-8" >
		<title>axios</title>
	</head>
<body>

<div id="app">
	<input type="button" value="get请求" class="get" />
	<input type="button" value="post请求" class="post" />
</div>
<script src="https://unpkg.com/axios@0.20.0/dist/axios.min.js"></script>
<script>
	document.querySelector(".get").onclick=function(){
		axios.get("请求网址").then(
			function(response){
				console.log(response);
			},
			function(err){
				console.log(err);
			}
		)
	},
	document.querySelector(".post").onclick=function(){
		axios.post("请求网址",{username:"西红柿炒蛋"}).then(
			function(reponse){
				console.log(reponse);
			},
			function(err){
				console.log(err);
			}
		)
	}
</script>
</body>
</html>

```
##### 和vue使用在线接口实例
> 注意：axios回调函数中的this对象已经改变（不是vue的this对象，
> 无法直接调用data等数据），需要用变量将其保存起来。
```html
<!DOCTYPE html>
<html>
<head>
		<meta charset="utf-8" >
		<title>axios</title>
	</head>
<body>

<div id="app">
	<input type="button" value="获取笑话" @click="getJoke" />
	<p v-for="(item,index) in joke">
		{{index+1}}{{item}}
	</p>
</div>


<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios@0.20.0/dist/axios.min.js"></script>
<script>
	var app=new Vue({
		el:"#app",
		data:{
			joke:["很好笑的笑话"]
		},
		methods:{
			getJoke:function(){
				var that=this;
				axios.get("https://autumnfish.cn/api/joke/list?num=3").then(
							function(response){
								console.log(response.data);
								that.joke=response.data.jokes;
							},
							function(err){
								console.log(err);
							}
						)
			}
		}
	})
</script>
</body>
</html>

```
运行结果：
![alt 属性文本](https://img-blog.csdnimg.cn/20200917171224211.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTg4MjExMw==,size_16,color_FFFFFF,t_70#pic_center)
##### 补充：在后面的学习中我认识到还有一种方法也可以实现和上述一样的效果
```js
axios.提交方式（“请求接口路径”）
	.then(response =>{
		console.log(reponse)
		)}//请求成功执行then方法
	.catch(err =>{
		console.log(err)//请求失败执行catch方法
	}

```
#### 简单实例：
```html
<!DOCTYPE html>
<html>
<head>
		<meta charset="utf-8" >
		<title>axios</title>
	</head>
<body background="../img/bg.jpg">

	<div id="app" class="wrap">
	

	</div>
	<!--导入 vue 的js-->
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<!--导入axios的js-->
	<script src="https://unpkg.com/axios@0.20.0/dist/axios.min.js"></script>
	<!--导入自己的js-->
	<!-- <script src="../js/main.js"></script> -->
	<script>
		var app=new Vue({
			el:'#app',
			data:{
				message:"hello world"
			},
			created(){//页面数据渲染前执行方法
				this.getjoke()
			},
			methods:{//自定义方法
				//axios.提交方式
				getjoke(){
					axios.get("https://autumnfish.cn/api/joke/list?num=3")
					.then(response =>{
						console.log(response);
					})
					.catch(error =>{
						console.log(error);
					})
				}
			}
		})
		
	</script>
</body>
</html>

```
#### 控制台输出
![alt 属性文本](https://img-blog.csdnimg.cn/20201003112042503.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTg4MjExMw==,size_16,color_FFFFFF,t_70#pic_center)

