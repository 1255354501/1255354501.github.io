<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/renmianshu0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">人面树</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>很久很久以前，这里曾有一棵茂盛的大树。</text><text>夏天的时候，人们在树下乘凉；</text><text>冬天的时候，人们拾走树枝回家生火取暖。</text><text>慢慢地，大树成了村民们生活中不可或缺的一部分。</text><text>于是，大家便称这棵树为神木，日夜悉心照顾着它。</text><text>神木，大树的名字传开后，村民们开始对神木祈祷，希望神木能够满足他们的心愿。可说到底，它只是一颗普通的大树，是无法回应人们的心愿的。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>他们砍掉了树枝、又剥光了树皮，昔日繁盛的大树只剩下光秃秃的树桩，人们十分满意地看着将死的大树，又给它起了新名字——祸根。</text><text>然而，这棵仅剩的树桩却没有放弃、来年居然开出了非常漂亮的、红色的花朵。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>人们认为是这些不祥的花朵给他们带来了厄运。</text><text>这一次，人们决定放火烧掉这棵树。</text><text>可当他们拿着火把到来的时候，树却已经消失不见了。</text><text>大家只好作罢，熄灭了火把、沮丧地回去了。</text><text>没有了树的村庄却依然灾祸不断。</text><text>肆意践踏他人、又从不反省自己的人，怎么可能会顺风顺水呢？</text><text>从来也没有神木、也没有祸根。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/renmianshu1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/renmianshu2.png" mode="aspectFit"></image>
		 				<text>基本技能：神木</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>攻击敌方目标，造成防御100%伤害。（唯一效果）任一敌方回合结束后，若拥有的灾厄花未达3层，则为其附加1层；若其已拥有3层灾厄花，则每层对其造成防御90%间接伤害。</text>
		 				<text>Lv.2普攻伤害增加至105%</text>
		 				<text>Lv.3普攻伤害增加至110%</text>
		 				<text>Lv.4普攻伤害增加至115%</text>
		 				<text>Lv.5普攻伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/renmianshu3.png" mode="aspectFit"></image>
		 			    <text>灾厄花</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>自身回合结束时，对带有灾厄花的敌方目标，消耗所有层数，每层对其造成防御90%间接伤害。</text>
		 				<text>Lv.2间接伤害增加至95%</text>
		 				<text>Lv.3间接伤害增加至100%</text>
		 				<text>Lv.4间接伤害增加至105%</text>
		 				<text>Lv.5当灾厄花被驱散时，自身提升5%防御，此增益状态可被驱散</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/renmianshu4.png" mode="aspectFit"></image>
		 				<text>祸根</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>获得祸根之护，持续3回合。对带有灾厄花的敌方目标，消耗所有层数，每层对其造成防御216%间接伤害。</text> 
		 				<text>Lv.2间接伤害增加至227%</text>
						<text>Lv.3间接伤害增加至238%</text>
						<text>Lv.4间接伤害增加至248%</text>
						<text>Lv.5祸根之护使自身提升6%战斗初始防御</text> 
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