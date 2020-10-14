<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/mengpo0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">孟婆</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>在我很小的时候，父亲就去世了。</text><text>童年的记忆里，母亲整日以泪洗面，如果不是要照顾我，我想她应该已经追随父亲而去了。</text><text>我不想让母亲这么痛苦，如果母亲能忘记这些痛苦的事情，该多好！</text><text>所以我一直在努力地寻找一种草药，一种能让人忘记痛苦的草药。</text><text>这样我就能，做出让人忘记痛苦的汤药了。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>嗯？你问我母亲是怎么样的人？她是怎么离开的？</text><text>嘿嘿，我忘记了。我只记得，我要做更多更多这样的汤，不然，我会很难过~~</text><text>很多东西，不记得比较开心。是吧？牙牙～</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>啊？你说那边晕倒的家伙？牙牙只是凑上去蹭了一下，他们就倒下了。人类可真是脆弱啊~~</text><text>牙牙！等等！别这么着急啦～咦？这个人也晕倒了~~</text><text>这里的人可真是~~太弱了~~</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/mengpo1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/mengpo2.png" mode="aspectFit"></image>
		 				<text>基本技能：药汤</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>把滚烫药汤泼向敌方目标，造成攻击100%伤害，额外对护盾造成100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至120%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/mengpo3.png" mode="aspectFit"></image>
		 			    <text>天降之物</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>跳入半空，乘着汤碗从天而降，对敌方全体造成攻击130%伤害并有60%基础概率使其沉默1回合，对未受到沉默效果的单位击退其20%行动条。</text>
		 				<text>Lv.2伤害增加至137%</text>
		 				<text>Lv.3伤害增加至144%</text>
		 				<text>Lv.4伤害增加至151%</text>
		 				<text>Lv.5伤害增加至158%</text> 
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