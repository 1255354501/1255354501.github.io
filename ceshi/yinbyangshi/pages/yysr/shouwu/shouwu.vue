<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shouwu0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">首无</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>手中提着自己的头四处张望，却无处可去。</text><text>我的方向感很好，所以我不曾迷失过方向。无论是脚下的路，还是心中的路。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>于是我送信的内容，从普通士兵的家书，渐渐变成了军队的文书，甚至紧急的战报。</text><text>这是对我最高的奖赏。</text><text>将军说，只要我的信及时送到，我们的军队将无往不利。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>可是为什么，我如此卖力地奔跑，我们还是输掉了战争？为什么，送对了地方的信，内容却不对？</text><text>啊！！！！！</text><text>延误了战机，就必须有人负起责任。我被赶出了军营。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shouwu1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shouwu2.png" mode="aspectFit"></image>
		 				<text>基本技能：重击</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>重击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shouwu3.png" mode="aspectFit"></image>
		 			    <text>虚无</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>施放虚无符咒，对敌方目标造成攻击206%伤害并无视40%防御。</text>
		 				<text>Lv.2伤害增加至216%</text>
		 				<text>Lv.3伤害增加至226%</text>
		 				<text>Lv.4伤害增加至236%</text>
		 				<text>Lv.5伤害增加至246%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shouwu4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：冥火</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>造成伤害时，偷取目标40%暴击，持续1回合。同时间内只能对一个目标生效。</text>
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