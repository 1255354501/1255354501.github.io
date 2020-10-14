<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/chounvzhishi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">丑时之女</view>
		 		</view>
		 		<view class="text"> 
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我从未见过，如此疯狂、残忍的女子。我永远不会忘记她的。</text><text>在那个月光静谧的夜晚，我正在赶着路。忽然，一声惨叫划破夜空。是贼吗？我急急忙忙跑向下一个路口，不！不是盗贼！那是一个疯子！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>太可怕了！</text><text>她的笑声让我心里发毛~~</text><text>等等！惨叫是从哪里来的？</text><text>我颤抖着探头再看~~那个疯子无比狰狞地将钉子钉入手中的草人身上，而她的对面，瘫痪着一个人。或者，地上的已经不能称之为人了~~地上的可怜家伙随着疯子的动作翻滚着，他挣扎着，等等、他身上喷出的液体是什么？</text><text>~~天啊！！我要逃！！那个疯子走过来了！向我走过来了！不！不！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>动弹不得的我，眼睁睁看着她的脸向我靠近，放大，我甚至能看到她诡异的绿色瞳孔里，自己扭曲表情的倒影。</text><text>嘘！她比着手指，向我做了个噤声的动作。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/chounvzhishi1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/chounvzhishi2.png" mode="aspectFit"></image>
		 				<text>基本技能：咒锥</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>钉打稻草人，在其背后生成咒术阵，向敌方目标射出咒锥，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/chounvzhishi3.png" mode="aspectFit"></image>
		 			    <text>咒火</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>行动结束时，有20%基础概率对随机敌人附加咒火，持续2回合。</text>
		 				<text>Lv.2咒火易伤效果增至10%</text>
		 				<text>Lv.3基础概率增至30%</text>
		 				<text>Lv.4咒火易伤效果增至15%</text>
		 				<text>Lv.5基础概率增至40%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/chounvzhishi4.png" mode="aspectFit"></image>
		 				<text>草人替身</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>召唤诅咒草人连接敌方目标，当草人受到伤害时，对被连接目标造成等量传导伤害，草人存在3回合。草人继承目标10%生命、80%防御。</text>
						<view class="jinengjs">
							<text>Lv.2继承生命值增至15%</text>
							<text>Lv.3继承生命值增至20%</text>
							<text>Lv.4继承生命值增至25%</text>
							<text>Lv.5继承生命值增至30%</text> 
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