<template>
	<view>
		<view class="content">
			<view class="title1"><text>家长模拟器怎么玩？</text></view>
			<view class="title1"><text>主要是学习这里，在这里购买相应属性的道具可以提升宝宝对应属性的能力，如智属性的电话机可以提升智力。</text></view>
			<view class="pic"><image class="img" src="/static/jiazhang/3.png" mode="aspectFit"/></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad:function(option){
			try{
				if(option.ggg=="true"){
					const bannerAd = tt.createRewardedVideoAd({
					  adUnitId: "k9br4jhn7l9185cce6"
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
					        delta: 9999
					    });
					  }
					});
				}
			}catch(e){}
			
			// console.log(61,this.gg)
			
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		display: block;
		padding-left: 40rpx;
		padding-top: 40rpx;
	}
	.pic{
		display: block;
		text-align: center;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.title{
		color: #304f9b;
		margin-bottom: 20rpx;
	}
	.title1{
		text-indent: 85rpx;
		padding-right: 20rpx;
	}
   .pic .img{
	   width: 600rpx;
   }
   .text{
	   text-indent: 85rpx;
	   padding-right: 20rpx;
   }
</style>