<template>
	<CustomNav title="手机卡"></CustomNav>
	<view class="shopContainer" :style="{height:screenHeight+'px'}">
		<view class="shopLeft">
			<uni-collapse accordion>
				<uni-collapse-item :show-arrow="false" :border="true" show-animation v-for="item in categorys" :open="item.id == cutturn">
					<template v-slot:title>
					        <view class="custom-title" :class="{'custom-title-active animate__pulse': item.id == cutturn}">{{item.name}}</view>
					</template>
					<view @click="menu.hot ? hotCategoryActive(item.id,menu.id,menu.name) : categoryActive(item.id,menu.id)" class="shopBt" v-for="menu in item.child">
						<view class="shopBtText" :class="{'activeShopBt animate__pulse': item.id === cutturn && menu.id === cutturnCategory }">{{menu.name}}</view>
						<view :class="{'shopBtShow animate__slideInUp': item.id === cutturn && menu.id === cutturnCategory}"></view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<scroll-view class="shopRight" scroll-y>
			<view class="itemContent" v-for="item in activeUsimList" @click="clickUsimDetail(item)">
				<view class="usimTop"><view class="usimTopRight">通信社</view><view class="usimTopLeft"><image src="/static/usim/company.png"></image><view class="usimTopLeftText">{{item.mobile_name}}</view></view></view>
				<view class="usimTitle">{{item.title}}</view>
				<view class="usimContent">
					<view class="usimDt"><image src="/static/usim/phone1.png"></image><text class="usimText">{{item.tell_time}}</text></view>
					<view class="usimCenterSolid"></view>
					<view class="usimDt"><image src="/static/usim/data1.png"></image><text class="usimText">{{item.data}}</text></view>
					<view class="usimDt"><image src="/static/usim/msn1.png"></image><text class="usimText">{{item.mns}}</text></view>
					<view class="usimCenterSolid"></view>
					<view class="usimDt"><image src="/static/usim/type1.png"></image><text class="usimText">{{item.mobile_type}}</text></view>
				</view>
				<view class="usimBottom">
					<image src="/static/usim/monthPrice.png"></image>
					<view class="usimBottomText">{{formattedPrice(item.price)}}<text class="hanyuan">韩元</text></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import CustomNav from "@/components/custom-nav-bar/customNav.vue";
import {getNaviBar} from '@/utill/systemData.js'
import { ref} from "vue";
import { servicePost } from "@/utill/request.js";
import {formattedPrice} from "@/utill/common.js";
import { listTrees } from '@/utill/common';
export default{
	components:{
		CustomNav,
	},
	props:{
		
	},
	setup(props, context) {
		//클릭된 지역카테고리
		const cutturn = ref(0)
		//클릭된 도시
		const cutturnCategory = ref(1)
		//아래부분 높이
		const screenHeight = ref(getNaviBar().screen());
		//계약카테고리
		const categorys = ref([]);
		//계약상품list
		const usimtList = ref([]);
		//클릭메뉴시 계약삼품 리스트 activeAgreementList 
		const activeUsimList = ref([]);
		
		return {
			formattedPrice,
			cutturn,
			cutturnCategory,
			screenHeight,
			categorys,
			usimtList,
			activeUsimList
		}
	},
	methods:{
		//유심카테고리 클릭시 이벤트부분
		categoryActive(cutturnId,cutturnCategory){
			this.cutturn = cutturnId;
			this.cutturnCategory = cutturnCategory;
			this.activeUsimList = this.usimtList.filter((item)=>item.category_id == cutturnCategory);
		},
		//핫한유심 카테고리 클릭시 이벤트부분
		hotCategoryActive(cutturnId,cutturnCategory,name){
			this.cutturn = cutturnId;
			this.cutturnCategory = cutturnCategory;
			if(name == "推荐套餐"){
				this.activeUsimList = this.usimtList.filter((item)=>item.mobile_name.endsWith("알뜰통신") && item.hot == 1);
			}else if(name == "预付卡"){
				this.activeUsimList = this.usimtList.filter((item)=>item.mobile_name.endsWith("선불통신") && item.hot == 1);
			}
		},
		clickUsimDetail(item){
			uni.setStorageSync('usimItem',{
				 usim:item
			})
			uni.navigateTo({
			        url: `/pages/itemPage/usimItemPage?id=${item.id}` // 이동할 페이지 경로
			});
		}
	},
	async onLoad(){
		const usimData = uni.getStorageSync('usimListData');
		const now = Date.now();
		if(usimData && usimData.expiry > now){
			this.categorys = usimData.category;
			this.usimtList = usimData.usimList;
			if(this.categorys[0]){
				if(this.categorys[0].child[0]){
					if(this.categorys[0].child[0].hot){
						this.hotCategoryActive(this.categorys[0].id,this.categorys[0].child[0].id,this.categorys[0].child[0].name);
					}else{
						this.categoryActive(this.categorys[0].id,this.categorys[0].child[0].id);
					}
				}
			}
			return
		}
		let list = await servicePost('app/usim/list');
		let category = listTrees(list.category);
		 // 캐시에 저장 (만료 시간: 24시간)
		const expiry = now + 24 * 60 * 60 * 1000; // 24시간 후
		uni.setStorageSync('usimListData', {
		    category: category,
			usimList : list.usims,
			expiry
		});
		this.categorys = category;
		this.usimtList = list.usims;
		if(this.categorys[0]){
			if(this.categorys[0].child[0]){
				if(this.categorys[0].child[0].hot){
					this.hotCategoryActive(this.categorys[0].id,this.categorys[0].child[0].id,this.categorys[0].child[0].name);
				}else{
					this.categoryActive(this.categorys[0].id,this.categorys[0].child[0].id);
				}
			}
		}
	}
	
}
</script>

<style lang="scss" scoped>
	  .hanyuan{
		 font-size: 22rpx;
		 color: rgb(110, 100, 110);
		 margin-left: 5rpx;
	  }
	  .uni-collapse-item__title-box{
	  	font-weight: bold;
	  	color: #DA8C05;
	  }
	  .hoverPhone{
	  	color: royalblue;
	  	font-weight: bold;
	  }
	  .custom-title{
	  	width: 100%;
	  	height: 85rpx;
	  	font-size: 26rpx;
	  	font-weight: bold;
	  	color: rgb(60,60,60);
	  	padding-left: 20rpx;
	  	line-height: 85rpx;
	  	letter-spacing: 3rpx; /* 글자 간격 넓게 */
	  	text-shadow: 3rpx 3rpx 6rpx rgba(50, 50, 50, 0.2); /* 부드러운 그림자 */
	  }
	  .custom-title-active{
	  	color:rgb(51, 153, 255);
	  	font-size: 29rpx;
	  	letter-spacing: 2rpx; /* 글자 간격 넓게 */
	  	text-shadow: 3rpx 3rpx 6rpx rgba(50, 50, 50, 0.2); /* 부드러운 그림자 */
	  }
	  .shopContainer{
	  	width: 100%;
	  	padding-top: 20rpx;
	  	display: flex;
	  	flex-direction: row;
	  	.shopLeft{
	  		width: 230rpx;
	  		height: 100%;
	  		.shopBt{
	  			width: 100%;
	  			height: 100rpx;
	  			position: relative;			
	  			.shopBtText{
	  				width: 100%;
	  				height: 100rpx;
	  				line-height: 100rpx;
	  				font-size: 26rpx;
	  				text-align: center;
	  				color: rgb(120, 120, 120);
	  				font-weight: bold;
	  				letter-spacing: 3rpx; /* 글자 간격 넓게 */
	  				text-shadow: 3rpx 3rpx 6rpx rgba(50, 50, 50, 0.2); /* 부드러운 그림자 */
	  			}
	  			.activeShopBt{
	  				font-size: 30rpx;
	  				font-weight: bold;
	  				color:rgb(255, 102, 102);
	  				background-color: rgb(250, 250, 250);
	  				letter-spacing: 2rpx; /* 글자 간격 넓게 */
	  				text-shadow: 3rpx 3rpx 6rpx rgba(50, 50, 50, 0.2); /* 부드러운 그림자 */
	  			}
	  			.shopBtShow{
	  				width: 60%;
	  				height: 8rpx; /* 굵은 줄의 두께 */
	  				position: absolute;
	  				bottom: 10rpx; /* 텍스트 아래로 5px 간격 */
	  				left: 20%;
	  				background-color: rgb(51, 153, 255); /* 줄의 기본 색상 */
	  				border-radius: 10rpx;
	  			}
	  		}
	  	}
	  	.shopRight{
	  		width: 520rpx;
	  		height: 100%;
			background-color: rgb(250, 250, 250);
			padding-top: 30rpx;
	  		.itemContent{
	  			width: 480rpx;
	  			height: 500rpx;
				margin-left: 20rpx;
				background-color: white;
				margin-bottom: 30rpx;
				border-radius: 15rpx;
				padding-left: 20rpx;
				padding-top: 20rpx;
				.usimTop{
					width: 440rpx;
					height: 80rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.usimTopLeft{
						width: 260rpx;
						height: 70rpx;
						display: flex;
						align-items: center;
						background-color: rgb(248, 248, 248);
						border-radius: 50rpx;
						padding-left: 20rpx;
						image{
							width: 50rpx;
							height: 50rpx;
						}
						.usimTopLeftText{
							width: 180rpx;
							height: 60rpx;
							line-height: 70rpx;
							font-size: 27rpx;
							text-align: right;
							padding-right: 15rpx;
							letter-spacing: 3rpx;
							color: rgb(222, 11, 124);
						}
					}
					.usimTopRight{
						width: 180rpx;
						height: 60rpx;
						line-height: 70rpx;
						font-size: 33;
						letter-spacing: 10rpx;
						color: rgb(150, 150, 150);
						font-weight: bold;
					}
				}
				.usimTitle{
					width: 440rpx;
					height: 100rpx;
					margin-top: 20rpx;
					font-size: 32rpx;
					color: rgb(50, 50, 50);
					font-weight: bold;
					letter-spacing: 8rpx; /* 글자 간격 넓게 */
					line-height: 60rpx;
				}
				.usimContent{
					margin-top: 20rpx;
					width: 440rpx;
					display: flex;
					height: 130rpx;
					justify-content: space-between;
					flex-wrap: wrap;
					.usimDt{
						width: 190rpx;
						height: 60rpx;
						display: flex;
						align-items: center;
						image{
							width: 30rpx;
							height: 30rpx;
						}
						.usimText{
							display: inline-block;
							width: 150rpx;
							height: 40rpx;
							font-size: 24rpx;
							padding-left: 30rpx;
							color: rgb(150, 150, 150);
							letter-spacing: 5rpx; /* 글자 간격 넓게 */
							line-height: 45rpx;		
						}
					}
					.usimCenterSolid{
						width: 5rpx;
						height: 40rpx;
						margin-top: 10rpx;
						background-color: rgb(230, 230, 230);
					}
				}
				.usimBottom{
					width: 440rpx;
					height: 100rpx;
					display: flex;
					align-items: center;
					image{
						width: 80rpx;
						height: 80rpx;
					}
					.usimBottomText{
						width: 350rpx;
						height: 80rpx;
						padding-left: 30rpx;
						font-size: 35rpx;
						line-height: 90rpx;
						letter-spacing: 8rpx; /* 글자 간격 넓게 */
						text-shadow: 2rpx 2rpx 3rpx rgba(50, 50, 50, 0.2); /* 부드러운 그림자 */
						color: rgb(51, 153, 255);
					}
				}
	  		}
	  	}
	  }     
</style>
