<template>
	<view class="content">
		<view class="text-area" @click="openvideo('../ditu/ditu')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/hpjy/haidaoditu.png" mode="aspectFit" />
				<view class="title"><text>和平精英地图</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../wuqi/wuqi')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/hpjy/akm.png" mode="aspectFit" />
				<view class="title"><text>和平精英武器</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../peijian/peijian')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/hpjy/zjwb.png" mode="aspectFit" />
				<view class="title"><text>和平精英配件</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../zaiju/zaiju')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/hpjy/zaiju0.png" mode="aspectFit" />
				<view class="title"><text>和平精英载具</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../wuzi/wuzi')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/hpjy/wuzi0.png" mode="aspectFit" />
				<view class="title"><text>和平精英物资介绍</text></view>
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
			    url: 'https://s1ssp.wifiing.net/hpdjy_init.php', 
			    data: {
			        text: 'uni.request'
			    },
			    success: (res) => {
			        // console.log(res.data.advertisement);
			        this.ggg=res.data.advertisement
					// this.ggg=true
					if(this.ggg=="true"){
						// const bannerAd = tt.createRewardedVideoAd({
						//   adUnitId: "5c77dhipc8j11gb57h"
						// });
						//   bannerAd.show().then(() => {
						//       console.log("广告显示成功");
						//     }).catch((err) => {
						// 		bannerAd.load().then(() => {
						// 		    console.log("手动加载成功");
						// 		    return bannerAd.show();
						// 		  });
						//       console.log("广告组件出现问题", err);
						//     });
						
					}
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
		 width: 300rpx;
		 height: 200rpx;
	 }
	 .fizeContent .title{
		 width: 75%;
		 white-space:nowrap;
		 overflow:hidden;
		 text-overflow:ellipsis;
		 margin-bottom: 20rpx;
		 margin-left: 40rpx;
	 }
</style>