## Node.js
```
java C C++ Python js php Objective-C VB C#
编程语言：程序员把现实中的语言映射到计算机中

编译过程：
1.词法分析
关键字：var \ if \ else \ function
标识符：var a = 1; function run(){···};
分解符：{} () ;
运算符：+-*/^

2.语法分析

3.语义分析

node.js -- 背景
出现的背景 --> 浏览器大战
世界上第一个普遍使用可以展示图片的浏览器：MCSA Mosaic (马赛克)
也是万维网之父：蒂姆伯纳斯·李

node.js 是多线程的、

Node.js 优势
1.高性能
2.支持非阻塞IO
3.学习成本低
4.多线程、多线程池管理

全栈工程师需要会什么？
1.前端语言
2.后端语言
3.网络知识
4.持久化
5.全栈无止境

Linux分类
1.Ubuntu (乌班图) 界面华丽、用户端、服务端
2.CentOS 没有UI界面
3.Debian 内存非常小、非常稳定
4.RedHat

根目录路径-分析
/usr (UNIX Software Resource)
/var (variable)
/bin (软连接)
/boot (开机相关)
/dev (驱动文件)
/etc (存放着各种配置文件)
/home (用户目录)
/root
/lib
/media
/mnt
/opt (存放第三方软件的目录)
/sbin (只允许系统管理员执行的文件)
/srv
/tmp
/proc (不让空间，内存里的东西)
/sys
lost+found (丢失的文件碎片)



Linux命令
$ yum
$ ls        - 枚举文件列表(只显示名)
$ ll        - 枚举文件列表(详细的 是 ls -l 的缩写)
$ ls -al    - 可以看到隐藏文件
  pwd       - 显示当前目录的绝对路径
  vi a.txt  - 打开一个文件

制作软连接：
ln -s ~/node-v0.11.2-linux-x64/bin/node /usr/bin/node
ln -s ~/node-v0.11.2-linux-x64/bin/npm /usr/bin/npm

$ cd /etc   - 进入文件夹
$ cd ..     - 回到上一级
$ cd ~      - 回到当前用户的主文件夹
$ cd /      - 去根目录
  mkdir test        - 创建路径
  mkdir -p test1/test2      - 创建子目录，没有则创建
  rmdir test        - 删除路径(只能删除空目录)
  rm -rf test1/     - 删除路径，包含里面的所有文件
  cat a.txt |grep "xxx"     - 查找字符
  ll |grep "xxx"           - 查找文件
  chmod 777 b.sh            - 修改文件权限
  ./b.sh                    - 执行文件
  df -h                     - 查看磁盘空间
  top                       - 任务监控


  ip addr   - 检查网络
  yum install wget   - 从中央仓库安装
  wget https://cdn.npm.taobao.org/dist/node/v12.14.1/node-v12.14.1-linux-x64.tar.xz
  xz -d node-v12.14.1-linux-x64.tar.xz   - 解压缩包
  tar -xf node-v12.14.1-linux-x64.tar    - 安装
  cd /usr/bin/
  ln -s ~/node-v12.14.1-linux-x64/bin/node /usr/bin/node     - 搭建软连接
  ln -s ~/node-v12.14.1-linux-x64/bin/npm /usr/bin/npm
  
  systemctl disable firewalld       - 关闭防火墙
  curl -i www.baidu.com             - 返回网页源码跟头协议



五层网络协议
- 应用层(HTTP)
-- 表示层(数据加密)
-- 会话层
- 传输层(TCP/UDP)
- 网络层(IP)
- 数据链层
- 物理层



Nodejs模块化
第一部分：后端的规范与思想
第二部分：基础的API
第三部分：常用的框架
第四部分：(web项目)
- 接收web请求
- 处理业务逻辑
- 文件操作
- 数据库(Mysql、MongoDB)
- 反向代理服务器(ip哈希、轮询)
第五部分：
- 大项目


```
