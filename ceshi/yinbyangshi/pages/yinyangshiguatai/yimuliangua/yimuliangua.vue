<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/yimuliangua0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">一目连呱</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>呱，今天练了整整一个下午的刀，手都酸了。</text><text>好沮丧啊，连木头的刀我都无法好好掌控，那将来等我拿起真正的武士刀时，到底能不能战胜敌人呢？</text><text>这把木头的刀看起来也真是令人难过啊，我花了三天时间才削好的，可是呱类的手蹼真是不适合做细活啊，辉夜姬呱笑我说，就算是妖怪的大嘴啃出来的木头，也比这个好看。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>玉藻前大人对我说，再怎么练都是没有用的啦，呱们的个子这么小，怎么可能打败什么强大的妖怪呢？</text><text>真是好难过、好难过啊，可是~~我真的是很想很想让自己变强的呱。</text><text>听青行灯呱说，她打算写一部公主和武士的故事，那个故事好感人啊，勇敢的武士会永远守护着美丽的公主。</text><text>好羡慕呱，如果、如果我一直练习下去，到底能不能强大到可以守护我想要守护的呱呢~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>妖刀姬呱又哭着跑回来了，又是被什么自己幻想出来的妖怪给吓坏了吧。</text><text>这样很容易掉泪的呱，真的很让人怜惜啊。</text><text>竟然是去试胆大会吗？</text><text>让这么胆小的妖刀姬呱做出这样的事情，是遇到了什么难题吗？</text><text>呱，我要快点变强才行，不要再让妖刀姬呱这么害怕了。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/yimuliangua1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>基本技能：</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/yimuliangua2.png" mode="aspectFit"></image>
		 				<text>基本技能：打出蕴含风之力的符咒攻击敌方目标，造成攻击100%伤害。</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/yimuliangua3.png" mode="aspectFit"></image>
						<text>呱·风神之佑</text>
		 			    
		 			</view> 
		 			<view class="jinengjs">
						<text>使友方全体获得无法驱散的护盾，能吸收1％生命上限的伤害，持续1回合。</text>
		 				<text>Lv.2护盾吸收量增至2%</text>
		 				<text>Lv.3护盾吸收量增至2%</text>
		 				<text>Lv.4护盾吸收量增至3%</text>
		 				<text>Lv.5护盾吸收量增至3%</text> 
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