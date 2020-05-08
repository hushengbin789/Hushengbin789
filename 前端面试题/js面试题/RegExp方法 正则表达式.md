## RegExp方法 正则表达式
```
//   转义符号：
// \r —— 行结束符 \n —— 换行 (正常情况下 一个换行 = \r\n)
// \t —— 制表符
//   正则表达式的写法
// var reg = new RegExp('[A-z]', 'g'); 第一种写法、
// var reg = /[A-z]/g; 第二种写法、
//      i 不区分大小写、
//      g 全局匹配、
//      m 多汗匹配、
// (abc|bcd) 匹配abc或者bcd、
// 默认是贪婪匹配原则、

var reg = /[\w]/igm;
var str = "abcdefgh\nasfkjjnef\nasjdafij\naskmf";
var demo = reg.test(reg); // 测验str中是否含有reg片段。返回 true、false
console.log(demo); // 返回结果：true
var demo = str.match(reg); // 挑选出正则匹配出来的片段，以数组形式展现、
console.log(demo); // 返回结果：数组类型、

// var reg = /(a)/1/g; /1 的意思是反向引用第1个括号的内容、

var str = 'aabb';
var str_1 = str.replace('a', 'z'); // 文本替换(只能替换掉第1个)、
console.log(1, str_1); // 返回结果："zabb"
var str_1 = str.replace(/a/, 'z'); // 文本替换(只能替换掉第1个)、
console.log(2, str_1); // 返回结果："zabb"
var str_1 = str.replace(/a/g, 'z'); // 文本替换(会全部替换掉)、
console.log(3, str_1); // 返回结果："zzbb"

// 以下是配合正则，高级文本替换。$1、$2分别表示第1和第2个括号的内容，
var str_1 = str.replace(/(\w)\1(\w)\2/g, '$2$2$1$1');
console.log(4, str_1); // 返回结果："bbaa"


// 实例：用正则替换·转小驼峰、
var str = 'the-first-name';
var reg = /-(\w)/g;
console.log(str.replace(reg, function($, $1) {
    // console.log($, $1);
    return $1.toUpperCase();
}));
// 返回字符串(小驼峰)：'theFirstName'


// 正向预查(a(?=b) 选出后面带b的a)
str = '1abaa1abuuhuaa';
reg = /[\w]{3}a(?=b)/g;
console.log(str.match(reg));
// 返回数组：["aa1a"]    "1ab'aa1a'buuhuaa"

str = 'asdfv11aaaaaaaaaaaaaabbbbbbccccc';
reg = /([\w])\1*/g;
console.log(str.replace(reg, '$1'));
// 返回字符串：'asdfv1abc'
```