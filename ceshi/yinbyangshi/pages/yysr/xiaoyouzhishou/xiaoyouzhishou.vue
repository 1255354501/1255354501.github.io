<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/xiaoyouzhishou0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">小柚之手</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>他还没有回来，看来今天也不会是例外。</text><text>我手里的这盔甲，记得是从那年冬天开始缝补的，已经缝补了几十年了吧。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>那年冬天，战争刚刚结束，我每天在家里等着弟弟凯旋而归，但先等来的，却是一位大将军。他的盔甲已经破破烂烂了，走起路来会发出金属碰撞的声音，厚重冰冷的盔甲和布满疤痕的面颊使他看起来不怒自威。</text><text>将军大人，需要缝补衣服吗？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>那件是我为弟弟一针一针特制的，没有人可以将它缝得如此精致，除了我。等等、这盔甲上的洞，难道是~~！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/xiaoyouzhishou1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/xiaoyouzhishou2.png" mode="aspectFit"></image>
		 				<text>基本技能：绵里藏针</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>操控针线穿过敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/xiaoyouzhishou3.png" mode="aspectFit"></image>
		 			    <text>丝缕相连</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>召唤针线连接敌方目标及另一名随机敌方，当其中一名敌方受到控制效果，另一名敌方有40%概率被附加同样效果，且不触发其御魂及被动。针线继承目标50%生命（不超过小袖之手生命上限300%）、70%防御。</text>
		 				<text>Lv.2继承生命值增至60%</text>
		 				<text>Lv.3概率增至50%</text>
		 				<text>Lv.4继承防御值增至80%</text>
		 				<text>Lv.5概率增至60%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/xiaoyouzhishou4.png" mode="aspectFit"></image>
		 				<text>穿针引线</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>操纵针线攻击敌方全体，造成攻击100%伤害，最后对敌方目标造成攻击100%伤害。</text>
						<view class="jinengjs">
							<text>Lv.2伤害增加至105%</text>
							<text>Lv.3伤害增加至110%</text>
							<text>Lv.4伤害增加至115%</text>
							<text>Lv.5伤害增加至125%</text> 
						</view> 
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