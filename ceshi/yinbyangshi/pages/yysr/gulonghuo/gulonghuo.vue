<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/gulonghuo0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">古笼火</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>哎呀哎呀，走夜路的时候还是小心一点比较好哦？</text><text>不然可是会被奇怪的妖怪缠上的。</text><text>~~你问我吗？我叫做古笼火~~什么？小孩子？我才不是走丢的小孩子呢！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>~~好了、好了！我真的不是小孩子，也没有迷路，你不要再问了，烦死啦！！</text><text>~~真是的，本来是打算恶作剧的，你这蠢样这样让我怎么出手嘛！</text><text>你要去哪里？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>跟好了，你要是跟丢了我可不会再管了。喂！你在往哪边走啊？真的打算跟丢吗！</text><text>啊啊啊啊，我为什么会遇到你这种笨蛋啊！快点、快点，还不跟着我的灯火，往这边来。</text><text>什么？你下次要带礼物给我感谢我？</text><text>不不不，请容我拒绝，我再也、再也不想看到你了！</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/gulonghuo1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/gulonghuo2.png" mode="aspectFit"></image>
		 				<text>基本技能：火风车</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>使用焰火攻击敌方目标，造成攻击100%伤害。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/gulonghuo3.png" mode="aspectFit"></image>
		 			    <text>灵运</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>受到攻击时，有20%概率回复1点鬼火。</text>
		 				<text>Lv.2触发概率增至25%</text>
		 				<text>Lv.3触发概率增至30%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/gulonghuo4.png" mode="aspectFit"></image>
						<text>恶戏之火</text>
						
		 			</view> 
		 			<view class="jinengjs">
						<text>对除自身外的任一目标，100%基础概率附加恶戏状态，持续2回合。若目标为友方则必定命中。</text>
						<view class="jinengjs">
							<text>Lv.2恶戏状态提升伤害效果，增至15%</text>
							<text>Lv.3恶戏状态提升伤害效果，增至20%</text>
							<text>Lv.4恶戏状态提升伤害效果，增至25%</text>
							<text>Lv.5恶戏状态提升伤害效果，增至30%</text> 
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