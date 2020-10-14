<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/yaodaojigua0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">妖刀姬呱</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>我最怕黑了，只要夜幕一降临，我就总觉得黑暗里会藏着恐怖的妖怪。</text><text>如果晚上可以乖乖待在家中就好了，可是总是要跟着胧车，虽然京都的夜里有很多灯火，可是我还是害怕那些黑暗的角落里有什么妖怪~~</text><text>花鸟卷呱总笑我，说有什么可怕呢，我们自己也是妖怪啊。</text><text>说得很有道理，可是、我还是会怕黑啊。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>呜呜呜，今天好丢脸，花鸟卷呱故意在胧车上吓我，我吓得把她的画卷踩坏了，人家不是故意的啊！</text><text>可是、可是一目连呱却很认真的安慰她，还对我说我以后不要这么大惊小怪，呜呜呜~~明明是花鸟卷呱她先吓我的啊！</text><text>好难过啊，如果继续这样胆小下去，一目连呱会不会再也不肯对我温柔了呢~~不行，不可以这样啊！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>铁鼠说：如果客人中途退出的话，小生是没有办法返回门票钱的！有点心疼，这是我攒了三个月的零花钱呢，不过，如果能让我不这么胆小的话，这个门票钱或许真的是物有所值的吧。</text><text>可是，试胆大会真的好可怕啊~~到处都阴森森的~~好像到处都藏着妖怪一样~~</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/yaodaojigua1.png" mode="aspectFit"></image></view>
						 <view class="jx"><text>基本技能：</text></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/yaodaojigua2.png" mode="aspectFit"></image>
		 				<text>基本技能：使用太刀攻击敌方目标，造成攻击100%伤害。</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至120%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yinyangshiguatai/yaodaojigua3.png" mode="aspectFit"></image>
						<text>呱·杀戮</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>攻击敌方目标6次，每次造成攻击10%伤害。</text>
		 				<text>Lv.2伤害增加至11%</text>
		 				<text>Lv.3伤害增加至12%</text>
		 				<text>Lv.4伤害增加至13%</text>
		 				<text>Lv.5伤害增加至14%</text> 
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