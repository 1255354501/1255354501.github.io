<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yinghuayao0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">樱花妖</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>那个黑衣人，毁掉了我跟夫君的生活，也毁掉了我的心，一点都不剩。</text><text>我想过坦白。想要告诉，我不是他心目中平凡单纯的人类女子。</text><text>也曾无数次地想要离开他，毕竟人妖殊途~~</text><text>但是~~</text><text>每当我想要告诉他真相时，他总是用温柔的目光默默地制止了我。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>直到他开口说要娶我。</text><text>我还没来得及消化这狂喜与酸涩交织的滋味，桃花林中却生出了异象。</text><text>原本平静的桃花林，一夜之间出现了很多陌生的妖怪~~而且，仿佛都没有了理智。他们只记得告诫我，</text><text>离那个阴阳师远一点。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>这种可能性让我无法忍受。一定是，到了必须离开的时候了。</text><text>还是晚了~~晚了~~</text><text>当我想去看夫君的最后一眼~~却只能~~看到他倒在血泊中的身影~~我错了~~夫君~~是我害了你~~对不起~~对不起~~你等等我，我绝不会就让你这样白白死去~~等我找到那阴阳师！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yinghuayao1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yinghuayao2.png" mode="aspectFit"></image>
		 				<text>基本技能：樱落</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>使用花瓣攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yinghuayao3.png" mode="aspectFit"></image>
		 			    <text>复苏</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>唯一效果。若自身未处于无法动作，则其他友方行动结束后，为其治疗生命上限6%的生命；若为回合结束后，则改为为其治疗生命上限9%生命，并同时樱花妖治疗自身生命上限4%生命。【施放】获得复苏之舞，持续1回合。</text>
		 				<text>Lv.2复苏之舞额外提升50%效果抵抗</text>
		 				<text>Lv.3复苏之舞治疗效果提升增至100%</text>
		 				<text>Lv.4复苏之舞持续时间增至2回合</text>
		 				<text>Lv.5消耗鬼火降至2点</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/yinghuayao4.png" mode="aspectFit"></image>
		 				<text>樱吹雪</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>降下落樱攻击敌方全体，对每个敌方驱散3个增益状态，并且50%基础概率减疗50%，持续2回合；同时附加落樱，造成生命上限9%间接伤害（不超过樱花妖攻击370%），持续1回合。</text> 
		 				<text>Lv.2落樱间接伤害增至生命上限14%</text>
						<text>Lv.3落樱间接伤害增至生命上限19%</text>
						<text>Lv.4减疗效果增至60%</text>
						<text>Lv.5若没有驱散任何增益，返还1点鬼火</text> 
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