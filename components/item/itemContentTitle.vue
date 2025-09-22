<template>
	<view class="itemTcontent">
		<Card color="rgb(247, 247, 247)" marginTop="0">
			<view class="itemTtop">
				<view class="Ttopleft">
					<view class="titleTop">{{itemData.content_title}}</view>
					<view class="titlebottom">{{itemData.content_title1}} </view>
				</view>
				<view class="Ttopright">
					<image :src="itemData.top_img"></image>
				</view>
			</view>
			<view class="itemTmid">
				<image :src="itemData.img" mode="aspectFill"></image>
			</view>
			<view class="itemTbottom">
				<view class="TbottomItem" v-for="item in items" @click="itemDetail(item.goods_id)">
					<view class="tbleft">
						<view class="tbTitle">{{item.title}}</view>
						<view class="tbContent">{{item.storage}}</view>
						<view class="tbPrice"><text class="tbpriceLeft">{{formattedPrice(item.price1)}}</text>  韩元</view>
					</view>
					<view class="tbright">
						<image :src="item.img"></image>
					</view>
				</view>
			</view>
		</Card>
	</view>
</template>
<script>
 import { ref,watch } from "vue";
 import { formattedPrice } from '@/utill/common';
 import Card from "@/components/cardPage/cardPage.vue"
 export default{
	 components:{
		 Card
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
	.itemTcontent{
		width: 100v;
		position: relative;
		.itemTtop{
			width: 100%;
			height: 160rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.Ttopleft{
				width: 60%;
				height: 100%;
				padding-left: 15rpx;
				.titleTop{
					width: 100%;
					margin-top: 30rpx;
					margin-bottom: 5rpx;
					font-size: 42rpx;
				}
				.titlebottom{
					width: 100%;
					font-size: 25rpx;
				}
			}
			.Ttopright{
				width: 35%;			
				image{ 
					position: absolute;
					border-radius: 10rpx;
					overflow: hidden;
					top: -10rpx;
					right: 80rpx;
					width: 140rpx;
					height: 160rpx;
				}
			}
		}
		.itemTmid{
			width: 100%;
			pading:0 10rpx;
			image{
				width: 100%;
				height: 380rpx;
				border-radius: 18rpx;
			}
		}
		.itemTbottom{
			width: 100%;
			margin-top:15rpx;
			display: grid;
			grid-template-columns: repeat(2,1fr);
			gap: 15rpx;
			.TbottomItem{
				width: 100%;
				height: 360rpx;
				background-color: white;
				border-radius: 10rpx;
				position: relative;
				.tbleft{
					width: 100%;
					padding-left: 18rpx;
					.tbTitle{
						height: 65rpx;
						margin-top: 25rpx;
						font-size: 30rpx;
						letter-spacing: 2rpx; /* 글자 간격 넓게 */
						text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
					}
					.tbContent{
						height: 50rpx;
						font-size: 30rpx;
						font-weight: bold;
						color: rgb(180, 180, 180);
						position: absolute;
						bottom: 90rpx;
						left: 20rpx;
						letter-spacing: 2rpx; /* 글자 간격 넓게 */
						text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
					}
					.tbPrice{
						position: absolute;
						font-size: 22rpx;
						color: rgb(255, 178, 102);
						bottom: 20rpx;
						left: 20rpx;
						.tbpriceLeft{
							font-size: 33rpx;
							color: rgb(50, 50, 50);
							letter-spacing: 5rpx; /* 글자 간격 넓게 */
							text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
						}
					}
				}
				.tbright{
					image{
						position: absolute;
						bottom: 70rpx;
						right: 20rpx;
						width: 140rpx;
						height: 170rpx;
						border-radius: 10rpx;
						overflow: hidden;
					}
				}
			}
		}
	}
</style>
