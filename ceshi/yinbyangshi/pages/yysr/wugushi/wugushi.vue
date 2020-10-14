<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/wugushi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">巫蛊师</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>嘻嘻嘻~~小家伙们，开饭啦！</text><text>对对，多吃点！多吃点！从里到外，直到骨头里全都要啃干净哦。嘻嘻，你们这种贪婪的吃相，真是太可爱了啊啊。</text><text>嘻嘻，不用吃得这么着急哦，老朽这里还有很多吃的呢。</text><text>真是的，你们这群贪吃鬼，要吃多少才会满足啊。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>对了，那个女孩~~好像是叫﹁蝴蝶精吧？</text><text>如果老朽能饲养她，就像饲养你们一样~~那样的话，是多么美妙啊！</text><text>究竟做什么，她才会高兴呢？</text><text>嗯——？你们只要有东西吃的话就高兴。</text><text>老朽一把妖怪的残骸扔进来，你们一瞬间就能得渣也不剩。</text><text>但是蝴蝶精和你们可不一样，光靠诱饵可是没有办法将她钓到手的~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>嗯？啊啊对了，蝴蝶精怜爱地抚摸你们的神情，简直和老朽一模一样。你们也想和她更亲密地玩耍吧？</text><text>啊啊、蝴蝶精，一想到那个女孩，老朽就要激动得浑身颤抖起来了~~</text><text>真想有一天能像你们这样，把那女孩也饲养起来呀！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/wugushi1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/wugushi2.png" mode="aspectFit"></image>
		 				<text>基本技能：施蛊</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>向敌方目标抛出蛊虫，造成攻击100%伤害，对带有蛊蚀的敌方，伤害提升20%。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至120%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/wugushi3.png" mode="aspectFit"></image>
		 			    <text>迷魂蛊</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>带有蛊蚀的敌方阵亡时，成为受控制的傀儡一同作战。傀儡继承巫蛊师20%生命值，30%攻击。</text>
		 				<text>Lv.2继承生命值增至25%</text>
		 				<text>Lv.3继承攻击增至40%</text>
		 				<text>Lv.4继承生命值增至30%</text>
		 				<text>Lv.5继承攻击增至50%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/wugushi4.png" mode="aspectFit"></image>
		 				<text>魔蛊毒爆</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>扔蛊攻击敌方全体，造成攻击109%伤害并有40%基础概率附加蛊蚀，持续3回合。</text>
						<view class="jinengjs">
							<text>Lv.2伤害增加至115%</text>
							<text>Lv.3伤害增加至120%</text>
							<text>Lv.4伤害增加至125%</text>
							<text>Lv.5伤害增加至131%</text> 
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