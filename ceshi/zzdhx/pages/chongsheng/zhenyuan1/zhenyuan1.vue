<template>
	<view class="content">
		<view class="title"><text>巴哈姆特大迷宫真源之章1</text></view>
		<view class="text-area">
			<view class="text-title"><text>路易索瓦贤者已经变成了蛮神巴哈姆特的信徒。阿莉塞为了保护艾欧泽亚，坚定了即使面对祖父也绝不退缩的决心。</text></view>
			<view class="text-title"><text>为了消灭巴哈姆特，首先需要令余下的两艘拘束舰停止活动。冒险者等人利用阿尔菲诺构筑的传送网，从北萨纳兰的卫月爪痕进入到了诸神黄昏级六号舰之中。</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhenyuan10.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view> 
		    	<view class="text-text-text"><text>任务地点：诸神黄昏级六号舰舰体中央</text></view>
					<view class="text-text-text"><text>任务时限：90分钟</text></view>
		    	<view class="text-text-text" style="display: flex;align-items: center;text-indent: 80rpx;">
					<view class="text-text-text"><text>队伍构成：</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fashi.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhiliao.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/jinzhan.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>4</text></view>
				</view>
					<view class="text-text-text"><text>超越之力：保持20%</text></view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>神典石：30</text></view>
				<view class="text-text-text"><text>新手奖励：100</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view> 
				<view class="text-text-text"><text>等级要求：50级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于110</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view> 
				<view class="text-text-text"><text>真相的碎片</text></view>
				<view class="text-text-text"><text>战斗精英魔法导师50级</text></view>
				<view class="text-text-text"><text>于里昂热</text></view>
				<view class="text-text-text"><text>沙之家X:6.1,Y:5.0前置任务：</text></view>
				<view class="text-text-text"><text>前置任务：真相与决定</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2. 伊姆都古德</text></view>
				
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhenyuan14.png" mode="aspectFit"></image></view>
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhenyuan15.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱1中的战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhenyuan16.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱2中的战利品：</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhenyuan17.png" mode="aspectFit"></image></view>
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