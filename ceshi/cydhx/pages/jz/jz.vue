<template>
	<view class="content">
		<view class="title">
			<text>穿越火线近战系列</text>
		</view>
		<view class="wuqi"> 
			<view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/cydhx/jz0.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>屠龙</text></view>
				<view class="wuqititle"><text>价格：</text></view>
				<view class="qxcontent"><text>49800CF点（永久）</text></view>
				<view class="wuqititle"><text>武器属性：</text></view> 
				<view class="qxcontent"><text>经验值增加120% </text></view>
			    <view class="qxcontent"><text>同房间玩家经验值增加30%</text></view>
			    <view class="qxcontent"><text>同房间玩家GP增加20%</text></view>
				 
				<view class="wuqititle"><text>强化属性：</text></view> 
			    <view class="qxcontent"><text>急行军 </text></view>
			    <view class="qxcontent"><text>快手 </text></view> 
			    <view class="qxcontent"><text>重击 </text></view> 
			</view> 
			<view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/cydhx/jz1.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>龙啸</text></view>
				<view class="wuqititle"><text>价格：</text></view>
				<view class="qxcontent"><text>49800CF点（永久）</text></view>
				<view class="wuqititle"><text>武器属性：</text></view> 
				<view class="qxcontent"><text>经验值增加120% </text></view>
			    <view class="qxcontent"><text>同房间玩家经验值增加30% </text></view>
			    <view class="qxcontent"><text>同房间玩家GP增加20%</text></view>
				
				<view class="wuqititle"><text>强化属性：</text></view> 
			    <view class="qxcontent"><text>警戒姿态 </text></view>
			    <view class="qxcontent"><text>战斧之主 </text></view>
			    <view class="qxcontent"><text>急行军 </text></view> 
			    <view class="qxcontent"><text>快手 </text></view> 
			</view> 
			<view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/cydhx/jz2.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>擎天</text></view>
				<view class="wuqititle"><text>价格：</text></view>
				<view class="qxcontent"><text>49800CF点（永久）</text></view>
				<view class="wuqititle"><text>武器属性：</text></view> 
				<view class="qxcontent"><text>经验值增加120% </text></view>
			    <view class="qxcontent"><text>同房间玩家经验值增加30% </text></view>
			    <view class="qxcontent"><text>同房间玩家GP增加20%</text></view>
				
				<view class="wuqititle"><text>强化属性：</text></view> 
			    <view class="qxcontent"><text>要你命3000  </text></view>
			    <view class="qxcontent"><text>再见兄弟  </text></view>
			    <view class="qxcontent"><text>急行军 </text></view> 
			    <view class="qxcontent"><text>快手 </text></view> 
			</view> 
			<view class="qx">
				<view class="qxpic"><image src="http://s1.catelyn.info/zjxcx/cydhx/jz3.png" mode="aspectFit"></image></view>
			    <view class="qxtitle"><text>麒麟刺</text></view>
				<view class="wuqititle"><text>价格：</text></view>
				<view class="qxcontent"><text>49800CF点（永久）</text></view>
				<view class="wuqititle"><text>武器属性：</text></view> 
				<view class="qxcontent"><text>经验值增加120% </text></view>
			    <view class="qxcontent"><text>同房间玩家经验值增加30% </text></view>
			    <view class="qxcontent"><text>同房间玩家GP增加20%</text></view>
				
				<view class="wuqititle"><text>强化属性：</text></view> 
			    <view class="qxcontent"><text>要你命灵气攻击</text></view>
			    <view class="qxcontent"><text>破绽打击 </text></view>
			    <view class="qxcontent"><text>急行军 </text></view> 
			    <view class="qxcontent"><text>快手 </text></view> 
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