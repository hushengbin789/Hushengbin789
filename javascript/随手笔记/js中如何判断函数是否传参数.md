## js中如何判断函数是否传参数
1.我们先创建一个js函数,函数很简单,只是alert参数的值。
```
function canshu(cs){
    alert(cs)
}
```
2.然后在下方直接调用这个函数,参数传的是12.
```
function canshu(cs){
    alert(cs)
}
canshu(10)
```
3.运行页面后,可以看到alert出来的值就是10.

4.把函数调用改成没有参数的。
```
function canshu(cs){
    alert(cs)
}
canshu()
```
5.再次运行页面,可以看到alert的值是undefined

6、所以我们修改一个函数，判断参数是否为undefined就行了，如果是的话，就是没有传参数了。
```
function canshu(cs){
    if(cs==undefined){
        alert('没有传参数')
    }else{
        alert('有参数' + cs)
    }
}
canshu()
```
7、运行页面，可以看到调用函数是没有传参数的。