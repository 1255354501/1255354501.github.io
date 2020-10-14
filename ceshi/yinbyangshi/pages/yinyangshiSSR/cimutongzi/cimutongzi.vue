<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/cimutongzi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">茨木童子</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>六道众生，万物生灵都不过是这三千世界中的沧海一粟，妖怪亦然。</text><text>一旦松懈，就会被其他的种族欺凌，玩弄，甚至屠戮。</text><text>所以他们必须有一个领导者来指导他们。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>他，就像一片混沌中的明亮灯塔。</text><text>他实力超群，头脑聪明、还冷静谨慎得令人可怕！</text><text>这就是我的挚友，酒吞童子！君临妖族巅峰的男人！</text><text>但，令人恼火的是，如今的他却被两样东西冲昏了头脑。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>名叫红叶的女鬼，就是因为那女人，酒吞童子才会~~！</text><text>我要快点帮助他找回自己~~从哪着手好呢？</text><text>对了，晴明！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/cimutongzi1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/cimutongzi2.png" mode="aspectFit"></image>
		 				<text>基本技能：黑焰</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>以鬼气凝成黑色火焰攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/cimutongzi3.png" mode="aspectFit"></image>
		 			    <text>迁怒</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>攻击时，若击杀非召唤物的敌人，对敌方全体造成等同过量伤害50%伤害并消耗所有的怒火；未造成击杀，则获得1层怒火，上限3层。</text>
		 				
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/cimutongzi4.png" mode="aspectFit"></image>
		 				<text>地狱之手</text>
		 				
		 			</view> 
		 			<view class="jinengjs">
						<text>以鬼之力从地狱唤出自己的手腕扑击敌方目标，造成攻击263%伤害。</text>
						<text>Lv.2伤害增加至276%</text>
						<text>Lv.3伤害增加至289%</text> 
						<text>Lv.4伤害增加至302%</text>
					    <text>Lv.5伤害增加至315%</text>  
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