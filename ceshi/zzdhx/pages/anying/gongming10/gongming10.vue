<template>
	<view class="content">
		<view class="title"><text>伊甸零式希望乐园共鸣之章1</text></view>
		<view class="text-area">
			<view class="text-title"><text>完成六属性激活后，一行人使空无大地重新取回了生机。另一方面，盖娅发现了神秘的水晶，便认为可能使自己恢复记忆，于是就将这块比叉子还重的水晶拿了回来。做好思想准备的暗之战士窥视了水晶的内部，水晶中便映射出了第二次调查作战中所经历过的战斗景象。最初的食罪灵伊甸以及隐藏在暗之巫女盖娅的谜团至今仍然不明。如今暗之战士将要再次体验围绕着伊甸所展开的进一步的攻防战。</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/gongming100.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：甘多夫雷平原</text></view>
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
				<view class="text-text-text"><text>神典石：30</text></view>
				<view class="text-text-text"><text>新手奖励：100</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：80级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于470</text></view>
				<view class="text-text-text"><text>允许中途加入：否</text></view>
				<view class="text-text-text"><text>允许解除人数限制：否</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>共鸣之种</text></view>
				<view class="text-text-text"><text>战斗精英和魔法导师（除设限特职）80级</text></view>
				<view class="text-text-text"><text>琳</text></view>
				<view class="text-text-text"><text>空无大地X:6.0,Y:5.9</text></view>
				<view class="text-text-text"><text>前置任务：冰晶再会</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text><strong>2.拉姆</strong></text></view>
				 
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/gongming104.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱1中的战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/gongming105.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱2中的战利品：</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/gongming106.png" mode="aspectFit"></image></view>
				
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