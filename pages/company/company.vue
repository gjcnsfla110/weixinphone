<template>
	<CustomNav></CustomNav>
	<view class="header">
		<image src="/static/company/companyTop.png" mode="widthFix"></image>
	</view>
	<view class="company">
		<view class="companyName"><image src="/static/company/name.png" mode="widthFix"></image></view>
		<view class="faith">
			<view class="faithItem"><image src="/static/company/xinyu.png"></image><view class="faithItemText">不欺骗客户,绝对没有套路！</view></view>
			<view class="faithItem"><image src="/static/company/baozheng1.png"></image><view class="faithItemText">开通合约机 无需高套餐，只返现金！</view></view>
			<view class="faithItem"><image src="/static/company/baozheng1.png"></image><view class="faithItemText">每台手机 只盈利 三万韩元，谢绝降价！</view></view>
		</view>
		<view class="asNav"><u-subsection @change="sectionChange" :current="cutrrunIndex" mode="button" :list="[{name:'合约手机'},{name:'手机'},{name:'电话卡'}]" :height="90" bg-color="#F5F5F5"></u-subsection></view>
		<view class="asCompany" v-if="0 == cutrrunIndex"> 韩国 LG公司，KT公司，SK公司 三大运营商合约机业务办理。</view>
		<view class="asCompany" v-else-if="1 == cutrrunIndex">卖新手机，卖二手手机，回收二手手机，寄卖二手手机 等手机业务。</view>
		<view class="asCompany" v-else-if="2 == cutrrunIndex">专业办理低价알뜰폰套餐，预付卡。</view>
	</view>
	<view class="content">
		<view class="jimai">
			<view class="jimaiTitel"><image src="/static/company/give.png"></image><view class="jimaiTitelText">提供委托寄卖服务。</view></view>
			<view class="jimaiDetail">我们提供 平台 以及 帮买家 检测客户寄托给我们的手机。 我们做中间 检测机构。买家，卖家放心交易</view>
		</view>
	</view>
	<view class="bottom">
		<view class="contentItem"><image src=""></image><view class="contentItemText"></view></view>
		<view class="contentItem"><image src=""></image><view class="contentItemText"></view></view>
		<view class="contentItem"><image src=""></image><view class="contentItemText"></view></view>
	</view>
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
		}
	},
	onLoad(){
		
	}
}
</script>

<style lang="scss" scoped>
	.header{
		width: 750rpx;
		padding: 50rpx 50rpx 0 50rpx;
		image{
			width: 650rpx;
		}
	}
	.company{
		width: 750rpx;
		padding: 25rpx;
		.companyName{
			width: 700rpx;
			text-align: center;
		}
		.faith{
			width: 700rpx;
			margin-bottom: 30rpx;
			font-size: 29rpx;
			color: rgb(120, 120, 120);
			letter-spacing: 5rpx;
			.faithItem{
				width: 700rpx;
				height: 90rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				image{
					width: 70rpx;
					height: 70rpx;
				}
				.faithItemText{
					width: 600rpx;
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
			margin-top: 10rpx;
			padding: 20rpx;
			font-size: 28rpx;
			letter-spacing: 3rpx;
			line-height: 39rpx;
			color: rgb(150, 150, 150);
		}
	}
	.content{
		width: 750rpx;
		padding: 25rpx;
		height: 430rpx;
		.jimaiTitel{
			border-top: 2rpx solid rgb(230, 230, 230);
			padding-top: 30rpx;
			width: 700rpx;
			height: 128rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			image{
				width: 60rpx;
				height: 60rpx;
			}
			.jimaiTitelText{
				width: 610rpx;
				height: 70rpx;
				line-height: 80rpx;
				letter-spacing: 3rpx;
				font-size: 32rpx;
				color: rgb(153, 51, 255);
			}
		}
		.jimaiDetail{
			padding-top: 20rpx;
			width: 700rpx;
			height: 250rpx;
			font-size: 28rpx;
			letter-spacing: 3rpx;
			color: rgb(150, 150, 150);
			line-height: 45rpx;
		}
	}
</style>