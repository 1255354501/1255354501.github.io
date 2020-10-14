<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/heitongzi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">黑童子</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>白童子~~唯独你，唯独你是我不能失去的。</text><text>当听到你说你要牺牲自己去祭祀山神的时候，我就下定了决心。</text><text>我不会让你这么做的。</text><text>我一直在想如何才能救出你，直到有天我听到爸爸说，他会给你喂一种催眠药，让你失去挣扎的能力，乖乖地被山神吞食，以防你后悔。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>不好吗，这样就不用担心轮到我们来献出自己的孩子了。</text><text>这点还是要感谢那孩子的。妈妈也跟着爸爸一起笑了起来。</text><text>不过弟弟他不是和那家伙关系不错嘛，可别掉眼泪哦？</text><text>哥哥看着我，嘲讽地说。</text><text>不对不对，姐姐打断哥哥的话，还是哭一下比较好哦？</text><text>这样才能显得你们感情比较好，不然会被人说冷血的哦。</text><text>有的时候还是要在大家表演一下才行，这样大家才会对你印象比较好哦。﹂</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>爸爸终止了对话，转过来盯着我。</text><text>他轻轻摇了摇头，仿佛对我感到十分失望。</text><text>~~真正让人觉得恶心的，才不是白童子。</text><text>祭祀的当天，我在爸爸的喝的茶里，也下了催眠药。</text><text>白童子，等等我，我会去救你的。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/heitongzi1.png" mode="aspectFit"></image></view> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/heitongzi2.png" mode="aspectFit"></image>
		 				<text>基本技能：罪罚·黑</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>攻击敌方目标，造成攻击100%伤害，该次伤害波动区间较大。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/heitongzi3.png" mode="aspectFit"></image>
		 			    <text>魂之怒火</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>受到非传导伤害时，有12%概率免消耗施放一次『连斩』。</text>
		 				<text>Lv.2触发概率增至14%</text>
		 				<text>Lv.3触发概率增至16%</text>
		 				<text>Lv.4触发概率增至18%</text>
		 				<text>Lv.5触发概率增至20%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiSR/heitongzi4.png" mode="aspectFit"></image>
		 				<text>连斩</text>
		 			</view> 
		 			<view class="jinengjs">
					    <text>旋转刀刃对敌方全体攻击1次，造成攻击83%伤害；自身生命比例每降低30%，增加1次攻击次数。</text> 
		 				<text>Lv.2伤害增加至87%</text>
						<text>Lv.3伤害增加至91%</text>
						<text>Lv.4伤害增加至95%</text>
						<text>Lv.5伤害增加至99%</text> 
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