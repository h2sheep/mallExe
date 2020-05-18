<template>
  <div class="detail" ref="detail">
    <detail-nav-bar ref="nav" class="detail-nav-bar"></detail-nav-bar>
    <detail-swiper :topImgs="topImg"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <shop-info :shop="shop"></shop-info>
    <detail-goods-info :goods-info="detailInfo"></detail-goods-info>
    <detail-param-info ref="param" :paramInfo='paramInfo'></detail-param-info>
    <detail-comment-info ref="comment" :comment="commentInfo"></detail-comment-info>

    <goods-list ref="recommends" :goods="recommends"></goods-list>
    <detail-bottom-bar @cartClick="cartClick"></detail-bottom-bar>

  </div>
</template>

<script>
  import DetailNavBar from './childComponents/DetailNavBar'
  import DetailSwiper from './childComponents/DetailSwiper'
  import DetailBaseInfo from './childComponents/DetailBaseInfo'
  import ShopInfo from './childComponents/ShopInfo'
  import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
  import DetailParamInfo from './childComponents/DetailParamInfo'
  import DetailCommentInfo from './childComponents/DetailCommentInfo'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import DetailBottomBar from './childComponents/DetailBottomBar'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail'


  export default {
    name: 'Detail',
    data() {
      return {
        iid: null,
        topImg: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: []
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      ShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    methods: {
      cartClick() {
        const product = {}
        product.image = this.topImg[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

      }
    },
    created() {
      this.iid = this.$route.query.id

      getDetail(this.iid).then(res => {

        this.topImg = res.result.itemInfo.topImages
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        this.shop = new Shop(res.result.shopInfo)
        this.detailInfo = res.result.detailInfo
        this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)
        if (res.result.rate.cRate !== 0) {
          this.commentInfo = res.result.rate.list[0]
        }
      })

      getRecommend().then(res => {
        this.recommends = res.data.list
      })


    },
  }
</script>

<style scoped="scoped" lang="less">
  .detail {
    position: relative;
    z-index: 9;
    overflow: auto;
    height: 100vh;
    padding-top: 44px;
    padding-bottom: 49px;
    background-color: #fff;

    .detail-nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9;
      background-color: #fff;
    }
  }
</style>
