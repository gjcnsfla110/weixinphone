<template>
	<CardPage>
		<scroll-view class="scrollX" scroll-x enableFlex>
			<view v-for="item in items" class="scrollXlist" @click="itemDetail(item.goods_id)">				
					<view class="gr2title">{{item.title}}</view>
					<view class="gr2price"><text class="gr2priceNumber">{{changePrice(item.price1)}}</text> <text class="gr2priceH">韩元</text></view>
					<image class="gr2img" :src="item.img"></image>
					<view class="gr2top" :style="{backgroundColor:item.label_color}"><text>{{item.label}}</text></view>
			</view>
		</scroll-view>
	</CardPage>
</template>

<script>
import CardPage from "@/components/cardPage/cardPage.vue"
import itemTitle from "./itemTitle.vue";
import {ref,watch} from 'vue'
import {formattedPrice} from "@/utill/common.js";
export default{
	components:{
		CardPage,
		itemTitle
	},
	props:{
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
			items
		};
	},
	methods:{
		changePrice(price){
			return formattedPrice(price);
		},
		itemDetail(id){
			uni.navigateTo({
			        url: `/pages/itemPage/newItemPage?id=${id}` // 이동할 페이지 경로
			});
		}
	}
}
</script>

<style lang="scss" scoped>
	.scrollX{
		height:380rpx;
		width: 700rpx;
		white-space: nowrap;
		.scrollXlist{
			display: inline-block;
			width: 200rpx;
			height: 390rpx;
			margin-right: 15rpx;
			background-color: white;
			border-radius: 15rpx;
			position: relative;
			.gr2title{
				width: 95%;
				margin-top: 45rpx;
				padding-left:10rpx;
				height: 35rpx;
				color: rgb(50, 50, 50);
				letter-spacing: 1rpx; /* 글자 간격 넓게 */
				text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
				overflow: hidden;  /* 넘친 부분 숨김 */
				text-overflow: ellipsis;  /* ... 표시 */
				font-size: 24rpx;

			}
			.gr2price{
					margin-top: 5rpx;
					padding-left: 10rpx;
					height: 38rpx;
					font-size: 18rpx;
					color: rgb(80, 80, 80);
					text-align: right;
					.gr2priceNumber{
						color: black;
						font-size: 23rpx;
						color: red;
						letter-spacing: 1rpx; /* 글자 간격 넓게 */
						text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
					}
					.gr2priceH{
						font-size:15rpx;
						color: rgb(255, 128, 0);
						margin-right: 20rpx;
					}
					
			}
			.gr2img{
				width: 180rpx;
				height: 260rpx;
				margin-left: 10rpx;
				border-radius: 10rpx;
				overflow: hidden;
			}
			.gr2top{
				width: auto;
				padding: 2rpx 10rpx 2rpx 10rpx;
				height: 30rpx;
				position: absolute;
				font-size: 18rpx;
				color: white;
				text-align: center;
				line-height: 30rpx;
				border-radius: 6rpx;
				top: 5rpx;
				right: 15rpx;
				font-weight: bold;
				letter-spacing: 3rpx; /* 글자 간격 넓게 */
				text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
			}
			
		}
		.scrollXlist:last-child{margin-right: 30rpx;}
	}
</style>
