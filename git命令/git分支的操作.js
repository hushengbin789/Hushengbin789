/**
 *
 * 鼠标右键 选 Git Bash Here
    进入到git页面 开始第一次配置全局
    git config --global user.name "abin"

    git config --global user.email "1259446122@qq.com"
    （如果忘了是否配置过，用git config --global user.name   就可以看到自己以前配置的name
    git config --global user.email 就可以看到自己以前配置的 email）

    注意：--global 是在全局下的一个git仓库设置的用户名和用户邮件 以后可以通过快照概念 看项目是谁写的 他的邮箱是什么，
    如果项目想改成别的别字 那就不加 –global 直接用 git config user.name "yuanjingli" 但设置的环境必须是一个git仓库
 *
 *
 *   在没有使用分支之前，git会默认有一个分支，
 *   就是主分支（master分支，还记得 git push –u origin master这个命令吗？）
 *   这里的master就是主分支
 *
 * git分支的操作
 *     （远端项目保存在我的git  hub上面的一个仓库中)
 *  1.下载远端项目至本地
 *    (1) 自己定义项目的路径  右键打开Git  Bash  Here
 *    (2)  输入命令  $ git clone https://github.com/xxxx（仓库地址）
 *    注：只有在项目开始的时候使用git clone 下载项目
 *          以后每天早上是在项目目录下通过git  pull 来拉取最新的项目代码
 *
 *
 *  2.git分支创建及使用
 *     整个项目框架下载完成后，项目成员可以通过git分支来实现部分代码更新与合并
 *   使用流程：
 *    (早上刚来，你要做的事情abcd）
 *   （1） 分支的基本应用
 *          先进入项目文件夹，在项目文件夹内右键点击Git Bash Here
 *          a. 查看远程仓库  $ git remote  -v     这样可以看到自己连接的仓库是否正确
 *			b. 拉取远程最新的代码  $ git pull (此时路径应该在master下）
 *          c. 创建分支，分支名称自己定义(这里的fan是我自己定义的)  $ git branch fan
 *          d. 切换分支至自己创建的分支   $ git checkout fan
 *           切换后 命令行分支路径会由以前的master主干变为分支（fan），就表示切换成功
 *
 *				备注：
 *				以上c,d两步可简写为1行代码（创建并切换）
 *				$ git checkout -b fan
 *

 *         这时候就在项目文件夹开发自己的代码，一顿增删改查骚操作，完成开发之后
 *          一天过去了，到了晚上该提交你的项目了：
 *        （晚上回去之前，你需要做的事情efghijk）
 *           
 *
 *
 *          
 *          ※e.  在项目文件夹下进入命令行，目录必须是自己的分支(fan),而不是master
 *              输入 $ git add  .
 *                   $  git commit -m'第一次修改@fanfan'
 *          ※f.  这时候切换到主分支 (切换分支之前一定要保证分支fan下已经
 *				完全commit， 否则无法切换，即使用git status查看一下，没有红的绿的就表示提交完成）
 *                  $ git checkout master （切换至master分支）
 *
 *          ※g.再次拉取远程最新代码(此时路径应在master下)
 *               $  git   pull
 *              这里解释一下为什么要切换到主分支并且重新拉取代码
 *              因为咱们一共6个人，在你编写你的代码期间，别人可能已经上传、更新版了，这时候项目的
 *              源代码或许已经改变，因此需要重新拉取
 *               重新拉取的代码会重新下载到你的项目目录中，之前fan分支改变的内容会保存在你电脑的缓存区
 *           h. 在你的主分支(master)下进行分支合并
 *               $ git merge fan
 *           i: 那么刚才只是在本地合并分支，我们需要将本地合并后的主干master上传到远端的master
 *              $ git push https://github.com/xxx（仓库名）  master:master
 *           j: 这时候在远端查看一下，你的代码是否修改完成
 *           k: 确认修改完成了  这时候删除你自己的分支  fan
 *               $  git branch -d fan
 *               强制删除命令（$ git  branch -D fan）
 *
 *
 *           总结以下，我们项目中的每个人每天需要做的事情是什么呢？
 *           项目开发过程中，每天每个成员都需要进行一次流程a-k
 *              大致归为：远端获取最新代码-----新建分支-----切换到分支---（开始编写当天的代码）-----上传分支（add、commit）
 *                -------切换到主干------远端数据重新拉取（git pull）------新数据与分支合并(git merge)------上传至远端(git push)
 *              -------删除分支
 *
 *          注意事项——————————————————————————
 *     请勿在，master路径下执行如下操作，容易引起合并冲突
 *     $ git add .
 *     $ git commit -m "修改一次"
 *   
 *      
 *    我的用户名:fanchengyu
 *    我的密码：553789598fcy
 *
 *
 *
 *
 *
 *
 *
 *                   
 *              
 *      
 *        
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */