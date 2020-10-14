<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/hetong0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">河童</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>跟我的兄弟姐妹比起来，我毫无疑问是个另类。</text><text>他们都把人类当做没有生命的物品。</text><text>他们会把在河边洗衣服的人类女子抓进水里，娶作新娘，这在他们眼里，似乎是天经地义的事情。</text><text>不过~~这么做真的没有错吗？新娘们明明那么害怕，流下的眼泪让河水都变得苦涩~~</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>但是，我不能认同这一点，我要亲自找到答案。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>有许多许多人靠近河流，但却没有人伤害我，他们只是嬉戏打闹。或是安静地，与身边的另一半看着夕阳发呆。不远的民居里，归家的男子带着一身疲倦推开家门，在看到桌上的热腾腾的饭菜时，他脸上的倦容却一扫而光。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前后：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/hetong1.png" mode="aspectFit"></image></view>
		 			</view>
		 			 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/hetong2.png" mode="aspectFit"></image>
		 				<text>基本技能：水流弹</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>将水流压缩成水弹攻击敌方目标，造成攻击75%伤害。</text>
		 				<text>Lv.2伤害增加至79%</text>
		 				<text>Lv.3伤害增加至83%</text>
		 				<text>Lv.4伤害增加至87%</text>
		 				<text>Lv.5伤害增加至91%</text>
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/hetong3.png" mode="aspectFit"></image>
		 			    <text>清流</text>
		 			</view> 
		 			<view class="jinengjs">
		 				<text>清流的滋润使妖力提升。回合结束时，获得1层滋润，上限4层。</text>
		 				<text>Lv.2滋润提升攻击效果增至20%</text>
		 				<text>Lv.3滋润提升攻击效果增至25%</text>
		 				<text>Lv.4滋润提升攻击效果增至30%</text> 
		 			</view> 
		 		</view>
		 		<view class="jineng">
		 			<view class="jinengpic">
		 				<image src="http://s1.catelyn.info/zjxcx/yys/yys/yysr/hetong4.png" mode="aspectFit"></image>
						<text>大河之歌</text> 
		 			</view> 
		 			<view class="jinengjs">
						<text>以大河之水形成的巨大水弹攻击敌方全体，造成攻击96%伤害。</text>
		 				<text>Lv.2伤害增加至100%</text>
						<text>Lv.3伤害增加至104%</text>
						<text>Lv.4伤害增加至108%</text>
						<text>Lv.5伤害增加至112%</text>
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