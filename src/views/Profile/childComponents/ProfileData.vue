<template>
  <div class="data">

    <div>
      <div><span class="num">{{num[0]}}</span>元</div>
      <div>我的余额</div>
    </div>

    <div>
      <div ><span class="num">{{num[1]}}</span>个</div>
      <div>我的优惠</div>
    </div>

    <div>
      <div><span class="num">{{num[2]}}</span>分</div>
      <div>我的积分</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ProfileData',
    props: {
      num: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .data {
    display: flex;
    padding: 20px 0;
    margin-bottom: 10px;
    box-shadow: 0 10px 0 rgba(0, 0, 0, .1);

    > div {
      flex: 1;
      font-size: 14px;
      text-align: center;

      .num {
        color: red;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
</style>
