<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/sunce.png"  mode="aspectFit"></image>
			<text class="name">孙策</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunce0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>怒潮</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：每过6秒，孙策的下一次普攻附带额外110(+60%物理加成)点物理伤害，并回复自身55（+30%物理加成）（+3%已损生命）点生命值;被动：每次受到物理伤害或真实伤害时，孙策获得1层不屈效果：护甲值提升20点，持续6秒，可叠加10层</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunce1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>劈风斩浪</text>
						<text>冷却值：8</text>
						<text>消耗：50</text>
					</view>
				</view>
				<view class="text">
					<text>孙策向前冲锋，对路径上敌人造成110/132/154/176/198/220（+45%物理加成）点物理伤害。冲锋到终点后造成一次范围220/264/308/352/396/440（+90%物理加成）点物理伤害，短暂延迟后这个范围喷发波涛，再次造成相同伤害，并对命中敌人造成1秒击飞效果</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunce2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>惊涛骇浪</text>
						<text>冷却值：10/9.4/8.8/8.2/7.6/7</text>
						<text>消耗：50</text>
					</view> 
				</view>
				<view class="text">
					<text>连续三次向前踏步并劈砍，每次造成的物理伤害逐渐提高25%，基础造成160/192/224/256/288/320（+60%物理加成）点物理伤害，每次命中敌人造成30%减速，减速效果可叠加。使用技能会重置普通攻击冷却时间</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/sunce3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>长帆破浪</text>
						<text>冷却值：45/40/35</text>
						<text>消耗：100</text>
					</view>  
				</view>
				<view class="text">
					<text>驾船冲锋，速度逐渐提升，期间霸体，冲锋持续7秒。撞到兵线野怪造成伤害和击飞，撞到阻挡物、敌方英雄、航行时间结束时船都会爆炸造成300/450/600（+120%物理加成）点物理伤害和击飞，击飞时间1～1.5秒（与已航行时间成正比）。航行过程中可释放第二段，释放后船继续航行固定距离，同时孙策弃船朝选定方向跳跃固定距离。撞击到敌方英雄会获取5层不屈效果</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升劈风斩浪副升惊涛骇浪</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/终结</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：异变+鹰眼+隐逸</text></view>
				<view class="mwpic"><image src="http://s1.catelyn.info/zjxcx/wzry/suncemw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text></text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/suncecz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：孙策可以通过2技能重置普攻，把握好节奏可以连续触发宗师之力的被动效果持续的输出高额伤害 </text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/suncecz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：孙策因为被动效果是典型的越战越强的英雄，在触发血魔之怒时，自身战斗强度会到达极高，而后在往往可以逆转局势</text>
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