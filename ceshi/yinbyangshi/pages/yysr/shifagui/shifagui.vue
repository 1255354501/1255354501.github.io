<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shifagui0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">食发鬼</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>啊，为什么我这么美？</text><text>这世上没有任何语言，能描绘出我的美！美，太美了，美得不能再美了！</text><text>我简直就是美的化身！我绝不容许任何人玷污我的美丽！！</text><text>~~嗯？你们怎么了？</text><text>哈？你说我吞食了你的朋友？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>你们看，我这份由内而外的美丽！</text><text>特别是这头发！比丝绸还要柔顺，比陶瓷还要光滑！乌黑得就像一碰都会染上墨一样！！</text><text>啊~~就连我自己都忍不住沉醉在自己的美貌里，真的是太美了。</text><text>啊，恶心？你说我？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>真正恶心的是像你们这样的家伙啊！可恶啊！！</text><text>呵~~呵~~好，我知道了。像你们这样还不明白自己的立场的家伙，就不惩罚一下不行呢。</text><text>嘻嘻嘻~~吞食得越多，我的头发就会越来越美、越来越长。</text><text>来吧，你们也成为我美貌的一部分吧！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shifagui1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shifagui2.png" mode="aspectFit"></image>
		 				<text>基本技能：发鞭</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>用引以为傲的长发编成鞭子，鞭打敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至120%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shifagui3.png" mode="aspectFit"></image>
		 			    <text>迷烟</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>从烟斗吹出迷烟，飘至敌人处化作发丝紧紧缠住敌方目标，100%基础概率使其沉睡1回合。</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shifagui4.png" mode="aspectFit"></image>
						<text>真实之颜</text>
						<text>露出发幕下的真面目恫吓敌方全体，造成攻击87%伤害。</text>
						<text>Lv.2伤害增加至91%</text>
						<text>Lv.3伤害增加至96%</text>
		 				<text>Lv.4伤害增加至100%</text>
						<text>Lv.5伤害增加至104%</text>
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