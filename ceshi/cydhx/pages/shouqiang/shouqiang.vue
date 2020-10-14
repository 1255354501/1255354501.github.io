<template>
	<view class="content">
		<view class="title">
			<text>手枪系列</text>
		</view>
		<view class="wuqi"> 
			<view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/cydhx/shouqiang0.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>沙鹰-修罗</text></view>
				<view class="wuqititle"><text>价格：</text></view>
				<view class="qxcontent"><text>40800CF点（永久）</text></view>
				<view class="wuqititle"><text>武器属性：</text></view> 
				<view class="qxcontent"><text>经验值增加100% </text></view>
			    <view class="qxcontent"><text>同房间玩家经验值增加20% </text></view>
			    <view class="qxcontent"><text>同房间玩家GP增加10%</text></view>
				<view class="wuqititle"><text>强化属性：</text></view> 
			    <view class="qxcontent"><text>战斗姿态</text></view>
			    <view class="qxcontent"><text>特殊近战攻击</text></view> 
			    <view class="qxcontent"><text>增加装备中的所有手枪子弹数</text></view> 
			</view> 
			<view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/cydhx/shouqiang1.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>沙鹰-天神 </text></view>
				<view class="wuqititle"><text>价格：</text></view>
				<view class="qxcontent"><text>40800CF点（永久）</text></view>
				<view class="wuqititle"><text>武器属性：</text></view> 
				<view class="qxcontent"><text>经验值增加100% </text></view>
			    <view class="qxcontent"><text>同房间玩家经验值增加20% </text></view>
			    <view class="qxcontent"><text>同房间玩家GP增加10%</text></view>
				<view class="wuqititle"><text>强化属性：</text></view> 
			    <view class="qxcontent"><text>火力全开</text></view>
			    <view class="qxcontent"><text>战斗姿态</text></view>
			    <view class="qxcontent"><text>特殊近战攻击</text></view> 
			    <view class="qxcontent"><text>增加装备中的所有手枪子弹数</text></view> 
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
		 					adUnitId: "bac0l955lbf515lmb3"
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
	@import url("/static/xq.css");
</style>