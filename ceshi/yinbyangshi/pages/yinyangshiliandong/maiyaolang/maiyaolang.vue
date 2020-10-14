<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/maiyaolang0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">卖药郎</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>人心善变，时光易逝，沧海动荡不止。</text><text>就算乘坐同一条船、向着同一个港口前行，途中所见的一望无际的大海，每个人看到的海浪的颜色、高低，都不一样。</text><text>只要人心中有黑暗，就会有络绎不绝之物造访。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>正如现世有人、鸟、兽一样，不应该存在于这世上的妖怪也是随处可见。</text><text>但是，不管它们是因为什么原因化为妖怪，它们的道理人是无法理解的。</text><text>怨怼、憎恨、悲伤，当这些强烈的情感与妖怪结合后，会发生什么事情呢？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>要拔出退魔剑是有条件的，必须找齐形、真、理，否则剑就无法拔出。</text><text>造就物怪之形是人的因缘，真乃事件的实情。理则是人心中的隐情。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/maiyaolang1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>基本技能：</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/maiyaolang2.png" mode="aspectFit"></image>
		 				<text>基本技能：释物之形</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>使用符咒攻击敌方目标，揭示目标之"形"，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/maiyaolang3.png" mode="aspectFit"></image>
		 			    <text>道物之真理</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>唯一效果。敌方回合结束后，有40%概率使用天平将之标记，上限3个天平。攻击带有天平的敌方时，每个天平提升33%伤害。带有1、2、3个天平的敌方，在生命低于30%、40%、60%时，将会把所有天平转化为看破，持续2回合。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/maiyaolang4.png" mode="aspectFit"></image>
						<text>退魔</text>
						
		 			</view> 
		 			<view class="jinengjs">
						<text>拔出退魔剑，变身为金色神灵，对敌方目标造成攻击263%伤害并使用天平将之标记。若敌方带有看破，则改为造成其当前生命300%伤害（不超过攻击600%），此次伤害无视护盾、无法分担、不触发其御魂及被动。</text>
						<text>Lv.2伤害增加至276%</text>
						<text>Lv.3伤害增加至289%</text> 
						<text>Lv.4伤害增加至302%</text>
					    <text>Lv.5伤害增加至329%</text>  
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