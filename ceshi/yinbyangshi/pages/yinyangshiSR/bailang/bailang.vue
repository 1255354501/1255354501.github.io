<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/bailang0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">白狼</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>在我初次化形的时候，一位结界师救了我的命。</text><text>那只污秽的怪物对我张开了血盆大口，我以为自己就会这样死掉了。</text><text>下一个瞬间，他的箭准确无误地贯穿了怪物的喉咙。</text><text>这只庞然大物轰然倒下。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我完全被他吸引住了，忘却了差点被怪物吞食的恐惧，只能看着他淡然地调整气息，收弓，转身离开。</text><text>后来我才知道，那叫残心。</text><text>我开始学习弓道。</text><text>用足、胴造、备弓、起弓、拉弓、会、离。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>我不停地重复练习着，无论族人怎么耻笑我学习弱小的人类技俩，我都不停地重复练习着。</text><text>这跟我是否是一匹狼没有关系。</text><text>弓道使我感到宁静，也让我从内心开始，渐渐变得强大。</text><text>我是否能变成，像那位结界师一样威风凛凛的、正直的妖怪呢？</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/bailang1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/bailang2.png" mode="aspectFit"></image>
		 				<text>基本技能：文射</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>射出注入了妖力的箭矢攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/bailang3.png" mode="aspectFit"></image>
		 			    <text>冥想</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>回合结束时，若白狼未进入回气状态，则进入冥想状态。冥想状态下提升20%暴击伤害直至下一回合结束。并制造一个不可被攻击的影分身，影分身有30%概率会为白狼抵挡全部伤害。</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/bailang4.png" mode="aspectFit"></image>
		 				<text>无我</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>进入无我之境，射出注入全部妖力的箭矢，使此次攻击提升30%暴击，对敌方目标造成攻击237%伤害。并击退目标20%行动条的效果；若在冥想状态下则击退目标50%行动条；若将目标击退至行动条末端，则造成1.5倍伤害，之后进入回气状态1回合，自身速度降低40%。</text>
						<text>Lv.2伤害增加至249%</text>
						<text>Lv.3伤害增加至261%</text> 
						<text>Lv.4伤害增加至273%</text>
					    <text>Lv.5伤害增加至285%</text>  
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