<template>
	<view class="content">
		<view class="title">
			<image class="pic" src="http://s1.catelyn.info/zjxcx/wzry/gaojianli.png"  mode="aspectFit"></image>
			<text class="name">高渐离</text>
		</view>
		<view class="content-text">
			<text class="title">技能介绍</text>
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/gaojianli0.png" mode="aspectFit"></image>
					<view class="text1">
						<text>哀歌</text>
						<text>冷却值：0</text>
						<text>消耗：0</text>
					</view>
				</view>
				<view class="text">
					<text>被动：高渐离的普通攻击或释放技能可视作一次演奏，每四次演奏后的下一次普通攻击将会向目标弹奏出带有击穿效果的能量和弦，造成300（+100%法术加成）的法术伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/gaojianli1.png" mode="aspectFit"></image> 
					<view class="text1">
						<text>狂歌</text>
						<text>冷却值：7</text>
						<text>消耗：80</text>
					</view>
				</view>
				<view class="text">
					<text>高渐离弹奏出音符，锁定附近至多2名敌人造成350/410/470/530/590/650（+47%法术加成）点法术伤害；音符命中敌人后，会向附近的敌人进行弹射，音符至多弹射2次；当多个音符命中同一目标时，从第二个音符开始将只造成30%伤害</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/gaojianli2.png" mode="aspectFit"></image>
					<view class="text1">
						<text>离歌</text>
						<text>冷却值：10/9.4/8.8/8.2/7.6/7</text>
						<text>消耗：70</text>
					</view> 
				</view>
				<view class="text">
					<text>高渐离震慑琴弦，对附近敌人造成500/560/620/680/740/800（+65%法术加成）点法术伤害并减少其35%/40%/45%/50%/55%/60%移动速度，持续2秒，每命中一个英雄将回复125/140/155/170/185/200(+16%法术加成）生命值</text>
				</view>
			</view> 
			<view class="content-jn">
				<view class="jineng">
					<image src="http://s1.catelyn.info/zjxcx/wzry/gaojianli3.png" mode="aspectFit"></image>
					<view class="text1">
						<text>魔音贯耳</text>
						<text>冷却值：45/40/35</text>
						<text>消耗：140</text>
					</view>  
				</view>
				<view class="text">
					<text>高渐离释放激情，每0.5秒进行一次演奏，对附近敌人造成200/250/300（+15%法术加成）点法术伤害，持续5秒；演奏持续时自身会减少15%所受到的伤害，并且附近每个敌方英雄还将减少高渐离5%所收到的伤害；并且在演奏开始时自身会增加70%持续衰减的移动速度，持续3秒</text>
				</view>
			</view> 
		</view>
		<view class="jianyi">
			<view class="yxjn">
				<text>技能加点建议：主升狂歌副升离歌</text>
			</view>
			<view class="zhxjn">
				<text>召唤师技能推荐：闪现/治疗术</text>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/sx.png" mode="aspectFit"></image>
				<image src="http://s1.catelyn.info/zjxcx/wzry/zhsjn/zl.png" mode="aspectFit"></image>
			</view>
			<view class="mw">
				<view class="mwtitle"><text>梦魇+心眼+贪婪</text></view>
				<view class="mwpic"><image  src="http://s1.catelyn.info/zjxcx/wzry/gaojianlimw.png" mode="aspectFit"></image></view>
				<view class="mwtips"><text>Tips：高渐离是一名AOE输出爆炸的法师英雄，高额的法术收益和法穿可以帮助他打出更多的伤害，吸血恢复能力可以提升高渐离的赖线能力，打团时利用免伤和恢复可以有更好的生存能力，攻速加成可以更容易组合技能打出被动伤害。</text></view>
			</view>
		</view>
		<view class="chuzhuang">
			<text class="title">推荐出装：</text>
			<view class="cz">
				<view class="czbt"><text>推荐一：</text></view>
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/gaojianlicz1.png" mode="aspectFit"></image></view> 
				<view class="cztips">
					<text>Tips：高渐离会深入战场释放大招，需要准备噬神之书进行一定的吸血恢复，以免被对方的伤害压制无法深入敌阵</text>
				</view>
			</view>
			<view class="cz">
				<view class="czbt">
					<text>推荐二：</text> 
				</view> 
				<view class="czpic"><image src="http://s1.catelyn.info/zjxcx/wzry/gaojianlicz2.png" mode="aspectFit"></image></view> 
				<view class="tips">
					<text>Tips：高渐离在突进敌阵后，通常会受到集火，开启辉月的主动技能能够帮助其不至于直接被秒杀，从而拖住敌人</text>
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
