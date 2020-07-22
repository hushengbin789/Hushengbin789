## 视区相关单位vw, vh..简介以及可实际应用场景

rem  相对于跟元素字体大小

**vw  相对于视窗的宽度：视窗宽度为100vw**

**vh  相对于视窗的高度：视窗高度为100vh**

vm  相对于视窗的宽度或高度，取决于哪个更小



“视区”所指为浏览器内部的可视区域大小，即`window.innerWidth/window.innerHeight`大小，不包含任务栏标题栏以及底部工具栏的浏览器区域大小。

移动端vh vw真正的基准度量是layout viewport，也就是meta标签中viewport属性定义的值，默认980px。可以用document.document Element.clientWidth来获取

 

注：一般情况下，Chrome浏览器浏览器内外宽度是一样的（因为浏览器左右无边框）；加上浏览器大小变小时图片尺寸不渲染的bug，因此，上demo最佳测试浏览器是IE9. 

`vm`相比`%`并没有什么优势，`vw`单位用做宽度自适应的布局，完全是吃力不讨好

`vw`, `vh`这两个视区相关动态单位似乎应用前景一下子黯淡了很多，潜力似乎也就那样——想来想去，得出一个结论：vw, vh视区大小相关单位只适用于非定位元素的高度相关属性上！//zxx: 高度相关属性如 – height/min-height/max-height/line-height/padding-top/padding-bottom等

Android4.4之前的版本，目前怕是还是要兼顾的，怎么办？我觉得没有必要为了一个老妪而放弃整个后宫，对于绝大部分设备，我们还是`vm` + `calc`哗啦啦地走起，老的设备，我们可以使用以前JS的策略，打个脚本补丁，估计十来行代码，效果都是一样的，CSS代码也完全复用，一点都没必要特异处理，因为老机子不认识`vw`，所以完全没必要担心新老冲突这样的问题。

一些只能`vw`, `vh`才能完成的应用场景：

**1. 场景之：元素的尺寸限制**

vw vh 主要是实现了动态高度百分比布局，比如宽高比不固定的图片，vw很轻易的实现正方形图片缩略图

原始大图的尺寸限制问题——因为很有可能图片过大，尼玛一屏显示器区域不够放，我们需要对其进行缩放处理。

这类限制的实现，在当下，需要获得图片的原始大小，以及浏览器内部尺寸，算大小，算比例等，算是比较折腾的。

但是，`vw`, `vh`等单位本身就是浏览器视区大小相关单位，直接使用其做限制，岂不省了N多JS代码？

##### CSS代码：

```
.vw_vh_img {
    max-width: 90vw;
    max-height: 90%;
    max-height: 90vh;
}
```

##### HTML代码：

```
<img src="http://ww3.sinaimg.cn/large/61ecbb3djw1dx4hai2ggnj.jpg" class="vw_vh_img" />
```

**2. CSS3新vw, vh单位与纯CSS定位的弹框屏幕居中效果实例页面** 

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>CSS3新vw, vh单位与纯CSS定位的弹框屏幕居中效果实例页面</title>
  <meta name="viewport" content="width=device-width,user-scalable=no"/>
  <style>
    /*
    既然vw, vh是视区相关单位，我就想到是不是可以利用这个特性实现精确的视区大小覆盖以及视区边界的定位。
    拿视区覆盖举例，如果我定义一个元素的高宽如下：
    .element {
      width: 100vw;
      height: 100vh;
    }
    然后，再将其定位到视区左上角，岂不是可以实现视区的完整覆盖；我立马想到了弹出框的半透明覆盖层。
    */
    .dialog_container {
      position: fixed; top: 0; left: 0; /* 位到视区左上角 */
      z-index: 10;
      display: none; /* 默认隐藏 */
 
      width: 100%; /* 为了兼容不支持vw单位的设备, 如: Safari */
      width: 100vw;
      height: 100%;/* 为为了兼容不支持vh单位的设备, 如: Safari */
      height: 100vh;
 
      background-color: rgba(0,0,0,.25); /* 透明度 */
      text-align: center;
    }
    /*
      理解伪元素 :before 和 :after
      首先要明白一种思想：结构和样式分离。
      1. 结构和样式分离，就意味着：没有样式表，HTML文档也是一个完整的文档；没有样式表，也能正常阅读用HTML表达的所有内容。明白这种思想就能很好理解样式表中使用
      :before 和 :after中的content: ""; 就算没有它们中的content: "", HTML文档也不会受到影响，HTML文档也是一个完整的文档.
      2. 层叠样式表（CSS）的主要目的是给HTML元素添加样式，然而，在一些案例中给文档添加额外的元素是多余的或是不可能的。事实上CSS中有一个特性允许我们添加额外元素而不扰乱文档本身，这就是“伪元素”。
        伪元素很酷同时也是可应用到实际工作中的，基本上，每一个我们所添加的元素都不会干扰现有的HTML结构，而且伪元素可以做到 几乎所有我们能想到的事情。
      3. 事实上，的确有一些CSS家族的成员（CSS选择器）被分类为伪元素比如：:first-line, :first-letter, ::selection, :before and :after。
      4. 它是做什么的?  简而言之，伪元素将会在内容元素的前后插入额外的元素，因此当我们添加它们时，使用以下的标记方式，他们在技术上是平等的。
      所以，用简单的话来说： :before 和 :after中的content: ""; 不过是对HTML的装潢，使HTML看起来更漂亮一些。举个例子：
      HTML: <a href="#">知道更多</a>
      以上这句语句，是一个链接，点击就能打开，就算没有任何CSS修饰，也不影响打开链接。但是，如果稍微修饰，这个链接就会看起来美观一些：
      a:after { content: "\00A0\000BB"; }  加上CSS修饰后，链接看起来就美观一些
      定义和用法
        :before / :after 选择器在被选元素的内容前面 / 后面 插入内容。
        请使用 content 属性来指定要插入的内容。
      实例
        在每个 <p> 元素的内容之前插入新内容 及 内容的样式：
      p:before {
        content:"台词：-";
        background-color:yellow;
        color:red;
        font-weight:bold;
      }
      关于语法和浏览器支持
      伪元素实际上在CSS1中就存在了，但是我们现在所讨论的:before和:after则发布于CSS2.1中。在最初，伪元素的语法是使用“:”（一个冒号），随着web的发展，在CSS3中修订后的伪元素使用“::”（两个冒号），也就是::before 和 ::after—以区分伪元素和伪类（比如:hover，:active等）
      然而，无论你使用单冒号还是双冒号，浏览器都将能识别它们。由于IE8只支持单冒号的格式，安全起见如果你想要更广泛的浏览器兼容性那么还是使用单冒号的格式吧！
      注释：对于 IE8 及更早版本中的 :before 和 :after，必须声明 <!DOCTYPE>。
    */
    .dialog_container:after {
      display: inline-block;
      content: '';
      width: 0; height: 100%;
      vertical-align: middle;
    }
 
    .dialog_box {
      position: relative;
      display: inline-block;
      border: 1px solid #ccc;
      text-align: left;
      vertical-align: middle;
    }
 
    .dialog_title {
      line-height: 28px;
      padding-left: 5px;
      padding-right: 5px;
      border-bottom: 1px solid #ccc;
      background-color: #eee;
      font-size: 12px;
      text-align: left;
    }
 
    .dialog_close {
      position: absolute;
      top: 5px; right: 5px;
    }
 
    .dialog_body {
      background-color: #fff;
    }
 
    .demo_image {
      max-width: 90vw;
      max-height: 90vh;
      -webkit-transition: width .3s;
      -moz-transition: width .3s;
      transition: width .3s;
    }
  </style>
</head>
<body>
  <p style="width:210px; position:relative; z-index:11; background-color:#fff;">
    图片宽度（目前<span id="imageWidth">512</span>像素）：<br/> 128 <input type="range" value="512" min="128" max="1024" step="32"> 1024
  </p>
 
  <button id="testButton" type="button">点击我出现图片弹框</button>
  <br/>
  <div id="dialogContainer" class="dialog_container">
    <div id="dialogBox" class="dialog_box">
        <div id="dialogTitle" class="dialog_title">尺寸动态可变图片(PIC: 512px*381px)</div>
 
        <a href="javascript:" id="dialogClose" class="dialog_close">[关闭]</a>
        <div id="dialogBody" class="dialog_body">
        	<img src="images/mm1.jpg" class="demo_image" />
        </div>
 
    </div>
</div>
 
<script>
  (function() {
    if (typeof window.screenX === "number") {
      var $ = function(selector) {
          return document.querySelector(selector);
      };
 
      // 元素们
      var eleWidth = $("#imageWidth"), eleRange = $("input[type='range']"), eleBtn = $("#testButton"),
          eleDialog = $("#dialogContainer");
 
      eleBtn.addEventListener("click", function() {
        $("#dialogBody img").style.width = eleRange.value + "px";
        eleDialog.style.display = "inline";
      });
 
      eleRange.addEventListener("click", function() {
        eleWidth.innerHTML = this.value;
        $("#dialogBody img").style.width = this.value + "px";
      });
 
      $("#dialogClose").addEventListener("click", function() {
        eleDialog.style.display = "none";
        return false;
      });
    }
    else {
      alert("您现在使用的浏览器内力不足，为防止走火入魔，建议使用IE9+或Chrome 20+浏览器~~");
    }
 
  })();
</script>
</body>
</html>
```

### 3. 视区覆盖以及边界定位

拿视区覆盖举例，如果我定义一个元素的高宽如下：

```
.element {
    width: 100vw;
    height: 100vh;
}
```

然后，再将其定位到视区左上角，岂不是可以实现视区的完整覆盖；我立马想到了弹出框的半透明覆盖层.建议在Chrome20+浏览器

下查看效果（因为有range控件），点击demo页面按钮，则半透明覆盖层显现了——完整覆盖：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <title></title>
    <style>
      body{margin:0;}
      .size {
        font-size: 20px;
      }
      section{ border: dotted 1px #45678E; padding: 5px; margin: 0 10px; }
      h2{ margin:10px 10px 0px 10px;}
      i{ font-size:18px; color:#383293; }
 
      html {
        /* iPhone6的375px尺寸作为16px基准，600px正好18px大小 */
        font-size: calc(100% + 2 * (100vw - 375px) / 225);
      }
      @media screen and (min-width: 600px) {
        html {
          /* 600px-1000px每100像素宽字体增加1px(18px-22px) */
          font-size: calc(112.5% + 4 * (100vw - 600px) / 400);
        }
      }
      @media screen and (min-width: 1000px) {
        html {
          /* 1000px往后是每100像素0.5px增加 */
          font-size: calc(137.5% + 5 * (100vw - 1000px) / 1000);
        }
      }
 
      /* 固定窗口下方并居中的条 */
      .vh_bar {
        position: fixed;
        top: 100%;
        top: 100vh;
        left: 5%;
        left: 5vw;
        right: 5%;
        right: 5vw;
 
        height: 30px; line-height: 30px;
        margin-top: -30px;
        background-color: #eee;
        border: 1px solid #ccc;
        box-shadow: inset 0 1px #fff;
        box-sizing: border-box;
        text-align: center;
        font-size:18px;
      }
    </style>
</head>
<body>
  <div><h3>以下字体变化需要 变换浏览器窗口有字号的变化</h3></div>
  <h2>VW size <i id="i1"></i></h2>
  <section id="section1">
    <div>ABCDEFGHIJKLMN</div>
    <div>一二三四五六七八九十零</div>
  </section>
 
  <h2>normal size <i id="i2"></i></h2>
  <section id="section2">
    <div class="size">ABCDEFGHIJKLMN</div>
    <div class="size">一二三四五六七八九十零</div>
  </section>
 
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <div class="vh_bar">各个浏览器测试效果是一模一样的，固定在视区底部，不随滚动条滚动的空白工具栏</div>
</body>
</html>
<script type="text/javascript">
  function toSize(){
    var i1 = document.querySelector('#i1'),
        i2 = document.querySelector('#i2'),
        s1 = document.querySelector('#section1'),
        s2 = document.querySelector('#section2');
 
    i1.innerHTML = s1.querySelector('div').style.fontSize;
    i2.innerHTML = s2.querySelector('div').style.fontSize;
 
    var obj1 = s1.querySelectorAll('div')[0];
    i1.innerHTML = '[font-size:' + new mCss(obj1).GetCss('fontSize') + ']';
    var obj2 = s2.querySelectorAll('div')[0];
    i2.innerHTML = '[font-size:' + new mCss(obj2).GetCss('fontSize') + ']';
 
  	// var oHtml = document.getElementById("html");
  	// var iW= oHtml.getBoundingClientRect().width;//oHtml.clientWidth;
  	// iW= iW>540 ? 540 : iW;
  	// oHtml.style.fontSize=iW/16+"px";
  }
 
  function mCss(obj){
    this.obj = obj;
  }
  mCss.prototype.GetCss = function(key){
    if(typeof this.obj.currentStyle!='undefined'){
      return parseFloat(this.obj.currentStyle[key]);//IE
    }
    else {
      return (getComputedStyle(this.obj)[key]);
    }
  }
 
  window.addEventListener("resize",function(){ toSize();},false);
  window.addEventListener("orientationchange",function(){ toSize();},false);
</script
```

```
3. 场景之：Office Word效果
```

我们可以把web页面做得像Office文档那样，一屏正好一页；拖动滚动条，我们可以一直往下看到最后一页。 如果只借助CSS，这种效果绝对定位是实现不了的。因为其top值是动态的(100%, 200%, 300% …)，必须借助JavaScript才能实现。而使用vh单位，既能捕获浏览器可视区域高度，又不脱离文档流，真是实现Office Word效果最佳利器！

```
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8"/>
  <title></title>
  <meta name="viewport" content="width=device-width, user-scalable=no"/>
  <style>
    body {
      background-color: #789BC9;
    }
 
    page {
      display: block;
      height: 98vh;
      width: 69.3vh;
      margin: 1vh auto;
      padding: 12vh;
      border: 1px solid #646464;
      box-shadow: 0 0 15px rgba(0,0,0,.75);
      box-sizing: border-box;
      background: url(images/office/bl.png) no-repeat 8vh 88vh,
        url(images/office/br.png) no-repeat 59vh 88vh,
        url(images/office/tl.png) no-repeat 8vh 8vh,
        url(images/office/tr.png) no-repeat 59vh 8vh;
      background-color: white;
      position: relative;
    }
    /* 页码 样式 */
    page:after {
      content: attr(data-page);
      color: graytext;
      font-size: 12px;
      text-align: center;
      bottom: 4vh;
      position: absolute;
      left: 10vh;
      right: 10vh;
    }
 
  </style>
</head>
<body>
  <page>
    <ol>
    <li>本demo应用诸多CSS3属性，部分HTML特性，以及高级点的JavaScript API.</li>
    <li>demo页面的宽高按照标准纸张的21:29.7的比例制定，因此，所有单位值都是使用的vh单位。</li>
    <li>本demo <page>元素还可以设置float:left或inline-block两端/居中对齐等，让一屏的水平方向显示多个page页面，
      就如实际的office word一样。</li>
    </ol>
  </page>
  <page></page>
  <page></page>
 
  <script>
    (function() {
      if (typeof window.screenX === "number") {
        var elePages = document.querySelectorAll("page"), lenPage = elePages.length;
        for (var i=0; i<lenPage; i+=1) {
          elePages[i].setAttribute("data-page", "第 "+ (i+1) +" 页，共 "+ lenPage +" 页");
        }
      }
      else {
        alert("浏览器太老了！");
      }
    })();
 
  </script>
</body>
</html>
```

1. **本demo应用诸多CSS3属性，部分HTML特性，以及高级点的JavaScript API.**

2. **demo页面的宽高按照标准纸张的21:29.7的比例制定，因此，所有单位值都是使用的vh单位。**

3. **本demo <page>元素还可以设置float:left或inline-block两端/居中对齐等，让一屏的水平方向显示**

4. **多个page页面，就如实际的office word一样。**

   

 **4. 水平居中布局与滚动条跳动**

绝大多数的页面间布局都是水平居中布局，主体定个宽度，然后**margin: 0 auto;**

例如，妇女之友大淘宝的首页：
淘宝首页的居中布局
然而，这种布局有一个存在一个影响用户体验的隐患。应该都知道，现代浏览器滚动条默认是overflow:auto类型的，也就是如果尺寸不足一屏，没有滚动条；超出，出现滚动条。于是，问题来了：
信息流页面，如新浪微博，是从上往下push渲染的。开始只有头部一些信息加载，此时页面高度有限，没有滚动条；然后，更多内容显示，滚动条出现，占据可用宽度，margin: 0 auto主体元素自然会做偏移——跳动产生。
JS交互，本来默认页面高度不足一屏，结果点击了个“加载更多”，内容超过一屏，滚动条出现，页面主体就会左侧跳动。
结构类似几个页面通过头部的水平导航刷新切换，结果有的页面有滚动条，有的没有。造成的结果就是，导航尼玛怎么跳来跳去！
当前优化这种体验问题，一般有两种解决方法：
高度尺寸不确定的，例如，新浪微博，使用：
body { overflow-y: scroll; }
新浪微博处理滚动跳动问题方法
高度确定的，例如淘宝网首页。使用CSS把页面尺寸布局骨架搭好，再在里面吐数据。于是，要么没有滚动条，要么滚动条直接出现。不会出现跳动。

CSS3计算calc和vw单位巧妙实现滚动条出现页面不跳动。

```

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>页面出现滚动条的时候没有跳动晃动</title>
```

```
<style>
	/*
	更新于2016年9月28日
	经过一些列项目实践，关于浏览器出现滚动条和消失页面不滚动有了更加终极的解决方案，经过大型项目实践已经验证相当具有可行性，这里特意分享下：
	*/
	/*
	html {overflow-y: scroll;}
	:root {
	  overflow-y: auto;
	  overflow-x: hidden;
	}
	:root body {position: absolute;}
	body {
	  width: 100vw;
	  overflow: hidden;
	}*/
 
	body{background:#a0b3d6; font-size:87.5%; margin:0; line-height:1.5; color:#333; font-family:Arial, sans-serif;}
	#content { min-height: inherit; }
	/* 跳晃 的标题文字 */
	.demo {
		margin-left: -webkit-calc(100vw - 100%);
		margin-left: calc(100vw - 100%);
		text-align: center; overflow: hidden;
		-webkit-animation: scrollbar-toggle 4s infinite alternate;
		animation: scrollbar-toggle 4s infinite alternate;
	}
	.demo p{ font-size:28px;}
	@-webkit-keyframes scrollbar-toggle {from{height: 0vh;}to{height: 50vh;}}
	@keyframes scrollbar-toggle {from{height: 0vh;}to{height: 50vh;}}
 
	#main{width:100%; background:#beceeb; overflow:hidden;}
	#main h1{line-height:40px; margin:0; text-align:center; font-size:38px; background:#c1d5eb; font-family:'kaiti','microsoft yahei'; text-shadow:0px 1px 0px #f2f2f2;}
	#body{padding:0; overflow:hidden;}
	#body .part{width:50%; min-height:500px; _height:500px; background:white;}

```

```
#code{float:left; margin-left:-1px; margin-bottom:-999em; padding-bottom:999em;}
#body h3{
          line-height:30px; margin:0; font-size:15px; background:#f0f3f9; padding-left:10px; 
          border-bottom:1px solid #ededed; 
          color:#4e4e4e; 
          text-shadow:0px 1px 0px white; 
          font-family: 'microsoft yahei';
        } 
    </style>
</head>
<body>
  <div id="main"> 
    <h1>页面出现滚动条的时候没有跳动晃动实例页面</h1>
    <div id="body" class="light">
      <div id="content" class="show">
        <h3>展示</h3> 
        <div class="demo"> 
          <p>我不像标题，我是一个不会晃动的安静的小天使！</p> 
          <img src="images/mm1.jpg" /> 
        </div> 
        <h3>代码</h3> <h5>CSS代码：</h5> 
        <pre name="code" class="DlHighlight css"> 
          .demo { 
            margin-left: -webkit-calc(100vw - 100%); 
            margin-left: calc(100vw - 100%); 
            text-align: center; 
            overflow: hidden; 
            -webkit-animation: scrollbar-toggle 20s infinite alternate; 
            animation: scrollbar-toggle 20s infinite alternate; 
          } 
          @-webkit-keyframes scrollbar-toggle {from{height: 0vh;}to{height: 80vh;}} 
          @keyframes scrollbar-toggle {from{height: 0vh;}to{height: 80vh;}}
        </pre> 
      </div> 
    </div> 
  </div>
</body>
</html>
```

