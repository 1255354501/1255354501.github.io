<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>安其拉3号boss战争守卫沙尔图拉攻略 吃控的BOSS</text></view>
			<view class="contwent">
				<view class="content"><text>安其拉副本即将开放，安其拉作为上古之神的老巢，内部存在众多的boss，同时也有大量极品装备等着玩家来拿，相信各位玩家都非常感兴趣。现在就给大家整理下安其拉副本2号bos亚尔基公主、维姆和克利领主攻略，希望可以帮助到各位玩家。</text></view> 
				<view class="title"><text>技能介绍</text></view>
				<view class="content"><text>战争守卫沙尔图拉的招牌技能时旋风斩，并且会立刻清楚仇恨，这也就说一旦玩家使用dot或者治疗挂上持续治疗，将会OT，被战争守卫沙尔图拉追杀。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq30.png" mode="aspectFit"/></view>
				
				<view class="content"><text>战争守卫沙尔图拉会狂暴：沙尔图拉血量在20%生命时会狂暴，攻击强度提升，治疗玩家注意加大治疗。如果战斗持续10分钟以上，沙尔图拉并没有达到打到30%以下，战争守卫沙尔图拉会直接秒杀当前玩家。</text></view>
				 <view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaq31.png" mode="aspectFit"/></view>
				<view class="content"><text>致死打击、破甲不必多说，坦克玩家注意换坦即可。</text></view>
				<view class="title"><text>战术</text></view>
				<view class="content"><text>玩家攻略战争守卫沙尔图拉时，优先击杀三个卫兵，然后杀boss。在此过程中，玩家一定要注意停手并且不要挂dot和持续治疗，不然很有可能会直接OT。此外，输出玩家注意在不OT得前提下，尽力输出，避免boss秒杀全团。坦克玩家一定要注意换坦，否则可能会倒。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/aaql21.png" mode="aspectFit"/></view> 
				<view class="content"><text>另外，战争守卫沙尔图拉可以被晕眩，所以盗贼玩家一定要多打肾击，降低战斗难度。</text></view>
				 
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