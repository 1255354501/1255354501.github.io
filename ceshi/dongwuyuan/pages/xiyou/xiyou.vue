<template>
	<view>
		<view class="content">
			<view class="title1"><text>在疯狂动物园中，有很多隐藏动物，他们需要完成隐藏任务才会出现。</text></view>
			<view class="title1"><text>今天为大家带来疯狂动物园隐藏任务怎么做，隐藏动物怎么抓，帮助各位小伙伴轻松抓到所有动物！</text></view>
			<view class="title"><text>隐藏动物</text></view>
			<view class=""><text>【5.极地】</text></view>
			<view class="title1"><text>BOSS动物：代数猫头鹰，海军海豹，滑轮熊</text></view>
			<view class="title1"><text>仙女企鹅：连续换乘8种不同动物（7极地+1外来）。</text></view>
			<view class="title1"><text>机械狐狸：骑同一只狐狸跑1500米。</text></view>
			<view class="title1"><text>雪兔：连续换乘4只北极兔。</text></view>
			<view class="title1"><text>剑齿海象：2000米后超大石头上跳下来。</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/xiyou5.png" mode="aspectFit"/></view>
		</view>
		<view class="content">
			<view class=""><text>【4.澳洲】</text></view>
			<view class="title1"><text>BOSS动物：野蛮绵羊，袋鼠圣僧，凤凰鸸鹋。</text></view>
			<view class="title1"><text>炸弹袋熊：袋熊一次同时撞4只动物。</text></view>
			<view class="title1"><text>变色骆驼：连续换乘8种不同动物（7澳洲+1外来）。</text></view>
			<view class="title1"><text>侦查蝠：破坏任意一座风车。</text></view>
			<view class="title1"><text>沼泽考拉怪：2000米以后燃烧的火树上。</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/xiyou4.png" mode="aspectFit"/></view>
		</view>
		<view class="content">
			<view class=""><text>【3.山脉】</text></view>
			<view class="title1"><text>BOSS动物：终极闪光羊驼，双角兽，独眼狼。</text></view>
			<view class="title1"><text>苏-24战斗熊：骑同一只老鹰跑2000米。</text></view>
			<view class="title1"><text>蒸汽朋克：骑同一只耗牛撞10只动物。</text></view>
			<view class="title1"><text>纯黑鹿：连续换乘8种不同动物（7山脉+1外来）。</text></view>
			<view class="title1"><text>罗宾汉鹰：沿着跑道边缘的灌木丛方向飞出，最远的山峰上。</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/xiyou3.png" mode="aspectFit"/></view>
		</view>
		<view class="content">
			<view class=""><text>【2.丛林】</text></view>
			<view class="title1"><text>BOSS动物：急速肥猪，火山猩猩，花样虎。</text></view>
			<view class="title1"><text>鸭嘴河马：骑同一只河马跑1600米（2000米后的区域水塘多）。</text></view>
			<view class="title1"><text>恐龙犀牛：连续换乘7种不同动物（7丛林）。</text></view>
			<view class="title1"><text>三嘴鸟：巨嘴鸟起跳100米并且安全换乘（暴走上升到最高点时起跳）。</text></view>
			<view class="title1"><text>雄鸡鳄：只有早上会出现（设备时间）。</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/xiyou2.png" mode="aspectFit"/></view>
		</view>
		<view class="content">
			<view class=""><text>【1.草原】</text></view>
			<view class="title1"><text>BOSS动物：骷髅象，外星长颈鹿，鸵鸟老板。</text></view>
			<view class="title1"><text>暗黑野牛：骑同一只野牛跑700米。</text></view>
			<view class="title1"><text>特洛伊斑马：连续换乘7种不同动物（7草原）。</text></view>
			<view class="title1"><text>油炸狮：用同一只狮子连续吃30个动物（可复活）。</text></view>
			<view class="title1"><text>机械秃鹰：1400米以后中间的大石头上（长颈鹿，大象狂暴，其他秃鹰）。</text></view>
			<view class="pic"><image class="img" src="/static/dongwuyuan/xiyou.png" mode="aspectFit"/></view>
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