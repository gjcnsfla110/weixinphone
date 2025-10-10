<template>	
		<view class="swiper-content">
			<view v-if="banner.id">
				<u-swiper :list="banner.items" :effect3d="true"></u-swiper>
			</view>	
			<LoadingView>
				<view class="subMenu">
					<view v-for="item in subMenu" class="subMenuItem">
						<image class="subMenuImg" :src="item.img"></image>
						<view class="subMenuText">{{item.name}}</view>
					</view>
				</view>
				<view>
					<template v-for="(item,index) in componentData">
						<view v-if="item.title">
							<ItemTitle :key="item.page_key+index" :left="item.title" :right="item.title1" :more="item.more==1"></ItemTitle>
						</view>
						<view v-if="item.component =='ItemNew'">
							<ItemNew :key="item.page_key+index" :itemData="item"></ItemNew>
						</view>
						<view v-else-if="item.component =='ItemScrollView'">
							<ItemScrollView :key="item.page_key+index" :itemData="item"></ItemScrollView>
						</view>
						<view v-else-if="item.component =='ItemContentList'">
							<ItemContentList :key="item.page_key+index" :itemData="item"></ItemContentList>
						</view>
						<view v-else-if="item.component =='SwiperImg'">
							<SwiperImg :key="item.page_key+index" :itemData="item"></SwiperImg>
						</view>
						<view v-else-if="item.component =='ItemContentOne'">
							<ItemContentOne :key="item.page_key+index" :itemData="item"></ItemContentOne>
						</view>
						<view v-else-if="item.component =='ItemContentTitle'">
							<ItemContentTitle :key="item.page_key+index" :itemData="item"></ItemContentTitle>
						</view>
						<view v-else-if="item.component =='ItemContentTwo'">
							<ItemContentTwo :key="item.page_key+index" :itemData="item"></ItemContentTwo>
						</view>
						<view v-else-if="item.component =='ItemList'">
							<ItemList :key="item.page_key+index" :itemData="item"></ItemList>
						</view>
						<view v-else-if="item.component =='OneImg'">
							<OneImg :key="item.page_key+index" :itemData="item"></OneImg>
						</view>
						<view v-else-if="item.component =='ImgBanner'">
							<ImgBanner :key="item.page_key+index" :itemData="item"></ImgBanner>
						</view>
					</template>
				</view>
			</LoadingView>
		</view>
</template>

<script>
	import { ref } from 'vue';
	import LoadingView from '@/utill/LoadingView.vue'
	import SwiperBanner from '@/components/Img/swiperBanner.vue';
	import ItemContentList from '@/components/item/itemContentList.vue';
	import ItemContentOne from '@/components/item/itemContentOne.vue';
	import ItemContentTitle from '@/components/item/itemContentTitle.vue';
	import ItemContentTwo from '@/components/item/itemContentTwo.vue';
	import ItemList from '@/components/item/itemList.vue';
	import ItemNew from '@/components/item/itemNew.vue';
	import ItemScrollView from "@/components/item/itemScrollView.vue";
	import ItemTitle from '@/components/item/itemTitle.vue';
	import ImgBanner from '@/components/Img/imgBanner.vue';
	import OneImg from '@/components/Img/oneImg.vue';
	import SwiperImg from '@/components/Img/swiperImg.vue';
	
	export default{
		components:{
			LoadingView,
			ItemScrollView,
			ItemContentList,
			SwiperBanner,
			ItemTitle,
			ItemNew,
			ItemList,
			ImgBanner,
			OneImg,
			SwiperImg,
			ItemContentOne,
			ItemContentTitle,
			ItemContentTwo
			
		},
		props:{
			mainData:{
				type:Array,
				default:[]
			},
			height:{
				type:Number,
				default:0
			},
			subMenu:{
				type:Array,
				default:[]
			}
			
		},
		emits:[
			
		],
		setup(props, context) {
			const banner = ref({});
			banner.value = props.mainData[0].components.filter(item=>item.component == 'SwiperBanner')[0] ? props.mainData[0].components.filter(item=>item.component == 'SwiperBanner')[0] : {id:0};
			const componentData = ref(props.mainData[0].components.filter(item=>item.id !== banner.value.id))
			return{
				banner,
				componentData
			}	
		},
		methods:{
			
		},
	}
</script>

<style lang="scss" scoped>
	/*下面轮播图的css*/
	.swiper-content{
		margin-top: 3rpx;
		width: 100vw;
	}
	/*小菜单css*/
	.subMenu{
		display: grid;
		grid-template-columns: repeat(4,1fr);
		gap: 10rpx;
		width: 100vw;
		margin-top:30rpx;
		padding:0 25rpx;
		.subMenuItem{				
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				.subMenuImg{
					width: 80%;
					height: 100rpx;
					margin-bottom: 10rpx;
				}
				.subMenuText{
					text-align: center;
					font-size: 20rpx;
					
				}
		}
	}
</style>
