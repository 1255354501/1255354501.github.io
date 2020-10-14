<template>
	<view class="content">
		<view class="title"><text>皇都伊修加德保卫战</text></view>
		<view class="text-area">
			<view class="text-title"><text>云廊大桥横跨云海苍穹，是通往皇都伊修加德的唯一要道。在名为“圣人达奈芬的首饰”这一巨大魔法障壁的保护下，这座大桥能够抵御龙族的任何攻击。</text></view><view class="text-title"><text>然而冰之巫女却破坏了魔法障壁的最外层，并招来大量的龙族对山之都发起了猛烈的攻击。维刹普巨龙更是企图借此机会将魔法障壁完全破坏。无论如何，一定要与神殿骑士团一起，拼死抵挡住龙族的进攻！</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/xiujiade180.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：云廊</text></view>
		    	<view class="text-text-text"><text>任务时限：60分钟</text></view>
		    	<view class="text-text-text" style="display: flex;align-items: center;text-indent: 80rpx;">
					<view class="text-text-text"><text>队伍构成：</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fashi.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhiliao.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/jinzhan.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>4</text></view>
				</view>
				
				<view class="text-text-text"><text>超越之力：每次失败会增加10%（最多5次）</text></view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>神典石：15</text></view>
				<view class="text-text-text"><text>新手奖励：100</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：50级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于90</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>伊修加德保卫战</text></view>
				<view class="text-text-text"><text>战斗精英和魔法导师（除设限特职）50级</text></view>
				<view class="text-text-text"><text>马瑟兰</text></view>
				<view class="text-text-text"><text>库尔札斯中央高地X:18.1,Y:14.9</text></view>
				<view class="text-text-text"><text>前置任务：交错的思绪</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.维刹普巨龙</text></view>
				<view class="text-text-text"><text>BOSS不会攻击玩家，所以只需要注意不要走到BOSS的脚下，尽量在肚子处进行攻击。</text></view><view class="text-text-text"><text>大桥两侧有大炮，最佳分配是一T一奶负责开炮，另一个T拉住出现的小怪到boss肚子下方便大炮的aoe打击。</text></view><view class="text-text-text"><text>每个魔法障壁前会有两排大炮，BOSS走到第一排两个大炮前会释放正面aoe击毁大炮，开炮的队员躲避aoe后可以直接跑到下一排大炮处继续攻击。</text></view><view class="text-text-text"><text>途中NPC会提示玩家使用对龙弩炮进行攻击，需要一个队员跑到桥一侧处的高塔上，等BOSS进去提示的红圈后开炮即可。</text></view><view class="text-text-text"><text>到最后一个魔法障壁前的路上会有火药桶，对准火药桶开炮也能给BOSS带来一些伤害。</text></view><view class="text-text-text"><text>到最后也就是第三个屏障时，BOSS会进行正面长条的aoe攻击，NPC提示打开拘束器，开炮的两个队员负责开桥上的拘束器，位置在大炮前面一点。</text></view><view class="text-text-text"><text>如果在到达城门前都没有打死BOSS，任务就会失败。</text></view><view class="text-text-text"><text>注：死亡后可直接返回起始地点，有捷径可以直接传送到BOSS处，无需等待奶妈复活。</text></view> 
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/xiujiade184.png" mode="aspectFit"></image></view>
				 
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad:function(){
			let self=this
			uni.getStorage({
			    key: 'ggg',
			    success: function (res) { 
					self.ggg=res.data; 
					if(res.data=="true"||res.data==true){
						const bannerAd = tt.createRewardedVideoAd({
						  adUnitId: "3gmo9echhk53v76s7h"
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
						    uni.navigateBack({
						        delta: 1
						    });
						  }
						});
					}
			    }
			}); 
		},
		methods: {
			
		}
	}
</script>

<style> 
@import url("/static/anying.css");
</style>