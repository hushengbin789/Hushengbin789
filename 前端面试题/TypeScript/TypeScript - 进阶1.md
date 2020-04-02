## 抽象类
```
 // 模版模式：有些方法所有的子类实现的流程完全一致，只是流程中的某个步骤(规则)具体实现不一致。可以将该方法提取到父类，在父类中完成整个流程的实现。

  // abstract -- 抽象类(对象不能单独创建，只能被继承)
  // 抽象类：只表示一个抽象概念，主要用于提取子类共有的成员，而不能直接创建它的对象。
  abstract class A {
    //  readonly -- 被修饰的字段为只读类型，不可修改
    //    public -- 公开的(默认)，所有代码均可访问。
    // protected -- 受保护的成员，只能在自身和子类中访问。
    //   private -- 私有的，只能在自身访问，继承的子类无法访问。
    protected a: number = 1;
    x: number = 0;
    y: number = 0;
    // abstract -- 抽象成员，必须出现在抽象类中。这些抽象成员必须在子类中实现。
    // 父级中，可能知道有些成员是必须存在的，但是不知道该成员的值或实现是什么。因此需要强约束，让继承该类的子类必须实现这个成员(属性/方法)。
    abstract name: string; // 定义抽象成员 (子类必须实现)
    abstract rule(targetX: number, targetY: number): boolean; // 定义抽象方法 (子类必须实现这个方法)
    // 模版模式：有些方法所有的子类实现的流程完全一致，只是流程中的某个步骤(规则)具体实现不一致。
    // 可以将该方法提取到父类，在父类中完成整个流程的实现。遇到实现不一致的方法时，将该方法做成抽象方法。
    move(targetX: number, targetY: number): boolean {
      console.log("1.边界判断");
      console.log("2.目标位置是否有乙方棋子");
      // - 3.棋子移动规则判断
      if (this.rule(targetX, targetY)) {
        this.x=targetX; this.y=targetY;
        return true;
      }
      return false;
    }
  }

  class B extends A {
    // 假设rule是象棋的规则函数
    rule(targetX: number, targetY: number): boolean {
      console.log("- 3.棋子移动规则判断");
      return true;
    }
    name = "马"; // 父级定义了'抽象成员'，子级必须要处理它，给予该属性赋值。
    e?: string = null;
    // super -- 读取父类资源，调用父类的属性/方法
    // super.b
  }
  new B().move(5, 5);
  // const a = new A(); // 已经定义了抽象类，将无法创建抽象类的实例。
  const b: A = new B(); // 鸭子辩型
  if (b instanceof B) { // 触发类型保护
    b.e = undefined;  }
```
```
export interface IFireShow {
      name: string;
    }

    // 抽象类
    export abstract class Animal {}
    // 子类 (必须实现IFireShow的接口)
    export class Lion extends Animal implements IFireShow {
      name = "xxx";
    }

    // 类型保护函数：通过调用该函数，会触发TS的类型保护，该函数必须返回 Boolean
    function hasShow(ani: object): ani is IFireShow {
      if ((ani as IFireShow).name) {
        return true;
      }
      return false;
    }

    // 接口可以继承自类(class)
    // interface C extends Aobj,Bobj {   }
```
## 静态成员
```
// 实例成员：属于某个类的对象。'new User().log()'
// 静态成员(static)：属于某个类。'User.login()'
class User {
static Users: User[] = [];
constructor(public name: string, public pwd: string) {
    User.Users.push(this);
}
// 定义静态方法
static login(name: string, pwd: string): User | undefined {
    return User.Users.find(u => name === u.name && pwd === u.pwd);
}
log() {  console.log(this.name, this.pwd);  }
}
const u1 = new User("name_111", "pwd_111");
const u2 = new User("name_222", "pwd_222");
console.log(User.Users);
console.log(User.login("name_111", "pwd_111"));
```
## 设计模式-单例模式
```
  // 所谓单例，就是整个程序有且仅有一个实例。该类负责创建自己的对象，同时确保只有一个对象被创建。

  class Board {
    width: number = 500;
    height: number = 700;
    init() {  console.log("初始化棋盘");  }
    private constructor() {} // 让外部无法通过new的方式创建
    private static _board?: Board;
    static createBoard(): Board {
      return this._board ? this._board : (this._board = new Board());
    }
  }
  // new Board(); 此时构造函数是私有的，外部无法创建对象
  Board.createBoard(); // 只会创建一次，无论被调用多少次都返回一样的结果。
```


