<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/yunzhongjun.png"  mode="aspectFit"></image>
			<text class="name">云中君</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yunzhongjun0.png" mode="aspectFit"></image>
					<view class="text1">
						<text> 云间游</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：云中君气息调息完成后展翅飞行，增加移动速度的同时能够免受地形阻挡的影响，飞行期间云中君的普通攻击将会变为爪击，并撕裂目标，造成持续的流血伤害，目标被撕裂后将会受到额外的伤害效果；云中君进入战斗后将逐渐消耗气息，而脱离战斗后将会回复；爪击命中目标能够回复气息</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yunzhongjun1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>天隙鸣</text>
						<text>冷却值：15</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>云中君振翅加速，向当前方向俯冲，撕裂目标后向后滑行，并对目标造成短暂的晕眩与物理伤害，俯冲能够威慑命中的目标，如果无法离开云中君一定范围，则会降低对云中君的伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yunzhongjun2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>若英·华彩</text>
						<text>冷却值：6</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>云中君展翅舞蹈，引导气流弹开控制效果，并射出羽箭对范围内目标造成伤害，期间成功弹开控制则会回复气息</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yunzhongjun3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>风雷引</text>
						<text>冷却值：40</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>云中君引风雷之势冲天而上回复气息，短暂延迟后向下俯冲，造成伤害，而后引发羽箭阵雨，造成减速和伤害效果</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升天隙鸣副升若英·华彩</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：惩击/闪现</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/cj.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：异变+鹰眼+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/yunzhongjunmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：经典的刺客百穿铭文搭配，因为云中君优先狩猎的目标为后排，可以最大化的利用属性效果</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yunzhongjuncz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：打野出门装，吸血属性能让云中君保有一定的续航能力，随其随时可以支援作战，全输出出装可以给予敌方后排强大的压力，利用机动性分带兵线并且随时支援队友建立优势推荐二： </text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yunzhongjuncz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：常规出门装，配合铭文的穿透效果，此时云中君已经可以对后排造成毁灭性的打击了，利用翻越地形的能力，多多突袭敌方脆皮，后期补充破甲装备，让敌方前排英雄也能感受到云中君强大的输出能力</text>
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