<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tiaotiaomeimei0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">跳跳妹妹</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>妖狐：美丽的少女啊，我感觉你是我命中注定的爱人！让我带你去体验这世间最美妙的甜蜜吧！</text><text>跳跳妹妹：叔叔要带我去吃苹果糖吗~？</text><text>妖狐：叔~~叔叔！？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>妖狐：美丽的少女啊，至少叫我哥哥好吗？另外~~请不要在揪小生尾巴上的毛了~~</text><text>跳跳妹妹：哇哇！抱住！呜哇～～真的好棒呀！软软的～软软的～～～</text><text>妖狐：少女如此热情，真是连小生我都要~~脸红了~~咳咳，来吧，美丽的少女哟~~</text><text>跳跳哥哥：色狐狸！！！！你要对我妹妹做什么！！！看招！！！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>跳跳哥哥：呸！</text><text>跳跳妹妹：哥哥，叔叔的尾巴手感很好的！不信你摸摸~给！</text><text>跳跳哥哥：切~~诶，真的诶！比番茄手感好多了！</text><text>妖狐：你~~</text><text>跳跳哥哥：这尾巴手感比番茄好多了！你摸摸~~</text><text>跳跳妹妹：这尾巴手感比番茄好多了！你摸摸~~</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tiaotiaomeimei1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tiaotiaomeimei2.png" mode="aspectFit"></image>
		 				<text>基本技能：坏人走开</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>往前冲，甩手抽打敌方目标2次，每次造成攻击50%伤害。</text>
		 				<text>Lv.2伤害增加至53%</text>
		 				<text>Lv.3伤害增加至55%</text>
		 				<text>Lv.4伤害增加至58%</text>
		 				<text>Lv.5伤害增加至63%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tiaotiaomeimei3.png" mode="aspectFit"></image>
		 			    <text>不玩了啦</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>回合结束时，有30%概率使友方全体获得萝莉正义，持续2回合。跳跳妹妹死亡时，如果番茄在场，会马上复活。每复活1次，会使下次复活的冷却时间增加1回合。</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tiaotiaomeimei4.png" mode="aspectFit"></image>
		 				<text>汪汪出击</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>召唤番茄，番茄可使用『愤怒』；召唤时立即使用『愤怒』攻击生命比例最低的敌方。番茄继承跳跳妹妹60%生命值，50%攻击和100%速度。当番茄在场时，该技能替换成『跟我学』。</text>
						<text>Lv.2继承攻击增至80%</text>
						<text>Lv.3番茄对敌方造成伤害时，驱散其随机1个增益状态</text>
						<text>Lv.4继承生命值增至100%</text>
		 				<text>Lv.5跳跳妹妹攻击时，将邀战番茄</text> 
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