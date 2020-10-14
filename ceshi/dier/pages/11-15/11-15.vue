<template>
	<view>
		<view class="content">
			<view class="title"><text>11. 两个人都想过河，且要同时过河，但是船太小承载不起两个人的</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/11.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：把船放大</text></view>
		</view>
		<view class="content">
			<view class="title"><text>2.蝶、大象、小狗以及长颈鹿，他们谁最高呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/12.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：一只手把地鼠拖出来按住，一只手拖动锤子打</text></view>
		</view>
		<view class="content">
			<view class="title"><text>13. 这么大雪，小狗去哪儿了呢？我们要赶紧找到它，免得被冻坏了。</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/13.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：檫拭右边雪地，点击露出来的小狗脚印</text></view>
		</view>
		<view class="content">
			<view class="title"><text>14. 小猪又在睡觉了，你的任务就是叫醒它，但是该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/14.png" mode="aspectFill" /></view>
			<view class="text"><text>答案:12</text></view>
		</view>
		<view class="content">
			<view class="title"><text>15. 你忘了带钥匙，但是家里也没有人，你该怎么做呢？</text></view>
			<view class="pic"><image class="img" src="http://s1.catelyn.info/zjxcx/zttnlbk/15.png" mode="aspectFill" /></view>
			<view class="text"><text>答案：用手指长按指纹锁</text></view>
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
					  adUnitId: "325ofh1la2l32k7g0i"
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
   .pic .img{
	   width: 200rpx;
   }
</style>