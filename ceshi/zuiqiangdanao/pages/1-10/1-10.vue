<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>P5必做的4个任务 直接就送版本毕业装备</text></view>
			<view class="contwent">
				<view class="content"><text>为了让大家在安其拉开门后更好地体验游戏，今天我们就来介绍一下魔兽世界怀旧服5阶段的几个必做任务。这些任务对于单人而言，会奖励非常棒的装备，而且每个都可以作为TAQ毕业装备，实在是不容错过。当然，这些任务大都属于塞纳里奥议会，刷一刷声望也是必不可少的。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p540.png" mode="aspectFit"/></view>
				
				<view class="title"><text>废墟9职业三件套</text></view>
				<view class="content"><text>当你的塞纳里奥议会声望达到尊敬，且在安其拉废墟中获取了特定的道具，就可以去兑换知名的废墟三件套了。就拿盗贼来说，废墟三件套分别是戒指、披风和匕首，属性都还不错，套装效果是减少切割的能量消耗。9职业共27件装备，其中很有几件可以说是TAQ毕业级别的装备，如术士的戒指和战士的披风。任务需求的废墟BOSS道具掉率非常高，这任务做起来可以说简单又轻松，白送毕业装备和过渡小极品。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p541.png" mode="aspectFit"/></view>
				
				<view class="title"><text>崇拜任务奖励</text></view>
				<view class="content"><text>塞纳里奥议会崇拜任务叫做勇士的装备，需要完成一系列前置任务才能获取任务需求的材料，因此奖励装备并非一天两天就可以轻易入手的。我们做这个任务主要看中两样道具：大地之击和塞纳留斯之怒。前者是物理职业毕业爆发饰品，盗贼和战士肯定要入手;后者是一个概率触发增加大量法伤的戒指，虽然略显尴尬和不稳定，但也值得法系玩家拿到，总体而言对于大部分PVE玩家来说这个任务都是必做的。此外像岩石怒火护腕这类崇敬任务装备，也是属于5阶段毕业级别装备，大家可以自己留意一下。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p542.png" mode="aspectFit"/></view>
				
				<view class="title"><text>T0.5套装升级任务</text></view>
				<view class="content"><text>这个任务主要是针对盗贼的，因为其它职业的T0.5并没有特别之处，远远不如T2或者当前的毕业散件。只有盗贼的T0.5因为4件套回能特效，可以让它们在毕业配装中保有一席之地。为了升级套装，首先你得确保迅影8件套都刷齐了，否则是搭配不出最好的效果的。T0.5只需4件穿在身上，剩余部位建议使用T2.5，因为可以补充一下缺失的属性。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p544.png" mode="aspectFit"/></view>
				
				<view class="title"><text>深渊节杖任务</text></view>
				<view class="content"><text>虽然很多人认为TAQ难度不会太大，但在这个副本里自然抗怎么着也不能太低。如果你不喜欢吃大量的防护自然药剂，那最好还是收集一些强力的自然抗装备吧，NAXX也有BOSS用得着。说到自然抗性，5阶段首推的任务奖励就是深渊节杖相关的“谦卑的馈赠”。任务奖励19自然抗性的戒指，只比绿龙BOSS任务奖励的少1点属性，绝对不容错过。不过这个任务不会在开门后第一时间开放，所以后面还是要看情况来做。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p545.png" mode="aspectFit"/></view>
				 
				<view class="content"><text>魔兽世界怀旧服即便到了中后期，做任务依然有相当不错的奖励装备，不管是对于小号还是金币不充裕的玩家，都是喜讯。上面这4种任务，基本上每个都有奖励TAQ毕业级别装备，而且任务都是随着游戏进程完成，不需要刻意猛肝。</text></view> 
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
