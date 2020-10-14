<template>
	<view>
		<view class="content">
			<view class="title1"><text>在疯狂动物园中有着很多的动物，每一种动物都有着很多的品种</text></view>
			<view class="title"><text>但是最稀有的就是濒危动物了，这一类的动物是最难获得的。下面我们一起看看疯狂动物园濒危动物抓捕攻略。</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/binwei1.png" mode="aspectFit"/></view>
			
			<view class="title1"><text>点击商人的图标就可以看到救援濒危动物的提示，未救出的濒危动物是黑色显示</text></view>
			<view class="title1"><text>点击下方的搜救按钮可以快速进入对应的地图进行抓捕。所有濒危动物都会在2000-3000米随机出现！</text></view>
			<view class="title1"><text>濒危动物在轮换过程中可能出现重复，这是正常现象，只能等下次更换。濒危动物都有对应的地图</text></view>
			<view class="title1"><text>必须探索到对应的地图，才能对动物进行搜救，否则搜救按钮无法点击，无法抓捕当天的濒危动物。</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/binwei2.png" mode="aspectFit"/></view>
			
			<view class="title1"><text>濒危动物每天更换一次，每天只会出现一种濒危动物，其余的濒危动物绝对不会出现。</text></view>
			<view class="title1"><text>抓到濒危动物以后，在之后的更换有概率出现对应的配对动物，只有搜救配对动物才能获得对应的宝宝。。</text></view>
			
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
					  adUnitId: "277e8d49bnk38pj2lj"
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