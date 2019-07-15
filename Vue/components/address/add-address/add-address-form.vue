<template>
    <div class="address-form">
<!--    地址form-->
          <div class="form-content">
            <!-- 联系人-->
            <div class="formbloack username">
              <div class="label-wrap">联系人</div>
              <div class="input-group-wrap">
                <div class="input-wrap">
                  <input type="text" placeholder="姓名">
                </div>
                <div class="input-wrap spans">
                  <span class="form-span">先生</span>
                  <span class="form-span">女士</span>
                </div>
              </div>
            </div>
            <!-- 电话-->
            <div class="formbloack phone">
              <div class="label-wrap">电话</div>
              <div class="input-group-wrap">
                <div class="input-wrap">
                  <input type="text" placeholder="手机号码">
                </div>
              </div>
            </div>
            <!-- 地址，门牌号 -->
            <div class="formbloack address">
              <div class="label-wrap-tao">
                <p>地址</p>
                <p>门牌号</p>
              </div>
              <div class="input-group-wrap">
                <div class="input-wrap top">
                  <input type="text" placeholder="小区/写字楼/学校等">
                  <div><i class="fa fa-chevron-right"></i></div>
                </div>
                <div class="input-wrap bottom">
                  <input type="text" placeholder="10号楼5层501室222">
                  <div><i class="fa fa-pencil-square-o"></i></div>
                </div>
              </div>
            </div>
            <!-- 标签 -->
            <div class="formbloack tags">
              <div class="label-wrap">标签</div>
              <div class="input-wrap spans">
                <span class="form-span">家</span>
                <span class="form-span">学校</span>
                <span class="form-span">公司</span>
              </div>
            </div>
          </div>
    
<!--保存并使用-->
          <div class="form-button-wrap">
            <button class="form-button"> {{formButton}}</button>
          </div>
    </div>
</template>

<script>
    export default {
        name: "add-address-form",
        props:["formButton"]
    }
</script>

<style scoped>
  .address-form {
    width: 100%;
    background-color: #f5f5f5;
  }
  /*地址form*/
  .form-content {
    background: #fff;
    padding:0 1.2rem ;
  }
  .formbloack {
    display: flex;
    border-bottom: 1px solid #eee;
  }
  .formbloack  .label-wrap:first-child {
    /*border-top: 1px solid #eee;*/
  }
  .formbloack .label-wrap{
    flex-basis: 5rem;
    padding: 1rem 0;
    font-size: 1rem;
    line-height: 1.44rem;
    color: #333;
    font-weight: 700;
  }
  .formbloack .input-group-wrap {
    flex: 1;
  }
  .formbloack .input-wrap {
    -webkit-flex: 1 1 0;
    flex: 1 1 0;
    padding: 1rem 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }
  .username .input-wrap:nth-of-type(1),
  .address .input-wrap:nth-of-type(1){
    border-bottom: 1px solid #ddd;
  }
  .formbloack input{
    outline: none;
    font-size: 1rem;
    line-height: 1.44rem;
    color: #333;
    border: none;
    -webkit-flex: 1;
    flex: 1;
    padding-right: 1.2rem;
    padding-left: 0;
    -webkit-tap-highlight-color: transparent;
  }
  .formbloack .spans{
    padding: .6rem 0;
  }
  .formbloack .form-span{
    background: #fff;
    border: 1px solid #ddd;
    border-radius: .3rem;
    font-size: 1rem;
    color: #666;
    line-height: 2rem;
    width: 4.8rem;
    margin-right: 0.8rem;
    text-align: center;
  }
  /*地址 门牌号*/
  .label-wrap-tao{
    flex-basis: 5.2rem;
    padding:1rem 0;
    font-size: 1rem;
    line-height: 1.44rem;
    color: #333;
    font-weight: 700;
  }
  .label-wrap-tao p:first-child {
    margin-bottom: 2.4rem;
  }
  /*保存按钮*/
  .form-button-wrap {
    padding: 1.6rem 1.2rem;
    display: flex;
  }
  .form-button-wrap .form-button{
    background: #00d762;
    text-align: center;
    border-radius: .15rem;
    flex: 1;
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: #fff;
    padding: 1rem 0;
    border: none;
    font-weight: 700;
  }
  /*两个小图标*/
  .input-wrap>div>.fa {
    color: rgb(102, 102, 102);
  }

</style>
