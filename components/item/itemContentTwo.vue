<template>
		<view class="ctTwoContent">
			<view class="ctTwoTop">
				<image :src="itemData.img" mode="aspectFill"></image>
			</view>
			<view class="ctTwoBottom">
				<view class="bottomCt" v-for="item in items" @click="itemDetail(item.goods_id)">
					<view class="bTtitle">{{item.title}}</view>
					<view class="bTcontent">{{item.storage}}</view>
					<view class="bTbottom">
						<view class="bTbottomleft"><text>{{formattedPrice(item.price1)}}</text></view>
						<view class="bTbottomright">韩元</view>
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
			const items = props.itemData.items;
			watch(
			  () => props.itemData.items,
			  (newItems) => {
				items.value = newItems;
			  },
			  { deep: true, immediate: true }
			);
			return {
				items,
				formattedPrice
			}
		},
		methods:{
			itemDetail(id){
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
		height: 550rpx;
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
			display: grid;
			grid-template-columns: repeat(2,1fr);
			border-bottom-left-radius: 20rpx;
			border-bottom-right-radius: 20rpx;
			.bottomCt{
				padding-left: 20rpx;
				width: 100%;
				height: 200rpx;
				.bTtitle{
					margin-top: 20rpx;
					margin-bottom: 5rpx;
					font-size: 28rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					letter-spacing: 1rpx; /* 글자 간격 넓게 */
				}
				.bTcontent{
					font-size: 27rpx;
					color: rgb(160, 160, 160);
					letter-spacing: 3rpx; /* 글자 간격 넓게 */
					text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
				}
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
						width: 60%;
						height: 56rpx;
						line-height: 56rpx;
						padding-left: 20rpx;
						font-size: 28rpx;
						text-align: center;
						letter-spacing: 1rpx; /* 글자 간격 넓게 */
						text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
					}
					.bTbottomright{
						width: 40%;
						height: 56rpx;
						line-height: 56rpx;
						padding-right: 10rpx;
						padding-left: 8rpx;
						font-size: 28rpx;						
						background-color: black;
						text-align: center;
						color: white;
					}
				}
			}
		}
	}
</style>