<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yecha0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">夜叉</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>恶鬼·，那些人类好像是这么喊本大爷的。</text><text>本大爷最近都没听到过这名字了，差点忘了。</text><text>因为这么喊本大爷的人，最后都~~</text><text>哈哈哈，你那害怕的表情，还真不错。不过现在已经晚了。</text><text>你是刚刚到这里来吧？</text><text>不然怎么可能连本大爷都不知道？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>为什么？因为你的村庄已经被我烧掉了啊，连同村子里的人一起。</text><text>又是为什么？没有为什么，想烧掉就烧掉了。</text><text>你的问题可真多啊，不过话多的人，本大爷也不讨厌就是了。</text><text>那种不爱说话，冷冰冰的家伙，才是看了就心烦。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>哈？你要诅咒我吗？</text><text>暗地里诅咒本大爷的人也不少，当面还是第一次，你胆子还真大啊。</text><text>哈哈哈，会失去自己珍惜的东西，这也算诅咒吗？</text><text>本大爷从一开始，就没有什么珍惜的东西，这点不是已经告诉过你了吗？</text><text>虽然话多的人不讨厌，但脑子不好使的家伙还是早点消失吧~~！</text><text>~~只是想教训教训他而已，怎么这么简单就死掉了啊？</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yecha1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yecha2.png" mode="aspectFit"></image>
		 				<text>基本技能：屠戮</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yecha3.png" mode="aspectFit"></image>
		 			    <text>黄泉之海</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>攻击敌方目标，造成攻击198%伤害。有50%的概率对随机敌方目标重复施放此技能。</text>
		 				<text>Lv.2伤害增加至208%</text>
		 				<text>Lv.3伤害增加至218%</text>
		 				<text>Lv.4伤害增加至228%</text>
		 				<text>Lv.5伤害增加至238%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yecha4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：鬼魅</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text></text> 
		 				<text>造成伤害时，30%概率提升20点速度，持续2回合。</text>
						<text>Lv.2触发概率增至35%</text>
						<text>Lv.3触发概率增至40%</text>
						<text>Lv.4触发概率增至45%</text> 
						<text>Lv.5触发概率增至50%</text> 
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