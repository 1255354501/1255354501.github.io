<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/huibishou0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">惠比寿</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>为什么富人已经有了很多钱财，还想要更多呢。</text><text>人啊，应该懂得各自的本分。﹂</text><text>我听了你刚才的自言自语很钦佩。正好，我这里有很多金币，可以全部都送给你。</text><text>不过，我们得有言在先。假如金币太多了从袋子里掉到地上，它们就会全部变成尘土，再也没用了。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>乞丐非常高兴，赶忙伸过袋子，并用双手撑开了袋口。</text><text>我就像往铁桶里倒水那样把金币装进袋子里。</text><text>差不多了吧？</text><text>再来点。</text><text>我是没关系啊，袋子不会破吗？</text><text>没问题，再来点。</text><text>行啦，你已经是大财主啦。</text><text>还不够！我还要！</text><text>行啦，已经撑得满满的啦。</text><text>再来最后一枚。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>就在我把最后一枚金币丢到袋中，袋子不堪重负被撑破，金币一下子全部掉到了地上，就像之前先说过的，金币全部变成了尘土。</text><text>乞丐什么也没得到，仅有的袋子也被撑破了，变得比之前更穷。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/huibishou1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/huibishou2.png" mode="aspectFit"></image>
		 				<text>基本技能：赐福</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>挥动笏板使用流光击打敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%，鲤鱼旗在场时，增加鲤鱼旗30%行动条</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/huibishou3.png" mode="aspectFit"></image>
		 			    <text>鲤鱼旗</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>召唤鲤鱼旗。友方行动前，鲤鱼旗为其治疗，治疗等同鲤鱼旗生命上限40%的生命。鲤鱼旗继承惠比寿40%生命值，140%速度，免疫减益状态和控制效果。</text>
		 				<text>Lv.2鲤鱼旗行动时，驱散2个友方带有的减益状态或控制效果</text>
		 				<text>Lv.3继承生命值增至60%</text>
		 				<text>Lv.4鲤鱼旗在场时，为友方全体增加20点速度；血量低于最大生命值30%的友方单位额外再增加30点速度</text>
		 				<text>Lv.5鲤鱼旗行动时获得1点鬼火</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/huibishou4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：转祸为福</text>
		 			</view> 
		 			<view class="jinengjs"> 
		 				<text>受到攻击时，有20%概率回复1点鬼火。</text>
						<text>Lv.2触发概率增至25%</text>
						<text>Lv.3触发概率增至30%</text> 
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