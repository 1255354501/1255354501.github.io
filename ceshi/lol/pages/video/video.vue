<template>
	<view class="content">
		<view class="">
		 	<text></text>
		</view>
		 
		<video id="myVideo" :src="video1" controls autoplay="true"  show-fullscreen-btn="true"></video>
		 <view class="">
		  	<text></text>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				video1:''
			}
		}, 
		onLoad(){
			let self=this
			uni.getStorage({
			    key: 'ggg',
			    success: function (res) { 
					self.ggg=res.data; 
					if(res.data=="true"||res.data==true){
						const bannerAd = tt.createRewardedVideoAd({
						  adUnitId: "2lxe14abeb1mb43kjl"
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
		onReady() { 
			let self=this
			uni.getStorage({
				key:'video',
				success:function(res){
					self.video1=res.data
				}
			})
		},
		onLoad() {
			
		 
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		background-color:#0009;
		padding: 51% 0;
	}
    video{ 
	   width: 100%;
    }
</style>
