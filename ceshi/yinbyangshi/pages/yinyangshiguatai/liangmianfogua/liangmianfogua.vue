<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/liangmianfogua0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">两面佛呱</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>最喜欢每天的胧车了，和大家在一起真是开心，虽然眼神不好，不过看着大家打扮得非常精神的聚在一起，实在是很让人欣慰。</text><text>今天的彼岸花呱也很迷人呢~~</text><text>咦？原来不是彼岸花呱啊，而是阎魔呱啊。</text><text>其他的呱被认错了，也只会笑着说一声两面佛呱你的眼神真是越来越差啦也就算了，可是被错认成了彼岸花呱，怎么阎魔呱会这么不开心呢，看她眼睛红红的，好像很想哭。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>听辉夜姬呱说，每天盯着夕阳看可以治疗眼神不好的毛病。</text><text>看她那一本正经的样子，或许还真是值得尝试一番。</text><text>好在附近的池塘就有上好的夕阳景观，今天我就去试试。</text><text>啊，温暖的夕阳晒在身上，真舒服~~</text><text>只是一直要盯着夕阳，阳光好刺眼，好辛苦啊~~</text><text>辉夜姬呱，真的不是在骗我吗？</text><text>真的好辛苦~~脑子慢慢不清醒了~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>糟了！我怎么睡过去了！</text><text>哎呀呀，真是糟糕了。</text><text>天色已经这么晚了，胧车快开了吧，得赶紧赶回去才行！</text><text>哎呀，看了这么久夕阳，眼前一片昏花，夜路真的好难走。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/liangmianfogua1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>该式神无法觉醒</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/liangmianfogua2.png" mode="aspectFit"></image>
		 				<text>基本技能：呱·风雷两生</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>随机用雷神或风神攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/liangmianfogua3.png" mode="aspectFit"></image>
		 			    <text>呱·神罪连击</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>跳入敌阵，雷神和风神交替攻击敌方全体共3次，每次造成攻击20%伤害。</text>
		 				<text>Lv.2伤害增加至21%</text>
		 				<text>Lv.3伤害增加至22%</text>
		 				<text>Lv.4伤害增加至23%</text>
		 				<text>Lv.5伤害增加至24%</text>
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