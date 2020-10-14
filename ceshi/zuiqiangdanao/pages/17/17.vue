<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>安其拉废墟5号BOSS狩猎者阿亚弥斯攻略 加好中献祭的血</text></view>
			<view class="contwent">
				<view class="content"><text>安其拉废墟是魔兽世界怀旧服即将推出的一个副本，这个副本的地位类似于祖格，但是部分掉落比bwl还要好，相信很多玩家都心动不远，当然，玩家想要成功的通关该副本，玩家还是需要了解boss的技能，现在就给大家介绍一下安其拉废墟老一库林纳克斯的技能。</text></view> 
				
				<view class="title"><text>技能介绍</text></view>
				<view class="content"><text>5号BOSS狩猎者分为两个阶段。Boss血量在50%以上时会在天上飞行，在血量下降到50%之后会落地。</text></view>
			 <view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx50.png" mode="aspectFit"/></view>
				<view class="content"><text>5号BOSS狩猎者阿亚弥斯1技能是传送：一个玩家会被点名传送至祭坛上，祭坛下方会刷新大量的幼虫攻击该玩家。如果该玩家死亡，会生成一只黄蜂。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx51.png" mode="aspectFit"/></view>
				<view class="content"><text>5号BOSS狩猎者阿亚弥斯2技能是针刺喷射：Boss会每30秒对每个人造成1000自然伤害。</text></view>
				<view class="content"><text>5号BOSS狩猎者阿亚弥斯3技能是毒性刺钉：Boss在天空飞行时，会对仇恨的目标不断的施加毒性刺钉。毒性刺钉层数越高，玩家受到的伤害越高。</text></view>
				<view class="content"><text>5号BOSS狩猎者阿亚弥斯4技能是召唤蜂群：蜂群会对玩家造成约60点伤害。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx52.png" mode="aspectFit"/></view>
				 
				<view class="title"><text>BOSS攻略技巧</text></view>
				<view class="content"><text>第一个阶段时，玩家迅速杀死幼虫，千万不要让被点名的玩家被击杀，不然会生成黄蜂，导致场面混乱，并且该黄蜂也极难击杀。同时玩家在输出阿亚弥斯时，ss玩家注意保证自己的仇恨不要太高。猎人玩家注意及时假死清除仇恨，法师玩家可以通过冰箱来消除debuff。</text></view>
				 <view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx53.png" mode="aspectFit"/></view>
				<view class="content"><text>第二阶段时，Boss会依旧使用传送，这时候玩家依旧要注意好保证被点名玩家的安全，及时清理到小虫子。在boss召唤了蜂群之后，玩家将蜂群拉到一起a掉即可。</text></view>
				 <view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx54.png" mode="aspectFit"/></view>
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