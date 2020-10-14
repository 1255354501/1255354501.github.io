<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/baiqi.png"  mode="aspectFit"></image>
			<text class="name">白起</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/baiqi0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>反击之镰</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>白起造成或受到伤害时会增加能量，提升移动速度和治疗效果，最多可以提升100点移动速度和80%的治疗效果</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/baiqi1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>血之回响</text>
						<text>冷却值：5</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>白起回旋大镰血洗四方，对范围内敌人造成100/180/260/340/420/500（+33%物理加成）点物理伤害，并回复2%的最大生命值，只命中野怪或者小兵效果减半。蓄力时间越久造成的伤害和获得的回复越高，最大可以造成基础值3倍的伤害和获得基础值3倍的回复。被动：白起受伤时有20%几率释放血之回响。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/baiqi2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>死神之镰</text>
						<text>冷却值：14/13/12/11/10/9</text>
						<text>消耗：0</text>
					</view> 
				</view>
				<view class="text">
					<text>白起在指定位置召唤镰刀，镰刀在一定延迟后收回，对范围内的敌人造成200/230/260/290/320/350（+100%物理加成）点法术伤害并将其拉回；同时敌人会减少50%移动速度，持续2.5秒。被动：白起对生命值低于30%的目标会额外造成30%伤害。</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/baiqi3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>傲慢嘲讽</text>
						<text>冷却值：40/35/30</text>
						<text>消耗：0</text>
					</view>  
				</view>
				<view class="text">
					<text>白起向指定位置跳跃，增加100点能量并造成300/380/460（+100%物理加成）点法术伤害并嘲讽敌人，持续1/1.3/1.5秒（随技能等级成长）嘲讽时间会随着白起的额外生命值增加，每1000点额外生命之额外提供0.2秒嘲讽时长，最多持续2.5秒。</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升血之回响副升死神之镰</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/弱化</text> 
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/rh.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>宿命+虚空+调和</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/dmmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：红色宿命可以增加攻速与物理防御，蓝色调和可以让白起更加灵活。绿色虚空可以增加白起的冷却缩减。同时三种铭文都可以增加血量，让白起扛得住伤害。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/baiqicz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：当对方物理伤害高时使用此套装备，让白起能扛能打。</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/baiqicz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：当对方法术伤害高时使用此套装备，让白起灵活稳定。</text>
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
