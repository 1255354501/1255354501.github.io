<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/mengya.png"  mode="aspectFit"></image>
			<text class="name">蒙犽</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/mengya0.png" mode="aspectFit"></image>
					<view class="text1">
						<text> 炽热浑天</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>蒙犽精通机关武器，每提升5%的攻击速度，增加自身1%的冷却缩减。普通攻击命中敌人时，增加自身5点炽怒值（暴击时增加10点）。当炽怒值达到最大时，蒙犽会进入兴奋状态。若无法持续获得炽怒值，炽怒值将持续衰减。 当处于兴奋状态：强化自身所有技能，并使狂轰火线和爆裂重炮冷却加快50%,每溢出1点炽怒值回复自身0~3（随英雄等级成长）（+1%物理加成）点生命</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/mengya1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>狂轰火线</text>
						<text>冷却值：8</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>开启后，接下来5秒蒙犽会使用“浑天”持续扫射目标（需要持续按压，伤害可暴击），每颗子弹造成5/15/25/35/45/55（+32%物理加成）点物理伤害，扫射的时候可以释放其它技能以及移动，但是自身移动速度会降低50点.。施法完毕后进入冷却状态。每次命中敌人增加5点炽怒值，暴击时增加10点。 强化：当能量达到最大时，子弹将具备贯穿效果，会对后续敌人造成50%的伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/mengya2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>爆裂重炮</text>
						<text>冷却值：10/9.6/9.2/8.8/8.4/8秒</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>蒙犽朝指定方向发射一枚重炮，对触碰的敌人造成150/165/180/195/210/225（+25%物理加成）点物理伤害并减速，持续2秒；重炮触碰敌人或者阻挡以及飞行到最远距离时将会发生爆炸，并分裂出5颗流星弹，流星弹可以在阻挡之间弹射，并对命中的第一个敌人造成300/330/360/390/420/450（+50%物理加成）点物理伤害并增加自身5点炽怒值，单个目标在1秒内被多颗流星弹命中时伤害衰减到25%。 强化：当能量处于最大状态时，分裂的流星弹数量增加至9颗</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/mengya3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>飞弹援袭</text>
						<text>冷却值：60</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>蒙犽开始搜索周围的环境（按压释放，不断扩大搜索范围，最多搜索3秒，搜索过程中蒙犽增加50%移动速度），搜索范围内的敌人受到来自友军英雄的伤害时，会标记目标位置（整个搜索过程至多标记5个位置），搜索结束后将会朝标记位置发射导弹，导弹落地时将会对命中敌人造成350/425/500（+100%物理加成）点物理伤害(同一目标后续命中衰减50%)并增加自身10点炽怒值，蒙犽搜索完成后还会持续引导8秒，每秒至多引导1枚导弹（取消时会减少50%冷却时间）。 强化：后续导弹的引导的最小间隔时间减少至0.5秒</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升爆裂重炮副升飞弹援袭</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：异变+鹰眼+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/mengyamw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：技能型射手铭文，利用高穿透进行伤害压制</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/mengyacz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：累积高额攻击力为1技能输出提供属性支持，没有自保能力的射手需要一件防御性装备增加容错</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/mengyacz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：常规射手出装，利用攻速转冷却的特点获得高额冷却效果，做到输出无空挡，纯粹的火力压制流派</text>
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