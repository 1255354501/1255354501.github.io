<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/nulianglusheng0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">奴良陆生</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我是关东大妖怪任侠一家奴良组少主、滑头鬼之孙——奴良陆生。</text><text>今晚不知道为什么，热血沸腾，难道我体内的妖怪之血~~</text><text>以小孩为食的妖怪们是很可怕的~~不过！</text><text>我绝不会让那种欺软怕硬的妖怪成为鬼界之主！</text><text>我会成为三代目，统领百鬼！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我很欣赏你。虽然你有些奇怪，但是却是个有趣的人。</text><text>我们是任侠，而不是武士。取敌人首级什么的，我毫无兴趣，我唯一想要的，是实力强劲的伙伴。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>所谓鬼界之主，必须要让人类怀有敬畏之心~~那才是真正的畏。</text><text>为了不让那些妖怪肆意妄为，我一定会振兴奴良组、重现百鬼夜行。</text><text>我会看清那些家伙是不是真的有资格成为我百鬼夜行中的一员。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/nulianglusheng1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>基本技能：</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/nulianglusheng2.png" mode="aspectFit"></image>
		 				<text>基本技能：弥弥切丸</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>拔出"退魔刀·弥弥切丸"砍击敌方目标，造成攻击80%伤害。</text>
		 				<text>Lv.2伤害增加至84%</text>
		 				<text>Lv.3伤害增加至88%</text>
		 				<text>Lv.4伤害增加至92%</text>
		 				<text>Lv.5有25%概率邀战1～2名随机友方。</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/nulianglusheng3.png" mode="aspectFit"></image>
		 			    <text>镜花水月</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>受到伤害或触发抵抗时，有35%概率获得1层畏，并反击敌方。单次攻击内最多触发1次。畏上限4层，每层持续4回合。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiliandong/nulianglusheng4.png" mode="aspectFit"></image>
						<text>百鬼夜行</text>
						
		 			</view> 
		 			<view class="jinengjs">
						<text>获得1层持续4回合的畏，并拔出"退魔刀·弥弥切丸"强力斩击敌方目标，造成攻击120%伤害。</text>
						<text>Lv.2伤害增加至126%</text>
						<text>Lv.3伤害增加至132%</text> 
						<text>Lv.4伤害增加至138%</text>
					    <text>Lv.5伤害增加至150%</text>  
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