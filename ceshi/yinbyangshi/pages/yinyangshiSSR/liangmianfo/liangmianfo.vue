<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/liangmianfo0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">两面佛</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>风神：吾等既为神明。</text><text>雷神：岂会召之即来。</text><text>风神：吾等若听你召唤，你必付出代价。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>风神：等等~~你该不会是~~</text><text>雷神：就是他！！就是他！！</text><text>风神：可怕的阴阳师！！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>风神：你叫做，不，您曾经的尊名是~~</text><text>雷神：尊、尊名~~是~~~~</text><text>风神：啊！！！您是！！！！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/liangmianfo1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/liangmianfo2.png" mode="aspectFit"></image>
		 				<text>基本技能：风雷两生</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>随机用一面攻击敌方目标。雷神造成攻击100%伤害；风神造成攻击25%伤害并附加风怒状态，造成攻击125%间接伤害，持续1回合。</text>
		 				<text>Lv.2雷神伤害增至105%；风神伤害增至27%，间接伤害增至132%</text>
		 				<text>Lv.3雷神伤害增至110%；风神伤害增至28%，间接伤害增至138%</text>
		 				<text>Lv.4雷神伤害增至115%；风神伤害增至29%，间接伤害增至144%</text>
		 				<text>Lv.5雷神伤害增至125%；风神伤害增至32%，间接伤害增至157%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/liangmianfo3.png" mode="aspectFit"></image>
		 			    <text>怒目</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>攻击时，雷神有100%基础概率为目标附加雷之怒目、风神有100%基础概率附加风之怒目，持续2回合。</text>
		 				<text>Lv.2降低防御、降低攻击，均增至12%</text>
		 				<text>Lv.3降低防御、降低攻击，均增至14%</text>
		 				<text>Lv.4降低防御、降低攻击，均增至16%</text>
		 				<text>Lv.5雷神对攻击低于自身的敌方进行攻击时，击退8%行动条；风神对防御低于自身的敌方触发间接伤害后，增加自身8%行动条</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/liangmianfo4.png" mode="aspectFit"></image>
		 				<text>神罪连击</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>跳入敌阵，每次随机一面攻击敌方全体3次，雷神造成攻击44%伤害；风神造成攻击11%伤害并附加风袭状态，造成攻击55%间接伤害，</text> 
		 				<text>Lv.2雷神伤害增至47%；风神伤害增至12%，间接伤害增至59%</text>
						<text>Lv.3雷神伤害增至49%；风神伤害增至13%，间接伤害增至61%</text>
						<text>Lv.4雷神伤害增至51%；风神伤害增至14%，间接伤害增至64%</text>
						<text>Lv.5雷神伤害增至55%；风神伤害增至15%，间接伤害增至69%</text> 
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