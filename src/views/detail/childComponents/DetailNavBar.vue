<template>
  <nav-bar>
    <template #left><div class="back" @click="back">&lt;</div></template>

    <template #center >
      <div class="list">
        <div
          v-for="(item, index) in titles"
          class="item"
          :class="{active: index === curIndex}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </template>

  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评价', '推荐'],
        curIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.curIndex = index
        this.$emit('navClick', index)
      },
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .list {
    display: flex;

    .item {
      flex: 1;
      font-size: 14px;
    }

    .active {
      color: pink;
    }
  }
  .back {
    font-size: 20px;
    font-weight: 100;
  }
</style>
