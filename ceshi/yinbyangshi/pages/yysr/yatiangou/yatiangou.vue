<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/yatiangou0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">鸦天狗</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>鸦天狗：当时！敌人的獠牙就在我的头旁边，你们知道情形有多危急吗？</text><text>妹妹：后来呢，你说你打败了八岐大蛇？！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>当第一个头咬向我时，我快速闪身到第二个头处；吸引第三个头和第四个头从相反的方向冲过来，然后机智地躲开；在第五个和第六个头被我的群鸦乱舞打得晕头转向时，顺势刺伤了第七个头；下面，高潮才真正到了，告诉你们我是怎样制服第八个头和第九个头的~~</text><text>弟弟：等等，八岐大蛇，怎么有九个头？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>弟弟：你呀，就会吹牛皮。</text><text>妹妹：你怎么老是幻想自己去打败那个大妖怪呀~大妖怪都好可怕。</text><text>鸦天狗：就~~是因为可怕啊！所以，我才想要成为英雄，保护大家~~</text><text>弟弟：光想有什么用，你不如去投奔晴明大人吧？听说，他训练式神可有一套了！要是能成为他的式神~~哦呵呵~~喂？你去哪儿？</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/yatiangou1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/yatiangou2.png" mode="aspectFit"></image>
		 				<text>基本技能：正义之刺</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>疾闪攻击敌方目标，造成攻击80%伤害。有30%概率邀战随机友方。</text>
		 				<text>Lv.2伤害增加至90%</text>
		 				<text>Lv.3邀战概率增至35%</text>
		 				<text>Lv.4伤害增加至100%</text>
		 				<text>Lv.5邀战概率增至40%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/yatiangou3.png" mode="aspectFit"></image>
		 			    <text>群鸦乱舞</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>以妖力召集黑鸦，对每个敌方按生命比例由低至高逐个攻击，每次造成攻击119%伤害并有30%概率邀战随机友方。与战斗开始时相比，每少一个敌方，伤害提升20%，最多提升100%。</text>
		 				<text>Lv.2伤害增加至131%</text>
		 				<text>Lv.3邀战概率增至35%</text>
		 				<text>Lv.4伤害增加至143%</text>
		 				<text>Lv.5邀战概率增至40%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/yatiangou4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：羽清</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>回合开始时，有50%概率驱散或解除一名随机友方带有的1个控制效果。</text>
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