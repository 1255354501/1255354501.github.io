<template>
	<view class="content">
		<view class="text-area" @click="openvideo('../1-5/1-5')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/1.png" mode="aspectFill" />
				<view class="title"><text>这游戏太难了1~5解答</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../6-10/6-10')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/6.png" mode="aspectFill" />
				<view class="title"><text>这游戏太难了6~10解答</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../11-15/11-15')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/11.png" mode="aspectFill" />
				<view class="title"><text>这游戏太难了11~15解答</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../16-20/16-20')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/16.png" mode="aspectFill" />
				<view class="title"><text>这游戏太难了16~20解答</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../21-25/21-25')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/21.png" mode="aspectFill" />
				<view class="title"><text>这游戏太难了21~25解答</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../26-30/26-30')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/26.png" mode="aspectFill" />
				<view class="title"><text>这游戏太难了26~30解答</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../31-35/31-35')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/31.png" mode="aspectFill" />
				<view class="title"><text>这游戏太难了31~35解答</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../36-40/36-40')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/36.png" mode="aspectFill" />
				<view class="title"><text>这游戏太难了36~40解答</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../41-45/41-45')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/41.png" mode="aspectFill" />
				<view class="title"><text>这游戏太难了41~45解答</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../46-50/46-50')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/46.png" mode="aspectFill" />
				<view class="title"><text>这游戏太难了46~50解答</text></view>
		    </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'index',
				list:[],
				ggg:false
		}
		},
		onLoad:function(){
			uni.request({
			    url: 'https://s1ssp.wifiing.net/zttnlbk_init.php', 
			    data: {
			        text: 'uni.request'
			    },
			    success: (res) => {
			        // console.log(res.data.advertisement);
			        this.ggg=res.data.advertisement
					// if(this.ggg=="true"){
					// 	const bannerAd = tt.createRewardedVideoAd({
					// 	  adUnitId: "325ofh1la2l32k7g0i"
					// 	});
					// 	  bannerAd.show().then(() => {
					// 	      console.log("广告显示成功");
					// 	    }).catch((err) => {
					// 			bannerAd.load().then(() => {
					// 			    console.log("手动加载成功");
					// 			    return bannerAd.show();
					// 			  });
					// 	      console.log("广告组件出现问题", err);
					// 	    }); 
					// }
			    }
			});
		},
		methods: {
            openvideo:function(url){
				// console.log(111)
				uni.navigateTo({
				    url: url+`?ggg=${this.ggg}`
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.text-area {
		display: flex;
		width: 100%;
		padding-left:80rpx;
		padding-top: 30rpx;
		
	}
	.fizeContent{
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		
	 }
	 .fizeContent .img{
		 width: 100rpx;
		 height: 200rpx;
	 }
	 .fizeContent .title{
		/* width: 80%; */
		 white-space:nowrap;
		 overflow:hidden;
		 text-overflow:ellipsis;
		 margin-bottom: 20rpx;
		 margin-left: 40rpx;
	 }
</style>
