<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/zhuiyueshen0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">追月神</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>在人类眼中，神是外观有别于人类，又无所不能的存在。</text><text>神可以赐予人类以智慧，满足人类的祈愿，保障人类的生存。</text><text>神这个字眼，仿佛在人类心中处于至高无上的地位，神圣而不可亵渎。</text><text>我就是这神社中供奉着的神灵。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>在饥荒时期，人类祈求食物。</text><text>虽然我无法凭空变出珍馐美馔，但我可以飞去百里外的深山，击杀野鹿和野兔，带回来供人类享用。</text><text>在干旱时期，人类祈求水源。虽然我无法开山引水呼风唤雨，但我可以飞去千里外的河流，一次又一次地取水，直至将人类的水井填满。</text><text>每次满足了人类的愿望，他们都会一秉虔诚地跪在我面前，感激我帮他们渡过难关。</text><text>我喜欢这种被需要、被感激的感觉，即使它来之不易。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>至今为止，我满足了所有人的祈愿，除了那一个~那是来自一个人类孩子的愿望。</text><text>那天他好像因为受到了惊吓而有些颤抖，学着大人的动作，泪眼汪汪地向我祈愿。</text><text>他希望我可以除尽这世上的妖怪，因为他妈妈说调皮的孩子会被妖怪吃掉。</text><text>虽然我不能满足他的祈愿，但是我会一直保护他不被妖怪吃掉的。</text><text>可是，妖怪这个字眼，在人类心中真的有那么不堪吗？</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/zhuiyueshen1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/zhuiyueshen2.png" mode="aspectFit"></image>
		 				<text>基本技能：邀月</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>使用月之印攻击敌方目标，造成攻击100%伤害，并增加自身20%行动条。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/zhuiyueshen3.png" mode="aspectFit"></image>
		 			    <text>清辉月华</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>战斗开始时获得庇护，回合开始时失去庇护。向月亮起舞降下月之祝福，维持1回合。期间使其他友方提升10点速度，并在其回合结束时，使鬼火行动条额外推进1格。</text>
		 				<text>Lv.2期间额外提升10%攻击</text>
		 				<text>Lv.3提升速度效果，增至20点</text>
		 				<text>Lv.4提升攻击效果，增至20%</text>
		 				<text>Lv.5施放时，使自身获得庇护，可抵挡单次技能当中的所有控制效果</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/zhuiyueshen4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：明月潮生</text>
		 			</view> 
		 			<view class="jinengjs"> 
		 				<text>先机：使鬼火行动条额外推进1格。</text>
						<text>Lv.2额外推进增至2格</text>
						<text>Lv.3额外推进增至3格</text>
						<text>Lv.4额外推进增至4格</text> 
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