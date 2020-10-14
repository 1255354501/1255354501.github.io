<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yanyanluo0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">烟烟罗</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>食发鬼：姐姐？！你为什么会在这里？</text><text>烟烟罗：怎么了~~我不可以来看你吗？听说之前你招惹到了阴阳师晴明，不过看上去你好像没事嘛，呵呵，让我白担心了。</text><text>食发鬼：那已经是很久以前的事情了，姐姐。就算我有事，你现在来看我，也已经晚了吧？</text><text>烟烟罗：呵呵，我本来就是想看你被晴明欺负的样子，结果你这不是好好的嘛，真是失望。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>烟烟罗：哎呀哎呀，闹别扭了吗？真可爱呢。</text><text>食发鬼：人家不想理你了啦！</text><text>烟烟罗：不过我是真的很想见见那个晴明，好像是个很有趣的人。</text><text>食发鬼：我也想再见到晴明大人呢。</text><text>烟烟罗：哦？那是为什么？他不是之前还欺负过你了吗？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>烟烟罗：呵呵，看来我的弟弟长大了呢。</text><text>食发鬼：才不是那样呢，姐姐。</text><text>烟烟罗：那我带你去见见他吧，要感谢姐姐哦？</text><text>食发鬼：~~姐姐！</text><text>烟烟罗：对，这时候就应该坦率地谢谢我呢。</text><text>食发鬼：最喜欢姐姐了！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yanyanluo1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yanyanluo2.png" mode="aspectFit"></image>
		 				<text>基本技能：蹂躏</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>将烟雾小鬼踢向敌方目标，烟雾小鬼爆炸造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yanyanluo3.png" mode="aspectFit"></image>
		 			    <text>扑朔迷离</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>受到伤害时，有30%概率使该次伤害降低20%。</text>
		 				<text>Lv.2触发概率增至35%</text>
		 				<text>Lv.3降低伤害效果，增至25%</text>
		 				<text>Lv.4触发概率增至40%</text>
		 				<text>Lv.5降低伤害效果，增至30%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yanyanluo4.png" mode="aspectFit"></image>
		 				<text>烟之鬼</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>酣畅攻击敌方目标5次，每次造成攻击19%伤害，最后对敌方全体造成攻击44%伤害；前5次攻击的每次暴击，都会使最后的伤害提升30%。</text> 
		 				<text>Lv.2前5次伤害增至20%，最后全体伤害增至46%</text>
						<text>Lv.3前5次伤害增至21%，最后全体伤害增至48%</text>
						<text>Lv.4前5次伤害增至22%，最后全体伤害增至51%</text>
						<text>Lv.5前5次伤害增至23%，最后全体伤害增至53%</text> 
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