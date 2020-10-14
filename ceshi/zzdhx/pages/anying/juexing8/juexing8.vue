<template>
	<view class="content">
		<view class="title"><text>伊甸零式希望乐园觉醒之章4</text></view>
		<view class="text-area">
			<view class="text-title"><text>琳调查伊甸内部后发现了奇怪的水晶。看上去只是漂亮而又普通的结晶体，可是从表面窥视水晶的内部据说能看到不可思议的景象。在琳的催促下，暗之战士拿起了水晶……水晶中便映射出了暗之战士为了取回大地的属性之力所经历过的战斗景象。不过映射出的景象又与实际战斗时的经历有所不同。看来这个水晶能让人看到另外一种可能性。如今暗之战士将要再次体验围绕着伊甸所展开的最初的攻防战。</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/juexing80.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：阿特拉斯山顶</text></view>
		    	<view class="text-text-text"><text>任务时限：90分钟</text></view>
		    	<view class="text-text-text" style="display: flex;align-items: center;text-indent: 80rpx;">
					<view class="text-text-text"><text>队伍构成：224</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fashi.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhiliao.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/jinzhan.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>4</text></view>
				</view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>神典石：15</text></view>
				<view class="text-text-text"><text>新手奖励：100</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：80级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于440</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：否</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>琳的旅程</text></view>
				<view class="text-text-text"><text>战斗精英和魔法导师（除设限特职）80级</text></view>
				<view class="text-text-text"><text>琳</text></view>
				<view class="text-text-text"><text>空无大地X:6.0,Y:6.5</text></view>
				<view class="text-text-text"><text>前置任务：愤怒、再来</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text><strong>2.泰坦</strong></text></view>
			  
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/juexing84.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱1中的战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/juexing85.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱2中的战利品：</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/juexing86.png" mode="aspectFit"></image></view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad:function(){
			let self=this
			uni.getStorage({
			    key: 'ggg',
			    success: function (res) { 
					self.ggg=res.data; 
					if(res.data=="true"||res.data==true){
						const bannerAd = tt.createRewardedVideoAd({
						  adUnitId: "3gmo9echhk53v76s7h"
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
						        delta: 1
						    });
						  }
						});
					}
			    }
			}); 
		},
		methods: {
			
		}
	}
</script>

<style> 
@import url("/static/anying.css");
</style>