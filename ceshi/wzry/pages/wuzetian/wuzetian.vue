<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/wuzetian.png"  mode="aspectFit"></image>
			<text class="name">武则天</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/wuzetian0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>天命之女</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：武则天脱离战斗后会增加50点移动速度，同时每秒会回复2％最大法力值。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/wuzetian1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>女帝辉光</text>
						<text>冷却值：3</text>
						<text>消耗：60</text>
					</view>
				</view>
				<view class="text">
					<text>武则天向指定方向释放能量法球，命中敌人后爆开，对范围内的敌人造成360/420/480/540/600/660（+47％法术加成）点法术伤害；由被动强化的女帝辉光将造成双倍伤害并使目标击飞0.75秒；被动：武则天释放任意两个技能后，女帝辉光会立即冷却并得到强化，持续3秒。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/wuzetian2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>女帝威严</text>
						<text>冷却值：8/7.6/7.2/6.8/6.4/6</text>
						<text>消耗：90</text>
					</view> 
				</view>
				<view class="text">
					<text>武则天的威严不可侵犯，击退附近的敌人并对他们造成250/280/310/340/370/400（+30％法术加成）点法术伤害；如果技能命中敌人，自身会增加30/34/38/42/44/50％移动速度，持续1秒，命中的敌人会减少30/34/38/42/46/50％的移动速度，持续2秒。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/wuzetian3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>生杀予夺</text>
						<text>冷却值：80/70/60</text>
						<text>消耗：150</text>
					</view>  
				</view>
				<view class="text">
					<text>武则天以女帝权威施行制裁，在所有敌方英雄脚下召唤法阵并引爆，对范围内敌人造成750/925/1100（+75％法术加成）点法术伤害并晕眩1秒，同时获取敌方视野，持续3秒。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升女帝辉光副升女帝威严</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>梦魇+献祭+轮回</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/wuzetianmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：一定的冷却缩减可以保证技能持续输出，法强和法穿在前中期能保证一定的伤害量，法术吸血保证续航能力，在线上依赖被动回蓝，技能吸血来保证发育。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/wuzetiancz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：圣杯能为武则天带来足够的续航，让其可以一直守护中路并利用大招支援边路，发挥其优势能力</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/wuzetiancz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：武则天的技能加成较低，当对方近战英雄较多时，可以选择半肉出装，并主动近身打出控制</text>
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
