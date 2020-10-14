<template>
	<view class="content"> 
		<view class="text-area" @click="openvideo('../tfhl/baobiao1/baobiao1')">
			<view class="fizeContent"> 
				<view class="title"><text>苍穹之禁城 镖歼灭战</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../tfhl/xiangtiannv2/xiangtiannv2')">
					<view class="fizeContent"> 
						<view class="title"><text>苍穹之禁城 祥天女歼殛战</text></view>
				    </view>
		</view> 
		<view class="text-area" @click="openvideo('../tfhl/xiangtiannv3/xiangtiannv3')">
					<view class="fizeContent"> 
						<view class="title"><text>苍穹之禁城 祥天女歼灭战</text></view>
				    </view>
		</view> 
		<view class="text-area" @click="openvideo('../tfhl/duyouye4/duyouye4')">
					<view class="fizeContent"> 
						<view class="title"><text>苍穹之禁城 读幽夜歼灭战</text></view>
				    </view>
		</view> 
		<view class="text-area" @click="openvideo('../tfhl/yuedu5/yuedu5')">
					<view class="fizeContent"> 
						<view class="title"><text>苍穹之禁城 读歼灭战</text></view>
				    </view>
		</view> 
		<view class="text-area" @click="openvideo('../tfhl/zhuque6/zhuque6')">
					<view class="fizeContent"> 
						<view class="title"><text>苍穹之禁城 雀诗魂战</text></view>
				    </view>
		</view> 
		<view class="text-area" @click="openvideo('../tfhl/zhuque7/zhuque7')">
					<view class="fizeContent"> 
						<view class="title"><text>苍穹之禁城 雀镇魂战</text></view>
				    </view>
				</view> <view class="text-area" @click="openvideo('../tfhl/longshangwei8/longshangwei8')">
					<view class="fizeContent"> 
						<view class="title"><text>苍穹之禁城 龙上位狩猎战</text></view>
				    </view>
				</view> <view class="text-area" @click="openvideo('../tfhl/huolong9/huolong9')">
					<view class="fizeContent"> 
						<view class="title"><text>苍穹之禁城 龙狩猎战</text></view>
				    </view>
				</view> <view class="text-area" @click="openvideo('../tfhl/baihu10/baihu10')">
					<view class="fizeContent"> 
						<view class="title"><text>苍穹之禁城 虎诗魂战</text></view>
				    </view>
				</view> <view class="text-area" @click="openvideo('../tfhl/baihu11/baihu11')">
					<view class="fizeContent"> 
						<view class="title"><text>苍穹之禁城 虎镇魂战</text></view>
				    </view>
				</view> <view class="text-area" @click="openvideo('../tfhl/longmenghuan12/longmenghuan12')">
					<view class="fizeContent"> 
						<view class="title"><text>龙梦幻歼灭战</text></view>
				    </view>
				</view> <view class="text-area" @click="openvideo('../tfhl/shenlong13/shenlong13')">
					<view class="fizeContent"> 
						<view class="title"><text>龙歼灭战</text></view>
				    </view>
				</view> <view class="text-area" @click="openvideo('../tfhl/qinglong14/qinglong14')">
					<view class="fizeContent"> 
						<view class="title"><text>龙诗魂战</text></view>
				    </view>
				</view> <view class="text-area" @click="openvideo('../tfhl/qinglong15/qinglong15')">
					<view class="fizeContent"> 
						<view class="title"><text>龙镇魂战</text></view>
				    </view>
				</view> <view class="text-area" @click="openvideo('../tfhl/zuozhinan16/zuozhinan16')">
					<view class="fizeContent"> 
						<view class="title"><text>佐之男歼殛战</text></view>
				    </view>
				</view> <view class="text-area" @click="openvideo('../tfhl/zuozhinan17/zuozhinan17')">
					<view class="fizeContent"> 
						<view class="title"><text>佐之男歼灭战</text></view>
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


