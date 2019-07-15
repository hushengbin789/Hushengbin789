<template>
  <div>
    <div class="elm-order">
      <div class="order-container">
        <!-- container-top -->
        <div class="container-top">
          <h2>肯德基宅急送</h2>
          <p>(风八店)</p>
        </div>
        <!-- container-container -->
        <div class="container-container">
          <!-- 冰拿铁(大)T   可复用-->
          <div class="food-list">
            <div class="list">
              <img
                src="https://fuss10.elemecdn.com/1/95/a3b99ca9033ec64808b529cb1a5fejpeg.jpeg?imageMogr/format/webp/thumbnail/!72x72r/gravity/Center/crop/72x72/"
                alt
              />
              <p>冰拿铁(大)T</p>
            </div>
            <span>x1</span>
            <span>￥8</span>
          </div>
          <div class="food-list">
            <div class="list">
              <img
                src="https://fuss10.elemecdn.com/1/95/a3b99ca9033ec64808b529cb1a5fejpeg.jpeg?imageMogr/format/webp/thumbnail/!72x72r/gravity/Center/crop/72x72/"
                alt
              />
              <p>冰拿铁(大)T</p>
            </div>
            <span>x1</span>
            <span>￥8</span>
          </div>
          <!-- 配送费 -->
          <div class="shipping-fee">
            <div class="fee">
              <a>商家</a>
              <p>配送费</p>
            </div>
            <span>￥9</span>
          </div>
          <!-- 红包 -->
          <div class="red-packet">
            <p>红包</p>
            <div class="packet">
              <a>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>0个可用</span>
              </a>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </div>
          <!-- 优惠说明 -->
          <div class="privilege">
            <div>
              <span>优惠说明</span>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
            </div>
            <span>小计￥45.5</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.elm-order {
  width: 100%;
  height: 23.8rem;
  background: linear-gradient(to bottom, #f5f5f5);
  .order-container {
    align-self: center;
    width: 97%;
    height: 23rem;
    margin: 0 auto;
    background-color: white;
    .container-top {
      width: 92%;
      height: 2.7rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      border-bottom: 0.05rem solid #efefef;
      h2 {
        font-weight: bold;
        font-size: 1rem;
        margin-left: 1.5rem;
      }
      p {
        font-size: 0.79rem;
        margin-left: 0.5rem;
      }
    }
    .container-container {
      width: 95%;
      height: 20rem;
      margin: 0 auto;
      align-items: center;
      .food-list {
        width: 93%;
        height: 4rem;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.05rem solid #efefef;
        .list {
          width: 54%;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
        p {
          font-size: 0.98rem;
          color: #4d4c4c;
        }
        span {
          font-size: 0.96rem;
          color: #5e5e5e;
        }
      }
      .shipping-fee {
        width: 93%;
        height: 4rem;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.05rem solid #efefef;
        .fee {
          width: 43%;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          a {
            width: 30%;
            height: 1.2rem;
            font-size: 0.86rem;
            text-align: center;
            line-height: 1.2rem;
            color: white;
            background-color: #60adf6;
          }
          p {
            font-size: 0.97rem;
            color: #5e5e5e;
          }
        }
        span {
          font-size: 0.96rem;
          color: #5e5e5e;
        }
      }
      .red-packet {
        width: 93%;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        border-bottom: 0.05rem solid #efefef;
        p {
          margin-left: 1rem;
          font-size: 0.98rem;
          color: #323232;
        }
        .packet {
          width: 25%;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          a {
            width: 79%;
            display: block;
            height: 1.3rem;
            color: white;
            text-align: center;
            background-color: #ff4215;
            & > i {
              font-size: 0.8rem;
              color: white;
            }
            & > span {
              font-size: 0.74rem;
            }
          }
          & > i {
            font-size: 0.85rem;
            color: #d5d4d5;
          }
        }
      }
      .privilege {
        width: 93%;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        border-bottom: 0.05rem solid #efefef;
        & > span {
          font-size: 0.99rem;
          color: #4d4c4c;
        }
      }
    }
  }
}
.elm-order .order-container .container-container .privilege span,
i {
  font-size: 0.75rem;
  color: #d5d4d5;
}

</style>

   
