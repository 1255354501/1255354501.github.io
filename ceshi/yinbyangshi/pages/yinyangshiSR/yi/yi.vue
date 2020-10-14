<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">弈</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>那是我生前最后一场棋局，我被迫同时与十人对弈，并且只要我输给了其中一个人，我就要投身于河中。</text><text>但与之相对的，如果我赢了所有人，他们便要统统受到责罚。</text><text>我坐在那位大人给我准备的坐席上，与每一位对手行开局之礼。</text><text>他们每个人都是久负盛名的棋师、但也都是我的手下败将。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>可我却没有料到，最后一位对手居然会是她。她看到我的一瞬间就抓住了我的手，你还好吗？</text><text>他们有没有苛待你？</text><text>她看到我愣住，又欣喜地哭泣着抱住我，这场比赛你一定要赢，我没关系的，无论受到什么责罚我都愿意，只要是为了你~~我看向那位大人，他也正看着我。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>十人棋局~~终于结束了。</text><text>身边的卫兵立刻围了上来将我押向河边。</text><text>她高声地痛哭着，求求你们，放了他！求求你们！但却没有人理会她，我也不忍心回头看她那绝望的样子。</text><text>我是这世上第一棋师，无论在什么情况下我都有绝对的自信能够赢得全场。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yi1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yi2.png" mode="aspectFit"></image>
		 				<text>基本技能：征子</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>向敌方目标投出当前持有的棋子，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至120%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yi3.png" mode="aspectFit"></image>
		 			    <text>气合</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>交替持有黑子、白子，造成伤害时有100%基础概率为敌方附加1层所持棋子，上限4层。达上限时，优先覆盖不同色棋子。带有棋子的敌方在其回合结束时，若该回合没消耗鬼火，随机移除1层棋子。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yi4.png" mode="aspectFit"></image>
		 				<text>神之一手</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>投出棋子攻击9次，首次攻击敌方目标，余下次数攻击随机敌方，每次造成攻击42%伤害。</text>
						<text>Lv.2伤害增加至44%</text>
						<text>Lv.3伤害增加至46%</text> 
						<text>Lv.4伤害增加至48%</text>
					    <text>Lv.5伤害增加至51%</text>  
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