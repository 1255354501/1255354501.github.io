<template>
	<view>
		<view class="title">
			<view>
			    <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img/chuanzhi/chuanzhi.png" mode="aspectFill" />
			</view>
			<view class="titleCentent">
				<text>那么现在我们至少是保证不会死了，就该将Raft玩出点自己的新花样。</text>
			</view>
		</view>
		<view class="content">
			<view class="contentTitle">
				<text>锤子是建造必不可少的工具</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/chuanzhi/chuanzhi1.png" ></image>
			</view>
			<view class="contentTitle">
				<text>对着贴着木筏本体的海来进行位置确认</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/chuanzhi/chuanzhi2.png" ></image>
			</view>
			<view class="contentTitle">
				<text>按下鼠标左键以进行建造。</text>
                <text>只建造地基可是太无聊了，来看点新东西。</text>
				<image class="image" src="http://s1.catelyn.info/zjxcx/img/chuanzhi/chuanzhi3.png" ></image>
			</view>
			<view class="contentTitle">
				<text>手拿锤子时，按住鼠标右键以进入锤子的多功能菜单，按住鼠标右键，并移动鼠标的方向，可以进行选择你要。
　　建造的组件，松开鼠标左键以确认。这里说明一下，地基是建设一层的组件，地板是建设二层的组件。</text>
				<image class="image"  src="http://s1.catelyn.info/zjxcx/img/chuanzhi/chuanzhi4.png" ></image>
			</view>
			<view class="contentTitle">
				<text>楼梯是建造二层必不可少的组件，它需要3格的空间，并没有物品与之交错，即可按下鼠标左键建设。</text>
				<image class="image" src="http://s1.catelyn.info/zjxcx/img/chuanzhi/chuanzhi5.png" ></image>
			</view>
			<view class="contentTitle">
				<text>地板是建造二层必不可少的组件，它需要1格的空间，并没有物品与之交错，即可按下鼠标左键建设。
　　这里讲一下，并不是只有一个柱子即可进行所有的二层建设，一个柱子可以支持在二层建设地板以它为中心的3x3的范围，超出范围需要再次进行建设，这里推荐如下图方式建设。</text>
				<image class="image" src="http://s1.catelyn.info/zjxcx/img/chuanzhi/chuanzhi6.png" ></image>
			</view>
			<view class="contentTitle">
				<text>黑色为柱子，青色为地板。</text>
				<image class="image" src="http://s1.catelyn.info/zjxcx/img/chuanzhi/chuanzhi7.png" ></image>
			</view>
			<view class="contentTitle">
				<text>修复则是鲨鱼咬过木板后，并没有完全将其咬烂，可以进行修复（无鲨鱼补丁无视本图）。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/chuanzhi/chuanzhi8.png" ></image>
			</view>
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
