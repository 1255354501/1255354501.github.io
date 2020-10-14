<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>安其拉5号boss哈霍兰公主攻略 近战集体准备自然抗</text></view>
			<view class="contwent">
				<view class="content"><text>安其拉副本即将开放，安其拉作为上古之神的老巢，内部存在众多的boss，同时也有大量极品装备等着玩家来拿，相信各位玩家都非常感兴趣。现在就给大家整理下安其拉副本2号bos亚尔基公主、维姆和克利领主攻略，希望可以帮助到各位玩家。</text></view> 
				<view class="title"><text>技能介绍</text></view>
				<view class="content"><text>哈霍兰公主会群体毒镖，毒镖会叠加四次，四次后每秒伤害极高，达到2800伤害；同时哈霍兰公主会使用自然喷吐攻击当前目标；哈霍兰公主会使用飞龙钉刺睡眠玩家。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq50.png" mode="aspectFit"/></view> 
				<view class="content"><text>当哈霍兰公主血量降低到30%时，她会不断地向最靠近她的15个目标释放毒镖AOE，造成大量伤害。</text></view> 
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq51.png" mode="aspectFit"/></view> 
				<view class="title"><text>战哈霍兰公主对于玩家的自然抗性要求极高，群体毒镖和自然喷吐、飞龙钉刺、毒镖AOE均可以被抵抗，所以玩家打这个boss的时候一定要保证自己的抗性达标，玩家可以通过猎人守护、合计药水等方式，提升自己的抗性。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq52.png" mode="aspectFit"/></view>
				 
				<view class="content"><text>同时，boss具有狂暴机制，所以猎人玩家一定要打好狂暴。不然在高强度的战斗中，玩家很容易减员。</text></view>
				 
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