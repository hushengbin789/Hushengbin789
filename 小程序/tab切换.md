##1.index.wxml

```
<!--index.wxml-->  
<view class="swiper-tab">  
    <view class="swiper-tab-list {{currentTab==0 ? 'on' : ''}}" data-current="0" bindtap="swichNav">哈哈</view>  
    <view class="swiper-tab-list {{currentTab==1 ? 'on' : ''}}" data-current="1" bindtap="swichNav">呵呵</view>  
    <view class="swiper-tab-list {{currentTab==2 ? 'on' : ''}}" data-current="2" bindtap="swichNav">嘿嘿</view>  
</view>  
  
<swiper current="{{currentTab}}" class="swiper-box" duration="300" style="height:{{winHeight - 31}}px" bindchange="bindChange">  
    <!-- 我是哈哈 -->  
    <swiper-item>  
      <view>我是哈哈</view>  
    </swiper-item>  
    <!-- 我是呵呵 -->  
    <swiper-item>  
      <view>我是呵呵</view>  
    </swiper-item>  
    <!-- 我是嘿嘿 -->  
    <swiper-item>  
      <view>我是嘿嘿</view>  
    </swiper-item>  
</swiper>  
```
2.index.wxss

```
/**index.wxss**/  
.swiper-tab{  
    width: 100%;  
    border-bottom: 2rpx solid #777777;  
    text-align: center;  
    line-height: 80rpx;}  
.swiper-tab-list{  font-size: 30rpx;  
    display: inline-block;  
    width: 33.33%;  
    color: #777777;  
}  
.on{ color: #da7c0c;  
    border-bottom: 5rpx solid #da7c0c;}  
  
.swiper-box{ display: block; height: 100%; width: 100%; overflow: hidden; }  
.swiper-box view{  
    text-align: center;  
}  
```
```
3.index.js

[javascript] view plain copy
//index.js  
//获取应用实例  
var app = getApp()  
Page( {  
  data: {  
    /** 
        * 页面配置 
        */  
    winWidth: 0,  
    winHeight: 0,  
    // tab切换  
    currentTab: 0,  
  },  
  onLoad: function() {  
    var that = this;  
  
    /** 
     * 获取系统信息 
     */  
    wx.getSystemInfo( {  
  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
  
    });  
  },  
  /** 
     * 滑动切换tab 
     */  
  bindChange: function( e ) {  
  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  
  },  
  /** 
   * 点击tab切换 
   */  
  swichNav: function( e ) {  
  
    var that = this;  
  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  }  
})  
```
