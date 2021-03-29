### 1.shell基础
+ shell是一个命令行解释器，它为用户提供了一个向Linux内核发送请求以便运行程序的界面系统级程序
+ 用户可以用Shell来启动、挂起、停止或者编写一些程序
+ Shell还是一个功能相当强大的编程语言，易编写，易调试，灵活性较强。
+ Shell是解释执行的脚本语言，在Shell中可以直接调用Linux系统命令

#### 1.1 echo #
+ 输出命令
+ -e：激活转义字符

```sh
echo hello
echo -e "a\tb"
```
#### 1.2 编写执行shell #
hello.sh

```
#!/bin/bash
echo hello
```

```
//通过Bash调用执行脚本
sh hello.sh
//赋予执行权限，直接运行
chmod 755 hello.sh
chmod u+x hello.sh
./hello.sh
```
#### 1.3 别名
+ 命令别名就是小名
+ 临时生效 alias cp="cp -i"
+ 写入环境变量配置文件 vi ~/.bashrc
+ source ~/.bashrc
+ 删除别名 unalias 别名
#### 1.4 命令的生效顺序
+ 绝对路径或者相对路径
+ 别名
+ bash内部命令
+ 按照$PATH环境变量定义的目录查找顺序找到的第一个命令
#### 1.5 命令快捷键 

命令 | 含义
---|---
ctrl+c | 强制终止当前命令
ctrl+l | 清屏
ctrl+a | 光标移动到命令行首
ctrl+e | 光标移动到命令行尾
ctrl+u | 从光标所在的位置删除到行首
#### 1.6 历史命令
+ history [选项] [历史命令保存文件]
+ 选项
  + -c 清空历史命令
  + -w 把缓存中的历史命令写入历史命令保存文件 ~/.bash_history
+ 默认保存1000条 /etc/profile HISSIZE=10000
#### 1.7 调用
+ 使用上下箭头调用以前的历史命令
+ 使用 !n 重复执行第n条历史命令
+ 使用 !! 重复执行上一条命令
+ 使用 !字符 重复执行最后一条以该字符串开头的命令


```
history -c
1  echo 1
2  echo 2
3  echo 3
!2
!!
!echo

```
#### 1.8 输出重定向
##### 1.8.1 标准输入输出

![image0002](http://m.qpic.cn/psc?/V52J64qB1LA3XS0OcHIY3uJDgi3mLpVe/ruAMsa53pVQWN7FLK88i5lRvTWmiwvp0qX8wPiEUKj.EN3SXtfP8e.Mq1JzJ8FCYsDdl*49T98uL3POr0y*YW3Zp1yKGbVucaDfJYmrDeMk!/mnull&bo=FgTyAQAAAAADB8M!&rf=photolist&t=5)

#### 1.8.2 输入重定向
+ wc命令的功能为统计指定文件中的行数、字数、字节数, 并将统计结果显示输出
命令 < 文件把文件做为命令的输入

```
wc < a.txt
```
#### 1.9 管道符号
###### 1.9.1 多命令顺序执行 

![image03](http://m.qpic.cn/psc?/V52J64qB1LA3XS0OcHIY3uJDgi3mLpVe/45NBuzDIW489QBoVep5mcQ8EmKQ*IQnk*W6PknhAxswRT.dfknjRvT.VmNOHdXbpPtuKc0g2W0tehF3QHExPfK1TXBOWC42WNNXjL4r6Lc8!/b&bo=XQSdAAAAAAADF*Y!&rf=viewer_4)
```
echo 1;echo 2;
echo 1&&echo 2;
echo 1||echo 2;
```
#### 1.9.2 管道符号
+ 命令1的正确输出会作为命令2的操作对象
+ 命令1|命令2

```
ls /etc/ | more
netstat -an | grep ESTABLISHED | wc -l
```

#### 1.9.3 通配符
+ 匹配文件名和目录名

![image05](http://m.qpic.cn/psc?/V52J64qB1LA3XS0OcHIY3uJDgi3mLpVe/ruAMsa53pVQWN7FLK88i5q802F.YMTaW5RKsn6IWkpL7lbZbpFuWzJ4UeTqnpjEo2OJLRnCKzxnLNTbIV2*fzHzYjZ8JAdXlK9rp9Kieirg!/mnull&bo=rwMsAgAAAAADB6A!&rf=photolist&t=5)


```
echo '$PATH'
echo "$PATH"
echo `ls`
echo $(ls)
echo -e "a\tb"
```






