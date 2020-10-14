<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/diaocan.png"  mode="aspectFit"></image>
			<text class="name">貂蝉</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/diaocan0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>语·花印</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：貂蝉的技能命中会为敌人叠加花之印记，持续8秒，叠加满4层后印记触发，回复自身120点生命，同时会对周围敌人造成160（+64％法术加成）点真实伤害并减少其90％移动速度，持续3秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/diaocan1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>落·红雨</text>
						<text>冷却值：5</text>
						<text>消耗：40</text>
					</view>
				</view>
				<view class="text">
					<text>貂蝉向指定方向挥出花球，花球飞出一段时间后会返回貂蝉手中，挥出和返回会对路径上的敌人造成180/220/260/300/340/380(+57％法术加成）点法术伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/diaocan2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>缘·心结</text>
						<text>冷却值：10</text>
						<text>消耗：50</text>
					</view> 
				</view>
				<view class="text">
					<text>貂蝉瞬间消失并立即出现在指定位置，同时会散发3枚花球攻击附近的敌人，每枚造成140/155/170/185/200/215(+24％法术加成）点法术伤害，如果花球命中敌人，还会减少4秒缘·心结的冷却时间</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/diaocan3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>绽·风华</text>
						<text>冷却值：40/35/30</text>
						<text>消耗：80</text>
					</view>  
				</view>
				<view class="text">
					<text>貂蝉绽放风华在原地结成法阵，法阵生成及消失时都将造成210/245/280（+50％法术加成）点法术伤害，当貂蝉处于法阵范围内，落·红雨和缘·心结会获得额外的冷却缩减</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升落·红雨副升缘·心结</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>梦魇+怜悯+轮回</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/diaocanmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：法术攻击和穿透可以在初期保障伤害，应对敌方换血和快速清线，吸血提供的恢复能力可以增加貂蝉的赖线能力；貂蝉对冷却缩减的效果非常依赖，符文选择带10％冷却，在初期配合回血书就有一定的作战能力。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/diaocancz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：大量的肉装可以支撑起足够的空间让貂蝉可以在双方阵前翩翩起舞，配合不死鸟的回复效果还能有一定的续航，让貂蝉持续作战</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/diaocancz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：貂蝉在极快的位移能力和短暂无敌效果配合下可以躲避掉足够的伤害，配合辉月的主动效果往往能够拖住对方输出的节奏，为队友创造机会</text>
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
