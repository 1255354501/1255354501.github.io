<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/dianwei.png"  mode="aspectFit"></image>
			<text class="name">典韦</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/dianwei0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>激怒</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：典韦每一次击败英雄或者助攻会增加1层激怒效果，每层激怒效果会增加典韦12点物理攻击力，最多叠加20层</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/dianwei1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>红眼</text>
						<text>冷却值：9/8.6/8.2/7.8/7.4/7</text>
						<text>消耗：55</text>
					</view>
				</view>
				<view class="text">
					<text>典韦做好冲锋陷阵的准备，移除自身控制效果，并且增加60%移动速度，持续3秒，下一次普通攻击变更为挥砍，挥砍会对附近敌人造成额外300/350/400/450/500/550（+100%物理加成）点物理伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/dianwei2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>狂暴</text>
						<text>冷却值：8/7.4/6.8/6.2/5.6/5</text>
						<text>消耗：65</text>
					</view> 
				</view>
				<view class="text">
					<text>暴怒的典韦践踏大地，对范围内敌人造成250/280/310/340/370/400（+100%物理加成）点物理伤害并减少其50%的移动速度，持续2秒，如果命中敌人将会突破自身极限，增加200%攻击速度和25/30/35/40/45/50%吸血效果，持续3秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/dianwei3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>嗜血</text>
						<text>冷却值：30/25/20</text>
						<text>消耗：130</text>
					</view>  
				</view>
				<view class="text">
					<text典韦对锁定目标发起跳斩，造成300/375/450（+120%物理加成）点真实伤害并减少其50%的移动速度，持续3秒，同时会强化自身，对敌人造成的所有伤害附带目标最大生命3%的真实伤害，持续5秒。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升红眼副升狂暴</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/终结</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>传承+虚空+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/dianweimw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：典韦是后期英雄，输出更依赖于大招的真实伤害，传承可以让他造成更多真实伤害，隐匿移速提升配合1技能可以黏住敌方核心输出英雄，虚空提升一定的坦克能力。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/dianweicz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：典韦能极大的提高自己的攻速，故而装备搭配了大量物理伤害装备，利用该特性可以让典韦靠近对手后迅速将其秒杀</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/dianweicz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：累积一定的血量以保证典韦有足够的时间来靠近敌人</text>
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
