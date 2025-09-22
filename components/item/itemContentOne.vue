<template>
		<view class="ctTwoContent">
			<view class="ctTwoTop">
				<image :src="itemData.img" mode="aspectFill"></image>
			</view>
			<view class="ctTwoBottom" @click="itemDetail(item.goods_id)">
				<view class="bottomCt">
					<view class="bottomCtleft">
						<view class="bTtitle">{{item.title}}</view>
						<view class="bTcontent">{{item.storage}}</view>
					</view>
					<view class="bottomCtright">
						<view class="bTbottom">
							<view class="bTbottomleft">{{formattedPrice(item.price1)}}</view>
							<view class="bTbottomright">韩元</view>
						</view>
					</view>
				</view>
			</view>
		</view>
</template>

<script>
	import { ref,watch } from "vue";
	import { formattedPrice } from '@/utill/common';
	export default{
		comments:{
			
		},
		props:{
			itemData:{
				type:Object,
				default:{items:[]}
			}
		},
		setup(props, context) {
			const item = props.itemData.items[0] ? props.itemData.items[0] : {id:0,title:"",storage:"",price1:""};
			return {
				item,
				formattedPrice
			}
		},
		methods:{
			itemDetail(id){
				if(id == 0){
					return;
				}
				uni.navigateTo({
				        url: `/pages/itemPage/newItemPage?id=${id}` // 이동할 페이지 경로
				});
			}
		}
	}
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
						padding-right: 20rpx;
						font-size: 30rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						letter-spacing: 1rpx; /* 글자 간격 넓게 */
					}
					.bTcontent{
						padding-top: 10rpx;
						font-size: 30rpx;
						color: rgb(160, 160, 160);
						letter-spacing: 3rpx; /* 글자 간격 넓게 */
						text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
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
							width: 65%;
							height: 56rpx;
							line-height: 56rpx;
							padding-left: 20rpx;
							font-size: 28rpx;
							text-align: center;
							letter-spacing: 1rpx; /* 글자 간격 넓게 */
							text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
						}
						.bTbottomright{
							width: 35%;
							height: 56rpx;
							line-height: 56rpx;
							padding-right: 10rpx;
							padding-left: 8rpx;
							font-size: 28rpx;						
							background-color: black;
							color: white;
							text-align: center;
						}
					}
				}

			}
		}
	}
</style>