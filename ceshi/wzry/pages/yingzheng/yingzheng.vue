<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/yingzheng.png"  mode="aspectFit"></image>
			<text class="name">嬴政</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yingzheng0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>王者审判</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：嬴政的普通攻击可以击穿目标，并造成120（+100%物理加成）（+35%法术加成）点法术伤害；攻击机关时会衰减50%的伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yingzheng1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>王者惩戒</text>
						<text>冷却值：8</text>
						<text>消耗：70</text>
					</view>
				</view>
				<view class="text">
					<text>嬴政在指定目标区域召唤黄金剑阵，持续2.5秒，每0.5秒对范围内的敌人造成145/173/201/229/257/285（+27%法术加成）点法术伤害；并减少30%移动速度，持续1秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yingzheng2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>王者守御</text>
						<text>冷却值：10</text>
						<text>消耗：40</text>
					</view> 
				</view>
				<view class="text">
					<text>嬴政开启王之护盾，护盾可抵免300/330/360/390/420/450（+55%法术加成）点伤害，并对附近敌人造成200/240/280/320/360/400（+40%法术加成）点法术伤害并清空装备为他们提供的物理攻击力，持续2秒，同时嬴政在3秒内增加随时间衰减的100点移动速度
被动：增加嬴政15/20/25/30/35/40点移动速度</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yingzheng3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>至尊王权</text>
						<text>冷却值：30</text>
						<text>消耗：120</text>
					</view>  
				</view>
				<view class="text">
					<text>嬴政展示王者权力，增加20%移动速度，持续5秒，期间将会号令90只飞剑持续向指定方向进行冲击，每只飞剑能造成64/78/92（+7%法术加成）点法术伤害，该技能会对小兵和野怪造成25%额外伤害，过程中嬴政可以使用其它技能</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升王者守御副升王者惩戒</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>红月+心眼+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/yingzhengmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：嬴政前期较其他法师类英雄普攻伤害很高，而且带有穿透效果，适合带攻速类铭文提高普攻输出，提高清兵速度，移速提高了嬴政的支援速度和自保能力。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yingzhengcz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：嬴政是典型的输出型法师，对于团队最大的帮助就是制造足够的伤害，因此我们选着全输出的出装来推动战局朝有利的方向前进</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yingzhengcz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：当对手回复能力较为突出时，可以选择梦魇之牙对其进行限制</text>
				</view>
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
		onLoad:function(option){
			try{
				if(option.ggg=="true"||option.ggg==true){
					const bannerAd = tt.createRewardedVideoAd({
					  adUnitId: "1ppposb2nct13fe588"
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
					        delta: 9999
					    });
					  }
					});
				}
			}catch(e){}
			
			// console.log(61,this.gg)
			
		},
		methods: {
			
		}
	}
</script>


<style>

</style>
