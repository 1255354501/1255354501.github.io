<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/zhaoyun.png"  mode="aspectFit"></image>
			<text class="name">赵云</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhaoyun0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>龙鸣</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：赵云每损失3%最大生命值，就会获得减少1%所受到的伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhaoyun1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>惊雷之龙</text>
						<text>冷却值：7/6.4/5.8/5.2/4.6/4</text>
						<text>消耗：30</text>
					</view>
				</view>
				<view class="text">
					<text>赵云执枪向指定方向冲锋，对路径上的敌人造成190/214/238/262/286/310（+100%物理加成）点物理伤害；冲锋后的下一次普通攻击会造成65/74/83/92/101/110（+135%物理加成）点物理伤害并将其减少25%移动速度，持续2秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhaoyun2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>破云之龙</text>
						<text>冷却值：6/5.6/5.2/4.8/4.4/4</text>
						<text>消耗：40</text>
					</view> 
				</view>
				<view class="text">
					<text>赵云向指定方向连续4次刺出龙枪，对指定方向敌人每次造成100/115/130/145/160/175（+45%物理加成）点物理伤害；每次命中敌方后回复25/32/39/46/53/60（+12%物理加成）点生命值</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/zhaoyun3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>天翔之龙</text>
						<text>冷却值：18/15/12</text>
						<text>消耗：75</text>
					</view>  
				</view>
				<view class="text">
					<text>赵云跃向空中，向目标区域发动雷霆一击，对范围内敌人造成350/450/550（+130%物理加成）点物理伤害，同时标记敌人为感电目标，对圈内敌人击飞1秒；赵云的普通攻击和技能伤害对感电目标会造成额外30/45/60（+13%物理加成）点法术伤害</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升破云之龙副升惊雷之龙</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：终结/净化</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/jh.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>异变+鹰眼+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/zhaoyunmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：100的物穿使赵云在前期击杀脆皮上更加有效，在面对面前排时也有一定的击杀能力，45的物理攻击也是提高了前期的伤害量，而且在清野上也更加的快速，10%的移速加成是为了赵云在gank、支援、追击、逃跑时跑的更快。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhaoyuncz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：被动会让赵云在低血量时获得足够的防御属性因此几乎不会被秒杀，所以在装备选择上可以选择爆发直接对敌方后排造成威胁</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/zhaoyuncz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：赵云拥有2个位移技能，配合一定坦度的装备，可以在团战中多次进出，挤压对方输出空间</text>
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
