<template>
	<navigator url="/pages/list/list">
		<view class="itemListContainer">
			<view class="item" v-for="i in 7">
				<view class="itemImg">
					<image src="/static/subMenu/iphoneT.png" mode="scaleToFill"></image>
				</view>
				<view class="itemBttom">
					苹果15pro Max	
				</view>
			</view>
		</view>
	</navigator>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
	.itemListContainer{
		width: 100%;
		display: grid;
		padding: 0 15rpx;
		margin-top: 15rpx;
		grid-template-columns: repeat(2,1fr);
		gap:10rpx;
		.item{
			padding: 0 15rpx;
			.itemImg{
				width: 100%;
				text-align: center;
				padding: 10rpx 10rpx;
				image{
					width: 90rpx;
					height: 100rpx;
				}		
			}
		}
		.itemBttom{
			width: 100%;
			height: 50rpx;			
			font-size: 25rpx;
			text-align: center;
			line-height: 50rpx;
		}
	}
</style>