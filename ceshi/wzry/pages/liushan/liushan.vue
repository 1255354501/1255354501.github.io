<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/liushan.png"  mode="aspectFit"></image>
			<text class="name">刘禅</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/liushan0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>磁力屏障</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：刘禅可对机关释放技能造成等量伤害，并且刘禅的控制效果可对机关造成干扰效果，持续1秒；当刘禅技能对机关造成伤害时会掠夺零件为自身回复200-396点生命值，回复效果随英雄等级成长。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/liushan1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>小霸王护盾</text>
						<text>冷却值：10/9.4/8.8/8.2/7.6/7</text>
						<text>消耗：50</text>
					</view>
				</view>
				<view class="text">
					<text>刘禅立即重置普攻并开启护盾向前发起冲锋，吸收600/840/1080/1320/1560/1800点伤害同时提升自身25%移动速度持续3秒，并强化下一次普通攻击，造成350/400/450/500/550/600（+122%物理加成）点物理伤害并击飞敌人1秒。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/liushan2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>机关魔爪</text>
						<text>冷却值：8</text>
						<text>消耗：55</text>
					</view> 
				</view>
				<view class="text">
					<text>刘禅操纵机关熊猫向指定方向伸出魔爪进行攻击，对范围内的敌人造成400/480/560/640/720/800（+100%物理加成）点物理伤害并且会将范围内敌人眩晕1秒。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/liushan3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>暴走熊猫</text>
						<text>冷却值：40/35/30</text>
						<text>消耗：100</text>
					</view>  
				</view>
				<view class="text">
					<text>刘禅操纵机关熊猫展开双臂持续旋转攻击附近敌人，持续3秒；对方范围内的敌人每0.5秒造成240/320/400（+75%物理加成）点物理伤害。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升小霸王护盾副升机关魔爪</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：治疗术/晕眩</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/xy.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>宿命+虚空+调和</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/liushanmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：宿命增加刘禅的坦克能力；调和，配合1技能控制效果，可以黏住大多数核心输出；刘禅的技能有控制和拆塔的效果，虚空的冷却缩减可以起到加快拆塔速度的作用。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/liushancz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：刘禅通常会与敌人贴身肉搏，极寒风暴能提供高额的冷却缩减并且让刘禅的生存得到提升，还能造成伤害制造威胁让对手进退两难</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/liushancz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：当对手射手比较强势时，选择反伤刺甲进行反制，由于控制技能冷却较短，贤者的庇护还能提供第二套控制的机会</text>
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
