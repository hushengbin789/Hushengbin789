# jest入门
**使用yarn以下命令安装Jest**
```
yarn add --dev jest
```
**or npm**
```
npm install --save-dev jest
```
让我们开始编写一个假设函数的测试，该函数将两个数字相加。首先，创建一个sum.js文件：
```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```
然后，创建一个名为的文件sum.test.js。这将包含我们的实际测试：
```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
将以下部分添加到您的package.json：
```
{
  "scripts": {
    "test": "jest"
  }
}
```
最后，运行yarn testor或npm run testJest将显示以下消息：
```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```
# 附加配置
### 生成基本配置文件
根据您的项目，Jest会问您几个问题，并将创建一个基本配置文件，并为每个选项提供简短说明：
```
jest --init
```
### 使用Babel
要使用Babel，请通过yarn以下命令安装所需的依赖项：
```
yarn add --dev babel-jest @babel/core @babel/preset-env
```
通过babel.config.js在项目的根目录中创建一个文件，将Babel配置为以当前版本的Node为目标：
```
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```
Babel的理想配置将取决于您的项目
### 使用TypeScript
Jest通过Babel支持TypeScript。首先，请确保您已按照上面有关使用Babel的说明进行操作。接下来安装@babel/preset-typescriptvia yarn：
```
yarn add --dev @babel/preset-typescript
```
然后添加@babel/preset-typescript到您的中的预设列表babel.config.js。
```
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
+    '@babel/preset-typescript',
  ],
};
```
但是，将TypeScript与Babel结合使用时有一些注意事项。由于Babel中对TypeScript的支持是编译，因此Jest在运行测试时不会进行类型检查。如果需要，可以使用ts-jest。






