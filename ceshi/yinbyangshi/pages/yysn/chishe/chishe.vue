<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/chishe0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">赤舌</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>嘿嘿嘿，我最喜欢在河里躺着晒太阳了。</text><text>可是最近都不下雨~~水位都降低了~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>什么？居住在上游的混蛋人类！！！在这种时候还把水闸关上了？？怪不得下游的水位低成这样~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>看来，必须要英俊与智慧并重，英雄与正义的化身——本大爷！</text><text>来拯救下游的人类了。</text><text>哼，小小的人类，还能拦得住本大爷我开一个水闸？</text><text>不就是一、二、三、五、六。六个武士而已嘛！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/chishe1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/chishe2.png" mode="aspectFit"></image>
		 				<text>基本技能：海扁</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>冲到敌人面伸出长舌想要舔敌人，结果太大力，用舌头狠狠海扁了敌方目标一顿，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/yinyangshi-chishejineng2.png" mode="aspectFit"></image>
		 			    <text>鼓舞</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>敲起手中的鼓，激昂战阵士气，使友方全体获得鼓舞，持续2回合。</text>
		 				<text>Lv.2提升暴击效果增至8%</text>
		 				<text>Lv.3提升速度效果增至10点</text>
		 				<text>Lv.4提升暴击效果增至11%</text>
		 				<text>Lv.5提升速度效果增至15点</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/yinyangshi-chishejineng3.png" mode="aspectFit"></image>
		 				<text>风鼓雷</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>击鼓召唤雷云，降下数道闪电攻击敌方全体2次，每次造成攻击60%伤害并有30%概率击退</text>
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