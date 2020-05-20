<template>
  <div class="cart">

    <nav-bar class="cart-nav">
      <template #center><div>购物车({{proCounter}})</div></template>
    </nav-bar>

    <cart-list></cart-list>

    <cart-total-price></cart-total-price>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComponents/CartList'
  import CartTotalPrice from './childComponents/CartTotalPrice'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartTotalPrice
    },
    computed: {
      proCounter() {
        return this.$store.state.cartList.length
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .cart {
    padding-top: 44px;
    padding-bottom: 49px + 44px;

    .cart-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      color: #f4f4f4;
      background-color: pink;
    }
  }

</style>
