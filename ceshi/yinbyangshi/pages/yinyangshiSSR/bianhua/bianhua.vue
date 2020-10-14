<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/bianhua0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">彼岸花</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>呵呵，人类总是把誓言和承诺挂在嘴边。</text><text>如果你真的如你所起誓的那样，那就先和我一起下黄泉吧。</text><text>不，我不是开玩笑，我是认真的哦。我有说过自己是人类吗，看来你是误会了什么呢~~</text><text>我住在黄泉的河岸，那里有一片彼岸花海。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>害怕了吗？</text><text>不过这也是自然的吧，人类啊，既怕死亡、又怕妖怪，是非常软弱的生物。</text><text>但是我曾经认识一个人，他可是和其他人类不一样。</text><text>是的，那是个又勇敢、又坚忍的人类。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>你问那个人现在在哪里吗？</text><text>呵呵~~对了，你看不见他。</text><text>他就在这里——在我的身体里哦。他成为了我的花泥，变成了我的养分，流入我的身体，给我提供了源源不断的能量。</text><text>那真是个意志坚定的人呢~~嗯？</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/bianhua1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/bianhua2.png" mode="aspectFit"></image>
		 				<text>基本技能：死亡之花</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>用殷红的花瓣攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/bianhua3.png" mode="aspectFit"></image>
		 			    <text>赤团华</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>唯一效果。花海中的敌方，在回合开始时，每层花海对其造成攻击39%伤害。自身生命比例100%、75%、50%、25%时，花海上限为3、4、5、6层；回合开始时自动减少1层花海，最少不低于1层。生命比例每降低25%，获得1层花海及『血之花海』的护盾。先机：创造3层花海，包围敌方全体。</text>
		 				<text>Lv.2每层花海伤害增加至41%</text>
		 				<text>Lv.3每层花海伤害增加至43%</text>
		 				<text>Lv.4每层花海伤害增加至45%</text>
		 				<text>Lv.5每层花海伤害增加至48%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/bianhua4.png" mode="aspectFit"></image>
		 				<text>血之花海</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>获得2层花海。若生命比例低于75%，获得不可驱散的护盾，能吸收20%已损失生命的伤害，持续2回合。</text> 
		 				<text>Lv.2护盾吸收量增至已损失生命的22%</text>
						<text>Lv.3护盾吸收量增至已损失生命的24%</text>
						<text>Lv.4护盾吸收量增至已损失生命的26%</text>
						<text>Lv.5护盾吸收量增至已损失生命的28%</text> 
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