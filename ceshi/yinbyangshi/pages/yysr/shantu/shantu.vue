<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shantu0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">山兔</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我真的受不了那家伙了。明明不认识路，还一天到晚指东指西的。不仅坐在我的头顶，还非要揪着我头上的草~~</text><text>哎哎哎！痛！！哎~~而且老是喊着奇奇怪怪的口号~~谁听得懂啦！</text><text>这只小魔王！我当初怎么就招惹到她了~~</text><text>不对，是她招惹的我！当初踹我的那一下噢，我这水</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>也不知道这么小的个子，哪来的力气~~</text><text>哎！小兔子！你的方向又跑反了！</text><text>然后这小兔子就说着对不起，对不起地赖上了我~~对！直接赖我头顶上了！</text><text>哎~~不跟她讲话，她就拔我的草扯我的尾巴。让她走，她说她要在我身边照顾我！？一会没有盯着</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>这这这~~唉，小魔王，你还是祸害我吧~~要是惹怒了阎罗殿的阎魔大人，我可救不了你啊~~</text><text>所以啊~~在路边看到什么软绵绵的、白花花的、长得特别特别可爱的小兔子~~千万，千万~~离远点哦！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shantu1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shantu2.png" mode="aspectFit"></image>
		 				<text>基本技能：谁还不听话</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>乘着巨大的山蛙跳到敌人面前，趁其不备拿出纸扇狠拍敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shantu3.png" mode="aspectFit"></image>
		 			    <text>幸运套环</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>把敌人当做幸运套环的奖品，丢出套环攻击敌方目标，造成攻击237%伤害并有10%基础概率将其变形，持续2回合。</text>
		 				<text>Lv.2伤害增加至249%</text>
		 				<text>Lv.3伤害增加至261%</text>
		 				<text>Lv.4伤害增加至273%</text>
		 				<text>Lv.5伤害增加至285%，若有成功触发变形，则立即释放一次无消耗的『兔子舞』</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shantu4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>兔子舞</text>
						<view class="jinengjs">
							<text>跳起舞为队友鼓劲，使友方全体增加30%行动条，并获得兔子舞，持续2回合。</text>
							<text>Lv.2兔子舞提升攻击效果增至15%</text>
							<text>Lv.3兔子舞提升攻击效果增至20%</text>
							<text>Lv.4施放兔子舞后，使行动条最底端的友方提升攻击效果增至40%</text> 
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