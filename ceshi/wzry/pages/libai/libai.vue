<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/libai.png"  mode="aspectFit"></image>
			<text class="name">李白</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/libai0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>侠客行</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：李白使用普通攻击攻击敌人时，会积累1道剑气，持续3秒；积累4道剑气后进入侠客行状态，增加30点物理攻击力并解除青莲剑歌的封印，持续5秒；攻击建筑不会积累剑气</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/libai1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>将进酒</text>
						<text>冷却值：12/10.6/9.2/7.8/6.4/5</text>
						<text>消耗：80</text>
					</view>
				</view>
				<view class="text">
					<text>李白可用醉剑式向指定方向连续突进2次，对路径上的敌人造成300/350/400/450/500/550（+110%物理加成）点物理伤害并且造成晕眩0.5秒叠加一层剑气；第三次释放会回到原地；每次释放间隔不能超过5秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/libai2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>神来之笔</text>
						<text>冷却值：12/11.6/11.2/10.8/10.4/10</text>
						<text>消耗：60</text>
					</view> 
				</view>
				<view class="text">
					<text>李白以自身为中心化剑为青莲剑阵，对范围内敌人造成210/246/282/318/354/390（+75%物理加成）点物理伤害；对触碰到剑圈的敌人造成350（+125%物理加成）点物理伤害并且减少90%移动速度，持续1秒；同时敌人会减少100/175/250/325/400/475点物理防御，持续3秒；李白释放技能期间不可被选中</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/libai3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>青莲剑歌</text>
						<text>冷却值：12</text>
						<text>消耗：120</text>
					</view>  
				</view>
				<view class="text">
					<text>李白化身为剑气，对指定方向范围内的所有敌人飞速穿梭斩击5次，每次斩击造成200/250/300（+50%额外物理加成）点物理伤害；当同时攻击多个敌方英雄时，每增加一位敌方英雄将衰减15%的伤害，最低衰减至初始伤害的70%；青莲剑歌需要由侠客行解除限制后方可释放，使用后立即进入限制状态；李白释放技能期间不可被选中和攻击</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升将进酒副升神来之笔</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：终结/净化</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jh.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>异变+鹰眼+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/libaimw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：这套铭文可以为李白提供物理攻击能力和百穿效果，能确保李白在初期就可以配合2技能减少抗性把大招伤害完美呈现，虽然解封大招是李白的关键玩法，但是李白最常用是野区累积解封或者1技能后平A组合技能解封。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/libaicz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：全输出装备来提升自身爆发能力，利用伤害压制对手，名刀能有效提升李白的生存能力</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/libaicz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：配合李白1技能能完美发挥宗师之力的属性价值，但需要较高的操作手法</text>
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
