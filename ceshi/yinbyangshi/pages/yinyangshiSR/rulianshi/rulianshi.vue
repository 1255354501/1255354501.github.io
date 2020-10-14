<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/rulianshi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">入殓师</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我，是一名入殓师。</text><text>我的工作，便是为逝者化妆更衣。</text><text>谈不上多喜欢这样的工作，最初也只不过是为了继承家父的事业，加上满足了自己对于美的些许追求。也许是见惯了生离死别，我的内心渐渐被寒冰包覆，再无波澜。</text><text>在闲暇的午后品着茶看着落叶，我大概会就这样平静地度过自己的一生吧。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>当我揭开女孩的面纱时，心好似破冰而出。她，太美了。我久久地注视着她，久到开始厌恶起身为入殓师的自己。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>总算，能看见你的笑颜了。我带着你来到了冥界，可你的灵魂却不在这里，你还留恋着这个残酷的世界吗？在阎魔大人的法术下，我得以保全你的肉体。不知你是否感受到了我的心意，你看着我笑了。而离开冥界后，我感觉自己已经不能再被称为人类了。也许这就是代价吧。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/rulianshi1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/rulianshi2.png" mode="aspectFit"></image>
		 				<text>基本技能：葬仪</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>释放来自冥界的力量，对敌方目标造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/rulianshi3.png" mode="aspectFit"></image>
		 			    <text>离魂</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>对敌方目标造成攻击211%伤害。</text>
		 				<text>Lv.2伤害增加至221%</text>
		 				<text>Lv.3伤害增加至232%</text>
		 				<text>Lv.4伤害增加至244%</text>
		 				<text>Lv.5消耗鬼火减少1点</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/rulianshi4.png" mode="aspectFit"></image>
		 				<text>荼蘼盛放之棺</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>召唤出棺中少女织雪，持续1回合。此期间降低自身50%速度，提升250%基础防御、70%效果抵抗。任一敌方回合结束后，若自身未处于无法动作，则对其以及另一生命比例最低的敌方，造成攻击20%伤害（该敌方回合内每消耗1点鬼火，再额外加上攻击10%伤害）。自身生命比例每降低1%，提升2.5%此技能伤害。</text> 
		 				<text>Lv.2伤害增加至25%</text>
						<text>Lv.3敌方消耗鬼火的额外伤害增至20%</text>
						<text>Lv.4伤害增加至30%</text>
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