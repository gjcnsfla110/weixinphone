<template>
	<view class="gr4content">
			<view class="gr4list">
				<view class="gr4Item" v-for="item in 20">
					
				</view>
			</view>
	</view>
</template>

<script setup>
	const downEvent = ()=>{
		alert("11")
	}
</script>

<style lang="scss" scoped>
	.gr4content{
		width: 100vw;
			.gr4list{
				padding: 0 25rpx;
				display: grid;
				grid-template-columns: repeat(2,1fr);
				gap: 15rpx;
				.gr4Item{					
					width: 100%;
					height:530rpx;
					background-color: rosybrown;
					border-radius: 15rpx;
				}
			}				
	}
</style>