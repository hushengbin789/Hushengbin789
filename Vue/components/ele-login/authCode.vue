<template>
  <div class="auth" v-if="shuju.codebox">
    <div class="title">请填写图形验证码</div>
    <div class="entrycode">
      <input type="text" v-model="picauthcode" @input="isCode" />
      <s-identify class="canv" :identifyCode="identifyCode"></s-identify>
      <p @click="refreshCode">看不清？换一张</p>
    </div>
    <div class="anniu">
      <div class="quxiao" @click="quxiao">取消</div>
      <div class="queding" :disabled="shuju.disabled" :style="color" @click="codeIsTrue">确定</div>
    </div>
  </div>
</template>

<script>
import SIdentify from "@/components/ele-login/sidentify";
export default {
  name: "codetest",
  props: ["shuju"],
  components: {
    SIdentify
  },
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      picauthcode: "",
      disabled: true,
      color: "",
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    quxiao() {
      this.shuju.codebox = !this.shuju.codebox;
      this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    isCode() {
      if (this.picauthcode == this.identifyCode) {
        this.color = "color:#0089dc";
      }
    },
    codeIsTrue() {
      if (this.picauthcode == this.identifyCode) {
        this.shuju.codebox = !this.shuju.codebox;
        // this.picauthcode=""
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
        this.shuju.disabled = false;
        this.virtical();
        // 发送网络请求
        this.$axios
          .post("/posts/sms_send", {
            tpl_id: "166104",
            key: "22027c54b3df0e087fd1d450b81c24cd",
            phone: this.shuju.phonenum
          })
          .then(res => {
            console.log(res);
          });
          // this.$emit("chuanzhi",)
      }
    },
    virtical() {
      var time = 10;
      var timer = setInterval(() => {
        if (time == 0) {
          this.shuju.changecode = "获取验证码";
          this.shuju.disabled = false;
          this.shuju.color = "color:#0089dc";
          clearInterval(timer);
        } else {
          this.shuju.changecode = time + "秒后重试";
          this.shuju.disabled = true;
          this.shuju.color = "color:#ddd";
          time--;
        }
      }, 1000);
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      // this.disabled=true
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      // console.log(this.identifyCode);
    }
  }
};
</script>

<style scoped>
.auth {
  width: 100%;
  height: 12rem;
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(245, 245, 245, 0.9);
  z-index: 5;;
}
.auth .title {
  padding-top: 1.25rem;
}
.title {
  font-size: 1.5625rem;
  font-weight: bold;
  text-align: center;
}
.entrycode {
  width: 90%;
  margin: 0.625rem auto;
  height: 3.125rem;
  position: relative;
  display: flex;
}
.entrycode > input {
  height: 3rem;
  width: 94%;
  padding-left: 1.25rem;
  outline: none;
  border: none;
  font-size: 1.875rem;
  border-radius: 0.3125rem;
}
.entrycode>p{
  position: absolute;
  right: .375rem;
  bottom: -1.125rem;
  color: #999;
}
.canv {
  height: 3.125rem;
  position: absolute;
  top: 0;
  right: 0;
}
.anniu {
  width: 100%;
  height: 2.8125rem;
  line-height: 2.8125rem;
  display: flex;
  border-top: 1px solid #e5e5e5;
  color: #aeaeae;
}
.anniu > div {
  width: 49%;
  height: 100%;
  font-size: 20px;
  text-align: center;
}
.anniu .quxiao {
  border-right: 1px solid #e5e5e5;
}
</style>