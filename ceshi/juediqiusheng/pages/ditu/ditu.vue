<template>
	<view class="content">
		<view class="title">
			<text>绝地求生地图</text>
		</view>
		<view class="ditu">
			<view class="ditutitle"><text>经典老地图：</text></view>
			<view class="ditupic"><image src="http://s1.catelyn.info/zjxcx/jdqs/ldt.png" mode="aspectFill"></image></view>
			<view class="ditutitle"><text>分析：</text></view>
			<view class="ditupic"><image src="http://s1.catelyn.info/zjxcx/jdqs/ldtfx.png" mode="aspectFill"></image></view>
		</view>
		<view class="ditu">
			<view class="ditutitle"><text>沙漠地图：</text></view>
			<view class="ditupic"><image src="http://s1.catelyn.info/zjxcx/jdqs/smdt.png" mode="aspectFill"></image></view>
			<view class="ditutitle"><text>分析：</text></view>
			<view class="ditupic"><image src="http://s1.catelyn.info/zjxcx/jdqs/smdtfx.png" mode="aspectFill"></image></view>
		</view>
		<view class="ditu">
			<view class="ditutitle"><text>萨诺图：</text></view>
			<view class="ditupic"><image src="http://s1.catelyn.info/zjxcx/jdqs/smdt.png" mode="aspectFill"></image></view>
			<view class="ditutitle"><text>图中圈出来的地方属于富中之富，人也是五米一满编，十米一独狼，适合追求刺激，巷战刚枪的朋友前往。</text></view> 
		</view>  
		<view class="ditu">
			<view class="ditutitle"><text>雪地地图</text></view>
			<view class="ditupic"><image src="http://s1.catelyn.info/zjxcx/jdqs/xddt.png" mode="aspectFill"></image></view>
			<view class="ditutitle"><text> 提示：红色为车库位置，总共有32个位置；黄色为载具位置，总共有262个位置；蓝色为船只位置，总共有个42位置。</text></view> 
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
					  adUnitId: "3vsg5uv23db1ll6392"
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
		padding-left: 20rpx;
		padding-right: 20rpx;
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
		/* justify-content: center; */
		margin-bottom: 20rpx;
	}
	.ditupic{
		display: flex;
		justify-content: center; 
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.ditupic image{
		width: 600rpx;
	}
		
</style>
