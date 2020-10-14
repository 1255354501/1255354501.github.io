<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/juyoujing.png"  mode="aspectFit"></image>
			<text class="name">橘右京</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/juyoujing0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>秘剑胧刀</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：橘右京将下一次普攻将进行一次强力拔刀斩，对前方敌人造成130%物理加成物理伤害并减少50%移动速度，持续2秒；拔刀斩每5秒可准备1次；对处于攻击边缘的敌人将承受50%的物理伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/juyoujing1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>燕返</text>
						<text>冷却值：7</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>橘右京跃向后方，同时向前方挥刀，对附近的敌人造成150/180/210/240/270/300（+140%物理加成）点物理伤害，若成功命中一名敌方单位，可激活二段使用</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/juyoujing2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>居合</text>
						<text>冷却值：10/9.5/9/8.5/8/7.5</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>橘右京向指定方向快速拔刀，对路径上的第一个敌人造成330/350/400/450/500/550（+180%物理加成）点物理伤害，对路上的其余敌人造成的伤害将衰减50%,并将路径末端的敌人眩晕0.75秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/juyoujing3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>细雪</text>
						<text>冷却值：12/11.5/11</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>橘右京向指定方向连续拔刀四次，每次命中造成100/150/200（+70%物理加成）点物理伤害并且每次命中敌方英雄，自身将回复70/100/130（+48%物理加成）点生命值（命中非英雄单位效果减半）</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升居合副升燕返</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/终结</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>异变+鹰眼+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/juyoujingmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：橘右京是一个依赖技能伤害的英雄，需要高额的穿透能力打足伤害，移速的提升可以帮助橘右京配合被动减速技能风筝敌方英雄，物理伤害的提升可以帮橘右京提升初期的清线能力。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/juyoujingcz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：橘右京主要依靠控制成功后的一套技能输出伤害，因此出装也会以高物理攻击与穿透效果为主</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/juyoujingcz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：累积了一定的冷却缩减，橘右京能更加频繁的使用技能来打出高额伤害</text>
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
