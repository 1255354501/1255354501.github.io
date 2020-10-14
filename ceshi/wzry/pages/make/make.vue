<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/make.png"  mode="aspectFit"></image>
			<text class="name">马可波罗</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/make0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>连锁反应</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：马可波罗的每次普攻与技能伤害都会给目标附加1层防御破坏效果（对小兵为5层），达到10层后回复30点能量，防御破坏期间目标每次受到马可波罗的伤害都会额外受到70（+30%物理加成）点真实伤害（该伤害可以暴击），持续5秒。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/make1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>华丽左轮</text>
						<text>冷却值：5</text>
						<text>消耗：75/69/63/57/51/45</text>
					</view>
				</view>
				<view class="text">
					<text>马可波罗向指定方向连续射击过程期间获得10%移速提升，每一枪造成180（+15%物理加成）点物理伤害都能触发普攻的法球效果，命中回复10点能量，额外攻击速度会影响技能射出的子弹数目，在攻速达到0/75%/150%时射出子弹数5/7/9。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/make2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>漫游之枪</text>
						<text>冷却值：5</text>
						<text>消耗：75/69/63/57/51/45</text>
					</view> 
				</view>
				<view class="text">
					<text>马可波罗向指定方向闪烁，立即出现在目标位置；被动：马可波罗身边500范围内存在敌方英雄时，提升20%的伤害和15/18/21/24/27/30%移动速度。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/make3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>狂热弹幕</text>
						<text>冷却值：50/45/40</text>
						<text>消耗：75/60/45</text>
					</view>  
				</view>
				<view class="text">
					<text>马可波罗向指定方向闪烁，立即出现在指定位置并向周围发射弹幕触发普攻的法球效果，造成150（+17%物理加成）点物理伤害，额外攻击速度会影响技能射出的弹幕波数，在攻速达到0/75%/150%时射出弹幕数10/13/16。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升华丽左轮副升漫游之枪</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/净化</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jh.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>红月+鹰眼+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/makemw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：马可波罗的攻击速度会影响技能子弹数量，需要优先搭配提升</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/makecz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：马可波罗对于攻速和装备的攻击特性利用率相当高，主动累积这些属性能获得</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/makecz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：马可波罗利用大招爆发时会主动接近敌方，此时需要利用纯净苍穹和名刀来进行自保，避免被反杀的尴尬情况发生</text>
				</view>
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
		onLoad:function(option){
			try{
				if(option.ggg=="true"||option.ggg==true){
					const bannerAd = tt.createRewardedVideoAd({
					  adUnitId: "1ppposb2nct13fe588"
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

</style>
