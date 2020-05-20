<template>
  <div class="profile-act">

    <div>
      <img src="~assets/img/profile/message.png" alt="">
      <span>我的消息</span>
    </div>

    <div>
      <img src="~assets/img/profile/pointer.png" alt="">
      <span>积分商城</span>
    </div>

    <div>
      <img src="~assets/img/profile/vip.png" alt="">
      <span>会员卡</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ProfileAct'
  }
</script>

<style scoped="scoped" lang="less">
  .profile-act {
    padding: 0 20px;
    font-size: 14px;
    margin-bottom: 10px;
    box-shadow: 0 10px 0 rgba(0, 0, 0, .1);

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
