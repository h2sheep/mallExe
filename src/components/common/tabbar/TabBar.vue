<template>
	<div  id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBar',
		
	}
</script>

<style lang="less">
	#tab-bar {
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 49px;
		background-color: #eee;
		box-shadow: 0 -1px 1px rgba(0, 0, 0, .1);
	}
	
</style>
