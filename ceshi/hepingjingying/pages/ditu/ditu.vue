<template>
	<view class="content">
		<view class="title">
			<text>和平精英地图</text>
		</view>
		<view class="ditu">
			<view class="ditutitle"><text>海岛地图</text></view>
			<view class="ditupic"><image src="http://s1.catelyn.info/zjxcx/hpjy/haidaoditu.png" mode="aspectFill"></image></view>
		</view>
		<view class="ditu">
			<view class="ditutitle"><text>沙漠地图</text></view>
			<view class="ditupic"><image src="http://s1.catelyn.info/zjxcx/hpjy/shamoditu.png" mode="aspectFill"></image></view>
		</view>
		<view class="ditu">
			<view class="ditutitle"><text>雨林地图</text></view>
			<view class="ditupic"><image src="/static/hpjy/yulinditu.png" mode="aspectFill"></image></view>
		</view>  
		<view class="ditu">
			<view class="ditutitle"><text>雪地地图</text></view>
			<view class="ditupic"><image src="http://s1.catelyn.info/zjxcx/hpjy/xuediditu.png" mode="aspectFill"></image></view>
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
	}
    .title{
		display: flex;
		justify-content: center;
		font-size: 60rpx;
	}
	.ditu{
		display: flex;
		flex-direction: column;
		margin-top: 30rpx;
		justify-content: center;
	}
	.ditutitle{
		display: flex;
		justify-content: center;
		margin-bottom: 20rpx;
	}
	.ditupic{
		display: flex;
		justify-content: center; 
	}
	.ditupic image{
		width: 600rpx;
	}
		
</style>
