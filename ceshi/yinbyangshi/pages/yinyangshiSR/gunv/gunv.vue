<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/gunv0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">骨女</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我不可以死去。</text><text>见到夫君的那一刻，我是最开心的时候，却也是最悲伤的时候。</text><text>夫君离家远赴沙场，他说战乱不息不得归；他说他会给我写信；他说，如果战死沙场，他会化为白鸟，在红色的朝霞中飞到我的窗台，送上他最后的家书。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我没有办法再等下去了，我决定动身去找他。</text><text>听说他已成了将军，但是我想不起来是谁告诉我的。</text><text>我什么都想不起来了，我打听到了他所在的营地，我只记得打开营帐的那一刻，他在床上睡得安详，一旁的盔甲威风凛凛，被擦得锃亮。他怀里，有另一名女子。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>但是我那么那么地想他，于是我附了那女子的身，与他抵死缠绵。</text><text>天要亮了，我想不起来路上遇到的土匪，想不起来我被玷污的惨痛，我只要记得，我要找到我的夫君。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/gunv1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/gunv2.png" mode="aspectFit"></image>
		 				<text>基本技能：骨刃</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>以饱含怨恨的骨刃，刺向敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/gunv3.png" mode="aspectFit"></image>
		 			    <text>怨生</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>受到攻击时，获得1层怨气，上限6层。阵亡时，若拥有4层以上怨气，则消耗所有层数，立即复活并治疗生命上限20%的生命。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/gunv4.png" mode="aspectFit"></image>
		 				<text>一步一息</text>
		 				
		 			</view> 
		 			<view class="jinengjs">
						<text>疾闪至敌人身后，对敌方目标攻击3次，每次造成攻击78%伤害并无视40%防御。</text>
						<text>Lv.2伤害增加至82%</text>
						<text>Lv.3伤害增加至86%</text> 
						<text>Lv.4伤害增加至90%</text>
					    <text>Lv.5伤害增加至94%</text>  
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