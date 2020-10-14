<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/gongben.png"  mode="aspectFit"></image>
			<text class="name">宫本武藏</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/baiqi0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>狩魔</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：宫本武藏施放技能后，下一次普通攻击变更为蓄力攻击，蓄力攻击会额外造成120（+25%物理加成）点物理伤害并减少1秒所有技能的冷却时间</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/gongben1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>空明斩</text>
						<text>冷却值：10/9.6/9.2/8.8/8.4/8</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>宫本武藏向指定方向斩出一道剑气，对路径上的敌人造成400/480/560/640/720/800（+80%物理加成）点物理伤害并减少其50%移动速度，持续2秒；剑气会击落路径上的敌方飞行物；施放空明斩时宫本武藏处于霸体状态；</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/gongben2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>神速</text>
						<text>冷却值：8</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>宫本武藏向前冲刺，对路径上的敌人造成180/216/252/288/324/360（+40%物理加成）点物理伤害；如果穿过敌人将获得抵免500/620/740/860/980/1100点伤害的护盾并减少50%神速的冷却时间，护盾每4秒只能获得一次</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/gongben3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>二天一流</text>
						<text>冷却值：60/55/50</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>宫本武藏在指定方向范围内选择并锁定目标后跃向空中，在短暂迟延后拔出鸣雷斩落，对目标范围内的敌人造成500/650/800（+80%物理加成）点物理伤害，同时将锁定目标击飞0.75秒并减少其50%移动速度，持续2秒；在接下来的12秒内宫本武藏进入二刀流状态，所有普通攻击和技能都会附带60/90/120点法术伤害；狩魔范围提升；神速将获得额外的突进距离</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升空明斩副升神速</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：终结/净化</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jh.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>异变+鹰眼+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/dmmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：宫本的玩法是在poke时寻找时机切入并击败敌方的核心输出，宫本比较依赖普攻，同时技能后可以为普攻增加海量物理伤害加成，百穿铭文可以帮助宫本伤害收益最大化，让宫本可以更好的利用技能配合普攻产生高额伤害。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/gongbencz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：宫本大招能够稳定贴近敌方后排，大量的攻击装备能保证其能迅速将敌人击杀，才能够从容退场</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/gongbencz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：当处理敌方后排比较轻松时，可以选择一定的肉装增加宫本的容错能力</text>
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
