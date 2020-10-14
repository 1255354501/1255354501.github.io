<template>
	<view class="content">
		<view class="title"><text>亚历山大机神城律动之章2</text></view>
		<view class="text-area">
			<view class="text-title"><text>米黛与青蓝之手接触，将«英格玛秘典»最后的断章交给了他们。大家开始怀疑她的真实身份，是三年前曾尝试召唤亚历山大的敖龙族一行人的幸存者。她真的是敌人吗……大家动摇了，但是也不能对现在的事态袖手旁观。接受了比格斯的提议，大家决定再次进攻弥达斯！</text></view>
			<view class="text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/lvdong90.png" mode="aspectFit"></image></view>
		    <view class="text-text">
				<view class="text-text-title"><text>基本信息:</text></view>
		    	<view class="text-text-text"><text>任务地点：弥达斯之袖</text></view>
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
		    </view>
			<view class="text-text">
				<view class="text-text-title"><text>战利品:</text></view>
				<view class="text-text-text"><text>神典石：10</text></view>
				<view class="text-text-text"><text>新手奖励：100</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>限制:</text></view>
				<view class="text-text-text"><text>等级要求：60级</text></view>
				<view class="text-text-text"><text>装备品级要求：高于200</text></view>
				<view class="text-text-text"><text>允许中途加入：是</text></view>
				<view class="text-text-text"><text>允许解除人数限制：是</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>1.开启条件</text></view>
				<view class="text-text-text"><text>疑惑与后悔</text></view>
				<view class="text-text-text"><text>战斗精英魔法导师60级</text></view>
				<view class="text-text-text"><text>比格斯</text></view>
				<view class="text-text-text"><text>龙堡内陆低地X:21.8,Y:18.9</text></view>
				<view class="text-text-text"><text>前置任务：小小世界的大事件</text></view>
			</view>
			<view class="text-text">
				<view class="text-text-title"><text>2.欺诈者，爆破者，争斗者，环旋者</text></view>
				<view class="text-text-text"><text>老一：随机4人点名，被点名者远离人群往场外跑，直到点名爆炸前不要面向人群，点名玩家面向哪里，爆炸后出现的机器人往哪放直线AOE。</text></view><view class="text-text-text"><text>老二：背后集合，BOSS更换零件，出现双手炮，主T回人群分摊。出现单手炮，主T原地单吃。老三：红色buff踩高低板（无脚状磁悬浮buff），紫色buff踩矮地板（无磁悬浮buff）。</text></view><view class="text-text-text"><text>老四：BOSS会全屏击退，点名远离人群，再回去集合。BOSS发红光时躲在陨石后面。</text></view>
				<view class="text-text-title"><text>掉落战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/lvdong94.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱1中的战利品:</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/lvdong95.png" mode="aspectFit"></image></view>
				<view class="" style="height: 80rpx"><text>宝箱2中的战利品：</text></view>
				<view class="text-text-pic"><image src="http://s1.catelyn.info/zjxcx/zzdhx/lvdong96.png" mode="aspectFit"></image></view>
				
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