<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>安其拉废墟1号BOSS库林纳克斯攻略 躲好流沙陷阱</text></view>
			<view class="contwent">
				<view class="content"><text>安其拉废墟是魔兽世界怀旧服即将推出的一个副本，这个副本的地位类似于祖格，但是部分掉落比bwl还要好，相信很多玩家都心动不远，当然，玩家想要成功的通关该副本，玩家还是需要了解boss的技能，现在就给大家介绍一下安其拉废墟老一库林纳克斯的技能。</text></view> 
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx10.png" mode="aspectFit"/></view>
				<view class="title"><text>技能介绍</text></view>
				<view class="content"><text>库林纳克斯会使用四个技能。</text></view>
				<view class="content"><text>1技能是致死创伤：库林纳克斯会使用顺劈斩，攻击前方所有玩家。被攻击到的玩家会被施加“重伤”的Debuff，该debuff可以叠加。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx11.png" mode="aspectFit"/></view>
				
				<view class="content"><text>2技能是流沙陷阱：库林纳克斯会随机在一个玩家脚下制造一个流沙陷阱，之后，该陷阱会爆炸，对20码以内的玩家造成大量自然伤害，并且降低玩家的命中率、移动速度，还具有沉默效果。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx12.png" mode="aspectFit"/></view>
				<view class="content"><text>3技能是狂暴：库林纳克斯血量低于20%的时候会进入狂暴状态，提升攻击强度、攻击速度。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx13.png" mode="aspectFit"/></view>
				<view class="content"><text>4技能是召唤：库林纳克斯能够瞬间召唤队伍中的一个玩家到自己面前。</text></view>
				
				<view class="title"><text>BOSS攻略技巧</text></view>
				<view class="content"><text>由于boss会使用致死创伤，所以近战玩家千万不要站在boss前面输出，同时，坦克玩家在层数达到4~5层的时候就要注意换坦，因此主坦克和副坦克之间一定要保证仇恨相差不大，可以实现顺利换坦。</text></view>
				 
				<view class="content"><text>流沙陷阱会造成大量的伤害，所以所有玩家一定要第一时间远离陷阱，如果陷阱的位置离坦克较近，所有玩家一定要停手，等到坦克把boss拉到新的位置再输出。</text></view>
				<view class="content"><text>狂暴状态下的boss输出将会非常厉害，输出玩家一定要注意多打伤害。治疗玩家和坦克玩家注意开技能保命。</text></view>
				 
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