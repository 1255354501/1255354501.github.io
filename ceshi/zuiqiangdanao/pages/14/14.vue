<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>安其拉废墟2号BOSS拉贾克斯将军攻略 靠墙站避免击飞</text></view>
			<view class="contwent">
				<view class="content"><text>安其拉废墟是魔兽世界怀旧服即将推出的一个副本，这个副本的地位类似于祖格，但是部分掉落比bwl还要好，相信很多玩家都心动不远，当然，玩家想要成功的通关该副本，玩家还是需要了解boss的技能，现在就给大家介绍一下安其拉废墟老一库林纳克斯的技能。</text></view> 
				
				<view class="title"><text>技能介绍</text></view>
				<view class="content"><text>在BOSS出来之前，会刷新三波精英齐拉吉战士，中间玩家无法吃喝补给。</text></view> 
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx20.png" mode="aspectFit"/></view> 
				<view class="content"><text>2号BOSS拉贾克斯将军会使用两个技能。</text></view>
				<view class="content"><text>拉贾克斯将军1技能是击退：会将目标击飞很远一个距离，同时减少仇恨。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx21.png" mode="aspectFit"/></view>  
				<view class="content"><text>拉贾克斯将军2技能是群体冲击：对范围内的所有玩家造成当前血量的50%的伤害，如果玩家血量较低的话，将会被直接秒杀。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx22.png" mode="aspectFit"/></view> 
				<view class="title"><text>BOSS攻略技巧</text></view>
				<view class="content"><text>由于三波精英齐拉吉战士之前无法进行吃喝，所以aoe小怪是一件非常不现实的事情，因此建议玩家单杀。</text></view>
				<view class="content"><text>坦克拉拉贾克斯将军的时候，一定要注意靠墙，这样可以避免自己被击飞。同时输出玩家的仇恨不要太高，避免OT。</text></view>
				 <view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx23.png" mode="aspectFit"/></view> 
				<view class="content"><text>NPC具有非常不错的战斗能力，并且如果npc在战争中没有死亡，玩家会获得1200点额外的赛纳里奥议会声望，所以治疗玩家一定要尽量保证npc的生存。</text></view>
				<view class="content"><text>虽然npc不会被击飞，但是npc制造仇恨的能力相当有限，所以不建议团队让npc当坦克。</text></view>
				 
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