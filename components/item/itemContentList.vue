<template>
	<cardPage :color="color">
		<view class="gr3content">
			<view class="gr3item" v-for="item in 4">
				<view class="gr3topImg">
					<image src="/static/subMenu/iphoneT.png"></image>
				</view>
				<view class="gr3bottom">
					<view class="gr3bottomTitle">iphone16promax</view>
					<view class="gr3bottomContent">256G内存</view>
					<view class="gr3bottomPrice">
							<view class="gr3pbtmleft">160万韩元</view>
							<view class="gr3pbtmright">立即购买</view>
					</view>
				</view>
			</view>
		</view>
	</cardPage>
</template>
<script setup>
  import cardPage from '@/components/cardPage/cardPage.vue';
  import {defineProps} from "vue"
  const props = defineProps({
	  color:{
		  default:"#F6FCFF"
	  },
  })
</script>
<style lang="scss" scoped>
	.gr3content{
		display: grid;
		width: 100%;
		grid-template-columns: repeat(2, 1fr);
		gap: 20rpx;
		.gr3item{
			width: 100%;
			height: 520rpx;
			background-color: white;
			border-radius: 15rpx;
			.gr3topImg{
				width: 100%;
				height: 320rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 200rpx;
					height: 250rpx;
					text-align: center;
				}
			}
			.gr3bottom{
				width: 100%;
				padding-left: 20rpx;
				height: 200rpx;
				.gr3bottomTitle{
					margin-top: 20rpx;
					margin-bottom: 5rpx;
					font-size: 30rpx;
				}
				.gr3bottomContent{
					font-size: 25rpx;
					color: #B7B7B7;
				}
				.gr3bottomPrice{
					display: flex;
					margin-left: 5rpx;
					width: 90%;
					margin-top: 15rpx;
					height: 58rpx;
					flex-direction: row;
					border: 4rpx solid black;
					border-radius: 60rpx;
					overflow: hidden;
					.gr3pbtmleft{
						width: 50%;
						height: 56rpx;
						line-height: 56rpx;
						padding-left: 20rpx;
						font-size: 25rpx;
					}
					.gr3pbtmright{
						width: 50%;
						height: 56rpx;
						line-height: 56rpx;
						padding-right: 10rpx;
						padding-left: 8rpx;
						font-size: 29rpx;						
						background-color: black;
						color: white;
					}
				}
			}
		}
	}
</style>