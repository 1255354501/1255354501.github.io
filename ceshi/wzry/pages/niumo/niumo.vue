<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/niumo.png"  mode="aspectFit"></image>
			<text class="name">牛魔</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/niumo0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>强力援护</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：当牛魔附近500范围内有友方英雄时，牛魔和范围内血量最少的友方英雄会获得200点物理防御和法术防御，防御力随英雄等级成长</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/niumo1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>咆哮之斧</text>
						<text>冷却值：6</text>
						<text>消耗：55</text>
					</view>
				</view>
				<view class="text">
					<text>牛魔向指定方向以大斧横劈，对范围内的敌人造成250/300/350/400/450/500（+110%物理加成）点物理伤害，同时敌方英雄将减少15%的物理攻击力和法术攻击力，持续3秒；如果命中敌方英雄，牛魔下一次普通攻击或技能将额外造成200点法术伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/niumo2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>横行霸道</text>
						<text>冷却值：10/9.6/9.2/8.8/8.4/8</text>
						<text>消耗：55</text>
					</view> 
				</view>
				<view class="text">
					<text>牛魔朝指定方向冲锋，对路径上的敌人造成450/530/610/690/770/850（+90%物理加成）点物理伤害并击飞0.75秒；敌人落地后会减少90%移动速度，持续1秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/niumo3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>山崩地裂</text>
						<text>冷却值：40/35/30</text>
						<text>消耗：150</text>
					</view>  
				</view>
				<view class="text">
					<text>牛魔短暂蓄力后向指定方向以巨斧猛力劈开大地，对范围内敌人造成550/700/850（+130%物理加成）点物理伤害并将其击飞1秒；同时被劈开的大地被撕裂5秒，对处于其中的敌人每0.5秒造成80/100/120（+20%物理加成）点物理伤害并减少其50%移动速度</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升咆哮之斧副升横行霸道</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：治疗术/晕眩</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：宿命+均衡+长生</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/niumomw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：牛魔作为一个坦克、辅助位英雄，在团战中需要让自身拥有更高的血量及护甲魔抗才能为队友抵抗敌方的输出。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/niumocz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：牛魔被动和近卫荣耀能给予队友极大的属性支持，极寒风暴在牛魔冲进人群后能释放大量减速效果留住敌人</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/niumocz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：救赎之翼不仅能提供队友保护，还能利用其加速效果让牛魔能够选择一个足够好的角度冲入战场</text>
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