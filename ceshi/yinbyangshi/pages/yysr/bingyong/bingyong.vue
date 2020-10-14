<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/bingyong0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">兵勇</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>终于又安静下来了，在下保护了主人一辈子，现在他死了，在下也绝不会允许其他人来打扰他。</text><text>刚才那个家伙，似乎和之前的盗墓贼不一样，看到在下之后，她并没有像其他盗墓贼那样攻击在下或者尖叫着逃跑。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>你明明有能力帮助更多的人，但你却要把自己困在这里，守护这个腐朽的墓穴？</text><text>现在回想起来，那种眼神~~主人教过在下，那叫怜悯。</text><text>在下很久没有去过外面的世界了，外面也会有人需要在下的力量吗？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>也许在下可以代替主人去走一走。</text><text>也许，在下还可以帮助一些，需要在下的人。就像主人以前做的一样。</text><text>在下决定离开，到外面的世界看一看。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/bingyong1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/bingyong2.png" mode="aspectFit"></image>
		 				<text>基本技能：挥斩</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>挥舞长刀斩击敌方目标，造成防御160%伤害；连续两次攻击相同目标时，伤害提升50%。</text>
		 				<text>Lv.2伤害增加至200%</text>
		 				<text>Lv.3伤害增加至240%</text>
		 				<text>Lv.4伤害增加至280%</text>
		 				<text>Lv.5伤害增加至320%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/bingyong3.png" mode="aspectFit"></image>
		 			    <text>坚甲</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>生命比例每降低30%，提升5%防御。</text>
		 				<text>Lv.2生命比例门槛降至20%</text>
		 				<text>Lv.3提升防御效果增至7%</text>
		 				<text>Lv.4提升防御效果增至9%</text>
		 				<text>Lv.5提升防御效果增至11%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/bingyong4.png" mode="aspectFit"></image>
		 				<text>坚不可破</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>石化自身，50%基础概率对敌方全体嘲讽，并使自身获得40%减伤、40%减速；生命比例每降低25%，基础概率提升5%。</text>
						<view class="jinengjs">
							<text>Lv.2减伤效果增至50%</text>
							<text>Lv.3减伤效果增至60%</text>
							<text>Lv.4减伤效果增至70%</text>
							<text>Lv.5减伤效果增至80%</text> 
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