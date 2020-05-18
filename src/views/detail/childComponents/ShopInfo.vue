<template>
  <div class="shop-info">

    <div class="logo">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>

    <div class="dsc">
      <div class="num">
        <div class="sells">{{shop.sells}}
          <div class="name">总销量</div>
        </div>
        <div class="count">{{shop.goodsCount}}
        <div class="name">全部宝贝</div>
        </div>
      </div>
      <div class="score">
        <div v-for="item in shop.score" class="score-item">
          <div><span>{{item.name}}</span></div>
          <div :class="{active: item.isBetter}" class="green">
            <span>{{item.score}}</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="welcome">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .shop-info {

    .logo {
      margin: 20px 0;

      img {
        width: 50px;
        margin-left: 10px;
        vertical-align: middle;
        border-radius: 50%;
      }

      span {
        margin-left: 10px;
        font-size: 14px;
        font-weight: bold;
      }
    }

    .dsc {
      display: flex;
      height: 100px;
      font-size: 14px;
      font-weight: bold;

      .num {
        flex: 1;
        display: flex;
        justify-content: space-around;

        .sells, .count {
          margin: auto;
          text-align: center;

          .name {
            margin-top: 10px;
          }
        }

        .count {
          padding-right: 20px;
          border-right: 1px solid #cbcbcb;
        }
      }

      .score {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 0 20px;

        .score-item {
          display: flex;
          justify-content: space-between;
          flex-grow: 1;
        }

        div {
          flex: 1;
        }

        .green {
          color: green;
        }

        .active {
          color: red;
        }
      }
    }

    .welcome {
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .1);

      div {
        width: 100px;
        margin: 20px auto;
        padding: 3px 0;
        font-size: 14px;
        text-align: center;
        background-color: rgba(0, 0, 0, .1);
        border-radius: 10px;
      }
    }
  }
</style>
