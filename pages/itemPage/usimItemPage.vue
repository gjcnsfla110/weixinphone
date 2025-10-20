<template>
	<CustomNav :back="true"></CustomNav>
	<view class="usimContaner">
		<view class="header">
			<view class="headerTop"><view class="usimTopLeft"><image src="/static/usim/company.png"></image><view class="usimTopLeftText">{{item.mobile_name}}</view></view></view>
			<view class="headerTitle">{{item.title}}</view>
			<view class="usimDetail">
				无需换号。只需该套餐就行。
			</view>
			<view class="usimContent">
				<view class="usimDt"><image src="/static/usim/phone.png"></image><text class="usimText">{{item.tell_time}}</text></view>
				<view class="usimCenterSolid"></view>
				<view class="usimDt"><image src="/static/usim/data.png"></image><text class="usimText">{{item.data}}</text></view>
				<view class="usimCenterSolid"></view>
				<view class="usimDt"><image src="/static/usim/msn.png"></image><text class="usimText">{{item.mns}}</text></view>
				<view class="usimDt"><image src="/static/usim/type.png"></image><text class="usimText">{{item.mobile_type}}</text></view>
				<view class="usimCenterSolid"></view>
				<view class="usimDt" style="width: 250rpx;"><image src="/static/usim/net.png"></image><text class="usimText" style="width: 210rpx;">{{item.mobile_name}}</text></view>
			</view>
			<view class="usimCheck">
				<view class="usimCheckTop">
					<image src="/static/usim/check.png"></image>
					<view class="usimCheckTopText">注意事项！请必须看完文章</view>
				</view>
				<view class="usimCheckContent">
					<view>合约手机的客户，合约没到期会发生违约金！</view>
					<view>新用户， 没有自己名义手机号客人 先跟客服联系!</view>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="contentTitle">套餐介绍</view>
			<view class="contentDetail">{{item.detail}}</view>
			<view class="itemData">
				<view class="itemData1"><image src="/static/usim/phone.png"></image><view class="itemData1Text">{{item.tell_time}}</view></view>
				<view class="itemData1"><image src="/static/usim/msn.png"></image><view class="itemData1Text">{{item.mns}}</view></view>
				<view class="itemData1"><image src="/static/usim/data.png"></image><view class="itemData1Text">{{item.data}}</view></view>
				<view class="itemData1"><image src="/static/usim/net.png"></image><view class="itemData1Text">{{item.mobile_name}}</view></view>
			</view>
			<view class="item"><view class="itemLeft" style="color: rgb(222, 11, 124)">合约期限</view><view class="itemRight">{{item.agreement_time}}</view></view>
			<view class="item"><view class="itemLeft">通信公司</view><view class="itemRight">{{item.mobile_name}}</view></view>
			<view class="item"><view class="itemLeft">通话时间</view><view class="itemRight">{{item.tell_time}}</view></view>
			<view class="item"><view class="itemLeft">上网流量</view><view class="itemRight">{{item.data}}</view></view>
			<view class="item"><view class="itemLeft">短信</view><view class="itemRight">{{item.mns}}</view></view>
			<view class="item"><view class="itemLeft">附加通话</view><view class="itemRight">{{item.other_service}}</view></view>
			<view class="item"><view class="itemLeft">eSim(虚拟手机卡)</view><view class="itemRight">{{item.esim}}</view></view>
			<view class="item"><view class="itemLeft">手机</view><view class="itemRight1">{{item.phone_type}}</view></view>
		</view>
		<view class="bottom">
			<view class="contentTitle">适合人群</view>
			<view class="peopleNeed">
				{{item.peopleNeed}}
			</view>
		</view>
		<view class="hiddenBottom"></view>
		<view class="usimBottomFixed">
			<view class="usimBottomFixedLeft">
				<view class="monthTopRight">
					<view class="monthTopRight1">每月费用</view>
					<view class="monthTopRight2">
						<view class="monthTopRight2Img"><image src="/static/usim/usimPrice.png"></image></view>
						<view class="monthTopRight2Text">{{formattedPrice(item.price)}}<text class="hanyuan" style="color:rgb(102, 102, 255);">韩元</text></view>
					</view>
				</view>
			</view>
			<view class="usimBottomFixedRight">
				<view class="usimAsbutton"><button type="primary" style="font-size: 30rpx;letter-spacing: 6rpx;border-radius: 18rpx; background-color: rgb(102, 102, 255);">知 询 客 服</button></view>
			</view>
		</view>
	</view>
</template>
<script>
import CustomNav from "@/components/custom-nav-bar/customNav.vue";
import { ref} from "vue";
import { servicePost } from "@/utill/request";
import {formattedPrice} from "@/utill/common.js";
export default{
	components:{
		CustomNav
	},
	props:{
		
	},
	setup(props, context) {
		const item = ref({});
		return{
			item,
			formattedPrice
		}
	},
	methods:{
		
	},
	async onLoad(op){
		const storegeItem = uni.getStorageSync('usimItem');
		if(storegeItem){
			this.item = storegeItem.usim;
		}else{
			this.item = await servicePost('app/usim/detail',{id:op.id});
		}
	}
}
</script>

<style lang="scss" scoped>
	.hanyuan{
			 font-size: 22rpx;
			 color: rgb(110, 100, 110);
			 margin-left: 5rpx;
	}
	.usimContaner{
		width: 750rpx;
		padding: 30rpx;
		.header{
			width: 690rpx;
			height: 820rpx;
			border-bottom: 2rpx solid rgb(240, 240, 240);
			.headerTop{
				width: 690rpx;
				height: 80rpx;
				.usimTopLeft{
					width: 310rpx;
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: rgb(248, 248, 248);
					border-radius: 50rpx;
					padding-left: 20rpx;
					image{
						width: 50rpx;
						height: 50rpx;
					}
					.usimTopLeftText{
						width: 180rpx;
						height: 60rpx;
						line-height: 65rpx;
						font-size: 27rpx;
						text-align: right;
						padding-right: 15rpx;
						letter-spacing: 3rpx;
						color: rgb(222, 11, 124);
					}
				}
			}
			.headerTitle{
				width: 690prx;
				height: 90rpx;
				margin-top: 35rpx;
				font-size: 32rpx;
				color: rgb(50, 50, 50);
				font-weight: bold;
				letter-spacing: 8rpx; /* 글자 간격 넓게 */
				line-height: 60rpx;
			}
			.usimDetail{
				margin-top: 10rpx;
				height: 60rpx;
				line-height: 50rpx;
				margin-bottom: 30rpx;
				font-size: 27rpx;
				letter-spacing: 3rpx; /* 글자 간격 넓게 */
				color: rgb(150, 150, 150);			
			}
			.usimContent{
				width: 690rpx;
				display: flex;
				height: 130rpx;
				flex-wrap: wrap;
				.usimDt{
					width: 190rpx;
					height: 60rpx;
					display: flex;
					align-items: center;
					image{
						width: 30rpx;
						height: 30rpx;
					}
					.usimText{
						display: inline-block;
						width: 140rpx;
						height: 40rpx;
						font-size: 24rpx;
						padding-left: 20rpx;
						color: rgb(150, 150, 150);
						letter-spacing: 5rpx; /* 글자 간격 넓게 */
						line-height: 45rpx;		
					}
				}
				.usimCenterSolid{
					width: 5rpx;
					height: 40rpx;
					margin-top: 10rpx;
					margin-right: 50rpx;
					background-color: rgb(230, 230, 230);
				}
			}
			.usimCheck{
				margin-top: 30rpx;
				width: 640rpx;
				height: 320rpx;
				margin-left: 23rpx;
				border: solid 2rpx rgb(180, 180, 180);
				border-radius: 15rpx;
				padding: 20rpx;
				.usimCheckTop{
					width: 600rpx;
					height: 60rpx;
					display: flex;
					align-items: center;
					image{
						width: 40rpx;
						height: 40rpx;
					}
					.usimCheckTopText{
						width: 550rpx;
						height: 60rpx;
						font-size: 30rpx;
						line-height: 65rpx;
						padding-left: 30rpx;
						color: rgb(80, 80, 80);
						letter-spacing: 3rpx; /* 글자 간격 넓게 */
					}
				}
				.usimCheckContent{
					width: 525rpx;
					margin-left: 70rpx;
					font-size: 26rpx;
					color: rgb(180, 180, 180);
					letter-spacing: 3rpx; /* 글자 간격 넓게 */
					line-height: 40rpx;
				}
			}
		}
		.content{
			width: 690rpx;
			height: 1280rpx;
			border-bottom: 2rpx solid rgb(240, 240, 240);
			padding-top: 30rpx;
			.contentTitle{
				width: 690rpx;
				height: 80rpx;
				font-size: 30rpx;
				color: rgb(110, 110, 110);
				line-height: 80rpx;
				letter-spacing: 8rpx; /* 글자 간격 넓게 */
				font-weight: bold;
			}
			.contentDetail{
				width: 690rpx;
				height: 200rpx;
				padding: 20rpx;
				border: 3rpx solid rgb(220, 220, 220);
				margin-bottom: 20rpx;
				border-radius: 20rpx;
				font-size: 27rpx;
				letter-spacing: 2rpx;
				color: rgb(160,160,160);
			}
			.itemData{
				width: 660rpx;
				height: 90rpx;
				background-color: rgb(247, 247, 247);
				border-radius: 18rpx;
				margin: 25rpx 15rpx 25rpx 15rpx;
				padding-left: 20rpx;
				display: flex;
				.itemData1{
					width: 160rpx;
					height: 90rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					image{
						width: 25rpx;
						height: 25rpx;
					}
					.itemData1Text{
						width: 125rpx;
						height: 25rpx;
						font-size: 22rpx;
						letter-spacing: 1rpx;
					}
				}
			}
			.item{
				width: 690rpx;
				height: 80rpx;
				line-height: 80rpx;
				display: flex;
				letter-spacing: 5rpx; /* 글자 간격 넓게 */
				font-size: 28rpx;
				.itemLeft{
					width: 290rpx;
					height: 80rpx;
					color: rgb(110, 110, 110);
				}
				.itemRight{
					width: 400rpx;
					height: 80rpx;
					text-align: right;
					color: rgb(102, 102, 255);
				}
				.itemRight1{
					margin-top: 16rpx;
					width: 400rpx;
					height: 200rpx;
					text-align: right;
					color: rgb(102, 102, 255);
					line-height: 45rpx;
					padding: 15rpx;
					text-align: center;
					background-color: rgb(248, 248, 248);
					border-radius: 16rpx;
					color: rgb(110, 110, 110);
				}
			}
		}
		.bottom{
			width: 690rpx;
			height: 480rpx;
			padding-top:30rpx;
			.contentTitle{
				width: 690rpx;
				height: 80rpx;
				font-size: 30rpx;
				color: rgb(110, 110, 110);
				line-height: 80rpx;
				letter-spacing: 8rpx; /* 글자 간격 넓게 */
				font-weight: bold;
			}
			.peopleNeed{
				padding-top: 15rpx;
				width: 690rpx;
				height: 350rpx;
				font-size: 27rpx;
				letter-spacing: 3rpx;
				color: rgb(160, 160, 160);
			}
		}
		.hiddenBottom{
			width: 100%;
			height: 180rpx;
		}
		.usimBottomFixed{
				position: fixed;
				bottom:0;
				left:0;
				width: 100vw;
				z-index: 10;
				height: 180rpx;
				background-color: white;
				box-shadow: 10rpx 10rpx 30rpx rgba(0, 0, 0, 0.3);
				padding:15rpx;
				display: flex;
				align-items: center;
				.usimBottomFixedLeft{
					width: 60%;
					height: 150rpx;
					padding-left: 30rpx;
					.monthTopRight{
						width: 100%;
						.monthTopRight1{
							width: 100%;
							height: 70rpx;
							line-height: 80rpx;
							color: rgb(150, 150, 150);
							font-size: 30rpx;
							letter-spacing: 6rpx; /* 글자 간격 넓게 */
							padding-left: 10rpx;
						}
						.monthTopRight2{
							width: 100%;
							font-size: 36rpx;
							height: 70rpx;
							font-weight: bold;
							line-height: 70rpx;
							color: rgb(102, 102, 255);
							letter-spacing: 6rpx; /* 글자 간격 넓게 */
							display: flex;
							.monthTopRight2Img{
								width: 70rpx;
								height: 70rpx;
								image{
									width: 46rpx;
									height: 46rpx;
									margin-top: 12rpx;
								}
							}
							.monthTopRight2Text{
								height: 70rpx;
							}
						}
						
					}
				}
				.usimBottomFixedRight{
					width: 40%;
					height: 150rpx;
					.usimAsbutton{
						width: 100%;
						height: 60rpx;
						margin-top: 45rpx;
					}
				}
				
		}
	}
</style>