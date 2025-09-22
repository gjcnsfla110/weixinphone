<template>
	<CustomNav title="商品分类"></CustomNav>
	<view class="menuContent" :style="{height:swiperHeight+'px'}">
		<scroll-view class="menuLeft" :style="{height:swiperHeight+'px'}">
			<view class="menuList" v-for="item in menuData">
				<view v-if="item.menutitle" class="menuItem">
					<view v-for="(sub,index) in item.child" >
						<view v-if="index == 0" @click="subMenuTol(sub.id,item.id)" class="topText" 
						:class="{'activeTollColor' : item.id == activeBk}" >
							<TopTextTitle :color="item.id == activeBk ? item.color : 'black'">
								{{item.title}}
							</TopTextTitle>
							<view class="leftMenutext" :class="{'activeBackgroundColor animate__pulse' : sub.id == activeMenu}">
								{{sub.title}}
								<view :class="{'bottomShow animate__slideInUp' : sub.id == activeMenu}" :style="{backgroundColor:item.color}"></view>
							</view>
						</view>
						<view v-else @click="subMenuTol(sub.id,item.id)" class="leftMenutext" 
						:class="{'activeTollColor' : item.id == activeBk,'activeBackgroundColor animate__pulse' : sub.id == activeMenu}">
							{{sub.title}}
							<view :class="{'bottomShow animate__slideInUp' : sub.id == activeMenu}" :style="{backgroundColor:item.color}"></view>
						</view>
					</view>
				</view>
				<view v-else class="menuItem">
					<view v-for="sub in item.child" @click="subMenu(sub.id)" class="leftMenutext" 
					:class="{'activeBackgroundColor animate__pulse' : sub.id == activeMenu}">
						{{sub.title}} 
						<view :class="{'bottomShow animate__slideInUp' : sub.id == activeMenu}"></view>
					</view>
				</view>
			</view>
		</scroll-view>
		<scroll-view class="menuRight" :style="{height:swiperHeight+'px'}" scroll-y="true">
			<view class="rightMunu">
				<TopImg src="/images/testImg/banner3.jpg"></TopImg>
				<RightTitle>苹果手机</RightTitle>
				<RigthItmeList></RigthItmeList>
			</view>
		</scroll-view>
	</view>
</template>
<script setup>
import {getNaviBar,getOsPlatFrom} from "@/utill/systemData.js"
import CustomNav from "@/components/custom-nav-bar/customNav.vue"
import TopImg from "@/components/menu/rightTopImg.vue";
import TopTextTitle from "@/components/menu/leftTopText.vue"
import RightTitle from "@/components/menu/rightTopTitle.vue"
import RigthItmeList from "@/components/menu/rightItemList.vue"
import {ref} from "vue";
	const menuData = [
			{
				id:1,
				menutitle: false,
				title:"",
				color:"",
				child:[
					{
						id:1,
						title:"推荐",
					}
				]
			},
			{
				id:2,
				menutitle: true,
				title:"IPHONE",
				color:"rgb(239,209,12)",
				child:[
					{
						id:2,
						title:"ProMax"
					},
					{
						id:3,
						title:"Pro"
					},
					{
						id:4,
						title:"数字系列"
					},
					{
						id:5,
						title:"二手"
					}
				]
			},
			{
				id:3,
				menutitle: true,
				title:"SAMSUNG",
				color:"#1296db",
				child:[
					{
						id:6,
						title:"S系列"
					},
					{
						id:7,
						title:"Fold"
					},
					{
						id:8,
						title:"A系列"
					},
					{
						id:9,
						title:"二手"
					}
				]
			},
			{
				id:4,
				menutitle: true,
				title:"中国手机",
				color:"rgb(202,27,0)",
				child:[
					{
						id:10,
						title:"韩版机"
					},
					{
						id:11,
						title:"国内机"
					},
					{
						id:12,
						title:"二手"
					}
				]
			},
			{
				id:5,
				menutitle: false,
				title:"",
				color:"",
				child:[	
					{
						id:13,
						title:"手机分期"
					},
					{
						id:14,
						title:"平板电脑"
					},
					{
						id:15,
						title:"手表"
					},
					{
						id:16,
						title:"手机配件"
					},
				]
			}
			
		]
	//탑높이를 지정부분	
	const topHeight = getNaviBar().custumHeiht();
	//탑 밑에 스크롤 높이를 지정 함수 
	const swiperHeightr = ()=>getNaviBar().screen();
	const swiperHeight = ref(swiperHeightr());
	//이변수로 큰메뉴틀을 배경색상 및 큰메뉴글짜색상변경
	const activeBk = ref(1);
	//메뉴클릭시 효과변수
	const activeMenu = ref(1);
	//제목없는 메뉴클릭(예iphone값이툴없는 메뉴클릭)
	const subMenu = (id)=>{
		activeMenu.value = id;
		activeBk.value = -50;
	}
	//제목있는 메뉴 클릭시 (예iphone값이툴있는 메뉴클릭)
	const subMenuTol = (id,bkId)=>{
		activeMenu.value = id;
		activeBk.value = bkId;
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
