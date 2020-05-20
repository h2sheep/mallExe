<template>
  <div class="login">

    <div class="left">
      <div class="avatar"><img src="~assets/img/profile/avatar.png" alt=""></div>

      <div class="reg">
        <div>登录/注册</div>
        <div class="phone">
          <img src="~assets/img/profile/phone.png" alt="">
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </div>

    <div class="right">&gt;</div>

  </div>
</template>

<script>
  export default {
    name: 'ProfileLogin'
  }
</script>

<style scoped="scoped" lang="less">
  .login {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    font-size: 14px;

    .left {
      display: flex;
      align-items: center;

      .avatar {
        width: 50px;
        height: 50px;
        background-color: #eee;
        border-radius: 50%;

        img {
          width: 50px;
        }
      }

      .reg {
        margin-left: 20px;

        .phone {
          margin-top: 5px;

          img {
            width: 14px;
            margin-right: 3px;
            vertical-align: middle;
          }
        }
      }
    }

    .right {
      font-size: 16px;
    }
  }
</style>
