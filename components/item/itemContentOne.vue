<template>
		<view class="ctTwoContent">
			<view class="ctTwoTop">
				<image src="/images/testImg/ipad.jpg" mode="aspectFill"></image>
			</view>
			<view class="ctTwoBottom">
				<view class="bottomCt">
					<view class="bottomCtleft">
						<view class="bTtitle">苹果16promax</view>
						<view class="bTcontent">超强续航</view>
					</view>
					<view class="bottomCtright">
						<view class="bTbottom">
							<view class="bTbottomleft">160万韩元</view>
							<view class="bTbottomright">立即购买</view>
						</view>
					</view>
				</view>
			</view>
		</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.ctTwoContent{
		width: 100%;
		padding-left: 25rpx;
		padding-right: 25rpx;
		height: 500rpx;
		.ctTwoTop{
			width: 100%;
			height: 350rpx;
			image{
				width: 100%;
				height: 350rpx;
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
			}
		}
		.ctTwoBottom{
			width: 100%;
			background-color: rgb(250, 250, 250);
			border-bottom-left-radius: 20rpx;
			border-bottom-right-radius: 20rpx;
			.bottomCt{
				padding-left: 20rpx;
				width: 100%;
				height: 130rpx;
				display: flex;
				flex-direction: row;
				.bottomCtleft{
					width: 50%;
					margin-top: 20rpx;
					.bTtitle{
						margin-bottom: 5rpx;
						font-size: 30rpx;
					}
					.bTcontent{
						font-size: 25rpx;
						color: #B7B7B7;
					}
				}
				.bottomCtright{
					width: 50%;
					margin-top: 20rpx;
					.bTbottom{
						display: flex;
						margin-left: 5rpx;
						width: 90%;
						margin-top: 15rpx;
						height: 58rpx;
						flex-direction: row;
						border: 4rpx solid black;
						border-radius: 60rpx;
						overflow: hidden;
						.bTbottomleft{
							width: 50%;
							height: 56rpx;
							line-height: 56rpx;
							padding-left: 20rpx;
							font-size: 25rpx;
						}
						.bTbottomright{
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
	}
</style>