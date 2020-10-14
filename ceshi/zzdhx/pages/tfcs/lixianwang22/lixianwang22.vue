<template>
	<view class="content">
		<view class="title"><text>莫古力贤王歼灭战</text></view>
		<view class="text-area">
			<view class="text-title"><text>莫古力族中也有一些族人总是游离于族群之外，一个名为“莫古力家臣团”的团体正是其中之一。这个团体的成员决心将童话中的伟大贤王莫古尔·莫古十二世召唤到世间来。虽然这位贤王并没有被莫古力族当作神来崇拜，可是家臣团的强烈愿望与水晶的力量竟然成功将贤王召唤了出来。</text></view><view class="text-title"><text>这样下去，莫古力族全体都有被精炼化的危险，任何人都无法预测这一“不是蛮神的蛮神”究竟会有什么样的举动。莫古力族的库啵洛·叩普感受到了这种危机，向冒险者们下达了讨伐贤王的委托。</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/lixianwang220.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：荆棘之园</text></view>
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
				<view class="text-text-text"><text>神典石：12</text></view>
				<view class="text-text-text"><text>新手奖励：60</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：50级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于54</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>大逆不道</text></view>
				<view class="text-text-text"><text>战斗精英和魔法导师（除设限特职）50级</text></view>
				<view class="text-text-text"><text>艾·斯密·雅恩</text></view>
				<view class="text-text-text"><text>行会会长</text></view>
				<view class="text-text-text"><text>格里达尼亚旧街X:6.1,Y:10.7 </text></view>
				<view class="text-text-text"><text>前置任务：贤王驾到</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.贤王莫古尔·莫古十二世，软软之弓库普括·叩吉，毛毛之斧库普塔·咔帕，绒绒之壁库普迪·库普，茸茸之愈库普洛·奇普，绵绵之音普库嘻·皮叩，蓬蓬之障普库呐·帕叩，柔柔之力普库啦·普奇</text></view>
				<view class="text-text-text"><text>友情提示：</text></view><view class="text-text-text"><text>P2阶段MT拉住贤王即可，切勿输出，否则贤王的死亡警告将提前到来，很容易导致团灭。</text></view><view class="text-text-text"><text>ST可以将斧和壁拉到一边远离boss</text></view><view class="text-text-text"><text>DPS集火莫古力顺序：力音愈壁弓</text></view> 
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/lixianwang224.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱1中的战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/lixianwang225.png" mode="aspectFit"></image></view>
				 
				
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