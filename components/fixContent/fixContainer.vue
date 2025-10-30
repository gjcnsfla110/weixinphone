<template>
	<view class="container">
		<view class="company" @click="clickCompany">
			<view class="companyImg"><image src="/static/company/company.png"></image></view>
			<view class="text">小韩手机</view>
		</view>
		<view class="call" @click="">
			<view class="callImg"><image src="/static/company/kefu1.png"></image></view>
			<view class="text">联系客服</view>
		</view>
	</view>
</template>

<script>
import { ref } from 'vue';
export default{
	components:{
		
	},
	props:{
		
	},
	setup(props, context) {
		const checkClose = ref(true);
		const alertDialog = ref(); 
		return{
			checkClose,
			alertDialog
		}
	},
	methods:{

		clickCall(){
			
		},
		clickCompany(){
			uni.navigateTo({
			        url: `/pages/company/company` // 이동할 페이지 경로
			});
		}
	}
}
</script>

<style lang="scss" scoped>
	.container{
		width: 100rpx;
		height: 280rpx;
		z-index: 1000;
		position: fixed;
		background-color: white;
		border-radius: 50rpx;
		bottom: 100rpx;
		right: 20rpx;
		box-shadow: 10rpx 10rpx 30rpx rgba(0, 0, 0, 0.7);
		.text{
			width: 100rpx;
			height: 30rpx;
			line-height: 30rpx;
			font-size: 20rpx;
			letter-spacing: 2rpx;
			text-align: center;
			margin-top: 8rpx;
			color: rgb(120, 120, 120);
			text-shadow: 1rpx 1rpx 3rpx rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
		}
		.company{
			width: 100rpx;
			height: 100rpx;
			margin-top:30rpx;
			.companyImg{
				width: 60rpx;
				height: 60rpx;
				margin-left: 20rpx;
				image{
					width: 60rpx;
					height: 60rpx;
				}
			}	
		}
		.call{
			width: 100rpx;
			height: 100rpx;
			margin-top: 20rpx;
			.callImg{
				width: 60rpx;
				height: 60rpx;
				margin-left: 20rpx;
				image{
					width: 60rpx;
					height: 60rpx;
				}
			}
		}
	}
</style>