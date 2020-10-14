<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yujuchong0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">於菊虫</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>久违的夜色，好像做了一个好长的梦！这可真是一群懒虫，每晚我起床的时候都还在睡觉，是不是我白天睡觉的时候你们也还在睡觉呀！难道你们整天睡觉就可以结茧了吗？哼，真是一群不劳而获的家伙~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>啊又是一天阳光明媚！起床啦可爱的小懒虫们！</text><text>你们看又有两只勤劳的虫不见了，真羡慕这些正常化蝶的小虫子呀！可是你们怎么都不飞回来看望我呢？难道化蝶后就不记得我了吗？</text><text>我好想你们，好想飞到天空中去再见你们一面~~</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yujuchong1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yujuchong2.png" mode="aspectFit"></image>
		 				<text>基本技能：吐丝</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>向敌方目标喷射毒液，造成攻击60%伤害并有100%基础概率附加1级中毒，持续2回合。</text>
		 				<text>Lv.2伤害增加至66%</text>
		 				<text>Lv.3附加中毒增至2级</text>
		 				<text>Lv.4伤害增加至72%</text>
		 				<text>Lv.5附加中毒增至3级</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yujuchong3.png" mode="aspectFit"></image>
		 			    <text>破茧</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>喷射毒液造成伤害时，若目标带有中毒，则随机引爆其中1个，并造成攻击8%×该中毒等级的间接伤害。</text>
		 				<text>Lv.2间接伤害伤害增至12%</text>
		 				<text>Lv.3引爆后，再附加1个提升1级的中毒，持续回合数+1</text>
		 				<text>Lv.4间接伤害伤害增至16%</text>
		 				<text>Lv.5当敌方每有一个单位有中毒效果时，於菊虫速度提高10点</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yujuchong4.png" mode="aspectFit"></image>
		 				<text>虫之毒</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>连续喷射毒液攻击5次，每次对随机敌方目标造成攻击30%伤害，优先攻击未攻击过的敌方，并有100%基础概率附加2级中毒，持续2回合。</text> 
		 				<text>Lv.2附加中毒增至3级</text>
						<text>Lv.3伤害增加至36%</text>
						<text>Lv.4攻击次数增至6次</text>
						<text>Lv.5消耗鬼火减少1点</text> 
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