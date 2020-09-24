// 错误说法 就是每次执行都会创建一个作用域 声明时就定义了作用域
// 运行的时候产生的叫执行上下文
// function a(){
//     function b(){
//         function c() {

//         }
//         c();
//     }
//     b();
// }
// a();
// 路由切换 判断语法是否可以正常合并 <div><span></span></div>  [{}]
// 你不知道的js

// 数组的shift是比较浪费性能的，每次弹出一个后续内容都会前进， 链表（通过指针链接起来）

// 链表查找 删除的性能平均复杂度是O(n) 链表可以优化头尾操作比较合适
// 我们可以使用链表来实现 栈 或者队列

let LinkedList = require('./LinkedList');
class Queue{ // 队列是添加和删除
    constructor(){
        this.ll = new LinkedList();
    }
    offer(element){ // 入队列
        this.ll.add(element);
    }
    poll(){
        return this.ll.remove(0);
    }
}
module.exports = Queue;