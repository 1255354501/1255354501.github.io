<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tieshu0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">铁鼠</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>施主可曾听说过﹁家有一鼠，如有一宝﹂？</text><text>哈哈哈哈哈没错没错！在下不才，此话表彰的，正是在下！</text><text>当年那个富豪为了一己私欲，想要强夺小僧的寺庙，实在是太可恶了！幸好小僧我宁死不屈！抵死不从！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>小僧这庙里香火不多，就胜在山清水秀有灵性！那些小老鼠呀，可机灵了！合力把小僧从鬼门关里拉了回来！还帮小僧毁了建筑材料和器物，让他们动不了这小庙，总算是保住了一方烟火！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>如此度日也挺好的！下山化化缘，赚赚那些黑心商人的钱，帮一帮那些可怜的穷人，还挺自在的！</text><text>随便他们说小僧爱占小便宜，或者见钱眼开又如何？</text><text>小僧这碗中，只有为穷苦百姓才能取之不尽的钱财，听起来不错吧？</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tieshu1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tieshu2.png" mode="aspectFit"></image>
		 				<text>基本技能：钱响叮当</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>乘着金币之轮哐啷哐啷地移动到敌人面前，趁敌方目标分神之际狠敲其脑袋，造成攻击100%伤害，有50%基础概率附加钱击，持续2回合。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tieshu3.png" mode="aspectFit"></image>
		 			    <text>钱即正义</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>以妖力操纵数不尽的金币攻击敌方全体2次，每次造成攻击44%伤害并有50%基础概率附加破绽，持续2回合。</text>
		 				<text>Lv.2伤害增加至46%</text>
		 				<text>Lv.3伤害增加至48%</text>
		 				<text>Lv.4伤害增加至50%</text>
		 				<text>Lv.5伤害增加至52%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tieshu4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：横财护身</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>受到攻击时，有40%基础概率为攻击者附加收买，持续2回合。铁鼠出战并获得胜利的战斗，获得的金币奖励提升8%。</text>
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