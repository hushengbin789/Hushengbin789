# 使用jest对vue项目进行单元测试
vue-cli3.0单元测试方面更加完备，就先升级到了cli3.0，因为项目是用typescript写的，需要ts-jest,得到jest的配置如下
```
{
  "jest": {
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json",
      "vue",
      "ts",
      "tsx"
    ],
    "transform": {
      "^.+\\.vue$": "vue-jest",
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^.+\\.tsx?$": "ts-jest"
    },
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    "snapshotSerializers": [
      "jest-serializer-vue"
    ],
    "testMatch": [
      "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
    ],
    "testURL": "http://localhost/"
  }
}
```
先从简单的开始，测试了一个正则字符串常量文件，完美，一点问题没有
然后开始测方案页面的Scheme.vue组件，这个地方主要就想测一个computed属性，将三种有代表性的情况写完测试案例，兴冲冲运行yarn test:unit Scheme.test.ts，结果还不错，三个it测试用例都通过了，但后面还有一片红是什么鬼
```
console.error node_modules/vue/dist/vue.runtime.common.js:589
    [Vue warn]: Invalid prop: type check failed for prop "headerPic". Expected String, got Object.
```
原来是这个地方调用了一个组件，这个组件需要一个headerPic属性，用作图片的src，看源码
```
<SideNav :header-pic="require('../../assets/scheme/schemeSideNavPic.jpg')">
```
感觉没毛病啊，去vue-devtool，"/img/schemeSideNavPic.f988623b.jpg"是字符串啊，一点毛病没有，应该不是require的问题啊，应该是require在jest里面的处理问题，再查看jest配置，已经对jpg等静态文件做处理了，看了一下jest-transform-stub模块的源码，很简单
```
module.exports = {
  process: function() {
    return ''
  }
}

```
既对这些静态文件返回空字符串，不做处理，这不就更不应该了呀,幸亏有vscode这款利器，可以方便调试源码，使用vscode调试没有报错，也没能让调试器进入vue文件，没办法，在ts文件里const pic = require('../../../assets/scheme/schemeSideNavPic.jpg')，再次调试，发现

**https://segmentfault.com/img/bVbgxxO?w=340&h=205**

正是jest-transform-stub的内容，确实是个对象，跟在命令行内运行结果一致，也就是说只需要一直处理方式让其返回为
```
module.exports = ""
```
查看jest官网，搜了一下css，运气不错😂, 处理静态文件,moduleNameMapper选项完全可以满足需求啊，
```
"moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
    }

```
fileMock.js内容
```
// __mocks__/fileMock.js

module.exports = 'test-file-stub';
```
就是说只要返回字符串就OK了，加上moduleNameMapper，测试完美的跑通了

接下来对Scheme.vue组件发起模拟点击测试
```
const createScheme = wrapper.findAll('.sn-item').at(1)
createScheme.trigger('click')
expect((wrapper.vm as any).isCreateDialogShow).toBeTruthy()
expect(wrapper.find('.create-list-dialog').isVisible()).toBeTruthy()
```
使用vue-test-utils的api获取createScheme元素，对其触发点击，测试isCreateDialogShow这个data值被设置成true, 使用的element-ui
```
<el-dialog
      :visible.sync="isCreateDialogShow"
      width="600px"
      class="create-list-dialog"
      title="创建方案">
      ...
</el-dialog>
```
此dialog可见，顺利通过

接下来再实验一下新功能，快照，使用toMatchSnapshot方法也顺利通过了

接下来来个大的，测试一下Login.vue,登陆页面，主要测其调接口，然后成功设置store值，但不能走真实的网络接口啊，这太慢不说，具体结果还不能预测，得使用mock数据
在项目中创建了axios.plugin.ts vue插件，这可怎么mock呀，再看官方文档，感觉Manual Mocks部分最合适，但是举例也不适合vue 插件mock啊，继续浏览网站，不知道是受哪的启发还是突然开窍了，应该是受fs模块启发，突然知道怎么mock插件了，mock一个模块只需要模仿其型即可，具体实现，就无所谓了，这个http请求插件的mock必须能返回我们期望的值啊，fs模块的__setMockFiles又给了我启示，可以直接给接口的返回result设值啊，然后就有来下面的__mocks__/axios.plugin.ts文件

```
const MockAxios = {} as any

let result = {} as any
MockAxios.install = (Vue: any, options: any) => {
  Vue.prototype.$axios = function () {
    /* eslint-disable prefer-promise-reject-errors */
    return new Promise((resolve, reject) => {
      if (result.ResultCode === '200') {
        return result.Info
      } else {
        reject({ code: result.ResultCode, msg: result.Message, info: result.Info })
      }
    })
  }
}

MockAxios.__setMockData = (data: any) => {
  result = data
}

export default MockAxios
```
然后一马平川了，localVue.use(Vuex), localVue.use(AxiosPlugin)
```
const mockData = {
  ResultCode: '200',
  Msg: true,
  Info: {
    OpenId: 99,
    UserId: 92003,
  },
}
AxiosPlugin.__setMockData(mockData)
(wrapper.vm as any).login({ code: '29992' }).then(() => {
  expect(wrapper.vm.$store.state.userInfo.OpenId).toBe(mockData.Info.OpenId)
  expect(wrapper.vm.$store.state.userInfo.UserId).toBe(mockData.Info.UserId)
})
```
完美通过，vue的单元测试框架算是基本搭好了

给领导看还得有个覆盖率报告
yarn test:unit --coverage
覆盖的文件比较少啊，不包含所有的源文件啊，需要加入collectCoverageFrom配置项，至此整个单元测试就比较完备了
下面是完整jest的配置
```
{
  "jest": {
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json",
      "vue",
      "ts",
      "tsx"
    ],
    "transform": {
      "^.+\\.vue$": "vue-jest",
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^.+\\.tsx?$": "ts-jest"
    },
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    "snapshotSerializers": [
      "jest-serializer-vue"
    ],
    "testMatch": [
      "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
    ],
    "testURL": "http://localhost/",
    "collectCoverageFrom": [
      "**/*.{vue,ts}",
      "!**/node_modules/**",
      "!**/*.d.ts"
    ]
  }
}
```










