<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>安其拉废墟4号BOSS吞噬者布鲁攻略 碎蛋时机是关键</text></view>
			<view class="contwent">
				<view class="content"><text>安其拉废墟是魔兽世界怀旧服即将推出的一个副本，这个副本的地位类似于祖格，但是部分掉落比bwl还要好，相信很多玩家都心动不远，当然，玩家想要成功的通关该副本，玩家还是需要了解boss的技能，现在就给大家介绍一下安其拉废墟老一库林纳克斯的技能。</text></view> 
				
				<view class="title"><text>技能介绍</text></view>
				<view class="content"><text>4号BOSS吞噬者布鲁在有壳时，玩家基本无法对BOSS造成任何伤害，壳将在它20%血的时候破开。场地内有许多蛋，玩家踩碎蛋会孵化出黄蜂，对附近的玩家造成100-500点伤害，对BOSS造成45000点伤害。</text></view> 
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx40.png" mode="aspectFit"/></view> 
				<view class="content"><text>吞噬者布鲁1技能是肢解：布鲁追上目标，会使用该技能，造成每两秒造成1248的伤害。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx41.png" mode="aspectFit"/></view> 
				<view class="content"><text>吞噬者布鲁2技能是蠕虫瘟疫：在20%血的时候，布鲁会释放蠕虫瘟疫。这个DEBUFF会不断叠加，玩家受到的伤害也会逐渐增加。</text></view>
				  
				<view class="title"><text>BOSS攻略技巧</text></view>
				<view class="content"><text>第一个阶段时，玩家只能通过踩碎蛋对boss造成伤害。此期间，boss会追踪一位玩家，并不断加快自己的移速，在追上之后对这位玩家造成大量的伤害。玩家可以通过踩碎蛋对boss造成减速效果，将boss的移动速度恢复为初始速度。</text></view>
				 
				<view class="content"><text>第二阶段时，布鲁会释放蠕虫瘟疫，团队掉血会越来越快，这时候所有玩家需要火力全开，集中打boss。场内还会刷新小怪，只要其他玩家稍微控制一下即可。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/fx42.png" mode="aspectFit"/></view> 
				 
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