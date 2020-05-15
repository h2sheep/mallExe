<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="">
    <div class="info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="fav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      itemClick() {
        this.$router.push({
          path: '/detail',
          query: {
            id: this.goodsItem.iid
          }
        })

      }
    }
  }
</script>

<style lang="less">
  .goods-item {
    width: 45%;
    font-size: 12px;
    text-align: center;

    img {
      width: 100%;
      border-radius: 3px;
    }

    .info {
      margin: 5px 0;

      .title {
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .price {
        color: deeppink;
        margin-right: 5px;
      }

      .fav::before {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url(~assets/img/common/favor.png) 0 1px;
        background-size: cover;
      }
    }
  }
</style>
