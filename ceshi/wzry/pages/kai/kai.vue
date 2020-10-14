<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/kai.png"  mode="aspectFit"></image>
			<text class="name">凯</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/kai0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>修罗之魂</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：铠拥有精湛的战斗技巧，当铠的普通攻击和极刃风暴只命中了一个目标时将会额外造成50%伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/kai1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>回旋之刃</text>
						<text>冷却值：10</text>
						<text>消耗：60</text>
					</view>
				</view>
				<view class="text">
					<text>铠向指定方向投掷刀刃，对命中的敌人造成150/180/210/240/270/300（+60%物理加成）点物理伤害并减少其30%移动速度，持续2秒；刀刃命中敌人后会在敌人间弹射，最多弹射4次；命中的第一个目标将会减少80%移动速度，持续1秒；当刀刃命中敌人时，铠将回复10%最大生命值并且减少30%回旋之刃的冷却时间，同时增加20/22/24/26/28/30%移动速度和15/17/19/21/23/25%攻击速度，持续3秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/kai2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>极刃风暴</text>
						<text>冷却值：6</text>
						<text>消耗：50</text>
					</view> 
				</view>
				<view class="text">
					<text>铠向指定方向发动两次挥砍，每次80/160/240/320/400/480（+30%物理加成）点物理伤害，并且第二次挥砍会将敌人击飞0.5秒；同时使得下一次普通攻击更变为冲砍，冲砍会冲锋至目标身旁并发动普通攻击，冲砍会额外造成150/180/210/240/270/300点成物理。被动：脱离战斗后铠每秒回复1%最大生命值及最大法力值并且会增加10/12/14/16/18/20点移动速度</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/kai3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>不灭魔躯</text>
						<text>冷却值：60/55/50</text>
						<text>消耗：120</text>
					</view>  
				</view>
				<view class="text">
					<text>铠召唤魔铠，每0.5秒会对自身附近的敌人造成60点法术伤害，持续8秒；同时会强化自身100/150/200点攻击力、50点移动速度、60/95/130点伤害格挡；魔铠将在1秒后降临，对附近造成300点法术伤害 </text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升回旋之刃副升极刃风暴</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：终结/净化</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jh.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>传承 +鹰眼+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/kaimw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：铠的一技能回复能力与物理加成有关，传承增加物理攻击力。鹰眼所提供的物理穿透提升后期伤害。隐匿不仅可以提高铠的物理攻击力，还可以增加铠的移速更好的追击敌人。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/kaicz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：半肉出装的铠，侵略性不减且生存能力得到提升，暗影战斧和极寒风暴保障前中期续航，宗师之力让铠的强化普攻打出爆发性伤害</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/kaicz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：铠凭借被动在面对落单的敌方英雄时，会获得大幅提升伤害能力，全输出装备加成下，可以做到一击必杀</text>
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
