<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>安其拉4号boss顽强的范克瑞斯攻略 躲开正面A小怪</text></view>
			<view class="contwent">
				<view class="content"><text>安其拉副本即将开放，安其拉作为上古之神的老巢，内部存在众多的boss，同时也有大量极品装备等着玩家来拿，相信各位玩家都非常感兴趣。现在就给大家整理下安其拉副本2号bos亚尔基公主、维姆和克利领主攻略，希望可以帮助到各位玩家。</text></view> 
				<view class="title"><text>技能介绍</text></view>
				<view class="content"><text>顽强的范克瑞斯战术会致命伤口，玩家只要在boss前方就会吃到，并且该debuff会叠加，每次叠加都会减少目标的治疗效果，所以近战职业尽量站背输出，同时，坦克玩家也要注意换坦。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq40.png" mode="aspectFit"/></view>  
				<view class="content"><text>战斗过程中，场内会不断孵化大量甲虫，这些甲虫杀完又会重生，所以团队一定要安排几个职业不断风筝这些甲虫。场内同时还会刷新沙虫，这些沙虫伤害极高，坦克玩家拉好，优先击杀。</text></view>
				<view class="content"><text>boss还会不断将玩家传送到虫巢，并晕眩玩家几秒，玩家解控后，优先吃糖，然后立刻跑出来。</text></view>
				<view class="title"><text>战术</text></view>
				<view class="content"><text>顽强的范克瑞斯的整场战斗比较比较混乱，玩家一定注意场内情况。参考bwl老一打法，治疗玩家尽量站中间，术士和战士、牧师注意在场内情况比较混乱时释放群体恐惧。同时，法师在风筝时，可以冰环小怪，降低风筝压力。</text></view>
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