<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/limao0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">狸猫</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>哈～美美的睡了一觉！这里是哪里？等等~~这里不是人类的村子吗~~这下可糟了，不对，是太糟了！如果被人抓到可就麻烦了！得快点逃走！快点逃走！</text><text>嗯？嘿嘿，喂，喊你呢，你能见到我，算你走运。让</text><text>我先在你家躲躲。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>~~对、对不起！全都是我的错，是我不小心摔倒打翻了蜡烛、引起了火灾~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>~~我太害怕了，所以我才会逃走。我怎么这么懦弱呢！不过我现在已经能轻松地用变化之术化成人形了！如果我变成你喜欢的丰腴女子，到市集里卖酒的话，是不是就能再遇见你？</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/limao1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/limao2.png" mode="aspectFit"></image>
		 				<text>基本技能：妖酒壶</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>用酒壶狠狠地砸敌方目标的脑门，造成攻击100%伤害并附加1层酒气，上限5层，持续至战斗结束。此外还有50%基础概率对其挑衅，持续1回合。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至120%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/limao3.png" mode="aspectFit"></image>
		 			    <text>醉倒</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>回合结束时，有20%概率醉倒，直至下回合醒来并恢复生命上限6%的生命。醉倒时若被攻击，有50%概率被吵醒，并为攻击者附上1层酒气，上限5层，持续至战斗结束。</text>
		 				<text>Lv.2恢复增至8%</text>
		 				<text>Lv.3被吵醒时，将增加自身30%行动条</text>
		 				<text>Lv.4醉倒概率增至40%</text>
		 				<text>Lv.5被吵醒时，改为对敌方全体附上1层酒气</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/limao4.png" mode="aspectFit"></image>
		 				<text>烈焰之酒</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>喝下一口妖酒，治疗生命上限18%的生命，再喷出妖火攻击敌方全体，造成等同自身当前生命12%伤害。</text>
						<view class="jinengjs">
							<text>Lv.2伤害增加至14%</text>
							<text>Lv.3伤害增加至16%</text>
							<text>Lv.4伤害增加至18%</text>
							<text>Lv.5伤害增加至20%</text> 
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