<template>
	<view class="content">
		<view class="title"><text>利维亚桑歼灭战</text></view>
		<view class="text-area">
			<view class="text-title"><text>鱼人族是在以苍茫洋为主要生息地的海洋种族，他们崇拜的蛮神是掌管四海之水的利维亚桑。现在他们终于将水神召唤到了现世中来，凶暴的水神准备引发大海啸，利姆萨·罗敏萨正处于万分危急之中。</text></view><view class="text-title"><text>在危机面前，黑涡团倾尽全力却也没有取得多少成果。不过目前仍有一丝希望，通过两艘军舰组合成的双体船，再配上属性转换装置来防御海水的冲击，这样就有机会与水神一决高下。</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/weiyasang50.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：对利维亚桑双体船</text></view>
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
				<view class="text-text-text"><text>新手奖励：75</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：50级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于60</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>决战利姆萨·罗敏萨</text></view>
				<view class="text-text-text"><text>战斗精英和魔法导师（除设限特职）50级</text></view>
				<view class="text-text-text"><text>爱因扎尔</text></view>
				<view class="text-text-text"><text>&lt;黑涡团正漩将&gt;</text></view>
				<view class="text-text-text"><text>拉诺西亚低地X:24.6,Y:33.2前置任务：</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.利维亚桑</text></view>
			 
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/weiyasang54.png" mode="aspectFit"></image></view>
				 
				
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