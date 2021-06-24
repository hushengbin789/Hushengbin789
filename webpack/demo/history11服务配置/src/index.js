// require('../src/dataContent-common-v1.0.css.css')
require('./style.css');
require('./font_icon/iconfont.css');
require('./lessstyle.less');
require('./stylesass.scss');

function add(a, b) {
  return a + b;
}
const sum = add(5, 6);
// 下一行eslint所有规则失效
// eslint-disable-next-line
console.log(sum);
// eslint-disable-next-line
console.log('zhe是入口文件');
