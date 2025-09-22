<template>
	<view class="gr4content" :style="{padding:padding,backgroundColor:listColor}">
			<view class="gr4list">
				<view class="gr4Item"  :style="{backgroundColor:itemColor}" v-for="item in items" @click="itemDetail(item.goods_id)">
					<view class="gr4Top">
						<image :src="item.img" mode="aspectFill"></image>
					</view>
					<view class="gr4Bottom">
						<view class="gr4BtTitle">{{item.title}}</view>
						<view class="gr4BtContent">
							<view class="gr4BtContentTag" :style="{backgroundColor:item.label_color}">{{item.label}}</view>
							<view class="gr4BtContentTag" style="border: 1px solid red; color: red;">{{item.storage}}</view>
						</view>
						<view class="gr4BtPrice">
							<view class="gr4BtContentPrice">原价  :  <text class="yuanjia">{{formattedPrice(item.price)}}</text><text style="font-size: 18rpx;">  韩元</text></view>
							<view class="gr4BtPriceNumber"><text class="leftPrice">现价  :  </text>  <text>{{formattedPrice(item.price2)}}</text><text class="rightPrice">  韩元</text></view>
						</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	import { ref ,watch } from "vue";
	import { formattedPrice } from '@/utill/common';
	export default{
		comments:{
			
		},
		props:{
			itemColor:{
				default:"rgb(247,249,255,0.5)"
			},
			listColor:{
				default:"rgb(255,255,255)"
			},
			itemData:{
				type:Object,
				default:{items:[]}
			},
			padding:{
				type:String,
				default :"0 0"
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
			return{
				items,
				formattedPrice
			}
		},
		methods:{
			itemDetail(id){
				uni.navigateTo({
				        url: `/pages/itemPage/oldItemPage?id=${id}` // 이동할 페이지 경로
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gr4content{
		width: 100%;
		height: 100%;
			.gr4list{
				padding: 0 25rpx;
				display: grid;
				grid-template-columns: repeat(2,1fr);
				gap: 15rpx;
				.gr4Item{
					box-shadow:3px 3px 3px 1px rgb(246, 246, 246);
					width: 100%;
					height:710rpx;
					border-radius: 15rpx;
					.gr4Top{
						width: 100%;
						height: 410rpx;
						image{
							border-top-left-radius: 15rpx;
							border-top-right-radius: 15rpx;
							width: 100%;
							height: 410rpx;
						}
					}
					.gr4Bottom{
						width: 100%;
						height: 300rpx;
						.gr4BtTitle{
							width: 100%;
							padding:0 15rpx;
							margin-top: 20rpx;
							height: 80rpx;
							font-size: 26rpx;
							text-align: center;
							overflow: hidden; /* 초과 내용을 숨김 */
							text-overflow: ellipsis; /* 초과 부분에 ... 표시 */
							display: block; /* 블록 요소로 설정 */
							word-break: break-word; /* 단어가 길 경우 자동 줄바꿈 */
							max-height: 3em; /* 2줄 높이 제한 (line-height에 따라 조정) */
							line-height: 1.5em; /* 한 줄의 높이 설정 */
							letter-spacing: 2rpx; /* 글자 간격 넓게 */
							text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
						}
						.gr4BtContent{
							width: 100%;
							height: 60rpx;
							margin-top: 10rpx;
							display: flex;
							.gr4BtContentTag{
								width: 47%;
								margin-left: 3%;
								margin-right: 3%;
								height: 60rpx;
								font-size: 27rpx;
								border-radius: 8rpx;
								color:white;
								text-align: center;
								line-height: 60rpx;
								
							}
						}
						.gr4BtPrice{
							width: 100%;
							padding-left: 15rpx;
							margin-top: 20rpx;
							font-size: 22rpx;
							text-align: center;
							.gr4BtContentPrice{
								padding-left: 10rpx;
								font-size: 26rpx;
								line-height: 40rpx;
								margin-top: 10rpx;
								color: red;
								letter-spacing: 2rpx; /* 글자 간격 넓게 */
								text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
								.yuanjia{
									display: inline-block;
									font-size: 24rpx;
									color: rgb(100, 100, 100);
									text-decoration: line-through;
								}
							}
							.gr4BtPriceNumber{
							    display: inline-block;
								margin-top: 10rpx;
								font-size: 30rpx;
								letter-spacing: 2rpx; /* 글자 간격 넓게 */
								text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
								.leftPrice{
									font-size: 36rpx;
									color: rgb(255, 128, 0);
								}
								.rightPrice{
									font-size: 20rpx;
									color: rgb(255, 128, 0);
								}
							}
						}
					}
				}
			}				
	}
</style>