<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/sunwukong.png"  mode="aspectFit"></image>
			<text class="name">孙悟空</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunwukong0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>大圣神威</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：孙悟空每次释放技能后下一次普通攻击变更为强力敲击，强力敲击会冲锋至目标身旁并抡起金箍棒敲打造成370（+100%物理加成）点物理伤害，该伤害可全额享受暴击收益。孙悟空天生拥有20%暴击几率，但初始只能造成150%暴击伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunwukong1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>护身咒法</text>
						<text>冷却值：12/11.6/11.2/10.8/10.4/10</text>
						<text>消耗：70</text>
					</view>
				</view>
				<view class="text">
					<text>孙悟空念起护身咒，护身咒可为孙悟空抵挡一次敌方技能，护身咒最多持续1.5秒；若成功抵挡，孙悟空将获得0.2秒的无敌效果以及抵免500/600/700/800/900/1000（+150%物理加成）点伤害的护盾，持续4秒。开启技能时自身增加40%移动速度，持续1秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunwukong2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>斗战冲锋</text>
						<text>冷却值：8/7.4/6.8/6.2/5.6/5</text>
						<text>消耗：70</text>
					</view> 
				</view>
				<view class="text">
					<text>孙悟空向指定方向冲锋，如果冲锋路径上遭遇敌人会借力腾空跳跃；释放普通攻击或技能可中断跳跃</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunwukong3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>如意金箍</text>
						<text>冷却值：40/35/30</text>
						<text>消耗：100</text>
					</view>  
				</view>
				<view class="text">
					<text>孙悟空将变大的金箍棒直插入地，对范围内敌人造成150/190/230（+50%物理加成）点物理伤害并将其晕眩1秒。同时范围内敌人获得3层印记；孙悟空的普通攻击命中带有印记的敌人将消耗1层印记并额外造成270/405/540点物理伤害。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升护身咒法副升斗战冲锋</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：终结/净化</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jh.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：无双+鹰眼+兽痕 </text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/sunwukongmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：孙悟空的被动是自带暴击率，无双与兽痕可以增加13％的暴击率，使得初始暴击率能达到33％。通过无双的弥补，使得初始暴击效果为186％，使得输出更高。鹰眼提供物理穿透可以增加孙悟空的穿透效果，增加伤害。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/sunwukongcz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：悟空需要累积一点攻速让其强化普攻出手速度更快，无尽战刃提供的暴击和暴伤属性会让其爆发力更加充足，破军的斩杀效果也与悟空的刺客属性是十分合拍</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/sunwukongcz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：悟空一直是对手的重点盯防对象，一旦出现就会被集火攻击，而名刀的被动效果会让悟空得到难得的输出时间</text>
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