<template>
	<view class="content">
		<view class="title">
			<text>和平精英载具介绍</text>
		</view>
		<view class="wuqi">
			<view class="wuqititle"><text>载具：</text></view>
			<view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju0.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>Buggy沙滩车</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju1.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>Dacia轿车</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju2.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>三人摩托</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju3.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>双人摩托</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju4.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>PG-117快艇</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju5.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>UAZ越野车</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju6.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>无蓬皮卡</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju7.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>小型摩托车</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju8.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>雨林三轮车</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju9.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>轻型雪地摩托</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju10.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>有蓬皮卡</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju11.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>摩托艇</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju12.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>Mirado跑车</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju13.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>LadaNiva越野车</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju14.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>迷你巴士</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju15.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>罗尼皮卡</text></view>
			</view><view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/hpjy/zaiju16.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>重型雪地摩托</text></view>
			</view>
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
					  adUnitId: "5c77dhipc8j11gb57h"
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
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding-bottom: 60rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
    .title{
		display: flex;
		justify-content: center;
		font-size: 60rpx;
	}
	.wuqititle{
		margin-top: 30rpx;
		font-size: 50rpx;
		color: #007AFF;
	}
	.qxpic{
		display: flex;
		justify-content: center;
	}
	.qxtitle{
		display: flex;
		justify-content: center;
		font-size: 50rpx;
	}
	.qxcontent{
		padding-top: 10rpx;
		padding-bottom: 10rpx;
	}
</style>