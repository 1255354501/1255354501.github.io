<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/yingcao0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">莹草</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>昨天大家回来的时候，身上又都是伤痕累累的。真是的！跟他们说了，不要在外面打架，不要跟别的妖怪起冲突，总是不肯听。也不愿意告诉我到底发生了什么事~~不行，今晚我要跟过去看看到底是怎么回事！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我听到了一个陌生女孩子的声音，我探出头去~~</text><text>大家居然在欺负一个女孩子！怎么可以这样！这次一定要好好地说他们一顿！诶？那个女孩子~~好凶呀！！大家都被打倒了！！诶诶诶！？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>哈！这里还藏着一头！我才不是一头呢~~呜哇哇，她发现我了吗？</text><text>狼牙棒砸下来了！不、不能哭，不能~~</text><text>但是，不要哭什么，做不到啦！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/yingcao1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/yingcao2.png" mode="aspectFit"></image>
		 				<text>基本技能：吸取</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>汇聚妖力攻击敌方目标，造成攻击100%伤害，并附带30%吸血。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/yingcao3.png" mode="aspectFit"></image>
		 			    <text>生花</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>受到攻击时，治疗攻击15%的生命。单次攻击内最多触发1次。当伤害来源的攻击力低于萤草时，萤草受到的伤害降低30%。</text>
		 				<text>Lv.2治疗增至16%</text>
		 				<text>Lv.3治疗增至17%</text>
		 				<text>Lv.4治疗增至18%</text>
		 				<text>Lv.5治疗增至19%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/yingcao4.png" mode="aspectFit"></image>
		 				<text>治愈之光</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>唯一效果。战斗开始时，携带2个祝福种子，每个祝福种子可提升自身60%攻击力。【施放】将祝福种子给予友方目标。然后为友方全体治疗攻击87%的生命。</text>
						<view class="jinengjs">
							<text>Lv.2治疗增至91%</text>
							<text>Lv.3治疗增至95%</text>
							<text>Lv.4治疗增至99%</text>
							<text>Lv.5治疗增至104%</text> 
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