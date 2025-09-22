<template>
	<cardPage :color="color">
		<view class="gr3content">
			<view class="gr3item" v-for="item in items" @click="itemDetail(item.goods_id)">
				<view class="gr3topImg">
					<image :src="item.img"></image>
				</view>
				<view class="gr3bottom">
					<view class="gr3bottomTitle">{{item.title}}</view>
					<view class="gr3bottomContent">{{item.storage}}</view>
					<view class="gr3bottomPrice">
							<view class="gr3pbtmleft">{{formattedPrice(item.price1)}}</view>
							<view class="gr3pbtmright">韩元</view>
					</view>
				</view>
			</view>
		</view>
	</cardPage>
</template>
<script>
  import cardPage from '@/components/cardPage/cardPage.vue';
  import {formattedPrice} from "@/utill/common.js";
  import { ref,watch } from 'vue';
  export default{
	  comments:{
		  cardPage
	  },
	  props:{
	  	  color:{
	  		  default:"#F6FCFF"
	  	  },
		  itemData:{
		  	type:Object,
		  	default:{items:[]}
		  }
	  },
	  setup(props, context) {
	  	const items = ref(props.itemData.items);
		watch(
		  () => props.itemData.items,
		  (newItems) => {
			items.value = newItems;
		  },
		  { deep: true, immediate: true }
		);
		return {
			formattedPrice,
			items
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
	.gr3content{
		display: grid;
		width: 100%;
		grid-template-columns: repeat(2, 1fr);
		gap: 20rpx;
		.gr3item{
			width: 100%;
			height: 550rpx;
			background-color: white;
			border-radius: 15rpx;
			.gr3topImg{
				width: 100%;
				height: 320rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 230rpx;
					height: 280rpx;
					text-align: center;
					border-radius: 10rpx;
					overflow: hidden;
				}
			}
			.gr3bottom{
				width: 100%;
				padding-left: 20rpx;
				height: 200rpx;
				.gr3bottomTitle{
					margin-top: 10rpx;
					margin-bottom: 5rpx;
					width: 100%;
					height: 66rpx;
					font-size: 28rpx;
					overflow: hidden;
					letter-spacing: 1rpx; /* 글자 간격 넓게 */
				}
				.gr3bottomContent{
					font-size: 29rpx;
					color: rgb(255, 128, 0);
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
						width: 62%;
						height: 56rpx;
						line-height: 56rpx;
						padding-left: 20rpx;
						font-size: 28rpx;
						text-align: center;
						letter-spacing: 1rpx; /* 글자 간격 넓게 */
						text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
					}
					.gr3pbtmright{
						width: 38%;
						height: 56rpx;
						line-height: 56rpx;
						padding-right: 10rpx;
						padding-left: 8rpx;
						font-size: 28rpx;
						text-align: center;						
						background-color: black;
						color: white;
					}
				}
			}
		}
	}
</style>