<template>
	<view class="cardItme">
		<view class="cardItme_pd">
		<slot></slot>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
   .cardItme{
	  margin-top: 30rpx;
	  padding: 0 25rpx;
	  width: 100vw;  
	  .cardItme_pd{
		  background-color: #F6FCFF;
		  padding: 20rpx 10rpx;
		  border-radius: 20rpx;
	  }
   }
</style>
