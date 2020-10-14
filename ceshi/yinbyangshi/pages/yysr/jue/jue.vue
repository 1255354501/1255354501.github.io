<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/jue0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">觉</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>童女：小觉~跳跳妹妹让我来问问，你觉得跳跳哥哥怎么样？</text><text>觉：脑子有坑。</text><text>童女：他只是头上插了根箭嘛！那狸猫先生呢？</text><text>觉：酒鬼。</text><text>童女：那~~河童呢？</text><text>觉：偷窥狂。</text><text>童女：那那那~~鲤鱼精？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>童女：小觉嘴巴真的好毒诶~~</text><text>觉：爱哭鬼。</text><text>童女：诶！？</text><text>觉：我说你是，爱哭鬼。</text><text>童女：我~~才不是爱哭鬼呢！呜呜呜！</text><text>觉：啊啊~~怪不得晴明那个面瘫讨厌小孩子~~吵死了~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>神乐：觉也是，小孩子。</text><text>觉：你才小孩子！你全家都是小孩子！</text><text>神乐：晴明、博雅~~不是小孩子。</text><text>觉：你~~</text><text>神乐：觉也是吵闹的小孩子。</text><text>觉：啊啊啊啊啊啊啊啊啊啊啊啊啊我不跟你说话了！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/jue1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/jue2.png" mode="aspectFit"></image>
		 				<text>基本技能：棒打</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>挥舞着手中的狼牙棒跳过去敲打敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/jue3.png" mode="aspectFit"></image>
		 			    <text>棒球炸弹</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>用狼牙棒向敌方打出炸弹球，爆炸对敌方全体造成攻击132%伤害。</text>
		 				<text>Lv.2伤害增加至139%</text>
		 				<text>Lv.3伤害增加至146%</text>
		 				<text>Lv.4伤害增加至153%</text>
		 				<text>Lv.5伤害增加至160%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/jue4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>记仇</text>
						<view class="jinengjs">
							<text>受到攻击时，有40%基础概率为攻击者附加记仇。攻击带有记仇的敌方，伤害提升15%。</text> 
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