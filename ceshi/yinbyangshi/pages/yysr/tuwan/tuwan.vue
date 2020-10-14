<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tuwan0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">兔丸</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>啊！这、这是什么~~！虫子？这么大的虫子~~！</text><text>呜呜呜，救救我啊！</text><text>有、有什么好笑的~~虫子而已？才不是虫子而已呢！虫子可是很危险的！这</text><text>世界上有很多虫子能杀死一只兔子~~！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>嘘~~不要说话，我闻到了野兽的气味~~！</text><text>嗯，我确定，我的感觉可是很敏锐的，因为常年被野兽追逐，这次应该也是冲我来的~~你先在这里不要动，我去引开他！~~嗯？没事啦！</text><text>这种事情我已经习惯了~~而且我得保护你才行啊！虽然野兽也很可怕，不过没关系！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tuwan1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tuwan2.png" mode="aspectFit"></image>
		 				<text>基本技能：萌动</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tuwan3.png" mode="aspectFit"></image>
		 			    <text>治愈</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>受到非传导伤害时，有40%概率获得1层胡萝卜，上限4层。单次攻击内最多触发1次。</text>
		 				<text>Lv.2胡萝卜提升效果抵抗，增至30%</text>
		 				<text>Lv.3触发概率增至50%</text>
		 				<text>Lv.4胡萝卜提升效果抵抗，增至40%</text>
		 				<text>Lv.5触发概率增至60%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tuwan4.png" mode="aspectFit"></image>
		 				<text>守护之心</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>对随机友方目标，驱散其带有的冰冻、沉睡或解除其带有的变形、眩晕，并增加10%行动条。之后消耗所有胡萝卜，每消耗1层可额外使另一个随机友方目标也增加行动条，若没有胡萝卜则技能无法施放。对带有控制效果的友方将改为增加双倍行动条。</text>
						<view class="jinengjs">
							<text>Lv.2增加行动条效果增至15%</text>
							<text>Lv.3增加行动条效果增至20%</text>
							<text>Lv.4增加行动条效果增至25%</text>
							<text>Lv.5增加行动条效果增至30%</text> 
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