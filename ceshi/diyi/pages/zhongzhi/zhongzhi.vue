<template>
	<view>
		<view class="title">
			<view>
			    <image style="width: 200rpx;height: 200rpx;" src="http://s1.catelyn.info/zjxcx/img/chuanzhi/chuanzhi.png" mode="aspectFill" />
			</view>
			<view class="titleCentent">
				<text>下边为大家介绍如何种树获得木板，麻草，椰子。</text>
			</view>
		</view>
		<view class="content">
			<view class="contentTitle">
				<text>下边为大家介绍如何种树获得木板，麻草，椰子。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/zhongzhi/zhongzhi.png" ></image>
			</view>
			<view class="contentTitle">
				<text>下边为大家介绍如何种树获得木板，麻草，椰子。</text>
				<text>（可能会有人问：我看木板从海上飘来那么多，前期根本不缺啊。其实，慢慢的，木板从海上飘来的越来越少，到后期在海上获取木板几乎不太可能了，于是我们需要种树！）。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/zhongzhi/zhongzhi.png" ></image>
			</view>
			<view class="contentTitle">
				<text>合成树木种植箱。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/zhongzhi/zhongzhi1.png" ></image>
			</view>
			<view class="contentTitle">
				<text>需要2x2的空间以进行放置，这里我放在了二层。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/zhongzhi/zhongzhi2.png" ></image>
			</view>
			<view class="contentTitle">
				<text>到现在还没有棕榈种子啊喂……棕榈种子（以下简称种子）刚开始只能从木桶里面获取。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/zhongzhi/zhongzhi3.png" ></image>
			</view>
			<view class="contentTitle">
				<text>捞了5个木桶都没有获取种子，于是我重开了我一个玩过的存档。（这里箭头不小心指错了，事实上第6栏才是种子）。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/zhongzhi/zhongzhi4.png" ></image>
			</view>
			<view class="contentTitle">
				<text>对着树木种植箱，按下E键以种植。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/zhongzhi/zhongzhi5.png" ></image>
			</view>
			<view class="contentTitle">
				<text>成长中……这里我进行了时间计时，大约需要7分钟树木才会长成！。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/zhongzhi/zhongzhi6.png" ></image>
			</view>
			　<view class="contentTitle">
				<text>插一下，砍树需要用到斧头，获取方法上图所示。斧头不止能砍树，还能拆除建造的所有东西。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/zhongzhi/zhongzhi7.png" ></image>
			</view>
			<view class="contentTitle">
				<text>树木7分钟后长成，对着树木根部按住鼠标左键。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/zhongzhi/zhongzhi8.png" ></image>
			</view>
			<view class="contentTitle">
				<text>砍的过程中会掉落几个椰子，按E键获取，椰子是除了木桶外获取种子的唯一方法。</text>
				<image  class="image" src="http://s1.catelyn.info/zjxcx/img/zhongzhi/zhongzhi9.png" ></image>
			</view>
			<view class="contentTitle">
				<text>一棵树木可以砍12下，砍完后……就没有了（废话），得到的椰子可以按下鼠标左键食用，食用后获得种子。</text>
			</view>
		</view>
		<view class="wendao">
			<text>关于鲨鱼的问题，这里简单说明一下</text>
			<view>
				<text>在没有安装无鲨鱼补丁的情况下，鲨鱼是海上唯一可以可以对你造成伤害的东西。</text>
				<text>当你在海中游泳时，鲨鱼会立刻冲向你，去咬你。</text>
				<text>并且鲨鱼会时不时的咬你的地基，咬一会你的地基就会被咬烂，包括该地基上的所有物品（如果有柱子则更糟糕）全部消失。</text>
				<text>抵御鲨鱼的唯一方法是合成矛，在鲨鱼咬你木板时快速按住鼠标左键刺向它，刺三下鲨鱼会被击退。</text>
				<text>如果刺的次数很多，那么鲨鱼将会被杀死，其被杀死时继续刺它可以获取鲨鱼肉，（烹饪后）是获取饱食度最好的方法。</text>
				<text>一只鲨鱼时候会有另一只鲨鱼来“顶替死者的职位”，继续攻击你。</text>
				
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