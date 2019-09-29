Vue __ob__: Observer

在操作数据的时候发现，__ob__: Observer这个属性出现之后，如果单独拿数据的值，就会返回undefined。于是就到网上查相关的资料，发现__ob__: Observer是vue一个很重要的知识点。

数据对象的 __ob__ 属性

__ob__: Observer这些数据是vue这个框架对数据设置的监控器，一般都是不可枚举的。

网上有很多解决的方案：

第一种：__ob__: Observer 是 Vue 对数据监控添加的属性，如果想去掉可以用赋值的方式。例如Object.assign({},this.owner)。 用这种方式也是可以解决。

第二种：假设list里面存放的就是那些带有__ob__: Observer的可以用JSON.parse(JSON.stringify(this.list)）完美解决

第三种（我自己用的）：直接操作数据


```
    this.tableData = res.data; //后台返回的数据赋予 this.tableData

    如果在控制台输出，console.log(this.tableData.id)   //就会返回undefined

    如果是这样打印数据，console.log(this.tableData[0].id)     //就会返回你想要的id了
```



![![img](https://upload-images.jianshu.io/upload_images/636898-b3aee7764dc0b1a8.png?imageMogr2/auto-orient/strip|imageView2/2/w/650)]()
















