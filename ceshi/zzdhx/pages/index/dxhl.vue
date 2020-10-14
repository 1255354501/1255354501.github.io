<template>
	<view class="content"> 
		<view class="text-area" @click="openvideo('../honglian/aerfa1/aerfa1')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 欧米茄时空狭缝 阿尔法幻境2</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/aerfa2/aerfa2')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 欧米茄时空狭缝 阿尔法幻境3</text></view>
			 </view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/aerfa3/aerfa3')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 欧米茄时空狭缝 阿尔法幻境4</text></view>
		    </view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/deerta4/deerta4')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 欧米茄时空狭缝 德尔塔幻境1</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/deerta5/deerta5')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 欧米茄时空狭缝 德尔塔幻境2</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/deerta6/deerta6')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 欧米茄时空狭缝 德尔塔幻境3</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/deerta7/deerta7')">
			<view class="fizeContent"> 
			     <view class="title"><text>红莲之狂潮 欧米茄时空狭缝 德尔塔幻境4</text></view>
		    </view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/xigema8/xigema8')">
				<view class="fizeContent"> 
					<view class="title"><text>红莲之狂潮 欧米茄时空狭缝 西格玛幻境1</text></view>
				</view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/xigema9/xigema9')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 欧米茄时空狭缝 西格玛幻境2</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/xigema10/xigema10')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 欧米茄时空狭缝 西格玛幻境3</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/xigema11/xigema11')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 欧米茄时空狭缝 西格玛幻境4</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../honglian/aerfa12/aerfa12')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 欧米茄时空狭缝 阿尔法幻境1</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/oubone13/oubone13')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 乐欲之所瓯博讷修道院</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/dulaba14/dulaba14')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 失落之都拉巴纳斯塔</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../honglian/duolana15/duolana15')">
			<view class="fizeContent"> 
				<view class="title"><text>红莲之狂潮 封闭圣塔黎铎拉纳大灯塔</text></view>
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
