<template>
	<view class="content">
		<view class="text-area" @click="openvideo('../renwu/renwu')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/cydhx/renwu0.png" mode="aspectFill" />
				<view class="title"><text>穿越火线人物系列</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../shouqiang/shouqiang')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/cydhx/shouqiang0.png" mode="aspectFill" />
				<view class="title"><text>穿越火线手枪系列</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../ak/ak')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/cydhx/ak0.png" mode="aspectFill" />
				<view class="title"><text>穿越火线AK47系列</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../m4a1/m4a1')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/cydhx/ma0.png" mode="aspectFill" />
				<view class="title"><text>穿越火线M4A1系列</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../wz/wz')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/cydhx/wz0.png" mode="aspectFill" />
				<view class="title"><text>穿越火线爱王者系列</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../jz/jz')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/cydhx/jz0.png" mode="aspectFill" />
				<view class="title"><text>穿越火线近战系列</text></view>
		    </view>
		</view>
		<view class="text-area" @click="openvideo('../jj/jj')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/cydhx/jj0.png" mode="aspectFill" />
				<view class="title"><text>狙击枪系列</text></view>
		    </view>
		</view> 
		<view class="text-area" @click="openvideo('../qita/qita')">
			<view class="fizeContent">
				<image class="img" src="http://s1.catelyn.info/zjxcx/cydhx/qt0.png" mode="aspectFill" />
				<view class="title"><text>其他武器系列</text></view>
		    </view>
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
			    url: 'https://s1ssp.wifiing.net/cydhx_init.php', 
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
					// 	  adUnitId: "bac0l955lbf515lmb3"
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
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 60rpx;
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