<template>
  <div class="recommend">
    <div v-for="item in recommends" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommendView',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less">
  .recommend {
    display: flex;
    width: 100%;
    margin: 15px 0;
    padding-bottom: 15px;
    border-bottom: 10px solid #eee;
    text-align: center;
    font-size: 14px;

    .item {
      flex: 1;
      width: 25%;

      img {
        width: 90%;
      }

      div {
        margin:15px 0;
      }
    }


  }
</style>
