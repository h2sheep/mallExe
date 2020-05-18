<template>
  <div class="bottom-bar">

    <div class="select">
      <div>
        <img src="~assets/img/detail/service.png" alt="">
        <p>客服</p>
      </div>

      <div>
        <img src="~assets/img/detail/shop.png" alt="">
        <p>店铺</p>
      </div>

      <div>
        <img src="~assets/img/detail/collect.png" alt="">
        <p>收藏</p>
      </div>
    </div>

    <div class="purchase">
      <div class="shop-car" @click="cartClick">加入购物车</div>
      <div class="pay">购买</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      cartClick() {
        this.$emit('cartClick')
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .bottom-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    height: 49px;
    font-size: 14px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .1);

    .select {
      flex: 1;
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      background-color: #fff;

      div {
        margin-top: 3px;

        img {
          width: 22px;
        }
      }
    }

    .purchase {
      flex: 1;
      display: flex;

      div {
        flex: 1;
        line-height: 49px;
        text-align: center;
      }

      .shop-car {
        background-color: #e3e300;
      }

      .pay {
        color: #fff;
        background-color: #df5b6f;
      }
    }
  }
</style>
