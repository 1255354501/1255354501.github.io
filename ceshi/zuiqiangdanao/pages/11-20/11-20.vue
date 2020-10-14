<template>
	<view>
		<view class="content"> 
		    <view class="title"><text>P5阶段防战bis装备一览 T2.5可以替换T2</text></view>
			<view class="contwent">
				<view class="content"><text>防战作为魔兽世界怀旧服中最强力的坦克，直接决定了队伍的天花板。一个好的防战往往意味着团队可以更加轻松的通关副本，当然，防战的好坏与否除了和坦克玩家的技术是手法有关以外，还和坦克的装备有关，那么坦克玩家在P5应该如何选择自己的bis装备呢？</text></view>
				<view class="content"><text>在P5阶段，防战的生存已经得到了很大的保障，所以在武器选择上建议玩家选择增加仇恨向的武器，兽人可以选择克鲁索洛克恩，混乱之刃，人类可以选择上古其拉撕裂者，在盾牌上，建议玩家选择神圣其拉壁垒。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p5b0.png" mode="aspectFit"/></view>
				 
				<view class="content"><text>在安其拉副本中，冷酷者肩铠、坚定信念护手、皇家其拉腰带属于非常不错的散件，强度要远远高于T2以及8T2的效果，所以建议玩家选择混搭的方式。其他部位依旧选择愤怒头盔、愤怒胸甲、愤怒护腕、愤怒腿铠、愤怒马靴，三件套效果，五件套效果可以很好的保证防战的仇恨能力。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p5b1.png" mode="aspectFit"/></view> 
				<view class="content"><text>克苏恩的印记是新出的装备，可以有效增加坦克的生存能力和命中。</text></view>
				<view class="content"><text>督军的拥抱虽然是一件蓝装，但是不可否认的是，这却是当前阶段防战最强力的装备。</text></view>
				<view class="content"><text>维克洛尔大帝之戒、沉重的黑铁戒指可以有效增加防战的生存能力。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p5b2.png" mode="aspectFit"/></view>
				 
				<view class="content"><text>斯泰林的甲虫壳、龙牙饰物各位玩家都懂的，龙牙饰物如果价格太高不太适合玩家入手的话，玩家也可以选择破甲饰品。</text></view>
				<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/msdsj/p5b3.png" mode="aspectFit"/></view>
				 
				<view class="content"><text>以上就是P5阶段防战bis装备。</text></view> 
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