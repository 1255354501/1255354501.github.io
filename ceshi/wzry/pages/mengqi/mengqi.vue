<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/mengqi.png"  mode="aspectFit"></image>
			<text class="name">梦奇</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/mengqi0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>食梦</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：梦奇不断吞噬周围的噩梦，导致长胖；从最瘦到最胖总共会增长100点质量，耗时20秒；长胖会增加普通攻击和梦境萦绕、梦境漩涡的攻击范围，同时最多减少250点移动速度；并且伴随质量累积最多可以增加150点物理攻击、200点物理和法术防御、92自然回血值，数值强度随英雄等级成长；梦奇使用技能会消耗质量，导致减肥；梦奇的第三次普通攻击将变更为横扫，横扫会造成更大范围的伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/mengqi1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>梦境萦绕</text>
						<text>冷却值：3</text>
						<text>消耗：质量消耗：40/38/36/34/32/30</text>
					</view>
				</view>
				<view class="text">
					<text>梦奇消耗质量，让噩梦形成可抵免525/630/735/840/945/1050（+120%法术加成）点伤害的护盾，护盾生成瞬间对周围敌人造成350/420/490/560/630/700（+80%法术加成）法术伤害并减少其50%移动速度，持续1.5秒。使用技能后7秒内下三次普通攻击若命中敌人，每命中一名敌人均可回复6点质量。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/mengqi2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>梦境挥洒</text>
						<text>冷却值：5</text>
						<text>消耗：质量消耗：40</text>
					</view> 
				</view>
				<view class="text">
					<text>梦奇将噩梦盛装在容器中抛出，容器落地破碎造成200/250/300/350/400/450（+45%法术加成）点法术伤害，噩梦会残留在地面，最多持续5秒，每0.5秒对范围内的敌人造成100/125/150/175/200/225（+22%法术加成）点法术伤害并且范围内敌人将减少30%移动速度。梦奇若触碰残留在地面的噩梦，便会将其回收；同时最多可残留2团噩梦。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/mengqi3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>梦境漩涡</text>
						<text>冷却值：40/35/30</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>梦奇引导噩梦向指定位置输送，形成噩梦漩涡，对范围内的敌人每0.5秒造成150/225/300（+20%法术加成）点法术伤害并会减少50%移动速度，引导最多持续3秒；再次释放或输送结束，梦奇会传送到指定位置并拾起噩梦，对范围内敌人造成300/450/600（+40%法术加成）点法术伤害并将其击飞1秒；引导可被打断，并会执行50%冷却时间；梦奇至少拥有33点质量才能引导噩梦输送。被动：梦奇释放出的噩梦造成伤害时，目标会增加1层噩梦缠绕，每层噩梦缠绕会将其减少8%法术攻击力，持续4秒，最多可叠加5层。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升梦境挥洒副升梦境萦绕</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>梦魇+虚空+长生</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/mengqimw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：因为梦奇自身具有不错的双抗加成，所以符文推荐生命值和法术攻击为主，更有效的提升生存能力并弥补输出</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/mengqicz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：凭借高质量身板，梦奇可以选择物理输出流派近身与其他英雄肉搏，较大的攻击范围和高额的基础属性加成，让其在前中期会有巨大优势</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/mengqicz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：利用梦奇大招落地时的硬控和巫术法杖的强化效果打出普攻，造成的伤害可能会出乎你的预料</text>
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
