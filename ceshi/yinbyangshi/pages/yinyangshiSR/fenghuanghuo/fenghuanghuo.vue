<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/fenghuanghuo0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">凤凰火</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我现在要说的，不是怪谈故事。</text><text>是的，这是我自己的故事。</text><text>你们见过凤凰吗？</text><text>凤凰涅槃重生的时候，火焰与他融为一体。</text><text>那时迸射而出的火种，都会因为那个场面太过美丽，而忍不住要跟随着凤凰而去。</text><text>那些离光芒太远的火种，很快就熄灭了。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>凤凰飞掠而过后残存的余温，就是我们继续追寻的能量和信仰。</text><text>这是一个悲伤的过程，看着身旁的兄弟姐妹渐渐衰弱，然后熄灭。</text><text>然后，只剩下了我。</text><text>非常的不可思议，对吧？</text><text>那时的我们，明明只是一团混沌的火焰，没有意识，更妄谈生命。</text><text>却获得了一生的信仰。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>即使我得到了眼睛，也无需看凤凰以外的事物。</text><text>即使我得到了双足，但我无需停留。</text><text>即使我得到了智慧，但追逐凤凰仍是我唯一的信仰。</text><text>就这样，又过了很久~~很久。</text><text>我已从火焰已经蜕变成了火鸟——是的，这副与凤凰相近的模样。</text><text>你应去领悟生存的真正意义。</text><text>他却如此对我说。</text><text>回头看看自己不知不觉中，变得丰满的羽翼~~</text><text>也许这是他给我的，新的信仰。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/fenghuanghuo1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/fenghuanghuo2.png" mode="aspectFit"></image>
		 				<text>基本技能：凤火</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>以妖力凝成凤火弹射向敌方目标，造成攻击100%伤害，有50%基础概率偷取10%暴击，持续2回合。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至120%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/fenghuanghuo3.png" mode="aspectFit"></image>
		 			    <text>凤凰业火</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>释放凤凰业火攻击敌方全体，造成攻击99%伤害，若暴击，有25%概率获得新的回合。</text>
		 				<text>Lv.2伤害增加至104%</text>
		 				<text>Lv.3伤害增加至109%</text>
		 				<text>Lv.4伤害增加至114%</text>
		 				<text>Lv.5伤害增加至119%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/fenghuanghuo4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：烈焰</text>
		 			</view> 
		 			<view class="jinengjs"> 
		 				<text>攻击时，对带有减益状态和控制效果的敌方，有50%基础概率使其眩晕，持续1回合。</text>
					 
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