<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/nezha.png"  mode="aspectFit"></image>
			<text class="name">哪吒</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍： </text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/nezha0.png" mode="aspectFit"></image>
					<view class="text1">
						<text> 炙炼火种</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：当哪吒用三尖枪和乾坤圈，混天绫时进行攻击时会在敌人身上留下炙炼火种，对敌人每秒造成35（+26%物理加成）点真实伤害，持续3秒；并且炙炼火种会减少其25%的生命回复效果。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/nezha1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>火焰三尖枪</text>
						<text>冷却值：5</text>
						<text>消耗：55</text>
					</view>
				</view>
				<view class="text">
					<text>哪吒挥动三尖枪攻击四周的敌人，造成400/440/480/520/560/600(+75%物理加成)点物理伤害；每击中一个敌人都会触发1次风火轮；当哪吒触发风火轮时会增加6%移动速度，持续5秒，最多可叠加5层。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/nezha2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>混天绫·束</text>
						<text>冷却值：12/11.6/11.2/10.8/10.4/10</text>
						<text>消耗：55</text>
					</view> 
				</view>
				<view class="text">
					<text>哪吒用混天绫短暂束缚敌人，然后迅速俯冲向该名敌人并翻越至另一侧，该技能有1秒冷却时间，4秒内可再次释放；每击中一个敌人都会触发1次风火轮；释放技能会触发火莲之印；当哪吒触发火莲之印后会减少15/16/17/18/19/20%所受到的伤害，持续3秒。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/nezha3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>乾坤·天降</text>
						<text>冷却值：80/75/70</text>
						<text>消耗：140</text>
					</view>  
				</view>
				<view class="text">
					<text>哪吒升上天空并对敌方所有英雄施加乾坤圈，释放后将获得其视野并打断回城，随后可选择一位敌方英雄并飞冲到其身前，造成500/625/750（+100%物理加成）点物理伤害并将其击退；落地时激发火莲之华，对火莲范围的敌人每秒施加1次炙炼火种，并增加自身30%韧性；落地时还会触发火莲之印；飞行过程中再次释放技能会立即降落并激发火莲之华。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升火焰三尖枪副升混天绫·束</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/终结</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：宿命+虚空+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/nezhamw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：宿命提供的攻速、生命、物防完美契合哪吒肉核冲锋的定位，虚空一方面提供了哪吒肉的属性，另一方面让其在战场中释放更多技能来帮助团队，隐匿能够让哪吒更灵活。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/nezhacz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：大后期破军能够帮助哪吒迅速击败敌方后排，以免落入包围无法脱身</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/nezhacz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：哪吒可以选择直接冲击敌方后排，在伤害足够的情况下，可以优先选择生存向的防御装备，增加自己的存活几率</text>
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