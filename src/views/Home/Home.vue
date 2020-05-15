<template>
  <div class="home" ref="home">
    <nav-bar class="home-nav-bar"><template #center><h3>购物街</h3></template></nav-bar>

    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control class="home-tab-control" :titles="titles" @tabClick="tabClick"></tab-control>
    <goods-list
      class="home-goods-list"
      :goods="showGoods"
    ></goods-list>

  </div>
</template>

<script>
import HomeSwiper from './childComponents/HomeSwiper'
import HomeRecommendView from './childComponents/HomeRecommendView'
import FeatureView from './childComponents/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'

import {getHomeMultidata, getHomeGoods} from 'network/home.js'
import {throttle} from 'common/utils.js'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      curType: 'pop',
      windowHeight: 0,
      sh: 0,
      scrollTop: 1
    }
  },
  created() {
    //请求数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    this.windowHeight = document.documentElement.clientHeight
    this.$refs.home.onscroll = throttle(this.homeScroll)
  },
  computed: {
    showGoods() {
      return this.goods[this.curType].list
    }
  },
  activated() {
    this.$refs.home.scrollTop = this.scrollTop
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop = this.$refs.home.scrollTop
    next()
  },
  methods: {
    /* 事件监听*/
    tabClick(index) {
      switch (index) {
        case 0:
          this.curType = 'pop'
          break
        case 1:
          this.curType = 'new'
          break
        case 2:
          this.curType = 'sell'
          break
      }
    },
    homeScroll() {
      let st = this.$refs.home.scrollTop
      let sh = this.$refs.home.scrollHeight
      if (sh - st <= this.windowHeight) {
        this.getHomeGoods(this.curType)
      }
    },

    /* 网络请求*/
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = page
      })
    }
  }
}
</script>

<style lang="less" scoped="scoped">
  .home {
    overflow: auto;
    height: 100vh;
    padding-top: 44px;
    padding-bottom: 49px;
    // height: calc(100vh - 44px - 49px - 44px);

    .home-nav-bar {
      position: fixed;
      left: 0;
      right:0;
      top: 0;
      // margin-top: 44px;
      z-index: 9;
      background-color: pink;
    }

    .home-tab-control {
      position: sticky;
      top: 0;
      z-index: 9;
    }

    .home-goods-list {

    }
  }

</style>
