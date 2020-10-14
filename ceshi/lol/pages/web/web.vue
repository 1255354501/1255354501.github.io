<template>
	<view>
		<web-view :src="src" ></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'',
				title:''
			}
		},
		onLoad:function(option){ 
			let obj=JSON.parse(decodeURIComponent(option.obj));
			this.src=obj.src;
			this.title=obj.title; 
			setTimeout(()=>{
				uni.setNavigationBarTitle({
				    title:this.title
				});
			},1000)
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
		onUnload:function(){
			
		},
		methods: {
			 
		}
	}
</script>

<style>

</style>
