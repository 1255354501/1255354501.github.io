<template>
	<view class="content"> 
		<view class="text-area" @click="openvideo('../cangqiong/tiandong12/tiandong12')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 天动之章1</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/tiandong1/tiandong1')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 天动之章2</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/tiandong2/tiandong2')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 天动之章3</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/tiandong3/tiandong3')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 天动之章4</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/qidong4/qidong4')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 启动之章1</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/qidong5/qidong5')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 启动之章2</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/qidong6/qidong6')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 启动之章3</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/qidong7/qidong7')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 启动之章4</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/lvdong8/lvdong8')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 律动之章1</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/lvdong9/lvdong9')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 律动之章2</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/lvdong10/lvdong10')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 律动之章3</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/lvdong11/lvdong11')">
			<view class="fizeContent">
				<view class="title"><text>苍穹之禁城 亚历山大机神城 律动之章4</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/13/13')">
			<view class="fizeContent">
				<view class="title"><text>影之国</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/jicheng14/jicheng14')">
			<view class="fizeContent">
				<view class="title"><text>禁忌城邦玛哈</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../cangqiong/chuanxu15/chuanxu15')">
			<view class="fizeContent">
				<view class="title"><text>魔航船虚无方舟</text></view>
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
		 			// bannerAd.onClose((res) => {
		 			//   // if (!res.isEnded) {
		 			//   //   uni.navigateBack({
		 			//   //       delta: 1
		 			//   //   });
		 			//   // }
		 			// });
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