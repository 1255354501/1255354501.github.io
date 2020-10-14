<template>
	<view>
		<view class="content">
			<view class="title"><text>36. 你需要数一数从1写到199，一共写了多少个1，但是到底该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/36.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：140</text></view>
		</view>
		<view class="content">
			<view class="title"><text>37.你需要数一数一共有多少个三角形，但是到底该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/37.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：7</text></view>
		</view>
		<view class="content">
			<view class="title"><text>38. 你需找到一个六边形，但是到底该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/38.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：长方形和梯形组合在一起</text></view>
		</view>
		<view class="content">
			<view class="title"><text>39. 你需要数一数一共有几只小鸡，但是到底该怎么做呢?</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/39.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：12</text></view>
		</view>
		<view class="content">
			<view class="title"><text>40. 你需要安慰伤心的狗狗，让它快乐起来，但是到底该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/40.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：用手指在狗狗头上滑动</text></view>
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