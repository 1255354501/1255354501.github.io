<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tianjingxia0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">天井下</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我喜欢人类，却又害怕他们。一直以来只是躲在屋顶，偷偷地观察着他们。时间久了，竟也有一种家的感觉，那是作为妖怪不曾体会过的温暖。</text><text>只是这样的温暖如同泡沫一般脆弱。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>每到雨天，少年少女总是心有灵犀地来到神社避雨。雨仿佛一个浪漫的信号，传达了他们对彼此的思念。</text><text>幸福似乎在慢慢酝酿，但突如其来的战乱打破了一切。少年穿着戎装，在屋檐下郑重地向少女许下一生的约定。</text><text>此后，少女每天都来到这里，却也每天都失意而归。少年你在哪啊！你说好要来接她的！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>终于有一天，那个她也没有再来。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tianjingxia1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tianjingxia2.png" mode="aspectFit"></image>
		 				<text>基本技能：扔石头</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>向敌方目标扔出石头，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至120%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tianjingxia3.png" mode="aspectFit"></image>
		 			    <text>遮雨</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>唯一效果。妖怪屋散发出神奇的灵力，使友方全体提升10%效果抵抗。</text>
		 				<text>Lv.2提升效果抵抗增至15%</text>
		 				<text>Lv.3提升效果抵抗增至20%</text>
		 				<text>Lv.4提升效果抵抗增至25%</text>
		 				<text>Lv.5自身及友方回合开始时，治疗等同其生命上限5%的生命</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tianjingxia4.png" mode="aspectFit"></image>
		 				<text>再会之音</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>妖怪屋在平常时候处于迷梦状态，拥有欢愉标记且自身未承受控制效果时，妖怪屋将保持清醒。清醒状态时使友方全体提升10%伤害。回合开始时，天井下暂时唤醒身下的妖怪屋，使其保持清醒状态直到回合结束。【施放】自身获得2层欢愉标记，持续1回合。</text>
						<view class="jinengjs">
							<text>Lv.2提升伤害效果增至15%</text>
							<text>Lv.3友方消耗欢愉标记时，使其额外增加25%行动条</text>
							<text>Lv.4提升伤害效果增至20%</text>
							<text>Lv.5获得欢愉标记增至3层</text> 
						</view> 
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