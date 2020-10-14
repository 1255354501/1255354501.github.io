<template>
	<view>
		<view class="content">
			<view class="title"><text>16. 下面有一些数字，你怎么才能组合出最大的数字呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/16.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：无穷数最大</text></view>
		</view>
		<view class="content">
			<view class="title"><text>17. 夜空里只有一轮弯月，那么小星星在哪里呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/17.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：晃动手机</text></view>
		</view>
		<view class="content">
			<view class="title"><text>18.鸡妈妈不见了，你需要帮助小鸡找到妈妈。</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/18.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：向左滑动屏幕</text></view>
		</view>
		<view class="content">
			<view class="title"><text>19. 乌龟与兔子又开始进行赛跑，而你需要赢得比赛。</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/19.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：把屏幕中的你指向兔子</text></view>
		</view>
		<view class="content">
			<view class="title"><text>20. 考验你数学的时候到了，一个西瓜切10刀最多能切多少块?</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/20.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：1024</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad:function(option){
			try{
				if(option.ggg=="true"){
					const bannerAd = tt.createRewardedVideoAd({
					  adUnitId: "325ofh1la2l32k7g0i"
					});
					  bannerAd.show().then(() => {
					      console.log("广告显示成功");
					    }).catch((err) => {
							bannerAd.load().then(() => {
							    console.log("手动加载成功");
							    return bannerAd.show();
							  });
					      console.log("广告组件出现问题", err);
					    });
					
					bannerAd.onClose((res) => {
					  if (!res.isEnded) {
					    uni.navigateBack({
					        delta: 9999
					    });
					  }
					});
				}
			}catch(e){}
			
			// console.log(61,this.gg)
			
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		display: block;
		padding-left: 40rpx;
		padding-top: 40rpx;
	}
	.pic{
		display: block;
		text-align: center;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
   .title{
	   padding-right: 20rpx;
   }
   .pic .img{
	   width: 200rpx;
   }
</style>