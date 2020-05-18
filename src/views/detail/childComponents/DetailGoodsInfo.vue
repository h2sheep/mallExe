<template>
  <div class="detail-goods-info" v-if="Object.keys(goodsInfo).length !== 0">

    <div class="desc">
      <div>￥------</div>
      <div class="words">{{goodsInfo.desc}}</div>
      <div class="right">------￥</div>
    </div>

    <div class="show">
      <h5>{{goodsInfo.detailImage[0].key}}</h5>
      <div class="showImgs">
        <div v-for="index in goodsInfo.detailImage[0].list.length - 1">
          <img :src="goodsInfo.detailImage[0].list[index]" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .detail-goods-info {

    .desc {
      overflow: hidden;
      margin: 20px 10px;

      .words {
        margin: 10px 0;
        font-size: 14px;
        font-weight: bold;
      }
    }

    .show {

      h5 {
        margin-left: 10px;
      }

      .showImgs {

        img {
          width: 100%;
        }
      }
    }
  }
</style>
