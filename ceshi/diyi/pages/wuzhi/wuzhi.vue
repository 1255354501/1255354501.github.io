<template>
	<view>
		<view class="title">
			<view>
			    <!-- <image style="width: 200rpx;height: 200rpx;" src="/static/logo.png" mode="aspectFill" /> -->
			</view>
			<view class="titleCentent">
				<text>《木筏生存》作为一款“漂流”生存游戏，物资的获取与实用技巧是重中之重，各位玩家是否对每种物资的来源谙熟于心呢？下面为大家带来《木筏生存》物资获取渠道与实用技巧，希望对大家有所帮助。</text>
			</view>
		</view>
		<view class="content">
			<view class="contentTitle">
				<text>基本物资</text>
			</view>
			<view class="list">
				<text>1. 岛屿水下能够找到的材料：泥土、沙子、铁、铜、碎片、海草（铜在深海，需要氧气瓶和鳍）</text>
				<text>2.湿的钻块->放在船上晾干->干燥的钻块。</text>
				<text>3. 熔炉里能够炼制的物品

　　·沙子->玻璃

　　·海草->葡萄藤黏粘物

　　·金属矿石->金属锭

　　·铜矿石->铜锭</text>
               <text>4.海鸥会去鸟窝下蛋和产生羽毛（下蛋需求鸟窝远离人类干扰）。</text>
               <text>5.鲨鱼头可以击杀鲨鱼后得到。</text>
               <text>6.其余材料都是基本材料，可以直接捞取或者箱子开出。</text>
			</view>
			<view class="wendao">
				<text>日常技巧</text>
				<view>
					<text>1.岛屿过高怎么办？</text>
					<text class="da">船造高点，从2层或者3层或者更好层跳进岛屿。叫基友一起，可以跳到基友头上。可以造桌子和地台达到更高点。若上了岛屿后，暂时不知道怎么上更高的地方了。</text>
				</view>
				<view>
					<text>2.去岛屿下拿物资，鲨鱼一直在，怎么办？</text>
					<text class="da">放鲨鱼鱼饵，然后安心去拿物资。</text>
				</view>
				<view>
					<text>3.前期物资紧缺，有没有更多的办法加快发育？</text>
					<text class="da">没得，慢慢来，找船、岛屿开箱子。</text>
				</view>
				<view>
					<text>4.雷达造成，那个雷达点去了有什么用？</text>
					<text class="da">不知道，去了几个点，都是雷达站或者大岛屿（上面有5个箱子）</text>
				</view>
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
	 width: 90%;
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
