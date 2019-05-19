>默认去安装了NODE
>node -v 查看node版本
>npm -v查看npm 版本号
>npm install xx.xx.x  安装某个插件/框架
>项目的依赖环境
>>生产依赖   （项目部署上线也需要）  dependencies
>>开发依赖   （在开发阶段需要的）  devDependencies

>1.项目基于npm进行管理  会默认生成一个package.json的文件
>npm init  项目初始化
>>package name:给这个文件起名字（符合命名规范）不能起中文(首字母不能大写)，默认不起名字，直接回车它的名字是当前项目的名字

>npm init -y 默认设置


###gulp
>前段自动构件化工具  （gulp  webpack）

###gulp
1.配置清单
npm init -y   
>将gulp安装到全局(MAC下安装不成功需要在命令之前加sudo)
npm install gulp -g(全局)

>在当前项目下安装gulp
npm install gulp --save-dev

>gulp插件
>>gulp-sass  将sass转为css
>>gulp-cssmin  css压缩
>>gulp-uglify  js压缩
>>gulp-concat  文件合并
>>gulp-rename   文件重新命名
>>gulp-imagemin  图片压缩


>>一般在项目中间项目从git上拉下来之后做的一件事就是跑环境
>> npm  install (就会自动找到项目清单package.json)把依赖的开发环境，生成环境都下载下来

###gulp中的方法
>在当前目录下执行gulp看下信息必须配置文件gulpfile.js

>在gulpfile下引入gulp

//引入gulp模块
var gulp = require("gulp");

//配置一个默认任务task
//第一个参数：任务名称   第二个参数当前任务依赖其它任务   第三个参数：回调函数
````javascript
gulp.task("default",["say","dance"],function(){//命令行默认的去找
	console.log("别惹我");
});
````

//布置某一个任务
```javascript
gulp.task("say",["dance"],function(){
	console.log("say任务执行");
});

gulp.task("dance",function(){
	console.log("say任务执行");
});
```



//src(); 源文件路径 dest();目标文件路径  pipe();管道方法，表示下一步
//布置任务  将src目录下的index.html复制到pipe()目录下


gulp.task("copyHTML",function(){
	return gulp.src("src/index.html").pipe(gulp.dest("dest"))
});

gulp.task("copyCss",function(){
	return gulp.src(["src/*.css","lib/*.css"]).pipe(gulp.dest("dest"));
});

gulp.task("cpyAll",function(){
	return gulp.src("lib/*").pipe(gulp.dest("dest/all"));
});

gulp.task("all",function(){
	return gulp.src("lib/*/**").pipe(gulp.dest("dest/all"));
});

//布置任务：监听src下的index.html文件 如果有改动自动复制到dist目录下
gulp.watch("witchHTML",function(){
	//当前那个文件改变  监听按个任务
	return gulp.watch("src/index.html",["copyHTML"]);
});



//直接安装  npm install --save-v 
//转为css
gulp.task("sass",function(){
	return gulp.src("src/style.scss")
	.pipe(cssmin())
	.pipe(gulp.dest("dist"));
});
//压缩
gulp.task("sass",function(){
	return gulp.src("src/style.scss")
	.pipe(cssmin())
	.pipe(gulp.dest("dist"));
});

//重命名
gulp.task("sass",function(){
	return gulp.src("src/style.scss").
	pipe(cssmin()).
	pipe(rename("style.min.css"))
	.pipe(gulp.dest("dist"));
});
//压缩js并重新命名
gulp.task("uglify",function(){
	return gulp.src("src/style.scss").
	pipe(cssmin()).
	pipe(rename("style.min.css"))
	.pipe(gulp.dest("dist"));
});

//将所有css文件合并成一个
gulp.task("concat",function(){
	return gulp.src(["1.css","2.css","3.css"]).
	pipe(concat("all.css")).
	pipe(gulp.dest("dist"));
});



### SASS

> css和html不属于编程语言没有变量，函数，循环，判断....
> 优势：有编程语言的语法，可以简化代码量

> 写中文的时候scss是不能识别的需要定义编码方式
> scss文件中再去写注释的时候必须使用/**/
> 公共类（样式）
> sass
> /*定义部分*/
> @.名字{
> 样式集合
> }

/*导入部分*/
@extend .名字;

> 嵌套

```scss
.content{
    width: 800px;
    height: 300px;
    
    .content-left{
        float: left;
        
        a{
            text-decoration: none;
            
           &:hover{
            color: yellow;
           }
        }  
    }
    .content-right{
        float: right;
    }
}    
```

> 函数

```scss
/*
  参数  键值对
 $width:300px
 */
@mixin 函数名(形参){
   width: $width;
   height: $height; 
}


//导入
@include 函数名(实参);
```

//判断

```scss
 @mixin test($condition){
  $color: if($condition,blue,red);
  color:$color;
}

.First{
  @include test(true);
}
.Second{
  @include test(false);
}


$flag:false;
@if $flag {
    .div{
        color: red;
       }
    }
    
@else { .div{
    color: pink;
}
}
```

//循环
/*循环*/

```scss
@for $i from 1 through 5
{
    .border-#{$i}
    {
        width:#{$i * 100}px;
    }
}
```



> 默认去安装了NODE
> node -v 查看node版本
> npm -v查看npm 版本号
> npm install xx.xx.x  安装某个插件/框架
> 项目的依赖环境
>
> > 生产依赖   （项目部署上线也需要）  dependencies
> > 开发依赖   （在开发阶段需要的）  devDependencies

> 1.项目基于npm进行管理  会默认生成一个package.json的文件
> npm init  项目初始化
>
> > package name:给这个文件起名字（符合命名规范）不能起中文(首字母不能大写)，默认不起名字，直接回车它的名字是当前项目的名字

### gulp

> 前段自动构件化工具  （gulp  webpack）

> 一
>
> > 1.项目初始化git init -y

> > 2.npm install gulp@3.9.1 -g(全局安装gulp）

> > 3.npm install gulp@3.9.1 --save-dev（-save-dev下载到开发依赖）

> > 4.自己在devDependencies配置你需要的插件名称及版本

> > 5.npm install（跑环境根据package.json)

> > 6.在当前项目下 gulp -v 查看版本号

> 二  基于gulp进行编译

> > 1.gulp的所有操作都是基于gulpfile文件的（js文件）

> > 2.在gulpfile文件中想要用到我们gulp模块或者gulp插件必须先导入
> > let gulp = require("模块名称");

> > 3.执行gulp任务  默认任务直接 gulp   gulp 任务名



JS的面向对象
//1.继承
//2.封装
//3.多态
    （1）重载(JS中不存在重载) ：根据传递参数的不同，去执行不同的方法
        JS中只可以自己模拟重载
        ````javascript
            function (num1,num2){
                if(num1 == "string"){
                }
                

```
            if(num2 === function){
            }
        };
    ````
（2）重写  子类重新修改父类的方法
```



