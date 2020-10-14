<template>
	<view class="content">
		<view class="title"><text>索菲娅歼灭战</text></view>
		<view class="text-area">
			<view class="text-title"><text>在南方大陆美拉西迪亚，曾有过一个聚集了多个不同民族的国家。相传，那个国家为了统合根源、文化都不相同的各个民族，而推崇信仰着掌管调和和均衡的女神，即三斗神之一的女神“索菲娅”。现如今，在沉睡了5000多年后醒来的信徒的帮助下，女神有完全复活的可能。解决掉狂热的信徒，消灭女神索菲娅！</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/suofeiya100.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：抑制绝境P1T6</text></view>
		    	<view class="text-text-text"><text>任务时限：60分钟</text></view>
		    	<view class="text-text-text" style="display: flex;align-items: center;text-indent: 80rpx;">
					<view class="text-text-text"><text>队伍构成：</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fashi.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhiliao.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/jinzhan.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>4</text></view>
				</view>
				
				<view class="text-text-text"><text>超越之力：每次失败会增加10%（最多5次）</text></view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>神典石：15</text></view>
				<view class="text-text-text"><text>新手奖励：100</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：60级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于220</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>金色的灾厄</text></view>
				<view class="text-text-text"><text>战斗精英魔法导师60级</text></view>
				<view class="text-text-text"><text>蛇心</text></view>
				<view class="text-text-text"><text>石之家X:6.1,Y:5.2</text></view>
				<view class="text-text-text"><text>前置任务：赌上行星的命运</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.索菲娅</text></view>
			
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/suofeiya104.png" mode="aspectFit"></image></view>
				 
				
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