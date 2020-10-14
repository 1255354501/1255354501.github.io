<template>
	<view>
		<view class="content">
			<view class="title"><text>31. 小明想要打开盒子，但是如何操作才是正确的呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/31.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：把盒盖上滑</text></view>
		</view>
		<view class="content">
			<view class="title"><text>32请算一算答案，考验数学的时候又到了，不过可能考验的是脑筋急转弯。</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/32.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：1</text></view>
		</view>
		<view class="content">
			<view class="title"><text>33. 你需要点击蓝色按钮10次，点击红色按钮1次。</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/33.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：1</text></view>
		</view>
		<view class="content">
			<view class="title"><text>34．你需要让天平保持平衡，但是到底该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/34.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：把天平上的砝码都拿下来</text></view>
		</view>
		<view class="content">
			<view class="title"><text>35. 你需要数一数他有几根头发，但是到底该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/35.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：4，(点击风扇红色按钮)</text></view>
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
   .pic .img{
	   width: 200rpx;
   }
</style>