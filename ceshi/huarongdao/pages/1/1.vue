<template>
	<view>
		<view class="content">
			<view class="title"><text> 数字华容道，一款全新的经典的益智类型数字APP。目的是用最少的步数，最短时间将棋盘上的数字方块，按照从左到右，从上到下的顺序重新排列整齐。以往华容道游戏基于三国背景，需将棋子移动到出口。现在以数字为形式的游戏，需根据不同布局，如4乘4，按由1到16的顺序排好，即可成功。游戏类似魔方，对应不同阶，难度不同，实际可总结自己的玩法，不一定使用通用解法。接下来以较简单规格（4X4）游戏为例，介绍如何解开问题，成功通过。</text></view>
			<view class="title1"><text>1、首先开始一局，此时界面右下角，会空出一格，作为移动空隙，需根据规则，从左上角由1开始，排列方块。 </text></view>
			<view class="pic"><image class="img" src="/static/huarongdao/1.png" mode="aspectFit"/></view>
			<!-- <view class="text"><text>在下面的当然就是圣诞老人咯。</text></view> -->
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
					  adUnitId: "qkih7580bi5ik6gpjs"
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

