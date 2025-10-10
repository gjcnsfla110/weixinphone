<template>
	<swiper class="pageSwiper" :circular="true" :indicator-dots="indicatorDots" :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor">
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
			},
			indicatorDots:{
				type:Boolean,
				default:true
			},
			indicatorColor:{
				type:String,
				default:"rgba(255,255,255)"
			},
			indicatorActiveColor:{
				type:String,
				default:"rgba(255,153,51)"
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