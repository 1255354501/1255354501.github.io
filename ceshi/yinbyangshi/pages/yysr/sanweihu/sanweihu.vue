<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/sanweihu0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">三尾狐</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>人类的生命，就像樱花一样短暂。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>这棵矮矮的樱花树陪伴着我成长，也见证着我们的羁绊。</text><text>她与我以姐妹相称。</text><text>那些无忧无虑的日子，快乐得使我险些放弃了修行。我收起了尖爪与媚术，小心翼翼地维持着这份美好。</text><text>而她总是温柔地说：能多陪你一会儿，怎么都是好的。</text><text>可谁能想到，神圣的巫女大人发现我是三尾狐时，只用一句请不要再到这里来。就把我打发了。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>我心有不甘，再一次回到这里，却再也没有看到她的身影。只有一个矮矮的坟堆，在樱花树参天的树影下，仿佛在嘲笑我的天真。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/sanweihu1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/sanweihu2.png" mode="aspectFit"></image>
		 				<text>基本技能：尾袭</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>带着微笑妩媚地接近，再以迅雷不及掩耳之势用尾巴扇刮敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2有20%概率提升自身10点速度，持续1回合</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4加速概率增至30%</text>
		 				<text>Lv.5伤害增加至120%，提升速度效果增至20点</text>
						<text>Lv.6加速持续回合数增至2</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/sanweihu3.png" mode="aspectFit"></image> 
		 			    <text>诱惑</text>
		 			</view>  
		 			<view class="jinengjs"> 
					<text>造成伤害时，有50%概率附带20%吸血。</text>
		 				<text>Lv.2吸血效果增至25%</text>
		 				<text>Lv.3概率增至100%</text>
		 				<text>Lv.4吸血效果增至40%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/sanweihu4.png" mode="aspectFit"></image>
		 				<text>红颜怒发</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>攻击敌方目标3次，每次造成攻击88%伤害。</text>
						<view class="jinengjs">
							<text>Lv.2伤害增加至97%</text>
							<text>Lv.3造成伤害时有100%基础概率附加1层5级中毒，再附加1层狐袭印记，每层造成攻击10%间接伤害；中毒和狐袭印记均持续2回合</text>
							<text>Lv.4伤害增加至106%</text>
							<text>Lv.5狐袭印记的间接伤害增至20%</text>
							<text>Lv.6中毒和狐袭印记持续回合数增至3回合</text>
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