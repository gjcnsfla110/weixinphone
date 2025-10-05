<template>
	<view class="listContainer">
		<CustomNav back="true" :topHeight="110">
			<scroll-view scroll-x class="menuList">
				<view class="menubutton" v-for="item in subMenus" @click="changeSubMenu(item.id)">
					<view class="top">
						<image :src="item.img" mode="scaleToFill"></image>
					</view>
					<view class="bottom" :style="{color : activeSubMenuId == item.id ? 'rgb(255, 128, 0)':'rgb(160, 160, 160)'}">
						{{item.name}}
						<view :class="{'bottomShow animate__slideInUp' : item.id == activeSubMenuId}"></view>
					</view>
					
				</view>
			</scroll-view>
		</CustomNav>
		<view class="itemList">
			<scroll-view  scroll-y="true" :style="{height:screenHeight+'px'}" style="background-color: rgb(247, 247, 247);"  @scrolltolower="downSrolltolower">
				<view class="listItem">	
						<view class="itemContent" v-for="item in itemList" @click="item.type == '二手商品' ? clickOldItemDetail(item.id) : clickNewItemDetail(item.id)">
								<view class="itemTop">
									<image :src="item.img" mode="scaleToFill"></image>
								</view>
								<view class="itemBottom">
									<view class="itemBottomTitle">{{item.title}}</view>
									<view class="itemBottom1"><view class="itemBottom1Right">{{item.color}}</view><view class="itemBottom1Left">{{item.storage}}</view></view>
									<view class="itemBottom2" v-if="item.type == '二手商品'"><text class="priceT">现价 </text><text class="price">{{formattedPrice(item.price2)}}</text> 韩元</view>
									<view class="itemBottom2" v-else><text class="priceT">现价 </text><text class="price">{{formattedPrice(item.price1)}}</text> 韩元</view>
								</view>
						</view>	
				</view>
				<view class="loading">
					<uni-load-more :status="loadingStatus" :iconSize="30" iconType="circle" :content-text="contentText" :color="color"></uni-load-more>
				</view>
				<view class="hiddenLoading">	
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import CustomNav from '@/components/custom-nav-bar/customNav.vue';
import {getNaviBar} from '@/utill/systemData.js'
import { servicePost } from '@/utill/request';
import {formattedPrice} from "@/utill/common.js";
import { ref } from 'vue';
export default{
	components:{
		CustomNav,
	},
	props:{
		
	},
	setup(props, context) {
		const screenHeight = getNaviBar().noTabScreen()-100;
		//로딩,더보기 등부분
		const loadingStatus = ref('more');
		const color = ref('rgb(255, 128, 0)');
		//윗부분에 서브메뉴 클릭아이디표시 
		const activeSubMenuId = ref(0);
		//윗부분 서브메뉴
		const subMenus = ref([]);
		//아이템리스트부분
		const itemList = ref([]);
		//페이징 부분
		const currentPage = ref(1);
		const limit = 10;
		return{
			servicePost,
			itemList,
			screenHeight,
			loadingStatus,
			contentText: {
				contentdown: '下拉可看更多商品~',
				contentrefresh: '加载中',
				contentnomore: '没有更多商品'
			},
			color,
			activeSubMenuId,
			currentPage,
			limit,
			subMenus,
			formattedPrice
		}
	},
	methods:{
		async fetchData(subMenuId,page,isRefresh = false){
			 if(this.loadingStatus == "loading") return
			 this.activeSubMenuId = subMenuId;
			 this.loadingStatus = "loading";
			 try{
				 const res = await this.servicePost('app/subMenuList/item/list',{subMenuId,page,limit:this.limit});
				 const {list, total} = res;
				 if (isRefresh) {
				       this.itemList = [];
				 }
				 this.itemList = [...this.itemList,...list];
				 if (this.itemList.length >= total || list.length < this.limit) {
				    this.loadingStatus = 'noMore';
				 } else {
				    this.loadingStatus = 'more';
				    currentPage.value = page + 1;
				 }
			 }catch(error){
				 console.log(error)
				 this.loadingStatus = 'noMore';
				 uni.showToast({ title: '加在商品失败！联系客服。', icon: 'none' });
			 }
		},
		changeSubMenu(id){
			this.activeSubMenuId = id;
			this.currentPage = 1;
			this.fetchData(id,1,true);
		},
		downSrolltolower(){
			if (this.loadingStatus === 'more') {
				this.fetchData(this.activeSubMenuId,this.currentPage);
			}
		},
		clickOldItemDetail(id){
			uni.navigateTo({
			        url: `/pages/itemPage/oldItemPage?id=${id}` // 이동할 페이지 경로
			});
		},
		clickNewItemDetail(id){
			uni.navigateTo({
			        url: `/pages/itemPage/newItemPage?id=${id}` // 이동할 페이지 경로
			});
		}
	},
	onLoad(op){
		 this.fetchData(op.id,1,true);
		 this.subMenus = JSON.parse(uni.getStorageSync('topSubMenu'));
	},
}
</script>

<style lang="scss" scoped>
	.listContainer{
		width: 100%;
		.menuList{
			width: 100%;
			height: 115px;
			white-space: nowrap;
			.menubutton{
				width: 250rpx;
				height: 100%;
				display: inline-block;
				.top{
					width: 250rpx;
					height: 75px;
					text-align: center;
					image{
						width: 120rpx;
						height: 70px;
						overflow: hidden;
						border-radius: 8rpx;
					}
				}
				.bottom{
					width: 250rpx;
					line-height: 20px;
					height: 30px;
					text-align: center;
					font-size: 26rpx;
					letter-spacing: 3rpx; /* 글자 간격 넓게 */
					text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
					position: relative;
					margin-bottom: 5px;
					.bottomShow{
						width: 130rpx;
						height: 8rpx; /* 굵은 줄의 두께 */
						position: absolute;
						bottom: 0; /* 텍스트 아래로 5px 간격 */
						left: 60rpx;
						background-color: rgb(153, 0, 0,0.8); /* 줄의 기본 색상 */
						border-radius: 10rpx;
					}
				}
				
			}
		}
	}
	.itemList{
		position: relative;
		.listItem{
				width: 100%;
				padding:25rpx 25rpx;
				display:grid;
				grid-template-columns: repeat(2,1fr);
				gap: 20rpx;
				.itemContent{
					width: 100%;
					height: 550rpx;
					background-color: white;
					border-radius: 15rpx;
					.itemTop{
						width: 100%;
						height: 300rpx;
						text-align: center;
						image{
							width: 75%;
							height: 280rpx;
							margin-top: 20rpx;
							border-radius: 10rpx;
							overflow: hidden;
						}
					}
					.itemBottom{
						height: 250rpx;
						width: 100%;
						.itemBottomTitle{
							width: 100%;
							height: 38rpx;
							margin-top: 32rpx;
							padding: 0 15rpx;				
							font-size: 30rpx;
							text-align: center;
							line-height: 38rpx;
							letter-spacing: 3rpx; /* 글자 간격 넓게 */
							text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
							overflow: hidden;
							text-overflow: ellipsis;
						}
						.itemBottom1{
							width: 90%;
							margin-left: 5%;
							margin-top: 20rpx;
							height: 60rpx;
							display: flex;
							align-items: center;
							border: 5rpx solid rgb(255, 51, 51);
							border-radius: 10rpx;
							.itemBottom1Left{
								width: 48%;
								height: 50rpx;
								border-left: 5rpx solid rgb(255, 51, 51);
								line-height: 50rpx;
								text-align: center;
								font-size: 30rpx;
								color: rgb(255, 128, 0);
								font-weight: bold;
								letter-spacing: 5rpx; /* 글자 간격 넓게 */
								text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
							}
							.itemBottom1Right{
								width: 50%;
								height: 50rpx;
								text-align: center;
								line-height: 50rpx;
								font-size: 30rpx;
								color: rgb(255, 128, 0);
								font-weight: bold;
								letter-spacing: 5rpx; /* 글자 간격 넓게 */
								text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
							}
						}
						.itemBottom2{
							width: 100%;
							height: 90rpx;
							text-align: center;
							line-height: 90rpx;
							font-size: 20rpx;
							color:rgb(102, 102, 255);
							.priceT{
								color: rgb(255, 51, 51);
								font-size: 26rpx;
								font-weight: bold;
								letter-spacing: 5rpx; /* 글자 간격 넓게 */
								text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
							}
							.price{
								font-size: 33rpx;
								color: rgb(80, 80, 80);
								letter-spacing: 4rpx; /* 글자 간격 넓게 */
								text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
							}
						}
					}
				}
			}
			.loading{
				height: 80rpx;
				width: 100%;
			}
			.hiddenLoading{
				height: 80rpx;
				margin-bottom: 15rpx;
			}
	}
</style>
