<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>安其拉9号boss克苏恩攻略 曾经的难点现在的白给</text></view>
			<view class="contwent">
				<view class="content"><text>安其拉副本即将开放，安其拉作为上古之神的老巢，内部存在众多的boss，同时也有大量极品装备等着玩家来拿，相信各位玩家都非常感兴趣。现在就给大家整理下安其拉副本2号bos亚尔基公主、维姆和克利领主攻略，希望可以帮助到各位玩家。</text></view> 
				<view class="content"><text>克苏恩分为两个阶段。</text></view>
				<view class="content"><text>克苏恩P1难点在于进场，只要玩家进场顺利，通关就会非常简单。这里推荐玩家按照组 1 11点、组 2 1 点、组 3 10点、组 4 2 点、组 5 8 点、组 6 4 点、组 7 7 点、组 8 5 点定点，每个玩家间隔5码以上进场。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq90.png" mode="aspectFit"/></view>
				
				<view class="content"><text>近站集火克苏恩，远程职业优先击杀尖爪触须。当眼睛绿变红的时候，全体跑位，并沿途击杀眼球触须。</text></view> 
				
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq91.png" mode="aspectFit"/></view>
				<view class="content"><text>克苏恩P2难点在玩家会被吃进肚子里。玩家进去后先上台子，然后尽量杀伤血肉触须，2个血肉触须被杀后克苏恩才会被削弱。另外，如果肚子里面没有治疗玩家，玩家debuff高了赶紧出来，毕竟保命才是关键。</text></view> 
				
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq92.png" mode="aspectFit"/></view>
				<view class="content"><text>外场的玩家没事也别闲着，尽量打触须。此外，巨爪触须伤害极高，如果坦克没拉住，玩家别急着打。</text></view> 
				
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq93.png" mode="aspectFit"/></view>
				<view class="content"><text>在血肉触须被打掉，所有玩家全力打boss输出，之后基本就是loot了。</text></view> 
				 
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaql95.png" mode="aspectFit"/></view>
				 
				 
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