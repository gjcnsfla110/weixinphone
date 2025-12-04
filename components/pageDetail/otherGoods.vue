<template>
	<view class="Accessories">
			<view class="AccessoriesTitle">30,000韩元 礼包（4种）</view>
			<view class="ABox">
				<view class="AccessoriesItem">
					<image class="AccessoriesImg" src="/static/goods/lanyaerji.webp"></image> 
					<view class="AccessoriesText">精致蓝牙耳机</view>
				</view>
				<view class="AccessoriesItem">
					<image class="AccessoriesImg" style="width: 80rpx; height: 100rpx;margin-top: 20rpx;" src="/static/goods/shoujike.webp"></image> 
					<view class="AccessoriesText">豪华手机壳</view>
				</view>
				<view class="AccessoriesItem">
					<image class="AccessoriesImg" src="/static/goods/chongdiantou.webp"></image> 
					<view class="AccessoriesText">高速充电头</view>
				</view>
				<view class="AccessoriesItem">
					<image class="AccessoriesImg" src="/static/goods/chongdianxian.webp"></image> 
					<view class="AccessoriesText">66W快充数据线</view>
				</view>
			</view>
			<view class="AccessoriesTitle">50,000韩元 礼包（4种+2种）</view>
			<view class="ABox">
				<view class="AccessoriesItem">
					<image class="AccessoriesImg" src="/static/goods/kabao.webp"></image> 
					<view class="AccessoriesText">超美手机卡包</view>
				</view>
				<view class="AccessoriesItem">
					<image class="AccessoriesImg" src="/static/goods/wuxianchong.webp"></image> 
					<view class="AccessoriesText">无线充电器</view>
				</view>
			</view>	
	</view>
</template>

<script>
	
export default{
	components:{
		
	},
	props:{
		
	},
	setup(props, context) {
		
	},
	methods:{
		
	},
	onLoad(){
		
	}
		
}	
</script>

<style lang="scss" scoped>
	.Accessories{
		width: 720rpx;
		margin-left: 15rpx;
		margin-bottom: 50rpx;
			.AccessoriesTitle{
				width: 720rpx;
				height: 80rpx;
				margin-left: 15rpx;
				font-size: 30rpx;
				line-height: 80rpx;
				padding-left: 15rpx;
				margin-top: 20rpx;
				text-shadow: 2rpx 2rpx 4rpx rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
				letter-spacing: 8rpx;
				color: rgb(60, 60, 60);
			}
			.ABox{
				width: 720rpx;
				padding: 20rpx 0;
				display: grid;
				gap: 20rpx;
				grid-template-columns: 1fr 1fr;
				.AccessoriesItem{
					height: 200rpx;
					text-align: center;
					padding: 10rpx;
					border: 3rpx solid rgb(240, 240, 240);
					border-radius: 20rpx;
					image{
						width: 120rpx;
						height: 110rpx;
					}
					.AccessoriesText{
						width: 100%;
						height: 70rpx;
						font-size: 26rpx;
						letter-spacing: 5rpx;
						line-height: 70rpx;
						color: rgb(150, 150, 150);
					}
				}
			}
	}
</style>