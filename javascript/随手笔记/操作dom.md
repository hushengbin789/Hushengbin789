### 原生JS添加appendChild、insertBefore

##### createElement()创建元素节点

```
var element=document.creatElement("元素名")；
```

##### createTextNode()创建文本节点

```
var txt=document.creatTextNode("文本内容")
```

##### createAttribute()创建属性节点

```
var attr=document.createAttribute("属性名")
attr.value="属性值"
```

##### appendChild()方法向节点添加最后一个子节点

```
<div id="box" class="classa">
    <p id="p1">这是一个段落</p>
</div>
```

```
	var box=document.getElementById("box");
    var p2=document.createElement("p");//创建元素节点
    var txt=document.createTextNode("这是另一个段落");//创建文本节点
    p2.appendChild(txt);//把创建的文本节点追加到元素节点中
    
    var attr=document.createAttribute("id");//创建属性节点
    attr.value="p2";//给属性节点设置值
    p2.setAttributeNode(attr);//给元素设置属性节点
    box.appendChild(p2);//把创建的p元素追加到box最后
    console.log(box)
```

结果如下：

```
<div id="box" class="classa">
    <p id="p1">这是一个段落</p>
    <p id="p2">这是另一个段落</p>
</div>
```

##### insertBefore()在指定的子节点之前插入新的子节点

parent.insertBefore(newChild,oldChild);

```
<div id="box" class="classa">
    <p id="p1">这是一个段落</p>
</div>
<script>
	var box=document.getElementById("box");
	var p1=document.getElementById("p1");
	
	var p0=document.createElement("p")
	var txt=document.createTextNode("这是一个段落")
	p0.appendChild(txt);
	box.insertBefore(p0,p1);
	console.log(box);
	<script/>
```

结果如下

```
<div id="box">
	<p>这是一个新段落</p>
	<p id="p1">这是一个段落<p/>
</div>
```

##### removeChild()用来删除父节点的一个子节点

parent.removeChild(childNode);

```
<div id="box">
    <p id="p1">这是一个段落</p>
    <p id="p2">第二个段落</p>
</div>
<script>
	var box=document.getElementById("box");//找到父元素
	var p1=document.getElementById("p1");//找到子元素
	box.removeChild("p1");
	//也可以通过要删除的子节点的父节点删除子节点
	p1.parentNode.removeChild(p1);
</script>
```



##### replaceChild()用新节点替换某个子节点

parent.replaceChild(newnode,oldnode);

```
<div id="box">
    <p id="p1">这是一个段落</p>
    <p id="p2">第二个段落</p>
    <div id="div1">这是div</div>
</div>
<script>
	var box=document.getElementById("box")//找到父元素
	var p1=document.getElementById("p1)//找到要替换的元素
	
	var p1=document.createElement("p");//创建要替换的元素
	p3.innerHTML="这是第三个段落";//为创建的元素赋值
	box.replaceChild("p1,p1")//替换节点
	p1.parentNode.replaceChild(p3,p1);//通过parentNode节点
</script>
```

**注意：新节点可以是文档中某个已存在的节点，也可以创建新的节点** 



##### cloneNode()复制节点并返回复制的节点

node.cloneNode(true|false) ; //默认是 false。  参数设置为 true，克隆节点及其属性，以及后代；设置为 false，克隆节点本身  如下 

```
<div id="main">
    <div id="box">
        <p id="p1">这是一个段落</p>
        <p id="p2">第二个段落</p>
    </div>
</div>
<script>
	var main=document.getElementById("main");
	var box=document.getElementById("box");
	
	var newNode=box.cloneNode(true);
	main.appendChild(newNode);
	console.log(main);
</script>
```

当参数为true时，结果如下 

```
<div id="main">
    <div id="box">
        <p id="p1">这是一个段落</p>
        <p id="p2">第二个段落</p>
    </div>
    <div id="box">
        <p id="p1">这是一个段落</p>
        <p id="p2">第二个段落</p>
    </div>
</div>
```

当参数为false时，结果如下 

```
<div id="main">
    <div id="box">
        <p id="p1">这是一个段落</p>
        <p id="p2">第二个段落</p>
    </div>
    <div id="box"></box>
</div>
```











