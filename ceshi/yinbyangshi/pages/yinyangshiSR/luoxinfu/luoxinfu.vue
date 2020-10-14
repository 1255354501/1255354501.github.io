<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/luoxinfu0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">络新妇</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>领主大人贪图的，不过是我的美色而已。</text><text>这一点，我比谁都清楚。</text><text>我嫁给那庸俗的男人之日，人群中却有另一个人用热切的目光看着我。</text><text>就是这惊鸿一瞥，让我坠入了爱河。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>可是我最后才发现，原来出卖我的人，就是他。</text><text>男人就是这种东西，他们能想出来拷问人的招数，也不过如此。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>在我适应了黑暗以后，我却看到了无数双狰狞的眼睛~~密密麻麻。这黑暗的箱子里爬满了毒蜘蛛！</text><text>整整一箱都是！</text><text>他们蚕食了我的肉体~~最后和我融为了一体。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/luoxinfu1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/luoxinfu2.png" mode="aspectFit"></image>
		 				<text>基本技能：毒针</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>跳至敌方目标面前攻击，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/luoxinfu3.png" mode="aspectFit"></image>
		 			    <text>蜘蛛印记</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>造成伤害时，40%基础概率为目标附加蛛印，持续2回合。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/luoxinfu4.png" mode="aspectFit"></image>
		 			    <text>噬心食髓</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>释放蜘蛛群攻击敌方全体，造成攻击72%伤害，并有20%基础概率使其眩晕1回合。若其速度属性低于络新妇，每5点速度差，提升1%基础概率。</text>
						<text>Lv.2伤害增加至76%</text>
						<text>Lv.3伤害增加至80%</text> 
						<text>Lv.4伤害增加至83%</text>
					    <text>Lv.5对未被眩晕的目标附加噬心毒液，回合后造成攻击136%间接伤害，持续1回合。若其速度属性高于络新妇，每1点速度差，提升1%间接伤害。</text>  
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