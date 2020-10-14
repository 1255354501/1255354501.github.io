<template>
	<view>
		<view class="content">
			<view class="title"><text>41. 你需要点一下，然后过关，但是到底该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/41.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：点击题目中的”一下“</text></view>
		</view>
		<view class="content">
			<view class="title"><text>42. 你需要发射火箭，但是到底该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/42.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：移开确定按钮，将火焰移到火箭下面</text></view>
		</view>
		<view class="content">
			<view class="title"><text>43. 你需要砸开核桃，但是到底该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/43.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：将题目中的”什么“移到核桃上面砸开核桃</text></view>
		</view>
		<view class="content">
			<view class="title"><text>44. 你需要拔萝卜，但是到底该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/44.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：移开土块</text></view>
		</view>
		<view class="content">
			<view class="title"><text>45. 你需要找出最大的数字，但是到底该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/45.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：把相同的数字叠合在一起，点击合成到最后的那个数字</text></view>
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

