<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guijiangshi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">鬼僵尸</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>你是最完美的人偶。</text><text>那个疯狂的老人对我说了这样一句话，还给了我一颗奇妙的傀儡心。</text><text>扑通，扑通，扑通。</text><text>它在我胸前的缝隙里，鲜活地撞击着四周的零件。</text><text>这就是名为﹁生命﹂的喜悦吗？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>那个少女一动不动，全身都被绝望萦绕。</text><text>如果我把心脏给她，她会高兴起来吗？</text><text>于是我打算从体内掏出那颗奇妙的傀儡心。</text><text>蠢货！你在做什么！啊！老人突然扑过来，我感受到了他对我的恶意，和危险。</text><text>嘭他摔倒在地。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>她真好看。但是她被切开的胸腔里，少了一颗心脏。</text><text>那就给你吧，要是你能动起来，你会对我笑吗？</text><text>嗯~~我好像失去了控制身体的能力，渐渐地~~失去了知觉~~我没死~~？</text><text>哥哥~~你是我的哥哥吗？</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guijiangshi1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guijiangshi2.png" mode="aspectFit"></image>
		 				<text>基本技能：傀儡·出击</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>一边自言自语一边操纵傀儡攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guijiangshi3.png" mode="aspectFit"></image>
		 			    <text>傀儡·爆发</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>激活机关，控制傀儡连续攻击敌方目标5次，每次造成攻击55%伤害。</text>
		 				<text>Lv.2伤害增加至58%</text>
		 				<text>Lv.3伤害增加至61%</text>
		 				<text>Lv.4伤害增加至64%</text>
		 				<text>Lv.5伤害增加至67%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/guijiangshi4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：傀儡·追击</text>
		 			</view> 
		 			<view class="jinengjs"> 
		 				<text>造成伤害时，20%概率对目标造成其生命上限10%伤害，最高不超过攻击120%。</text>
						 
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