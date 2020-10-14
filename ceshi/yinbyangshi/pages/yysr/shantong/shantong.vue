<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shantong0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">山童</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>绿子姐姐好几天没来找我了，我好想念她做的饭团啊。难道，我惹她生气了？嗯~~明天还是去找她看看吧！</text><text>这群可恶的家伙！居然掳走了绿子姐姐！！！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>这帮胆小鬼！居然一直躲在深水里，让我无法接近！！气死我了！！可恶！！！</text><text>哼，终于让我发现一个落单的家伙！以为蹲在近岸的水域里，用水草或者荷叶遮掩，就能遮住他那大脑门了吗？哼！自作聪明！只要他再靠近岸边一点！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>今天，那家伙终于走到岸上来了。</text><text>自寻死路！</text><text>他躲进了草丛~~是要偷窥人类的晚饭吗？</text><text>以为这样就不会被发现？</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shantong1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shantong2.png" mode="aspectFit"></image>
		 				<text>基本技能：碎岩</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>一把举起沉重的石锤，高高跃起然后重重地砸向敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至120%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shantong3.png" mode="aspectFit"></image>
		 			    <text>怪力</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>攻击时，8%基础概率使目标眩晕，持续1回合。</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/shantong4.png" mode="aspectFit"></image>
						<text>崩山</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>抄起石锤跳入敌阵，使出怪力猛轰敌方全体3次，每次造成攻击35%伤害。</text>
						<text>Lv.2伤害增加至37%</text>
						<text>Lv.3伤害增加至39%</text>
						<text>Lv.4伤害增加至41%</text>
		 				<text>Lv.5伤害增加至43%</text> 
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