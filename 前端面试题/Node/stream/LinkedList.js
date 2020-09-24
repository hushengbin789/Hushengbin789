// 常见的数据结构 队列 栈  链表  树
// 队列时先进先出 push shift  事件环
// 栈型结构 push pop 方法调用栈  路由切换  浏览器的历史记录 两个栈

class Node {
    constructor(element, next) {

        this.element = element;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(index, element) { // 增加节点
        if (arguments.length == 1) {
            element = index;
            index = this.size
        }
        if (index < 0 || index > this.size) throw new Error('链表索引异常');

        if (index == 0) {
            let head = this.head; // 老的头
            this.head = new Node(element, head);
        } else {
            let prevNode = this.getNode(index - 1); // 这里前面节点肯定有，如果没有会走if
            prevNode.next = new Node(element, prevNode.next);
        }
        this.size++;
    }
    remove(index) { // 删除节点
        if(this.size == 0) return null
        let oldNode;
        if (index == 0) {
            oldNode = this.head;
            this.head = oldNode && oldNode.next;
        } else {
            let prevNode = this.getNode(index-1); // 获取当前的前一个节点 
            oldNode = prevNode.next; // 前一个的下一个就是要删除的 
            prevNode.next = oldNode.next; // 让前一个下一个 执行 之前的下一个
        }
        this.size--;
        return oldNode.element; // 返回删除元素
    }
    getNode(index) { // 获取节点
        let current = this.head; // 从头找
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    length() { // 链表的总个数
        return this.size
    }
    reverseLinkedList2(){
        function reverse(head){ // 先递归最里面的，在出来
            // 如果链表为空 或者没有下一个了 就不用反转了
            if(head == null || head.next == null) return head;
            let newHead = reverse(head.next); // 将原来的下一个变成头结点
            head.next.next = head; // 让下一个节点的下一个指向原来的头
            head.next = null; // 让老头指向null
            return newHead
        }   
        this.head = reverse(this.head)
        return this.head;
    }
    reverseLinkedList(){
        let head = this.head; // 保留老头
        if(head == null || head.next == null) return head;
        let newHead = null; // 新的链表头部默认指向null
        while(head!==null){ // 循环老的链表 将内容依次的取出使用
            let temp = head.next; // 存储的是100 
            head.next = newHead;  // 让老的头指向新的头
            newHead = head; // 新的头指向了老的头 
            head = temp; // 老的头向后移动
        }
        this.head = newHead;
        return this.head
    }
}
module.exports = LinkedList
// let ll = new LinkedList();
// ll.add(0, 100); // 200 100  300往索引0出天健
// ll.add(0, 200);
// ll.add(300);
// let reverList = ll.reverseLinkedList();
// console.log(reverList); // 300 100 200



// let ll = new LinkedList();
// head = 100
// head =200 next => head
// ll.add(0, 100); // 200 100  300  往索引0出天健
// ll.add(0, 200);
// ll.add(300); // 200 下一个是 100 下一个 是300  像末尾添加
// ll.remove(2);
// console.log(ll.head)


// 常考的面试题 链表反转 其他的两个流 转化流和双工流
// 文件夹操作  树结构遍历算法 层序 深度 树的反转