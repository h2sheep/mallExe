<template>
  <tab-bar>
    <tab-bar-item path="/home">
    	<template #item-icon><img src="~assets/img/tabbar/home.png" alt=""></template>
    	<template #item-icon-active><img src="~assets/img/tabbar/home_active.png" alt=""></template>
    	<template #item-text><div class="tab-bar-item">首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/category">
    	<template #item-icon><img src="~assets/img/tabbar/category.png" alt=""></template>
    	<template #item-icon-active><img src="~assets/img/tabbar/category_active.png" alt=""></template>
    	<template #item-text><div class="tab-bar-item">分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
    	<template #item-icon><img src="~assets/img/tabbar/cart.png" alt=""></template>
    	<template #item-icon-active><img src="~assets/img/tabbar/cart_active.png" alt=""></template>
    	<template #item-text><div class="tab-bar-item">购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
    	<template #item-icon><img src="~assets/img/tabbar/profile.png" alt=""></template>
    	<template #item-icon-active><img src="~assets/img/tabbar/profile_active.png" alt=""></template>
    	<template #item-text><div class="tab-bar-item">我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
