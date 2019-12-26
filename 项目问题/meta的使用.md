HTML Meta中添加X-UA-Compatible和IE=Edge，chrome=1有什么作用
通过在meta中设置X-UA-Compatible的值，可以指定网页的兼容性模式设置。IE = edge告诉IE使用最新的引擎渲染网页，chrome = 1则可以激活Chrome Frame 。

X-UA-Compatible是自从IE8新加的一个设置，对于IE8以下的浏览器是不识别的。在网页中指定的模式优先权高于服务器中(通过HTTP Header)所指定的模式。

扩展资料：

网页的浏览器兼容的重要性：
```
1、网站做好了浏览器兼容，能够让网站在不同的浏览器下都正常显示

2、浏览器兼容能够抓住更多的网站访客

3、浏览器兼容能够给客户更好的体验
```
注意事项：

1，根据官网定义X-UA-compatible 标头不区分大小写；不过，它必须显示在网页中除 title 元素和其他 meta 元素以外的所有其他元素之前。如果不是的话，它不起作用

2，content的内容是IE=8，或者IE=edge等值，注意不是IE8或者直接写个edge的值，否则不起作用