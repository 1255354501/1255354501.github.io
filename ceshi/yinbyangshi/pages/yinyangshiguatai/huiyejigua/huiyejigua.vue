<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huiyejigua0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">辉夜姬呱</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>哼，哥哥真讨厌，什么都要管，吃饭要管，睡觉要管，连我去哪里玩都要管！</text><text>哥哥总是仗着自己年纪大，说自己是大哥，要好好照顾我，总是说我还小不懂事，我、我都八岁了！</text><text>他哪里有一点做大哥的威严嘛，整天絮絮叨叨，什么小事都要管，根本就是个老婆婆嘛！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>啊，池塘的水好清凉啊，真舒服。</text><text>没有哥哥在耳边唠叨，感觉好开心啊。</text><text>咦，那边不是大天狗呱吗？</text><text>一直对着池水照自己的样子，简直是比女孩子还爱美一百倍啊。</text><text>如果让他不这么帅气，不知道他会不会像女孩子一样哭鼻子呢？</text><text>嘻嘻，我去试试~~</text><text>嗯~~怎么让他变得不帅气呢？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>天啊，这池塘底的淤泥也太厉害了吧，大天狗呱的脸上都肿了！</text><text>怎么办怎么办，他的样子好可怕！</text><text>他会打我的！哥哥、哥哥！快来救我啊！</text><text>呜呜呜，我再也不调皮捣蛋了~~</text><text>啊！是哥哥来了！唉，哥哥真的好能干，和大天狗呱说了好久好久，他终于答应不责罚我了。</text><text>夕阳下哥哥的背影好高大啊，嗯、嗯~~其实哥哥还是很棒的啊，我不敢去牵哥哥的手，哥哥到底还会不会怪我呢？</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huiyejigua1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>该式神无法觉醒</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huiyejigua2.png" mode="aspectFit"></image>
		 				<text>基本技能：呱·蓬莱玉枝</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>使用蓬莱玉枝召唤灵气攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/huiyejigua3.png" mode="aspectFit"></image>
		 			    <text>呱·龙首之玉</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>创造存在1回合的幻境，使友方全体提升5%防御、1%效果抵抗。</text>
		 				<text>Lv.2提升效果抵抗效果增至2%</text>
		 				<text>Lv.3提升效果抵抗效果增至3%</text>
		 				<text>Lv.4提升效果抵抗效果增至4%</text>
		 				<text>Lv.5提升效果抵抗效果增至5%</text>
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