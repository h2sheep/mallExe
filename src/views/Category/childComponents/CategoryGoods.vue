<template>
  <div class="cate-goods">
    <div>暂无数据</div>
  </div>
</template>

<script>
  export default {
    name: 'CategoryGoods'
  }
</script>

<style scoped="scoped" lang="less">
  .cate-goods {
    margin-left: 10px;

    > div {
      position: fixed;
      top: 200px;
      left: 130px;
      // margin: 100px 20px;
      color: #e5e5e5;
      font-size: 50px;
      font-weight: 100;
    }
  }
</style>
