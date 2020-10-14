<template>
	<view class="content">
		<view class="title"><text>亚历山大机神城律动之章3</text></view>
		<view class="text-area">
			<view class="text-title"><text>«英格玛秘典»最后的断章其实没有落入青蓝之手手中。但是，能够读懂秘典的哥布林族女孩朗德洛克斯被掳走了。为了救出朗德洛克斯，光之战士们动身前往左腕部“弥达斯”的中枢地带！</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/lvdong100.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：弥达斯之臂</text></view>
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
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>神典石：10</text></view>
				<view class="text-text-text"><text>新手奖励：100</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：60级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于200</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>暴君降临</text></view>
				<view class="text-text-text"><text>战斗精英魔法导师60级</text></view>
				<view class="text-text-text"><text>米黛</text></view>
				<view class="text-text-text"><text>龙堡内陆低地X:21.7,Y:18.9</text></view>
				<view class="text-text-text"><text>前置任务：疑惑与后悔</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.万事通奎克辛克斯</text></view>
				<view class="text-text-text"><text>基本出啥躲啥有啥打啥</text></view><view class="text-text-text"><text>进场左右各四个通道，灵性分散各走一边清理小怪即可，进最后的平台中间是boss，外围一圈有刺附加出血debuff不要走上去</text></view><view class="text-text-text"><text>齐射：对t死刑，注意减伤</text></view><view class="text-text-text"><text>哥布林波动炮：长形无范围提示的aoe，吃到附加感电debuff，注意引导不要面向人群</text></view><view class="text-text-text"><text>哥布林火花：全屏AOE</text></view><view class="text-text-text"><text>哥布火箭：随机点名玩家抓走进入场地四角的笼子，有以下几种</text></view><view class="text-text-text"><text>模式：</text></view><view class="text-text-text"><text>第一次固定点d，被点名者请自觉远离人群，boss会放出一个以点名者为中心的圆形眩晕aoe，然后把范围中的人全都抓走放进笼子，之后笼门会出现一个锁，在笼外的队友和被关的人请优先打掉笼子的锁</text></view><view class="text-text-text"><text>第二次固定点名d是笼内出小怪打掉</text></view><view class="text-text-text"><text>第三次固定点名t也是出小怪打掉</text></view><view class="text-text-text"><text>第四次固定点名奶，场中会放出毒气，奶可以走到笼子中地板上放出毒气的位置堵住如上循环</text></view><view class="text-text-text"><text>猫出真心打真心</text></view>
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/lvdong104.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱1中的战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/lvdong105.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱2中的战利品：</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/lvdong106.png" mode="aspectFit"></image></view>
				
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