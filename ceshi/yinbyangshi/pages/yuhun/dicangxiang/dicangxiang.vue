<template>
		 	<view class="content">
		 		<view class="touxiang"> 
					<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yuhun/dicangxiang0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">地藏像</view>
		 		</view>
		 		<view class="text"> 
		 			<view class="textcontent"> 
		 				<view class="czcontent">
		 					<text>2件套属性：生命加成15%</text><text>4件套属性：受到暴击时，会生成一个能够吸收生命值10%的伤害的护盾</text><text>有30%的概率同时保护其他友方单位，对被【嘲讽】目标触发概率降低60%</text><text>推荐式神：适合大多数控制、治疗和辅助式神，例如兵佣、惠比寿、雨女等</text><text>获得方法：石距、周一御魂</text>
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