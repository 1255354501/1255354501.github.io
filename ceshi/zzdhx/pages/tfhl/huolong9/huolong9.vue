<template>
	<view class="content">
		<view class="title"><text>火龙狩猎战</text></view>
		<view class="text-area">
			<view class="text-title"><text>一张神秘的委托书被贴在了黄金港的怪物狩猎告示板上。遵循着它的指引，冒险者一路来到太阳神草原与一只自称艾露猫的奇怪兽人相遇了。委托人艾露猫告诉冒险者在这太阳神草原的西北部潜伏着一只名为火龙的可怕怪物。冒险者拿着艾露猫提供的回复药“大”，决定狩猎火龙！</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/huolong90.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：大草原猎场</text></view>
		    	<view class="text-text-text"><text>任务时限：60分钟</text></view>
		    	<view class="text-text-text" style="display: flex;align-items: center;text-indent: 80rpx;">
					<view class="text-text-text"><text>队伍构成：</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/fashi.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/zhiliao.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>2</text></view>
					<view class="text-text-text1"><image src="http://s1.catelyn.info/zjxcx/zzdhx/jinzhan.png" mode="aspectFit"></image></view>
					<view class="text-text-text1"><text>4</text></view>
				</view>
				
				<view class="text-text-text"><text>超越之力：每次失败会增加10%（最多5次）</text></view>
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>神典石：15</text></view>
				<view class="text-text-text"><text>新手奖励：50</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：70级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于320</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>王在顶点沉睡</text></view>
				<view class="text-text-text"><text>战斗精英魔法导师70级</text></view>
				<view class="text-text-text"><text>对手怪物猎人</text></view>
				<view class="text-text-text"><text>黄金港X:9.7,Y:8.9</text></view>
				<view class="text-text-text"><text>前置任务：红莲之狂潮</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.火龙</text></view>
			<view class="text-text-text"><text>出啥打啥中间出头牛就莽了牛后躲尸体后面。没血吃血瓶，打完摸尸体</text></view>
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/huolong94.png" mode="aspectFit"></image></view>
				 
				
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