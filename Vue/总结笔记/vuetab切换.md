###一 163邮箱登录tab切换
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        ul li {
            list-style: none;
            display: inline-block;
            border: 1px solid dodgerblue;
            height: 30px;
            line-height: 30px;
            width: 120px;
            text-align: center;
        }
    </style>
    <script src="vue.js"></script>
</head>
<body>
<div id="box">
    <ul>
        <li v-on:click="qh(true)">
           <span >二维码登录</span>
        </li>
        <li v-on:click="qh(false)">
            <span >邮箱登录</span>
        </li>
    </ul>
    <div style="margin-left:80px" v-if="temp">
        <img src="getUrlQrcode.jpg" alt="">
    </div>

    <div style="margin-left:80px" v-if="!temp">
        <form action="https://mail.163.com/" method="post">
            <p><input type="email"></p>
            <p><input type="password"></p>
            <p><input type="submit" value="登录"></p>
        </form>
    </div>
</div>
<script>
    new Vue({
        el: '#box',
        data: {
            temp:true
        },
        methods:{
            qh:function (t) {
                console.log(t);
                this.temp=t
            }
        }
    })
</script>
</body>
</html>
```
###Tab切换多页面
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
     <style>
        ul li {
            list-style: none;
            display: inline-block;
            border: 1px solid dodgerblue;
            height: 30px;
            line-height: 30px;
            width: 120px;
            text-align: center;
        }
    </style>
    <!-- 引用vue.js文件 -->
    <script src="vue.js"></script>
</head>
<div id="app">
        <ul>
            <!--- 给li标签绑定click时间,点击该li标签将索引传给函数重新赋值给num--->
            <li v-for="(index,item) in tabs" :class="{active:index == num}" @click="tab(index)">
                {{item}}{{index}}
            </li>
        </ul>
        <div class="tabCon">
            <!---  循环遍历tabContents数组中的元素,v-show绑定事件,当循环的索引等于num中的值,显示该itemCon值  --->
            <div v-for='(index,itemCon) in tabContents' v-show="index == num">
                {{itemCon}}{{index}}
            </div>
        </div>
    </div>

<!--这里是js代码-->
<script type="text/javascript">
var vm = new Vue({
    el: '#app',
    data: {
        tabs: ["标题一", "标题二","标题三"],
        tabContents: ["内容一", "内容二","内容三"],
        num: ''
    },
    methods: {
        tab:function (index) {
            this.num = index;
        }
    }
});
</script>
```
