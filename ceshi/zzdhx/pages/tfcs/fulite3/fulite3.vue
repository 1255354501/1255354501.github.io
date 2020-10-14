<template>
	<view class="content">
		<view class="title"><text>伊弗利特讨伐战</text></view>
		<view class="text-area">
			<view class="text-title"><text>冒险者及恒辉队一行人被叛徒的奸计所害，被蜥蜴人族所俘虏，并被带到了赞拉克地区。在那里，他们被奉献给了火焰的蛮神伊弗利特。</text></view><view class="text-title"><text>只有赌上全部力量降服蛮神才有可能逃离此地。掌控“地狱之火炎”的强大蛮神伊弗利特……冒险者们有足够的实力成功脱身吗？</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fulite30.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：炎帝城</text></view>
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
				<view class="text-text-text"><text>新手奖励：1500金币2000经验</text></view>
				<view class="text-text-text"><text><strong>限制:</strong></text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：20~22级</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
				<view class="text-text-text"><text><strong>1.开启条件</strong></text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>凶猛火神伊弗利特</text></view>
				<view class="text-text-text"><text>所有（除设限特职）20级</text></view>
				<view class="text-text-text"><text>敏菲利亚</text></view>
				<view class="text-text-text"><text>沙之家X:6.9,Y:6.1</text></view>
				<view class="text-text-text"><text>前置任务：生命、魔晶石，万物的答案</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.伊弗利特</text></view>
				<view class="text-text-text"><text>*烈焰焚烧：无读条，对Mt方向释放的没有范围提示的扇形Aoe，请全员注意自己的位置情况。</text></view><view class="text-text-text"><text>火神爆裂：无读条，以Boss为圆心释放的没有范围提示的圆形Aoe，附加击退效果，请注意回复。</text></view><view class="text-text-text"><text>地火喷发：读条技能，可见范围的圆形Aoe，及时走位回避即可。</text></view><view class="text-text-text"><text>光辉炎柱：读条技能，可见范围的圆形Aoe，及时走位回避即可。</text></view><view class="text-text-text"><text>火神之楔：无读条，Boss在场地内制造1根火神之楔，需要全员集火打掉火神之楔，如果长时间未击杀火神之楔，会被后续的全屏Aoe灭团。</text></view><view class="text-text-text"><text>地狱之火炎：固定在火神之楔后使用，全屏Aoe，注意回复，如果没打掉火神之楔就会强制灭团。</text></view>
				 
				
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