<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>安其拉1号boss预言者斯克拉姆攻略 注意心控和转阶段</text></view>
			<view class="contwent">
				<view class="content"><text>安其拉副本即将开放，安其拉作为上古之神的老巢，内部存在众多的boss，同时也有大量极品装备等着玩家来拿，相信各位玩家都非常感兴趣。现在就给大家整理下安其拉副本一号boss预言者斯克拉姆攻略，希望可以帮助到各位玩家。</text></view> 
				<view class="title"><text>技能介绍</text></view>
				<view class="content"><text>预言者斯克拉姆会思维控制，被该技能控制的玩家伤害、抗性、移动速度会大量增加，所有法术变为瞬发，羊住该玩家即可。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aql10.png" mode="aspectFit"/></view>
				 
				<view class="content"><text>预言者斯克拉姆会奥术爆炸，所以近战职业打这个boss相当吃亏，准备好当狙击手吧。</text></view>
				<view class="content"><text>预言者斯克拉姆会幻影分身，血量在75% ，50% ，25%时会一分为三，分身伤害极高，坦克注意接好，玩家优先击杀分身。如果无人接预言者斯克拉姆，预言者斯克拉姆会不断释放2500伤害的大地冲击，所以坦克一定要接好boss。此外分身也会aoe，因此，建议熊坦拉这个boss，野性冲锋可以瞬间移动，降低不确定性。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aql11.png" mode="aspectFit"/></view>
				
				<view class="content"><text>预言者斯克拉姆会传送，玩家注意分散，等到坦克建立仇恨之后再输出即可。</text></view>
				<view class="title"><text>打法介绍</text></view>
				<view class="content"><text>该boss需要至少三个坦克，在分身之后，坦克注意拉好boss，dps务必在坦克建立好仇恨之后，再输出，一旦OT，BOSS的aoe伤害将给治疗带来巨大压力。同时，在分身出来之后，所有职业第一时间集火分身，不然分身极高的伤害很有可能导致坦克倒坦。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aql12.png" mode="aspectFit"/></view>
				 
				<view class="content"><text>由于boss会传送，玩家可以采取分散站位，也可以采取多点集中站位。</text></view> 
				<view class="content"><text>以上就是为各位玩家整理的相关攻略，希望可以帮助到各位玩家。</text></view> 
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'main',
				bofang:false
			}
		},
		onLoad:function(option){
			try{
				if(option.ggg=="true"){
					const bannerAd = tt.createRewardedVideoAd({
					  adUnitId: "3kimsacdlcj462q612"
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
					    uni.navigateBack	({
					        delta: 9999
					    });
					  }
					});
				}
			}catch(e){}
		},
		methods: {
			
		}
	}
</script>

<style>
 @import url("/static/mssj.css");
</style>