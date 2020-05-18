<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[0].name}}</span>
    </div>
    <div class="package">
      <div v-for="index in (goods.services.length - 1)">
        <img class="icon" :src="goods.services[index].icon" alt="">
        <span>{{goods.services[index].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created() {
    }
  }
</script>

<style scoped="scoped" lang="less">
  .base-info {
    margin: 15px 10px;
    padding-bottom: 20px;
    box-shadow: 0 3px 0 rgba(0, 0, 0, .05);

    .title {
      font-size: 15px;
      font-weight: bold;
      font-family: "microsoft";
    }

    .price {
      margin: 15px 0;

      .new-price {
        font-size: 28px;
        color: #eb506f;
      }

      .old-price {
        margin-left: 5px;
        font-size: 12px;
        font-weight: 100;
        color: #b5b5b5;
        text-decoration: line-through;
      }

      .discount {
        display: inline-block;
        position: relative;
        top: -10px;
        padding: 3px 5px;
        margin-left: 5px;
        font-size: 12px;
        color: #f0f0f0;
        background-color: #ff5558;
        border-radius: 10px;
      }
    }

    .columns {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e1e1e1;
      font-size: 14px;
      color: #8b8b8b;
    }

    .package {
      display: flex;

      justify-content: space-between;
      font-size: 12px;

      .icon {
        flex: 1;
        width: 12px;
        margin-right: 5px;
        vertical-align: middle;
      }

      span {
        line-height: 12px;
      }
    }
  }
</style>
