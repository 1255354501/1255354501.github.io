<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/zhugeliang.png"  mode="aspectFit"></image>
			<text class="name">诸葛亮</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhugeliang0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>策谋之刻</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：诸葛亮法术命中敌人时，会为自己施加谋略刻印，当刻印达到5层时，会召唤5颗法球围绕自身，短暂时间后依次飞出攻击附近的敌人造成270(+52%法术加成)点法术伤害；法球在1秒内连续命中同一目标时，从第二颗法球开始将只造成20%伤害；法球会优先攻击敌方英雄，法球不会攻击非战斗状态的野怪</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhugeliang1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>东风破袭</text>
						<text>冷却值：8/7.4/6.8/6.2/5.6/5</text>
						<text>消耗：60</text>
					</view>
				</view>
				<view class="text">
					<text>诸葛亮指定方向发射三颗法球，对路径上的敌人造成500/600/700/800/900/1000（+70%法术加成）点法术伤害，如果多颗法球命中同一目标时，从第二颗法球开始将只造成20%伤害；每颗法球能触发1次谋略刻印</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhugeliang2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>时空穿梭</text>
						<text>冷却值：1.5</text>
						<text>消耗：60</text>
					</view> 
				</view>
				<view class="text">
					<text>诸葛亮快速朝指定方向闪烁，并在起始位置和终点位置同时产生一次法力场，对范围内敌人造成350/420/490/560/630/700（+52%法术加成）点法术伤害；同一目标如果在5秒内多次受到法力场影响，将会减少其90%移动速度，持续3秒，该效果会持续衰减；当目标被多个法力场同时命中，将只造成50%伤害；每次法力场影响到敌人，都会触发1次谋略刻印；每10秒可准备1次时空穿梭，最多可储备3次时空穿梭</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhugeliang3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>元气弹</text>
						<text>冷却值：35/30/25</text>
						<text>消耗：120</text>
					</view>  
				</view>
				<view class="text">
					<text>诸葛亮短暂蓄力后锁定目标发出一击强力元气弹，命中后爆炸对范围内敌人造成450/630/810（+55%法术加成）点法术伤害；命中敌人时，其每损失1%最大生命值元气弹就会增加2%伤害；蓄力时诸葛亮可以移动，并且可以使用时空穿梭；元气弹命中敌人可触发1次谋略刻印；如果元气弹直接击败敌方英雄，立即发动策谋之刻，并减少80%元气弹的冷却时间；释放目标如果为敌方英雄，但其在爆炸前已经死亡，则会返还该技能80%冷却时间；元气弹碰撞其他敌方英雄时会直接销毁并触发爆炸；元气弹飞行过程中碰撞到敌方非英雄目标，将会触发同等伤害并将其击飞0.5秒</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升东风破袭副升时空穿梭</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/净化</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jh.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：梦魇+怜悯+轮回</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/zhugeliangmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：诸葛亮作为强力法师，红色梦魇提升法术攻击、法术穿透，保证打出强力伤害。绿色怜悯提升技能冷却，保证可以多放技能、
多打出被动，对敌人造成高额伤害。蓝色轮回提升法术吸血能力，在对战中保证生存能力以及续航能力。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhugeliangcz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>ips：诸葛亮的作战半径较小，因此十分容易被消耗血量，故而噬神之书的恢复能力就是诸葛亮非常需要的属性了，在前中期能帮助
诸葛亮能在线上持续性的给予敌方压力</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhugeliangcz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：诸葛亮的技能释放频率较高，极寒风暴能够提供一定坦度，还能让其更加灵活的释放技能</text>
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