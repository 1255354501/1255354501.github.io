<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/ake.png"  mode="aspectFit"></image>
			<text class="name">阿轲</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/ake0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>死吻</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：阿轲在敌人身后发起的攻击，必定暴击，在敌人正面发起的所有攻击，必定不暴击；阿轲的初始暴击伤害为125%，每1%暴击几率将额外的增加0.5%暴击伤害；阿轲对非英雄目标最多造成1500伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/ake1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>弧光</text>
						<text>冷却值：4/3.8/3.6/3.4/3.2/3</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>阿轲立即向指定方向挥动双刺发动2次攻击，每次造成150/170/190/210/230/250（+65%额外物理加成）点物理伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/ake2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>瞬华</text>
						<text>冷却值：9/8.6/8.2/7.8/7.4/7</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>阿轲朝指定方向快速位移，在抵达终点后，立即对附近的一名敌人发起攻击，提升自己40%攻速持续3秒，造成270/306/342/378/414/450（+90%额外物理加成）点物理伤害并标记目标，持续10秒；阿轲每次攻击标记目标时会将其减少50%移动速度，持续1秒，并缩短瞬华1秒冷却时间；阿轲被标记目标攻击时会减少30%所受到的伤害；阿轲同一时间只能标记一个敌人。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/ake3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>幻舞</text>
						<text>冷却值：20/18/16</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>阿轲短暂准备后进入隐身状态，处于隐身状态时，每0.5秒回复100/150/200（+25%额外物理加成）点生命值并增加40%移动速度，持续3秒；当阿轲发起攻击时会解除隐身状态，并在3秒内增加自身120/140/160点攻击力，同时每当对敌人造成伤害时会增加30%移动速度，持续1秒。被动：击败英雄或者助攻时刷新所有技能冷却时间。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升弧光副升瞬华</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：终结/净化</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jh.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>无双+鹰眼+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/akemw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：选择无双提升暴击效果，配合无尽大大提升阿轲的爆发能力，狩猎的移速配合位移大招，可以让阿轲更轻松接近对手完成刺杀，攻速可以让阿轲在背击时可以配合技能完成普攻，鹰眼的物穿效果可以为阿轲提供稳定的输出能力。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/akecz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：阿轲的被动让无尽战刃的暴击效果提升获得了极大收益增强，配合暗影战斧几乎能秒杀任何脆皮对手</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/akecz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：当对手逐渐获得了物理防御后，可以补充破甲属性，让前排英雄也需要随时提防被阿轲刺杀</text>
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
