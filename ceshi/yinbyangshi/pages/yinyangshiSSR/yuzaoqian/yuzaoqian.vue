<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yuzaoqian0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">玉藻前</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>给葛叶：</text><text>见信如晤。</text><text>~~突然不知道说什么好了，那我就想到哪里写到哪里吧，还请你不要介意。</text><text>葛叶，我见到你的孩子了。</text><text>宫廷里的人们都在谈论他。</text><text>我想替你去看看那孩子，毕竟我答应过你要好好照顾他。</text><text>但那孩子，一直以守护京都为己任。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>最近宫廷中来了一位大人物，他见到我的时候，问我为什么要打扮成女人的模样。</text><text>看来这副美貌，并不能蒙蔽所有人呢。</text><text>你的孩子，长得十分像你，我好高兴，葛叶。</text><text>在那孩子面前，在那副与你相似的面孔面前，我不想扮演另一个人。</text><text>我会以我原本的姿态去见他。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>葛叶，原谅我。我不得不给你的孩子出一个难题。</text><text>事实上，连我自己都不确定这难题是否有答案，答案又是什么~~不过，如果是你的孩子，一定能给我一个满意的答案。</text><text>你一直以那孩子为骄傲呢。我也一直以你为骄傲，葛叶。</text><text>你所说的命运，哪怕一次也好，我想要战胜它。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yuzaoqian1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yuzaoqian2.png" mode="aspectFit"></image>
		 				<text>基本技能：灵击</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>使用灵气攻击敌方目标，造成攻击100%伤害并有10%基础概率使其混乱1回合。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yuzaoqian3.png" mode="aspectFit"></image>
		 			    <text>狐火</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>凝聚狐火攻击敌方目标，造成攻击263%伤害；对生命比例高于80%的敌方，伤害降低15%。</text>
		 				<text>Lv.2伤害增加至276%</text>
		 				<text>Lv.3对生命比例低于50%的敌方，伤害提升15%</text>
		 				<text>Lv.4伤害增加至289%</text>
		 				<text>Lv.5若击杀敌方，接着免消耗施放1次『堕天』</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/yuzaoqian4.png" mode="aspectFit"></image>
		 				<text>堕天</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>爆发自身力量攻击敌方全体，造成攻击131%伤害；对生命比例低于50%的敌方，伤害降低15%。</text> 
		 				<text>Lv.2伤害增加至138%</text>
						<text>Lv.3对生命比例高于80%的敌方，伤害提升15%</text>
						<text>Lv.4伤害增加至145%</text>
						<text>Lv.5若击杀敌方，接着对生命比例最低的敌方，免消耗施放1次『狐火』</text> 
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