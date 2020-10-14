<template>
	<view>
		<view class="content">
			<view class="title"><text>6.找规律，请问下一个数是几</text></view>
			<view class="pic"><image class="img" src="/static/naodong/6.png" mode="aspectFit" /></view>
			<view class="text"><text>答案：170（86X2-2=170）</text></view>
		</view>
		<view class="content">
			<view class="title"><text>7.请把篮球放进篮筐，但是该怎么做才能将篮球放进篮筐呢？</text></view>
			<view class="pic"><image class="img" src="/static/naodong/7.png" mode="aspectFit" /></view>
			<view class="text"><text>答案：把篮球拖到篮筐中间</text></view>
		</view>
		<view class="content">
			<view class="title"><text>8.哪一个耳朵和兔子玩起来的而过最想？</text></view>
			<view class="pic"><image class="img" src="/static/naodong/8.png" mode="aspectFit" /></view>
			<view class="text"><text>答案：点击兔子右耳</text></view>
		</view>
		<view class="content">
			<view class="title"><text>9.请问汽车停在几号车位</text></view>
			<view class="pic"><image class="img" src="/static/naodong/9.png" mode="aspectFit" /></view>
			<view class="text"><text>答案：41（把汽车移开）</text></view>
		</view>
		<view class="content">
			<view class="title"><text>10.没人陪他玩，小狗无聊怎么办？</text></view>
			<view class="pic"><image class="img" src="/static/naodong/10.png" mode="aspectFit" /></view>
			<view class="text"><text>答案：长按小狗，点击出现的复制按钮</text></view>
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
