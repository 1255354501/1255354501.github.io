<template>
	<view>
		<view class="content">
			<view class="title"><text>1.下面那个数字大呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/1.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：14</text></view>
		</view>
		<view class="content">
			<view class="title"><text>2.蝶、大象、小狗以及长颈鹿，他们谁最高呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/2.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：太阳</text></view>
		</view>
		<view class="content">
			<view class="title"><text>3.这里有留个一模一样的西瓜，那个才是与众不同的呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/3.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：移动西瓜，点击切好的西瓜</text></view>
		</view>
		<view class="content">
			<view class="title"><text>4.数一数，下面有几个三角形，考研你数学的时候到了。</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/4.png" mode="aspectFill" /></view>
			<view class="text"><text>答案:12</text></view>
		</view>
		<view class="content">
			<view class="title"><text>5.好热呀，快把风扇打开，但是风扇的线被剪短了.</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/5.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：点击红色按钮，两个手指摁住断了的电线两端</text></view>
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
