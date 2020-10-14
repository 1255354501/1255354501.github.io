<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/datiangou0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">大天狗</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我就是正义的化身。</text><text>手刃过无数恶鬼，还曾与同样出身高贵的人类皇族武士并肩作战过。</text><text>与怪物搏斗之人，必须要时刻提醒自己不要成为怪物。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>为此，我需要力量，更多的力量！</text><text>黑夜山的骤变，引诱着我那颗渴望变强的心，我心中不断地骚动着。</text><text>那个男人，他一定在那个地方一边居高临下地笑着，一边等着我去见他吧。</text><text>成为我的仆人，为我效忠吧！</text><text>我知道你想要什么，我会给你比你想要的还多的力量！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/datiangou1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/datiangou2.png" mode="aspectFit"></image>
		 				<text>基本技能：风袭</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>聚风形成旋转风刃攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/datiangou3.png" mode="aspectFit"></image>
		 			    <text>钢铁之羽</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>战斗开始及回合结束时，获得庇护。回合开始时，失去庇护。造成伤害时，有50%概率获得雄姿英发，上限10层，持续至回目结束。</text>
		 				<text>Lv.2雄姿英发上限30层</text>
		 				<text>Lv.3雄姿英发上限50层</text>
		 				<text>Lv.4雄姿英发上限80层</text>
		 				<text>Lv.5庇护抵挡控制效果后，增加自身50%行动条。</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/datiangou4.png" mode="aspectFit"></image>
		 				<text>羽刃暴风</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>召唤飓风形成大型的羽刃旋涡攻击敌方全体4次，每次造成攻击37%伤害。</text> 
		 				<text>Lv.2伤害增加至39%</text>
						<text>Lv.3伤害增加至41%</text>
						<text>Lv.4伤害增加至43%</text>
						<text>Lv.5伤害增加至45%</text> 
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