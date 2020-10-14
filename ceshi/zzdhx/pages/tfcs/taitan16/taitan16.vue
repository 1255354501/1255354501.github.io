<template>
	<view class="content">
		<view class="title"><text>泰坦讨伐战</text></view>
		<view class="text-area">
			<view class="text-title"><text>受到原海雄旅团五英杰的认可后，冒险者成功掌握了打败蛮神泰坦的秘策。那便是通过蛮风以太之光直捣地灵族的总部——奥·哥摩罗山中的火口神殿。虽然这个作战有些大胆，但仍然有一试的价值。</text></view><view class="text-title"><text>在贤人雅·修特拉的力量下，蛮风以太之光成功启动，接下来就只有全力去迎战蛮神泰坦了！</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/taitan160.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：奥·哥摩罗火口神殿</text></view>
		    	<view class="text-text-text"><text>任务时限：60分钟</text></view>
		    	<view class="text-text-text" style="display: flex;align-items: center;text-indent: 80rpx;">
					<view class="text-text-text"><text>队伍构成：</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fashi.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>1</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhiliao.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>1</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/jinzhan.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
				</view>
				
				<view class="text-text-text"><text>超越之力：每次失败会增加10%（最多5次）</text></view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>新手奖励：2200金币  4200经验</text></view> 
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：34~36级</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view> 
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>愤怒土神泰坦</text></view>
				<view class="text-text-text"><text>所有（除设限特职）34级</text></view>
				<view class="text-text-text"><text>里奥尔</text></view>
				<view class="text-text-text"><text>拉诺西亚高地X:31.1,Y:24.0</text></view>
				<view class="text-text-text"><text>前置任务：口哨随风</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.泰坦</text></view>
				<view class="text-text-text"><text>*碎岩：无读条，对Mt方向释放的没有范围提示的扇形Aoe，请注意面向情况，注意减伤和回复。</text></view><view class="text-text-text"><text>怒震：无读条，全屏Aoe，注意回复。</text></view><view class="text-text-text"><text>大地粉碎：无读条，Boss跳上天，然后以场地中心区域为落点释放的全屏Aoe，受到的伤害随距离递减，请尽可能远离落点；注意此时外场会出现红色环形判定圈，Boss落地造成伤害后红色区域的地面会崩塌，请不要站在红色区域内，否则角色会掉落悬崖致死。</text></view><view class="text-text-text"><text>地裂：读条技能，可见范围的直线Aoe，附加击退效果，请走位回避；因为在大地粉碎后场地会变的越来越小，角色被这招打中容易直接被打下悬崖致死，请避免。</text></view><view class="text-text-text"><text>泰坦的核心：第二次大地粉碎后，Boss会无敌化，同时胸部露出泰坦的核心，请尽快集火打掉泰坦的核心，如果长时间未击杀，会被后续的全屏Aoe强制灭团。</text></view><view class="text-text-text"><text>花岗石牢：无读条，Boss点名随机1人将其关在花岗石牢内，被关的的角色无法做出任何行动，请其他人迅速集火花岗石牢解救队友。</text></view><view class="text-text-text"><text>大地之怒：无读条，全屏Aoe，注意回复，如果长时间未击杀泰坦的核心，会被强制灭团。</text></view><view class="text-text-text"><text>大地之重：读条技能，可见范围的圆形Aoe，走位回避即可。</text></view>
				 
				
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