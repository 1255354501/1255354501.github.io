<template>
	<view class="content">
		<view class="text-area" @click="openvideo('../yysn/yysn')">
			<view class="fizeContent"> 
				<view class="title"><button>阴阳师N</button></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../yysr/yysr')">
			<view class="fizeContent"> 
				<view class="title"><button>阴阳师R</button></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../yinyangshiSP/yinyangshiSP')">
		    <view class="fizeContent">
		    <view class="title"><button>阴阳师SP</button></view>
		</view>
		</view><view class="text-area" @click="openvideo('../yinyangshiSR/yinyangshiSR')">
		    <view class="fizeContent">
		          <view class="title"><button>阴阳师SR</button></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../yinyangshiSSR/yinyangshiSSR')">
		    <view class="fizeContent">
		        <view class="title"><button>阴阳师SSR</button></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../yinyangshiguatai/yinyangshiguatai')">
		    <view class="fizeContent">
		        <view class="title"><button>阴阳师呱太</button></view>
		    </view>
		</view> 
		<view class="text-area" @click="openvideo('../yinyangshiliandong/yinyangshiliandong')">
		    <view class="fizeContent">
		        <view class="title"><button>阴阳师联动</button></view>
		    </view>
		</view> 
		<view class="text-area" @click="openvideo('../yuhun/yuhun')">
		    <view class="fizeContent">
		        <view class="title"><button>阴阳师御魂</button></view>
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
			uni.request({
			    url: 'https://s1ssp.wifiing.net/yyszlk_init.php', 
			    data: {},
			    success: (res) => {
			        // console.log(res.data.advertisement);
			        this.ggg=res.data.advertisement
					uni.setStorage({
					    key: 'ggg',
					    data:this.ggg,
					    success: function () {
					        console.log('59,success');
					    }
					});
					// if(this.ggg=="true"||this.ggg==true){
					// 	const bannerAd = tt.createRewardedVideoAd({
					// 	  adUnitId: "qkih7580bi5ik6gpjs"
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
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding-left: 40rpx;
		padding-top: 80rpx;
	}
	.text-area {
		display: flex;
		justify-content: center;
		margin-bottom: 30rpx;
	}
	.fizeContent{
		display: flex;
		width: 100%%;
		padding-left: 20rpx;
		align-items: center; 
	 }
	/* .fizeContent .title{
		width: 100%;
	 } */
	 .fizeContent .title button{
	 	width: 300rpx;
		background-color: #0000ff33;
	 }
</style>