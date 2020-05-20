<template>
  <div :class="{checked: isChecked}" class="checkBtn">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'CheckBtn',
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .checkBtn {
    border: 1px solid black;
    border-radius: 50%;
    
    img {
      width: 16px;
    }
  }

  .checked {
    border: none;
    background-color: red;
  }
</style>
