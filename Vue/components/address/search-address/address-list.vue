<template>
    <div class="address">
      <div class="address-card">
        <div class="address-card-select">
          <i class="fa fa-check-circle"></i>
        </div>
        <div class="address-card-body">
          <p class="address-card-title">
            <span class="username">周总理</span>
            <span class="gender">先生</span>
            <span class="tel">15014808170</span>
          </p>
          <p class="address-card-address">
            <span class="address-tag">学校</span>
            <span class="address-text">西安时高新区科技四路立人科技园北门几号楼</span>
          </p>
        </div>
        <div class="address-card-edit">
          <div><i class="fa fa-pencil-square-o"></i></div>
          <div><i class="fa fa-times"></i></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "address-list"
    }
</script>

<style scoped>
  .address{
    padding: 1.2rem 0.6rem 1.2rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }
  .address-card {
    display: -webkit-flex;
    display: flex;
    line-height: 1;
    height: 100%;
    width: 100%;
  }
  .address-card-select {
    flex-basis: 2.1rem;
    min-width: 2.2rem;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    /*space-between:center;*/
  }
  .address-card-select > i {
    color:#00d762;
    font-size: 1.3rem;
  }
  .address-card-body {
    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
    line-height: 1;
    height: 100%;
    width: 100%;
  }
  .address-card-title{
    font-size: 1rem;
    margin: 0;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: .3rem;
  }
  .address-card-title .username {
    color: #333;
    font-weight: 700;
  }
  .address-card-title .gender {
    padding: 0 .4rem 0 .2rem;
  }
  .address-card-address{
    color: #666;
    font-size: 1rem;
    margin: 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }
  .address-tag{
    display: inline-block;
    position: relative;
    -webkit-flex: none;
    flex: none;
    margin-right: .24rem;
    padding: .16rem;
    color:#00d762 ;
    white-space: nowrap;
    border-radius: .3rem;
    font-size: .7rem!important;
    line-height: .76667rem;
    border:1px solid #00d762;
  }
  .address-text{
    color: #666;
    font-size: 0.9rem;
    margin: 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }
  .address-card-edit {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .address-card-edit>div {
    width:1.3rem;
    margin-left: 0.3rem;
  }
  .address-card-edit>div >i {
    color:#666;
    font-size: 1.2rem;
    font-weight: 300;
  }
  

</style>
