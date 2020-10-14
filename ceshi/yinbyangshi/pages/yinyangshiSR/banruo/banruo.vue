<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/banruo0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">般若</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>告诉你也可以哦，我以前有一个好朋友，是人类。</text><text>那时的我可没有现在这么可爱，过去的我长得就和这副面具一样丑陋。所以无论我多么努力，大家仍然很讨厌我。</text><text>但是他不一样，他对我说，最重要的不是外貌，而是心。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>所以我对他也很好，无论他想要什么，我都会想办法满足。</text><text>我终于有了这样的朋友，最好的、唯一的朋友。</text><text>可是几年之后，虽然我还和以前一样，他却变成了一个大人。</text><text>他有了自己的妻子和孩子，变得忙碌起来，再也没有时间陪我玩了。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>后来我忍不住找到他的家，站在门前犹豫着不敢进去，却听到他对自己的妻子说，那个恶心的丑八怪，终于不来了，都缠了我多少年了。</text><text>你能明白吗？我以为他把我当做朋友，但他不过是同情我而已。</text><text>他在心底也很讨厌我，还装成对我很温柔的样子，骗了我。</text><text>人类都讨厌丑陋的妖怪。</text><text>可是，最丑陋的东西，就是人类的心。</text><text>我一次又一次剥下自己的脸，将它们制成面具。在无数次血肉模糊之后，我慢慢变成了可爱漂亮的模样。</text><text>~~哼哼，这一次轮到我来报复恶心又丑陋的人类了！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/banruo1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/banruo2.png" mode="aspectFit"></image>
		 				<text>基本技能：鬼之假面</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>甩出鬼面具攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%，鬼之爪伤害增加至94.5%</text>
		 				<text>Lv.3伤害增加至110%，鬼之爪伤害增加至99%</text>
		 				<text>Lv.4伤害增加至115%，鬼之爪伤害增加至103.5%</text>
		 				<text>Lv.5伤害增加至120%，鬼之爪伤害增加至108%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/banruo3.png" mode="aspectFit"></image>
		 			    <text>嫉恨之心</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>攻击时，有40%基础概率为目标附加鬼面，持续2回合。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/banruo4.png" mode="aspectFit"></image>
		 				<text>鬼袭</text>
		 				
		 			</view> 
		 			<view class="jinengjs">
						<text>巨大的鬼面袭向敌方全体，造成攻击110%伤害，并使自身狂暴，替换普攻为鬼之爪，持续2回合。</text>
						<text>Lv.2伤害增加至115%</text>
						<text>Lv.3伤害增加至120%</text> 
						<text>Lv.4伤害增加至125%</text>
					    <text>Lv.5伤害增加至130%</text>  
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