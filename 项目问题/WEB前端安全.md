 ***WEB前端安全那些事儿***

**为什么要攻击?**
其实真正为了玩的心态去进行黑网站的人，还是少数。多数攻击还是有利益的成分在里面的。我模糊的记得，以前听腾讯的工程师说过一句话，大概是这样的：开发者不可能确保自己的应用绝对无法被攻击，但是只要攻击我们的时候，黑客花费的成本远比他可以获取的利益大得多，黑客就不会去攻击。防范强如支付宝、QQ等产品，也都曾被报过漏洞，看来防御不是绝对的，我们只能想办法让我们的应用更加安全。

**CSRF攻击**
什么是CSRF攻击？
CSRF攻击在百度百科中的解释是：
CSRF（Cross-site request forgery跨站请求伪造，也被称为“One Click Attack”或者Session Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。
其实就是网站中的一些提交行为，被黑客利用，你在访问黑客的网站的时候，进行的操作，会被操作到其他网站上(如：你所使用的网络银行的网站)。

 
 http://blog.csdn.net/fengyinchao/article/details/52303118