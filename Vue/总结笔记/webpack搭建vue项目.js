/**
 *
 * 前言:必须已经安装了node   cnpm    git
 *
 * 第一步：全局安装vue-cli
 * 命令： cnpm install vue-cli  -g
 * 是否已经全局安装可在这个目录中查看（C:\Users\Administrator\AppData\Roaming\npm\node_modules）
 *
 *
 *
 * 第二步：创建项目文件夹
 * 在命令框中输入 vue init webpack + 项目名称
 * 1.提示 Project name (项目名称）    {按回车键}
 *
 * 2.提示：project description? （项目描述）    {敲回车}
 *
 * 3.提示：Author(你的邮箱)？         表示作者是你，{敲回车}
 *
 * 4.提示：Runtime + Compiler: recommended for most users （运行+编译， 多数用户选择这个）
 *        Runtime-only: about 6KB lighter min+gzip, but templates
 *              (or any Vue-specific HTML) are ONLY allowed in .vue files - render
 *              functions are required elsewhere（仅运行，看不太懂，反正不选这个）
 *
 * 我们选择第一行 {回车}
 *
 * 5.提示：Install vue-router? (Y/n)  是否安装vue路由    {输入Y 回车}
 *
 * 6.提示： Use ESLint to lint your code? (Y/n)
 *      是否使用ESLint管理代码，ESlint是用来统一代码风格的，
 *      我们选择N吧，我选了Y试了一下这个代码风格不对的话老是报错。。。。
 *      {输入 N   回车}
 *      ESLint规则说明： https://blog.csdn.net/mao834099514/article/details/78784086
 *
 * //上面输入了Y才会有第7步，如果你输入了N，请直接到8步
 *
 * 7.提示： Pick an ESLint preset  选择vue项目时的代码风格（以下三选一）
 *            Standard (https://github.com/standard/standard)   js的标准风格
 *            Airbnb (https://github.com/airbnb/javascript)      js最合理的方法
 *            none (configure it yourself)                       自己定义风格
 *
 *            这里咱们就选择第一个吧   js的标准风格    {输入 Y   回车}
 *
 *
 * 8.提示：Set up unit tests (Y/n)   是否需要单元测试
 *     {输入n，回车}  这里咱们不需要测试
 *
 * 9.提示： Setup e2e tests with Nightwatch? (Y/n)   是否需要e2e测试
 *          同理   {输入 n  回车}
 *
 *     关于unit测试和e2e测试，我也不了解 传送门：https://www.jianshu.com/p/ffd6d319f05b
 * 10.提示：
 *   Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
 *   项目创建完成后是否需要为您运行‘npm install’
 *              Yes, use NPM      是的用npm
 *              Yes, use Yarn      是的用Yarn
 *              No, I will handle that myself   不，我自己手动操作
 * 咱们别选npm了吧  太慢了（今天亲测，需要10min+）
 * 选择第三个 我自己来操作 {回车}
 * 然后：
 * 先输入 cd  “项目名称"   进入到项目目录下
 * 然后输入  cnpm  install
 *
 *
 *
 *
 *  回车之后就开始创建我们的项目啦   啦啦啦
 *  坐等20s+以后。。。。
 *
 *  第三步  启动项目
 *  输入：  npm run  dev  这时我们启动了自己的vue项目
 *         (或者输入npm  start  同样能启动项目）
 *         （npm run  build 则是启动打包）
 *  正确的姿势是：出现了8080端口
 *
 *
 *  如果你运行了打包，会发现项目里面多了一个dist文件夹
 *  对的  打包过后的项目就放在dist里面
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
 * *
