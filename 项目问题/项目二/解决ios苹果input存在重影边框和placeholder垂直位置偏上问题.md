### ios 苹果中input框存在重影边框问题
### placeholder垂直位置偏上问题
##### 先看图
![img0001](https://img-blog.csdnimg.cn/20200804105938835.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1MDk0Njgy,size_16,color_FFFFFF,t_70)

##### 解决之后
![img0002](https://img-blog.csdnimg.cn/20200804110324657.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1MDk0Njgy,size_16,color_FFFFFF,t_70)

```css
/* 
 解决input在ios存在重影边框问题
 去掉默认样式，上边框的阴影
*/
.placeholderFontsize{
    font-size: 0.38rem;
    outline: none;
    -webkit-appearance: none; 
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
/* placeholder垂直位置偏上问题  line-height*/
.placeholderFontsize::-webkit-input-placeholder{
    font-size:0.3rem !important;
    line-height: 0.4rem;
    [;line-height:1;]/*只在Safari有效*/
}

```
#### 兼容性
```css
::-moz-placeholder{color:red;} /*ff*/
::-webkit-input-placeholder{color:red;} /*chrome,safari*/
::-ms-input-placeholder{color:red;} /*ie10*/

```

