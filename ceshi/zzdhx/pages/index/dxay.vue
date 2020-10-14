<<template>
	<view class="content"> 
		<view class="text-area" @click="openvideo('../anying/juexing1/juexing1')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸希望乐园 觉醒之章1</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../anying/juexing3/juexing3')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸希望乐园 觉醒之章2</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../anying/juexing5/juexing5')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸希望乐园 觉醒之章3</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../anying/juexing7/juexing7')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸希望乐园 觉醒之章4</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../anying/juexing2/juexing2')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸零式希望乐园 觉醒之章1</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../anying/juexing4/juexing4')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸零式希望乐园 觉醒之章2</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../anying/juexing6/juexing6')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸零式希望乐园 觉醒之章3</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../anying/juexing8/juexing8')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸零式希望乐园 觉醒之章4</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../anying/gongming9/gongming9')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸希望乐园 共鸣之章1</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../anying/gongming11/gongming11')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸希望乐园 共鸣之章2</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../anying/gongming13/gongming13')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸希望乐园 共鸣之章3</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../anying/gongming15/gongming15')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸希望乐园 共鸣之章4</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../anying/gongming10/gongming10')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸零式希望乐园 共鸣之章1</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../anying/gongming12/gongming12')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸零式希望乐园 共鸣之章2</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../anying/gongming14/gongming14')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸零式希望乐园 共鸣之章3</text></view>
			</view>
		</view> 
		<view class="text-area" @click="openvideo('../anying/gongming16/gongming16')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 伊甸零式希望乐园 共鸣之章4</text></view>
			</view>
		</view>
		<view class="text-area" @click="openvideo('../anying/zhigong17/zhigong17')">
			<view class="fizeContent">
				<view class="title"><text>暗影之逆焰 复制工厂废墟</text></view>
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
