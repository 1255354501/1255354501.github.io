<template>
	<view class="content">
		<view class="title"><text>海德拉讨伐战</text></view>
		<view class="text-area">
			<view class="text-title"><text>乌尔达哈的人们都非常喜欢竞技场中的角斗，他们甚至在日影地修炼所中培养出强大的斗兽“海德拉”。不过由于灵灾的影响，修炼所已经多年处于关闭状态，人们都以为里面的魔兽已经由于食物不足而饿死了。可是谁都没有想到，海德拉竟然凭借一己之力将其他魔兽当作食粮生存了下来……</text></view><view class="text-title"><text>不过传说中的武器工匠盖罗尔特的观点很简单：这么坚韧的魔物，是用来试武器的绝佳对手。※战斗开始后无法更换手中的武器，所以在开始“复苏的上古武器”的任务战斗之前请务必检查是否装备了任务所需的武器。</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/haidela170.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：兽斗简</text></view>
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
				<view class="text-text-text"><text>神典石：10</text></view>
				<view class="text-text-text"><text>新手奖励：50</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：50级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于52</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>复苏的上古武器（吉光）</text></view>
				<view class="text-text-text"><text>忍者50级</text></view>
				<view class="text-text-text"><text>盖罗尔特</text></view>
				<view class="text-text-text"><text>黑衣森林北部林区X:30.3,Y:20.2</text></view>
				<view class="text-text-text"><text>前置任务：师与徒  传说中的武器工匠</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.海德拉</text></view>
				<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/haidela170.png" mode="aspectFit"></image></view>
				<view class="text-text-text"><text>°当boss移动到场地中间读条“恐惧迷雾”时，全员应在boss脚底集中避免吃到恐惧debuff。°无读条技能“三头政权”，对当前MT造成大量顺劈伤害，可由两个T重叠站位进行分摊处理。</text></view><view class="text-text-text"><text>°一段时间后场地内会出现小怪，dps请及时转火击杀。一段时间内小怪未被击杀则会对boss叠加伤害增加buff。</text></view> 
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/haidela174.png" mode="aspectFit"></image></view>
				 
				
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