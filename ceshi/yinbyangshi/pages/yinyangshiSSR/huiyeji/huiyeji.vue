<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huiyeji0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">辉夜姬</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我被困在这一小节竹子里，在这片竹林里，一直、一直沉睡着。</text><text>有一天，一阵突兀的笛声将我唤醒。</text><text>我从梦中醒来，听着这陌生而清冷的声音，心里却变得温暖了起来。</text><text>原来这竹林中，除了我，还有其他人在啊~~从那天起，我不再是独自一人，还有那笛声一直陪伴着我。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>想见见那个吹笛子的人啊~~那么美的笛声，一定是个很温柔的人吧。</text><text>不过到底是什么人，会一直待在竹林里呢？</text><text>难道竹林中有他的朋友吗？</text><text>还是说，他和我一样，也被困在了这竹林中呢？</text><text>我有很多很多问题想问他，有很多很多话想和他说。</text><text>终于，我从竹子里被解救出来了。</text><text>我期待地看着四周，竹林中却没有任何人的身影。</text><text>但是我能感觉到，他一定就在这竹林内。</text><text>那熟悉的、温柔的氛围，他就在我的身边。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>之后啊，我一直，一直被关在房间里。</text><text>虽然大家都对我很温柔，但我还是会想念那片竹林,和竹林中那吹笛子的人。</text><text>可是我到最后，都不知道他到底是谁~~</text><text>真想见到他，对他说一句，谢谢。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huiyeji1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huiyeji2.png" mode="aspectFit"></image>
		 				<text>基本技能：蓬莱玉枝</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>使用蓬莱玉枝召唤灵气攻击敌方目标，造成攻击100%伤害并有10%概率削减其1点鬼火。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huiyeji3.png" mode="aspectFit"></image>
		 			    <text>火鼠裘</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>唯一效果。受到攻击时，有30%概率获得1点鬼火。若拥有『龙首之玉』的幻境，则任一友方受到攻击也会触发。受到群体攻击、多段攻击不多次触发。</text>
		 				<text>Lv.2触发概率增至35%</text>
		 				<text>Lv.3触发概率增至40%</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huiyeji4.png" mode="aspectFit"></image>
		 				<text>龙首之玉</text>
		 				
		 			</view> 
		 			<view class="jinengjs">
						<text>创造存在2回合的幻境，使友方全体提升15%防御、10%效果抵抗，且在回合开始前有67%概率获得1点鬼火。</text>
						<text>Lv.2提升防御效果增至20%</text>
					    <text>Lv.3提升效果抵抗效果增至15%</text> 
		 				<text>Lv.4提升防御效果增至25%</text>
						<text>Lv.5提升效果抵抗效果增至20%</text> 
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