<template>
	<view class="content">
		<view class="text-area" @click="openvideo('../1/1')">
			<view class="fizeContent">
				<image class="img" src="/static/jiazhang/1.png" mode="aspectFill" />
				<view class="title"><text>家长模拟器怎么玩？</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../2/2')">
			<view class="fizeContent">
				<image class="img" src="/static/jiazhang/2.png" mode="aspectFill" />
				<view class="title"><text>家长模拟器怎么玩？</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../3/3')">
			<view class="fizeContent">
				<image class="img" src="/static/jiazhang/3.png" mode="aspectFill" />
				<view class="title"><text>家长模拟器怎么玩？</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../4/4')">
			<view class="fizeContent">
				<image class="img" src="/static/jiazhang/4.png" mode="aspectFill" />
				<view class="title"><text>家长模拟器怎么玩？</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../5/5')">
			<view class="fizeContent">
				<image class="img" src="/static/jiazhang/5.png" mode="aspectFill" />
				<view class="title"><text>家长模拟器怎么玩？</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../6/6')">
			<view class="fizeContent">
				<image class="img" src="/static/jiazhang/6.png" mode="aspectFill" />
				<view class="title"><text>家长模拟器怎么玩？</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../7/7')">
			<view class="fizeContent">
				<image class="img" src="/static/jiazhang/7.png" mode="aspectFill" />
				<view class="title"><text>家长模拟器怎么玩？</text></view>
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
			    url: 'https://s1ssp.wifiing.net/jzmnq_init.php', 
			    data: {
			        text: 'uni.request'
			    },
			    success: (res) => {
			        // console.log(res.data.advertisement);
			        this.ggg=res.data.advertisement
					// if(this.ggg=="true"){
					// 	const bannerAd = tt.createRewardedVideoAd({
					// 	  adUnitId: "k9br4jhn7l9185cce6"
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
		 width: 75%;
		 white-space:nowrap;
		 overflow:hidden;
		 text-overflow:ellipsis;
		 margin-bottom: 20rpx;
		 margin-left: 40rpx;
	 }
</style>