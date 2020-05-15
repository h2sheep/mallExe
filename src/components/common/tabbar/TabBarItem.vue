<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path: String,
			 activeColor: {
				 type: String,
				 default: 'deeppink'
			 }
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle() {
				return this.isActive ? {color: this.activeColor} : {}
			}
		},
		methods: {
			itemClick() {
				this.$router.push(this.path)
			}
		}
	}
</script>

<style lang="less">
	.tab-bar-item {
		flex: 1;
		text-align: center;
		
		img {
			width: 24px;
			margin-top: 3px;
		}
	}
</style>
