<template>
	<view class="content"> 
		<view class="text-area" @click="openvideo('../tfay/sigunian1/sigunian1')">
		 	<view class="fizeContent"> 
		 		<view class="title"><text>暗影之逆焰 迪斯孤念歼灭战</text></view>
		 	</view>
		</view> 
		<view class="text-area" @click="openvideo('../tfay/hadisi2/hadisi2')">
		 	<view class="fizeContent"> 
		 		<view class="title"><text>暗影之逆焰 迪斯歼灭战</text></view>
		 	</view>
		</view> 
		<view class="text-area" @click="openvideo('../tfay/xialingjun3/xialingjun3')">
		 	<view class="fizeContent"> 
		 		<view class="title"><text>暗影之逆焰 瑕灵君歼殛战</text></view>
		 	</view>
		</view> 
		<view class="text-area" @click="openvideo('../tfay/xialingjun4/xialingjun4')">
		 	<view class="fizeContent"> 
		 		<view class="title"><text>暗影之逆焰 瑕灵君歼灭战</text></view>
		 	 </view>
		</view> 
		<view class="text-area" @click="openvideo('../tfay/tanniya5/tanniya5')">
		 	<view class="fizeContent"> 
		 		<view class="title"><text>暗影之逆焰 坦妮雅歼殛战</text></view>
		 	</view>
		</view> 
		<view class="text-area" @click="openvideo('../tfay/tanniya6/tanniya6')">
		 	<view class="fizeContent"> 
		 		<view class="title"><text>暗影之逆焰 坦妮雅歼灭战</text></view>
		 	</view>
		</view> 
		
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'index',
			list: [],
			ggg: false
		};
	},
	onLoad: function(option) {
		let self=this
		 uni.getStorage({
		     key: 'ggg',
		     success: function (res) { 
		 		self.ggg=res.data; 
		 		if(res.data=="true"||res.data==true){
		 			const bannerAd = tt.createRewardedVideoAd({
		 			  adUnitId: "3gmo9echhk53v76s7h"
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
		openvideo: function(url) { 
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding:40rpx 0rpx; 
}
.text-area {
	display: flex;
	width: 95%;
	/* padding-left:20rpx; */
	padding-top: 30rpx;
	margin: 20rpx 0;
	box-shadow: 1px 1px #808080, 2px 2px 2px #000000;
	/* border: 2rpx solid #000000; */
	border-radius: 20rpx;
	background-color: #999999;
}
.fizeContent {
	display: flex;
	padding-left: 20rpx;
	align-items: center;
}
.fizeContent .img {
	width: 100rpx;
	height: 200rpx;
}
.fizeContent .title {
	/* width: 80%; */
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-bottom: 20rpx;
	/* margin-left: 40rpx; */
}
</style>