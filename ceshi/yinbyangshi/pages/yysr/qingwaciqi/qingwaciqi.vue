<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/qingwaciqi0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">青蛙瓷器</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>呱哈哈，又是老朽获胜了呱！快把你重要的东西给老朽呱！</text><text>手臂啊腿啊什么都行呱，就算是灵魂也能下注呱。这就是我们妖怪间的规矩呱！</text><text>~~什么？你说老朽只赢不输？所以这局不公平？</text><text>这笑话老朽可笑不出来呱。你什么觉悟都没有，就来和老朽进行一决胜负呱？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>人类下的注、玩的局，在老朽看来，只不过是游戏呱。</text><text>只要多练就能赢，运气根本不重要。而且下注只有金钱而已呱。</text><text>当然也有一些混蛋把自己的人生都搭上了，不过那种家伙也很少见呱。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>而是那种将身心投入，把灵魂都押上，扣人心弦的大场子呱！</text><text>什么？你说叫老朽去找其他人？</text><text>别说傻话了呱！</text><text>只有像这样不停和对手切磋，才能遇到的原本遇不到的对手呱。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/qingwaciqi1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/qingwaciqi2.png" mode="aspectFit"></image>
		 				<text>基本技能：出千</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>突然变出麻将砸向敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/qingwaciqi3.png" mode="aspectFit"></image>
		 			    <text>岭上开花</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>对敌方目标投出骰子，根据骰子点数来决定攻击次数，每次造成攻击49%伤害。</text>
		 				<text>Lv.2伤害增加至52%</text>
		 				<text>Lv.3伤害增加至54%</text>
		 				<text>Lv.4伤害增加至57%</text>
		 				<text>Lv.5伤害增加至59%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/qingwaciqi4.png" mode="aspectFit"></image>
		 				<text>觉醒技能：</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>转运</text>
						<view class="jinengjs">
							<text>阵亡时，对每个敌方免消耗施放1次『岭上开花』，若有至少两个骰子同点，则立即复活，并使自身恢复等同生命上限10%x最小同点数。冷却时间为最大同点数。</text>
						</view> 
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