<template>
	<view>
		<view class="title">
			<view>
			    <!-- <image style="width: 200rpx;height: 200rpx;" src="/static/logo.png" mode="aspectFill" /> -->
			</view>
			<view class="titleCentent">
				<text>《木筏生存》游戏中的隐藏成就解锁起来比较费事，有些玩家还不知道如何完成。今天给大家带来的是《木筏生存》难点成就心得及实用技巧分享，希望大家喜欢。</text>
			</view>
		</view>
		<view class="content">
			<view class="list">
				<text>杀死五十只熊和五十只老鼠的成就倒是挺好刷，开个容易难度的档，熊和老鼠会重复刷，熊岛在几个刷新点来回转悠就行了，砍刀七刀砍死。</text>
				<text>老鼠在二楼、三楼、四楼来回转悠就行了，上去杀完下来就刷，砍刀两刀砍死。</text>
				<text>五十只鹰和五十只猪真是费了老劲，更新之前一座大岛有时候是两只鹰有时候是一只。</text>
               <text>猪必然是两只，更新后就只有一只鹰一只猪，极小概率是两只猪，基本上就是需要逛五十座岛才能完成。容易难度下野猪和熊一样七刀砍死、金属箭鹰七箭射死。</text>
               <text>其他比较麻烦的成就
			   
			   拿到飞行员的帽子：隐藏成就之一，完全碰运气，有一座岛上挂着一架坠毁的飞机。上去拿到一顶帽子解锁成就（这个岛雷达不显示）。
			   
			   拿到船长的帽子：隐藏成就之一，完全碰运气。有一座岛有一架沉船，上去可以拿到一个会放音乐的收音机（里边的音乐真的很难听，而且离远了听起来毛骨悚然），一顶船长的帽子。拿到之后解锁成就（雷达不显示）。</text>
              
			</view>
			<view class="wendao">
				<text>游戏中的小技巧</text>
				<view>
					<text>1.三角板可以浮空</text>
					<text class="da">先做一根立柱，让后再周围拼上三角板，再把立柱拆掉，三角板不会被破坏。</text>
					<text class="da">我小木筏的最后一张图可以看出来除了最外边一层装饰用的立柱其他地方没有立柱也依然没有崩塌。</text>
				</view>
				<view>
					<text>2.可以穿戴多件同一件装备</text>
					<text class="da">例如我先给自己装备一个脚蹼，在装备一个帽子。把帽子拖出来和物品栏里第二个脚蹼替换（注意一定是帽子拖出来替换脚蹼，用脚蹼替换帽子行不通），让后就装备上两个脚蹼了。</text>
					<text class="da">在带上帽子重复，可以装五个脚蹼，游泳速度谁试谁知道。</text>
					<text class="da">一般是四个脚蹼＋一个背包。氧气瓶没必要，因为上浮速度太快了。</text>
					<text class="da">ps：背包虽然可以重复装但是不会多增加格子。</text>
				</view>
				<view>
					<text>3.用光的电池依然可以用来做头灯</text>
				</view>
				<view>
					<text>4.睡觉只会加快时间流逝</text>
					<text class="da">例如你的木筏在一座岛旁边，睡觉，起床你会发现你的木筏位置没有变化</text>
					<text class="da">但是你昨晚放在烤架上的食物和炉子里烧的金属锭已经全好了，真是神奇的设定。</text>
					<text class="da">ps：不要在刚往净水器里加入海水后去睡觉。你会发现一觉起来净水器里没水了</text>
					<text class="da">不能从里边装水出来也不能倒水进去。对，他不能用了！这是现版本的一个Bug，只能将净水器移除让后重新放置来刷新他的状态。</text>
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
	  margin-top: 10rpx;
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


<style>

</style>
