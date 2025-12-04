<template>
	<Custom :back="true" title="商品详细"></Custom>
	<view class="accessoriesContainer">
		<view class="topImg">
			<image :src="item.img"></image>
		</view>
		<view class="top">
			<view class="agreementTop">
					<view class="label">
						<view class="labelContent" v-if="true">
							<text class="labeltext1">新出</text> <text class="labeltext2">推荐</text>
						</view>
						<view class="labelContent" v-else-if="0">
							<text class="labeltext1">新出</text> <text class="labeltext2">人气</text>
						</view>
						<view class="labelContent" v-else-if="1">
							<text class="labeltext1">新出</text> <text class="labeltext2">爆款</text>
						</view>
						<view class="labelContent" v-else-if="0">
							<text class="labeltext1">性价高</text> <text class="labeltext2">店长推荐</text>
						</view>
						<view class="labelContent" v-else-if="2">
							<text class="labeltext1">热烈推荐</text> <text class="labeltext2">爆款</text>
						</view>
						<view class="labelContent" v-else>
							<text>小韩手机</text>
						</view>
					</view>
					<view class="agreementTitle">
						{{item.title}}
					</view>
					<view class="itemBottomMaterial"><view class="materialTitle">材质</view><view class="materialCenter"></view><view class="materialContent">{{item.material}}</view></view>
			</view>
		</view>
		<view class="itemNav">
			<u-subsection :list="list" :current="0" @change="itemContentClick"></u-subsection>
		</view>
		<view class="center" v-if="this.current == 0">
			<view class="itemNumber"><text class="itemNumberLeft">No.</text>{{item.item_number}}</view>
			<view class="detail">
				<view class="agreementContentTitle"><view class="borderLeft"></view><view class="titleRight">套餐介绍</view></view>
				<view class="detailContent">
					{{item.accessories_detail}}
				</view>
			</view>
			<view class="introduction">
				<view class="agreementContentTitle"><view class="borderLeft"></view><view class="titleRight">基本信息</view></view>
				<view class="itemContent">
					<view class="itemImage" v-for="img in JSON.parse(item.banner)">
						<image :src="img" mode="aspectFit"></image>
					</view>
				</view>
			</view>
		</view>
		<view v-if="this.current == 1">
			<view class="popupBottom">
				<view class="servicePopupTitle">购买商品提供服务。</view>
				<view class="popupServiceContent">
					<view class="popupServiceTitle"><image src="/static/company/kuaidiyuan.png"></image><view class="popupServiceTitleText">当日免费送到门！</view></view>
					<view class="popupServiceDetail">
						满5万韩元! 购买手机，手机配件 加里峰，南九老，九老，大林，秃山，加山数码团地 地区的客户 您告诉我们地址 当天免费配送。一般30分钟内送达！
					</view>
				</view>
				<view class="popupServiceContent">
					<view class="popupServiceTitle"><image src="/static/company/paisong.png"></image><view class="popupServiceTitleText">邮费免费，全部包邮。</view></view>
					<view class="popupServiceDetail">
						购买 满5万韩元商品 当天免费邮寄。 您不需要担心邮寄过程手机会损坏，我们用 多层泡沫 精致包装，发货之前整个过程都给您拍视频，无需担心。
					</view>
				</view>
			</view>
		</view>
		<view class="client" v-if="this.current == 2">
			<view class="clientItem" v-for="review in reviewData">
				<view class="clientTitle">{{review.title}}</view>
				<view class="clientContent">
					<view class="imgContainer" v-if="review.type == 1">
						<view class="image" v-for="img in review.img">
							<image :src="img"></image>
						</view>
					</view>
					<view class="itemVideo" v-if="review.type == 2">
						<iframe 
						  width="100%" 
						  height="380" 
						  :src="review.video"
						  allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						  allowfullscreen>
						</iframe>
					</view>
				</view>
				<view class="clientBottom">
					<view class="date">{{review.date}}</view>
				</view>
			</view>
			<view class="pagi">
				<uni-pagination :total="total" :current="currentPage" prev-text="前一页" next-text="后一页" @change="paginationClick" />
			</view>
		</view>
	</view>
</template>

<script>
import { servicePost } from '../../utill/request';
import Custom from '@/components/custom-nav-bar/customNav.vue'
import { formattedPrice } from '@/utill/common';
import { ref } from 'vue';
export default{
	components:{
		Custom
	},
	props:{
		
	},
	setup(props, context) {
		const list = ref([
				{
					name: '商品信息'
				}, 
				{
					name: '免费配送'
				},
				{
					name:'客户评价'
				}
		])
		const item = ref([]);
		const current =ref(0);
		//리뷰페이지코드
		const currentPage = ref(1);
		const total = ref(0);
		const reviewData = ref([]);
		return {
			item,
			formattedPrice,
			list,
			current,
			currentPage,
			total,
			reviewData
		}
	},
	methods:{
		itemContentClick(i){
			this.current = i;
		}
	},
	async onLoad(op){
		const storegeItem = uni.getStorageSync('accessoriesItem');
		if(storegeItem){
			this.item = storegeItem.accessories;
		}else{
			this.item = await servicePost('app/accessories/item/detail',{id:op.id});
		}
		const reviewList = await servicePost('app/accessories/review/list',{id:op.id,page:this.currentPage});
		this.reviewData = reviewList.reviews;
		this.total = reviewList.total;
	}
}
</script>

<style lang="scss" scoped>
	//리뷰부분
	.client{
		width: 750rpx;
		.clientItem{
			width: 750rpx;
			padding: 20rpx 25rpx;
			.clientTitle{
				width: 700rpx;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 30rpx;
				letter-spacing: 3rpx;
				padding-left: 30rpx;
				color: rgb(150, 150, 150);
			}
			.imgContainer{
				display: grid;
				gap: 8rpx;
				width: 700rpx;
				grid-template-columns: repeat(4, 1fr);
				background-color: rgb(250, 250, 250);
				padding: 30rpx;
				border-radius: 20rpx;
				.image{
					height: 160rpx;
					image{
						width: 100%;
						height: 160rpx;
					}
				}
			}
			.clientBottom{
				width: 700rpx;
				height: 80rpx;
				border-bottom: 1rpx solid rgb(220, 220, 220);
				.date{
					width: 700rpx;
					height: 80rpx;
					line-height: 80rpx;
					text-align: right;
					padding-right: 20rpx;
					font-size: 28rpx;
					letter-spacing: 3rpx;
					color: rgb(150, 150, 150);
				}
			}
		}
	}
	.pagi{
		width: 550rpx;
		height: 150rpx;
		margin-left: 100rpx;
		padding-top: 30rpx;
	}
	.videoTitle{
		width: 750rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 33rpx;
		color: rgb(120, 120, 120);
		padding-left: 25rpx;
	}
	.itemVideo{
		width: 650rpx;
		margin-left: 25rpx;
		border-radius: 30rpx;
		overflow: hidden;
		transition: transform 0.3s;
	}
	
	
	//클릭시 바뀌는 화면
	.itemNav{
		width: 720rpx;
		margin-left: 15rpx;
		margin-top: 30rpx;
	}
	
	.itemNumber{
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		letter-spacing: 5rpx;
		color: rgb(120, 120, 120);
		font-size: 30rpx;
		margin-bottom: 20rpx;
		.itemNumberLeft{
			color: rgb(255, 153, 51);
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
			letter-spacing: 8rpx;
			font-size: 38rpx;
		}
	}
	.accessoriesContainer{
		width: 750rpx;
		.topImg{
			width: 100%;
			height: 420rpx;
			text-align: center;
			image{
				width: 350rpx;
				height: 399rpx;
			}
		}
		.top{
			width:750rpx;
			.agreementTop{
				.labelContent{
					width: 100%;
					height: 60rpx;
					text-align: center;
					line-height: 60rpx;
					margin-top: 20rpx;
					font-size: 28rpx;
					.labeltext1{
						padding-right: 12rpx;
						color: rgb(222, 11, 124);
					}
					.labeltext2{
						border-left:2rpx solid rgb(225, 225, 225) ;
						padding-left: 20rpx;
						color: rgb(204, 102, 0);
					}
				}
				.agreementTitle{
					text-align: center;
					height: 70rpx;
					width: 100%;
					line-height: 40rpx;
					font-size: 36rpx;
					color: rgb(50, 50, 50);
					letter-spacing: 3rpx; /* 글자 간격 넓게 */
					font-weight: bold;
					overflow: hidden;
				}
				
				.itemBottomMaterial{
					width: 750rpx;
					height: 50rpx;
					font-size: 28rpx;
					letter-spacing: 3rpx;
					margin-top: 20rpx;
					margin-bottom: 10rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					line-height: 60rpx;
					text-align: center;
					color: rgb(180, 180, 180);
					.materialTitle{
						width: 350rpx;
						height: 50rpx;
					}
					.materialCenter{
						width: 5rpx;
						height: 25rpx;
						background-color:rgb(180, 180, 180);
					}
					.materialContent{
						width: 350rpx;
						height: 50rpx;
						overflow: hidden;
					}
				}
			}
		}
		.center{
			width: 750rpx;
			padding: 50rpx;
			.agreementContentTitle{
				width: 650rpx;
				height: 60rpx;
				font-size: 32rpx;
				display: flex;
				.borderLeft{
					width: 10rpx;
					height: 30rpx;
					margin-top: 15rpx;
					border-radius: 5rpx;
					background-color: rgb(102, 102, 255);
				}
				.titleRight{
					width: 600rpx;
					height: 60rpx;
					line-height: 60rpx;
					margin-left: 20rpx;
					letter-spacing: 10rpx; /* 글자 간격 넓게 */
					text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15); /* 부드러운 그림자 */
					color:rgb(120, 120, 120);
				}
			}
			.agreementContent{
				.content {
					padding: 15px;
					color: rgb(88, 88, 88);
					font-size: 28rpx;
					letter-spacing: 5rpx; /* 글자 간격 넓게 */
				}
			}
			.detail{
				width: 650rpx;
				border-bottom: 3rpx solid rgb(230, 230, 230);
				margin-bottom: 30rpx;
				.detailContent{
					padding: 25rpx 25rpx 35rpx 25rpx;
					color: rgb(88, 88, 88);
					font-size: 27rpx;
					letter-spacing: 5rpx; /* 글자 간격 넓게 */
				}		
			}
			.introduction{
				width: 650rpx;
				padding: 25rpx 0 35rpx 0;
				margin-bottom: 30rpx;
				.itemContent{
					width: 100%;
					margin-top: 35rpx;
					.itemImage{
						width: 100%;
						image{
							width: 100%;
						}
					}
				}	
			}
		}
	}
	
	//무료배송 서비스부분
			.servicePopupTitle{
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			margin-top: 28rpx;
			font-size: 39rpx;
			color: rgb(255, 0, 0);
			letter-spacing: 2rpx; /* 글자 간격 넓게 */
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
		}
		.popupServiceContent{
			width: 100%;
			height: 310rpx;
			padding-left: 35rpx;
			padding-right: 35rpx;
			.popupServiceTitle{
				width: 100%;
				height: 100rpx;
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				image{
					width: 80rpx;
					height: 80rpx;
				}
				.popupServiceTitleText{
					width: 500rpx;
					height: 80rpx;
					line-height: 90rpx;
					letter-spacing: 3rpx;
					font-size: 30rpx;
					color: rgb(255, 153, 51);
					text-shadow: 2rpx 2rpx 3rpx rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
				}
			}
			.popupServiceDetail{
				width: 100%;
				height: 210rpx;
				font-size: 28rpx;
				color: rgb(150, 150, 150);
				letter-spacing: 3rpx;
				padding-top: 10rpx;
			}
		}
	.popupBottom{
		height: 800rpx;
		padding: 20rpx;
		border-radius: 38rpx 38rpx 0 0;
		z-index: 1000;
		background-color:white;
		
	}
</style>