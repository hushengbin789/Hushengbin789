```
<template>
    <div class="identityInfo">
        <van-nav-bar
        title="客户证件维护"
        left-arrow
        @click-left="onClickLeft(customerId)"
        />
        <section>
            <van-field v-model="realName" placeholder="请输入姓名" label="证件类型：" disabled/>
            <van-field v-model="cardNum" placeholder="请输入身份证号码" label="证件号码："/>
        </section>
        <!-- 上传身份证正面 背面   @click="onRead-->
        <div class="identityCard " >
            <van-uploader :after-read="onFilesFront" accept="image/jpeg,image/png" v-if="!url" >
                    <p style="margin:3.5rem 4rem;">请上传身份证正面</p>
            </van-uploader>
            <div class="pictuers" v-else>
                <img :src="this.url" >
            </div>
        </div>
        <div class="identityCardTwo " >
            <van-uploader :after-read="onFilesVerso" accept="image/jpeg,image/png" v-if="!urls">
                    <p style="margin:3.5rem 4rem;">请上传身份证背面</p>
            </van-uploader>
            <div class="pictuersTwo"  v-else>
                <img :src="this.urls" >
            </div>
        </div>
        <!-- 保存提交 -->
        <p><Btn @click.native="saveChange">保存提交</Btn></p>
    </div>
</template>
```
accept="image/jpeg,image/png"限制图片格式为静态照片
```
<script>
import { NavBar, Field, Uploader } from 'vant'
import Btn from '../../../common/btn'
let accessToken = localStorage.getItem('token')
export default {
  data () {
    return {
      realName: '身份证',
      cardNum: '',
      customerId: null,
      url: '',
      urls: '',
      deviceEnvir: this.Base.deviceEnvir()
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Uploader.name]: Uploader,
    [Field.name]: Field,
    Btn
  },
  created () {
    // 获取客户证件信息
    this.getCustomerInden()
    // console.log(this.deviceEnvir)//设备环境
  },
  methods: {
    onClickLeft (customerId) {
      this.$router.replace({name: 'customerinfo', params: {customerId}})
    },
    // 获取客户证件信息进回显
    getCustomerInden () {
      this.customerId = this.$route.params.customerId
      this.$server.customerInentityAddress({
        customerId: this.customerId,
        accessToken: localStorage.getItem('token')
      }).then(res => {
        if (res.code === 100) {
          this.cardNum = res.returnValue.number
        }
      })
    },

    saveChange () {
      this.$server.changeCustomerIndentityAddress({
        customerId: this.$route.params.customerId,
        number: this.cardNum,
        accessToken: localStorage.getItem('token')
      }).then(res => {
        if (res.code === 100) {
          this.$toast({
            message: '修改成功',
            onClose: () => {
              this.$router.replace({name: 'customerinfo', params: {customerId: this.customerId}})
            }
          })
        } else {
          this.$toast(res.message)
        }
      })
    },
    onFilesFront (file, detail) {
      // console.log(file)//正面
      let params = new FormData()
      params.append('accessToken', localStorage.getItem('token'))
      params.append('upload', file.file)
      params.append('bizId', this.customerId)
      params.append('moduleId', '5686')
      params.append('mode', '0')
      this.$server.uploadingsUrlAddress(params).then(res => {
        if (res.code === 100) {
          console.log(this.url)
          this.url = res.returnValue.outLink
        } else {

        }
      })
    },
    //params.append('bizId', this.customerId)  客户
    //  params.append('moduleId', '5686')  参数
     // params.append('mode', '0') 参数
    onFilesVerso (file, detail) {
      // 反面
      let params = new FormData()
      params.append('accessToken', localStorage.getItem('token'))
      params.append('upload', file.file)
      params.append('bizId', this.customerId)
      params.append('moduleId', '5687')
      params.append('mode', '0')
      this.$server.uploadingsUrlAddress(params).then(res => {
        if (res.code === 100) {
          this.urls = res.returnValue.outLink
        } else {

        }
      })
    }

  }
}
</script>

<style lang='less' scoped>
@import '../../../../less/element.less';
@red:#c83f3f;
.identityInfo{
    width: 100%;
    box-sizing: border-box;
    .van-nav-bar{
        margin: 0 0 2rem;
        .van-icon{
            color: #ccc;
        }
    }
    &>p{
        text-align: center;
        margin: 2rem 0 0;
        .btn{
            .btnmin(@color:#fff,@bgcolor:@red,@size:1rem,@radius:0.2rem,@padding:0.8rem 6rem);
        }
    }

    .identityCard{
        width: 16rem;
        height: 8rem;
        border-radius: 4px;
        margin: 2rem auto;
        background-color: #fafafa;
        border: 1px dashed #ccc;
        &>p{
            color:#666666;
            text-align: center;
            line-height: 8rem;
        }
        .pictuers{
            width: 16rem;
            height: 8rem;
            position: absolute;
            top: 29.5%;
            left: 15.5%;
            border-radius: 4px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 4px;
            }
        }
    }
    .identityCardTwo{
        width: 16rem;
        height: 8rem;
        border-radius: 4px;
        margin: 2rem auto;
        background-color: #fafafa;
        border: 1px dashed #ccc;
        &>p{
            color:#666666;
            text-align: center;
            line-height: 8rem;
        }
        .pictuersTwo{
                width: 16rem;
                height: 8rem;
                position: absolute;
                top: 54%;
                left: 15.5%;
                border-radius: 4px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                }
            }
    }
}
</style>

```