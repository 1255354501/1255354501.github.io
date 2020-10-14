<template>
	<view>
		<view class="title">
			<view>
			    <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img/shiwu/shiwu.png" mode="aspectFill" />
			</view>
			<view class="titleCentent">
				<text>既然说完了饮水问题，那么其后要讲的自然是进食问题了。</text>
			</view>
		</view>
		<view class="content">
			<view class="contentTitle">
				<text>既然说完了饮水问题，那么其后要讲的自然是进食问题了。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/shiwu/shiwu.png" ></image>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/shiwu/shiwu1.png" ></image>
			</view>
			<view class="contentTitle">
				<text>刚刚在木桶中获得了马铃薯，此时可以直接烤了。</text>
				<text>那如果没有马铃薯呢（或者以后马铃薯稀缺了呢）？我们可以尝试钓鱼（推荐用此方法获取食物）。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/shiwu/shiwu2.png" ></image>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/shiwu/shiwu3.png" ></image>
			</view>
			<view class="contentTitle">
				<text>按住鼠标左键来蓄力抛竿，蓄力时间的长短决定抛竿的长度，不过……抛得远与抛的近没什么区别，都可以在相同的时间钓到鱼。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/shiwu/shiwu4.png" ></image>
				
			</view>
			<view class="contentTitle">
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/shiwu/shiwu5.png" ></image>
				<text>当钓线慢慢往下沉时，即为鱼上钩，此时按下鼠标左键即可收杆。</text>
			</view>
			<view class="contentTitle">
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/shiwu/shiwu6.png" ></image>
				<text>获得美味的鱼儿啦。</text>
			</view>
			<view class="contentTitle">
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/shiwu/shiwu7.png" ></image>
				<text>放在火上烤吧。</text>
			</view>
		</view>
		<view class="wendao">
			<text>食物种类介绍</text>
			<view>
				<text>鱼，甜菜，马铃薯，椰子，鲨鱼肉。</text>
				<text>食物并不一定熟后才可以食用，生的时候也可以食用，只不过获取的饱食度较少而已。</text>
			</view>
			<image  class="image" src="http://s1.catelyn.info/zjxcx/img/shiwu/shiwu8.png" ></image>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'main',
				bofang:false
			}
		},
		onLoad:function(option){
			try{
				if(option.ggg=="true"){
					const bannerAd = tt.createRewardedVideoAd({
					  adUnitId: "421ksirgd0e44807gk"
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
					    uni.navigateBack	({
					        delta: 9999
					    });
					  }
					});
				}
			}catch(e){}
		},
		methods: {
			
		}
	}
</script>

<style>
  .title{
	display: flex;
	width: 100%;
	padding-left:20rpx;
	padding-top: 30rpx;
	border-bottom: 1rpx solid #000000;
  }
  .title .titleCentent{
	 width: 65%;
	 word-break: break-all;
	 text-overflow: ellipsis;
	 overflow: hidden;
	 display: -webkit-box;
	 -webkit-line-clamp: 2;
	 -webkit-box-orient: vertical;
	 padding-left: 20rpx;
  }
  .content{
	  margin-top: 10rpx;
	  padding-left: 20rpx;
	  padding-right: 20rpx;
  }
  .image{
	  width: 100%;
	  margin-top: 10rpx;
  }
  .content view{
	  margin-bottom: 20rpx;
  }
  .content .list{
	  display: block;
	  flex-wrap: nowrap;
  }
  .content .list text{
	  display: block;
	  margin-bottom: 10rpx;
  }
  .wendao view{
	  margin-top: 10rpx;
	  /* display: block; */
  }
  .wendao view text{
	 display: block;
	 margin-top: 10rpx;
  }
  .wendao .da{
	  text-indent: 40rpx;
  }
</style>
