<template>
	<view class="content">
		<view class="title"><text>祖尔宛歼灭战</text></view>
		<view class="text-area">
			<view class="text-title"><text>最后的三斗神名叫鬼神祖尔宛，是南方大陆美拉西迪亚的人马族所信仰的代表无限的神明。虽然祖尔宛是象征着正义和胜利的蛮神，却在5000年前落入亚拉戈的拘束装置，被束缚至今。</text></view>
			<view class="text-title"><text>但是，由于鬼神信徒的计谋，祖尔宛正在一点点觉醒。冒险者和帝国军决定暂时联手，在帝国将军雷古拉以生命为代价为冒险者创造了良机后，冒险者和鬼神之间的死斗一触即发！</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zuerwan80.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：抑制绝境Z1T9</text></view>
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
				<view class="text-text-text"><text>等级要求：60级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于235</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>新的同伴</text></view>
				<view class="text-text-text"><text>战斗精英魔法导师60级</text></view>
				<view class="text-text-text"><text>蛇心</text></view>
				<view class="text-text-text"><text>石之家X:6.1,Y:5.2</text></view>
				<view class="text-text-text"><text>前置任务：黄金色的灾厄</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.祖尔宛</text></view>
				<view class="text-text-text"><text>==提示：三斗神第三发，真的没什么存在感，冲就完事了…==</text></view><view class="text-text-text"><text>开场MT把BOSS拉背对，圆形场地会逐块碎落，注意不要掉下去。其他出啥躲啥，最后一块板子伴随全屏白光所有人降落地面。</text></view>
				<view class="text-text-text"><text>由于BOSS会使用正面超远距离顺劈，MT一定要时刻记得让BOSS背对人群，如果怕自己转向，可以在12点标个A指示方向。</text></view><view class="text-text-text"><text>下来之后有各种可以躲的圆圈直线和分摊(一般默认在场地中央分摊，可以灵性)，BOSS会随机点名一名玩家读条波动炮，注意躲开BOSS正面。</text></view><view class="text-text-text"><text>小怪阶段所有DPS先集火“智慧信徒”(站在原地读条的)，两个T去拉剩下的小怪，打倒“智慧信徒”之后，转火“意志信徒”，最后集火剩下的即可。</text></view><view class="text-text-text"><text>“智慧信徒”→“意志信徒”</text></view>
				<view class="text-text-text"><text>三波小怪打完阿胡拉马自达进入最后阶段。</text></view><view class="text-text-text"><text>最后阶段只比之前多一个冰火buff，当场地上出现冰火图腾之后，看自己身上的buff，冰踩冰，火踩火即可，其他的跟之前都一样(都有范围提示)。</text></view><view class="text-text-text"><text>冰踩冰，火踩火。</text></view> 
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zuerwan84.png" mode="aspectFit"></image></view>
			 
				
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