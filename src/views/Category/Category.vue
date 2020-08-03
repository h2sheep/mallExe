<template>
  <div class="category">

    <nav-bar class="category-nav"><template #center>商品分类</template></nav-bar>
    <category-list :list="list"></category-list>
    <category-goods></category-goods>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CategoryList from './childComponents/CategoryList'
  import CategoryGoods from './childComponents/CategoryGoods'

  import {getCategory} from 'network/category.js'

  export default {
    name: 'Category',
    components: {
      NavBar,
      CategoryList,
      CategoryGoods
    },
    data() {
      return {
        list: [],
        recommends: []
      }
    },
    created() {
      getCategory().then(res => {

        this.list = res.data.category.list
      })
    }
  }

</script>

<style scoped="scoped" lang="less">
  .category {
    display: flex;
    padding: 44px 0 49px;

    .category-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      color: #fff;
      background-color: pink;
    }

    .category-goods {
      width: 75%;
    }
  }
</style>
