<template>
		 	<view class="content">
		 		<view class="touxiang"> 
					<view class="touxiangpic"><image src="http://s1.catelyn.info/zjxcx/yys/yys/yuhun/tihun0.png" mode="aspectFit"></image></view>
		 			<view class="touxiangname">薙魂</view>
		 		</view>
		 		<view class="text"> 
		 			<view class="textcontent"> 
		 				<view class="czcontent">
		 					<text>2件套属性：生命加成15%</text><text>4件套属性：携带者有50%的概率，使友方单位受到的单体攻击伤害减免20%，并分担此次伤害的50%</text><text>推荐式神：适合一些如一目连、兵俑、狸猫等肉盾型式神</text><text>属性推荐：以生命为主，防御、效果抵抗为辅，另外二号位速度、四号位效果命中也要留下。</text><text>获得方法：业原火副本</text>
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