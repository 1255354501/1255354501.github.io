<template>
	<view class="content">
		<view class="title"><text>无限城的死斗</text></view>
		<view class="text-area">
			<view class="text-title"><text>艾欧泽亚的时光一如既往地前进，然而寂静的古城之中却出现了剑豪的身影。吉尔伽美什手持天下武器，誓与好敌手一决高下。然孤独时日一久，却也渴望身边有一交心友人。</text></view><view class="text-title"><text>对友人的思念仅凭一只小鸡无法填补。若向天祈愿能够召唤神明，想必挂心的友人也必将来临。光芒闪现之后，友神恩奇都从天而降。亲友到来，百力在身，胜负较量，现在才刚刚开始！</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/wuxiancheng120.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：无限城古堡</text></view>
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
				
				<view class="text-text-text"><text>超越之力：保持10%</text></view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>神典石：15</text></view>
				<view class="text-text-text"><text>新手奖励：80</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：50级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于90</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>随风而逝的结局</text></view>
				<view class="text-text-text"><text>战斗精英魔法导师50级</text></view>
				<view class="text-text-text"><text>茱莉安</text></view>
				<view class="text-text-text"><text>乌尔达哈来生回廊X:12.1,Y:11.8</text></view>
				<view class="text-text-text"><text>前置任务：在血液中蔓延的诅咒</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.吉尔伽美什，恩奇都</text></view>
				<view class="text-text-text"><text>进门两个怪拉开即可，先打鸟人(恩奇都)，吉尔伽美什无视。这个副本里的连线是靠近！连线是靠近！连线是靠近！变鸡的人要去踩风(不踩好像是会炸)，其他人注意躲开旋风，比较疼。</text></view><view class="text-text-text"><text>P2会点名一名治疗读条“捕获”，当发现BOSS读条时，治疗远离BOSS，其他DPS及时转火解救治疗，如果治疗的锁链离BOSS太近，请当前T带BOSS远离被锁住的治疗，距离过近会给锁链上减伤buff。(小声：被锁住的治疗可以顺便拍几张皂片，那个表情据说很销魂)其他出啥躲啥，有啥打啥即可，龙头之后的AOE伤害是以剩余龙头的数量决定的。</text></view> 
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/wuxiancheng124.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱1中的战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/wuxiancheng125.png" mode="aspectFit"></image></view>
				 
				
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