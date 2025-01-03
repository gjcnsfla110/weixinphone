<template>
	<view class="gr4content" :style="{padding:padding,backgroundColor:listColor}">
			<view class="gr4list">
				<view class="gr4Item"  :style="{backgroundColor:itemColor}" v-for="item in data">
					<view class="gr4Top">
						<image :src="item.src" mode="aspectFill"></image>
					</view>
					<view class="gr4Bottom">
						<view class="gr4BtTitle">苹果16pro Max 绝对有性价比的手机 256G 8成以上新 需要速度联系</view>
						<view class="gr4BtContent">
							<view class="gr4BtContentTag">256G</view>
							<view class="gr4BtContentTag" style="border: 1px solid red; color: red;">9成新</view>
							<view class="gr4BtContentPrice">原价:  <view class="yuanjia">200万</view></view>
						</view>
						<view class="gr4BtPrice">现价: <view class="gr4BtPriceNumber">860,600</view>韩元</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script setup>
import {defineProps} from "vue"
const props = defineProps({
	itemColor:{
		default:"rgb(247,249,255,0.5)"
	},
	listColor:{
		default:"rgb(255,255,255)"
	},
	data:{
		default:[]
	},
	padding:{
		type:String,
		default :"0 0"
	}
})
</script>

<style lang="scss" scoped>
	.gr4content{
		width: 100%;
			.gr4list{
				padding: 0 25rpx;
				display: grid;
				grid-template-columns: repeat(2,1fr);
				gap: 15rpx;
				.gr4Item{
					box-shadow:3px 3px 3px 1px rgb(246, 246, 246);
					width: 100%;
					height:610rpx;
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
						height: 200rpx;
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
						}
						.gr4BtContent{
							width: 100%;
							height: 38rpx;
							margin-top: 10rpx;
							padding-left: 15rpx;
							display: flex;
							.gr4BtContentTag{
								font-size: 20rpx;
								margin-right: 10rpx;
								border-radius: 5rpx;
								border: 1px solid #1FA2FA;
								color:#1FA2FA ;
								text-align: center;
								line-height: 36rpx;
								width: 63rpx;
							}
							.gr4BtContentPrice{
								padding-left: 10rpx;
								font-size: 20rpx;
								line-height: 40rpx;
								color: #FF9B03;
								.yuanjia{
									display: inline-block;
									font-size: 26rpx;
									color: rgb(200, 200, 200);
									text-decoration: line-through;
								}
							}
						}
						.gr4BtPrice{
							width: 100%;
							padding-left: 15rpx;
							margin-top: 11rpx;
							font-size: 21rpx;
							.gr4BtPriceNumber{
							    display: inline-block;
								margin-left: 15rpx;
								margin-right: 5rpx;
								font-size: 26rpx;
							}
						}
					}
				}
			}				
	}
</style>