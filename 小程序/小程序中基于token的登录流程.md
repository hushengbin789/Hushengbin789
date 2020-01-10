##小程序中基于token的登录流程
即先发起wx.login请求，得到code后经第三方服务器想微信服务器发送请求获取openid，assessToken等敏感信息，这里我们需要以assessToken作为登录状态保持的依据。

基于token的登录状态情况分类
1.首次登录小程序，本地存储中还不存在token，即需要发起登录请求得到token，并存到本地存储
2.小程序本地存储中已存在token，但是已过期，即需要再次发起登录请求以获得token，并覆盖掉本地存储中原先的token
3.小程序本地存储中存在token且有效，即保持登录状态

代码实现
```
//引入插件，使微信api支持promise
import wxp from 'minapp-api-promise'

import Api from './index'

async function login() {
  let code;
  try {
    //微信登录获取token
    let res = await wxp.login()
    code = res.code;
  } catch (err) {
    console.log('login fail')
  }
  console.log('login code', code)
  // wx.setStorageSync('code', code);
  try{
    console.log('get token',code)
    //将code传给后端以获得token
    let res = await Api.loginGetToken(code);
    let token = res.result.accessToken;
    //将token存到本地存储中
    wx.setStorageSync('token',token);
    //将当前时间存到本地存储
    let createTime = new Date();
    wx.setStorageSync('createTime',createTime);
    //如有需要，将openid存到本地存储
    let openId = res.result.openId;
    wx.setStorageSync('openId',openId)
  }catch(err){
    console.log('getToken fail')
  }
}
//检查登录状态
async function checkLogin() {
  console.log('checkLogin')
  let time = new Date();
  let createTime = wx.getStorageSync('createTime');
  let token = wx.getStorageSync('token');
  if (!token) {
   //不存在token，调用登录
    console.log('no token')
    await login()
  } else if (time - createTime > 6 * 24 * 3600 * 1000) {
    //token过期（假设是6天），调用登录
    console.log('token expired')
    await login()
  }else {
   //token有效，不做操作
    console.log('already Login')
  }
}

export default {
  login,
  checkLogin
}
```