<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/daomuxiaogui0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">盗墓小鬼</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>盗墓是门高深的玄学，不沾为妙。若你是想听那墓中的有趣事情，倒是可以与你说一说。</text><text>你是想听听迂腐守卫的故事，还是让我讲讲跳跳兄妹的来历？</text><text>我的故事？</text><text>嗯~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>自我记事起，我就在墓里。</text><text>大概是哪里来的盗墓者，死在了墓穴中，怨气和执念经年累月，便聚成了我。</text><text>一开始，我也不知道自己该干什么~~我能在各个墓穴中来去自如，但盗取再多的珍宝，也于我无用。</text><text>直到，我开始对墓里的故事产生兴趣。</text><text>这可比什么黄金宝石有趣多了。</text><text>好奇心驱使着我，走遍了每一个墓穴。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>你看，东北那座大墓里其实空空如也；南向的那座古墓里合葬了两个姑娘；西面一些的那座里，陪葬的可全都是年轻男孩。</text><text>每一个墓穴，都那么有意思！</text><text>现在，我想试着到远一些的地方去。</text><text>去看看更多不同墓穴，然后将它们的故事都收录到我的笔记里。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/daomuxiaogui1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/daomuxiaogui2.png" mode="aspectFit"></image>
		 				<text>基本技能：不祥黑火</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>飘过去使用黑火攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
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