<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/huayao0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">花妖</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我的名字是桃花，是桃花的妖怪。</text><text>当我还是桃花树的时候，就经常被认成樱花。</text><text>所以在化成人形的时候，特地变成了和樱完全不一样的样子。</text><text>我不是讨厌樱哦！可是她居然爱上人类，她还是早点放弃比较好！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>樱她最后，也一定会因为这个受到伤害的。</text><text>~~诶？如果妖怪能和人类结成夫妇﹂的话？</text><text>我又不是什么不讲理的恶鬼，如果真的出现那种奇迹的话，我也会好好地、真心真意地祝福她。</text><text>但这只是妖怪能和人类结成夫妇的假设而已！</text><text>不过如果樱是真的想要和那个人在一起的话，我也不得不认真起来了。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>我必须看好她，帮她善后。因为她真的好让人放心不下啊！</text><text>~~嗯，我变成什么样都可以，没关系的。</text><text>而且以后不跟樱在一起，我就再也不用担心被认错了，整个人都轻松起来了！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/huayao1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/huayao2.png" mode="aspectFit"></image>
		 				<text>基本技能：花舞</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>舞动的花瓣结成花之印攻击敌方目标，造成攻击100%伤害</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/huayao3.png" mode="aspectFit"></image>
		 			    <text>花之馨息</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>为友方目标治疗生命上限20%的生命，暴击时，对其他友方治疗等同本次治疗量30%的生命。</text>
		 				<text>Lv.2治疗增至21%</text>
		 				<text>Lv.3治疗增至22%</text>
		 				<text>Lv.4治疗增至23%</text>
		 				<text>Lv.5治疗增至25%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/huayao4.png" mode="aspectFit"></image>
		 				<text>桃华灼灼</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>复活阵亡的友方目标，并为其治疗生命上限20%的生命。</text> 
		 				<text>Lv.2治疗增至21%</text>
						<text>Lv.3治疗增至22%</text>
						<text>Lv.4治疗增至23%</text>
						<text>Lv.5治疗增至25%</text> 
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