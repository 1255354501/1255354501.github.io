<template>
	<view class="content">
		<view class="title"><text>巴哈姆特大迷宫入侵之章4</text></view>
		<view class="text-area">
			<view class="text-title"><text>地下6329星码，阿莉塞等人终于到达了三号舰的作战室，可出现在他们眼前的竟是令人难以置信的光景。红月的光芒照耀在漂浮的平台上……他们仿佛回到了过去的决战之地……</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/ruqin130.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：诸神黄昏级三号舰作战室</text></view>
		    	<view class="text-text-text"><text>任务时限：90分钟</text></view>
		    	<view class="text-text-text" style="display: flex;align-items: center;text-indent: 80rpx;">
					<view class="text-text-text"><text>队伍构成：</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fashi.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhiliao.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/jinzhan.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>4</text></view>
				</view>
					<view class="text-text-text"><text>超越之力：保持20%</text></view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view> 
				<view class="text-text-text"><text>神典石：20</text></view>
				<view class="text-text-text"><text>新手奖励：100</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view> 
				<view class="text-text-text"><text>等级要求：50级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于105</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view> 
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view> 
				<view class="text-text-text"><text>向深渊再次启程</text></view>
				<view class="text-text-text"><text>战斗精英魔法导师50级</text></view>
				<view class="text-text-text"><text>于里昂热</text></view>
				<view class="text-text-text"><text>沙之家X:6.1,Y:5.0前置任务：</text></view>
				<view class="text-text-text"><text>前置任务：第七灵灾的真相</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2. 奈尔·神·达纳斯</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/ruqin134.png" mode="aspectFit"></image></view>
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/ruqin135.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱1中的战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/ruqin136.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱2中的战利品：</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/ruqin137.png" mode="aspectFit"></image></view>
				
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
		onLoad:function(){
			let self=this
			uni.getStorage({
			    key: 'ggg',
			    success: function (res) { 
					self.ggg=res.data; 
					if(res.data=="true"||res.data==true){
						const bannerAd = tt.createRewardedVideoAd({
						  adUnitId: "3gmo9echhk53v76s7h"
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
						        delta: 1
						    });
						  }
						});
					}
			    }
			}); 
		},
		methods: {
			
		}
	}
</script>

<style> 
@import url("/static/anying.css");
</style>