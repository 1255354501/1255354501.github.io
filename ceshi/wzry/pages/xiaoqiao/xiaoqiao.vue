<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/xiaoqiao.png"  mode="aspectFit"></image>
			<text class="name">小乔</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xiaoqiao0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>治愈微笑</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：小乔释放技能命中敌人时，会增加25％移动速度，持续2秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xiaoqiao1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>绽放之舞</text>
						<text>冷却值：5</text>
						<text>消耗：45</text>
					</view>
				</view>
				<view class="text">
					<text>小乔向指定方向扔出一把回旋飞行的扇子，会对第一个命中的敌人造成500/580/660/740/820/900（+80％法术加成）点法术伤害，每次命中后伤害都会衰减20％，最低衰减至初始伤害的40％</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xiaoqiao2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>甜蜜恋风</text>
						<text>冷却值：10/9.6/9.2/8.8/8.4/8</text>
						<text>消耗：70</text>
					</view> 
				</view>
				<view class="text">
					<text>小乔在指定区域召唤出一道旋风，对区域内敌人造成300/340/380/420/460/500（+50％法术加成）点法术伤害并击飞1.5秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/xiaoqiao3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>星华缭乱</text>
						<text>冷却值：42/35/28</text>
						<text>消耗：140</text>
					</view>  
				</view>
				<view class="text">
					<text>小乔召唤流星并不断向附近的敌人坠落，召唤持续5秒，每颗流星会造成400/500/600（+100％法术加成）点法术伤害，每个敌人最多承受4次攻击，当多颗流星命中同一目标时，从第二颗流星开始将只造成50％伤害。释放期间持续获得被动加速效果。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升绽放之舞副升甜蜜恋风</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：梦魇+心眼+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/xqmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：狩猎提升10％移速加成，对于被动具有加速效果的小乔来说，适合放风筝，可以进行中远距离的输出，机动性高。心眼和梦魇提升法穿效果。对于小乔这种伤害比较高的英雄来说，增加法穿可以在对方出法抗时也打出高额伤害。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/xqzb1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：秘法之靴配合法术穿透铭文，能够让小乔在前期就打出足够的伤害，随后补充全输出装，让敌人不敢轻易尝试突进到小乔的流星范围内</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/xqzb2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：冷却属性让小乔可以在战场外围打出足够次数的技能，并且通过吸血属性，让小乔在混战中维持一个比较健康的血线</text>
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
