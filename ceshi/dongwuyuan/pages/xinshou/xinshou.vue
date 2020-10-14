<template>
	<view>
		<view class="content">
			<view class="title1"><text>今天小编为大家带来《疯狂动物园》新手攻略，怎么抓小动物，希望这篇疯狂动物园攻略能够帮助到玩家们。动物捕捉技巧还是很简单的，首先我们需要先抓到一只动物，玩家直接的进行长按来帮助自己获得一定的动力，这些都是我们后期需要多多注意的点。</text></view>
			<view class="title1"><text>注意动物的变化，我们可以发现动物变成了黄色之后然后我们直接的松开自己的手指来获得跳跃，抓到动物快速的点击屏幕。</text></view>
			<view class="title1"><text>直接的拖拽自己的人物进行移动，然后等待动物头上出现爱心的时候我们就开始进行驯服了，一直到爱心满了之后我们就可以获得一个动物了。</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/xinshou1.png" mode="aspectFit"/></view>
		</view>
		<view class="content">
			<view class="pic"><image class="img" src="/static/dongwuyuan/xinshou2.png" mode="aspectFit"/></view>
			<view class="title1"><text>游戏中的控制还是很简单的，我们一定要注意自己的点击时间长短才行，希望这篇攻略可以帮助到玩家。 </text></view>
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