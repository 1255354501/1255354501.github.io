<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/datiangougua0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">大天狗呱</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>要时刻的保持自己的帅气，也是一件很困难的事情啊。每时每刻都要关注那么多东西，衣饰的清洁，头发的造型，都需要一丝不苟。</text><text>这也是没办法的事，谁让我有偶像包袱呢。要</text><text>知道从前的我，只是田野之中样貌平平的呱，从来没有其他的呱愿意多看我一眼，直到玉藻前大人把我变成了大天狗的模样，我才能有这般风姿，又怎么能不爱惜这幅姿态呢？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>真是不辜负我一片苦心，让我找到了一个好方子！</text><text>辉夜姬呱虽然平时那么顽皮，但是听到我想要呵护皮肤的苦恼后，居然非常认真的给我推荐了一个秘方！</text><text>嗯，姑且就信这小姑娘一次。</text><text>只要把池塘底的细腻淤泥涂抹在脸上，持之以恒就能获得完美的皮肤~~听起来真是太棒了。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>可恶！我这般英俊又聪慧的男子，怎么会如此轻信了一个小姑娘的恶作剧！</text><text>什么淤泥美容，我早就觉得不对劲了！脸上这么多的疹子，让我怎么在其他呱面前抬得起头来！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/datiangougua1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>该式神无法觉醒</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/datiangougua2.png" mode="aspectFit"></image>
		 				<text>基本技能：呱·风袭</text>
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
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/datiangougua3.png" mode="aspectFit"></image>
		 			    <text>呱·羽刃暴风</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>召唤飓风形成大型的羽刃旋涡攻击敌方全体4次，每次造成攻击8%伤害。</text>
		 				<text>Lv.2伤害增加至9%</text>
		 				<text>Lv.3伤害增加至10%</text>
		 				<text>Lv.4伤害增加至11%</text>
		 				<text>Lv.5伤害增加至12%</text>
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