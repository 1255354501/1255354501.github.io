<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/huowu.png"  mode="aspectFit"></image>
			<text class="name">不知火舞</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/huowu0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>忍蜂</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：不知火舞每隔5秒的第一次普通攻击将会向当前朝向释放忍蜂，额外造成100（+100%法术加成）的法术伤害并将敌人击退，忍蜂命中敌人回复10点能量；不知火舞使用技能后能翻滚一段距离，并且会增加50%移动速度，持续0.5秒，该效果会随时间衰减。普通技能命中敌人将会回复25点能量值，大招每命中一名敌人都将会回复25点能量值</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/huowu1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>飞翔龙炎阵</text>
						<text>冷却值：10/9.2/8.4/7.6/6.8/6</text>
						<text>消耗：70</text>
					</view>
				</view>
				<view class="text">
					<text>不知火舞向上飞踢腾空，对范围内敌人造成550/620/690/760/830/900（+73%法术加成）点法术伤害并将其击飞0.75秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/huowu2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>花蝶扇</text>
						<text>冷却值：3</text>
						<text>消耗：40</text>
					</view> 
				</view>
				<view class="text">
					<text>不知火舞扔出扇子，对第一个命中的目标造成500/590/680/770/860/950（+100%法术加成）点法术伤害并减少其90%移动速度，持续0.5秒，同时减少50/80/110/140/170/200点法术防御，持续3秒，命中敌人回复能量10点</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/huowu3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>必杀·忍蜂</text>
						<text>冷却值：25/22.5/20</text>
						<text>消耗：110</text>
					</view>  
				</view>
				<view class="text">
					<text>不知火舞向前冲刺，对命中的敌人造成800/1000/1200（+110%法术加成）点法术伤害并将其击退；同时敌人会减少20%/25%/30%物理攻击力，持续2.5秒</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升飞翔龙炎阵副升花蝶扇</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>梦魇+怜悯+轮回</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/huowumw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：此铭文法术攻击加成能让火舞在前中期就打出一定的伤害量，同时火舞没有蓝条的限制，一定的吸血铭文可以在很大程度上减少其回家补给的次数，冷却缩减可以更好的消耗敌方，同时再配上其被动以达到最优输出或是撤离战场。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/huowucz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：不知火舞清线较为困难需要利用回响的被动帮助快速清线，并且作为刺客类法师，装备的被动触发效果也可以当做爆发之一，会使单次的爆发更加猛烈</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/huowucz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：冷静之靴能让不知火舞游弋在战场周围时更加灵活，辉月能增加操作的空间</text>
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
