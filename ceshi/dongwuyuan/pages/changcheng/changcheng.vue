<template>
	<view>
		<view class="content">
			<view class="title1"><text>疯狂动物园是一款方块风格的休闲小游戏,游戏本身以收集玩法展开,下面小编为大家带来长城隐藏动物获取攻略,一起看看吧.</text></view>
			<view class="title"><text>【9-1 长城隐藏动物】</text></view>
			<view class="title1"><text>boss：猴子阿布，还算简单，注意跳时调整好方向。</text></view>
			<view class="title1"><text>牛仔马：骑斑马(是稀树草原的斑马)无换乘不死跑1000米。</text></view>
			<view class="title1"><text>绅士仙鹤：骑仙鹤吃三个灯笼，可复活。这任务有些难度。</text></view>
			<view class="title1"><text> 熊猫格格：感觉是历史上最简单的隐藏动物，类似罗宾汉鹰但又比那个简单，直接可以看到,顺着一堆草跳过去就可以抓到(左右都有，看自己习惯抓哪边，我习惯抓左边的)</text></view>
			<view class="title1"><text>注意很多人认为需要依靠复活才能抓，但其实骑上它之后别急着往右打方向，就能跑出来的。</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/changcheng1.png" mode="aspectFit"/></view>
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