<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/zhenji.png"  mode="aspectFit"></image>
			<text class="name">甄姬</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhenji0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>凝泪成冰</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：甄姬的每次技能伤害都会为目标叠加冰冻印记，持续7秒，叠加满3层后目标将被冰冻1.2秒，造成350（+52％法术加成）点法术伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhenji1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>泪如泉涌</text>
						<text>冷却值：8</text>
						<text>消耗：70</text>
					</view>
				</view>
				<view class="text">
					<text>甄姬在指定位置召唤水柱冲出地面，对范围内敌人造成500/590/680/770/860/950（+65％法术加成）点法术伤害并击飞1秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhenji2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>叹息水流</text>
						<text>冷却值：6</text>
						<text>消耗：60</text>
					</view> 
				</view>
				<view class="text">
					<text>甄姬引导指定方向的水流，水流会锁定敌人并在敌人间弹射，最多弹射6次，每个敌人最多被弹射2次，每次弹射会对敌人造成300/350/400/450/500/550（+40％法术加成）点法术伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhenji3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>洛神降临</text>
						<text>冷却值：50/45/40</text>
						<text>消耗：100</text>
					</view>  
				</view>
				<view class="text">
					<text>甄姬朝指定方向释放水之精魄不断向前推进并击退非英雄单位，当水之精魄命中敌方英雄或者达到最远距离时将形成水域，第一个直接被命中的英雄受到400/500/600（+65％法术加成）点法术伤害并减少90%移速持续1秒；水之精魄形成的水域持续5秒，每秒对触碰的敌人造成200/250/300（+32％法术加成）点法术伤害并减少其50％移动速度，持续2秒</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升叹息水流副升泪如泉涌</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>梦魇+怜悯+轮回</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/zhenjimw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：这套铭文提供法术强度、法术穿透、冷却减缩，以及法术吸血。法术穿透和法术强度增加甄姬的输出能力，法术吸血让甄姬有一定的续航能力，冷却减缩减少技能CD，让甄姬能更快得打出技能被动冰冻敌方并造成伤害。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhenjicz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：甄姬作为消耗型法师搭配圣杯不仅仅缩短了技能空窗期，还能让其续航也得到一定的提升</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhenjicz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：甄姬面对突袭没有比较好的逃离方法，但可以用炽热支配者来避免这一尴尬的情况，并且也会给与甄姬一定的续航能力</text>
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
