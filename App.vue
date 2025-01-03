<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/common/animate.css";
	@import "/common/common-style.scss";
	/* animate 사용부분 */
	:global(.animate__bounceInLeft) {
	  animation-duration: 1.5s;
	}
	:global(.animate__bounceInRight) {
	  animation-duration: 1.5s;
	}
	:global(.animate__heartBeat){
	  animation-duration: 2s;
	}
	:global(.animate__slideInUp){
	  animation-duration: 2s;
	}
	:global(.animate__pulse){
	  animation-duration: 0.5s;
	}
	
	/*hot인덱스 위에3개메뉴바를위한 css*/
	 .hotSubmenu{
			height: 50px;
			width: 100vw;
			overflow-x: auto;
			white-space: nowrap;					
	}
	.hotSubmenuTitle{
				height: 47px;
				width: 33.33%; /* 각 항목이 1/3 너비 차지 */
				text-align: center; /* 텍스트 가운데 정렬 */
				line-height: 50px;
				display: inline-block;
				position: relative;
				
	}
	.hotBottomBorder {
				  width: 20%;
				  height: 10rpx; /* 굵은 줄의 두께 */
				  position: absolute;
				  bottom: -3rpx; /* 텍스트 아래로 5px 간격 */
				  left: 40%;
				  background-color: #1296db; /* 줄의 기본 색상 */
	}
</style>
