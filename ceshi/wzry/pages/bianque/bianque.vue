<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/bianque.png"  mode="aspectFit"></image>
			<text class="name">扁鹊</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/bianque0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>恶德医疗</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：扁鹊的普通攻击和技能都会附带剧毒，每秒造成25（+5%法术加成）点法术伤害，并叠加1层毒药印记，伤害随英雄等级成长；当友方英雄受到善恶诊断的治疗时，每秒回复5（+2%法术加成）点生命值，并叠加1层恢复印记；毒药印记和恢复印记最多可叠加至多5层，持续7秒。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/bianque1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>致命灵药</text>
						<text>冷却值：2</text>
						<text>消耗：40</text>
					</view>
				</view>
				<view class="text">
					<text>扁鹊朝指定目标范围扔出致命毒药瓶，毒药瓶触地后破碎，毒液会残留原地，持续4秒，毒液每秒会对范围内的敌人造成70/76/82/88/94/100（+12%法术加成）点法术伤害并减少其30%移动速度，持续2秒；扁鹊每15/14.4/13.8/13.2/12.6/12秒可制作1瓶毒药，最多存放3瓶。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/bianque2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>善恶诊断</text>
						<text>冷却值：5</text>
						<text>消耗：40</text>
					</view> 
				</view>
				<view class="text">
					<text>扁鹊朝指定方向释放药剂，对路径上的敌人造成100/120/140/160/180/200（+30%法术加成）点法术伤害，并且对触碰的友军英雄施加回复印记并回复50/60/70/80/90/100（+15%法术加成）点生命值。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/bianque3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>生命主宰</text>
						<text>冷却值：18/15/12</text>
						<text>消耗：130</text>
					</view>  
				</view>
				<view class="text">
					<text>扁鹊引爆附近所有印记，对敌人造成200/250/300（+40%法术加成）点法术伤害，对友军英雄治疗80/100/120（+20%法术加成）点生命值；每层印记增加50%的额外伤害与治疗效果；除此之外，扁鹊给自己额外回复450/600/750（+30%法术加成）点生命值。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升善恶诊断副升致命灵药</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：凶兆+心眼+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/bianquemw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：对扁鹊来说最重要的是攻速和冷却，冷却效果可以通过装备补充，选择标准的攻速铭文可以让扁鹊轻松普攻叠加被动到5层，达到最大收益，穿透效果可以帮助扁鹊在前期达到伤害最大化，移速可以增加扁鹊gank支援能力。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/bianquecz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：回响之杖能够提供移速，让扁鹊走位难度降低，同时极寒风暴提供的防御力搭配贤者之书的最大生命值属性，能让作战半径较近的扁鹊不至于无法站稳</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/bianquecz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：扁鹊攻击范围较近，同时由于拥有治愈队友的能力会遭受到不少的突袭，根据形势可以选择再补充一件针对性的防御向装备</text>
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