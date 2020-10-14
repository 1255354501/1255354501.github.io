<template>
	<view class="content"> 
		<view class="text-area" @click="openvideo('../tachangqiong/bisimai1/bisimai1')">
			<view class="fizeContent"> 
				<view class="title"><text> 斯麦歼殛战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/bisimai2/bisimai2')">
			<view class="fizeContent"> 
				<view class="title"><text> 斯麦歼灭战</text></view>
			 </view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/shihuanxiang3/shihuanxiang3')">
			<view class="fizeContent"> 
				<view class="title"><text> 桌骑士幻想歼灭战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/zhuoqishi4/zhuoqishi4')">
			<view class="fizeContent"> 
				<view class="title"><text> 桌骑士歼灭战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/gechuanqi5/gechuanqi5')">
			<view class="fizeContent"> 
				<view class="title"><text> 德霍格传奇征龙战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/dehuoge6/dehuoge6')">
			<view class="fizeContent"> 
				<view class="title"><text> 德霍格征龙战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/zuerwan7/zuerwan7')">
			<view class="fizeContent"> 
				<view class="title"><text> 尔宛歼殛战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/zuerwan8/zuerwan8')">
			<view class="fizeContent"> 
				<view class="title"><text> 尔宛歼灭战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/suofeiya9/suofeiya9')">
			<view class="fizeContent"> 
				<view class="title"><text> 菲娅歼殛战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/suofeiya10/suofeiya10')">
			<view class="fizeContent"> 
				<view class="title"><text> 菲娅歼灭战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/luobona11/luobona11')">
			<view class="fizeContent"> 
				<view class="title"><text> 波那歼殛战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/luobona12/luobona12')">
			<view class="fizeContent"> 
				<view class="title"><text> 波那歼灭战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/feiluote13/feiluote13')">
			<view class="fizeContent"> 
				<view class="title"><text> 菲洛特歼殛战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tachangqiong/feiluote14/feiluote14')">
			<view class="fizeContent"> 
				<view class="title"><text> 菲洛特歼灭战</text></view>
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

