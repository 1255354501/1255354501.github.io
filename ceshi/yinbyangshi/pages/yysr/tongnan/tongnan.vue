<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tongnan0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">童男</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>仅仅是这个月，我的妹妹都已经迷路了八次了。</text><text>这次她跑到了巫蛊师的地盘里，还好没出大事。不过也因祸得福，我们在那里遇到了晴明大人！</text><text>晴明大人不记得我了！妹妹边喊边哭，伤心得满地打滚。可是既然晴明大人那么说的话，我们除了接受，也没有别的办法了。</text><text>我的妹妹问我，要是晴明大人一直都想不起我们~~那~~那怎么办？</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>我已经记不清像这样斥责了妹妹多少次了，但其实我心里也非常不安。要是晴明大人真的一直都想不起我们，那我们要怎么办才好？</text><text>不过，晴明大人忘记过去这件事情，也许是好事也不一定。</text><text>那个没有什么表情的小姑娘，还有那个静不下来的大少爷，他们两个都让晴明大人看起来更像一个普通人了。</text><text>而且能让晴明大人露出那种表情~~他们真是了不起。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>我们为了晴明大人的幸福，努力了这么久。为了晴明大人成为更完美的人，放弃了那么多~~</text><text>可是现在，因为那几个突然出现的人，我们做的一切都白费了~~</text><text>但是只要晴明大人幸福，就足够了。</text><text>我们会一直等到晴明大人找回真正的自己的那一刻。</text><text>在此之前，只要妹妹陪在我的身边，无论多久我都能等下去。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tongnan1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tongnan2.png" mode="aspectFit"></image>
		 				<text>基本技能：羽刃</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>以妖力硬化自身的羽毛射向敌方目标，造成攻击100%伤害并有100%基础概率附加障目，持续2回合。</text>
		 				<text>Lv.2伤害增加至105%</text>
		 				<text>Lv.3伤害增加至110%</text>
		 				<text>Lv.4伤害增加至115%</text>
		 				<text>Lv.5伤害增加至125%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tongnan3.png" mode="aspectFit"></image>
		 			    <text>羽衣</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>受到伤害时，抵挡等同生命上限3%的伤害，最多抵挡该次伤害的40%。</text>
		 				<text>Lv.2抵挡比例增至3.5%</text>
		 				<text>Lv.3抵挡比例增至4%</text>
		 				<text>Lv.4抵挡比例增至4.5%</text>
		 				<text>Lv.5抵挡比例增至5%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/tongnan4.png" mode="aspectFit"></image>
		 				<text>魂之祭献</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>复活友方全体，并为其治疗生命上限30%生命，然后牺牲自身。</text> 
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