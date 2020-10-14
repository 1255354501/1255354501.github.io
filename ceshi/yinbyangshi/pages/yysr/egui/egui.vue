<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/egui0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">饿鬼</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>姐姐，对不起。</text><text>我们家很穷，家里人全都饿死了~~只剩下姐姐跟我相依为命。姐姐每天都会带地瓜回来给我呢！可是，每天、每天都是地瓜，我根本就吃不饱啊~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>姐姐，为什么你看起来吃得很香的样子？你为什么要躲起来一个人吃？</text><text>啊啊！我知道了！你一定是把最好吃的部分留给自己了！</text><text>你怎么可以这样对我~~可恶~~</text><text>我恨你~~！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>我翻过姐姐已经僵硬的~~身体~~抢过她手中的地瓜。</text><text>好、好硬~~这连地瓜都不是，这是树根吧~~？</text><text>啊啊~~我居然把姐姐给~~姐姐不在了，再也没有人会为我寻找食物。很快，我很快就会饿死~~这是我的惩罚。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/egui1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/egui2.png" mode="aspectFit"></image>
		 				<text>基本技能：臭馒头</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>把腐臭的馒头扔向敌方目标，造成攻击100%伤害并有20%概率偷取1个增益状态，然后有30%基础概率获得1层馒头，上限4层。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/egui3.png" mode="aspectFit"></image>
		 			    <text>盗窃</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>10%概率协战。</text>
		 				<text>Lv.2触发概率增至15%</text>
		 				<text>Lv.3触发概率增至20%</text>
		 				<text>Lv.4触发概率增至25%</text>
		 				<text>Lv.5触发概率增至30%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/egui4.png" mode="aspectFit"></image>
		 				<text>饥不择食</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>对敌方目标造成攻击100%伤害，有30%基础概率将其吞食并在1回合后吐出，此期间被攻击时有15%概率提早吐出。敌方被吐出时失去所有增益状态。每层馒头可以提升吞食概率30%，未成功吞食时获得1层馒头。</text>
						<text>Lv.2伤害增加至105%</text>
						<text>Lv.3伤害增加至110%</text>
						<text>Lv.4伤害增加至115%</text>
						<text>Lv.5伤害增加至120%</text> 
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