<template>
	<view>
		<view class="content">
			<view class="title1"><text>疯狂动物园里侏罗纪公园新增7种动物，三角龙就是其中一种。今天蕾米为大家带来疯狂动物园三角龙怎么抓，死亡骑士三角龙怎么抓，帮助各位小伙伴抓到所有三角龙！</text></view>
			<view class="title"><text>疯狂动物园三角龙大全</text></view>
			<view class="title1"><text>三角龙出没地点：侏罗纪1</text></view>
			<view class="title"><text>三角龙（随机出现）</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/sanjiaolong1.png" mode="aspectFit"/></view> 
			<view class="title"><text>独眼三角龙（随机出现）</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/sanjiaolong2.png" mode="aspectFit"/></view>
			<view class="title"><text>警察三角龙（随机出现）</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/sanjiaolong3.png" mode="aspectFit"/></view>
			<view class="title"><text>飞翔三角龙（随机出现）</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/sanjiaolong4.png" mode="aspectFit"/></view>
			<view class="title"><text>奇美拉三角龙（随机出现）</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/sanjiaolong5.png" mode="aspectFit"/></view>
			<view class="title"><text>稀有美味三角龙（随机出现）</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/sanjiaolong6.png" mode="aspectFit"/></view>
			<view class="title"><text>死亡骑士三角龙（随机出现）</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/sanjiaolong7.png" mode="aspectFit"/></view>
			<view class="title"><text>BOSS任务出（随机出现）</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/sanjiaolong8.png" mode="aspectFit"/></view>
		
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