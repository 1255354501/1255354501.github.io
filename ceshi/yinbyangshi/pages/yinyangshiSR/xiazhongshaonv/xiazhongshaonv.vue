<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/xiazhongshaonv0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">匣中少女</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>一个、两个、三个~~我的匣子里，藏着许多、许多珍贵的东西哦。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我一直、一直在这里守着这个匣子。</text><text>因为我就是因为珍惜和守护而生的妖怪，匣子对我来说，和生命一样重要。</text><text>就算偶尔要出远门，我也会带着匣子。</text><text>在每晚进入梦乡之前，我必须要确认一遍匣子里的东西才能安心。</text><text>绝对、绝对不能弄丢任何一样东西。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>你的表情怎么变了，发生什么事情了吗？</text><text>~~哎呀，我最珍惜的宝贝被你发现了呢。</text><text>我说过了吧，我的匣子里藏着很多很多，珍贵的东西。</text><text>我之前还有一个很珍惜的朋友，我把他也藏在了匣子里呢。</text><text>你看，他的头发还是如此光泽，他的皮肤还是这么柔软，他的眼睛还栩栩如生，他的嘴唇还是这么诱人~~我要永远、永远和他在一起~~</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/xiazhongshaonv1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/xiazhongshaonv2.png" mode="aspectFit"></image>
		 				<text>基本技能：流光</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>从宝匣中引出一道流光，攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/xiazhongshaonv3.png" mode="aspectFit"></image>
		 			    <text>溢彩</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>唯一效果。友方行动后，有80%概率使其获得护盾，能吸收匣中少女8％生命上限的伤害，持续1回合。同时获得1个随机增益效果，持续1回合。</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/xiazhongshaonv4.png" mode="aspectFit"></image>
						<text>回梦</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>使用宝匣的力量，记录友方全体的当前生命，持续2回合后生效。生效时，若友方当前生命低于记录值的30%，则恢复至30%。被记录的友方受到伤害时，若会因该次伤害而阵亡，则免疫该次伤害并立即生效。</text>
						<text>Lv.2触发比例增至40%</text>
						<text>Lv.3触发比例增至50%</text> 
						<text>Lv.4触发比例增至60%</text>
					    <text>Lv.5冷却回合数减1</text>  
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