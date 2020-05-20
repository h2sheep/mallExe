<template>
  <div class="profile">

    <nav-bar class="profile-nav"> <template #center>我的</template> </nav-bar>
    <profile-login class="profile-login"></profile-login>
    <profile-data :num="num"></profile-data>
    <profile-act></profile-act>
    <profile-app></profile-app>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import ProfileLogin from './childComponents/ProfileLogin'
  import ProfileData  from './childComponents/ProfileData'
  import ProfileAct from './childComponents/ProfileAct'
  import ProfileApp from './childComponents/ProfileApp'

  export default {
    name: 'Profile',
    components: {
      NavBar,
      ProfileLogin,
      ProfileData,
      ProfileAct,
      ProfileApp
    },
    data() {
      return {
        num: ['0.00', '0', '0']
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .profile {

    .profile-nav {
      color: #fff;
      background-color: pink;
    }

    .profile-login {
      color: #fff;
      background-color: pink;
    }
  }
</style>
