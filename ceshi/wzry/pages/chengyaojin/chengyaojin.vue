<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/chengyaojin.png"  mode="aspectFit"></image>
			<text class="name">程咬金</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/chengyaojin0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>舍生忘死</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：程咬金每损失1%最大生命值获得额外3～7点物理攻击力，增加幅度随英雄等级成长，并且程咬金释放普通技能会消耗当前10%的最大生命值，大招消耗16%的当前生命值；每次释放技能还会回复8%已损失生命值，回复过程持续3秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/chengyaojin1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>爆裂双斧</text>
						<text>冷却值：15/14.4/13.8/13.2/12.6/12</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>程咬金向指定目标位置猛力一跃并挥动双斧斩击，对范围内敌人造成120/155/190/225/260/295（+50%物理加成）点物理伤害并造成50%的减速效果，持续2秒；被动：程咬金的普通攻击命中敌方英雄会减少1秒爆裂双斧的冷却时间。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/chengyaojin2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>激热回旋</text>
						<text>冷却值：5</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>程咬金转动双斧劈砍敌人，对范围内的敌人造成两段伤害，每段造成125/150/175/200/225/250（+60%物理加成）点物理伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/chengyaojin3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>正义潜能</text>
						<text>冷却值：30</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>程咬金迸发正义热情，每秒回复8%最大生命，同时增加移动速度30%，持续5秒。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升激热回旋副升爆裂双斧</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：治疗术/晕眩</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/xy.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>异变+均衡+隐逸</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/chengyaojinmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：程咬金定位是战士和坦克，既坦克承受伤害的能力又有输出能力；异变可以为程咬金提升一些攻击力和穿透能力，蓝色隐匿可以提供攻击力和移速，方便黏人输出，绿色均衡提升双抗可以让程咬金承受更多伤害。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/chengyaojincz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：程咬金需要能够准确判断自身血量是否安全，而大幅提升自身最大生命值属性能够让容错范围大大加强，并且凭借被动增加的攻击力一样能够打出足够威胁敌方的伤害</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/chengyaojincz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：极寒风暴带来的冷却缩减能让程咬金技能空窗期缩短并且低血量的短兵相接时会频繁的触发极寒的伤害减速效果</text>
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
