调用ios的方法

上传身份证

```
// 调用相册
    getPictures (moduleId) {
      let u = navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // 判断是否是 android终端
      let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // 判断是否是 ios终端
      if (isAndroid === true) {
        // 安卓
        return 'Android'
      } else if (isIOS === true) {
        // 调用IOS约定好的调用相册方法
        const paramsObj = { //传的参数
          cmd: '005',  
          accessToken: this.accessToken,
          moduleId,
          bizId: this.customerId
        }
        window.webkit.messageHandlers.invokeiOS.postMessage(paramsObj)
        return 'IOS'
      } else {
        return 'PC'
      }
    },
```
```
// 暴露给IOS调用的方法
    invokeJS (params) {
      let paramsObj = JSON.parse(params)
      let { cmd, returnValue } = paramsObj
      if (cmd === '005') {
        // 正面
        if (returnValue.returnValue.moduleId === '5686') {
          this.$toast(returnValue.returnValue.outLink)
          this.foreSrc = returnValue.returnValue.outLink
        } else {
          this.backSrc = returnValue.returnValue.outLink
        }
      }
    }
```

```
// 判断是安卓还是IOS环境
    androidIOS () {
      let u = navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // 判断是否是 android终端
      let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // 判断是否是 ios终端
      if (isAndroid === true) {
        // 安卓
        this.isAndroid = true
      } else if (isIOS === true) {
        this.isAndroid = false
        // IOS
      } else {
      }
    },
```
```
<!-- IOS -->
        <section class="uploader-img" v-if="!isAndroid">
          <p class="self_upstyle" @click="getPictures('5686')">
            <img :src="'http://dhcircle.keplerlab.cn'+foreSrc" alt v-if="foreSrc" />
            <label v-else>
              <span class="iconfont icon-plus-add"></span>
              <i>请上传身份证正面</i>
            </label>
          </p>
          <p class="self_upstyle" @click="getPictures('5687')">
            <img :src="'http://dhcircle.keplerlab.cn'+backSrc" alt v-if="backSrc" />
            <label v-else>
              <span class="iconfont icon-plus-add"></span>
              <i>请上传身份证反面</i>
            </label>
          </p>
        </section>
        <!-- 上传身份证正面 背面 Android -->
        <section class="uploader-img" v-if="isAndroid">
          <div class="identityCard " >
              <van-uploader :after-read="onFilesFront" :max-count="1" accept="image/jpeg,image/png" v-if="!url" >
                <p style="margin:3.5rem 4rem;">请上传身份证正面</p>
              </van-uploader>
              <div class="pictuers" v-else><img :src="'http://dhcircle.keplerlab.cn'+this.url" ></div>
          </div>
          <div class="identityCardTwo " >
              <van-uploader :after-read="onFilesVerso" :max-count="1" accept="image/jpeg,image/png" v-if="!urls">
                <p style="margin:3.5rem 4rem;">请上传身份证背面</p>
              </van-uploader>
              <div class="pictuersTwo"  v-else><img :src="'http://dhcircle.keplerlab.cn'+this.urls" ></div>
          </div>
        </section>
```

