### linux介绍
+ Linux是一套免费使用和自由传播的类Unix操作系统
+ 在服务器端领域和嵌入式领域有非常广泛的应用
### 2.版本
分为内核版本和发型版本

+ kernel
+ 各个厂商会制作自己的发行版本
    + redhat
    + CentOS
    + ubuntu
    + fedora
### 3. Linux与Windows的不同
+ Linux严格区分大小写
+ Linux中所有的内容以文件形式保存，包括硬件、用户和文件。
+ Linux不靠扩展名区分文件类型，是靠权限来区分，但是有一些约定的扩展名，是给管理员看的
    + 压缩包 .gz .bz2 .tar.bz2 .tgz
    + 二进制文件 .rpm
    + 网页文件 .html .php
    + 脚本文件 .sh
    + 配置文件 .conf
+ Windows下的程序不能直接在Linux中安装和运行
+ Linux更多使用字符界面
    + 占用的系统资源更少
    + 减少了出错和被攻击的可能性，会让系统更稳定

### 购买服务器直接上阿里云
### 4. 连接服务器
+ git bash
+ mac shell
+ xshell4
+ xftp4

### 5.linux常用命令 #
#### 5.1 常见目录

![image](http://m.qpic.cn/psc?/V52J64qB1LA3XS0OcHIY3uJDgi3mLpVe/ruAMsa53pVQWN7FLK88i5nwGhiBZdFD7zv5bpS91QgMUZXP.AfTShbPGYWovyAk6MyhtyESBi4S2zLxuMmNj5RVVdwOh0uo68QnwTZJECjM!/mnull&bo=PQOxAgAAAAADB68!&rf=photolist&t=5)

#### 5.2 命令基本格式
##### 5.2.1 命令提示符
```sh
[root@abin ~]#
```
+ root 当前登录用户
+ localhost 主机名
+ ~ 当前工作目录,默认是当前用户的家目录，root就是/root,普通用户是 + /home/用户名
+ 提示符 超级用户是 #,普通用户是$

##### 5.2.2 命令格式
+ 命令 [选项] [参数]
+ 当有多个选项时，可以写在一起
+ 一般参数有简化和完整写法两种 -a 与 --all等效
##### 5.2.3 ls
+ 查询目录中的内容
+ ls [选项] [文件或者目录]
+ 选项
    + -a 显示所有文件，包括隐藏文件
    + -l 显示详细信息
    + -d 查看目录本身的属性而非子文件 ls /etc/
    + -h 人性化的方式显示文件大小
+ 默认当前目录下的文件列表


```
ls -l
```
##### 5.2.3.1 -l
显示详细信息
```sh
drwxr-xr-x  root  root   800 Sep 16 00:19 logs
```

drwxr-xr-x | root | root | 800 | Sep 16 00:19 | logs
---|---|---|---|---|---|---
文件类型和权限 | 所有者 | 所属组 | 文件大小 | 最后修改时间 | 文件名
#### 5.3 文件处理命令
##### 5.3.1 mkdir
+ 建立目录 make directory
+ mkdir -p [目录名]
    + -p 递归创建

```sh
mkdir -p hello
```
##### 5.3.2 cd
+ 切换所在目录 change directory
+ cd [目录]
    + ~ 家目录
    + . 当前目录
    + .. 上级目录
+ 相对路径是参照当前所在目录
+ 绝对路径是从根目录开始
+ 按TAB键可以补全命令和目录
```sh
cd hello
```
#### 5.3.3 pwd
+ 显示当前目录 pwd

```sh
pwd
```
#### 5.3.4 rmdir
+ 删除目录 remove empty directory
+ rmdir [目录名]

```sh
rmdir hello
```
#### 5.3.5 rm
+ 删除文件或者目录 remove
+ rm [文件或者目录]
    + -r 删除目录
    + -f 强制删除
+ rm -rf 文件或者目录] 递归强制删除所有目录

```sh
rm -rf hello
```
##### 5.3.6 cp
+ copy 复制命令
+ copy [源文件或者目录] [目标文件]
    + -r 复制目录,默认是复制文件
    + -i 会在复制文件的时候给提示,如果复制的目标文件存在,会给你提示是否要覆盖


```sh
mkdir afolder
mkdir bfolder
cd afolder/
touch 1.txt
cp 1.txt ~/bfolder/

```
#### 5.3.7 mv
+ 移动文件或者改名 move
+ mv [源文件或者目录] [目标文件]

```sh
mv 1.txt 11.txt
```
#### 5.3.8 ln
+ 链接命令,生成链接文件 link
+ ln -s [源文件] [目标文件]
+ -s 创建软链接
+ 类似Windows快捷方式
+ 修改任意一个文件，另一个都会改变
+ 删除源文件，软链接不能使用
+ 软链接源文件必须写绝对路径

```sh
# ln -s /root/bfolder/11.txt 22.txt
```
#### 5.4 文件搜索命令
##### 5.4.1 locate
+ 在后台数据库中按文件名搜索，速度比较快
+ 数据保存在`/var/lib/mlocate/mlocate.db`后台数据库，每天更新一次
+ 可以updatedb命令立刻更新数据库
+ 只能搜索文件名
```sh
yum  -y install mlocate
```
#### 5.4.2 whereis
+ 搜索命令所在路径以及帮助文档所在位置
+ whereis 命令名 whereis ls
    + -b 只查找可执行文件
    + -m 只查找帮助文件
+ 可以查看Shell自带的命令，如 whereis cd
#### 5.4.3 which
+ 可以看到别名 which ls
+ 能看到的都是外部安装的命令
+ 无法查看Shell自带的命令，如 which cd
#### 5.4.4 环境变量
`/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin`

+ 定义的是系统搜索命令的路径
+ `echo $PATH`
#### 5.4.5 find
+ 文件搜索命令
+ find [搜索范围] [搜索条件]
##### 5.4.5.1 按名称搜索
+ 避免大范围的搜索，会非常消耗系统资源

```sh
find / -name 11.txt
```
##### 5.4.5.2 通配符
+ find是在系统当中搜索符合条件的文件名，如果需要匹配，使用通配符匹配，通配符是完全匹配
+ 通配符
    + * 匹配任意内容
    + ? 匹配任意一个字符
    + [] 匹配任意一个中括号内的字符

```sh
# touch abc.txt
# find . -name "ab[cdef].txt"
```
##### 5.4.5.3 -i
不区分大小写

```sh
find . -iname "Ab[cdef].txt"
```
##### 5.4.5.4 -user #
+ 按所有者进行搜索

```sh
find /root -user root
find /root -nouser
```
##### 5.4.5.5 按时间搜索

```sh
find . -mtime +5
```

参数 | 含义
---|---
atime | 文件访问时间
ctime | 改变文件属性
mtime | 修改文件内容


参数 | 含义
---|---
-5 | 	5天内修改的文件
5 | 5天前当前修改的文件
+5 | 5天前修改的文件









