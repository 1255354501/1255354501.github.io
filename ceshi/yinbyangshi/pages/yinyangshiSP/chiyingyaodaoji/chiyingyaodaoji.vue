<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/chiyingyaodaoji0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">赤影妖刀姬</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>妖刀姬自称是源氏的兵器，为了源氏而战，勋勋主人的意志，通过洞察敌人的弱点来击溃对方贯穿身体，为了主人的大义扫清一切障碍，没人有人是比妖刀姬更加快速的武器，这还是兵器的本能，所有被妖刀姬横扫的战场都回被杀出一片赤色的血影，但妖刀姬自己内心开始产生了迟疑。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>妖刀姬在斩杀一只不知名的逍遥的的时候发现了自己的身躯不受自己思想的控制，挥刀动作快过了思想的反应，妖刀姬开始意识到这不是本能，也不是她自己</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>同僚总是劝妖刀，作为主人的兵器，杀便是了，但妖刀赶到了害怕，想善心的长老求救，长老却再次将她送到了源赖光手中并表示“这是残次品啊”妖刀姬开始意识到了，在成为兵器之前，她是人。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/chiyingyaodaoji1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>该式神无法觉醒</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/chiyingyaodaoji2.png" mode="aspectFit"></image>
		 				<text>基本技能：炎刀</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>适用大太刀攻击敌方目标，造成攻击100%伤害</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/chiyingyaodaoji3.png" mode="aspectFit"></image>
		 			    <text>穷追不舍</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>回合结束后，锁定当前生命比例最低、非召唤物的地方目标，在自身下回合开始前，对锁定目标造成攻击100%伤害，且不触发其御魂、被动、无法分摊。</text>
		 				<text>Lv.2对锁定目标造成的伤害提升至105%</text>
		 				<text>Lv.3对锁定目标造成的伤害提升至110%</text>
		 				<text>Lv.4对锁定目标造成的伤害提升至115%</text>
		 				<text>Lv.5对锁定目标造成伤害时，有100%基础概率附加孤立</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSP/chiyingyaodaoji4.png" mode="aspectFit"></image>
		 				<text>赤影一瞬</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>全力砍击敌方目标造成攻击295%伤害</text>
						<text>Lv.2击杀非召唤物的敌人时，获得赤影之息状态，提升10%伤害，上限60%</text>
						<text>Lv.3击杀非召唤物的敌人时，获得新回合，但不触发锁定</text>
						<text>Lv.4赤影之息提升的伤害增至15%，上限增至90%</text> 
						<text>Lv.5击杀敌人获得新的回合时，新回合中赤影一瞬将可免消耗释放</text> 
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