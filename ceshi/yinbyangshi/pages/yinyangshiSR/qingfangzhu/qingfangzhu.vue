<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/qingfangzhu0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">青坊主</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>浮生一梦，万法皆空。</text><text>佛曰八苦：生、老、病、死、爱别离、怨憎会、求不得，五阴炽盛。</text><text>凡间人人遭此劫难。我有意渡世人，世人却沉迷红尘中，红尘化骨，诸事皆空，唯有因果，几番轮转，生生不灭。</text><text>青灯古佛边，夜夜通明，唯有木鱼声相伴。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我常谓世人曰，心不动则无苦无痛。</text><text>万象非实，万象若梦，万象乃虚，渡我者，佛祖慈悲。</text><text>入我佛门，潜心向善，知我所知，得我所得，无欲无求。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>世人谓我曰，动乱之中安能独善其身，受难之时岂有极乐？</text><text>鬼魅横行，白骨遍野，佛家清净不过妄言。</text><text>我思索良久，终得其解。袈裟染血，禅杖伏魔，时之将至，归入凡世也。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/qingfangzhu1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/qingfangzhu2.png" mode="aspectFit"></image>
		 				<text>基本技能：摩诃</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>使用灵咒攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/qingfangzhu3.png" mode="aspectFit"></image>
		 			    <text>无量</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>唯一效果。战斗开始时，获得1层佛光，上限6层，最少1层，持续到战斗结束。每当友方受到控制效果时，获得1层佛光；回合结束时，失去1层佛光。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/qingfangzhu4.png" mode="aspectFit"></image>
		 				<text>禅心</text>
		 			</view> 
		 			<view class="jinengjs">
						<text>使用灵咒攻击敌方全体，造成攻击185%伤害。青坊主杀心受佛光抑制，每层降低10%伤害。</text>
						<text>Lv.2伤害增加至195%</text>
						<text>Lv.3伤害增加至204%</text> 
						<text>Lv.4伤害增加至213%</text>
					    <text>Lv.5伤害增加至222%</text>  
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