## Object.defineProperty
```js
// 在对象上定义一个新的、具有详细描述的属性。或者修改一个对象的现有属性、
// Object.defineProperty(对象,属性,描述符);     返回值：修改后的对象、
let obj = {}
Object.defineProperty(obj, 'name', {
// 数据描述符(不共存)：
    //        value -- 属性值
    value: 'cst',
    //     writable -- 是否可修改(默认false)
    // 演示：obj[name] = 'test';
    writable: true,
    // configurable -- 是否可配置(默认false)
    // 演示：delete obj[name];
    configurable: true,
    //   enumerable -- 是否可枚举(默认false)
    // 演示：for (let prop in obj) { console.log( obj[prop] ) }
    enumerable: true,
// 存取描述符(不共存)：
    get: function() {
        // 当obj[name]被读取时调用该方法，劫持后返回 'get'
        return 'get';
    },
    set: function(val) {
        // 对象属性赋值时会经过这个方法，属性值通过val参数传入、
        return val;
    },
})
```
```js
// 简写形式
let newObj = {
    tempValue: 'test',
    get name() {
        return this.tempValue;
    },
    set name(newValue) {
        this.tempValue = newValue;
    }
}
console.log( newObj.name );
```
注意：如果描述符中同时出现，value、writable 和 set、get两组的话，会冲突。切记不要同时使用。
 作用：双向数据绑定的核心方法，主要做数据劫持操作 (监控属性变化) ，同时是后期ES6中很多语法糖底层实现核心的方法。
## ES6 - 数据劫持
```js
// 将对象的属性名打包成数组、
let obj = { a: 1, b: 2, c: 3 }
console.log( Object.keys(obj) ); // ["a", "b", "c"]
Object.keys(obj).forEach((key) => { console.log(key) })
```
```js
// 原对象
let oData = {
        val: 'test'
    },
    // 代理对象
    // new Proxy(obj, {···}) -- 植入代理模式的思想，以简洁易懂的方式控制对外部对象的访问、Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。
    oProxyData = new Proxy(oData, {
        set(target, key, value, receiver) {
            // target -- 原对象  key -- 属性名  value -- 属性值  receiver -- 代理
            console.log(target, key, value, receiver);
            // 等同于：target[key] = value;
            Reflect.set(target, key);
        },
        get(target, key, receiver) {
            // target -- 原对象  key -- 属性名  receiver -- 代理
            console.log(target, key, receiver);
            // 等同于：return target[key];
            return Reflect.get(target, key);
        },
        // ···
    });
console.log(oProxyData.val); // 'test'
```

