<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>安其拉2号boss吉祥三宝攻略 亚尔基公主优先杀</text></view>
			<view class="contwent">
				<view class="content"><text>安其拉副本即将开放，安其拉作为上古之神的老巢，内部存在众多的boss，同时也有大量极品装备等着玩家来拿，相信各位玩家都非常感兴趣。现在就给大家整理下安其拉副本2号bos亚尔基公主、维姆和克利领主攻略，希望可以帮助到各位玩家。</text></view> 
				<view class="title"><text>技能介绍</text></view>
				<view class="content"><text>维希度斯每10秒会进行一次全范围AOE，此外，还会产生500一下的DOT，萨满和小德一定要注意好解毒DOT。场内会产生毒云，玩家一定要注意躲开。</text></view>
				<view class="content"><text>维希度斯需要承受到一定数量的冰箭之后，会被完全冻结，之后全体玩家换上快速武器直接敲boss。然后，boss会被打爆，形成20个分身。玩家每打掉一个分身，boss就会减少5%的HP。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq60.png" mode="aspectFit"/></view>
				 
				<view class="title"><text>战术</text></view>
				<view class="content"><text>维希度斯的难度并不大，玩家只要躲好毒云和注意解好毒即可。法师职业直接搓一级寒冰箭，冻结之后，所有玩家换上快速武器物理攻击boss。在分身之后，根据猎人的标记打掉尽可能多的分身即可。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq61.png" mode="aspectFit"/></view> 
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