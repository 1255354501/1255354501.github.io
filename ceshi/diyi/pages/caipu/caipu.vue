<template>
	<view>
		<view class="title">
			<view>
			    <!-- <image style="width: 200rpx;height: 200rpx;" src="/static/logo.png" mode="aspectFill" /> -->
			</view>
			<view class="titleCentent">
				<text>《木筏生存》中玩家想要在木筏是上生存下去就必须要进食，许多玩家不知道食谱的配方。今天给大家带来《木筏生存》菜谱配方一览，希望能帮助到大家。</text>
			</view>
		</view>
		<view class="content">
			<view class="contentTitle">
				<text>菜谱：</text>
			</view>
			<view class="list">
				<text>1.简易炖鱼：土豆/甜菜根x2 鲱鱼/生鲳鱼x2</text>
				<text>2.炖鱼：罗非鱼/马鲛鱼x2 蛋x2</text>
				<text>3.奢华鲶鱼：土豆/甜菜根x2 鲶鱼x1 蘑菇x1</text>
               <text>4.鲨鱼晚宴：鲨鱼肉x2 蘑菇x1 银海藻x1</text>
               <text>5.三文鱼沙拉：菠萝x2 三文鱼x1 银海藻x1</text>
               <text>6.椰子鸡：鸡腿x2 椰子x1 蘑菇x1</text>
               <text>7.蘑菇煎蛋卷：土豆x1 蛋x2 蘑菇x1</text>
               <text>8.头汤：土豆/甜菜根x2 河豚x2</text>
               <text>9.蔬菜汤：土豆/甜菜根x4</text>
               <text>10.鸡腿配果酱：鸟腿x2 红浆果x2</text>
               <text>11.糖渍水果：菠萝x1 芒果x1 西瓜x1 红浆果x1</text>
			</view>
			<view class="wendao">
				<text>生存技巧</text>
				<view>
					<text>1.岛屿过高怎么办？</text>
					<text class="da">船造高点，从2层或者3层或者更好层跳进岛屿。叫基友一起，可以跳到基友头上。可以造桌子和地台达到更高点。若上了岛屿后，暂时不知道怎么上更高的地方了。</text>
				</view>
				<view>
					<text>2.去岛屿下拿物资，鲨鱼一直在，怎么办？</text>
					<text class="da">放鲨鱼鱼饵，然后安心去拿物资。</text>
				</view>
				<view>
					<text>前期物资紧缺，有没有更多的办法加快发育？</text>
					<text class="da">没得，慢慢来，找船、岛屿开箱子。</text>
				</view>
				<view>
					<text>雷达造成，那个雷达点去了有什么用？</text>
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
				title: 'main'
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
