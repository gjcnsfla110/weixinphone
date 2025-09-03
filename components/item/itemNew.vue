<template>
	<view class="griditem1">
		<view class="content">
			<view class="listItem1">
				<swiper class="listItem1Swiper" autoplay indicator-dots circular="true">
					<swiper-item v-for="item in list1" class="listItem1SwiperItem" @click="itemDetail(item.id)">
						<view class="item1Text">
							<view class="item1Name">{{item.title}}</view>
							<view class="item1Storage">{{item.storage}}</view>
							<view class="item1Price">{{changePrice(item.price1)}} <span style="font-size: 20rpx;color: red;">韩元</span></view>
						</view>
						<view class="item1Phone">
							 <image class="phone1Img" :src="item.img"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="listItem2" v-for="item in list2" @click="itemDetail(item.id)">
				<view class="item2Title">{{item.title}}</view>
				<view class="item2">
					<view class="item2Text">
						<view class="item2storage">{{item.storage}}</view>
						<view class="item2color">검정색</view>
						<view class="item2Price">{{changePrice(item.price1)}}<span style="color: red;font-size: 15rpx;margin-left: 3rpx;">韩元</span></view>
					</view>
					<view class="item2Phone">
						<image class="phone2Img" :src="item.img"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {ref} from 'vue'
	import { formattedPrice } from '../../utill/common';
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
			const list1 = ref([]);
			const list2 = ref([]);
			list1.value = items.filter(item=>item.listType == 0);
			list2.value = items.filter(item=>item.listType == 1);
			return {
				list1,
				list2
			}
		},
		methods:{
			changePrice(price){
				return formattedPrice(price);
			},
			itemDetail(id){
				uni.navigateTo({
				        url: `/pages/itemPage/oldItemPage?id=${id}` // 이동할 페이지 경로
				});
			}
		}
	}
	
</script>

<style lang="scss">
	
	.griditem1{
		padding: 0 25rpx;
		width: 100vw;
		.content{	
			display: grid;
			grid-template-columns: repeat(2,1fr);
			gap: 10rpx;
			width: 100%;
			background-color: #F6FCFF;
			padding: 20rpx 10rpx;
			border-radius: 20rpx;
			.listItem1{
				width: 100%;
				grid-row: 1/3;
				.listItem1Swiper{
					width: 100%;
					height: 100%;
					background-color: white;
					border-radius: 20rpx;
					.listItem1SwiperItem{
						width: 100%;
						padding-left:30rpx;
						.item1Text{
							height: 30%;
							width: 100%;
							display: flex;
							padding-left: 15rpx;
							flex-direction: column;
							justify-content: center;
							.item1Name{
							  font-size: 26rpx;
							  margin-bottom: 10rpx;
							  display: -webkit-box;
							  -webkit-line-clamp: 2; /* 2줄로 제한 */
							  -webkit-box-orient: vertical;
							  overflow: hidden;
							  text-overflow: ellipsis;
							  max-width: 100%;
							}
							.item1Storage{
								font-size: 28rpx;
								margin-bottom: 10rpx;
								color: rgb(255, 178, 102);
							}
							.item1Price{
								font-size: 27rpx;
							}
						}
						.item1Phone{
							width: 100%;
							height: 70%;
							text-align: center;
							.phone1Img{
								width: 200rpx;
								height: 300rpx;
								border-radius: 10rpx;
							}
						}
					}					
				}
				
			}
			.listItem2{
				width: 100%;	
				height: 280rpx;
				background-color: white;
				border-radius: 15rpx;
				padding: 10rpx 15rpx;
				.item2Title{
					width: 100%;
					height: 75rpx;
					font-size: 26rpx;
					padding: 8rpx;
					display: -webkit-box;
					-webkit-line-clamp: 2; /* 2줄로 제한 */
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.item2{
					width: 100%;
					height: 185rpx;
					display: flex;
					.item2Text{
						width: 55%;
						height: 100%;
						padding-left: 10rpx;
						.item2storage{
							width: 100%;
							height: 50rpx;
							font-size: 28rpx;
							line-height: 50rpx;
							color: rgb(255, 178, 102);
						}
						.item2color{
							width: 100%;
							height: 50rpx;
							font-size: 26rpx;
							line-height: 50rpx;
						}
						.item2Price{
							width: 100%;
							height: 50rpx;
							line-height: 50rpx;
							font-size: 26rpx;
						}
					}
					.item2Phone{
						width: 45%;
						height:100%;
						position: relative;
						.phone2Img{
							width: 100%;
							height: 90%;
							position: absolute;
							left: 0;
							bottom: 15rpx;
							border-radius: 10rpx;
						}
					}
				}	
			}
		}
	}
</style>
