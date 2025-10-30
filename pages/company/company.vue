<template>
	<CustomNav :back="true" title="公 司 业 务"></CustomNav>
	<view class="company">
		<view class="companyImg"><image src="/static/company/logo.png"></image></view>
		<view></view>
		<view class="faith">
			<view class="faithItem"><image src="/static/company/xinyu.png"></image><view class="faithItemText">不欺骗客户,绝对没有套路！</view></view>
			<view class="faithItem"><image src="/static/company/baozhang.png"></image><view class="faithItemText">开通合约机 无需高套餐，只返现金！</view></view>
			<view class="faithItem"><image src="/static/company/shouyi.png"></image><view class="faithItemText">每台手机 只盈利 三万韩元，谢绝降价！</view></view>
		</view>
		<view class="asNav"><u-subsection @change="sectionChange" active-color="#FF8000" :current="cutrrunIndex" mode="button" :list="[{name:'寄卖'},{name:'回收二手'},{name:'典当手机'},{name:'免费配送'}]" :height="90" bg-color="#F5F5F5"></u-subsection></view>
		<view class="asCompany" v-if="0 == cutrrunIndex">
			<view class="content">
				<view class="jimai">
					<view class="jimaiTitel"><image src="/static/company/jimai.png"></image><view class="jimaiTitelText">提供委托寄卖服务。</view></view>
					<view class="jimaiDetail">我们提供 小韩手机平台！让客户寄托给我们的手机找买家。在韩 其他平台 买家，卖家 害怕购买，售卖。 我们做中间平台 帮你们 检测 外观磕碰，电池 等信息。帮卖家邮寄货物。</view>
				</view>
			</view>
		</view>
		<view class="asCompany" v-else-if="1 == cutrrunIndex">
			<view class="content">
				<view class="jimai">
					<view class="jimaiTitel"><image src="/static/company/ershou.png"></image><view class="jimaiTitelText">高价回收二手机。</view></view>
					<view class="jimaiDetail">高价回收 二手手机，平板电脑 需要换手机，卖手机的 通过客服联系我们了解 二手价格。</view>
				</view>
			</view>
		</view>
		<view class="asCompany" v-else-if="2 == cutrrunIndex">
			<view class="content">
				<view class="jimai">
					<view class="jimaiTitel"><image src="/static/company/diandang.png"></image><view class="jimaiTitelText">高价回收二手机。</view></view>
					<view class="jimaiDetail">手机，平板电脑 可以典当 我们提供小额典当 当日结算。</view>
				</view>
			</view>
		</view>
		<view class="asCompany" v-else-if="3 == cutrrunIndex">
			<view class="content">
				<view class="jimai">
					<view class="jimaiTitel"><image src="/static/company/paisong.png"></image><view class="jimaiTitelText">购买手机 当日免费配送。</view></view>
					<view class="jimaiDetail">加里峰，南九老，九老，大林，秃山，加山数码团地 购买手机 当天免费配送。</view>
				</view>
			</view>
		</view>
	</view>
	<view class="bottom">
		 <view class="bottomItem"><image src="/static/company/kefu1.png"></image><view class="bottomItemText">联系客户</view></view>
		 <view class="bottomItem" @click="clickShop"><image src="/static/company/shop.png"></image><view class="bottomItemText">查看商店地址</view></view>
	</view>
	<view class="hiddenBottom"></view>
</template>

<script>
import CustomNav from "@/components/custom-nav-bar/customNav.vue";
import { ref } from "vue";
export default{
	components:{
		CustomNav
	},
	props:{
		
	},
	setup(props, context) {
		const cutrrunIndex = ref(0);
		return {
			cutrrunIndex
		}
	},
	methods:{
		sectionChange(index){
			this.cutrrunIndex = index
		},
		clickShop(){
			uni.navigateTo({
			        url: `/pages/shop/shop` // 이동할 페이지 경로
			});
		}
	},
	onLoad(){
		
	}
}
</script>

<style lang="scss" scoped>
	.company{
		width: 750rpx;
		padding: 25rpx;
		.companyImg{
			width: 700rpx;
			image{
				width: 100%;
			}
		}
		.faith{
			width: 650rpx;
			margin-bottom: 30rpx;
			padding-left: 25rpx;
			font-size: 28rpx;
			color: rgb(120, 120, 120);
			letter-spacing: 5rpx;
			.faithItem{
				width: 650rpx;
				height: 90rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				image{
					width: 50rpx;
					height: 50rpx;
				}
				.faithItemText{
					width: 550rpx;
					height: 70rpx;
					line-height: 80rpx;
				}
			}
		}
		.asNav{
			width: 700rpx;
			height: 100rpx;
		}
		.asCompany{
			width: 700rpx;
			padding: 0 25rpx 25rpx 25rpx;
			.content{
				width: 650rpx;
				.jimaiTitel{
					padding-top: 20rpx;
					width: 650rpx;
					height: 90rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					image{
						width: 60rpx;
						height: 60rpx;
					}
					.jimaiTitelText{
						width: 550rpx;
						height: 70rpx;
						line-height: 80rpx;
						letter-spacing: 3rpx;
						font-size: 30rpx;
						color: #FF8000;
					}
				}
				.jimaiDetail{
					padding-top: 20rpx;
					width: 650rpx;
					height: 200rpx;
					font-size: 27rpx;
					letter-spacing: 3rpx;
					color: rgb(150, 150, 150);
					line-height: 45rpx;
				}
			}
		}
	}
	
	.bottom{
		width: 750rpx;
		.bottomItem{
			width: 650rpx;
			height: 120rpx;
			margin-left: 50rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 5rpx solid rgb(240, 240, 240);
			border-radius: 30rpx;
			margin-top: 20rpx;
			image{
				width: 90rpx;
				height: 90rpx;
			}
			.bottomItemText{
				width: 400rpx;
				height: 90rpx;
				padding-left: 80rpx;
				line-height: 100rpx;
				font-size: 32rpx;
				color: rgb(120, 120, 120);
			}
		}
	}
	
	.hiddenBottom{
		width: 100%;
		height: 150rpx;
	}
</style>