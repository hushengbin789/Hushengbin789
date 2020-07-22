HTML5加入了新的input类型 number，这是方便数量输入的。如果是在移动端中，属性type=”number”和type=”tel”会唤起系统的数字键盘，这对于交互还是挺友好的。

```html
<input type="text"  maxlength="5" />   //可以

<input type="number"  maxlength="5" />  //没有效果

<input type="number" oninput="if(value.length>5) value=value.slice(0,5)" /> //js控制，可以

<input type="tel"  maxlength="5" />  //tel类型，可以
```

input type='tel' VS type='number'
有个小需求 验证手机号(移动h5)

手机上点输入框调起数字键盘，并且只能输入11位纯数字

一开始用的<input type='number' v-model="phone" maxlengt="11">

但是有两个问题：

一是maxlength不起作用 无法限制长度

另一个是 由于数字键盘可以输入'-+.'这两个字符 一旦输入这两个字符 this.phone 的值就变成空

比如输入021 继续输入- e.target.value就会变为空，因为021-不是数字，不合法。不过 -4是合法的

 

解决办法：

type的属性值 有一个tel 定义用于电话号码的文本字段

于是改为<input type='tel' v-model="phone" @input="input" maxlengt="11">

这样写maxlength会生效 由于是电话键盘 除了'-+.' 还允许输入‘#*’时  此时 this.phone 就是 输入框中的值 

因此还需要通过js代码 处理这两个符号 添加一个input方法：
```js
input() {　　

　　this.phone = this.phone.replace(/[^0-9]/g, '');
}
```

这样就实现了我们想要的功能。
```
1. 在 Android  和 iPhone 上,input 标签 type = tel, type = number 都能调起数字键盘, 区别在于 iPhone 上能不能输入小数点
2. 在 iPhone 上, input 标签 type = tel 调起的键盘是不能输入小数点的
3. 在 iPhone 上, input 标签 type = number 调起的键盘可以输入小数点
4. 在 Android 上,两种都可以输入小数点
5. 在 Android 上, type = tel 可以输入汉字,英文字母等,type = number 不行
6. Android 和 iPhone 对 tel 和 number 的表现刚好有点相反,在 Android 上 tel 可以输入汉字空格等,number 不行,而在 iPhone 上刚好反过来了,tel 不能输入汉字,number 可以输入汉字空格
```
