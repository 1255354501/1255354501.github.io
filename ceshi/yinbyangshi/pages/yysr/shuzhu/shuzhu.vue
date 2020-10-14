<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shuzhu0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">数珠</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我第一次偷偷化形变成人的时候，就被这里的大和尚抓住了。</text><text>他拎起我，摇晃来摇晃去，﹁小妖怪，你想去做什么！</text><text>~~你~~！你~~</text><text>还不快快招来！贫僧可不会饶过你！</text><text>~~你别摇啦！我脑袋都要被你晃晕了！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>你这妖怪，贫僧这就~~！等等！佛祖说过，不可滥杀无辜！上天有好生之德！还、还有~~反正佛祖说过，不能杀我！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>有一天，庙里的小和尚哭着跑过来跟我说，大姐姐，大和尚他，他~~后面跟着住持，住持把哭泣的小和尚搂在怀里，又跟我说，他出远门了，等你把庙里打扫得干干净净，他就回来。</text><text>春天的时候，我仔仔细细地给花儿浇水；夏天的时候，我乘凉背诵经文；秋天的时候，我又一片一片地清理着落叶；冬天的时候，在雪地里扫出一条路。</text><text>一年又一年，住持去世了，小和尚长成了大和尚，庙里也来了新的住持。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shuzhu1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shuzhu2.png" mode="aspectFit"></image>
		 				<text>基本技能：降魔杖</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>用降魔杖轰出冲击波来攻击敌方目标，造成攻击100%伤害并有100%基础概率附加降魔，持续2回合。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shuzhu3.png" mode="aspectFit"></image>
		 			    <text>轮回</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>敌方每次行动，若自身未处于无法动作，获得1颗佛珠。累计6颗时，消耗全部的佛珠来对敌方全体造成攻击136%伤害，并有30%概率击退30%行动条。『禅意』打坐期间，没有佛珠时将立即获得1颗佛珠。</text>
		 				<text>Lv.2伤害增加至143%</text>
		 				<text>Lv.3击退行动条增至40%</text>
		 				<text>Lv.4伤害增加至150%</text>
		 				<text>Lv.5击退行动条增至50%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shuzhu4.png" mode="aspectFit"></image>
		 				<text>禅意</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>打坐2回合，此期间若自身未处于无法动作：友方在回合开始前，有40%概率（每颗佛珠额外提升10%）驱散1个减益状态或控制效果，每个成功驱散可为其治疗生命上限3%的生命，并消耗1颗佛珠在目标回合后增加其30%行动条；若未成功驱散，则提升目标40%效果抵抗，持续1回合。</text>
						<view class="jinengjs">
							<text>Lv.2治疗增至4%</text>
							<text>Lv.3驱散个数增至2个</text>
							<text>Lv.4治疗增至5%</text>
							<text>Lv.5驱散个数增至3个</text> 
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