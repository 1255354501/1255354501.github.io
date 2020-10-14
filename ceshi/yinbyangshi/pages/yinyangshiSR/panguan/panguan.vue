<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/panguan0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">判官</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>虽然在下目不能视，但由于一直认真负责地履行着自己的职责，在这阎罗殿内，尚有一席之地。</text><text>那对鬼使兄弟，只按照自己的喜好行事，孟婆又几乎不会到阎罗殿来，所以能守护这里的只有在下了。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>其他人都外出去工作的时候，这里应该只有阎魔大人和在下，两个人静静地处理着事务才对。</text><text>但最近，总是会出现一些奇怪的妖怪，打扰了阎魔大人和在下。有时候是山兔、有时候是山童，还有鬼童子什么的。这些弱小的妖怪，到底是怎么要到阎罗殿里来的？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>难道，阎魔大人想要孩子了吗~~不不，在下这样想，是在亵渎阎魔大人。</text><text>在下决不能这么想~~！堂堂判官，在下怎么能有这样荒唐的想法！</text><text>在下应当惩罚自己，到十八层地狱去，接受试炼。</text><text>于是在下悄悄地退出了阎罗殿。</text><text>阎魔大人没有察觉到在下离开了，还在和脚边的小妖怪们玩耍。</text><text>压下心里不该有的所有念头，在下将小妖怪们的呼喊抛在身后。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/panguan1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/panguan2.png" mode="aspectFit"></image>
		 				<text>基本技能：墨笔夺魂</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>从墨笔中打出一道墨意攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/panguan3.png" mode="aspectFit"></image>
		 			    <text>死亡宣告</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>发出生死判决攻击敌方全体，造成攻击100%伤害并附加死亡裁决，持续1回合，未被移除时，在目标回合开始前造成攻击100%间接伤害。</text>
		 				<text>Lv.2伤害增至105%，间接伤害增至105%</text>
		 				<text>Lv.3伤害增至110%，间接伤害增至110%</text>
		 				<text>Lv.4伤害增至115%，间接伤害增至115%</text>
		 				<text>Lv.5伤害增至125%，间接伤害增至125%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/panguan4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：无情</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text></text> 
		 				<text>造成伤害时，目标生命比例每降低1%，提升1%暴击；对被复活的目标，伤害提升10%。</text>
						<text>Lv.2对被复活的目标，伤害提升增至20%</text>
						<text>Lv.3对被复活的目标，伤害提升增至30%</text>
						<text>Lv.4对被复活的目标，伤害提升增至40%</text> 
						<text>Lv.5若判官暴击超过100%，每超出1%，转化为1%暴击伤害</text> 
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