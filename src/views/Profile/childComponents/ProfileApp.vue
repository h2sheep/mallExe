<template>
  <div class="profile-app">

    <div>
      <img src="~assets/img/profile/cart.png" alt="">
      <span>我的购物车</span>
    </div>

    <div>
      <img src="~assets/img/profile/app.png" alt="">
      <span>下载购物APP</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ProfileApp'
  }
</script>

<style scoped="scoped" lang="less">
  .profile-app {
    padding: 0 20px;
    font-size: 14px;

    > div {
      display: flex;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid #eee;

      img {
        width: 24px;
        margin-right: 5px;
        vertical-align: middle;
      }
    }
  }
</style>
