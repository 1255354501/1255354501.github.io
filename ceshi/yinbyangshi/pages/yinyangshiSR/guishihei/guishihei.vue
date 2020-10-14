<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guishihei0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">鬼使黑</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>哈啊~~你总是这么啰嗦，听你说话我都要睡着了。</text><text>我是为了弟弟，才到这冥府这鬼地方来的。</text><text>死后变成鬼还是变成别的什么，这种事情我才无所谓。</text><text>只要能够夺回弟弟的幸福，让我做什么都行。</text><text>正当我心里面这么想的时候。</text><text>你却出现在我面前。</text><text>还对我说你和以前不一样了，现在我无法放心地把工作交给你。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>真是的，这是哪门子的玩笑啊。</text><text>你还是和以前一样，老是一副认真的样子，一点都没变。</text><text>就不能偶尔也稍微放松一下嘛。</text><text>你对我说只要实现了你的愿望，我就可以离开这里，重获自由。知道啊，我早就知道了。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>我变成亡魂也无所谓。如果你能够回到人间、实现还没完成的遗愿的话，就算变成怪物，我也愿意。</text><text>你是~~我的~~喂喂，你可别在意我的事情啊。</text><text>我不是说过了么，只要是为了你，我什么都可以做，变成什么都！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guishihei1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guishihei2.png" mode="aspectFit"></image>
		 				<text>基本技能：惩戒</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>持巨大的黑镰惩戒敌方目标，造成攻击100%伤害。通过『索命』获得的新的回合里面，将『惩戒』替换为『追魂』。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guishihei3.png" mode="aspectFit"></image>
		 			    <text>索命</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>击杀敌方时，获得新的回合。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guishihei4.png" mode="aspectFit"></image>
		 				<text>死亡宣判</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>挥舞镰刀攻击敌方全体，造成攻击106%伤害。对生命比例高于40%的敌方，暴击和伤害提升50%；反之伤害降低50%。</text>
						<text>Lv.2伤害增加至111%</text>
						<text>Lv.3伤害增加至117%</text> 
						<text>Lv.4伤害增加至122%</text>
					    <text>Lv.5伤害增加至128%</text>  
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