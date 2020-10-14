<template>
		 	<view class="content">
		 		<view class="touxiang"> 
					<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yuhun/youguxiang0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">幽谷响</view>
		 		</view>
		 		<view class="text"> 
		 			<view class="textcontent"> 
		 				<view class="czcontent">
		 					<text>2件套属性：效果抵抗15%</text><text>4件套属性：成功抵抗来自敌方的眩晕，沉默，冰冻，混乱，变形，嘲讽，睡眠等控制状态时，有50%的概率将效果反弹给施法者，且必定命中</text><text>推荐式神：数珠、奴良陆生、椒图</text><text>获得方法：周末御魂、神秘商店</text>
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