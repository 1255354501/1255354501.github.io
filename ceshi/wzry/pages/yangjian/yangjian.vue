<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/yangjian.png"  mode="aspectFit"></image>
			<text class="name">杨戬</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍：</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yangjian0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>神智侵蚀</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：杨戬附近的每个敌方英雄都会使杨戬减少自身10%所受控制效果的持续时间，最多减少30%</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yangjian1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>逆转乾坤</text>
						<text>冷却值：6</text>
						<text>消耗：45</text>
					</view>
				</view>
				<view class="text">
					<text>杨戬召唤哮天犬并让其向指定方向发起冲锋，对第一个命中的敌人造成150/180/210/240/270/300（+70%物理加成）点物理伤害，如果命中敌人，5秒内可再次释放该技能，释放后杨戬将冲向该敌人并发起一次攻击，造成225/270/315/360/405/450（+105%物理加成）点物理伤害并附加目标已损生命值16%的物理伤害；如果杨戬直接击败目标，将立即刷新逆转乾坤冷却时间</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yangjian2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>虚妄破灭</text>
						<text>冷却值：10/9.6/9.2/8.8/8.4/8.0</text>
						<text>消耗：45</text>
					</view> 
				</view>
				<view class="text">
					<text>杨戬向指定方向横扫，对范围内敌人造成250/300/350/400/450/500（+100%物理加成）点物理伤害并减少50%移动速度，持续2秒；如果命中的目标生命值百分比高于杨戬，将会晕眩1秒；命中敌人后，杨戬的普通攻击将附带80/120/160/200/240/280（+35%物理加成）点真实伤害，持续5秒</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/yangjian3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>根源之目</text>
						<text>冷却值：28/22/16</text>
						<text>消耗：100</text>
					</view>  
				</view>
				<view class="text">
					<text>杨戬可利用天眼施放3次激光，每次间隔不超过5秒，对路径上的敌人造成300/450/600（+72%物理加成）点物理伤害，第3次将会发出3道激光，同时被多道激光命中，从第二道激光开始只会造成30%的伤害；激光命中敌人时，造成的伤害值的50%会转化为杨戬的生命值</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议： 主升逆转乾坤副升虚妄破灭</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/终结</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zs.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>铭文推荐：异变+鹰眼+狩猎</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/yangjianmw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：这套铭文的属性伤害很高。物理穿透保证了他的伤害。10%的移速加成则使他在游走gank和团战支援时更加迅速。10%的攻速加成则是二技能普攻会带有真实伤害。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yangjiancz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：杨戬常常利用大招来完成续航和反杀，高额的冷却缩减属性让大招可以频繁的使用，名刀的被动效果则会成为极限反击的基石，允许操作更加极限并会有一些容错空间</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt"><text>推荐二：</text></view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/yangjiancz2.png" mode="aspectFit"></image></view> 
				<view class="tips"> 
					<text>Tips：杨戬需要控制血量，以发挥2技能的眩晕效果，但较低的血量常常会被直接击破，所以最后一件装备可以选择贤者的庇护来增加容错率</text>
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