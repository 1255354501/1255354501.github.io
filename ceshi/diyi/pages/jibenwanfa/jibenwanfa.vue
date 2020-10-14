<template>
	<view>
		<view class="title">
			<view>
			    <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban.png" mode="aspectFill" />
			</view>
			<view class="titleCentent">
				<text>这便是进入后的游戏画面了（漆黑一片，显示出v1.05更新了昼夜交替）。</text>
			</view>
		</view>
		<view class="content">
			<view class="contentTitle">
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban.png" ></image>
				<text>这便是进入后的游戏画面了（漆黑一片，显示出v1.05更新了昼夜交替）。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban1.png" ></image>
			</view>
			<view class="contentTitle">
				<text>创建一个新游戏，存档名自己填写，貌似只能英文。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban2.png" ></image>
			</view>
			<view class="contentTitle">
				<text>下海后会显示疲劳度，如果疲劳度达到顶格会掉血，回到木筏上以缓解疲劳。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban3.png" ></image>
			</view>
			<view class="contentTitle">
				<text>这里可以看见远方飘来的物资了，这便是你生存下去的希望。</text>
                <text>拿着钩子以进行捕捉物资。</text>
				<image class="image"  src="http://s1.catelyn.info/zjxcx/img/jiben/jiban4.png" ></image>
			</view>
			<view class="contentTitle">
				<text>钩子钩到后，即可获取资源。</text>
				<text>按下Tab键（或B键）以打开背包 合成，能合成的东西见下图所示（翻译后）。</text>
				<image class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban5.png" ></image>
				<image class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban51.png" ></image>
				<image class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban52.png" ></image>
				<image class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban53.png" ></image>
			</view>
			<view class="contentTitle">
				<text>下图为基础物资（可直接在海上获取）。</text>
				<image class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban6.png" ></image>
			</view>
			<view class="contentTitle">
				<image class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban7.png" ></image>
				<text>口渴度，饱食度，生命值。</text>
				<text>口渴度下降最快，饱食度次之。生命值减少可能因为。</text>
				<text>饱食度过少，口渴度过少，被鲨鱼攻击（安装无鲨鱼补丁忽略），疲劳度顶格。</text>
				<text>所以可见，生命值不容易下降（目前版本）。</text>
				<text>获取生命值得唯一方法就是吃东西（喝东西不可获得）。</text>
			</view>
			<view class="contentTitle">
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban8.png" ></image>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban9.png" ></image>
				<text>木桶是十分有用的基础物资，获取木桶可能随机获得。</text>
				<text>木板，废铁，麻草，甜菜，马铃薯，棕榈种子。</text>
				<text>道具网是一个十分重要的物品！他可以网住（拦住）从海上飘来的物资，不出5分钟就能收获很多了。</text>
			</view>
			<view class="contentTitle">
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban10.png" ></image>
				<text>合成。</text>
			</view>
			<view class="contentTitle">
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban11.png" ></image>
				<text>放置时注意一下物资的飘来方向，放在如图所示的位置，原因自己想（好懒的我）。</text>
			</view>
			<view class="contentTitle">
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban12.png" ></image>
				<text>不错，这里就网住了两个麻草，按下E键以获得所有</text>
				<text>也可以继续扩大你的道具网范围，以获取更多的资源。</text>
				<text>还有一点也忘说了，就是关于黑夜的照明问题。</text>
			</view>
			<view class="contentTitle">
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban13.png" ></image>
				<text>不漆黑一片。</text>
			</view>
			<view class="contentTitle">
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban14.png" ></image>
				<text>合成灯。</text>
			</view>
			<view class="contentTitle">
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/jiben/jiban15.png" ></image>
				<text>放置后明了许多。</text>
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