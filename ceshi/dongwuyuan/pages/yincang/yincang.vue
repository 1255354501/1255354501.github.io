<template>
	<view>
		<view class="content">
			<view class="title1"><text>疯狂动物园隐藏动物怎么抓?隐藏动物捕捉方法是什么?在疯狂动物园游戏里，存在着许许多多的隐藏动物，下面就和小编一起来看看隐藏动物抓捕攻略汇总!</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/yincang1.png" mode="aspectFit"/></view>
		</view>
		<view class="content">
			<view class="title"><text>隐藏动物</text></view>
			<view class="title1"><text>1、暗黑野牛：骑着同一只牛行进800米。</text></view>
			<view class="title1"><text>2、摇钱牛：右上角RMB购买。</text></view>
			<view class="title1"><text>3、特洛伊九游：连续换乘草原7种不同的动物出。</text></view>
			<view class="title1"><text>4、骷髅象：随机BOSS任务出。</text></view>
			<view class="title1"><text>5、鸵鸟老板：随机BOSS任务出</text></view>
			<view class="title1"><text>6、流行秃鹰：随机出现，或者多换乘秃鹰即会出现。</text></view>
			<view class="title1"><text>7、机械秃鹰：用大象或者长颈鹿狂暴之后甩上去抓。</text></view>
			<view class="title1"><text>8、银河长颈鹿：随机出现，或者使用狮子吃长颈鹿即会出现。</text></view>
			<view class="title1"><text>9、外星长颈鹿：随机出现，随机BOSS任务出。</text></view>
			<view class="title1"><text>10、哭吼狮：用狮子吃30个动物有几率出。或者连续换乘5只狮子出。</text></view>
			<view class="title1"><text>11、油炸狮：使用同一只狮子连续吃30个动物出。</text></view>
			<view class="title1"><text>12、急速肥猪：随机BOSS任务出。</text></view>
			<view class="title1"><text>13、猩猩法官：随机出现，用猩猩多撞动物出。</text></view>
			<view class="title1"><text>14、火山猩猩：随机BOSS任务出。</text></view>
			<view class="title1"><text>15、雄鸡鳄：用鳄鱼连续吃动物就会出现。早上出现的概率大。</text></view>
			<view class="title1"><text>16、鸭嘴河马：用河马连撞15个动物出。一只河马连续跑1000米出。</text></view>
			<view class="title1"><text>17、异形虎：用老虎连吃30个动物出。</text></view>
			<view class="title1"><text>18、花样虎：随机BOSS任务出。</text></view>
			<view class="title1"><text>19、恐龙犀牛：七种丛林动物连续换乘出。</text></view>
			<view class="title1"><text>20、三嘴鸟：一只鸟起跳90米就会出。</text></view>

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