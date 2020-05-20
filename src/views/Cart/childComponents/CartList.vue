<template>
  <div class="cart-list">
    <cart-list-item v-for="item in itemList" :item="item" />
  </div>
</template>

<script>
  import CartListItem from './CartListItem'

  export default {
    name: 'CartList',
    components: {
      CartListItem
    },
    computed: {
      itemList() {
        return this.$store.state.cartList
      }
    }
  }
</script>

<style>
</style>
