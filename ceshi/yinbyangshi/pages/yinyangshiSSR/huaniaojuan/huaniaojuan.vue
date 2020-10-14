<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huaniaojuan0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">花鸟卷</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>画中少女，青丝如瀑，花鸟环绕，点点樱唇，盈盈眼波，似有邀君入画之意。</text><text>久视之，不觉心神恍惚，身陷云雾，转瞬之间，已至画中。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>夹岸而行，少女声如铃，放歌逐溪水。</text><text>莺莺燕燕相闻，花花草草相生。</text><text>顾盼而含羞，笑而不语。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>与画中人对望之，只见少女笑语嫣然，眉眼脉脉，宛如初。</text><text>时人有云，幻由心生。喜静者便见寒潭幽竹；心怀惧者，便生恶鬼罗刹。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huaniaojuan1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huaniaojuan2.png" mode="aspectFit"></image>
		 				<text>基本技能：归鸟</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>使唤身旁的所有飞鸟攻击敌方目标，根据拥有的飞鸟数量来决定攻击次数，每次造成攻击40%伤害，并有50%概率为生命比例最低的友方治疗10%生命上限的生命。回合开始或没有飞鸟时，补充1只飞鸟，上限2只。进行反击将消耗1只飞鸟。</text>
		 				<text>Lv.2治疗概率增至60%</text>
		 				<text>Lv.3治疗概率增至70%</text>
		 				<text>Lv.4治疗概率增至80%</text>
		 				<text>Lv.5飞鸟上限增至3只</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSSR/huaniaojuan3.png" mode="aspectFit"></image>
		 			    <text>花鸟相闻</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>为友方全体治疗生命上限8%的生命，并使之获得芬芳，持续2回合，依序治疗生命上限7%、6%的生命。</text>
		 				<text>Lv.2治疗增至10%</text>
		 				<text>Lv.3芬芳依序治疗增至9%、8%</text>
		 				<text>Lv.4治疗增至12%</text>
		 				<text>Lv.5芬芳依序治疗增至11%、10%</text> 
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