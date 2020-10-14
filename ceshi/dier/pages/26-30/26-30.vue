<template>
	<view>
		<view class="content">
			<view class="title"><text>26. 你需要输入最小的数字，那么最小的四位数是谁呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/26.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：输入" 1”点击确定</text></view>
		</view>
		<view class="content">
			<view class="title"><text>27．你需要哄宝宝入睡，那么选择那哪个道具最合适呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/27.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：左右晃动手机</text></view>
		</view>
		<view class="content">
			<view class="title"><text>28．你需要找出规律来，考验你数学知识的时候到了。</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/28.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：170</text></view>
		</view>
		<view class="content">
			<view class="title"><text>29．移动2根火柴，得出最小的数是多少？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/29.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：-9118</text></view>
		</view>
		<view class="content">
			<view class="title"><text>30. 小明想喝果粒橙，果粒橙就在旁边，但是怎么给小明呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/30.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：先摇晃手机，再将果粒橙给小明</text></view>
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