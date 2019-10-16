Array.prototype方法（26）toLocaleString
https://zhuanlan.zhihu.com/p/53311805
Array.prototype.toLocaleString()方法返回一个字符串表示数组中的元素。数组中的元素将使用各自的toLocaleString方法转成字符串，这些字符串将使用一个特定语言环境的字符串隔开。

数组中的元素将会使用各自的toLocaleString方法：

1、对象会使用Object.prototype.toLocaleString()

2、数值类型Number会使用Number.prototype.toLocaleString()

3、日期类Date会使用Date.prototype.toLocaleString()

同系列文章：

《Array函数及其属性、方法》

《Array.prototype方法（1）concat》

《Array.prototype方法（2）push》

《Array.prototype方法（3）pop》

《Array.prototype方法（4）unshift》

《Array.prototype方法（5）shift》

《Array.prototype方法（6）keys》

《Array.prototype方法（7）values》

《Array.prototype方法（8）entries》

《Array.prototype方法（9）join》

《Array.prototype方法（10）reverse》

《Array.prototype方法（11）find》

《Array.prototype方法（12）findIndex》

《Array.prototype方法（13）indexOf》

《Array.prototype方法（14）lastIndexOf》

《Array.prototype方法（15）includes》

《Array.prototype方法（16）every》

《Array.prototype方法（17）some》

《Array.prototype方法（18）map》

《Array.prototype方法（19）forEach》

《Array.prototype方法（20）filter》

《Array.prototype方法（21）reduce》

《Array.prototype方法（22）reduceRight》

《Array.prototype方法（23）slice》

《Array.prototype方法（24）fill》

《Array.prototype方法（25）toString》

《Array.prototype方法（26）toLocaleString》

《Array.prototype方法（27）copyWithin》

《Array.prototype方法（28）sort》

《Array.prototype方法（29）splice》

《Array.prototype方法（30）[Symbol.iterator]》