<template>
		 	<view class="content">
		 		<view class="touxiang">
		 			<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/denglonggui0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">灯笼鬼</view>
		 		</view>
		 		<view class="text">
		 			<view class="texttitle"><text>01传记：</text></view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记一：</text></view>
		 				<view class="czcontent">
		 					<text>一间破旧的小木屋，一块贫瘠的玉米地，和我。</text><text>这些就是主人的全部财产。</text><text>今年收成不好，主人快连我的灯油都添不起了，我老是吃不饱，真是郁闷啊。</text><text>那个月黑风高的晚上，我在门外小心翼翼地燃烧着最后一点灯油，希望能为主人多看一晚上的门~~扑。</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记二：</text></view>
		 				<view class="czcontent">
		 					<text>天啊啊啊啊一定是小偷！！！</text><text>主人！！！主人！！！！！</text><text>我被吹灭了！！不这不是重点！！</text><text>有小偷啊！！！！！</text><text>但是无论我内心如何狂野地呼喊~~我都发不出声音。</text><text>怎么办怎么办怎么办怎么办！</text><text>眼看小偷就要带走主人最后一点存粮了！！</text>
		 				</view>
		 			</view>
		 			<view class="textcontent">
		 			    <view class="cztitle"><text>传记三：</text></view>
		 				<view class="czcontent">
		 					<text>我变成了一个明亮的大灯笼！！！屁股上的破洞还补好了！！不漏风了！！！！</text><text>太！帅！了！</text><text>可恶的小偷被我吓了个半死！</text><text>呜狸呖呖里！我才不会放过你！你跑到哪儿，我就追到哪里！</text><text>从此，再也没人敢来偷主人的东西了。</text>
		 				</view>
		 			</view>
		 		</view>
		 		<view class="qb">
		 			<view class="qbtitle"><text>02情报：</text></view>
		 			<view class="qbcontent">
		 			    <view class="jx"><text>觉醒前：</text></view>
		 				<view class="qbpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yysn/denglonggui1.png" mode="aspectFit"></image></view>
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