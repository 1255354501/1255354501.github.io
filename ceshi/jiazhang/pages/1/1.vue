<template>
	<view>
		<view class="content">
			<view class="title1"><text>家长模拟器怎么玩？</text></view>
			<view class="title1"><text>家长模拟器是一款扮演家长，抚养孩子长大的游戏。那么，家长模拟器怎么玩？</text></view>
			<view class="pic"><image class="img" src="/static/jiazhang/1.png" mode="aspectFit"/></view>
		</view>
		<view class="content">
			<view class="title1"><text>单纯说下最简单的也是最主要的玩法，我们会从孩子出生开始培养他，然后需要给他买各种东西。</text></view>
			<view class="pic"><image class="img" src="/static/jiazhang/12.png" mode="aspectFit"/></view>
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