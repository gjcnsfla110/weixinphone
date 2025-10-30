<template>
	<view class="cardItme" :style="{padding:pading}">
		<view class="cardItme_pd" :style="{backgroundColor:color}">
		<slot></slot>
		</view>
	</view>
</template>

<script setup>
	import {defineProps} from "vue";
	const props = defineProps(
	  {
		  color:{
			  default:"#F6FCFF"
		  },
		  pading :{
			  default:"0 25rpx"
		  }
	  }
	)
</script>

<style lang="scss">
   .cardItme{
	  width: 100vw;  
	  .cardItme_pd{
		  padding: 15rpx 10rpx;
		  border-radius: 20rpx;
	  }
   }
</style>
