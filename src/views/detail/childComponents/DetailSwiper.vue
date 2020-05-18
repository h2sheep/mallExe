<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImgs">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

  export default {
    name: 'DetailSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImgs: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .detail-swiper {
    overflow: hidden;
    height: 300px;
  }
</style>
