<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/tidengxiaoseng0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">提灯小僧</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>这边！这边！出人命了！！！</text><text>为什么你们看起来这么害怕？？那边有人死掉了</text><text>啊！！快来救命！！！</text><text>可恶~~为什么你们听不到我说话~~</text><text>诶~~？为什么~~说我是凶手？</text><text>不是我~~不是我呀~~我只是</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>怎么办，怎么办~~我好像被凶手利用了~~</text><text>舞妓，盐商，米店的少东家，木匠。</text><text>已经死去五个人了~~怎么办~~怎么办~~</text><text>可恶！既然大家都觉得我出现的地方，就会有人死去~~</text><text>那我就让更多的人！聚集到案发现场！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>快！这边~~在这边~~</text><text>对~~就是~~这里！凶手，就在~~这里~~</text><text>太好了，终于抓到凶手了~~</text><text>可是，为什么你们看起来还是这么害怕？夫人，请不要哭呀~~</text><text>咦~~？为什么我能穿过夫人的身体~~</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/tidengxiaoseng1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/tidengxiaoseng2.png" mode="aspectFit"></image>
		 				<text>基本技能：头槌</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>用头猛撞敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/tidengxiaoseng3.png" mode="aspectFit"></image>
		 			    <text>鬼火球</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>用妖力操控灯笼内的鬼火球射向敌方全体，造成攻击109%伤害。</text>
		 				<text>Lv.2伤害增加至114%</text>
		 				<text>Lv.3伤害增加至119%</text>
		 				<text>Lv.4伤害增加至124%</text>
		 				<text>Lv.5伤害增加至129%</text>
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