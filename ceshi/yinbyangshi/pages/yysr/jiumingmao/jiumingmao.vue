<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/jiumingmao0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">九命猫</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>九命猫：没想到英明神勇帅气完美的本喵居然在这森林里迷路了！啊啊啊啊喵！本喵是绝对不会承认的！诶~~那边的！等等呀喵！</text><text>九命猫：咳咳~~这位先生，请问，这里要怎么出去呀喵？</text><text>铁鼠：~~</text><text>九命猫：喂！！你这耗子！问你话呢喵！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>九命猫：喵！你看！本喵像是！有钱的！喵！吗！</text><text>铁鼠：咳咳！！！喘~~喘不过气来了！！我带路！我带路！</text><text>九命猫：最开始这样不就好了，喵喵。</text><text>铁鼠：跟你这种暴力狂没法交流。</text><text>九命猫：嗯？</text><text>铁鼠：没~~没啥！</text><text>九命猫：诶，你那个轮子好像很好玩呀喵。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>九命猫：给本喵玩玩！</text><text>铁鼠：不行~~</text><text>九命猫：嗯？</text><text>铁鼠：请~~请。</text><text>九命猫：喵哈哈哈哈哈哈果然很好玩！这个轮子以后就归我了！！！就叫猫车吧！！！</text><text>铁鼠：等等~~那对我来说很重要！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/jiumingmao1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/jiumingmao2.png" mode="aspectFit"></image>
		 				<text>基本技能：猫爪</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>伸出利爪狠抓敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/jiumingmao3.png" mode="aspectFit"></image>
		 			    <text>报复</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>张牙舞爪，仿佛有发泄不完的怨恨，攻击敌方目标3次，每次造成攻击73%伤害。</text>
		 				<text>Lv.2伤害增加至77%</text>
		 				<text>Lv.3伤害增加至81%</text>
		 				<text>Lv.4伤害增加至85%</text>
		 				<text>Lv.5伤害增加至89%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/jiumingmao4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：九命</text>
		 			</view> 
					<view class="jinengjs">
						<text>暴击时，获得1层猫妖·九命，上限4层。阵亡时，若拥有4层猫妖·九命，则会立即复活并恢复生命上限20%的生命，并对随机敌方目标施放『报复』。</text> 
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