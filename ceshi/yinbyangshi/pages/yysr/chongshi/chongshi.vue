<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/chongshi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">虫师</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>夜晚的森林中，只有这条路被萤火照亮。</text><text>那只妖怪不知道是第几次经过这里了。他总是低垂着脸，似乎有许多烦恼。</text><text>为什么~~为什么那么美丽的人也会有烦恼呢？</text><text>我低头看着自己，丑陋的身躯上，满是被他人欺负的伤痕。我不敢出去，只有懦弱地躲在半透明的茧里~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>过了很久，我终于鼓足勇气，破茧而出。</text><text>那曾经给我带来许多悲伤回忆的丑陋驱壳消失了，取而代之的是，我长出了色彩斑斓的翅膀。</text><text>——我也、我也变得漂亮了！可是~~那只妖怪已经不知所踪。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>时间过了太久，有时候我也会怀疑，或许我记忆中的那只妖怪，不过是我在茧里做的一个长长的梦。</text><text>夜晚的森林中，只有这条路被萤火照亮。</text><text>或许有一天，他能够顺着这道微弱的光，回到这里。</text><text>然后我也能够，从那段长长的梦中、从那段久远的过去中走出去。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/chongshi1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/chongshi2.png" mode="aspectFit"></image>
		 				<text>基本技能：虫之舞</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>闪烁到敌方目标面前并展开攻击，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/chongshi3.png" mode="aspectFit"></image>
		 			    <text>虫之痕</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>受到伤害时，若自身未处于无法动作，则有25%概率免疫伤害，并有100%基础概率为攻击者附加虫之痕，持续2回合，单次攻击内最多触发1次。</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/chongshi4.png" mode="aspectFit"></image>
						<text>虫之护</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>为最多3个友方目标驱散1个减益状态或控制效果。然后为友方全体治疗生命上限12%的生命，受驱散的友方治疗量降低30%。</text>
						<text>Lv.2可驱散友方目标增至4个</text>
						<text>Lv.3治疗增至15%</text>
						<text>Lv.4受驱散的友方治疗量降低降至20%</text>
		 				<text>Lv.5治疗增至18%</text> 
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