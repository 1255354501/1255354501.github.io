<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/jiutungua0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">就吞呱</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>呱？这是哪里？我似乎又喝多了呢。</text><text>世上最好的事情，莫过于喝个烂醉，睡上一觉，等醒了再喝。</text><text>上次因为喝醉了没赶上胧车，被玉藻前大人狠狠责罚了一通，可是，人活一世，为什么要如此操劳呢，美酒和美梦才是最有意思的部分啊。</text><text>今夜的胧车也是这么无聊呢，为了赶上胧车，我连中午都不敢好好喝一番，不然又会被玉藻前大人责备了。</text><text>肚子里的酒虫开始闹腾了，真馋啊~~咦？</text><text>哪里飘来的酒香？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>太棒了！这里居然有个新开的酒坊！</text><text>啊，世上怎么会有如此香醇的美酒！沉浸在美酒的海洋里实在是太棒了，一排排看不到头的酒缸，这里简直就是天堂！这一坛醇厚，这一坛清冽，实在是停不下来啊！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>好吵~~我是在哪儿？真舒服啊，真不愿意醒来啊~~</text><text>咦？怎么是茨木呱~~</text><text>我一定是喝多了。</text><text>茨木呱在说什么呢？玉藻前大人大发雷霆？唉，真是不想管这些啊，还是美酒美梦最有意思。</text><text>怎么酒缸都打翻了？一定不是我，对！一定是茨木呱干的好事！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/jiutungua1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>该式神无法觉醒</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/jiutungua2.png" mode="aspectFit"></image>
		 				<text>基本技能：呱·鬼葫芦</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>以妖力操控鬼葫芦喷出瘴气攻击敌方目标，造成攻击50%伤害。并有20%概率获得1层呱气，上限1层。</text>
		 				<text>Lv.2伤害增加至53%</text>
		 				<text>Lv.3伤害增加至55%</text>
		 				<text>Lv.4伤害增加至57%</text>
		 				<text>Lv.5伤害增加至63%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/jiutungua3.png" mode="aspectFit"></image>
		 			    <text>呱·狂啸</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>以妖力操控鬼葫芦喷出瘴气攻击敌方目标1次，造成攻击50%伤害。同时消耗全部呱气，每消耗1层，增加1次攻击次数。</text>
		 				<text>Lv.2伤害增加至53%</text>
		 				<text>Lv.3伤害增加至55%</text>
		 				<text>Lv.4伤害增加至57%</text>
		 				<text>Lv.5伤害增加至63%</text>
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