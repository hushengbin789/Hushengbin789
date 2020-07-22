## JS基本语法

### 1、JS 简介，JS和H5的关系

### 2、编写及运用

### 3、变量

### 4、运算符

### 5、类型转换



#### JS与H5的关系

​	H5狭义上，指HTML的第五个版本；广义上指web前端的所有技术，由于web前端是在H5出现后开始火爆起来，所以，习惯上把web前端也叫H5。web前端开发也叫H5开发

H5包括 HTML，CSS，JavaScript，等一切前端技术。



**编辑工具和运行环境**

编辑工具：写代码的工具
 如：dreamweaver，editplus，Notepad++，sublime
运行环境：看结果的地方
 如：IE，firefox，chrome

### JS运算符

![](C:\Users\ASUS\Desktop\03.png)

**赋值运算符**

![](C:\Users\ASUS\Desktop\04.png)

**字符串连接符，字符串拼接表达式**

+ 运算符用于把文本值或字符串变量加起来（连接起来）。
  例: 
  	 var str=“java”;
  	 var str=str+”script”;
  结果是 javascript
  	 var str1=“苹果单价:”;
  	 var str1=str1+5; //把数值类型与字符串类型连接，结果会得到字符串类型
  结果是 苹果单价:5

**关系运算符**

![](C:\Users\ASUS\Desktop\05.png)

### 类型转换

1）隐式（自动）转换，不同的数据类型参与表达式运算过程时将会转换为同一类型进行运算
字符串与数值类型运算的隐式转换规则：
1.字符串加数字,数字就会转成字符串。
2.数字减字符串，字符串转成数字。如果字符串不是纯数字就会转成NaN。字符串减数字也一样。两
个字符串相减也先转成数字。
3.乘，除，大于，小于跟减的转换也是一样。

2）显示（手动）转换
字符串转数值：
parseInt()、parseFloat()、Number()
数值转字符串:
toString()
注：NaN表示不是数字,但是仍是数值类型， not a number，NaN是Number类型

**请问parseInt()，parseFloat(),Number()的区别?**

答：

​     1、parseInt()字符串转换成整型，

​     parseFloat()字符串转换成浮点型,
     Number()字符串转换成数字型；

  2、
  2.1）、Number():看的是整体，只要字符串内的内容不是合法的数字，则结果为NaN；否则，就会正常转换为数字类型。
  2.2）、parseInt()和parseFloat()的转换规则比较接近（类似）；
  从前朝后，如果第一个字符是非数字，那么，结果为NaN；如果第一个字符是数字：
   1）、parseInt()：如果遇到小数点或者其它非数字字符或结尾，那么就把前面的内容正常转换为数字
   2）、parseFloat()：如果遇到第二个小数点或者其它非数字字符或结尾，那么就把前面的内容正常转换为数字