<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/guiqie0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">鬼切</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>唔~~唔啊~~咳咳咳~~我从血泊里爬起。</text><text>刚才真是一场恶战！我本抱着赴死的心去决斗~~没想到我竟然活了下来！</text><text>我的手到现在还在发抖，无法握住掉在地上的刀。不是因为恐惧，而是难以平息的恨意！但是，那个人类的尸体~~去哪里了呢？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>也许是那个人类的血起了作用，茨木童子的鬼手竟被我支配了。</text><text>我一定要找到茨木童子！</text><text>我跟着那只鬼手的指引来到大江山，这里已是一片狼藉。</text><text>茨木童子：鬼切！！</text><text>我一定要报我这断臂之仇！！</text><text>鬼切：等等——！</text><text>茨木童子！茨木童子：喝哈——！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>哈~~哈~~唔呵~~哈哈哈哈哈——！</text><text>不愧是你啊！茨木童子！</text><text>突然，我却感到左眼一阵阵刺痛！</text><text>难道这是~~契约的效果？</text><text>可恶！可恶啊！原来那个人类还没死吗？</text><text>怎么可能！！不会原谅你！不会放过你！该死的人类！</text><text>哈哈哈哈哈哈哈哈哈——！</text><text>茨木童子：等等~~这股戾气~~鬼切：可恶！还不够——！</text><text>还远远没有结束——！可恶！茨木童子~~我们停手吧！我会帮助你一起复仇！</text><text>茨木童子：什、什么~~！如果不解决这一切，这份契约的痛苦，将永远溶在我的血中！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/guiqie1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/guiqie2.png" mode="aspectFit"></image>
		 				<text>基本技能：鬼斩</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>拔出三把佩刀中的随机一把砍击敌方目标，造成攻击80%伤害，并根据不同佩刀，有100%基础概率附加对应减益状态，持续1回合。髭切：减速20点友切：减疗75%狮子之子：降低20%防御</text>
		 				<text>Lv.2伤害增加至84%</text>
		 				<text>Lv.3伤害增加至88%</text>
		 				<text>Lv.4伤害增加至92%</text>
		 				<text>Lv.5伤害增加至100%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/guiqie3.png" mode="aspectFit"></image>
		 			    <text>鬼刃·罗城门</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>攻击后，若目标生命低于85%，对其追加1次斩击，造成攻击125%伤害。然后该目标生命若还低于65%，再追加1次对敌方全体的斩击，造成攻击125%伤害。追加的斩击无视护盾、无法分担、不触发目标的御魂及被动。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/guiqie4.png" mode="aspectFit"></image>
		 				<text>鬼影闪</text>
		 				
		 			</view> 
		 			<view class="jinengjs">
						<text>同时拔出三把佩刀，攻击敌方目标3次，每次造成攻击80%伤害并各有50%基础概率为其附加佩刀的对应减益状态。</text>
						<text>Lv.2伤害增加至84%</text>
						<text>Lv.3伤害增加至88%</text> 
						<text>Lv.4伤害增加至92%</text>
					    <text>Lv.5伤害增加至100%</text>  
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