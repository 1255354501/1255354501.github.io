<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/shuweng0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">书翁</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我一直四处旅行。</text><text>走到一处山下的小镇，那里的人们告诉我，山中住着一只大妖怪。</text><text>那妖怪性格暴烈，样貌丑陋，背后长着巨大的翅膀，如果遇到了一定要马上逃跑，不然就会被他吃掉。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>沿途，我见到了许多没有见过的植物、我将它们一一记录了下来。</text><text>还有一些小动物也偷偷地看着我，似乎很好奇我在做什么。</text><text>兔子、松鼠、猴子~~这座山上有这么多小动物，而且很亲近人。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>我把山中的景色全部都看了一遍，想离开的时候才发现自己居然找不到下山的路了。</text><text>我踌躇了一会儿，面前突然出现了一只大妖怪。他戴着面具，背后长着巨大的翅膀。</text><text>糟了！我心里这样想着。</text><text>他却一言不发地走到我身前，回头看了看我，我意识到他是想要为我带路，于是跟了上去。</text><text>我们一前一后这样走着，我找到了下山的路。</text><text>与他告别的时候，我对他说，我是书翁。</text><text>他摘下了面具，那是一张十分英俊的脸庞。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/shuweng1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/shuweng2.png" mode="aspectFit"></image>
		 				<text>基本技能：墨染</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>使用毛笔攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/shuweng3.png" mode="aspectFit"></image>
		 			    <text>云游</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>为友方目标治疗生命上限8%的生命，驱散或解除其带有的1个控制效果，并使其获得天书·无隙，维持1回合。</text>
		 				<text>Lv.2天书·无隙承受伤害改为不超过生命上限12%</text>
		 				<text>Lv.3同时对生命比例最低的敌方，免消耗施放『万象之书』（技能等级1）</text>
		 				<text>Lv.4天书·无隙承受伤害改为不超过生命上限9%</text>
		 				<text>Lv.5施放时，同时为另一生命比例最低的友方治疗书翁生命上限8%的生命，并使其获得天书·无隙</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/shuweng4.png" mode="aspectFit"></image>
		 				<text>万象之书</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>为敌方目标附加天书·攻心，然后对其造成攻击80%伤害，状态维持1回合后结算。</text> 
		 				<text>Lv.2天书·攻心伤害比例增至75%</text>
						<text>Lv.3同时对生命比例最低的友方，免消耗施放『云游』（技能等级1）</text>
						<text>Lv.4天书·攻心伤害比例增至100%</text>
						<text>Lv.5施放时，同时对另一生命比例最低的敌方造成书翁攻击80%的伤害，并为其附加天书·攻心</text> 
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