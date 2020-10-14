<template>
	<view class="content"> 
		<view class="text-area" @click="openvideo('../chongsheng/zhenyuan1/zhenyuan1')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 真源之章1</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/zhenyuan2/zhenyuan2')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 真源之章2</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/zhenyuan3/zhenyuan3')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 真源之章3</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/zhenyuan4/zhenyuan4')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 真源之章4</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/xiehou5/xiehou5')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 邂逅之章1</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/xiehou6/xiehou6')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 邂逅之章2</text></view>
			 </view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/xiehou7/xiehou7')">
			<view class="fizeContent"> 
				<view class="title"><text> 巴哈姆特大迷宫 邂逅之章3</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/xiehou8/xiehou8')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 邂逅之章4</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/xiehou9/xiehou9')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 邂逅之章5</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/ruqin10/ruqin10')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 入侵之章1</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/ruqin11/ruqin11')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 入侵之章2</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/ruqin12/ruqin12')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 入侵之章3</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/ruqin13/ruqin13')">
			<view class="fizeContent"> 
				<view class="title"><text>巴哈姆特大迷宫 入侵之章4</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/gudai14/gudai14')">
			<view class="fizeContent"> 
				<view class="title"><text>水晶塔 古代人迷宫</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/xier15/xier15')">
			<view class="fizeContent"> 
				<view class="title"><text>水晶塔 希尔科斯塔</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../chongsheng/taan16/taan16')">
			<view class="fizeContent"> 
				<view class="title"><text>水晶塔 暗之世界</text></view>
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

