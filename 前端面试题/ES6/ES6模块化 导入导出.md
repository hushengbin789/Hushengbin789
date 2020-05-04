## ES6模块化 导入导出
ES6自带了模块化， 也是JS第一次支持module， 可以直接作用import和export在浏览器中导入和导出各个模块了， 一个js文件代表一个js模块；

ES6的模块化的基本规则或特点：
-  1：每一个模块只加载一次， 每一个JS只执行一次， 如果下次再去加载同目录下同文件，直接从内存中读取。 一个模块就是一个单例，或者说就是一个对象；

-  2：每一个模块内声明的变量都是局部变量， 不会污染全局作用域；

- 3：模块内部的变量或者函数可以通过export导出；

- 4：一个模块可以导入别的模块
### ES6 导入导出案例：
```
//1.default 只能导出一次
var name = 'name1';
exprot default name;

//2.
var obj1 = {name:'name', title: 'title'};
var obj2 = 'obj2';
var obj3 = 'obj3'
export {obj1, obj2, obj3};


//1. 只会导入default模块
import name from './XX.js';
//1.结果: name1

//2.导入指定模块
import {obj1, obj2, obj3} from './XX.js';
//2.结果 {name:'name', title: 'title'}、'obj2'、'obj3'

//3.导入所有模块(as 别名，返回一个json对象)
import * as allObj from './XX.js';
//3.结果：{
  name:  'name1',
  obj1:{name:'name', title: 'title'},
  obj2: 'obj2',
  ojb3: 'obj3'
}
```

```
    <!-- module -- 标记当前引入的文件为模块 -->
    <script type="module" src="./src/entrance.js"></script>

// —————————————————————— './m1.js'
let a = 0,
    b = 20,
    c = "default",
    d = a => { a = "demo"; console.log(a); }

setInterval(() => { a++ }, 1000);
function test() { console.log(a) }
// export { a as name };
// 导出多个变量
export { a, b, c, d, test };
// 默认导出
export default c;

// —————————————————————— './entrance.js'
// node commonJs AMD CMD
// -- ES6模块化
// import -- 导入   export -- 导出
// import引入是同步加载的、
// 导入的变量只能读不能取、导入的变量数据是实时绑定，同步的、
import default_1, { a as a1, b as b1, c as c1, d, test } from "./m1.js";
import default_2 from "./m1.js";
import * as all from "./m1.js";
console.log(all, default_1, a1, default_2);
setInterval(() => {
    // 导出的变量数据是实时绑定的、
    console.log(a1);
}, 1000);

let btn = document.getElementsByTagName("button")[0];
btn.onclick = () => {
    // 模块导入，按需加载、import() 方法的返回值是Promise对象(异步)、
    // ({ test }) == 解构赋值、
    import ("./m1.js")
        .then( ({ test }) => { console.log("val: ", test) })
        .catch( err => { console.log("err: ", err) });
};
```