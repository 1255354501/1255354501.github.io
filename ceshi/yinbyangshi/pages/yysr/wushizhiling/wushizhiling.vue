<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/wushizhiling0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">武士之灵</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>是的。那刀，正是鬼切。</text><text>恐怕茨木童子也没有想到，这刀会辗转到了渡边大人手里。倘若不是这把宝刀，我们也未必是那恶鬼的对手。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>那恶鬼狡猾，竟化作女子，借顺路之名接近大人。作为大人的近身仆从，我们都没有阻拦大人行善。</text><text>行至五条渡口，溪水声噪。这是异象！我提醒大家警觉起来。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>正当我愣在原地，鬼手已经向我挥来。我记得，渡边大人就是在这时拔出鬼切，砍断了恶鬼的手臂！</text><text>我仿佛还记得，我克服了恐惧，救了自己。</text><text>这难道不值得庆祝吗？</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/wushizhiling1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/wushizhiling2.png" mode="aspectFit"></image>
		 				<text>基本技能：武士之心</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>即使已经失去了身体、失去了武器，武士之灵还是挥起了拳头，攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/wushizhiling3.png" mode="aspectFit"></image>
		 			    <text>不甘之怒</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>释放不甘的怨念，攻击敌方全体，造成攻击108%伤害并有100%基础概率附加亡魂附身，持续3回合。</text>
		 				<text>Lv.2伤害增至114%，亡魂附身间接伤害增至57%</text>
		 				<text>Lv.3伤害增至119%，亡魂附身间接伤害增至60%</text>
		 				<text>Lv.4伤害增至125%，亡魂附身间接伤害增至63%</text>
		 				<text>Lv.5伤害增至130%，亡魂附身间接伤害增至65%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/wushizhiling4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：灭魂</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>带有亡魂附身的目标，降低10%效果命中。</text>
		 				<text>Lv.2降低效果命中效果，增至20%</text>
		 				<text>Lv.3降低效果命中效果，增至30%</text>
		 				<text>Lv.4降低效果命中效果，增至40%</text>
		 				<text>Lv.5亡魂附身被驱散时，目标削减1点鬼火</text>
		 			</view>
		 		</view>
		 	</view>
		 </template>
		 
		<script>
		 	export default {
		 		data() {
		 			return {
		 				title: 'Hello',
		 				ggg:false
		 			}
		 		},
		 		onLoad:function(){
					let self=this
		 			uni.getStorage({
		 			    key: 'ggg',
		 			    success: function (res) { 
		 					self.ggg=res.data; 
		 					if(res.data=="true"||res.data==true){
		 						const bannerAd = tt.createRewardedVideoAd({
		 						  adUnitId: "qkih7580bi5ik6gpjs"
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
		 						        delta: 1
		 						    });
		 						  }
		 						});
		 					}
		 			    }
		 			}); 
		 		},
		 		methods: {
		             openvideo:function(url){ 
		 				uni.navigateTo({
		 				    url: url+`?ggg=${this.ggg}`
		 				});
		 			}
		 		}
		 	}
		 </script>
			 
		<style>
			@import url("/static/yysr.css");
		</style>