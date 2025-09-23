<template>
	<CustomNav title="商品分类"></CustomNav>
	<view class="menuContent" :style="{height:swiperHeight+'px'}">
		<scroll-view class="menuLeft" :style="{height:swiperHeight+'px'}">
			<view class="menuList" v-for="item in menuData">
				<view v-if="item.child.length < 1" class="menuItem">
					<view @click="subMenu(item.id,item)" class="leftMenutext" 
					:class="{'activeBackgroundColor animate__pulse' : item.id == activeMenu}">
						{{item.name}} 
						<view :class="{'bottomShow animate__slideInUp' : item.id == activeMenu}"></view>
					</view>
				</view>
				<view v-else class="menuItem">
					<view v-for="(sub,index) in item.child" >
						<view v-if="index == 0" @click="subMenuTol(sub.id,item.id,sub)" class="topText" 
						:class="{'activeTollColor' : item.id == activeBk}" >
							<TopTextTitle :color="item.id == activeBk ? item.color : 'black'">
								{{item.name}}
							</TopTextTitle>
							<view class="leftMenutext" :class="{'activeBackgroundColor animate__pulse' : sub.id == activeMenu}">
								{{sub.name}}
								<view :class="{'bottomShow animate__slideInUp' : sub.id == activeMenu}" :style="{backgroundColor:item.color}"></view>
							</view>
						</view>
						<view v-else @click="subMenuTol(sub.id,item.id,sub)" class="leftMenutext" 
						:class="{'activeTollColor' : item.id == activeBk,'activeBackgroundColor animate__pulse' : sub.id == activeMenu}">
							{{sub.name}}
							<view :class="{'bottomShow animate__slideInUp' : sub.id == activeMenu}" :style="{backgroundColor:item.color}"></view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<scroll-view class="menuRight" :style="{height:swiperHeight+'px'}" scroll-y="true">
			<view class="rightMunu">
				<TopImg :src="categoryImg"></TopImg>
				<RightTitle>{{categoryName}}</RightTitle>
				<RightItemList></RightItemList>
			</view>
		</scroll-view>
	</view>
</template>
<script>
import {getNaviBar,getOsPlatFrom} from "@/utill/systemData.js"
import CustomNav from "@/components/custom-nav-bar/customNav.vue"
import TopImg from "@/components/menu/rightTopImg.vue";
import TopTextTitle from "@/components/menu/leftTopText.vue"
import RightTitle from "@/components/menu/rightTopTitle.vue"
import RightItemList from "@/components/menu/rightItemList.vue"
import { useMainStores } from "@/stores/mainData";
import {ref} from "vue";

export default{
	components:{
		CustomNav,
		TopImg,
		TopTextTitle,
		RightTitle,
		RightItemList
	},
	props:{
		
	},
	setup(props, context) {

		//pinia 에서 값을 갖고오기
		const mainStores = useMainStores();
		const {categoryMenu,categorySubmenu} = mainStores;
		//탑높이를 지정부분
		const topHeight = getNaviBar().custumHeiht();
		//탑 밑에 스크롤 높이를 지정 함수 
		const swiperHeightr = ()=>getNaviBar().screen();
		const swiperHeight = ref(swiperHeightr());
		//이변수로 큰메뉴틀을 배경색상 및 큰메뉴글짜색상변경
		const activeBk = ref(1);
		//메뉴클릭시 효과변수
		const activeMenu = ref(1);
		console.log(categoryMenu,categorySubmenu)
		//카테고리 메뉴
		const menuData = ref(categoryMenu);
		//카테고리 상품명 
		const categoryName = ref("");
		//카테고리 윗부분 이미지
		const categoryImg = ref("");
		return{
			mainStores,
			topHeight,
			swiperHeight,
			activeBk,
			activeMenu,
			menuData,
			categoryName,
			categoryImg
		}
	},
	methods:{
		//제목없는 메뉴클릭(예iphone값이툴없는 메뉴클릭)
		subMenu(id,item){
			this.activeMenu = id;
			this.activeBk = -50;
			this.categoryName = item.title;
			this.categoryImg = item.img;
		},
		//제목있는 메뉴 클릭시 (예iphone값이툴있는 메뉴클릭)
		subMenuTol(id,bkId,item){
			this.activeMenu = id;
			this.activeBk = bkId;
			this.categoryName = item.title;
			this.categoryImg = item.img;
		},
		// pinia 데이터를 받는 설정 부분
		async loadData(){
			if (!this.mainStores.isDataReady) {
			    try {
			        await this.mainStores.lodingMain();
			    } catch (error) {
			        console.error('Error reloading data:', error);
			    }
			}
		},
	},
	async onLoad() {
        try {
            await this.loadData();
			if (this.menuData.length > 0) {
			  const firstMenu = this.menuData[0].id;
			  const firstSub = this.menuData[0].child[0] ? this.menuData[0].child[0].id : 0;
			  this.subMenuTol(firstSub,firstMenu, this.menuData[0].child[0] ? this.menuData[0].child[0] : {title:"商品",img:""})
			}
        } catch (error) {
            console.error('Error in onLoad:', error);
        }
    }
}
	
</script>

<style lang="scss" scoped>
	.activeBackgroundColor{
		background-color: white;
		color: black;
		font-size: 26rpx;
	}
	.activeTollColor{
		background-color: white;
	}
	.menuContent{
			display: flex;
			flex-direction: row;
			.menuLeft{
				margin-top: 18rpx;
				width: 150rpx;
				background-color: rgb(248,248,248);
				font-size: 23rpx;
				color: rgb(100, 100, 100);
				text-align: center;
				border-top-right-radius: 10rpx;
				.menuList{
					width: 100%;
					.menuItem{
						width: 100%;
						.topText{
							width: 100%;
							height: 138rpx;
						}
						
						.leftMenutext{
							width: 100%;
							height: 68rpx;
							line-height: 50rpx;	
						    position: relative;
							.bottomShow{
								width: 60%;
								height: 8rpx; /* 굵은 줄의 두께 */
								position: absolute;
								bottom: 17rpx; /* 텍스트 아래로 5px 간격 */
								left: 20%;
								background-color: #1296db; /* 줄의 기본 색상 */
								border-radius: 10rpx;
							}
						}
					}
				}
				
			}
			.menuRight{
				width: 600rpx;
			}
	}	
</style>
