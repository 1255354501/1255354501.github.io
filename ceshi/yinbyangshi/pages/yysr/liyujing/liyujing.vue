<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/liyujing0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">鲤鱼精</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>鲤鱼精：吹~泡泡~啵！</text><text>河童：你~~你好！</text><text>鲤鱼精：啊~是河童先生呀！有什么事情吗？</text><text>河童：啊，那个~~没、没什么。只是看到你了，就打个招~~</text><text>鲤鱼精：啊~河童先生头上的盘子，可以让我摸一摸吗？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>鲤鱼精：但是~~看起来很有趣的样子~~</text><text>河童：好吧~~啊啊！请住手！</text><text>鲤鱼精：河童先生真的很有趣呢！</text><text>河童：对了，我可能要离开这里一段时间~~</text><text>鲤鱼精：诶？为什么呀？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>鲤鱼精：原来是这样的呀！今天能碰巧遇到河童先生，真是太幸运了！</text><text>河童：啊~~是、是的呢！</text><text>鲤鱼精：一定是这个贝壳带给我的好运，听说外面可~~危险了！河童先生，这个贝壳送给你吧！河童先生，再见~~~</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/liyujing1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/liyujing2.png" mode="aspectFit"></image>
		 				<text>基本技能：尾鞭</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>挥起鱼尾攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3驱散1个增益状态</text>
		 				<text>Lv.4伤害增加至110%</text>
		 				<text>Lv.5伤害增加至115%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/liyujing3.png" mode="aspectFit"></image>
		 			    <text>泡泡之盾</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>将泡泡化为能量守护，使友方全体获得护盾，能吸收12％生命上限的伤害，持续2回合。</text>
		 				<text>Lv.2护盾吸收量增至14%</text>
		 				<text>Lv.3护盾吸收量增至16%</text>
		 				<text>Lv.4护盾吸收量增至18%</text>
		 				<text>Lv.5护盾存在时获得50%间接伤害减免</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/liyujing4.png" mode="aspectFit"></image>
		 				<text>泡泡之牢</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>将泡泡化作牢笼，有100%基础概率将敌方目标禁锢，禁锢能吸收攻击150%伤害，并降低20%暴击，持续2回合。</text>
						<view class="jinengjs">
							<text>Lv.2对被禁锢的敌方，在回合后造成攻击50%伤害</text>
							<text>Lv.3禁锢吸收量增至165%</text>
							<text>Lv.4造成伤害增加至63%</text>
							<text>Lv.5禁锢吸收量增至180%</text> 
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