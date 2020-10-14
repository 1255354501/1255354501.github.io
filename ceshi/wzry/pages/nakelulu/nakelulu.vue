<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/nakelulu.png"  mode="aspectFit"></image>
			<text class="name">娜可露露</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/nakelulu0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>流刀舞术</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：娜可露露的技能命中敌人时，下一次普通攻击变更为强化攻击，强化攻击会额外造成80（+100%额外物理加成）的物理伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/nakelulu1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>风之刃</text>
						<text>冷却值：6</text>
						<text>消耗：50</text>
					</view>
				</view>
				<view class="text">
					<text>娜可露露向指定方向冲刺，对路径上的敌人造成350/420/490/560/630/700（+170%额外物理加成）点物理伤害，每命中一名敌方英雄将回复250/300/350/400/450/500（+100%额外物理加成）点生命值。该技能命中野怪时，造成的伤害提升50%，同时回复自身的生命值，回复量为命中英雄时的30%</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/nakelulu2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>风之刃</text>
						<text>冷却值：6</text>
						<text>消耗：50</text>
					</view> 
				</view>
				<view class="text">
					<text>娜可露露向指定方向冲刺，对路径上的敌人造成350/420/490/560/630/700（+170%额外物理加成）点物理伤害，每命中一名敌方英雄将回复250/300/350/400/450/500（+100%额外物理加成）点生命值。该技能命中野怪时，造成的伤害提升50%，同时回复自身的生命值，回复量为命中英雄时的30%</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/nakelulu3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>飞鹰急袭</text>
						<text>冷却值：12</text>
						<text>消耗：120</text>
					</view>  
				</view>
				<view class="text">
					<text>娜可露露召唤玛玛哈哈并肩作战，立即增加50%的移动速度，持续6秒，该效果会持续衰减；再次释放飞鹰急袭，娜可露露将朝指定区域发起进攻，对敌人造成600/850/1100（+265%额外物理加成）点物理伤害并减少50%移动速度，持续3秒；受到冲击的敌人将减少30%伤害输出，持续3秒</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升飞鹰攻击副升风之刃</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：终结/净化</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jh.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：异变+鹰眼+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/nakelulumw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：鹰眼和异变提供的攻击力及穿透可让娜可露露造成大量伤害，大招配合隐匿的移速使她更快的加入战局</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/nakelulucz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：娜可露露技能加成为额外物理加成，需要累积足够的攻击力才能使伤害得到质变，所以留给防御装备的位置不多，名刀与贤者的庇护可以根据对手和局势进行选择</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/nakelulucz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：泣血之刃可以增强娜可露露的续航能力，保证其能迅速的恢复完整的状态来进行下一次突袭</text>
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