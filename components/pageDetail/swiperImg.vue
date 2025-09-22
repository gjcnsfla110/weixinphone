<template>
	<swiper class="pageSwiper" :circular="true">
		<swiper-item class="swiperItem" v-for="item in banner" > 
				<image class="img" :src="item" mode="aspectFill"></image>
		</swiper-item>
	</swiper>
</template>
<script>
	export default{
		comments:{
			
		},
		props:{
			banner:{
				type:Array,
				default:[]
			}
		},
		setup(props, context) {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.pageSwiper{
		width: 100%;
		height: 500rpx;
		.swiperItem{
			width: 100%;
			height: 100%;
			.img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>