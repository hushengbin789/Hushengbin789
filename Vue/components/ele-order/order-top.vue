<template>
  <div id="order-order">
    <!-- 头部 -->
    <div class="order-header">
      <div class="order-header-left">
        <i class="fa fa-chevron-left" aria-hidden="true" @click="$router.go(-1)"></i>
      </div>
      <div class="order-header-order">
        <h1>确认订单</h1>
      </div>
    </div>
    <!-- 配送 -->
    <div class="order-distribution">
      <!-- 配送信息 -->
      <div class="order-message">
        <div class="order-distribution-one">
          <p>订单配送至</p>
          <span>公司</span>
        </div>
        <div class="order-distribution-two">
          <h1 @click="$router.push('/searchAddress')">立人科技园C座&nbsp&nbsp></h1>
        </div>
        <div class="order-distribution-three">
          <span>刘（先生）</span>
          <span>18797609385</span>
        </div>
      </div>
      <!-- 配送时间及方式 -->
      <div class="order-time">
        <!-- 送达时间 -->
        <div class="order-time-one">
          <div class="order-time-one-delivery">
            <p>送达时间</p>
          </div>
          <div class="order-time-one-quickly">
            <p>尽快送达({{time}})</p>
          </div>
        </div>
        <!-- 支付方式 -->
        <div class="order-time-two">
          <div class="order-time-one-delivery">
            <p>支付方式</p>
          </div>
          <div class="order-time-one-quickly">
            <p>在线支付</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      flag: false
    };
  },
  mounted() {
    let time = setInterval(() => {
      if (this.flag == true) {
        clearInterval(time);
      }
      this.timeDown();
    }, 500);
  },
  props: {
    endTime: {
      type: String
    }
  },
  methods: {
    timeDown() {
      const endTime = new Date(this.endTime);
      const nowTime = new Date();
      let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
      let d = parseInt(leftTime / (24 * 60 * 60));
      let h = this.formate(parseInt((leftTime / (60 * 60)) % 24));
      let m = this.formate(parseInt((leftTime / 60) % 60));
      let s = this.formate(parseInt(leftTime % 60));
      if (leftTime <= 0) {
        this.flag = true;
        this.$emit("time-end");
      }
      this.time = `${h}:${m}:${s}送达`;
    },
    formate(time) {
      if (time >= 10) {
        return time;
      } else {
        return `0${time}`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#order-order {
  overflow: hidden;
}
.order-header {
  height: 2.8rem;
  width: 100%;
  background-image: linear-gradient(to right, #0faefe, #1290fe);
  position: absolute;
  top: 0;
  display: flex;
  line-height: 2.8rem;
  border-bottom: 1px solid #1691ff;
  .order-header-left {
    width: 20%;
    height: 100%;
    margin: 0 5%;
    i {
      font-size: 1.2rem;
      line-height: 3rem;
      color: #ffffff;
    }
  }
  .order-header-order {
    width: 90%;
    height: 100%;
  }
}
.order-header-order {
  h1 {
    margin-left: 20%;
    color: #ffffff;
    font-weight: 600;
    font-size: 1.1rem;
  }
}
.order-distribution {
  height: 16rem;
  width: 100%;
  background-image: linear-gradient(to right, #00a9ff, #0087ff);
  .order-message {
    height: 9rem;
    width: 100%;
    // background-color: #ccc;
    .order-distribution-one {
      height: 5rem;
      width: 100%;
      line-height: 8rem;
      margin-left: 3%;
      color: #ffffff;
    }
    .order-distribution-two {
      height: 2rem;
      line-height: 2rem;
      font-size: 1.2rem;
      font-weight: 600;
      margin-left: 3%;
      color: #ffffff;
    }
    .order-distribution-three {
      height: 2rem;
      line-height: 2rem;
      margin-left: 3%;
      color: #ffffff;
    }
  }
  .order-time {
    height: 6rem;
    width: 96%;
    margin: 0 auto;
    background-color: #fff;
    .order-time-one {
      height: 3rem;
      width: 90%;
      margin: 0 auto;
      // background-color: red;
      display: flex;
      justify-content: space-between;
      line-height: 3rem;
      border-bottom: 0.1px solid #d4d4d8;
      p:nth-child(1) {
        // color: red !important;
      }
    }
    .order-time-two {
      height: 3rem;
      width: 90%;
      margin: 0 auto;
      line-height: 3rem;
      // background-color: blue;
      display: flex;
      justify-content: space-between;
    }
  }
}
.order-time-one-quickly {
  p {
    color: #2395ff;
    // font-size: .8rem;
  }
}
</style>

