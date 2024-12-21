<template>
	<cardPage>
		<view class="gr3content">
			<view class="gr3item" v-for="item in 8"></view>
		</view>
	</cardPage>
</template>
<script setup>
  import cardPage from '@/components/cardPage/cardPage.vue';
</script>
<style lang="scss" scoped>
	.gr3content{
		display: grid;
		width: 100%;
		grid-template-columns: repeat(2, 1fr);
		gap: 15rpx;
		.gr3item{
			width: 100%;
			height: 480rpx;
			background-color: greenyellow;
			border-radius: 15rpx;
		}
	}
</style>