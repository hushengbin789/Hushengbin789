# Css3 动画课程



## Transition 过渡效果

**兼容性**

`ie10+` 、`谷歌`、`火狐`、`欧朋`、`safari`.

**相关属性**

### transition 简写属性

### transition-property 规定用于参与css过渡的具体属性

​	**transition-property 设置的是具体属性，如果没有在本条属性中设置某个属性参与过渡，那么没有参与的属性就不会具有过渡效果。**

​	**如果没有设置transition-property 属性，那么标签的所有属性默认都会参与到过渡效果中来。**

​	**如果在设置transition-property属性的时候，想要让所有的属性都参与过渡，可以设置为*all***。

​	**如果在设置的时候，不想让任何属性参与进过渡效果，但是还必须设置这个属性，那么就可以将属性值设置为*none。***

* 语法:
  * transition-property 具体参数：
  * none 没有过渡效果
  * all 全部属性参与过渡
  * property 具体属性值，每一个属性值之间使用逗号分隔。



> transition-property : none | all | property 



```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p {
            width: 100px;
            height: 100px;
            background-color: lightseagreen;
            transition-property: all;
            transition-duration: 1s;
        }
        p:hover {
            width: 3000px;
            height: 4000px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <p>

    </p>
</body>
</html>
```





### transition-duration 过渡时间/过渡需要使用的具体时间 秒|毫秒  s||ms

### transition-timing-function 规定过渡效果的时间曲线  ，默认值是`ease`。

> 贝塞尔曲线的示例网址:`http://cubic-bezier.com/#.26,.84,.87,.11`。

属性值：

1.  cubic-bezier 后面设置的是具体的贝塞尔曲线的值
2.  linear 规定以相同的速度从开始到结束 (等于 cubic-bezier(0,0,1,1))
3. ease 规定慢速开始，然后加快，最后慢速结束（cubic-bezier(0.25,0.1,0.25,1)）。
4. ease-in   规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)） -- 加速。
5. ease-out  慢速结束过渡效果 等于 cubic-bezier(0,0,0.58,1)  -- 减速
6. ease-in-out  规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)） 



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p {
            width: 100px;
            height: 100px;
            background-color: lightseagreen;
            transition-property: all;
            transition-duration: 10s;
            /*transition-timing-function: cubic-bezier(.17,.67,.87,.11);*/
            /*transition-timing-function: linear;*/
            /*transition-timing-function: ease;*/
            transition-timing-function: ease-in;
        }
        p:hover {
            width: 300px;
            height: 400px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <p>

    </p>
</body>
</html>
```

### transition-delay 延迟 

**作用:在指定的时间之后再来执行变化效果。**

单位:s|ms



> transition: property duration timing-function delay;
>
> *如果使用简写的话，不去设置的具体属性都会采用默认值的形式。*



我们在实际设置延迟的时候，也可以给具体的某个属性设置延迟。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p {
            width: 100px;
            height: 100px;
            background-color: lightpink;
            transition:1s width 2s,2s height ,3s background-color;
        }
        p:hover {
            width: 300px;
            height: 300px;
            background-color: red;
        }
    </style>
</head>
<body>
    <p>

    </p>
</body>
</html>
```



过渡示例:

**手风琴**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>手风琴</title>
    <style>
        body {
            margin:0;
            padding:0;
            background-color: #f7f7f7;
        }
        h3 {
            margin:0;
            padding:0;
        }
        .box {
            width: 500px;
            margin:0 auto;
        }

        .list h3 {
            height: 35px;
            line-height:35px;
            padding-left: 30px;
            border-bottom:2px solid #690;
            font-size:14px;
            color: #fff;
            background-color: #369;
            transition: all 0.3s ease 0s;
        }
        .list .pictxt {
            height: 0;
            background-color: lightblue;
            transition: all 0.3s ease 0s;
        }
        .list:hover  h3 {
            background-color: #036;
        }
        .list:hover .pictxt{
            height: 150px;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="list">
            <h3>今日新闻</h3>
            <div class="pictxt"></div>
        </div>
        <div class="list">
            <h3>昨日新闻</h3>
            <div class="pictxt"></div>
        </div>
        <div class="list">
            <h3>前日新闻</h3>
            <div class="pictxt"></div>
        </div>
        <div class="list">
            <h3>去年新闻</h3>
            <div class="pictxt"></div>
        </div>
    </div>
</body>
</html>
```



## CSS3 2D



**相关属性**:

* transform : 2d/3d之间的转换
* transform-origin : 更改元素的基点  



相关属性值: *位移/旋转/缩放/倾斜*

* translate(x,y)   沿着x y 移动元素/ translateX(n)  translateY(n)    
* scale(x,y)  缩放  更改元素的宽度和高度 ,将宽度改为原来的x倍，高度改为原来的y倍 / scaleX(n) 更改宽度  scaleY(n)  更改高度
* rotate(angle)  旋转 
* skew(x-angle,y-angle)  定义2D 倾斜转换 沿着x轴和y轴  / skewX(angle) 沿着x轴转换  skewY(angle) 沿着y轴



**translate(x,y)**  x表示沿着x轴位移的距离， y 表示沿着y轴位移的距离

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .box {
            width: 600px;
            height: 300px;
            border: 2px solid orange;
            margin: 0 auto;
        }
        .box .d1 {
            width: 100px;
            height: 100px;
            background-color: lightseagreen;
            margin:0 auto;
            transition: 2s;
        }
        .box:hover .d1 {
            transform: translate(100px,100px);
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="d1"></div>
    </div>
</body>
</html>
```



**scale(x,y)**  x表示宽度的倍数  y表示高度的倍数 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>scale</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: lightpink;
            transition: 2s;
        }
        div:hover {
            transform: scale(0.5,0.5);
        }
    </style>
</head>
<body>
    <div>

    </div>
</body>
</html>
```

**rotate(angle)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>rotate</title>
    <style>
        .d1 {
            width: 100px;
            height: 100px;
            background-color: deepskyblue;
            border-left: 2px solid lawngreen;
            border-right: 2px solid gold;
            border-top: 2px solid palevioletred;
            border-bottom: 2px solid royalblue;
            transition: 5s;
            border-radius: 50%;
        }
        .d1:hover {
            transform: rotate(1080deg);
        }
    </style>
</head>
<body>
    <div class="d1">指向谁谁乌龟-></div>
</body>
</html>
```

**skew(x-angle,y-angle)**  倾斜/斜切

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>skew</title>
    <style>
        .playhappy {
            width: 100px;
            height: 100px;
            background-color: aquamarine;
            margin:100px auto;
            /*transition: 2s;*/

        }
        .playhappy:hover {
            transform: skew(0deg,10deg);
        }
    </style>
</head>
<body>
    <div class="playhappy"></div>
</body>
</html>
```



**transform-origin : 更改元素的基点  **

![1553484551358](C:\Users\liujunhang\AppData\Roaming\Typora\typora-user-images\1553484551358.png)

**语法:**

transform-origin:(x轴值,y轴值)

* x轴: left | center | right | length | % 
* y轴: top | center | bottom | length | %

示例:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>盘它</title>
    <style>
        img {
            width: 300px;
            height: 300px;
        }
        .anim_image {
            transition: all 1s ease-in-out;
            cursor: pointer;
        }
        .anim_image_top {
            position: absolute;
            transform: scale(0,0);
        }
        .anim_box:hover .anim_image_top {
            transform: scale(1,1);
            transform-origin: top right;
        }
        .anim_box:hover .anim_image_bottom {
            transform: scale(0,0);
            transform-origin: bottom left;
        }
    </style>
</head>
<body>
    <div class="anim_box">
        <img src="./images/photo3.jpg" class="anim_image anim_image_top">
        <img src="./images/photo4.jpg" class="anim_image anim_image_bottom">
    </div>
</body>
</html>
```

